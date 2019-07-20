// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.app_state');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('homepage_cljs.utils');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('goog.crypt.base64');
goog.require('reagent.cookies');
/**
 * Write a value `val` with a key `key` into the localStorage.
 */
homepage_cljs.app_state.local_storage_set = (function homepage_cljs$app_state$local_storage_set(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Retrieve a value with a key `key` from the localStorage.
 */
homepage_cljs.app_state.local_storage_get = (function homepage_cljs$app_state$local_storage_get(key){
return window.localStorage.getItem(key);
});
/**
 * [TO CLEAN] Gets the current config
 */
homepage_cljs.app_state.app_db = (function homepage_cljs$app_state$app_db(){
return cljs.core.deref.call(null,re_frame.db.app_db);
});
/**
 * Saves the config into the localStorage.
 */
homepage_cljs.app_state.save_state = (function homepage_cljs$app_state$save_state(var_args){
var G__43244 = arguments.length;
switch (G__43244) {
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
return homepage_cljs.app_state.save_state.call(null,cljs.core.deref.call(null,re_frame.db.app_db));
});

homepage_cljs.app_state.save_state.cljs$core$IFn$_invoke$arity$1 = (function (data){
cljs.core.println.call(null,"Saving config to localStorage...");

if((new cljs.core.Keyword(null,"page-current","page-current",-971859862).cljs$core$IFn$_invoke$arity$1(data) == null)){
return null;
} else {
return homepage_cljs.app_state.local_storage_set.call(null,"app-db",goog.crypt.base64.encodeString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
}
});

homepage_cljs.app_state.save_state.cljs$lang$maxFixedArity = 1;

/**
 * Loads the config stored in the localStorage or initialize it.
 */
homepage_cljs.app_state.load_state = (function homepage_cljs$app_state$load_state(){
var temp__5718__auto__ = homepage_cljs.app_state.local_storage_get.call(null,"app-db");
if(cljs.core.truth_(temp__5718__auto__)){
var saved_db_str = temp__5718__auto__;
cljs.core.println.call(null,"Loading config from localStorage...");

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),cljs.reader.read_string.call(null,goog.crypt.base64.decodeString(saved_db_str)),true], null));
} else {
cljs.core.println.call(null,"Initializing an empty config...");

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}
});
/**
 * Executes a function, and return the result after sending the new config to the backend if the `sync` flag is active
 */
homepage_cljs.app_state.update_db_and_save = (function homepage_cljs$app_state$update_db_and_save(sync,fn){
var result = fn.call(null);
homepage_cljs.app_state.save_state.call(null,result);

if(cljs.core._EQ_.call(null,sync,true)){
homepage_cljs.account.updateConfig.call(null,result);
} else {
}

return result;
});
/**
 * [TO CLEAN] Retrieves the categories vector from a `db`.
 */
homepage_cljs.app_state.get_categories_names = (function homepage_cljs$app_state$get_categories_names(db){
return cljs.core.mapv.call(null,(function (p1__43246_SHARP_){
return homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43246_SHARP_));
}),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null)));
});
/**
 * Checks if an `item` is inside the vector `v`.
 */
homepage_cljs.app_state.in_vector_QMARK_ = (function homepage_cljs$app_state$in_vector_QMARK_(v,item){
return (!((cljs.core.some.call(null,(function (p1__43247_SHARP_){
return cljs.core._EQ_.call(null,item,p1__43247_SHARP_);
}),v) == null)));
});
/**
 * Shows an alert and returns the `db`.
 */
