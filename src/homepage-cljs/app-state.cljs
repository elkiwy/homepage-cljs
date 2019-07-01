(ns homepage-cljs.app-state
    (:require [cljs.reader :as reader]
              [homepage-cljs.utils :as utils]
              [reagent.core :as r]
              [re-frame.core :as rf]
              [re-frame.db :as rfdb]
              [reagent.cookies :as ru]))



(defn app-db []
    @rfdb/app-db)


(defn save-state
    ([]
        (save-state @rfdb/app-db))
    ([data]
        (when (not (nil? (:page-current data)))
            (ru/set! :reddit                  (pr-str (:reddit data)))
            (ru/set! :favs                    (pr-str (:favs data)))
            (ru/set! :account                 (pr-str (:account data)))
            (ru/set! :rss-feeds               (pr-str (:rss-feeds data)))
            (ru/set! :rss-selected            (pr-str (:rss-selected data)))
            (ru/set! :page-current            (pr-str (:page-current data))))))




;; -----------------------------------------------------------------------------------------------------
;; DB Subscriptions


(rf/reg-sub :app-db
    (fn [db _] db))

;navigation
(rf/reg-sub :page-current
    (fn [db _] (:page-current db)))


;account
(rf/reg-sub :account
    (fn [db _] (:account db)))


;favs
(rf/reg-sub :favs
    (fn [db _] (:favs db)))


;reddit
(rf/reg-sub :reddit-subreddits ;A vector of strings
    (fn [db _] (:subreddits (:reddit db))))

(rf/reg-sub :reddit-selected ;A string
    (fn [db _] (:selected (:reddit db))))


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




(defn update-db-and-save [sync fn]
    (let [result (fn)]
        (save-state result)
        (when (= sync true)
            (homepage-cljs.account/updateConfig result))
        result))



(rf/reg-event-db :initialize 
    (fn [_ _] {:page-current :Favorites
              :account {:name "" :pass "" :sync false}
              :reddit {:selected "" :subreddits []}
              :favs {}
              :rss-feeds [] ;Vector of Name-Link pairs
              :rss-selected "" ;String
              :rss-data {} ;String - Data map
})) 

(rf/reg-event-db :replace-db
    (fn [db [_ new-db full-replace?]]
        (let [cp (:page-current db)]
            (if full-replace?
                (update-db-and-save false #(assoc new-db :page-current (:page-current new-db)))
                (update-db-and-save false #(assoc new-db :page-current cp))))))


;Navigation
(rf/reg-event-db :page-changed
    (fn [db [_ newPage]] (update-db-and-save false #(assoc db :page-current newPage))))


;Reddit
(rf/reg-event-db :reddit-selected-changed
    (fn [db [_ newSubreddit]]
        (update-db-and-save false #(assoc-in db [:reddit :selected] newSubreddit))))

(rf/reg-event-db :reddit-added-subreddit
    (fn [db [_ sub]]
        (update-db-and-save true #(update-in db [:reddit :subreddits] conj sub))))

(rf/reg-event-db :reddit-removed-subreddit
    (fn [db [_ sub]]
        (update-db-and-save true #(update-in db [:reddit :subreddits] utils/remove-from-vector sub))))


;Favorites
(rf/reg-event-db :favorite-category-added
    (fn [db [_ category]]
        (update-db-and-save true #(assoc-in db [:favs (utils/urlizeString category)] {}))))

(rf/reg-event-db :favorite-category-removed
    (fn [db [_ category]]
        (update-db-and-save true #(utils/dissoc-in db [:favs] (utils/urlizeString category)))))

(rf/reg-event-db :favorite-link-added
    (fn [db [_ category name link]]
        (update-db-and-save true #(assoc-in db [:favs (utils/urlizeString category) (utils/urlizeString name)] link))))
    
(rf/reg-event-db :favorite-link-removed
    (fn [db [_ category name]]
        (update-db-and-save true #(utils/dissoc-in db [:favs (utils/urlizeString category)] (utils/urlizeString name)))))



(defn remove-vec [vec item]
    (into [] (remove #{item} vec)))

;rss
(rf/reg-event-db :rss-selected-changed
    (fn [db [_ newRss]]
        (update-db-and-save false #(assoc db :rss-selected newRss))))

(rf/reg-event-db :rss-added
    (fn [db [_ name url]]
        (update-db-and-save true #(update-in db [:rss-feeds] conj [name url]))))

(rf/reg-event-db :rss-removed
    (fn [db [_ name]]
        (let [feeds (:rss-feeds db)
              item  (first (filter #(= (first %) name) feeds))]
            (update-db-and-save true #(update-in db [:rss-feeds] remove-vec item)))))

(rf/reg-event-db :rss-fetched-data
    (fn [db [_ rss newdata]]
        (update-db-and-save false #(assoc-in db [:rss-data rss] newdata))))


;account
(rf/reg-event-db :account-updated
    (fn [db [_ name pass sync]]
        (update-db-and-save true #(assoc db :account {:name name :pass pass :sync sync}))))



;; -----------------------------------------------------------------------------------------------------
;; Save and loading

(defn load-state []
    (println "COSE" (ru/get :page-current))
    (if (nil? (reader/read-string (ru/get :page-current)))

        (do (println "Initialized")
            (rf/dispatch-sync [:initialize]))

        (let [reddit              (reader/read-string (ru/get :reddit "{:selected \"\" :subreddits []}"))
              page-current        (reader/read-string (ru/get :page-current ":Favorites"))
              favs                (reader/read-string (ru/get :favs "{}"))
              account             (reader/read-string (ru/get :account "{:name \"\" :pass \"\" :sync false}"))
              feeds               (reader/read-string (ru/get :rss-feeds "[]"))
              feed-selected       (reader/read-string (ru/get :rss-selected ""))]
            (rf/dispatch-sync [:replace-db {:page-current page-current
                                            :reddit reddit
                                            :favs favs
                                            :account account
                                            :rss-feeds feeds
                                            :rss-selected feed-selected
                                            :rss-data {}}
                                            true]))))




