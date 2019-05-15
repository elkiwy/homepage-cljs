(ns homepage-cljs.app-state
    (:require [cljs.reader :as reader]
              [homepage-cljs.utils :as utils]
              [reagent.core :as r]
              [re-frame.core :as rf]
              [re-frame.db :as rfdb]
              [reagent.cookies :as ru]))


;; (app-db)

(defn app-db []
    @rfdb/app-db)

;Takes the subreddits map and outputs the map without the jsons
(defn discard-json [subreddits]
    (loop [subs (seq subreddits)
           result []]
        (if (empty? subs)
            (into {} result)
            (recur (rest subs)
                (concat result [[(first (first subs)) {:json ""}]])))))

(defn save-state
    ([]
        (save-state @rfdb/app-db))
    ([data] 
        (ru/set! :subreddits              (pr-str (discard-json (:subreddits data))))
        (ru/set! :subreddit-selected-name (pr-str (:subreddit-selected-name data)))
        (ru/set! :favs                    (pr-str (:favs data)))
        (ru/set! :rss-feeds               (pr-str (:rss-feeds data)))
        (ru/set! :rss-selected            (pr-str (:rss-selected data)))
        (ru/set! :page-current            (pr-str (:page-current data)))))



;; -----------------------------------------------------------------------------------------------------
;; DB Subscriptions


(rf/reg-sub :app-db
    (fn [db _] db))

;navigation
(rf/reg-sub :page-current
    (fn [db _] (:page-current db)))


;favs
(rf/reg-sub :favs
    (fn [db _] (:favs db)))


;reddit
(rf/reg-sub :subreddits
    (fn [db _] (:subreddits db)))

(rf/reg-sub :subreddit-selected-name
    (fn [db _] (:subreddit-selected-name db)))

(rf/reg-sub :subreddit-selected-data
    :<- [:subreddit-selected-name]
    :<- [:subreddits]
    (fn [[name subreddits] _]
        (get-in subreddits [name :json])))


;rss
(rf/reg-sub :rss-feeds
    (fn [db _] (:rss-feeds db)))

(rf/reg-sub :rss-data
    (fn [db _] (:rss-data db)))

(rf/reg-sub :rss-selected-name
    (fn [db _] (:rss-selected db)))

(rf/reg-sub :rss-selected-url
    :<- [:rss-selected-name]
    :<- [:rss-feeds]
    (fn [[name feeds] _]
        (second (first (filter #(= name (first %)) feeds)))))

(rf/reg-sub :rss-selected-data
    :<- [:rss-selected-name]
    :<- [:rss-data]
    (fn [[name rss-data] _]
        (get-in rss-data [name])))
    



;; -----------------------------------------------------------------------------------------------------
;; Events

(defn update-db-and-save [fn]
    (let [result (fn)]
        (save-state result)
        result))



(rf/reg-event-db :initialize 
    (fn [_ _] {:page-current :Favorites

              :subreddits {} :subreddit-selected-name ""

              :favs {}

              :rss-feeds [] ;Vector of Name-Link pairs
              :rss-selected "" ;String
              :rss-data {} ;String - Data map
})) 

(rf/reg-event-db :replace-db
    (fn [_ [_ newdb]] newdb))


;Navigation
(rf/reg-event-db :page-changed
    (fn [db [_ newPage]] (update-db-and-save #(assoc db :page-current newPage))))


;Reddit
(rf/reg-event-db :subreddit-selected-changed
    (fn [db [_ newSubreddit]]
        (update-db-and-save #(assoc db :subreddit-selected-name newSubreddit))))

(rf/reg-event-db :subreddit-added
    (fn [db [_ sub]]
        (println "SUB ADDED:" sub ".")
        (update-db-and-save #(assoc-in db [:subreddits sub] {:json ""}))))

(rf/reg-event-db :subreddit-removed
    (fn [db [_ sub]]
        (update-db-and-save #(utils/dissoc-in db [:subreddits] sub))))

(rf/reg-event-db :subreddit-fetched-data
    (fn [db [_ sub newdata]]
        (update-db-and-save #(assoc-in db [:subreddits sub :json] newdata))))

;Favorites
(rf/reg-event-db :favorite-category-added
    (fn [db [_ category]]
        (update-db-and-save #(assoc-in db [:favs category] {}))))

(rf/reg-event-db :favorite-link-added
    (fn [db [_ category name link]]
        (update-db-and-save #(assoc-in db [:favs category name] link))))
    
(rf/reg-event-db :favorite-link-removed
    (fn [db [_ category name]]
        (update-db-and-save #(utils/dissoc-in db [:favs category] name))))


(defn remove-vec [vec item]
    (into [] (remove #{item} vec)))

;rss
(rf/reg-event-db :rss-selected-changed
    (fn [db [_ newRss]]
        (update-db-and-save #(assoc db :rss-selected newRss))))

(rf/reg-event-db :rss-added
    (fn [db [_ name url]]
        (update-db-and-save #(update-in db [:rss-feeds] conj [name url]))))

(rf/reg-event-db :rss-removed
    (fn [db [_ name]]
        (let [feeds (:rss-feeds db)
              item  (first (filter #(= (first %) name) feeds))]
            (update-db-and-save #(update-in db [:rss-feeds] remove-vec item)))))

(rf/reg-event-db :rss-fetched-data
    (fn [db [_ rss newdata]]
        (update-db-and-save #(assoc-in db [:rss-data rss] newdata))))


;; -----------------------------------------------------------------------------------------------------
;; Save and loading

(defn load-state []
    (if (nil? (ru/get :page-current))
        (rf/dispatch-sync [:initialize])
        (let [subreddits          (reader/read-string (ru/get :subreddits "{}"))
              selected-subreddit  (reader/read-string (ru/get :subreddit-selected-name ""))
              page-current        (reader/read-string (ru/get :page-current ":Favorites"))
              favs                (reader/read-string (ru/get :favs "{}"))
              feeds               (reader/read-string (ru/get :rss-feeds "[]"))
              feed-selected       (reader/read-string (ru/get :rss-selected ""))]

            (rf/dispatch-sync [:replace-db {:page-current page-current
                                            :subreddits subreddits
                                            :subreddit-selected-name selected-subreddit
                                            :favs favs
                                            :rss-feeds feeds
                                            :rss-selected feed-selected
                                            :rss-data {}  }]))))




