(ns homepage-cljs.rss
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [homepage-cljs.app-state :as state]
                [homepage-cljs.utils :as utils]
                [homepage-cljs.ui :as ui]
                [homepage-cljs.style :as style]
                [tubax.core :as tubaxcore]
                [hickory.core :as hc] 
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))




; --------------------------------------------------------------------------------------------------------
; Data fetching

(def rss-proxy "https://api.rss2json.com/v1/api.json?rss_url=")
(def data-atom (r/atom nil))



(defn fetch-rss
    "Fetch the feed to get the data and save it to the data-atom.
     Takes `rssName` as the visible name of the feed and `rssUrl` as the link to fetch."
    [rssName rssUrl]
    (go (let [response (<! (http/get (str rss-proxy rssUrl) {:with-credentials? false}))]
            (reset! data-atom [rssName (:body response)]))))


(defn select-feed
    "Function to change the current feed and fetch the data of the new one."
    [feedName feedUrl]
    (fetch-rss feedName feedUrl)
    (rf/dispatch [:rss-selected-changed feedName]))





; --------------------------------------------------------------------------------------------------------
; Data manipulation

(defn is-not-a-useless-image?
    "Predicate to check if a hiccup element is an image too small to be useful.
     Takes `data` as an hiccup element. Returns a boolean."
    [data]
    (if (= (get data 0) :img) 
        (let [style (get data 1)
              img-h (int (:height style))
              img-w (int (:width  style))]
            (not (or (and (not (nil? img-w)) (< img-w 100)) (and (not (nil? img-h)) (< img-h 100)))))
        true))



(defn is-tag?
    "Check if an hiccup fragment `frag` is of a certain `tag`."
    [frag tag]
    (= (first frag) tag))



(defn find-tag
    "Cycle through and inside a hiccup `fragment` and return the fragment that has a certain `tag`."
    [fragment tag]
    (loop [frag fragment] 
        (cond
            ;Default case with empty fragments
            (empty? frag)
                nil
            ;Default case with the current fragment being the wanted one
            (is-tag? frag tag)
                frag
            ;Recursive case with the current fragment being a vector of frags
            (vector? (first frag))
                (let [sub-result (find-tag (first frag) tag)]
                    (if (nil? sub-result)
                        (recur (rest frag))
                        sub-result))
            ;Recursive case discarding the first fragment and looping to the rest
            :else
                (recur (rest frag)))))





; --------------------------------------------------------------------------------------------------------
; React components

(defn rss-item-component
    "React component to display a single item of the rss feed.
     Takes a `itemData` map with the data of the item."
    [itemData]
    (fn []
        [:div {:class (style/background)
               :style {:clear "both" :min-height 72 :padding 12 :margin 12}}
            (let [descriptionHtml (:description itemData)
                  descriptionData (map hc/as-hiccup (hc/parse-fragment descriptionHtml))
                  component       (find-tag (first descriptionData) :img)
                  componentData   (second component)
                  componentStyle  {:float "left" :overflow "auto" :width 72 :height 72 :border-radius 2
                                   :box-shadow "4px 4px 16px -10px black" :margin-right 12}
                  styledComponent [:img (assoc componentData :style componentStyle)]]
                styledComponent)
            ;Title
            [:h2 {:style {:margin 0 :margin-bottom 16}}
                [:a {:style {:text-decoration "none"} :href (:link itemData)}
                    [:div {:class [(style/text-link style/col-white 14 "400") ]}
                        (:title itemData)]]]]))



(defn rss-settings
    "React component to display the setting panel."
    [size]
    (let [newFeedUrlAtom (r/atom "")
          newFeedNameAtom (r/atom "")
          feeds (rf/subscribe [:rss-feeds])
          remFeedNameAtom (r/atom "")]
        (fn []
            [:div {:class (style/setting-window)
                   :style {:width 480 :padding-top 16 :left (str "calc(100% - " (* @size 480) "px" )}}
                ;Close button
                [ui/custom-button "Back" #(swap! size utils/toggleScale)]

                ;Add feed
                [ui/custom-header 4 "Add a feed"]
                [ui/custom-text-input "Name" newFeedNameAtom]
                [ui/custom-text-input "url" newFeedUrlAtom]
                [ui/custom-button "Add" #(rf/dispatch [:rss-added @newFeedNameAtom @newFeedUrlAtom])]

                ;Remove feed
                [ui/custom-header 4 "Remove a feed"]
                [ui/custom-select-input (r/atom (map first (seq @feeds))) remFeedNameAtom]
                [ui/custom-button "Remove" #(rf/dispatch [:subreddit-removed @remFeedNameAtom])]
                ])))



(defn rss-feed
    "React component to handle the rss feed items."
    []
    (let [selected    (rf/subscribe [:rss-selected-name])
          selectedUrl (rf/subscribe [:rss-selected-url])]
        (fn []
            [:div 
                (cond
                    ;Case no feed is selected
                    (empty? @selected)
                        [:p "No rss selected"]

                    ;Case still fetching data
                    (nil? (second @data-atom))
                        (do (fetch-rss @selected @selectedUrl)
                            [:p (str "Fetching " @selected "...")])

                    ;Normal case with data
                    :else
                        (let [items (get-in (second @data-atom) [:items])]
                            (for [item items]
                                ^{:key (hash (str item))} [rss-item-component item])))])))



(defn rss-header
    "React component to display the header with the buttons."
    []
    (let [feed-name (rf/subscribe [:rss-selected-name])
          feeds (rf/subscribe [:rss-feeds])]
        (fn []
            [:div
                ;Subreddit buttons
                [:div {:style {:margin "0px 96px" :margin-top -26 :margin-bottom 30
                               :display "flex" :flex-wrap "wrap" :justify-content "center"}}
                    (for [feed (seq @feeds)] 
                        (let [feedName (first feed)] ^{:key feedName}
                            [ui/custom-button feedName #(select-feed feedName (second feed))
                                {:height 38 :padding 10 :width "auto"
                                 :margin 1 :color style/col-white}
                                style/col-black]))]
                ;RSS Title Hrader
                [ui/custom-header 1 (str "RSS: " @feed-name)
                    {:color style/col-black-full :font-size 48}]])))



(defn rss-main
    "React component to display the whole rss page."
    []
    (let [settingSize (r/atom 0)]
        (fn []
            [:div 
                [utils/page-settings #(swap! settingSize utils/toggleScale)]
                [rss-settings settingSize]
                [rss-header]
                [rss-feed]])))