homepage_cljs.app_state.alert_and_return = (function homepage_cljs$app_state$alert_and_return(message,db){
alert(message);

return db;
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),(function (db,_){
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page-current","page-current",-971859862),(function (db,_){
return new cljs.core.Keyword(null,"page-current","page-current",-971859862).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"account","account",718006320),(function (db,_){
return new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"favorites","favorites",1740773480),(function (db,_){
return new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"favorites2-categories","favorites2-categories",488448325),(function (db,_){
return cljs.core.vec.call(null,cljs.core.mapv.call(null,(function (p1__43248_SHARP_){
return homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43248_SHARP_));
}),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"favorites2-category-links","favorites2-category-links",-1990340389),(function (db,p__43250){
var vec__43251 = p__43250;
var _ = cljs.core.nth.call(null,vec__43251,(0),null);
var name = cljs.core.nth.call(null,vec__43251,(1),null);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var category = cljs.core.first.call(null,cljs.core.filter.call(null,((function (categories,vec__43251,_,name){
return (function (p1__43249_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43249_SHARP_),homepage_cljs.utils.urlizeString.call(null,name));
});})(categories,vec__43251,_,name))
,categories));
return cljs.core.vec.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(category));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"reddit-subreddits","reddit-subreddits",671607992),(function (db,_){
return new cljs.core.Keyword(null,"subreddits","subreddits",-27865922).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reddit","reddit",-1323650081).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"reddit-selected","reddit-selected",1038767408),(function (db,_){
return new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reddit","reddit",-1323650081).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rss-feeds","rss-feeds",-1764409671),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"feeds","feeds",855496306)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rss-selected-name","rss-selected-name",1971163491),(function (db,_){
var default$ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"feeds","feeds",855496306)], null),cljs.core.PersistentArrayMap.EMPTY))));
var name = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"selected","selected",574897764)], null),default$);
return homepage_cljs.utils.deurlizeString.call(null,name);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rss-selected-url","rss-selected-url",-548679874),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-selected-name","rss-selected-name",1971163491)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-feeds","rss-feeds",-1764409671)], null),(function (p__43254,_){
var vec__43255 = p__43254;
var name = cljs.core.nth.call(null,vec__43255,(0),null);
var feeds = cljs.core.nth.call(null,vec__43255,(1),null);
return cljs.core.get.call(null,feeds,homepage_cljs.utils.urlizeString.call(null,name),"");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-current","page-current",-971859862),new cljs.core.Keyword(null,"Favorites","Favorites",-1076165062),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"pass","pass",1574159993),"",new cljs.core.Keyword(null,"sync","sync",-624148946),false], null),new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),"",new cljs.core.Keyword(null,"subreddits","subreddits",-27865922),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),"",new cljs.core.Keyword(null,"feeds","feeds",855496306),cljs.core.PersistentArrayMap.EMPTY], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),(function (db,p__43258){
var vec__43259 = p__43258;
var _ = cljs.core.nth.call(null,vec__43259,(0),null);
var new_db = cljs.core.nth.call(null,vec__43259,(1),null);
var full_replace_QMARK_ = cljs.core.nth.call(null,vec__43259,(2),null);
var cp = new cljs.core.Keyword(null,"page-current","page-current",-971859862).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(full_replace_QMARK_)){
return homepage_cljs.app_state.update_db_and_save.call(null,false,((function (cp,vec__43259,_,new_db,full_replace_QMARK_){
return (function (){
return new_db;
});})(cp,vec__43259,_,new_db,full_replace_QMARK_))
);
} else {
return homepage_cljs.app_state.update_db_and_save.call(null,false,((function (cp,vec__43259,_,new_db,full_replace_QMARK_){
return (function (){
return cljs.core.assoc.call(null,new_db,new cljs.core.Keyword(null,"page-current","page-current",-971859862),cp);
});})(cp,vec__43259,_,new_db,full_replace_QMARK_))
);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"replace-db-no-sync","replace-db-no-sync",-11370217),(function (db,p__43262){
var vec__43263 = p__43262;
var _ = cljs.core.nth.call(null,vec__43263,(0),null);
var new_db = cljs.core.nth.call(null,vec__43263,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,false,((function (vec__43263,_,new_db){
return (function (){
return new_db;
});})(vec__43263,_,new_db))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"page-changed","page-changed",443860984),(function (db,p__43266){
var vec__43267 = p__43266;
var _ = cljs.core.nth.call(null,vec__43267,(0),null);
var newPage = cljs.core.nth.call(null,vec__43267,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,false,((function (vec__43267,_,newPage){
return (function (){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-current","page-current",-971859862),newPage);
});})(vec__43267,_,newPage))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"account-updated","account-updated",-1158240594),(function (db,p__43270){
var vec__43271 = p__43270;
var _ = cljs.core.nth.call(null,vec__43271,(0),null);
var name = cljs.core.nth.call(null,vec__43271,(1),null);
var pass = cljs.core.nth.call(null,vec__43271,(2),null);
var sync = cljs.core.nth.call(null,vec__43271,(3),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43271,_,name,pass,sync){
return (function (){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"pass","pass",1574159993),pass,new cljs.core.Keyword(null,"sync","sync",-624148946),sync], null));
});})(vec__43271,_,name,pass,sync))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"favorite2-category-added","favorite2-category-added",1640049326),(function (db,p__43274){
var vec__43275 = p__43274;
var _ = cljs.core.nth.call(null,vec__43275,(0),null);
var name = cljs.core.nth.call(null,vec__43275,(1),null);
if(homepage_cljs.app_state.in_vector_QMARK_.call(null,homepage_cljs.app_state.get_categories_names.call(null,db),name)){
return homepage_cljs.app_state.alert_and_return.call(null,["A category named \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\" already exists."].join(''),db);
} else {
var nam = homepage_cljs.utils.urlizeString.call(null,name);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var ind = cljs.core.count.call(null,categories);
var newCategories = cljs.core.conj.call(null,categories,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),nam,new cljs.core.Keyword(null,"order","order",-1254677256),(ind + (1)),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY], null));
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (nam,categories,ind,newCategories,vec__43275,_,name){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null),cljs.core.vec.call(null,newCategories));
});})(nam,categories,ind,newCategories,vec__43275,_,name))
);

}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"favorite2-link-added","favorite2-link-added",1682352719),(function (db,p__43280){
var vec__43281 = p__43280;
var _ = cljs.core.nth.call(null,vec__43281,(0),null);
var category = cljs.core.nth.call(null,vec__43281,(1),null);
var name = cljs.core.nth.call(null,vec__43281,(2),null);
var link = cljs.core.nth.call(null,vec__43281,(3),null);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var cateIndex = homepage_cljs.utils.index.call(null,categories,((function (categories,vec__43281,_,category,name,link){
return (function (p1__43278_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43278_SHARP_),category);
});})(categories,vec__43281,_,category,name,link))
);
var links = cljs.core.get_in.call(null,categories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cateIndex,new cljs.core.Keyword(null,"links","links",-654507394)], null));
var cateLinksNames = cljs.core.mapv.call(null,((function (categories,cateIndex,links,vec__43281,_,category,name,link){
return (function (p1__43279_SHARP_){
return homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43279_SHARP_));
});})(categories,cateIndex,links,vec__43281,_,category,name,link))
,links);
if(homepage_cljs.app_state.in_vector_QMARK_.call(null,cateLinksNames,name)){
return homepage_cljs.app_state.alert_and_return.call(null,["A link named \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\" already exists."].join(''),db);
} else {
var nam = homepage_cljs.utils.urlizeString.call(null,name);
var cat = homepage_cljs.utils.urlizeString.call(null,category);
var lnk = homepage_cljs.utils.urlizeString.call(null,link);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (nam,cat,lnk,categories,cateIndex,links,cateLinksNames,vec__43281,_,category,name,link){
return (function (){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610),cateIndex,new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),nam,new cljs.core.Keyword(null,"link","link",-1769163468),lnk], null));
});})(nam,cat,lnk,categories,cateIndex,links,cateLinksNames,vec__43281,_,category,name,link))
);

}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"favorite2-category-removed","favorite2-category-removed",-762192678),(function (db,p__43285){
var vec__43286 = p__43285;
var _ = cljs.core.nth.call(null,vec__43286,(0),null);
var name = cljs.core.nth.call(null,vec__43286,(1),null);
var nam = homepage_cljs.utils.urlizeString.call(null,name);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var newCategories = cljs.core.remove.call(null,((function (nam,categories,vec__43286,_,name){
return (function (p1__43284_SHARP_){
return cljs.core._EQ_.call(null,nam,homepage_cljs.utils.urlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43284_SHARP_)));
});})(nam,categories,vec__43286,_,name))
,categories);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (nam,categories,newCategories,vec__43286,_,name){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null),cljs.core.vec.call(null,newCategories));
});})(nam,categories,newCategories,vec__43286,_,name))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"favorite2-link-removed","favorite2-link-removed",-1549432382),(function (db,p__43290){
var vec__43291 = p__43290;
var _ = cljs.core.nth.call(null,vec__43291,(0),null);
var category = cljs.core.nth.call(null,vec__43291,(1),null);
var name = cljs.core.nth.call(null,vec__43291,(2),null);
var cat = homepage_cljs.utils.urlizeString.call(null,category);
var nam = homepage_cljs.utils.urlizeString.call(null,name);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var cateIndex = homepage_cljs.utils.index.call(null,categories,((function (cat,nam,categories,vec__43291,_,category,name){
return (function (p1__43289_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43289_SHARP_),cat);
});})(cat,nam,categories,vec__43291,_,category,name))
);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (cat,nam,categories,cateIndex,vec__43291,_,category,name){
return (function (){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610),cateIndex,new cljs.core.Keyword(null,"links","links",-654507394)], null),((function (cat,nam,categories,cateIndex,vec__43291,_,category,name){
return (function (obj){
return cljs.core.remove.call(null,((function (cat,nam,categories,cateIndex,vec__43291,_,category,name){
return (function (link){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(link),nam);
});})(cat,nam,categories,cateIndex,vec__43291,_,category,name))
,obj);
});})(cat,nam,categories,cateIndex,vec__43291,_,category,name))
);
});})(cat,nam,categories,cateIndex,vec__43291,_,category,name))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"favorite2-categories-swapped","favorite2-categories-swapped",1829396),(function (db,p__43300){
var vec__43301 = p__43300;
var _ = cljs.core.nth.call(null,vec__43301,(0),null);
var cat1 = cljs.core.nth.call(null,vec__43301,(1),null);
var cat2 = cljs.core.nth.call(null,vec__43301,(2),null);
var cat1__$1 = homepage_cljs.utils.urlizeString.call(null,cat1);
var cat2__$1 = homepage_cljs.utils.urlizeString.call(null,cat2);
var categories = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
var cat1_ind = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (cat1__$1,cat2__$1,categories,vec__43301,_,cat1,cat2){
return (function (p1__43294_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43294_SHARP_),cat1__$1);
});})(cat1__$1,cat2__$1,categories,vec__43301,_,cat1,cat2))
,categories)));
var cat2_ind = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (cat1__$1,cat2__$1,categories,cat1_ind,vec__43301,_,cat1,cat2){
return (function (p1__43295_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43295_SHARP_),cat2__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,vec__43301,_,cat1,cat2))
,categories)));
var cat1_vec_pos = homepage_cljs.utils.index.call(null,categories,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,vec__43301,_,cat1,cat2){
return (function (p1__43296_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43296_SHARP_),cat1__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,vec__43301,_,cat1,cat2))
);
var cat2_vec_pos = homepage_cljs.utils.index.call(null,categories,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,vec__43301,_,cat1,cat2){
return (function (p1__43297_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43297_SHARP_),cat2__$1);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,vec__43301,_,cat1,cat2))
);
var categories_new = cljs.core.vec.call(null,cljs.core.assoc_in.call(null,categories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat1_vec_pos,new cljs.core.Keyword(null,"order","order",-1254677256)], null),cat2_ind));
var categories_new__$1 = cljs.core.vec.call(null,cljs.core.assoc_in.call(null,categories_new,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat2_vec_pos,new cljs.core.Keyword(null,"order","order",-1254677256)], null),cat1_ind));
var categories_new__$2 = cljs.core.vec.call(null,cljs.core.sort.call(null,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,vec__43301,_,cat1,cat2){
return (function (p1__43298_SHARP_,p2__43299_SHARP_){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__43298_SHARP_) < new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p2__43299_SHARP_));
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,vec__43301,_,cat1,cat2))
,categories_new__$1));
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,categories_new__$2,vec__43301,_,cat1,cat2){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"categories","categories",178386610)], null),categories_new__$2);
});})(cat1__$1,cat2__$1,categories,cat1_ind,cat2_ind,cat1_vec_pos,cat2_vec_pos,categories_new,categories_new__$1,categories_new__$2,vec__43301,_,cat1,cat2))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reddit-selected-changed","reddit-selected-changed",1670914186),(function (db,p__43304){
var vec__43305 = p__43304;
var _ = cljs.core.nth.call(null,vec__43305,(0),null);
var newSubreddit = cljs.core.nth.call(null,vec__43305,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43305,_,newSubreddit){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"selected","selected",574897764)], null),newSubreddit);
});})(vec__43305,_,newSubreddit))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reddit-added-subreddit","reddit-added-subreddit",-1220174065),(function (db,p__43308){
var vec__43309 = p__43308;
var _ = cljs.core.nth.call(null,vec__43309,(0),null);
var sub = cljs.core.nth.call(null,vec__43309,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43309,_,sub){
return (function (){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"subreddits","subreddits",-27865922)], null),cljs.core.conj,sub);
});})(vec__43309,_,sub))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reddit-removed-subreddit","reddit-removed-subreddit",-1123375092),(function (db,p__43312){
var vec__43313 = p__43312;
var _ = cljs.core.nth.call(null,vec__43313,(0),null);
var sub = cljs.core.nth.call(null,vec__43313,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43313,_,sub){
return (function (){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit","reddit",-1323650081),new cljs.core.Keyword(null,"subreddits","subreddits",-27865922)], null),homepage_cljs.utils.remove_from_vector,sub);
});})(vec__43313,_,sub))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rss-selected-changed","rss-selected-changed",-1164536460),(function (db,p__43316){
var vec__43317 = p__43316;
var _ = cljs.core.nth.call(null,vec__43317,(0),null);
var newRss = cljs.core.nth.call(null,vec__43317,(1),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43317,_,newRss){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"selected","selected",574897764)], null),homepage_cljs.utils.urlizeString.call(null,newRss));
});})(vec__43317,_,newRss))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rss-added","rss-added",1140289780),(function (db,p__43320){
var vec__43321 = p__43320;
var _ = cljs.core.nth.call(null,vec__43321,(0),null);
var name = cljs.core.nth.call(null,vec__43321,(1),null);
var url = cljs.core.nth.call(null,vec__43321,(2),null);
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (vec__43321,_,name,url){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"feeds","feeds",855496306),homepage_cljs.utils.urlizeString.call(null,name)], null),url);
});})(vec__43321,_,name,url))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rss-removed","rss-removed",2019429458),(function (db,p__43324){
var vec__43325 = p__43324;
var _ = cljs.core.nth.call(null,vec__43325,(0),null);
var name = cljs.core.nth.call(null,vec__43325,(1),null);
var feeds = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"feeds","feeds",855496306)], null));
var newFeeds = cljs.core.dissoc.call(null,feeds,homepage_cljs.utils.urlizeString.call(null,name));
return homepage_cljs.app_state.update_db_and_save.call(null,true,((function (feeds,newFeeds,vec__43325,_,name){
return (function (){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss","rss",-1401556502),new cljs.core.Keyword(null,"feeds","feeds",855496306)], null),newFeeds);
});})(feeds,newFeeds,vec__43325,_,name))
);
}));

//# sourceMappingURL=app_state.js.map?rel=1563618068822
