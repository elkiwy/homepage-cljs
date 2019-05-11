(ns provola.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [re-frame.db :as rfdb]
                [provola.app-state]
                [provola.reddit :as reddit]
                [provola.favorites :as favs]
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

(defn main-page []
    (let [currentPage (rf/subscribe [:page-current])
          db (rf/subscribe [:app-db])
          anim (r/atom (rand-int 360))]
        (fn []
            [:div 
                (let [col1 (str "hsl(" @anim ", 50%, 70%)")
                      col2 (str "hsl(" (+ @anim 80) ", 50%, 70%)")
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])
                [:div {:style {:margin-top "32px" }}
                    ;[:p (str (:subreddits @db))]
                    ;[:p (str (:subreddit-selected-name @db))]
                    [(@currentPage pages)]]])))



;; -----------------------------------------------------------------------------------------------------
;; Initialize app
(defn mount-root []
    (provola.app-state/load-state)
    (println "LOADED DB: " @rfdb/app-db)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init! []
    (mount-root))




