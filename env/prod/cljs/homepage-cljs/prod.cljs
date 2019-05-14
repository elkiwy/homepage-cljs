(ns homepage-cljs.prod
  (:require
    [homepage-cljs.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
