(ns homepage-cljs.reddit
    (:require-macros [cljss.core]
                     [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [homepage-cljs.app-state :as state]
                [homepage-cljs.utils :as utils]
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
                [:div {:class "subreddits-buttons"}
                    (for [subName @subs] ^{:key subName}
                        [:input {:type "button" :value subName
                                 :on-click #(select-subreddit subName)}])
                    ]
                (let [s (if (empty? @sub) "" (str " - " (clojure.string/capitalize @sub)))]
                    [:h1 {:style {:margin-top -10 :text-align "center"}} (str "Reddit" s)])])))


(defn subreddit-post-link [post-data]
    (fn []
        [:a {:href (:url post-data) :target "_blank"} 
            [:div {:class (style/background) :style {:padding 10 :margin "16px 48px"}}
                 (:title post-data)]]))






(defn subreddit-posts []
    (let [selected (rf/subscribe [:reddit-selected])]
        (fn []
            (cond
                (empty? @selected)
                    [:p {:style {:margin "auto" :text-align "center"}} "No subreddit selected."]

                (empty? (get-in @dataAtom [@selected]))
                    (do (fetch-subreddit @selected)
                        [:p {:style {:margin "auto" :text-align "center"}} (str "Fetching \"" @selected "\" subreddit...")])
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
            [:div {:class "settings" :style {:transform (str "scale(" @size ")")  }}
                ;Close button
                [:input {:style {:float "right"} :type "button" :value "x" :on-click #(swap! size utils/toggleScale)}]

                ;Add subreddit
                [:h4 {:style {:margin-bottom 0 }} "Add a subreddit"]

                [:input {:type "text" :value @newSubNameAtom :placeholder "subreddit-name"
                        :on-change #(reset! newSubNameAtom (-> % .-target .-value))}]
                [:input {:type "button" :value "Add"
                                        :on-click #(rf/dispatch [:subreddit-added @newSubNameAtom])}]

                ;Remove fav
                [:h4 {:style {:margin-bottom 0 }} "Remove a subreddit"]

                [:select {:on-change #(reset! remSubNameAtom (-> % .-target .-value))} :defaultValue ""
                    [:option  ""]
                    (for [subname (seq @subs)]
                        ^{:key (first subname)} [:option (first subname)])]

                [:input {:type "button" :value "Remove"
                                        :on-click #(rf/dispatch [:subreddit-removed @remSubNameAtom])}]
                ])))


(defn subreddit-main []
    (let [settingSize (r/atom 0)]
        [:div
            [utils/page-settings #(swap! settingSize utils/toggleScale)]

            [subreddit-settings settingSize]
            [subreddit-header]
            [subreddit-posts]]))
