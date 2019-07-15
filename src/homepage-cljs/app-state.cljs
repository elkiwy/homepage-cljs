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
            (ru/set! :reddit       (pr-str (:reddit data)))
            (ru/set! :favs         (pr-str (:favs data)))
            (ru/set! :account      (pr-str (:account data)))
            (ru/set! :rss          (pr-str (:rss data)))
            (ru/set! :page-current (pr-str (:page-current data))))))




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

(rf/reg-sub :favs-categories
    :<- [:favs]
    (fn [[favs] _]
        (if (empty? favs)
            []
            (vec (map #(utils/deurlizeString (name (first %))) (seq favs))))))




;reddit
(rf/reg-sub :reddit-subreddits ;A vector of strings
    (fn [db _] (:subreddits (:reddit db))))

(rf/reg-sub :reddit-selected ;A string
    (fn [db _] (:selected (:reddit db))))

;rss
(rf/reg-sub :rss-feeds
    (fn [db _] (get-in db [:rss :feeds] {})))

(rf/reg-sub :rss-selected-name
    (fn [db _]
        (let [default (-> (get-in db [:rss :feeds] {}) seq first str)
              name    (get-in db [:rss :selected] default)]
            (utils/deurlizeString name))))

(rf/reg-sub :rss-selected-url
    :<- [:rss-selected-name]
    :<- [:rss-feeds]
    (fn [[name feeds] _]
        (get feeds (utils/urlizeString name) "")))



;; -----------------------------------------------------------------------------------------------------
;; Events

 ;"Gamasutra"
 ;"http://feeds.feedburner.com/GamasutraNews"



;(let [db @re-frame.db/app-db
      ;db (dissoc db :rss-feeds)
      ;db (dissoc db :rss-selected)
      ;db (dissoc db :rss-data)
      ;db (dissoc db :subreddits)
      ;db (dissoc db :subreddit-selected-name)
      ;db (assoc db :rss {:selected "" :feeds {}})]
   ;(homepage-cljs.account/updateConfig db)
;)



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
              :rss {:selected "" :feeds {}}

              ;:rss-feeds [] ;Vector of Name-Link pairs
              ;:rss-selected "" ;String
              ;:rss-data {} ;String - Data map
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
        (update-db-and-save true #(assoc-in db [:reddit :selected] newSubreddit))))

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
        (update-db-and-save true #(assoc-in db [:rss :selected] (utils/urlizeString newRss)))))

(rf/reg-event-db :rss-added
    (fn [db [_ name url]]
        (update-db-and-save true
            #(assoc-in db [:rss :feeds (utils/urlizeString name)] url))))

(rf/reg-event-db :rss-removed
    (fn [db [_ name]]
        (let [feeds (get-in db [:rss :feeds])
              newFeeds (dissoc feeds (utils/urlizeString name))]
            (update-db-and-save true #(assoc-in db [:rss :feeds] newFeeds)))))



;account
(rf/reg-event-db :account-updated
    (fn [db [_ name pass sync]]
        (update-db-and-save true #(assoc db :account {:name name :pass pass :sync sync}))))



;; -----------------------------------------------------------------------------------------------------
;; Save and loading


; favorites -> {:Social {:Facebook "..." :Instagram "..."} :Relax {:Youtube "..."}}
; reddis -> {:selected "clojure" :subreddits ["clojure" "emacs"]}
; rss -> {:selected "Gamasutra" :feeds {"Gamasutra" "..." "TomsHardware" "..."} }

(defn load-state []
    (if (nil? (reader/read-string (ru/get :page-current)))
        (rf/dispatch-sync [:initialize])
        (let [reddit              (reader/read-string (ru/get :reddit "{:selected \"\" :subreddits []}"))
              page-current        (reader/read-string (ru/get :page-current ":Favorites"))
              favs                (reader/read-string (ru/get :favs "{}"))
              account             (reader/read-string (ru/get :account "{:name \"\" :pass \"\" :sync false}"))
              rss                 (reader/read-string (ru/get :rss "{:selected \"\" :feeds {}}"))]
            (rf/dispatch-sync [:replace-db {:page-current page-current
                                            :reddit reddit
                                            :favs favs
                                            :account account
                                            :rss rss}
                                            true]))))




