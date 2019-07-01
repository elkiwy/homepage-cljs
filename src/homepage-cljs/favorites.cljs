(ns homepage-cljs.favorites
    (:require-macros [cljss.core])
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [cljss.core :as ss]                
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.app-state]))



; (homepage-cljs.app-state/app-db)

(defn custom-select-input [items dataAtom]
    (fn [] 
        [:select {:on-change #(reset! dataAtom (-> % .-target .-value))} :defaultValue @dataAtom
            (for [item items] ^{:key item} [:option item])]))

(defn custom-text-input [placeholder dataAtom]
    (fn [] [:input {:type "text" :value @dataAtom :placeholder placeholder
                :on-change #(reset! dataAtom (-> % .-target .-value))}]))

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
          nameCatAtom (r/atom "")
          removeCategoryAtom (r/atom "")]
        (fn []
            ;Fix cateAtom not getting updated on fresh app start since favs was still empty
            (when (empty? (clojure.string/trim @cateAtom))
                (reset! cateAtom (if (empty? @favs) "" (key (first @favs)))))

            [:div {:class "settings" :style {:transform (str "scale(" @size ")")  }}
                ;Close button
                [:input {:style {:float "right"} :type "button" :value "x" :on-click #(swap! size utils/toggleScale)}]

                ;Category
                [:h4 {:style {:margin-bottom 0}} "Add a category"]
                [custom-text-input "Name" nameCatAtom]
                [:input {:type "button" :value "Add to Favorite"
                        :on-click #(rf/dispatch [:favorite-category-added @nameCatAtom])}]

                ;Favorite
                [:h4 {:style {:margin-bottom 0 }} "Add a favorite"]
                [custom-text-input "Name" nameAtom]
                [custom-text-input "URL" linkAtom]
                [custom-select-input (map #(utils/deurlizeString (name (first %))) (seq @favs)) cateAtom]
                [:input {:type "button" :value "Add to Favorite"
                                        :on-click #(rf/dispatch [:favorite-link-added @cateAtom @nameAtom @linkAtom])}]

                ;Remove fav
                [:h4 {:style {:margin-bottom 0 }} "Remove a favorite"]
                [custom-select-input (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs))) removeCateAtom]
                [:select {:on-change #(reset! removeFavAtom (-> % .-target .-value))} :defaultValue ""
                    [:option ""]
                    (for [fav (seq (get @favs (keyword (utils/urlizeString @removeCateAtom))))]
                        ^{:key (first fav)} [:option (utils/deurlizeString (name (first fav)))])]

                [:input {:type "button" :value "Remove from Favorite"
                                        :on-click #(rf/dispatch [:favorite-link-removed @removeCateAtom @removeFavAtom])}]

                ;Remove category
                [:h4 {:style {:margin-bottom 0 }} "Remove a Category"]
                [custom-select-input (concat [""] (map #(utils/deurlizeString (name (first %))) (seq @favs))) removeCategoryAtom]
                [:input {:type "button" :value "Remove from categories"
                                        :on-click #(rf/dispatch [:favorite-category-removed @removeCategoryAtom])}]
                ])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Favorites list sections

;Single favorite link component
(defn favs-comp-fav [name link]
    (fn []
        [:li {:style {:text-align "center" :font-size "12pt"}} [:a {:href link} name]]))

;Single category component
(defn favs-comp-category [catName hrefs]
    [:div {:class (homepage-cljs.style/background)
           :style {:margin "10px" :width "250px"}}
        [:h3 {:class "favs-category-title" } (utils/deurlizeString (name catName))]
        [:ul {:class "favs-category-list"}
            (for [[favName, favLink] hrefs]
                ^{:key favName} [favs-comp-fav (utils/deurlizeString (name favName)) favLink])]])
            
;Multiple categories generator
(defn favs-comp-categories []
    (let [favs (rf/subscribe [:favs])]
        (fn []
            [:div {:class "favs-categories"}
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

                [:h1 {:style {:margin-top -10 :text-align "center"}} "Favorites"]
                [favs-comp-settings sizeSetting]
                [favs-comp-categories]])))


