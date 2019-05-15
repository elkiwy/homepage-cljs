(ns homepage-cljs.rss
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [homepage-cljs.app-state :as state]
                [homepage-cljs.utils :as utils]
                [tubax.core :as tubaxcore]
                [hickory.core :as hc] 
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))




(def rss-proxy "https://api.rss2json.com/v1/api.json?rss_url=")

(defn fetch-rss [rssName rssUrl]
    (go (let [response (<! (http/get (str rss-proxy rssUrl) {:with-credentials? false}))]
            (rf/dispatch [:rss-fetched-data rssName (:body response)]))))



(defn is-not-a-useless-image? [data]
    (if (= (get data 0) :img) 
        (let [style (get data 1)
              img-h (int (:height style))
              img-w (int (:width style))]
            (not (or (and (not (nil? img-w)) (< img-w 100)) (and (not (nil? img-h)) (< img-h 100)))))
        true))






(defn is-tag? [frag tag]
    ;(println "BOH? " (first frag) " - " tag)
    (= (first frag) tag))


(defn find-tag [fragment tag]
    ;(println "---")
    (loop [frag fragment] 
        ;(println frag)
        (cond
            (empty? frag)
                nil
            (is-tag? frag tag)
                frag
            (vector? (first frag))
                (let [sub-result (find-tag (first frag) tag)]
                    (if (nil? sub-result)
                        (recur (rest frag))
                        sub-result))
            :else
                (recur (rest frag)))))


;(find-tag [:div [:p "cippo"] [:img "coso"]])

;(find-tag [:div {:class "featured-image"} [:img {:src "https://www.tomshw.it/images/images/2019/05/blood-truth-32777.768x432.jpg", :alt ""}]] :img)

(defn rss-item-component [itemData]
    (fn []
        [:div {:class "rss-item"}

            (let [descriptionHtml (:description itemData)
                  descriptionData (map hc/as-hiccup (hc/parse-fragment descriptionHtml))]
                (find-tag (first descriptionData) :img))
            ;Title
            [:h2 [:a {:href (:link itemData)} (:title itemData)]]
]))

(defn rss-settings [size]
    (let [newFeedUrlAtom (r/atom "")
          newFeedNameAtom (r/atom "")
          feeds (rf/subscribe [:rss-feeds])
          remFeedNameAtom (r/atom "")]
        (fn []
            [:div {:class "settings" :style {:transform (str "scale(" @size ")")}}
                ;Close button
                [:input {:style {:float "right"} :type "button" :value "x" :on-click #(swap! size utils/toggleScale)}]

                ;Add feed
                [:h4 {:style {:margin-bottom 0 }} "Add a feed"]
                [:input {:type "text" :value @newFeedNameAtom :placeholder "name"
                        :on-change #(reset! newFeedNameAtom (-> % .-target .-value))}]
                [:input {:type "text" :value @newFeedUrlAtom :placeholder "url"
                        :on-change #(reset! newFeedUrlAtom (-> % .-target .-value))}]
                [:input {:type "button" :value "Add"
                                        :on-click #(rf/dispatch [:rss-added @newFeedNameAtom @newFeedUrlAtom])}]

                ;Remove feed
                [:h4 {:style {:margin-bottom 0 }} "Remove a feed"]

                [:select {:on-change #(reset! remFeedNameAtom (-> % .-target .-value))} :defaultValue ""
                    [:option  ""]
                    (for [feed (seq @feeds)]
                        ^{:key (first feed)} [:option (first feed)])]

                [:input {:type "button" :value "Remove"
                                        :on-click #(rf/dispatch [:rss-removed @remFeedNameAtom])}]
                ])))

;(rf/dispatch [:rss-added ["Gamasutra" "http://feeds.feedburner.com/GamasutraNews"]])
;(rf/dispatch [:rss-selected-changed "Gamasutra"])



(defn rss-feed []
    (let [feed-data   (rf/subscribe [:rss-selected-data])
          selected    (rf/subscribe [:rss-selected-name])
          selectedUrl (rf/subscribe [:rss-selected-url])]
        (fn []
            [:div 
                (cond
                    (empty? @selected)
                        [:p "No rss selected"]
                    (nil? @feed-data)
                        (do (fetch-rss @selected @selectedUrl)
                            [:p (str "Fetching " @selected "...")])
                    :else
                        (let [items (get-in @feed-data [:items])]
                            (println "COUNT: " (count items) ", " @feed-data)
                            (for [item items]
                                ^{:key (hash (str item))} [rss-item-component item])))])))


(defn select-feed [feedName feedUrl]
    (fetch-rss feedName feedUrl)
    (rf/dispatch [:rss-selected-changed feedName]))


(defn rss-header []
    (let [feed-name (rf/subscribe [:rss-selected-name])
          feeds (rf/subscribe [:rss-feeds])]
        (fn []
            [:div
                [:div {:class "subreddits-buttons"}
                    (for [feed @feeds] 
                        (let [feedName (first feed)] ^{:key feedName}
                            [:input {:type "button" :value feedName
                                        :on-click #(select-feed feedName (second feed))}]))]
                [:h1 {:style {:margin-top -10 :text-align "center"}}
                    (str "RSS: " @feed-name)]]

            )))

(defn rss-main []
    (let [settingSize (r/atom 0)]
        (fn []
            [:div 
                [utils/page-settings #(swap! settingSize utils/toggleScale)]
                [rss-settings settingSize]

                [rss-header]
                [rss-feed]


                ])))






