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

(defn fetch-rss [rssName]
    (go (let [url      (str "http://feeds.feedburner.com/GamasutraNews")
              response (<! (http/get (str rss-proxy url) {:with-credentials? false}))]
            (println "FETCHED DATA")
            (rf/dispatch [:rss-fetched-data rssName (:body response)]))))



(defn is-not-a-useless-image? [data]
    (if (= (get data 0) :img) 
        (let [style (get data 1)
              img-h (int (:height style))
              img-w (int (:width style))]
            (not (or (and (not (nil? img-w)) (< img-w 100)) (and (not (nil? img-h)) (< img-h 100)))))
        true))


(defn rss-item-component [itemData]
    (fn []
        [:div {:class "rss-item"}
            ;Title
            [:h2 [:a {:href (:link itemData)} (:title itemData)]]
            ;Date
            [:p {:style {:margin 0}} (:pubDate itemData)]
            ;Contents
            (let [descriptionHtml (:description itemData)
                  descriptionData (map hc/as-hiccup (hc/parse-fragment descriptionHtml))]

                (for [thing (filter is-not-a-useless-image? descriptionData)]
                    (do (println thing)
                                        ^{:key (rand-int 999999)} thing))
                    (first (filter is-not-a-useless-image? descriptionData))
                )

            ]))

(defn rss-settings [size]
    (let []
        (fn []
            [:div {:class "settings" :style {:transform (str "scale(" @size ")")}}
                [:p "TODO"]])))

(do
(rf/dispatch [:rss-added ["Gamasutra" "http://feeds.feedburner.com/GamasutraNews"]])
(rf/dispatch [:rss-selected-changed "Gamasutra"])
)



(defn rss-feed []
    (let [feed-data (rf/subscribe [:rss-selected-data])
          selected  (rf/subscribe [:rss-selected-name])]
        (fn []
            [:div 
                (cond
                    (empty? @selected)
                        [:p "No rss selected"]
                    (nil? @feed-data)
                        (do (fetch-rss @selected)
                            [:p (str "Fetching " @selected "...")])
                    :else
                        (let [items (get-in @feed-data [:items])]
                            (println "COUNT: " (count items))
                            (for [item items]
                                ^{:key (hash (str item))} [rss-item-component item]
                            )
                        )
                    )

                ]

                )))



(defn rss-main []
    (let [settingSize (r/atom 0)]
        (fn []
            [:div {:style {:margin-top "-48px"}}
                [utils/page-settings #(swap! settingSize utils/toggleScale)]
                [rss-settings settingSize]

                [rss-feed]

                ])))






