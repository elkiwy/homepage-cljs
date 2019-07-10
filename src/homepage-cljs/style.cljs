(ns homepage-cljs.style
    (:require-macros [cljss.core])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [cljss.core :refer [defstyles font-face]]
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

(let [rand-hue (rand-int 359)]
    (def col-accent1 (r/atom (str "hsl(" rand-hue ", 30%, 70%)")))
    (def col-accent2 (r/atom (str "hsl(" (+ rand-hue 80) ", 30%, 70%)")))
)


(font-face
  {:font-family "myFont"
   :src [{:url "css/fonts/FiraCode-Regular.woff" :format "woff"}]})

(font-face
  {:font-family "myFont"
   :font-style "bold"
   :font-weight 800
   :src [
         {:url "css/fonts/FiraCode-Medium.woff" :format "woff"}]})





(defstyles background []
    {:background-color col-black
     :box-shadow (str "4px 4px 20px -10px " col-black-full)
     :transition-property "box-shadow"
     :transition-duration "0.2s"
     :transition-timing-function "ease-in-out"
     :border-width "0px"
     :border-radius "2px"
     :border-style "solid"
     :&:hover {:box-shadow (str "8px 8px 24px -10px " col-black-full)}})

(defstyles text [col size weight]
    {:font-size (str size "pt")
     :color col
     :font-weight weight})

(defstyles text-link [col size weight]
    {:font-size (str size "pt")
     :color col
     :font-weight weight
     :text-decoration "none"
     :transition-property "color"
     :transition-duration "0.25s"
     :transition-timing-function "ease-in-out"
     :&:hover {:color @col-accent1
               :text-decoration "underline"}})

(defstyles text-button [col size weight]
    {:font-size (str size "pt")
     :color col
     :font-weight weight
     :background-color "transparent"
     :border "none"
     :font-family "myFont"
     :text-decoration "none"
     :transition-property "color"
     :transition-duration "0.25s"
     :transition-timing-function "ease-in-out"
     :&:hover {:color @col-accent1
               :text-decoration "underline"}})


(defstyles setting-window []
    {:background-color (str col-black-full "f0")
     :display "flex"
     :flex-direction "column"
     :position "fixed"
     :height "100%"
     :overflow-y "scroll"
     :top 0
     :transition-property "left"
     :transition-duration "0.25s"
     :transition-timing-function "ease-in-out"})


(defstyles background-accent-hover [& [bg-col]]
    {:background-color (if (nil? bg-col) @col-accent2 bg-col)
     :transition-property "background"
     :transition-duration "0.25s"
     :transition-timing-function "ease-in-out"
     :&:hover {:background-color @col-accent1}})





