// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.app_state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('homepage_cljs.utils');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('goog.crypt.base64');
goog.require('reagent.cookies');
homepage_cljs.app_state.local_storage_set = (function homepage_cljs$app_state$local_storage_set(key,val){
return window.localStorage.setItem(key,val);
});
homepage_cljs.app_state.local_storage_get = (function homepage_cljs$app_state$local_storage_get(key){
return window.localStorage.getItem(key);
});
homepage_cljs.app_state.app_db = (function homepage_cljs$app_state$app_db(){
return cljs.core.deref(re_frame.db.app_db);
});
homepage_cljs.app_state.one_month = ((((60) * (60)) * (24)) * (30));
homepage_cljs.app_state.save_state = (function homepage_cljs$app_state$save_state(var_args){
var G__29872 = arguments.length;
switch (G__29872) {
case 0:
return homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
});

homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$1 = (function (data){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Saving config to localStorage..."], 0));

if((cljs.core.cst$kw$page_DASH_current.cljs$core$IFn$_invoke$arity$1(data) == null)){
return null;
} else {
return homepage_cljs.app_state.local_storage_set("app-db",(function (){var G__29873 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(data);
return goog.crypt.base64.encodeString(G__29873);
})());
}
});

homepage_cljs.app_state.save_state.cljs$lang$maxFixedArity = 1;

homepage_cljs.app_state.load_state = (function homepage_cljs$app_state$load_state(){
var temp__5718__auto__ = homepage_cljs.app_state.local_storage_get("app-db");
if(cljs.core.truth_(temp__5718__auto__)){
var saved_db_str = temp__5718__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading config from localStorage..."], 0));

var G__29875 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_db,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.decodeString(saved_db_str)),true], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29875) : re_frame.core.dispatch_sync.call(null,G__29875));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing an empty config..."], 0));

var G__29876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29876) : re_frame.core.dispatch_sync.call(null,G__29876));
}
});
var G__29877_29879 = cljs.core.cst$kw$app_DASH_db;
var G__29878_29880 = ((function (G__29877_29879){
return (function (db,_){
return db;
});})(G__29877_29879))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29877_29879,G__29878_29880) : re_frame.core.reg_sub.call(null,G__29877_29879,G__29878_29880));
var G__29881_29883 = cljs.core.cst$kw$page_DASH_current;
var G__29882_29884 = ((function (G__29881_29883){
return (function (db,_){
return cljs.core.cst$kw$page_DASH_current.cljs$core$IFn$_invoke$arity$1(db);
});})(G__29881_29883))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29881_29883,G__29882_29884) : re_frame.core.reg_sub.call(null,G__29881_29883,G__29882_29884));
var G__29885_29887 = cljs.core.cst$kw$account;
var G__29886_29888 = ((function (G__29885_29887){
return (function (db,_){
return cljs.core.cst$kw$account.cljs$core$IFn$_invoke$arity$1(db);
});})(G__29885_29887))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29885_29887,G__29886_29888) : re_frame.core.reg_sub.call(null,G__29885_29887,G__29886_29888));
var G__29889_29891 = cljs.core.cst$kw$favorites;
var G__29890_29892 = ((function (G__29889_29891){
return (function (db,_){
return cljs.core.cst$kw$favorites.cljs$core$IFn$_invoke$arity$1(db);
});})(G__29889_29891))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29889_29891,G__29890_29892) : re_frame.core.reg_sub.call(null,G__29889_29891,G__29890_29892));
var G__29894_29896 = cljs.core.cst$kw$favorites2_DASH_categories;
var G__29895_29897 = ((function (G__29894_29896){
return (function (db,_){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__29894_29896){
return (function (p1__29893_SHARP_){
return homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29893_SHARP_));
});})(G__29894_29896))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null))));
});})(G__29894_29896))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29894_29896,G__29895_29897) : re_frame.core.reg_sub.call(null,G__29894_29896,G__29895_29897));
var G__29899_29905 = cljs.core.cst$kw$favorites2_DASH_category_DASH_links;
var G__29900_29906 = ((function (G__29899_29905){
return (function (db,p__29901){
var vec__29902 = p__29901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29902,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29902,(1),null);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var category = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (categories,vec__29902,_,name,G__29899_29905){
return (function (p1__29898_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29898_SHARP_),homepage_cljs.utils.urlizeString(name));
});})(categories,vec__29902,_,name,G__29899_29905))
,categories));
return cljs.core.vec(cljs.core.cst$kw$links.cljs$core$IFn$_invoke$arity$1(category));
});})(G__29899_29905))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29899_29905,G__29900_29906) : re_frame.core.reg_sub.call(null,G__29899_29905,G__29900_29906));
var G__29907_29909 = cljs.core.cst$kw$reddit_DASH_subreddits;
var G__29908_29910 = ((function (G__29907_29909){
return (function (db,_){
return cljs.core.cst$kw$subreddits.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reddit.cljs$core$IFn$_invoke$arity$1(db));
});})(G__29907_29909))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29907_29909,G__29908_29910) : re_frame.core.reg_sub.call(null,G__29907_29909,G__29908_29910));
var G__29911_29913 = cljs.core.cst$kw$reddit_DASH_selected;
var G__29912_29914 = ((function (G__29911_29913){
return (function (db,_){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reddit.cljs$core$IFn$_invoke$arity$1(db));
});})(G__29911_29913))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29911_29913,G__29912_29914) : re_frame.core.reg_sub.call(null,G__29911_29913,G__29912_29914));
var G__29915_29917 = cljs.core.cst$kw$rss_DASH_feeds;
var G__29916_29918 = ((function (G__29915_29917){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$feeds], null),cljs.core.PersistentArrayMap.EMPTY);
});})(G__29915_29917))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29915_29917,G__29916_29918) : re_frame.core.reg_sub.call(null,G__29915_29917,G__29916_29918));
var G__29919_29921 = cljs.core.cst$kw$rss_DASH_selected_DASH_name;
var G__29920_29922 = ((function (G__29919_29921){
return (function (db,_){
var default$ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$feeds], null),cljs.core.PersistentArrayMap.EMPTY))));
var name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$selected], null),default$);
return homepage_cljs.utils.deurlizeString(name);
});})(G__29919_29921))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29919_29921,G__29920_29922) : re_frame.core.reg_sub.call(null,G__29919_29921,G__29920_29922));
var G__29923_29933 = cljs.core.cst$kw$rss_DASH_selected_DASH_url;
var G__29924_29934 = cljs.core.cst$kw$_LT__DASH_;
var G__29925_29935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_selected_DASH_name], null);
var G__29926_29936 = cljs.core.cst$kw$_LT__DASH_;
var G__29927_29937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_feeds], null);
var G__29928_29938 = ((function (G__29923_29933,G__29924_29934,G__29925_29935,G__29926_29936,G__29927_29937){
return (function (p__29929,_){
var vec__29930 = p__29929;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930,(0),null);
var feeds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(feeds,homepage_cljs.utils.urlizeString(name),"");
});})(G__29923_29933,G__29924_29934,G__29925_29935,G__29926_29936,G__29927_29937))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__29923_29933,G__29924_29934,G__29925_29935,G__29926_29936,G__29927_29937,G__29928_29938) : re_frame.core.reg_sub.call(null,G__29923_29933,G__29924_29934,G__29925_29935,G__29926_29936,G__29927_29937,G__29928_29938));
/**
 * Executes a function, and return the result after sending the new config to the backend if the `sync` flag is active
 */
