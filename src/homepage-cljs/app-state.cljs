(ns homepage-cljs.app-state
    (:require [cljs.reader :as reader]
              [homepage-cljs.utils :as utils]
              [reagent.core :as r]
              [re-frame.core :as rf]
              [re-frame.db :as rfdb]
              [goog.crypt.base64 :as b64]
              [reagent.cookies :as ru]))

(defn local-storage-set [key val]
    (.setItem (.-localStorage js/window) key val))

(defn local-storage-get [key]
    (.getItem (.-localStorage js/window) key))


(defn app-db [] @rfdb/app-db)

(def one-month (* 60 60 24 30))
(defn save-state
    ([]
        (save-state @rfdb/app-db))
    ([data]
        (println "Saving config to localStorage...")
        (when-not (nil? (:page-current data))
            (local-storage-set "app-db" (b64/encodeString (str data))))))


(defn load-state []
    (if-let [saved-db-str (local-storage-get "app-db")]
        (do (println "Loading config from localStorage...")
            (rf/dispatch-sync [:replace-db (reader/read-string (b64/decodeString saved-db-str)) true]))
        (do (println "Initializing an empty config...")
            (rf/dispatch-sync [:initialize]))))




;; -----------------------------------------------------------------------------------------------------
;; DB Subscriptions

; --------------------------------------
; Utility
(rf/reg-sub :app-db
    (fn [db _]
        db))

(rf/reg-sub :page-current
    (fn [db _]
        (:page-current db)))


; --------------------------------------
; Account
(rf/reg-sub :account ; {:name "" :pass "" :sync false}
    (fn [db _]
        (:account db)))


; --------------------------------------
; Favorites
(rf/reg-sub :favorites ; {:categories [{:name "Social" :order 1 :link [{:name "Facebook" :link "..."}]}]}
    (fn [db _]
        (:favorites db)))

