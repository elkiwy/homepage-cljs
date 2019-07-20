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




;; -----------------------------------------------------------------------------------------------------
;; Build date info pushed from project.cljs on build time
(goog-define info  "Mon Gen 01 00:00:00 2019 +0200")

(defn format-info
    "Formats the git log string."
    [s]
    (let [ss (clojure.string/split s " ")
          s1 (clojure.string/join "_" (drop 1 (take 3 ss)))]
        (str "Build date: " s1 "_" (nth ss 4) " " (nth ss 3))))



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
        [ui/custom-header 4 (format-info info) {:position "fixed" :font-size 14
                                                :bottom 0 :left 0 :width navbar-width :color style/col-white}]
        ;Navbar items
        (doall (for [page pages] ^{:key (name (first page))}
            [:input {:class (style/text-button style/col-white 12 "800")
                     :style {:background "transparent" :display "block" :margin "auto" :margin-bottom 10 :margin-top 10}
                     :type "button" :value (name (first page))
                     :on-click #(rf/dispatch [:page-changed (first page)])}]))])



;; -----------------------------------------------------------------------------------------------------
;; Root controller

(def sync-icon-alpha (r/atom 0))

(defn main-page
    "React component to hold all the other controllers"
    []
    (let [currentPage (rf/subscribe [:page-current])
          sync-icon-alpha-anim (utils/animate sync-icon-alpha 250)]
        (fn []
            [:div 
                ;App gradient background
                (let [col1 @style/col-accent1 col2 @style/col-accent2
                      bg-img (str "linear-gradient(to bottom right, " col1 ", " col2 ")")]
                    [:div {:class "background" :style {:background-image bg-img}}
                        [navbar currentPage]])


                [:p {:style {:opacity @sync-icon-alpha-anim :position "absolute" :top -20 :left navbar-width
                             :font-size 18}}
                    "Synching..."]

                ;Current page controller
                [:div {:style {:margin-top "32px" :margin-bottom "64px"}}
                    [(@currentPage pages)]]])))



;; -----------------------------------------------------------------------------------------------------
;; Initialize app

(enable-console-print!)

(defn mount-root
    "Render root function."
    []
    (homepage-cljs.app-state/load-state)
    (account/try-download-state)
    (r/render [main-page] (.getElementById js/document "app")))

(defn init!
    "Main react root function."
    []
    (mount-root))




