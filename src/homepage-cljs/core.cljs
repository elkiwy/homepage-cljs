(ns homepage-cljs.core
    (:require-macros [cljs.core.async.macros :refer [go]])

    (:require   [reagent.core :as r]

                [clojure.pprint :as pp]

                [hickory.core :as hc] 

                [re-frame.core :as rf]
                [re-frame.db :as rfdb]
                [homepage-cljs.app-state]
                [homepage-cljs.reddit :as reddit]
                [homepage-cljs.favorites :as favs]

                [tubax.core :as tubaxcore]

                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))


(enable-console-print!)


;; -----------------------------------------------------------------------------------------------------
;; 

;Define a map to get the right component for the right current page keyword
(def pages {:Favorites favs/favs-main :Reddit reddit/subreddit-main})

(defn navbar [cp]
    [:div {:class "navbar"}
        (for [page pages] ^{:key (name (first page))}
            [:input {:class "button-simple" :style {:display "block" :margin "auto" :margin-bottom 10 :margin-top 10}
                        :type "button" :value (name (first page))
                        :on-click #(rf/dispatch [:page-changed (first page)])}])])



(def rss-proxy "https://cors-anywhere.herokuapp.com/")

(defn fetch-rss [rssAtom]
    (go (let [url      (str "http://feeds.feedburner.com/GamasutraNews")
              response (<! (http/get (str rss-proxy url) {:with-credentials? false}))
              parsed   (tubaxcore/xml->clj (:body response)) ]
            (reset! rssAtom parsed))))


(map hc/as-hiccup (hc/parse-fragment "
<p>
    <img src=\"http://www.gamasutra.com/db_area/images/news/2019/May/342471/rage2632.jpg\" align=\"left\" hspace=\"5\"/>
    Rage 2 is launching alongside a Twitch extension that lets viewers revive downed streamers and see their own names show up in-game. ...
</p>
<img src=\"http://feeds.feedburner.com/~r/GamasutraNews/~4/-hsjm3kJmjo\" height=\"1\" width=\"1\" alt=\"\"/>")) 

(def cosette ([:p {} "\n    "
  [:img {:src "http://www.gamasutra.com/db_area/images/news/2019/May/342471/rage2632.jpg",:align "left",:hspace "5"}]
  "\n    Rage 2 is launching alongside a Twitch extension that lets viewers revive downed streamers and see their own names show up in-game. ...\n"]
 "\n"
 [:img
  {:src "http://feeds.feedburner.com/~r/GamasutraNews/~4/-hsjm3kJmjo",:height "1",:width "1",:alt ""}]) )







(def boch

    {:tag :items, :attributes {}, :content [
        {:tag :item, :attributes {}, :content [
                                                {:tag :title, :attributes {}, :content ["Rage 2 aims to encourage streaming through interactive Twitch extensions"]}
                                                {:tag :link, :attributes {}, :content ["http://feedproxy.google.com/~r/GamasutraNews/~3/-hsjm3kJmjo/Rage_2_aims_to_encourage_streaming_through_interactive_Twitch_extensions.php"]}
                                                {:tag :description, :attributes {}, :content ["<p><img src=\"http://www.gamasutra.com/db_area/images/news/2019/May/342471/rage2632.jpg\" align=\"left\" hspace=\"5\"/>Rage 2 is launching alongside a Twitch extension that lets viewers revive downed streamers and see their own names show up in-game. ...</p><img src=\"http://feeds.feedburner.com/~r/GamasutraNews/~4/-hsjm3kJmjo\" height=\"1\" width=\"1\" alt=\"\"/>"]}
                                                {:tag :guid, :attributes {:isPermaLink "false"}, :content ["http://www.gamasutra.com/view/news/342471"]}
                                                {:tag :pubDate, :attributes {}, :content ["Fri, 10 May 2019 18:34:00 -0400"]}
                                                {:tag :feedburner:origLink, :attributes {}, :content ["http://www.gamasutra.com/view/news/342471/Rage_2_aims_to_encourage_streaming_through_interactive_Twitch_extensions.php"]}]}]})


(defn xml-get-contents-of [coll key]
    (get-in (first (filter #(= (:tag %) key) (:content coll))) [:content]))
(defn xml-get-content-of [coll key]
    (get-in (first (filter #(= (:tag %) key) (:content coll))) [:content 0]))

;(xml-get-contents-of boch :item)



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
            [:h2 [:a {:href (xml-get-content-of itemData :link)} (xml-get-content-of itemData :title)]]

            (let [descriptionHtml (xml-get-content-of itemData :description)
                  descriptionData (map hc/as-hiccup (hc/parse-fragment descriptionHtml))
                  descriptionData (filter is-not-a-useless-image? descriptionData)
                     ]

                (for [stuff descriptionData]


                    stuff)
            )
            [:p (xml-get-content-of itemData :pubDate)]]))


(defn rss-component [dataAtom]
    (fn []
        [:div 
            (let [channel (xml-get-contents-of @dataAtom :channel) 
                  items (filter #(= (:tag %) :item) channel)
                  ]

                (for [item items] ^{:keys (str item)}
                    [:div 
                        [rss-item-component item]
                        ;[:p (str item)]
                        ;[:p "PAZZAPUZZA"]
                        ])
            )
            ]))

(defn main-page []
    (let [currentPage (rf/subscribe [:page-current])
          db (rf/subscribe [:app-db])
          anim (r/atom (rand-int 360))
          rssAtom (r/atom {}) ]

        (fn []
            (fetch-rss rssAtom)
            [:div 
                (let [col1 (str "hsl(" @anim ", 50%, 70%)")
                      col2 (str "hsl(" (+ @anim 80) ", 50%, 70%)")
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])
                [:div {:style {:margin-top "32px" }}
                    ;[:p (str (:subreddits @db))]
                    ;[:p (str (:subreddit-selected-name @db))]

                    ;[(@currentPage pages)]

                    [rss-component rssAtom]


                    ]])))



;; -----------------------------------------------------------------------------------------------------
;; Initialize app
(defn mount-root []
    (homepage-cljs.app-state/load-state)
    (println "LOADED DB: " @rfdb/app-db)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init! []
    (mount-root))




