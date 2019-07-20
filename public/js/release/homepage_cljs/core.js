// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
cljs.core.enable_console_print_BANG_();

/** @define {string} */
goog.define("homepage_cljs.core.info","Mon Gen 01 00:00:00 2019 +0200");
/**
 * Formats the git log string.
 */
homepage_cljs.core.format_info = (function homepage_cljs$core$format_info(s){
var ss = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s," ");
var s1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),ss)));
return ["Build date: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ss,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ss,(3)))].join('');
});
homepage_cljs.core.navbar_width = (128);
homepage_cljs.core.pages = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$Favorites,homepage_cljs.favorites.favs_main,cljs.core.cst$kw$Reddit,homepage_cljs.reddit.subreddit_main,cljs.core.cst$kw$Rss,homepage_cljs.rss.rss_main,cljs.core.cst$kw$Account,homepage_cljs.account.account_main], null);
/**
 * React component to display the left sidebar containing the navigation items.
 */
homepage_cljs.core.navbar = (function homepage_cljs$core$navbar(cp){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.background(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$width,homepage_cljs.core.navbar_width,cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$padding_DASH_top,(128)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),homepage_cljs.core.format_info(homepage_cljs.core.info),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$width,homepage_cljs.core.navbar_width,cljs.core.cst$kw$color,homepage_cljs.style.col_white], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function homepage_cljs$core$navbar_$_iter__31174(s__31175){
return (new cljs.core.LazySeq(null,(function (){
var s__31175__$1 = s__31175;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31175__$1);
if(temp__5720__auto__){
var s__31175__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31175__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31175__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31177 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31176 = (0);
while(true){
if((i__31176 < size__4522__auto__)){
var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31176);
cljs.core.chunk_append(b__31177,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,homepage_cljs.style.text_button(homepage_cljs.style.col_white,(12),"800"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,"transparent",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$margin_DASH_bottom,(10),cljs.core.cst$kw$margin_DASH_top,(10)], null),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,cljs.core.name(cljs.core.first(page)),cljs.core.cst$kw$on_DASH_click,((function (i__31176,page,c__4521__auto__,size__4522__auto__,b__31177,s__31175__$2,temp__5720__auto__){
return (function (){
var G__31178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_changed,cljs.core.first(page)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31178) : re_frame.core.dispatch.call(null,G__31178));
});})(i__31176,page,c__4521__auto__,size__4522__auto__,b__31177,s__31175__$2,temp__5720__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.name(cljs.core.first(page))], null)));

var G__31180 = (i__31176 + (1));
i__31176 = G__31180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31177),homepage_cljs$core$navbar_$_iter__31174(cljs.core.chunk_rest(s__31175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31177),null);
}
} else {
var page = cljs.core.first(s__31175__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,homepage_cljs.style.text_button(homepage_cljs.style.col_white,(12),"800"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,"transparent",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$margin_DASH_bottom,(10),cljs.core.cst$kw$margin_DASH_top,(10)], null),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,cljs.core.name(cljs.core.first(page)),cljs.core.cst$kw$on_DASH_click,((function (page,s__31175__$2,temp__5720__auto__){
return (function (){
var G__31179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_changed,cljs.core.first(page)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31179) : re_frame.core.dispatch.call(null,G__31179));
});})(page,s__31175__$2,temp__5720__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.name(cljs.core.first(page))], null)),homepage_cljs$core$navbar_$_iter__31174(cljs.core.rest(s__31175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(homepage_cljs.core.pages);
})())], null);
});
homepage_cljs.core.sync_icon_alpha = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * React component to hold all the other controllers
 */
homepage_cljs.core.main_page = (function homepage_cljs$core$main_page(){
var currentPage = (function (){var G__31181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_current], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31181) : re_frame.core.subscribe.call(null,G__31181));
})();
var sync_icon_alpha_anim = homepage_cljs.utils.animate(homepage_cljs.core.sync_icon_alpha,(250));
return ((function (currentPage,sync_icon_alpha_anim){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var col1 = cljs.core.deref(homepage_cljs.style.col_accent1);
var col2 = cljs.core.deref(homepage_cljs.style.col_accent2);
var bg_img = ["linear-gradient(to bottom right, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col1),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col2),")"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"background",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,bg_img], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.core.navbar,currentPage], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$opacity,cljs.core.deref(sync_icon_alpha_anim),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(-20),cljs.core.cst$kw$left,homepage_cljs.core.navbar_width,cljs.core.cst$kw$font_DASH_size,(18)], null)], null),"Synching..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"32px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__31182 = cljs.core.deref(currentPage);
return (fexpr__31182.cljs$core$IFn$_invoke$arity$1 ? fexpr__31182.cljs$core$IFn$_invoke$arity$1(homepage_cljs.core.pages) : fexpr__31182.call(null,homepage_cljs.core.pages));
})()], null)], null)], null);
});
;})(currentPage,sync_icon_alpha_anim))
});
homepage_cljs.core.mount_root = (function homepage_cljs$core$mount_root(){
homepage_cljs.app_state.load_state();

homepage_cljs.account.try_download_state();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.core.main_page], null),document.getElementById("app"));
});
homepage_cljs.core.init_BANG_ = (function homepage_cljs$core$init_BANG_(){
return homepage_cljs.core.mount_root();
});
