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



; --------------------------------------------------------------------------------------------------------
; Costants

(def base-url "https://test.elkiwyart.com/homepage-cljs/")
(def getUserConfig-endpoint "getUserConfig.php")
(def addUserConfig-endpoint "addUserConfig.php")
(def agent "32i1n4kbt52of0wdfsd9fj0hfqd0fb20rjekfbsdkba02")



; --------------------------------------------------------------------------------------------------------
; Networking utilities

(defn pack-query-parameters
    "Create the query parameters string with the data inside the `data` map."
    [data]
    (loop [params (seq data)
           result "?"]
        (if (empty? params)
            (clojure.string/join "" (drop-last result))
            (recur
                (rest params)
                (str result (name (ffirst params)) "="  (second (first params)) "&" )))))



(defn backend-post-request
    "Create and send a POST request to a backend endpoint and trigger a callback.
     Takes an `endpoint` as string, some `queryParamsdata` and `postBodydata` as maps, and a `callback` as a function."
    [endpoint queryParamsData postBodyData callback]
    (go (let [queryParams           (pack-query-parameters queryParamsData)
              postBodyDataWithAgent (assoc postBodyData :agent agent)
              requestData           {:json-params postBodyDataWithAgent :with-credentials? false}
              response              (<! (http/post (str base-url endpoint queryParams) requestData))]
            (callback (:body response)))))
              


; --------------------------------------------------------------------------------------------------------
; Backend endpoints

(defn getConfig
    "Retrieve a user's config from the cloud and replace the current app data with it.
     Takes a `usr` and `psw` as strings and a `logAtom` as an optional atom to log the response."
    [usr psw logAtom]
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



(defn addConfig
    "Post the current app data to the cloud.
     Takes a `usr` and `psw` as strings, a `logAtom` as an optional atom to log the response,
     and a `targetDb` as optional app-data to send to the cloud instead of the current loaded one."
    [usr psw logAtom targetDb]
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



; --------------------------------------------------------------------------------------------------------
; Shorter and simpler endpoint functions 

(defn updateConfig
    "Updates the config on the cloud with a newer app config.
     Reads the user credentials from the current loaded app config.
     Takes a `updated-db` as an app data map."
    [updated-db]
    (let [{:keys [name pass sync]} (:account updated-db)]
        (when (not (empty? name))
            (addConfig name pass nil updated-db))))



(defn try-download-state
    "Tries to download a user config from the cloud,
     if successful replaces the current config with the one downloaded.
     Reads the user credentials from the current loaded app config."
    []
    (let [account (:account @rfdb/app-db)]
        (when (not (empty? (:name account)))
            (getConfig (:name account) (:pass account) nil))))



; --------------------------------------------------------------------------------------------------------
; React component for the Account view

(defn account-with-account
    [account logAtom]
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


















