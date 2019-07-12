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
                [homepage-cljs.ui :as ui]
                [homepage-cljs.utils :as utils]
                [homepage-cljs.rss :as rss]
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))


(enable-console-print!)


;; -----------------------------------------------------------------------------------------------------
;; Pages navigation
(def navbar-width 128)

;Define a map to get the right component for the right current page keyword
(def pages {:Favorites favs/favs-main :Reddit reddit/subreddit-main :Rss rss/rss-main :Account account/account-main})



(defn navbar
    "React component to display the left sidebar containing the navigation items."
    [cp]
    [:div {:class (style/background) :style {:position "absolute" :top 0 :left 0
           :width navbar-width :height "100%" :padding-top 128} }

        ;App version
        [ui/custom-header 4 (str "v" utils/app-version) {:position "fixed" :font-size 14
                                                         :bottom 0 :left 16 :color style/col-white}]

        ;Navbar items
        (doall (for [page pages] ^{:key (name (first page))}
            [:input {:class (style/text-button style/col-white 12 "800")
                     :style {:background "transparent" :display "block" :margin "auto" :margin-bottom 10 :margin-top 10}
                     :type "button" :value (name (first page))
                     :on-click #(rf/dispatch [:page-changed (first page)])}]))])





;; -----------------------------------------------------------------------------------------------------
;; Root controller

(defn main-page
    "React component to hold all the other controllers"
    []
    (let [currentPage (rf/subscribe [:page-current])]
        (fn []
            [:div 
                ;App gradient background
                (let [col1 @style/col-accent1 col2 @style/col-accent2
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])

                ;Current page controller
                [:div {:style {:margin-top "32px"}}
                    [(@currentPage pages)]]])))





;; -----------------------------------------------------------------------------------------------------
;; Initialize app
(defn mount-root []
    (homepage-cljs.app-state/load-state)
    (account/try-download-state)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init! []
    (mount-root))