(rf/reg-sub :favorites2-categories ; ["Social" "Relax" "Work"]
    (fn [db _]
        (vec (mapv #(utils/deurlizeString (:name %)) (get-in db [:favorites :categories])))))

(rf/reg-sub :favorites2-category-links ; [{:name "Facebook" :link "..."} {:name "YouTube" :link "..."}]
    (fn [db [_ name]]
        (let [categories (get-in db [:favorites :categories])
              category (first (filter #(= (:name %) (utils/urlizeString name)) categories))]
            (vec (:links category)))))


; --------------------------------------
; Reddit
(rf/reg-sub :reddit-subreddits ;A vector of strings
    (fn [db _]
        (:subreddits (:reddit db))))

(rf/reg-sub :reddit-selected ;A string
    (fn [db _]
        (:selected (:reddit db))))


; --------------------------------------
; RSS
(rf/reg-sub :rss-feeds
    (fn [db _]
        (get-in db [:rss :feeds] {})))

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

(defn update-db-and-save
    "Executes a function, and return the result after sending the new config to the backend if the `sync` flag is active"
    [sync fn]
    (let [result (fn)]
        (save-state result)
        (when (= sync true)
            (homepage-cljs.account/updateConfig result))
        result))


; --------------------------------------
; Utility
(rf/reg-event-db :initialize 
    (fn [_ _] {:page-current :Favorites
              :account      {:name "" :pass "" :sync false}
              :reddit       {:selected "" :subreddits []}
              :favorites    {:categories []}
              :rss          {:selected "" :feeds {}}})) 

(rf/reg-event-db :replace-db
    (fn [db [_ new-db full-replace?]]
        (let [cp (:page-current db)]
            (if full-replace?
                (update-db-and-save false (fn [] new-db))
                (update-db-and-save false
                    #(assoc new-db :page-current cp))))))

(rf/reg-event-db :replace-db-no-sync
    (fn [db [_ new-db]]
        (update-db-and-save false (fn [] new-db))))

(rf/reg-event-db :page-changed
    (fn [db [_ newPage]]
        (update-db-and-save false
            #(assoc db :page-current newPage))))


; --------------------------------------
; Account
(rf/reg-event-db :account-updated
    (fn [db [_ name pass sync]]
        (update-db-and-save true
            #(assoc db :account {:name name :pass pass :sync sync}))))

; --------------------------------------
; Favorites
(defn get-categories-names [db]
    (mapv #(utils/deurlizeString (:name %)) (get-in db [:favorites :categories])))


(defn in-vector? [v item]
    (not (nil? (some #(= item %) v))))

(defn alert-and-return [message db] 
    (js/alert message)
    db)



(rf/reg-event-db :favorite2-category-added
    (fn [db [_ name]]
        (cond
            ;Category name already exists
            (in-vector? (get-categories-names db) name)
                (alert-and-return (str "A category named \"" name "\" already exists.") db)
            ;Success case
            :else 
                (let [nam (utils/urlizeString name)
                    categories (get-in db [:favorites :categories])
                    ind (count categories)
                    newCategories (conj categories {:name nam :order (inc ind) :links []})]
                    (update-db-and-save true
                        #(assoc-in db [:favorites :categories] (vec newCategories)))))))

(rf/reg-event-db :favorite2-link-added
    (fn [db [_ category name link]]
        (let [categories (get-in db [:favorites :categories])
              cateIndex (utils/index categories #(= (:name %) category))
              links (get-in categories [cateIndex :links])
              cateLinksNames (mapv #(utils/deurlizeString (:name %)) links)]
            (cond
                ;Duplicate name case
                (in-vector? cateLinksNames name)
                    (alert-and-return (str "A link named \"" name "\" already exists.") db)
                ;Default case
                :else
                    (let [nam (utils/urlizeString name)
                        cat (utils/urlizeString category)
                        lnk (utils/urlizeString link)]
                        (update-db-and-save true
                            #(update-in db [:favorites :categories cateIndex :links]
                                 conj {:name nam :link lnk})))))))

(rf/reg-event-db :favorite2-category-removed
    (fn [db [_ name]]
        (let [nam (utils/urlizeString name)
              categories (get-in db [:favorites :categories])
              newCategories (remove #(= nam (utils/urlizeString (:name %))) categories)]
            (update-db-and-save true
                #(assoc-in db [:favorites :categories] (vec newCategories))))))

(rf/reg-event-db :favorite2-link-removed
    (fn [db [_ category name]]
        (let [cat (utils/urlizeString category)
              nam (utils/urlizeString name)
              categories (get-in db [:favorites :categories])
              cateIndex  (utils/index categories #(= (:name %) cat))]
            (update-db-and-save true
                #(update-in db [:favorites :categories cateIndex :links]
                       (fn [obj] (remove (fn [link] (= (:name link) nam)) obj)))))))

(rf/reg-event-db :favorite2-categories-swapped
    (fn [db [_ cat1 cat2]]
           (let [cat1 (utils/urlizeString cat1)
                 cat2 (utils/urlizeString cat2)
                 categories (get-in db [:favorites :categories])
                 cat1-ind (:order (first (filter #(= (:name %) cat1) categories)))
                 cat2-ind (:order (first (filter #(= (:name %) cat2) categories)))
                 cat1-vec-pos (utils/index categories #(= (:name %) cat1))
                 cat2-vec-pos (utils/index categories #(= (:name %) cat2))
                 categories-new (vec (assoc-in categories     [cat1-vec-pos :order] cat2-ind))
                 categories-new (vec (assoc-in categories-new [cat2-vec-pos :order] cat1-ind))
                 categories-new (vec (sort #(< (:order %1) (:order %2)) categories-new))]
               (update-db-and-save true
                   #(assoc-in db [:favorites :categories] categories-new)))))



; --------------------------------------
; Reddit
(rf/reg-event-db :reddit-selected-changed
    (fn [db [_ newSubreddit]]
        (update-db-and-save true
            #(assoc-in db [:reddit :selected] newSubreddit))))

(rf/reg-event-db :reddit-added-subreddit
    (fn [db [_ sub]]
        (update-db-and-save true
            #(update-in db [:reddit :subreddits] conj sub))))

(rf/reg-event-db :reddit-removed-subreddit
    (fn [db [_ sub]]
        (update-db-and-save true
            #(update-in db [:reddit :subreddits] utils/remove-from-vector sub))))


; --------------------------------------
; RSS
(rf/reg-event-db :rss-selected-changed
    (fn [db [_ newRss]]
        (update-db-and-save true
            #(assoc-in db [:rss :selected] (utils/urlizeString newRss)))))

(rf/reg-event-db :rss-added
    (fn [db [_ name url]]
        (update-db-and-save true
            #(assoc-in db [:rss :feeds (utils/urlizeString name)] url))))

(rf/reg-event-db :rss-removed
    (fn [db [_ name]]
        (let [feeds (get-in db [:rss :feeds])
              newFeeds (dissoc feeds (utils/urlizeString name))]
            (update-db-and-save true
                #(assoc-in db [:rss :feeds] newFeeds)))))


















; ------------------------------------------------------------
; FAVORITES

;SCHEMA:
;   :favorites    -> {:categories [*categories*]}
;   *category*    -> {:name "Relax" :order 1 :links [*links*]}
;   *link*        -> {:name "Facebook" :link "www.facebook.com"}

;EXAMPLE:
;   {:categories [{:name "Social" :order 1 :links [{:name "Facebook" :link "..."} {:name "Linkedin" :link "..."}]} {:name "Relax" :order 2 :links [{:name "Youtube"  :link "..."}]}]}


; ------------------------------------------------------------
; REDDIT

;EXAMPLE:
;   {:selected "clojure" :subreddits ["clojure" "emacs"]}




; ------------------------------------------------------------
; RSS

;EXAMPLE:
;   {:selected "Gamasutra" :feeds {"Gamasutra" "..." "TomsHardware" "..."} }
