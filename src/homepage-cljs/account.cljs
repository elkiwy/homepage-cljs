(ns homepage-cljs.account
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [cljs.reader :as reader]
              [homepage-cljs.utils :as utils]
              [reagent.core :as r]
              [goog.crypt.base64 :as b64]
              [re-frame.core :as rf]
              [re-frame.db :as rfdb]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<!]]
              [reagent.cookies :as ru]))





(def base-url "https://test.elkiwyart.com/homepage-cljs/")
(def getUserConfig-endpoint "getUserConfig.php")
(def addUserConfig-endpoint "addUserConfig.php")
(def agent "32i1n4kbt52of0wdfsd9fj0hfqd0fb20rjekfbsdkba02")


(defn pack-query-parameters [data]
    (loop [params (seq data)
           result "?"]
        (if (empty? params)
            (clojure.string/join "" (drop-last result))
            (recur
                (rest params)
                (str result (name (ffirst params)) "="  (second (first params)) "&" )))))




(defn backend-post-request [endpoint queryParamsData postBodyData callback]
    (go (let [queryParams           (pack-query-parameters queryParamsData)
              postBodyDataWithAgent (assoc postBodyData :agent agent)
              requestData           {:json-params postBodyDataWithAgent :with-credentials? false}
              response              (<! (http/post (str base-url endpoint queryParams) requestData))]
            (callback (:body response)))))
              

(backend-post-request getUserConfig-endpoint {:user "gino2"} {:password "peppo2"} (fn [data] (println "callback!")))


;(defn fetch-rss [rssName rssUrl]
    ;(go (let [response (<! (http/get (str rss-proxy rssUrl) {:with-credentials? false}))]
            ;(rf/dispatch [:rss-fetched-data rssName (:body response)]))))





(defn getConfig [usr psw logAtom]
    (backend-post-request getUserConfig-endpoint {:user usr} {:password psw}
        (fn [responseBody]
            (let [code (:code responseBody)
                  config-b64 (:config (:data responseBody))
                  config-string (b64/decodeString config-b64)
                  config (reader/read-string config-string)]
                (if (= (:code responseBody) 200)
                    (do
                        (when (not (nil? logAtom)) (reset! logAtom (str "Config downloaded successfully")))
                        (rf/dispatch-sync [:replace-db config])
                        (rf/dispatch-sync [:account-updated usr psw false]))
                    (when (not (nil? logAtom)) (reset! logAtom (str "Config downloaded failed with code " code))))))))


(defn addConfig [usr psw logAtom targetDb]
    (let [fullConfig (if (nil? targetDb) @rfdb/app-db targetDb)
          slimConfig (update fullConfig :subreddits utils/discard-json)
          base64     (b64/encodeString (str slimConfig))]
        (backend-post-request addUserConfig-endpoint {:user usr} {:password psw :config base64}
            (fn [responseBody]
                (println "Updated config " (count base64))
                (when (not (nil? logAtom))
                    (if (= (:code responseBody) 200)
                        (reset! logAtom (str "Config uploaded successfully with code " (:code responseBody)))
                        (reset! logAtom (str "Config uploaded failed with code " (:code responseBody)))))))))


(defn updateConfig [updated-db]
    (let [{:keys [name pass sync]} (:account updated-db)]
        (when (not (empty? name))
            (addConfig name pass nil updated-db))))


(defn try-download-state []
    (let [account (:account @rfdb/app-db)]
        (when (not (empty? (:name account)))
            (getConfig (:name account) (:pass account) nil))))


(defn account-with-account [account logAtom]
    (fn []
        [:div
            [:h2 {:style {:margin-bottom 0}} "Manage account"]
            [:p {:style {:margin 0}} (str "Logged in as " (:name @account))]
            [:input {:type "button" :value (str "Manually upload to " (:name @account) "'s cloud")
                        :on-click #(addConfig (:name @account) (:pass @account) logAtom nil)}]
            [:input {:type "button" :value "Log out"
                        :on-click #(do (rf/dispatch-sync [:replace-db {}]) (rf/dispatch-sync [:initialize]) (rf/dispatch-sync [:page-changed :Account]))}]]))




(defn account-without-account [account logAtom]
    (let [usernameAtom (r/atom "")
          passwordAtom (r/atom "")]
        (fn []
            [:div
                ;Register
                [:h2 {:style {:margin-bottom 0}} "Account"]
                [:input {:type "text" :value @usernameAtom :placeholder "Username" :style {:display "block"}
                            :on-change #(reset! usernameAtom (-> % .-target .-value))}]
                [:input {:type "password" :value @passwordAtom :placeholder "Password" :style {:display "block"}
                            :on-change #(reset! passwordAtom (-> % .-target .-value))}]
                [:input {:type "button" :value "Create an account" 
                            :on-click #(addConfig @usernameAtom @passwordAtom logAtom nil)}]
                ;Login
                [:input {:type "button" :value "Log in"
                            :on-click #(getConfig @usernameAtom @passwordAtom logAtom)}]

                [:input {:type "button" :value "Reset data" :style {:display "block"}
                            :on-click #(do (rf/dispatch-sync [:replace-db {}]) (rf/dispatch-sync [:initialize]) (rf/dispatch-sync [:page-changed :Account]))}]])))





(defn account-main []
    (let [account (rf/subscribe [:account])
          logAtom (r/atom "") ]
        (fn []
            [:div
                [:h1 "Cloud Sync"]

                (if (not (empty? (:name @account)))
                    [account-with-account account logAtom]
                    [account-without-account account logAtom])

                [:div [:p @logAtom]]

                ])))


















