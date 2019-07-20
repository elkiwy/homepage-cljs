(ns ^:figwheel-no-load homepage-cljs.dev
  (:require
    [homepage-cljs.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
