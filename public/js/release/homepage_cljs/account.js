// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.account');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var params = cljs.core.seq(data);
var result = "?";
while(true){
if(cljs.core.empty_QMARK_(params)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(result));
} else {
var G__29841 = cljs.core.rest(params);
var G__29842 = [result,cljs.core.name(cljs.core.ffirst(params)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(params))),"&"].join('');
params = G__29841;
result = G__29842;
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
var c__25076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__25007__auto__ = ((function (c__25076__auto__){
return (function (state_29855){
var state_val_29856 = (state_29855[(1)]);
if((state_val_29856 === (1))){
var inst_29843 = homepage_cljs.account.pack_query_parameters(queryParamsData);
var inst_29844 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(postBodyData,cljs.core.cst$kw$agent,homepage_cljs.account.agent);
var inst_29845 = [cljs.core.cst$kw$json_DASH_params,cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_29846 = [inst_29844,false];
var inst_29847 = cljs.core.PersistentHashMap.fromArrays(inst_29845,inst_29846);
var inst_29848 = [homepage_cljs.account.base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29843)].join('');
var inst_29849 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_29848,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_29847], 0));
var state_29855__$1 = state_29855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29855__$1,(2),inst_29849);
} else {
if((state_val_29856 === (2))){
var inst_29851 = (state_29855[(2)]);
var inst_29852 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_29851);
var inst_29853 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_29852) : callback.call(null,inst_29852));
var state_29855__$1 = state_29855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29855__$1,inst_29853);
} else {
return null;
}
}
});})(c__25076__auto__))
;
return ((function (switch__25007__auto__,c__25076__auto__){
return (function() {
var homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__ = null;
var homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____0 = (function (){
var statearr_29857 = [null,null,null,null,null,null,null];
(statearr_29857[(0)] = homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__);

(statearr_29857[(1)] = (1));

return statearr_29857;
});
var homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____1 = (function (state_29855){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__(state_29855);
if(cljs.core.keyword_identical_QMARK_(result__25010__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29858){if((e29858 instanceof Object)){
var ex__25011__auto__ = e29858;
var statearr_29859_29861 = state_29855;
(statearr_29859_29861[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29855);

return cljs.core.cst$kw$recur;
} else {
throw e29858;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25009__auto__,cljs.core.cst$kw$recur)){
var G__29862 = state_29855;
state_29855 = G__29862;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__ = function(state_29855){
switch(arguments.length){
case 0:
return homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____0.call(this);
case 1:
return homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____1.call(this,state_29855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____0;
homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$account$backend_post_request_$_state_machine__25008__auto____1;
return homepage_cljs$account$backend_post_request_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_29860 = (f__25077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25077__auto__.cljs$core$IFn$_invoke$arity$0() : f__25077__auto__.call(null));
(statearr_29860[(6)] = c__25076__auto__);

return statearr_29860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
});
/**
 * Retrieve a user's config from the cloud and replace the current app data with it.
 *   Takes a `usr` and `psw` as strings and a `logAtom` as an optional atom to log the response.
 */
homepage_cljs.account.getConfig = (function homepage_cljs$account$getConfig(usr,psw,logAtom){
return homepage_cljs.account.backend_post_request(homepage_cljs.account.getUserConfig_endpoint,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,usr], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$password,psw], null),(function (responseBody){
var code = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(responseBody);
var config_b64 = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(responseBody));
var config_string = goog.crypt.base64.decodeString(config_b64);
var config = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(config_string);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(responseBody),(200))){
if((!((logAtom == null)))){
cljs.core.reset_BANG_(logAtom,"Config downloaded successfully");
} else {
}

var G__29863_29865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_db,config], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29863_29865) : re_frame.core.dispatch_sync.call(null,G__29863_29865));

var G__29864 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$account_DASH_updated,usr,psw,false], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29864) : re_frame.core.dispatch_sync.call(null,G__29864));
} else {
if((!((logAtom == null)))){
return cljs.core.reset_BANG_(logAtom,["Config downloaded failed with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join(''));
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
cljs.core.reset_BANG_(homepage_cljs.core.sync_icon_alpha,(1));

var config = (((targetDb == null))?cljs.core.deref(re_frame.db.app_db):targetDb);
var base64 = (function (){var G__29866 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(config);
return goog.crypt.base64.encodeString(G__29866);
})();
return homepage_cljs.account.backend_post_request(homepage_cljs.account.addUserConfig_endpoint,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,usr], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$password,psw,cljs.core.cst$kw$config,base64], null),((function (config,base64){
return (function (responseBody){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updated config ",cljs.core.count(base64)], 0));

cljs.core.reset_BANG_(homepage_cljs.core.sync_icon_alpha,(0));

if((!((logAtom == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(responseBody),(200))){
return cljs.core.reset_BANG_(logAtom,["Config uploaded successfully with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(responseBody))].join(''));
} else {
return cljs.core.reset_BANG_(logAtom,["Config uploaded failed with code ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(responseBody))].join(''));
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
var map__29867 = cljs.core.cst$kw$account.cljs$core$IFn$_invoke$arity$1(updated_db);
var map__29867__$1 = (((((!((map__29867 == null))))?(((((map__29867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29867):map__29867);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,cljs.core.cst$kw$name);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,cljs.core.cst$kw$pass);
var sync = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29867__$1,cljs.core.cst$kw$sync);
if((!(cljs.core.empty_QMARK_(name)))){
return homepage_cljs.account.addConfig(name,pass,null,updated_db);
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
var account = cljs.core.cst$kw$account.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
if((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(account))))){
return homepage_cljs.account.getConfig(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(account),cljs.core.cst$kw$pass.cljs$core$IFn$_invoke$arity$1(account),null);
} else {
return null;
}
});
/**
 * Displays the elements for when the app has a valid cloud config with a username.
 */
homepage_cljs.account.account_with_account = (function homepage_cljs$account$account_with_account(account,logAtom){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(2),"Manage account",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,homepage_cljs.style.col_black], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),["Logged in as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(account)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,homepage_cljs.style.col_black,cljs.core.cst$kw$font_DASH_size,(20)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,["Manually upload to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(account))),"'s cloud"].join(''),(function (){
return homepage_cljs.account.addConfig(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(account)),cljs.core.cst$kw$pass.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(account)),logAtom,null);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,"8px auto",cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Log out",(function (){
var G__29869_29872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_db,cljs.core.PersistentArrayMap.EMPTY], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29869_29872) : re_frame.core.dispatch_sync.call(null,G__29869_29872));

var G__29870_29873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29870_29873) : re_frame.core.dispatch_sync.call(null,G__29870_29873));

var G__29871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_changed,cljs.core.cst$kw$Account], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29871) : re_frame.core.dispatch_sync.call(null,G__29871));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,"8px auto",cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null)], null);
});
});
/**
 * Displays the elements for when the app doesn't have a cloud config.
 */
homepage_cljs.account.account_without_account = (function homepage_cljs$account$account_without_account(account,logAtom){
var usernameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var passwordAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (usernameAtom,passwordAtom){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$padding,"0px 20%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(2),"Account",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,homepage_cljs.style.col_black], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Username",usernameAtom], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Password",passwordAtom,true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Create an account",((function (usernameAtom,passwordAtom){
return (function (){
return homepage_cljs.account.addConfig(cljs.core.deref(usernameAtom),cljs.core.deref(passwordAtom),logAtom,null);
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Log in",((function (usernameAtom,passwordAtom){
return (function (){
return homepage_cljs.account.getConfig(cljs.core.deref(usernameAtom),cljs.core.deref(passwordAtom),logAtom);
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Reset data",((function (usernameAtom,passwordAtom){
return (function (){
var G__29874_29877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_db,cljs.core.PersistentArrayMap.EMPTY], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29874_29877) : re_frame.core.dispatch_sync.call(null,G__29874_29877));

var G__29875_29878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29875_29878) : re_frame.core.dispatch_sync.call(null,G__29875_29878));

var G__29876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_changed,cljs.core.cst$kw$Account], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29876) : re_frame.core.dispatch_sync.call(null,G__29876));
});})(usernameAtom,passwordAtom))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null)], null);
});
;})(usernameAtom,passwordAtom))
});
/**
 * Root of the account view, this will get called by core.cljs.
 */
homepage_cljs.account.account_main = (function homepage_cljs$account$account_main(){
var account = (function (){var G__29879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$account], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29879) : re_frame.core.subscribe.call(null,G__29879));
})();
var logAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (account,logAtom){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),"Cloud Sync",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,homepage_cljs.style.col_black,cljs.core.cst$kw$font_DASH_size,(48)], null)], null),(((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(account))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.account.account_with_account,account,logAtom], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.account.account_without_account,account,logAtom], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.deref(logAtom)], null)], null)], null);
});
;})(account,logAtom))
});
