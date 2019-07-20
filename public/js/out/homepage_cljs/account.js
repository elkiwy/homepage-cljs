// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.account');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.style');
goog.require('homepage_cljs.ui');
goog.require('reagent.core');
goog.require('goog.crypt.base64');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.cookies');
homepage_cljs.account.base_url = "https://test.elkiwyart.com/homepage-cljs/";
homepage_cljs.account.getUserConfig_endpoint = "getUserConfig.php";
homepage_cljs.account.addUserConfig_endpoint = "addUserConfig.php";
homepage_cljs.account.agent = "32i1n4kbt52of0wdfsd9fj0hfqd0fb20rjekfbsdkba02";
/**
 * Create the query parameters string with the data inside the `data` map.
 */
homepage_cljs.account.pack_query_parameters = (function homepage_cljs$account$pack_query_parameters(data){
var params = cljs.core.seq.call(null,data);
var result = "?";
while(true){
if(cljs.core.empty_QMARK_.call(null,params)){
return clojure.string.join.call(null,"",cljs.core.drop_last.call(null,result));
} else {
var G__43217 = cljs.core.rest.call(null,params);
var G__43218 = [result,cljs.core.name.call(null,cljs.core.ffirst.call(null,params)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,params))),"&"].join('');
params = G__43217;
result = G__43218;
continue;
}
break;
}
});
/**
 * Create and send a POST request to a backend endpoint and trigger a callback.
 *   Takes an `endpoint` as string, some `queryParamsdata` and `postBodydata` as maps, and a `callback` as a function.
 */
homepage_cljs.account.backend_post_request = (function homepage_cljs$account$backend_post_request(endpoint,queryParamsData,postBodyData,callback){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_43231){
var state_val_43232 = (state_43231[(1)]);
if((state_val_43232 === (1))){
var inst_43219 = homepage_cljs.account.pack_query_parameters.call(null,queryParamsData);
var inst_43220 = cljs.core.assoc.call(null,postBodyData,new cljs.core.Keyword(null,"agent","agent",-766455027),homepage_cljs.account.agent);
var inst_43221 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43222 = [inst_43220,false];
var inst_43223 = cljs.core.PersistentHashMap.fromArrays(inst_43221,inst_43222);
var inst_43224 = [homepage_cljs.account.base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43219)].join('');
var inst_43225 = cljs_http.client.post.call(null,inst_43224,inst_43223);
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43231__$1,(2),inst_43225);
} else {
if((state_val_43232 === (2))){
var inst_43227 = (state_43231[(2)]);
var inst_43228 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43227);
var inst_43229 = callback.call(null,inst_43228);
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43231__$1,inst_43229);
} else {
return null;
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__ = null;
var homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____0 = (function (){
var statearr_43233 = [null,null,null,null,null,null,null];
(statearr_43233[(0)] = homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__);

(statearr_43233[(1)] = (1));

return statearr_43233;
});
var homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____1 = (function (state_43231){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_43231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e43234){if((e43234 instanceof Object)){
var ex__30213__auto__ = e43234;
var statearr_43235_43237 = state_43231;
(statearr_43235_43237[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43238 = state_43231;
state_43231 = G__43238;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__ = function(state_43231){
switch(arguments.length){
case 0:
return homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____0.call(this);
case 1:
return homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____1.call(this,state_43231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____0;
homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$account$backend_post_request_$_state_machine__30210__auto____1;
return homepage_cljs$account$backend_post_request_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_43236 = f__30305__auto__.call(null);
(statearr_43236[(6)] = c__30304__auto__);

return statearr_43236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});
/**
 * Retrieve a user's config from the cloud and replace the current app data with it.
 *   Takes a `usr` and `psw` as strings and a `logAtom` as an optional atom to log the response.
 */
homepage_cljs.account.getConfig = (function homepage_cljs$account$getConfig(usr,psw,logAtom){
return homepage_cljs.account.backend_post_request.call(null,homepage_cljs.account.getUserConfig_endpoint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),usr], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password","password",417022471),psw], null),(function (responseBody){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(responseBody);
var config_b64 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(responseBody));
var config_string = goog.crypt.base64.decodeString(config_b64);
var config = cljs.reader.read_string.call(null,config_string);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(responseBody),(200))){
if((!((logAtom == null)))){
cljs.core.reset_BANG_.call(null,logAtom,"Config downloaded successfully");
} else {
}

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),config], null));

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-updated","account-updated",-1158240594),usr,psw,false], null));
} else {
if((!((logAtom == null)))){
return cljs.core.reset_BANG_.call(null,logAtom,["Config downloaded failed with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join(''));
} else {
return null;
}
}
}));
});
/**
 * Post the current app data to the cloud.
 *   Takes a `usr` and `psw` as strings, a `logAtom` as an optional atom to log the response,
 *   and a `targetDb` as optional app-data to send to the cloud instead of the current loaded one.
 */
