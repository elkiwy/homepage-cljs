// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.favorites');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljss.core');
goog.require('homepage_cljs.style');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.app_state');
homepage_cljs.favorites.migrate_v1_to_v2 = (function homepage_cljs$favorites$migrate_v1_to_v2(){
var favs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.cst$kw$favs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db))));
var link_fn = ((function (favs){
return (function (o){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.name(cljs.core.first(o)),cljs.core.cst$kw$link,cljs.core.second(o)], null);
});})(favs))
;
var cate_fn = ((function (favs,link_fn){
return (function (k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.name(cljs.core.first(cljs.core.second(k))),cljs.core.cst$kw$order,cljs.core.first(k),cljs.core.cst$kw$links,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(link_fn,cljs.core.seq(cljs.core.second(cljs.core.second(k))))], null);
});})(favs,link_fn))
;
var new_favs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cate_fn,favs);
var new_db = cljs.core.assoc_in(cljs.core.deref(re_frame.db.app_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$categories,new_favs], null));
var new_db__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_db,cljs.core.cst$kw$favs);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_empty(favs);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty(new_favs);
} else {
return and__4120__auto__;
}
})())){
var G__30991 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_db,new_db__$1,true], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__30991) : re_frame.core.dispatch_sync.call(null,G__30991));
} else {
return alert("No migration needed, you don't have any old data");
}
});
homepage_cljs.favorites.get_favs = (function homepage_cljs$favorites$get_favs(category){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30992_SHARP_){
return homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30992_SHARP_));
}),cljs.core.deref((function (){var G__30993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites2_DASH_category_DASH_links,homepage_cljs.utils.urlizeString(category)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30993) : re_frame.core.subscribe.call(null,G__30993));
})()));
});
/**
 * React component to display the setting panel for favorites page
 */
homepage_cljs.favorites.favs_comp_settings = (function homepage_cljs$favorites$favs_comp_settings(size){
var categories = (function (){var G__30994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites2_DASH_categories], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30994) : re_frame.core.subscribe.call(null,G__30994));
})();
var nameCatAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var nameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var linkAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var cateAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(categories)));
var removeCateAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(categories)));
var removeFavAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(homepage_cljs.favorites.get_favs(cljs.core.deref(removeCateAtom))));
var removeFavOptionsAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(homepage_cljs.favorites.get_favs(cljs.core.deref(removeCateAtom)));
var removeCategoryAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(categories)));
return ((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(cateAtom))){
cljs.core.reset_BANG_(cateAtom,cljs.core.first(cljs.core.deref(categories)));
} else {
}

return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.setting_window(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(480),cljs.core.cst$kw$padding_DASH_top,(16),cljs.core.cst$kw$left,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(size,homepage_cljs.utils.toggleScale);
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",nameCatAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add Category",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
var G__30995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite2_DASH_category_DASH_added,cljs.core.deref(nameCatAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30995) : re_frame.core.dispatch.call(null,G__30995));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a favorite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",nameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"URL",linkAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,cateAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add Favorite",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
var G__30996 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite2_DASH_link_DASH_added,cljs.core.deref(cateAtom),cljs.core.deref(nameAtom),cljs.core.deref(linkAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30996) : re_frame.core.dispatch.call(null,G__30996));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a favorite"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,removeCateAtom,((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return cljs.core.reset_BANG_(removeFavOptionsAtom,homepage_cljs.favorites.get_favs(cljs.core.deref(removeCateAtom)));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,removeFavOptionsAtom,removeFavAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove Favorite",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
var G__30997 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite2_DASH_link_DASH_removed,cljs.core.deref(removeCateAtom),cljs.core.deref(removeFavAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30997) : re_frame.core.dispatch.call(null,G__30997));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,removeCategoryAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove Category",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
var G__30998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite2_DASH_category_DASH_removed,cljs.core.deref(removeCategoryAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30998) : re_frame.core.dispatch.call(null,G__30998));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Other"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Migrate from old config",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return homepage_cljs.favorites.migrate_v1_to_v2();
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null)], null);
});
;})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
});
homepage_cljs.favorites.swap_category1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
homepage_cljs.favorites.clicked_swap = (function homepage_cljs$favorites$clicked_swap(cat){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_cljs.favorites.swap_category1),"")){
return cljs.core.reset_BANG_(homepage_cljs.favorites.swap_category1,cat);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_cljs.favorites.swap_category1),cat)){
return cljs.core.reset_BANG_(homepage_cljs.favorites.swap_category1,"");
} else {
var G__30999_31000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite2_DASH_categories_DASH_swapped,cat,cljs.core.deref(homepage_cljs.favorites.swap_category1)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__30999_31000) : re_frame.core.dispatch_sync.call(null,G__30999_31000));

return cljs.core.reset_BANG_(homepage_cljs.favorites.swap_category1,"");

}
}
});
/**
 * React component to display a category block with all its links.
 *   Takes `catName` as the category name string.
 */
