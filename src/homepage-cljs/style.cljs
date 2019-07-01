(ns homepage-cljs.style
    (:require-macros [cljss.core])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [cljss.core :refer [defstyles]]                
                [homepage-cljs.utils :as utils]))

(def fg1 "#000")
(def fg2 "#333")
(def bg1 "#f0f0f010")
(def bg2 "#f0f0f040")
(def bg3 "#d0d0d0f0")


(def col-white "#f8f4f0")
(def col-black "#000408e0")
(def col-black-full "#000408")
(def col-dark-gray "#303030")
(def col-medium-gray "#252228")


(defstyles background []
    {:background-color bg1
     :box-shadow (str "4px 4px 16px -10px " fg1)
     :transition-property "transform, background, box-shadow"
     :transition-duration "0.2s"
     :transition-timing-function "ease-in-out"
     :border-width "1px"
     :border-radius "2px"
     :border-style "solid"
     :&:hover {:background-color bg2
               :box-shadow (str "8px 8px 26px -10px " fg1)
               :transform "scale(1.05)"}})