homepage_cljs.account.addConfig = (function homepage_cljs$account$addConfig(usr,psw,logAtom,targetDb){
cljs.core.reset_BANG_.call(null,homepage_cljs.core.sync_icon_alpha,(1));

var config = (((targetDb == null))?cljs.core.deref.call(null,re_frame.db.app_db):targetDb);
var base64 = goog.crypt.base64.encodeString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(config));
return homepage_cljs.account.backend_post_request.call(null,homepage_cljs.account.addUserConfig_endpoint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),usr], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"password","password",417022471),psw,new cljs.core.Keyword(null,"config","config",994861415),base64], null),((function (config,base64){
return (function (responseBody){
cljs.core.println.call(null,"Updated config ",cljs.core.count.call(null,base64));

cljs.core.reset_BANG_.call(null,homepage_cljs.core.sync_icon_alpha,(0));

if((!((logAtom == null)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(responseBody),(200))){
return cljs.core.reset_BANG_.call(null,logAtom,["Config uploaded successfully with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(responseBody))].join(''));
} else {
return cljs.core.reset_BANG_.call(null,logAtom,["Config uploaded failed with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(responseBody))].join(''));
}
} else {
return null;
}
});})(config,base64))
);
});
/**
 * Updates the config on the cloud with a newer app config.
 *   Reads the user credentials from the current loaded app config.
 *   Takes a `updated-db` as an app data map.
 */
homepage_cljs.account.updateConfig = (function homepage_cljs$account$updateConfig(updated_db){
var map__43239 = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(updated_db);
var map__43239__$1 = (((((!((map__43239 == null))))?(((((map__43239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43239):map__43239);
var name = cljs.core.get.call(null,map__43239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var pass = cljs.core.get.call(null,map__43239__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var sync = cljs.core.get.call(null,map__43239__$1,new cljs.core.Keyword(null,"sync","sync",-624148946));
if((!(cljs.core.empty_QMARK_.call(null,name)))){
return homepage_cljs.account.addConfig.call(null,name,pass,null,updated_db);
} else {
return null;
}
});
/**
 * Tries to download a user config from the cloud,
 *   if successful replaces the current config with the one downloaded.
 *   Reads the user credentials from the current loaded app config.
 */
homepage_cljs.account.try_download_state = (function homepage_cljs$account$try_download_state(){
var account = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.db.app_db));
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account))))){
return homepage_cljs.account.getConfig.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(account),null);
} else {
return null;
}
});
/**
 * Displays the elements for when the app has a valid cloud config with a username.
 */
homepage_cljs.account.account_with_account = (function homepage_cljs$account$account_with_account(account,logAtom){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(2),"Manage account",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),["Logged in as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,account)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,["Manually upload to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,account))),"'s cloud"].join(''),(function (){
return homepage_cljs.account.addConfig.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,account)),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,account)),logAtom,null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px auto",new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Log out",(function (){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),cljs.core.PersistentArrayMap.EMPTY], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-changed","page-changed",443860984),new cljs.core.Keyword(null,"Account","Account",-268549420)], null));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px auto",new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null)], null);
});
});
/**
 * Displays the elements for when the app doesn't have a cloud config.
 */
homepage_cljs.account.account_without_account = (function homepage_cljs$account$account_without_account(account,logAtom){
var usernameAtom = reagent.core.atom.call(null,"");
var passwordAtom = reagent.core.atom.call(null,"");
return ((function (usernameAtom,passwordAtom){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(2),"Account",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text.call(null,homepage_cljs.style.col_black,(8),"400"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"justify",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.5], null)], null),"The account will automatically store your configuration data into a database in the cloud.\nYou, and only you, will access your own data and your password will be hashed before being stored."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Username",usernameAtom], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Password",passwordAtom,true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Create an account",((function (usernameAtom,passwordAtom){
return (function (){
return homepage_cljs.account.addConfig.call(null,cljs.core.deref.call(null,usernameAtom),cljs.core.deref.call(null,passwordAtom),logAtom,null);
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Log in",((function (usernameAtom,passwordAtom){
return (function (){
return homepage_cljs.account.getConfig.call(null,cljs.core.deref.call(null,usernameAtom),cljs.core.deref.call(null,passwordAtom),logAtom);
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Reset data",((function (usernameAtom,passwordAtom){
return (function (){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),cljs.core.PersistentArrayMap.EMPTY], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-changed","page-changed",443860984),new cljs.core.Keyword(null,"Account","Account",-268549420)], null));
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null)], null);
});
;})(usernameAtom,passwordAtom))
});
/**
 * Root of the account view, this will get called by core.cljs.
 */
homepage_cljs.account.account_main = (function homepage_cljs$account$account_main(){
var account = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320)], null));
var logAtom = reagent.core.atom.call(null,"");
return ((function (account,logAtom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),"Cloud Sync",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(48)], null)], null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,account))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.account.account_with_account,account,logAtom], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.account.account_without_account,account,logAtom], null))], null);
});
;})(account,logAtom))
});

//# sourceMappingURL=account.js.map?rel=1563618068765
