(defproject homepage-cljs "0.1.0-SNAPSHOT"
    :description "A homepage made with Clojurescript, reagent, and re-frame."
    :url "https://github.com/elkiwy/homepage-cljs"
    :license {:name "Eclipse Public License"
              :url "http://www.eclipse.org/legal/epl-v10.html"}

    :dependencies [[org.clojure/clojure "1.10.0"]
                   [org.clojure/clojurescript "1.10.520"]
                   [org.clojure/data.codec "0.1.1"]
                   [funcool/tubax "0.2.0"]
                   [hickory "0.7.1"]
                   [reagent "0.8.1"]
                   [reagent-utils "0.3.2"]
                   [clj-commons/cljss "1.6.4"]
                   [re-frame "0.10.6"]
                   [cljs-http "0.1.46"]]

    :plugins [[lein-cljsbuild "1.1.7"]
              [lein-figwheel "0.5.18"]]

    :clean-targets ^{:protect false}
                    [:target-path
                        [:cljsbuild :builds :app :compiler :output-dir]
                        [:cljsbuild :builds :app :compiler :output-to]]

    :resource-paths ["public"]

    :figwheel {:http-server-root "."
               :nrepl-port 7002
               :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
               :css-dirs ["public/css"]}

    :cljsbuild {:builds {:app {:source-paths ["src" "env/dev/cljs"]
                               :compiler {:main "homepage-cljs.dev"
                                          :output-to "public/js/app.js"
                                          :output-dir "public/js/out"
                                          :asset-path   "js/out"
                                          :source-map true
                                          :optimizations :none
                                          :pretty-print  true}
                                :figwheel {:on-jsload "homepage-cljs.core/mount-root"
                                           :open-urls ["http://localhost:3449/index.html"]}}
                                :release {:source-paths ["src" "env/prod/cljs"]
                                          :compiler {:output-to "public/js/app.js"
                                                     :output-dir "public/js/release"
                                                     :optimizations :advanced
                                                     :infer-externs true
                                                     :closure-defines {homepage-cljs.core/info
                                                                          ~(str (:out (clojure.java.shell/sh "sh" "-c" "git log -1 --format=%cd")))}
                                                     :pretty-print false}}}}

    :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

    :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                     :dependencies [[binaryage/devtools "0.9.10"]
                                    [figwheel-sidecar "0.5.18"]
                                    [nrepl "0.6.0"]
                                    [cider/piggieback "0.4.0"]]}})
