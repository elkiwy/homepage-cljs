(ns homepage-cljs.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [clojure.pprint :as pp]
                [re-frame.core :as rf]
                [re-frame.db :as rfdb]
                [homepage-cljs.app-state]
                [homepage-cljs.account :as account]
                [homepage-cljs.reddit :as reddit]
                [homepage-cljs.favorites :as favs]
                [homepage-cljs.rss :as rss]
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))


(enable-console-print!)


;; -----------------------------------------------------------------------------------------------------
;; 

;Define a map to get the right component for the right current page keyword
(def pages {:Favorites favs/favs-main :Reddit reddit/subreddit-main :Rss rss/rss-main :Account account/account-main})

(defn navbar [cp]
    [:div {:class "navbar"}
        (for [page pages] ^{:key (name (first page))}
            [:input {:class "button-simple" :style {:display "block" :margin "auto" :margin-bottom 10 :margin-top 10}
                        :type "button" :value (name (first page))
                        :on-click #(rf/dispatch [:page-changed (first page)])}])])




(defn testfetch [a]
    (go (let [url "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.feedburner.com/GamasutraNews"
              response  (<! (http/get url {:with-credentials? false}))]
        (reset! a response))))
                 


(defn main-page []
    (let [currentPage (rf/subscribe [:page-current])
          db (rf/subscribe [:app-db])
          anim (r/atom (rand-int 360))
          testAtom (r/atom nil)]

        (fn []
            [:div 
                (let [col1 (str "hsl(" @anim ", 50%, 70%)")
                      col2 (str "hsl(" (+ @anim 80) ", 50%, 70%)")
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])
                [:div {:style {:margin-top "32px" }}
                    ;[:p "debug"]
                    ;[:p (str (:rss-feeds @db))]
                    ;[:p (str (:rss-selected @db))]
                    ;[:p "end debug"]

                    [(@currentPage pages)]
                    ;[account/account-main]
                    ]])))



;; -----------------------------------------------------------------------------------------------------
;; Initialize app
(defn mount-root []
    (homepage-cljs.app-state/load-state)
    (println "LOADED DB: " @rfdb/app-db)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init! []
    (mount-root))




