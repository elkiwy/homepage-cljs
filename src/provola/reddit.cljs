(ns provola.reddit
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require   [reagent.core :as r]
                [re-frame.core :as rf]
                [provola.app-state :as state]
                [provola.utils :as utils]
                [cljs-http.client :as http]
                [cljs.core.async :refer [<!]]))




;; -------------------------
;; Logic
(defn fetch-subreddit 
    "Fetch a subreddit and store the result into the results atom"
    [subRedditName]
    (go (let [url       (str "https://www.reddit.com/r/" subRedditName ".json")
              response  (<! (http/get url {:with-credentials? false }))]
            (println "fetched " (count (str (:body response))) " bytes from " subRedditName)
            (rf/dispatch [:subreddit-fetched-data subRedditName (:body response)]))))


(defn select-subreddit [sub-name]
    (rf/dispatch [:subreddit-selected-changed sub-name])
    (fetch-subreddit sub-name))


;; -------------------------
;; Components
(defn subreddit-header []
    (let [sub  (rf/subscribe [:subreddit-selected-name])
          subs (rf/subscribe [:subreddits])]
        (fn []
            [:div
                [:div {:class "subreddits-buttons"}
                    (for [sub @subs] 
                        (let [subName (first sub)] ^{:key subName}
                            [:input {:type "button" :value subName
                                        :on-click #(select-subreddit subName)}]))
                    ]
                (let [s (if (empty? @sub) "" (str " - " (clojure.string/capitalize @sub)))]
                    [:h1 {:style {:margin-top -10 :text-align "center"}} (str "Reddit" s)])])))


(defn subreddit-post-link [post-data]
    (fn []
        [:a {:href (:url post-data)} (:title post-data)]))



(defn subreddit-posts []
    (let [json (rf/subscribe [:subreddit-selected-data])
          selected (rf/subscribe [:subreddit-selected-name])]
        (fn []
            (cond
                (empty? @selected)
                    [:p "No subreddit selected."]
                (empty? @json)
                    (do (fetch-subreddit @selected)
                        [:p (str "Fetching \"" @selected "\" subreddit...")])
                :else 
                    (let [posts (:children (:data @json))]
                        [:ul (for [post posts] ^{:key (:id (:data post))}
                            [:li [subreddit-post-link (:data post)]])])))))
              

(defn subreddit-settings [size]
    (let [subs (rf/subscribe [:subreddits])
          newSubNameAtom (r/atom "")
          remSubNameAtom (r/atom "")
          ]
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