homepage_cljs.favorites.favs_comp_category = (function homepage_cljs$favorites$favs_comp_category(catName){
var wid = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var links = (function (){var G__31001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites2_DASH_category_DASH_links,catName], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31001) : re_frame.core.subscribe.call(null,G__31001));
})();
var animWid = homepage_cljs.utils.animate(wid,(250));
return ((function (wid,links,animWid){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,homepage_cljs.style.background(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$width,"250px"], null),cljs.core.cst$kw$onMouseEnter,((function (wid,links,animWid){
return (function (){
return cljs.core.reset_BANG_(wid,(100));
});})(wid,links,animWid))
,cljs.core.cst$kw$onMouseLeave,((function (wid,links,animWid){
return (function (){
return cljs.core.reset_BANG_(wid,(0));
});})(wid,links,animWid))
], null),(function (){var swapping_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_cljs.favorites.swap_category1),catName);
var alpha = ((swapping_QMARK_)?(1):(cljs.core.deref(animWid) / 100.0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$margin,(8),cljs.core.cst$kw$opacity,alpha], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$margin_DASH_top,(3),cljs.core.cst$kw$margin_DASH_left,(3),cljs.core.cst$kw$color,((swapping_QMARK_)?cljs.core.deref(homepage_cljs.style.col_accent2):cljs.core.deref(homepage_cljs.style.col_accent1)),cljs.core.cst$kw$font_DASH_weight,"800",cljs.core.cst$kw$font_DASH_size,(24),cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"\u21C4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background_DASH_color,"transparent",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$border,"none",cljs.core.cst$kw$width,(32),cljs.core.cst$kw$height,(32)], null),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"",cljs.core.cst$kw$on_DASH_click,((function (swapping_QMARK_,alpha,wid,links,animWid){
return (function (){
return homepage_cljs.favorites.clicked_swap(catName);
});})(swapping_QMARK_,alpha,wid,links,animWid))
], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.text(homepage_cljs.style.col_white,(20),"800"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(16),cljs.core.cst$kw$text_DASH_align,"center"], null)], null),homepage_cljs.utils.deurlizeString(cljs.core.name(catName))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$backgroundColor,cljs.core.deref(homepage_cljs.style.col_accent1),cljs.core.cst$kw$height,(2),cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(animWid)),"%"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,(0)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (wid,links,animWid){
return (function homepage_cljs$favorites$favs_comp_category_$_iter__31002(s__31003){
return (new cljs.core.LazySeq(null,((function (wid,links,animWid){
return (function (){
var s__31003__$1 = s__31003;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31003__$1);
if(temp__5720__auto__){
var s__31003__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31003__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31003__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31005 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31004 = (0);
while(true){
if((i__31004 < size__4522__auto__)){
var linkObj = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31004);
cljs.core.chunk_append(b__31005,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin_DASH_bottom,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.text_link(homepage_cljs.style.col_white,(14),"400"),cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(linkObj)], null),homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(linkObj))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(linkObj)], null)));

var G__31006 = (i__31004 + (1));
i__31004 = G__31006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31005),homepage_cljs$favorites$favs_comp_category_$_iter__31002(cljs.core.chunk_rest(s__31003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31005),null);
}
} else {
var linkObj = cljs.core.first(s__31003__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin_DASH_bottom,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.text_link(homepage_cljs.style.col_white,(14),"400"),cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(linkObj)], null),homepage_cljs.utils.deurlizeString(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(linkObj))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(linkObj)], null)),homepage_cljs$favorites$favs_comp_category_$_iter__31002(cljs.core.rest(s__31003__$2)));
}
} else {
return null;
}
break;
}
});})(wid,links,animWid))
,null,null));
});})(wid,links,animWid))
;
return iter__4523__auto__(cljs.core.deref(links));
})())], null)], null);
});
;})(wid,links,animWid))
});
/**
 * Root react component for the favorites page.
 */
homepage_cljs.favorites.favs_main = (function homepage_cljs$favorites$favs_main(){
var sizeSetting = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var categories = (function (){var G__31007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorites2_DASH_categories], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31007) : re_frame.core.subscribe.call(null,G__31007));
})();
return ((function (sizeSetting,categories){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (sizeSetting,categories){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sizeSetting,homepage_cljs.utils.toggleScale);
});})(sizeSetting,categories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.text(homepage_cljs.style.col_black_full,(48),"bold"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,(-10),cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"Favorites"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_settings,sizeSetting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_wrap,"wrap",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),(function (){var iter__4523__auto__ = ((function (sizeSetting,categories){
return (function homepage_cljs$favorites$favs_main_$_iter__31008(s__31009){
return (new cljs.core.LazySeq(null,((function (sizeSetting,categories){
return (function (){
var s__31009__$1 = s__31009;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31009__$1);
if(temp__5720__auto__){
var s__31009__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31009__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31009__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31011 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31010 = (0);
while(true){
if((i__31010 < size__4522__auto__)){
var category = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31010);
cljs.core.chunk_append(b__31011,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_category,category], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,category], null)));

var G__31012 = (i__31010 + (1));
i__31010 = G__31012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31011),homepage_cljs$favorites$favs_main_$_iter__31008(cljs.core.chunk_rest(s__31009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31011),null);
}
} else {
var category = cljs.core.first(s__31009__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_category,category], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,category], null)),homepage_cljs$favorites$favs_main_$_iter__31008(cljs.core.rest(s__31009__$2)));
}
} else {
return null;
}
break;
}
});})(sizeSetting,categories))
,null,null));
});})(sizeSetting,categories))
;
return iter__4523__auto__(cljs.core.deref(categories));
})()], null)], null);
});
;})(sizeSetting,categories))
});
