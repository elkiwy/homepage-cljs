(ns homepage-cljs.ui
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [homepage-cljs.style :as style]
              [homepage-cljs.utils :as utils]))

(def item-v-margin 6)
(def item-relative-w 70)
(def item-h 22)
(def item-padding 5)

(defn custom-select-input [itemsAtom dataAtom & [extraFunc]]
    (fn [] [:select {:style {:background-color style/col-white :padding item-padding
                            :border-radius 5 :border-width 0
                            :font-size 14 :font-family "myFont"
                            :height (+ item-h (* item-padding 2))
                            :width (str "calc(" item-relative-w "% + " (* item-padding 2) "px)")  
                            :margin (str item-v-margin "px " (/ (- 100 item-relative-w) 2) "%" )
                            :color style/col-dark-gray}
                    :on-change #(do (reset! dataAtom (-> % .-target .-value))
                                    (when-not (nil? extraFunc) (extraFunc)))}
                    :defaultValue @dataAtom
            (for [item @itemsAtom] ^{:key item} [:option item])]))




(defn custom-text-input [placeholder dataAtom & [password?]]
    (fn [] [:input {:type (if password? "password" "text") :value @dataAtom :placeholder placeholder
                   :on-change #(reset! dataAtom (-> % .-target .-value))
                   :style {:background-color style/col-white :padding item-padding
                           :border-radius 5 :border-width 0
                           :font-size 14 :font-family "myFont"
                           :height item-h
                           :width (str item-relative-w "%")
                           :margin (str item-v-margin "px " (/ (- 100 item-relative-w) 2) "%" )
                           :color style/col-dark-gray}}]))




(defn custom-button [name func & [extraStyle bg-col]]
    (fn [] [:input {:type "button" :value name
                   :on-click func
                   :class (style/background-accent-hover bg-col)
                   :style (merge {:text-decoration "none"
                           :border-radius 5 :border-width 0 :color style/col-black-full
                           :font-family "myFont" :font-size 16 :font-weight "800"
                           :height (* item-h 2)
                           :margin (str item-v-margin "px " (/ (- 100 item-relative-w) 2) "%" )
                           :width (str "calc(" item-relative-w "% + " (* item-padding 2) "px)")  
                           :padding item-padding} extraStyle)}]))




(defn custom-header [level label & [extraStyle]]
    [(keyword (str "h" level)) {:class (style/text style/col-white 24 "800")
                                :style (merge {:margin-bottom 12 :text-align "center"} extraStyle)}
              label])
