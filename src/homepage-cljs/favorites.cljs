(ns homepage-cljs.favorites
    (:require-macros [cljss.core])
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [cljss.core :as ss]                
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.ui :as ui]
              [homepage-cljs.app-state]))




; --------------------------------------------------------------------------------------------------------
; UI elements

;(defn get-favs [category]
    ;(when-not (empty? category)
        ;(let [cat (keyword (utils/urlizeString category))]
            ;(map #(utils/deurlizeString (name (first %)))
                ;(seq (get-in @(rf/subscribe [:favorites]) [cat]))))))

(defn get-favs [category]
    (map #(utils/deurlizeString (:name %))
        @(rf/subscribe [:favorites2-category-links (utils/urlizeString category)])))
                  

    ;(rf/subscribe [:favorites2-category-links "Social"])
    ;(:favorites @re-frame.db/app-db)


;Main input component
(defn favs-comp-settings
    "React component to display the setting panel for favorites page"
    [size]
    (let [categories (rf/subscribe [:favorites2-categories])

          nameCatAtom (r/atom "")

          nameAtom (r/atom "")
          linkAtom (r/atom "")
          cateAtom (r/atom (first @categories))

          removeCateAtom (r/atom (first @categories))
          removeFavAtom  (r/atom (first (get-favs @removeCateAtom)))
          removeFavOptionsAtom (r/atom (get-favs @removeCateAtom))

          removeCategoryAtom (r/atom (first @categories))]
        (fn []
            ;Fix cateAtom not getting updated on fresh app start since favs was still empty
            (when (empty? @cateAtom)
                (reset! cateAtom (first @categories)))

            [:div {:class (style/setting-window)
                   :style {:width 480 :padding-top 16 :left (str "calc(100% - " (* @size 480) "px" )}}
                ;Close button
                [ui/custom-button "Back" #(swap! size utils/toggleScale)]

                ;Category
                [ui/custom-header 4 "Add a category"]
                [ui/custom-text-input "Name" nameCatAtom]
                [ui/custom-button "Add Category" (fn [] (rf/dispatch [:favorite2-category-added @nameCatAtom]))]

                ;Favorite
                [ui/custom-header 4 "Add a favorite"]
                [ui/custom-text-input "Name" nameAtom]
                [ui/custom-text-input "URL" linkAtom]
                [ui/custom-select-input categories cateAtom]
                [ui/custom-button "Add Favorite"
                    #(rf/dispatch [:favorite2-link-added @cateAtom @nameAtom @linkAtom])]

                ;Remove fav
                [ui/custom-header 4 "Remove a favorite"]
                [ui/custom-select-input categories removeCateAtom
                    (fn [] (reset! removeFavOptionsAtom (get-favs @removeCateAtom)))]
                [ui/custom-select-input removeFavOptionsAtom removeFavAtom]
                [ui/custom-button "Remove Favorite"
                    #(rf/dispatch [:favorite2-link-removed @removeCateAtom @removeFavAtom])]

                ;Remove category
                [ui/custom-header 4 "Remove a Category"]
                [ui/custom-select-input categories removeCategoryAtom]
                [ui/custom-button "Remove Category"
                    #(rf/dispatch [:favorite2-category-removed @removeCategoryAtom])]])))




(defn favs-comp-category
    "React component to display a category block with all its links.
     Takes `catName` as the category name string."
    [catName]
    (let [wid (r/atom 0)
          links (rf/subscribe [:favorites2-category-links catName])
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
                    (doall (for [linkObj @links] ^{:key (:name linkObj)}
                        [:li {:style {:text-align "center" :margin-bottom 10}}
                            [:a {:class (style/text-link style/col-white 14 "400") :href (:link linkObj)}
                                (utils/deurlizeString (:name linkObj))]]))]])))
            


(defn favs-main
    "Root react component for the favorites page."
    []
    (let [sizeSetting (r/atom 0)
          categories (rf/subscribe [:favorites2-categories])]
        (fn []
            [:div 

                ;Setting button
                [utils/page-settings #(swap! sizeSetting utils/toggleScale)]

                ;Header
                [:h1 {:class (style/text style/col-black-full 48 "bold")
                      :style {:margin-top -10 :text-align "center"}} "Favorites"]

                ;Settings panel
                [favs-comp-settings sizeSetting]

                ;Favorites categories blocks
                [:div {:style {:display "flex" :flex-wrap "wrap" :justify-content "center"}}
                    (for [category @categories] ^{:key category}
                        [favs-comp-category category])]

                ])))


