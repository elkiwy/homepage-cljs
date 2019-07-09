(ns homepage-cljs.favorites
    (:require-macros [cljss.core])
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [cljss.core :as ss]                
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.ui :as ui]
              [homepage-cljs.app-state]))



; (homepage-cljs.app-state/app-db)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Add a favorite input section 

;Main input component
(defn favs-comp-settings [size]
    (let [favs (rf/subscribe [:favs])
          nameAtom (r/atom "")
          linkAtom (r/atom "")
          cateAtom (r/atom (if (empty? @favs) "" (str (key (first @favs)))))
          removeCateAtom (r/atom "")
          removeFavAtom  (r/atom "")
          removeFavOptionsAtom (r/atom [])
          nameCatAtom (r/atom "")
          removeCategoryAtom (r/atom "")]
        (fn []
            ;Fix cateAtom not getting updated on fresh app start since favs was still empty
            (when (empty? (clojure.string/trim @cateAtom))
                (reset! cateAtom (if (empty? @favs) "" (key (first @favs)))))

            [:div {:class (style/setting-window)
                   :style {:width 480 :padding-top 16 :left (str "calc(100% - " (* @size 480) "px" )}}
                ;Close button
                [ui/custom-button "Back" #(swap! size utils/toggleScale)]

                ;Category
                [ui/custom-header 4 "Add a category"]
                [ui/custom-text-input "Name" nameCatAtom]
                [ui/custom-button "Add Category" #(rf/dispatch [:favorite-category-added @nameCatAtom])]

                ;Favorite
                [ui/custom-header 4 "Add a favorite"]
                [ui/custom-text-input "Name" nameAtom]
                [ui/custom-text-input "URL" linkAtom]
                [ui/custom-select-input (r/atom (map #(utils/deurlizeString (name (first %))) (seq @favs))) cateAtom]
                [ui/custom-button "Add Favorite" #(rf/dispatch [:favorite-link-added @cateAtom @nameAtom @linkAtom])]

                ;Remove fav
                [ui/custom-header 4 "Remove a favorite"]
                [ui/custom-select-input (r/atom (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs)))) removeCateAtom
                    (fn [] (reset! removeFavOptionsAtom (map #(utils/deurlizeString (name (first %)))
                                                       (seq (get @favs (keyword (utils/urlizeString @removeCateAtom)))))))]
                [ui/custom-select-input removeFavOptionsAtom removeCateAtom]
                [ui/custom-button "Remove Favorite" #(rf/dispatch [:favorite-link-removed @removeCateAtom @removeFavAtom])]


                ;Remove category
                [ui/custom-header 4 "Remove a Category"]
                [ui/custom-select-input (r/atom (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs)))) removeCategoryAtom]
                [ui/custom-button "Remove Category" #(rf/dispatch [:favorite-category-removed @removeCategoryAtom])]
                ])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Favorites list sections

;Single favorite link component
(defn favs-comp-fav [name link]
    (fn []
        [:li {:style {:text-align "center" :margin-bottom 10}}
            [:a {:class (style/text-link style/col-white 14 "400") :href link} name]]))

;Single category component
(defn favs-comp-category [catName hrefs]
    (let [wid (r/atom 0)
          animWid (utils/animate wid 250)]
        (fn []
            [:div {:class (homepage-cljs.style/background)
                :style {:margin "10px" :width "250px"}
                :onMouseEnter #(do (reset! wid 100))
                :onMouseLeave #(do (reset! wid 0))}

                [:h3 {:class (style/text style/col-white 20 "800")
                    :style {:margin 0 :padding 16 :text-align "center"}}
                    (utils/deurlizeString (name catName))]

                [:div {:style {:margin "auto" :backgroundColor @style/col-accent1
                               :height 2 :width (str @animWid "%")}}]

                [:ul {:style {:list-style-type "none" :padding-left 0}}
                    (for [[favName, favLink] hrefs]
                        ^{:key favName} [favs-comp-fav (utils/deurlizeString (name favName)) favLink])]])))
            
;Multiple categories generator
(defn favs-comp-categories []
    (let [favs (rf/subscribe [:favs])]
        (fn []
            [:div {:style {:display "flex" :flex-wrap "wrap" :justify-content "center"}}
                (for [category (seq @favs)] ^{:key (first category)}
                    [favs-comp-category (first category) (second category)])])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Main component

;Main favorites component
(defn favs-main []
    (let [sizeSetting (r/atom 0)]
        (fn []
            [:div 
                [utils/page-settings #(swap! sizeSetting utils/toggleScale)]
                [:h1 {:class (style/text style/col-black-full 48 "bold")
                      :style {:margin-top -10 :text-align "center"}} "Favorites"]
                [favs-comp-settings sizeSetting]
                [favs-comp-categories]])))


