// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('homepage_cljs.app_state');
goog.require('homepage_cljs.account');
goog.require('homepage_cljs.style');
goog.require('homepage_cljs.reddit');
goog.require('homepage_cljs.favorites');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.rss');
goog.require('cljs_http.client');
goog.require('cljs.core.async');

/** @define {string} */
goog.define("homepage_cljs.core.info","Mon Gen 01 00:00:00 2019 +0200");
/**
 * Formats the git log string.
 */
homepage_cljs.core.format_info = (function homepage_cljs$core$format_info(s){
var ss = clojure.string.split.call(null,s," ");
var s1 = clojure.string.join.call(null,"_",cljs.core.drop.call(null,(1),cljs.core.take.call(null,(3),ss)));
return ["Build date: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,ss,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,ss,(3)))].join('');
});
homepage_cljs.core.navbar_width = (128);
homepage_cljs.core.pages = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Favorites","Favorites",-1076165062),homepage_cljs.favorites.favs_main,new cljs.core.Keyword(null,"Reddit","Reddit",-1151998102),homepage_cljs.reddit.subreddit_main,new cljs.core.Keyword(null,"Rss","Rss",391067412),homepage_cljs.rss.rss_main,new cljs.core.Keyword(null,"Account","Account",-268549420),homepage_cljs.account.account_main], null);
/**
 * React component to display the left sidebar containing the navigation items.
 */
homepage_cljs.core.navbar = (function homepage_cljs$core$navbar(cp){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.background.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),homepage_cljs.core.navbar_width,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(128)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),homepage_cljs.core.format_info.call(null,homepage_cljs.core.info),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),homepage_cljs.core.navbar_width,new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null)], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = (function homepage_cljs$core$navbar_$_iter__43416(s__43417){
return (new cljs.core.LazySeq(null,(function (){
var s__43417__$1 = s__43417;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43417__$1);
if(temp__5720__auto__){
var s__43417__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43417__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43417__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43419 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43418 = (0);
while(true){
if((i__43418 < size__4522__auto__)){
var page = cljs.core._nth.call(null,c__4521__auto__,i__43418);
cljs.core.chunk_append.call(null,b__43419,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text_button.call(null,homepage_cljs.style.col_white,(12),"800"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10)], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,cljs.core.first.call(null,page)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43418,page,c__4521__auto__,size__4522__auto__,b__43419,s__43417__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-changed","page-changed",443860984),cljs.core.first.call(null,page)], null));
});})(i__43418,page,c__4521__auto__,size__4522__auto__,b__43419,s__43417__$2,temp__5720__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,page))], null)));

var G__43420 = (i__43418 + (1));
i__43418 = G__43420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43419),homepage_cljs$core$navbar_$_iter__43416.call(null,cljs.core.chunk_rest.call(null,s__43417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43419),null);
}
} else {
var page = cljs.core.first.call(null,s__43417__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text_button.call(null,homepage_cljs.style.col_white,(12),"800"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10)], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,cljs.core.first.call(null,page)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__43417__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-changed","page-changed",443860984),cljs.core.first.call(null,page)], null));
});})(page,s__43417__$2,temp__5720__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,page))], null)),homepage_cljs$core$navbar_$_iter__43416.call(null,cljs.core.rest.call(null,s__43417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,homepage_cljs.core.pages);
})())], null);
});
homepage_cljs.core.sync_icon_alpha = reagent.core.atom.call(null,(0));
/**
 * React component to hold all the other controllers
 */
homepage_cljs.core.main_page = (function homepage_cljs$core$main_page(){
var currentPage = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-current","page-current",-971859862)], null));
var sync_icon_alpha_anim = homepage_cljs.utils.animate.call(null,homepage_cljs.core.sync_icon_alpha,(250));
return ((function (currentPage,sync_icon_alpha_anim){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var col1 = cljs.core.deref.call(null,homepage_cljs.style.col_accent1);
var col2 = cljs.core.deref.call(null,homepage_cljs.style.col_accent2);
var bg_img = ["linear-gradient(to bottom right, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col1),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col2),")"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"background",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),bg_img], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.core.navbar,currentPage], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.deref.call(null,sync_icon_alpha_anim),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(-20),new cljs.core.Keyword(null,"left","left",-399115937),homepage_cljs.core.navbar_width,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null)], null),"Synching..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"32px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"64px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,currentPage).call(null,homepage_cljs.core.pages)], null)], null)], null);
});
;})(currentPage,sync_icon_alpha_anim))
});
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Render root function.
 */
homepage_cljs.core.mount_root = (function homepage_cljs$core$mount_root(){
homepage_cljs.app_state.load_state.call(null);

homepage_cljs.account.try_download_state.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.core.main_page], null),document.getElementById("app"));
});
/**
 * Main react root function.
 */
homepage_cljs.core.init_BANG_ = (function homepage_cljs$core$init_BANG_(){
return homepage_cljs.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1563618068994