homepage_cljs.app_state.update_db_and_save = (function homepage_cljs$app_state$update_db_and_save(sync,fn){
var result = (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$1(result);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sync,true)){
homepage_cljs.account.updateConfig(result);
} else {
}

return result;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$page_DASH_current,cljs.core.cst$kw$Favorites,cljs.core.cst$kw$account,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$pass,"",cljs.core.cst$kw$sync,false], null),cljs.core.cst$kw$reddit,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected,"",cljs.core.cst$kw$subreddits,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$favorites,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$categories,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$rss,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected,"",cljs.core.cst$kw$feeds,cljs.core.PersistentArrayMap.EMPTY], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_db,(function (db,p__29939){
var vec__29940 = p__29939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940,(0),null);
var new_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940,(1),null);
var full_replace_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940,(2),null);
var cp = cljs.core.cst$kw$page_DASH_current.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(full_replace_QMARK_)){
return homepage_cljs.app_state.update_db_and_save(false,((function (cp,vec__29940,_,new_db,full_replace_QMARK_){
return (function (){
return new_db;
});})(cp,vec__29940,_,new_db,full_replace_QMARK_))
);
} else {
return homepage_cljs.app_state.update_db_and_save(false,((function (cp,vec__29940,_,new_db,full_replace_QMARK_){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_db,cljs.core.cst$kw$page_DASH_current,cp);
});})(cp,vec__29940,_,new_db,full_replace_QMARK_))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_db_DASH_no_DASH_sync,(function (db,p__29943){
var vec__29944 = p__29943;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29944,(0),null);
var new_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29944,(1),null);
return homepage_cljs.app_state.update_db_and_save(false,((function (vec__29944,_,new_db){
return (function (){
return new_db;
});})(vec__29944,_,new_db))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page_DASH_changed,(function (db,p__29947){
var vec__29948 = p__29947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29948,(0),null);
var newPage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29948,(1),null);
return homepage_cljs.app_state.update_db_and_save(false,((function (vec__29948,_,newPage){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page_DASH_current,newPage);
});})(vec__29948,_,newPage))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$account_DASH_updated,(function (db,p__29951){
var vec__29952 = p__29951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(1),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(2),null);
var sync = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(3),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__29952,_,name,pass,sync){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$account,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$pass,pass,cljs.core.cst$kw$sync,sync], null));
});})(vec__29952,_,name,pass,sync))
);
}));
homepage_cljs.app_state.get_categories_names = (function homepage_cljs$app_state$get_categories_names(db){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29955_SHARP_){
return homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29955_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null)));
});
homepage_cljs.app_state.in_vector_QMARK_ = (function homepage_cljs$app_state$in_vector_QMARK_(v,item){
return (!((cljs.core.some((function (p1__29956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__29956_SHARP_);
}),v) == null)));
});
homepage_cljs.app_state.alert_and_return = (function homepage_cljs$app_state$alert_and_return(message,db){
alert(message);

return db;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorite2_DASH_category_DASH_added,(function (db,p__29957){
var vec__29958 = p__29957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(1),null);
if(homepage_cljs.app_state.in_vector_QMARK_(homepage_cljs.app_state.get_categories_names(db),name)){
return homepage_cljs.app_state.alert_and_return(["A category named \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\" already exists."].join(''),db);
} else {
var nam = homepage_cljs.utils.urlizeString(name);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var ind = cljs.core.count(categories);
var newCategories = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,nam,cljs.core.cst$kw$order,(ind + (1)),cljs.core.cst$kw$links,cljs.core.PersistentVector.EMPTY], null));
return homepage_cljs.app_state.update_db_and_save(true,((function (nam,categories,ind,newCategories,vec__29958,_,name){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null),cljs.core.vec(newCategories));
});})(nam,categories,ind,newCategories,vec__29958,_,name))
);

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorite2_DASH_link_DASH_added,(function (db,p__29963){
var vec__29964 = p__29963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(2),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(3),null);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var cateIndex = homepage_cljs.utils.index(categories,((function (categories,vec__29964,_,category,name,link){
return (function (p1__29961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29961_SHARP_),category);
});})(categories,vec__29964,_,category,name,link))
);
var links = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(categories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cateIndex,cljs.core.cst$kw$links], null));
var cateLinksNames = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (categories,cateIndex,links,vec__29964,_,category,name,link){
return (function (p1__29962_SHARP_){
return homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29962_SHARP_));
});})(categories,cateIndex,links,vec__29964,_,category,name,link))
,links);
if(homepage_cljs.app_state.in_vector_QMARK_(cateLinksNames,name)){
return homepage_cljs.app_state.alert_and_return(["A link named \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\" already exists."].join(''),db);
} else {
var nam = homepage_cljs.utils.urlizeString(name);
var cat = homepage_cljs.utils.urlizeString(category);
var lnk = homepage_cljs.utils.urlizeString(link);
return homepage_cljs.app_state.update_db_and_save(true,((function (nam,cat,lnk,categories,cateIndex,links,cateLinksNames,vec__29964,_,category,name,link){
return (function (){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories,cateIndex,cljs.core.cst$kw$links], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,nam,cljs.core.cst$kw$link,lnk], null));
});})(nam,cat,lnk,categories,cateIndex,links,cateLinksNames,vec__29964,_,category,name,link))
);

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorite2_DASH_category_DASH_removed,(function (db,p__29968){
var vec__29969 = p__29968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29969,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29969,(1),null);
var nam = homepage_cljs.utils.urlizeString(name);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var newCategories = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (nam,categories,vec__29969,_,name){
return (function (p1__29967_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nam,homepage_cljs.utils.urlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29967_SHARP_)));
});})(nam,categories,vec__29969,_,name))
,categories);
return homepage_cljs.app_state.update_db_and_save(true,((function (nam,categories,newCategories,vec__29969,_,name){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null),cljs.core.vec(newCategories));
});})(nam,categories,newCategories,vec__29969,_,name))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorite2_DASH_link_DASH_removed,(function (db,p__29973){
var vec__29974 = p__29973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(2),null);
var cat = homepage_cljs.utils.urlizeString(category);
var nam = homepage_cljs.utils.urlizeString(name);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var cateIndex = homepage_cljs.utils.index(categories,((function (cat,nam,categories,vec__29974,_,category,name){
return (function (p1__29972_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29972_SHARP_),cat);
});})(cat,nam,categories,vec__29974,_,category,name))
);
return homepage_cljs.app_state.update_db_and_save(true,((function (cat,nam,categories,cateIndex,vec__29974,_,category,name){
return (function (){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories,cateIndex,cljs.core.cst$kw$links], null),((function (cat,nam,categories,cateIndex,vec__29974,_,category,name){
return (function (obj){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (cat,nam,categories,cateIndex,vec__29974,_,category,name){
return (function (link){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(link),nam);
});})(cat,nam,categories,cateIndex,vec__29974,_,category,name))
,obj);
});})(cat,nam,categories,cateIndex,vec__29974,_,category,name))
);
});})(cat,nam,categories,cateIndex,vec__29974,_,category,name))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorite2_DASH_categories_DASH_swapped,(function (db,p__29983){
var vec__29984 = p__29983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(0),null);
var cat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(1),null);
var cat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(2),null);
var cat1__$1 = homepage_cljs.utils.urlizeString(cat1);
var cat2__$1 = homepage_cljs.utils.urlizeString(cat2);
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null));
var cat1_ind = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cat1__$1,cat2__$1,categories,vec__29984,_,cat1,cat2){
return (function (p1__29977_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29977_SHARP_),cat1__$1);
});})(cat1__$1,cat2__$1,categories,vec__29984,_,cat1,cat2))
,categories)));
var cat2_ind = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cat1__$1,cat2__$1,categories,cat1_ind,vec__29984,_,cat1,cat2){
return (function (p1__29978_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29978_SHARP_),cat2__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,vec__29984,_,cat1,cat2))
,categories)));
var cat1_vec_pos = homepage_cljs.utils.index(categories,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,vec__29984,_,cat1,cat2){
return (function (p1__29979_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29979_SHARP_),cat1__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,vec__29984,_,cat1,cat2))
);
var cat2_vec_pos = homepage_cljs.utils.index(categories,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,vec__29984,_,cat1,cat2){
return (function (p1__29980_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__29980_SHARP_),cat2__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,vec__29984,_,cat1,cat2))
);
var categories_new = cljs.core.vec(cljs.core.assoc_in(categories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat1_vec_pos,cljs.core.cst$kw$order], null),cat2_ind));
var categories_new__$1 = cljs.core.vec(cljs.core.assoc_in(categories_new,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat2_vec_pos,cljs.core.cst$kw$order], null),cat1_ind));
var categories_new__$2 = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,vec__29984,_,cat1,cat2){
return (function (p1__29981_SHARP_,p2__29982_SHARP_){
return (cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(p1__29981_SHARP_) < cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(p2__29982_SHARP_));
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,vec__29984,_,cat1,cat2))
,categories_new__$1));
return homepage_cljs.app_state.update_db_and_save(true,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,categories_new__$2,vec__29984,_,cat1,cat2){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites,cljs.core.cst$kw$categories], null),categories_new__$2);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,categories_new__$2,vec__29984,_,cat1,cat2))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reddit_DASH_selected_DASH_changed,(function (db,p__29987){
var vec__29988 = p__29987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(0),null);
var newSubreddit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(1),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__29988,_,newSubreddit){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit,cljs.core.cst$kw$selected], null),newSubreddit);
});})(vec__29988,_,newSubreddit))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reddit_DASH_added_DASH_subreddit,(function (db,p__29991){
var vec__29992 = p__29991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29992,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29992,(1),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__29992,_,sub){
return (function (){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit,cljs.core.cst$kw$subreddits], null),cljs.core.conj,sub);
});})(vec__29992,_,sub))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reddit_DASH_removed_DASH_subreddit,(function (db,p__29995){
var vec__29996 = p__29995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29996,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29996,(1),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__29996,_,sub){
return (function (){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit,cljs.core.cst$kw$subreddits], null),homepage_cljs.utils.remove_from_vector,sub);
});})(vec__29996,_,sub))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rss_DASH_selected_DASH_changed,(function (db,p__29999){
var vec__30000 = p__29999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30000,(0),null);
var newRss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30000,(1),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__30000,_,newRss){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$selected], null),homepage_cljs.utils.urlizeString(newRss));
});})(vec__30000,_,newRss))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rss_DASH_added,(function (db,p__30003){
var vec__30004 = p__30003;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(2),null);
return homepage_cljs.app_state.update_db_and_save(true,((function (vec__30004,_,name,url){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$feeds,homepage_cljs.utils.urlizeString(name)], null),url);
});})(vec__30004,_,name,url))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rss_DASH_removed,(function (db,p__30007){
var vec__30008 = p__30007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30008,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30008,(1),null);
var feeds = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$feeds], null));
var newFeeds = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(feeds,homepage_cljs.utils.urlizeString(name));
return homepage_cljs.app_state.update_db_and_save(true,((function (feeds,newFeeds,vec__30008,_,name){
return (function (){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss,cljs.core.cst$kw$feeds], null),newFeeds);
});})(feeds,newFeeds,vec__30008,_,name))
);
}));
