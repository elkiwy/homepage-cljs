(ns homepage-cljs.favorites
    (:require-macros [cljss.core])
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [cljss.core :as ss]                
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.app-state]))



; (homepage-cljs.app-state/app-db)

(def item-v-margin 6)
(def item-relative-w 80)
(def item-h 22)

(defn custom-select-input [itemsAtom dataAtom & [extraFunc]]
    (fn [] [:select {:style {:background-color style/col-white :padding 10
                            :border-radius 5 :border-width 0
                            :font-size 14 :font-family "myFont"
                            :min-height (+ item-h 20)
                            :width (str "calc(" item-relative-w "% + 20px)")  
                            :margin (str item-v-margin "px auto")
                            :color style/col-dark-gray}
                    :on-change #(do (reset! dataAtom (-> % .-target .-value)) (when-not (nil? extraFunc) (extraFunc)))}
           :defaultValue @dataAtom
            (for [item @itemsAtom] ^{:key item} [:option item])]))

(defn custom-text-input [placeholder dataAtom]
    (fn [] [:input {:type "text" :value @dataAtom :placeholder placeholder
                   :on-change #(reset! dataAtom (-> % .-target .-value))
                   :style {:background-color style/col-white :padding 10
                           :border-radius 5 :border-width 0
                           :font-size 14 :font-family "myFont"
                           :height item-h
                           :width (str item-relative-w "%")
                           :margin (str item-v-margin "px auto")
                           :color style/col-dark-gray}}]))

(defn custom-button [name func]
    (fn [] [:input {:type "button" :value name
                   :on-click func
                   :class (style/background-accent-hover)
                   :style {:text-decoration "none"
                           :border-radius 5 :border-width 0 :color style/col-black-full
                           :font-family "myFont" :font-size 16 :font-weight "800"
                           :min-height (* item-h 2) :margin (str item-v-margin "px auto")
                           :width (str "calc(" item-relative-w "% + 20px)")  
                           :padding 10}}]))


(defn custom-header [level label]
    (fn [] [(keyword (str "h" level)) {:class (style/text style/col-white 28 "800")
                                      :style {:margin-bottom 12 :text-align "center"}}
              label]))


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
                   :style {:justify-content "center" :display "flex" :flex-direction "column" :position "fixed"
                           :width 480 :height "100%" :overflow-y "scroll" :top 0 :padding-top 210
                           :left (str "calc(100% - " (* @size 480) "px" )}}
                ;Close button
                [custom-button "Back" #(swap! size utils/toggleScale)]

                ;Category
                [custom-header 4 "Add a category"]
                [custom-text-input "Name" nameCatAtom]
                [custom-button "Add Category" #(rf/dispatch [:favorite-category-added @nameCatAtom])]

                ;Favorite
                [custom-header 4 "Add a favorite"]
                [custom-text-input "Name" nameAtom]
                [custom-text-input "URL" linkAtom]
                [custom-select-input (r/atom (map #(utils/deurlizeString (name (first %))) (seq @favs))) cateAtom]
                [custom-button "Add Favorite" #(rf/dispatch [:favorite-link-added @cateAtom @nameAtom @linkAtom])]

                ;Remove fav
                [custom-header 4 "Remove a favorite"]
                [custom-select-input (r/atom (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs)))) removeCateAtom
                    (fn [] (reset! removeFavOptionsAtom (map #(utils/deurlizeString (name (first %)))
                                                       (seq (get @favs (keyword (utils/urlizeString @removeCateAtom)))))))]
                [custom-select-input removeFavOptionsAtom removeCateAtom]
                [custom-button "Remove Favorite" #(rf/dispatch [:favorite-link-removed @removeCateAtom @removeFavAtom])]


                ;Remove category
                [custom-header 4 "Remove a Category"]
                [custom-select-input (r/atom (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs)))) removeCategoryAtom]
                [custom-button "Remove Category" #(rf/dispatch [:favorite-category-removed @removeCategoryAtom])]
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
    (let [sizeSetting (r/atom 1)]
        (fn []
            [:div 
                [utils/page-settings #(swap! sizeSetting utils/toggleScale)]
                [:h1 {:class (style/text style/col-black-full 48 "bold")
                      :style {:margin-top -10 :text-align "center"}} "Favorites"]
                [favs-comp-settings sizeSetting]
                [favs-comp-categories]])))


