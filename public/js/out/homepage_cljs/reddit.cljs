(ns homepage-cljs.reddit
    (:require-macros [cljss.core]
                     [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [homepage-cljs.app-state :as state]
                [homepage-cljs.utils :as utils]
                [homepage-cljs.ui :as ui]
                [homepage-cljs.style :as style]
                [cljss.core :as ss]              
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))


(def dataAtom (r/atom {"clojure" {}}))


;; -------------------------
;; Logic
(defn fetch-subreddit 
    "Fetch a subreddit and store the result into the results atom"
    [subRedditName]
    (go (let [url       (str "https://www.reddit.com/r/" subRedditName ".json")
              response  (<! (http/get url {:with-credentials? false }))]
            (println "fetched " (count (str (:body response))) " bytes from " subRedditName)
            (reset! dataAtom {subRedditName (:body response)})
            ;(rf/dispatch [:subreddit-fetched-data subRedditName (:body response)])
            )))


(defn select-subreddit [sub-name]
    (rf/dispatch [:reddit-selected-changed sub-name])
    (fetch-subreddit sub-name))


;; -------------------------
;; Components




(defn subreddit-header []
    (let [sub  (rf/subscribe [:reddit-selected])
          subs (rf/subscribe [:reddit-subreddits])]
        (fn []
            [:div
                ;Subreddit selection buttons
                [:div {:style {:margin "0px 96px" :margin-top -26 :margin-bottom 30
                               :display "flex" :flex-wrap "wrap" :justify-content "center"}}
                    (for [subName @subs] ^{:key subName}
                        [ui/custom-button subName #(select-subreddit subName)
                            {:height 38 :padding 10 :width "auto"
                             :margin 1 :color style/col-white}
                            style/col-black])]

                ;Reddit title
                [ui/custom-header 1 (if (empty? @sub) "" (str "r/" (clojure.string/capitalize @sub)))
                    {:color style/col-black-full :font-size 48}]])))




(defn subreddit-post-link [post-data]
    (fn []
        [:a {:style {:text-decoration "none"} :href (:url post-data) :target "_blank"} 

            [:div {:class [(style/text-link style/col-white 16 "400") (style/background)]
                   :style {:padding 12 :margin "16px 48px"}}
                [:p {:style {:margin-top 4}}
                    (:title post-data)]

                (let [big 16
                      small 10]
                    [:div {:style {:margin-top -16}}
                    [:span {:style {:font-size small :font-weight "400"}} (str "Up:")]
                    [:span {:style {:font-size big :font-weight "800"}} (str (:ups post-data))]
                    [:span {:style {:font-size small :font-weight "400"}} (str " Down:")]
                    [:span {:style {:font-size big :font-weight "800"}} (str (:downs post-data))]])


                ;[:p (str (keys post-data))]

                ]

            ]))






(defn subreddit-posts []
    (let [selected (rf/subscribe [:reddit-selected])]
        (fn []
            (cond
                ;Case No sub selected
                (empty? @selected)
                    [:p {:style {:margin "auto" :text-align "center"}}
                        "No subreddit selected."]

                ;Case Fetching data
                (empty? (get-in @dataAtom [@selected]))
                    (do (fetch-subreddit @selected)
                        [:p {:style {:margin "auto" :text-align "center"}}
                            (str "Fetching \"" @selected "\" subreddit...")])

                ;Case with posts
                :else 
                    (let [posts (:children (:data (get-in @dataAtom [@selected])))]
                        [:div
                            (for [post posts] ^{:key (:id (:data post))}
                                        [subreddit-post-link (:data post)])])))))



              

(defn subreddit-settings [size]
    (let [subs (rf/subscribe [:reddit-subreddits])
          newSubNameAtom (r/atom "")
          remSubNameAtom (r/atom "")]
        (fn []
            ;[:div {:class "settings" :style {:transform (str "scale(" @size ")")  }}
            [:div {:class (style/setting-window)
                   :style {:width 480 :padding-top 16 :left (str "calc(100% - " (* @size 480) "px" )}}

                ;Close button
                [ui/custom-button "Back" #(swap! size utils/toggleScale)]

                ;Add subreddit
                [ui/custom-header 4 "Add a subreddit"]
                [ui/custom-text-input "Subreddit Name" newSubNameAtom]
                [ui/custom-button "Add" #(rf/dispatch [:reddit-added-subreddit @newSubNameAtom])]

                ;Remove fav
                [ui/custom-header 4 "Remove a subreddit"]
                [ui/custom-select-input subs remSubNameAtom]
                [ui/custom-button "Remove" #(rf/dispatch [:reddit-removed-subreddit @remSubNameAtom])]])))


(defn subreddit-main []
    (let [settingSize (r/atom 0)]
        [:div
            [utils/page-settings #(swap! settingSize utils/toggleScale)]
            [subreddit-settings settingSize]
            [subreddit-header]
            [subreddit-posts]]))
