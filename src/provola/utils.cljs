(ns provola.utils
    (:require-macros [reagent.ratom :as ratom])
    (:require [reagent.core :as r]))



(defn interpolate-ease-in-out
    [duration totalT]
    (let [t (/ totalT duration)]
        (if (<= t 0.5)
            (* 16 t t t t t)
            (let [p (- (* t 2) 2)]
                (+ (* 0.5 p p p p p) 1)))))

(defn now []
  (js/Date.))



(defn animate
    "Animate a value from a value to a value in a duration with an easing function.
     The destination value will be the one that the atom will be set at when changing value.
     Returns a Reaction (atom-like behaviour)."
    [x duration]
    (let [anim (r/atom {:from @x :to @x :at @x :start (now)})]
        (ratom/reaction
            ;Check if we changed the animation to a new one, if yes reset and start the new one
            (when (not= (:to @anim) @x)
                (swap! anim assoc :start (now) :to @x :from (:at @anim) :frame 0))
            ;Animation
            (let [t     (->> @anim :start (- (now)))
                  scale (interpolate-ease-in-out duration t)
                  a     (:from @anim)
                  b     @x]

                ;If time is not over...
                (if (< t duration)
                    ;Calculate the point and prepare the next tick
                    (let [at (+ (* a (- 1 scale)) (* b scale))]
                        (r/next-tick #(swap! anim assoc :at at :frame (inc (:frame @anim))))
                        at)
                    ;Else return the destination point
                    b)))))



(defn dissoc-in [m path key]
    (update-in m path dissoc key))




(defn page-settings [f]
    [:div {:class "button-icon"}
        [:img {:src "res/icon-settings.svg" :alt "Settings"}]
        [:input {:type "button" :value "" :on-click f}]])


(defn toggleScale [val]
    (cond
        (= val 0) 1
        (= val 1) 0
        :else val))
