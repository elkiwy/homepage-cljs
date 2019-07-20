(ns homepage-cljs.account
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [cljs.reader :as reader]
              [homepage-cljs.utils :as utils]
              [homepage-cljs.style :as style]
              [homepage-cljs.ui :as ui]
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
    (reset! homepage-cljs.core/sync-icon-alpha 1)
    (let [config  (if (nil? targetDb) @rfdb/app-db targetDb)
          base64  (b64/encodeString (str config))]
        (backend-post-request addUserConfig-endpoint {:user usr} {:password psw :config base64}
            (fn [responseBody]
                (println "Updated config " (count base64))
                (reset! homepage-cljs.core/sync-icon-alpha 0)
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
    "Displays the elements for when the app has a valid cloud config with a username."
    [account logAtom]
    (fn []
        [:div {:style {:display "flex" :flex-direction "column" :justify-content "center"}}
            [ui/custom-header 2 "Manage account" {:color style/col-black}]
            [ui/custom-header 4 (str "Logged in as " (:name @account)) {:color style/col-black :font-size 20}]
            [ui/custom-button (str "Manually upload to " (:name @account) "'s cloud") #(addConfig (:name @account) (:pass @account) logAtom nil)
                {:width "auto" :margin "8px auto" :color style/col-white} style/col-black]
            [ui/custom-button "Log out" #(do (rf/dispatch-sync [:replace-db {}]) (rf/dispatch-sync [:initialize]) (rf/dispatch-sync [:page-changed :Account]))
                {:width "auto" :margin "8px auto" :color style/col-white} style/col-black]]))




(defn account-without-account
    "Displays the elements for when the app doesn't have a cloud config."
    [account logAtom]
    (let [usernameAtom (r/atom "")
          passwordAtom (r/atom "")]
        (fn []
            [:div {:style {:display "flex" :flex-direction "column" :justify-content "center"
                           :padding "0px 20%"}}
                ;Register
                [ui/custom-header 2 "Account" {:color style/col-black}]

                [:p {:class (style/text style/col-black 8 "400") :style {:text-align "justify" :line-height 1.5}} "The account will automatically store your configuration data into a database in the cloud.\nYou, and only you, will access your own data and your password will be hashed before being stored."]

                [ui/custom-text-input "Username" usernameAtom]
                [ui/custom-text-input "Password" passwordAtom true]
                [ui/custom-button "Create an account" #(addConfig @usernameAtom @passwordAtom logAtom nil)
                    {:color style/col-white} style/col-black]

                ;Login
                [ui/custom-button "Log in" #(getConfig @usernameAtom @passwordAtom logAtom)
                    {:color style/col-white} style/col-black]

                [ui/custom-button "Reset data" #(do (rf/dispatch-sync [:replace-db {}])
                                                    (rf/dispatch-sync [:initialize])
                                                    (rf/dispatch-sync [:page-changed :Account]))
                    {:color style/col-white} style/col-black]])))





(defn account-main
    "Root of the account view, this will get called by core.cljs."
    []
    (let [account (rf/subscribe [:account])
          logAtom (r/atom "") ]
        (fn []
            [:div
                ;Header
                [ui/custom-header 1 "Cloud Sync" {:color style/col-black :font-size 48}]

                ;Form fields
                (if (not (empty? (:name @account)))
                    [account-with-account account logAtom]
                    [account-without-account account logAtom])

                ;Debug log atom
                [:div [:p @logAtom]]])))


















