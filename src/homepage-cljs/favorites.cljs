(ns homepage-cljs.favorites
    (:require-macros [cljss.core])
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [cljss.core :as ss]                
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.app-state]))



; (homepage-cljs.app-state/app-db)



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Add a favorite input section 

;Main input component
(defn favs-comp-settings [size]
    (let [favs (rf/subscribe [:favs])
          nameAtom (r/atom "")
          linkAtom (r/atom "")
          cateAtom (r/atom (if (empty? @favs) "" (key (first @favs))))
          removeCateAtom (r/atom "")
          removeFavAtom  (r/atom "")
          nameCatAtom (r/atom "")
          removeCategoryAtom (r/atom "")
          ]
        (fn []
            ;Fix cateAtom not getting updated on fresh app start since favs was still empty
            (when (empty? (clojure.string/trim @cateAtom))
                (reset! cateAtom (if (empty? @favs) "" (key (first @favs)))))

            [:div {:class "settings" :style {:transform (str "scale(" @size ")")  }}
                ;Close button
                [:input {:style {:float "right"} :type "button" :value "x" :on-click #(swap! size utils/toggleScale)}]

                ;Category
                [:h4 {:style {:margin-bottom 0}} "Add a category"]
                [:input {:type "text" :value @nameCatAtom :placeholder "Name"
                        :on-change #(reset! nameCatAtom (-> % .-target .-value))}]
                [:input {:type "button" :value "Add to Favorite"
                        :on-click #(rf/dispatch [:favorite-category-added @nameCatAtom])}]

                ;Favorite
                [:h4 {:style {:margin-bottom 0 }} "Add a favorite"]

                [:input {:type "text" :value @nameAtom :placeholder "Name"
                        :on-change #(reset! nameAtom (-> % .-target .-value))}]
                [:input {:type "text" :value @linkAtom :placeholder "URL"
                        :on-change #(reset! linkAtom (-> % .-target .-value))}]
                [:select {:on-change #(reset! cateAtom (-> % .-target .-value))} :defaultValue @cateAtom
                    (for [category (seq @favs)]
                        ^{:key (first category)} [:option (first category)])]
                [:input {:type "button" :value "Add to Favorite"
                                        :on-click #(rf/dispatch [:favorite-link-added @cateAtom @nameAtom @linkAtom])}]

                ;Remove fav
                [:h4 {:style {:margin-bottom 0 }} "Remove a favorite"]

                [:select {:on-change #(reset! removeCateAtom (-> % .-target .-value))} :defaultValue ""
                    [:option  ""]
                    (for [category (seq @favs)]
                        ^{:key (first category)} [:option (first category)])]

                [:select {:on-change #(reset! removeFavAtom (-> % .-target .-value))} :defaultValue ""
                    [:option ""]
                    (for [fav (seq (get-in @favs [@removeCateAtom]))]
                        ^{:key (first fav)} [:option (first fav)])]

                [:input {:type "button" :value "Remove from Favorite"
                                        :on-click #(rf/dispatch [:favorite-link-removed @removeCateAtom @removeFavAtom])}]

                ;Remove category
                [:h4 {:style {:margin-bottom 0 }} "Remove a Category"]

                [:select {:on-change #(reset! removeCategoryAtom (-> % .-target .-value))} :defaultValue ""
                    [:option  ""]
                    (for [category (seq @favs)]
                        ^{:key (first category)} [:option (first category)])]

                [:input {:type "button" :value "Remove from categories"
                                        :on-click #(rf/dispatch [:favorite-category-removed @removeCategoryAtom])}]
                ])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Favorites list sections

;Single favorite link component
(defn favs-comp-fav [name link]
    (fn []
        [:li {:style {:text-align "center"}} [:a {:href link} name]]))

;Single category component
(defn favs-comp-category [catName hrefs]
    [:div {:class (homepage-cljs.style/background)
           :style {:margin "10px" :width "150px"}}
        [:h3 {:class "favs-category-title" } catName]
        [:ul {:class "favs-category-list"}
            (for [[favName, favLink] hrefs]
                ^{:key favName} [favs-comp-fav favName favLink])]])
            
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
    (println "favs-main reloaded")
    (let [sizeSetting (r/atom 0)]
        (fn []
            [:div 
                [utils/page-settings #(swap! sizeSetting utils/toggleScale)]

                [:h1 {:style {:margin-top -10 :text-align "center"}} "Favorites"]
                [favs-comp-settings sizeSetting]
                [favs-comp-categories]])))


