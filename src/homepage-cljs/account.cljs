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
        [:div {:style {:display "flex" :flex-direction "column" :justify-content "center"}}

            [ui/custom-header 2 "Manage account" {:color style/col-black}]
            [ui/custom-header 4 (str "Logged in as " (:name @account)) {:color style/col-black :font-size 20}]
            [ui/custom-button (str "Manually upload to " (:name @account) "'s cloud") #(addConfig (:name @account) (:pass @account) logAtom nil)
                {:width "auto" :margin "8px auto" :color style/col-white} style/col-black]
            [ui/custom-button "Log out" #(do (rf/dispatch-sync [:replace-db {}]) (rf/dispatch-sync [:initialize]) (rf/dispatch-sync [:page-changed :Account]))
                {:width "auto" :margin "8px auto" :color style/col-white} style/col-black]]))




(defn account-without-account [account logAtom]
    (let [usernameAtom (r/atom "")
          passwordAtom (r/atom "")]
        (fn []
            [:div {:style {:display "flex" :flex-direction "column" :justify-content "center"
                           :padding "0px 20%"}}
                ;Register
                [ui/custom-header 2 "Account" {:color style/col-black}]

                [ui/custom-text-input "Username" usernameAtom]
                [ui/custom-text-input "Password" passwordAtom]
                [ui/custom-button "Create an account" #(addConfig @usernameAtom @passwordAtom logAtom nil)
                    {:color style/col-white} style/col-black]

                ;Login
                [ui/custom-button "Log in" #(getConfig @usernameAtom @passwordAtom logAtom)
                    {:color style/col-white} style/col-black]
                [ui/custom-button "Reset data" #(do (rf/dispatch-sync [:replace-db {}]) (rf/dispatch-sync [:initialize]) (rf/dispatch-sync [:page-changed :Account]))
                    {:color style/col-white} style/col-black]])))





(defn account-main []
    (let [account (rf/subscribe [:account])
          logAtom (r/atom "") ]
        (fn []
            [:div

                [ui/custom-header 1 "Cloud Sync" {:color style/col-black :font-size 48}]

                (if (not (empty? (:name @account)))
                    [account-with-account account logAtom]
                    [account-without-account account logAtom])

                [:div [:p @logAtom]]

                ])))


















