(ns homepage-cljs.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [clojure.pprint :as pp]
                [re-frame.core :as rf]
                [re-frame.db :as rfdb]
                [homepage-cljs.app-state]
                [homepage-cljs.account :as account]
                [homepage-cljs.style :as style]
                [homepage-cljs.reddit :as reddit]
                [homepage-cljs.favorites :as favs]
                [homepage-cljs.rss :as rss]
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))


(enable-console-print!)

(def navbar-width 128)

;; -----------------------------------------------------------------------------------------------------
;; 

;Define a map to get the right component for the right current page keyword
(def pages {:Favorites favs/favs-main :Reddit reddit/subreddit-main :Rss rss/rss-main :Account account/account-main})

(defn navbar [cp]
    [:div {:style {:backgroundColor style/col-black :position "absolute"
                   :top 0 :left 0 :width navbar-width :height "100%" :padding-top 128} }
        (doall (for [page pages] ^{:key (name (first page))}
            [:input {:class (style/text-button style/col-white 12 "800")
                     :style {:background "transparent" :display "block" :margin "auto" :margin-bottom 10 :margin-top 10}
                     :type "button" :value (name (first page))
                     :on-click #(rf/dispatch [:page-changed (first page)])}]))])



(defn main-page []
    (let [currentPage (rf/subscribe [:page-current])
          db (rf/subscribe [:app-db])
          anim (r/atom (rand-int 360))
          testAtom (r/atom nil)]
        (fn []
            [:div 
                (let [col1 @style/col-accent1
                      col2 @style/col-accent2
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])
                [:div {:style {:margin-top "32px" }}
                    [(@currentPage pages)]]])))



;; -----------------------------------------------------------------------------------------------------
;; Initialize app
(defn mount-root []
    (homepage-cljs.app-state/load-state)
    (account/try-download-state)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init! []
    (mount-root))




