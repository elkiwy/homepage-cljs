// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.favorites');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljss.core');
goog.require('homepage_cljs.style');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.app_state');
/**
 * Migrates an old favorites version under :favs to the newer :favorites key.
 */
homepage_cljs.favorites.migrate_v1_to_v2 = (function homepage_cljs$favorites$migrate_v1_to_v2(){
var favs = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.seq.call(null,new cljs.core.Keyword(null,"favs","favs",1024539662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.db.app_db))));
var link_fn = ((function (favs){
return (function (o){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,cljs.core.first.call(null,o)),new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.second.call(null,o)], null);
});})(favs))
;
var cate_fn = ((function (favs,link_fn){
return (function (k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.second.call(null,k))),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.first.call(null,k),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapv.call(null,link_fn,cljs.core.seq.call(null,cljs.core.second.call(null,cljs.core.second.call(null,k))))], null);
});})(favs,link_fn))
;
var new_favs = cljs.core.mapv.call(null,cate_fn,favs);
var new_db = cljs.core.assoc_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),new_favs], null));
var new_db__$1 = cljs.core.dissoc.call(null,new_db,new cljs.core.Keyword(null,"favs","favs",1024539662));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_empty.call(null,favs);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty.call(null,new_favs);
} else {
return and__4120__auto__;
}
})())){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-db","replace-db",1175144316),new_db__$1,true], null));
} else {
return alert("No migration needed, you don't have any old data");
}
});
homepage_cljs.favorites.swap_category1 = reagent.core.atom.call(null,"");
/**
 * Triggered when a swap button is clicked.
 */
homepage_cljs.favorites.clicked_swap = (function homepage_cljs$favorites$clicked_swap(cat){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,homepage_cljs.favorites.swap_category1),"")){
return cljs.core.reset_BANG_.call(null,homepage_cljs.favorites.swap_category1,cat);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,homepage_cljs.favorites.swap_category1),cat)){
return cljs.core.reset_BANG_.call(null,homepage_cljs.favorites.swap_category1,"");
} else {
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite2-categories-swapped","favorite2-categories-swapped",1829396),cat,cljs.core.deref.call(null,homepage_cljs.favorites.swap_category1)], null));

return cljs.core.reset_BANG_.call(null,homepage_cljs.favorites.swap_category1,"");

}
}
});
/**
 * [TO CLEAN] Retrieves the favorites links from the db.
 */
homepage_cljs.favorites.get_favs = (function homepage_cljs$favorites$get_favs(category){
return cljs.core.map.call(null,(function (p1__43330_SHARP_){
return homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__43330_SHARP_));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites2-category-links","favorites2-category-links",-1990340389),homepage_cljs.utils.urlizeString.call(null,category)], null))));
});
/**
 * React component to display the setting panel for favorites page
 */
homepage_cljs.favorites.favs_comp_settings = (function homepage_cljs$favorites$favs_comp_settings(size){
var categories = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites2-categories","favorites2-categories",488448325)], null));
var nameCatAtom = reagent.core.atom.call(null,"");
var nameAtom = reagent.core.atom.call(null,"");
var linkAtom = reagent.core.atom.call(null,"");
var cateAtom = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,categories)));
var removeCateAtom = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,categories)));
var removeFavAtom = reagent.core.atom.call(null,cljs.core.first.call(null,homepage_cljs.favorites.get_favs.call(null,cljs.core.deref.call(null,removeCateAtom))));
var removeFavOptionsAtom = reagent.core.atom.call(null,homepage_cljs.favorites.get_favs.call(null,cljs.core.deref.call(null,removeCateAtom)));
var removeCategoryAtom = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,categories)));
return ((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,cateAtom))){
cljs.core.reset_BANG_.call(null,cateAtom,cljs.core.first.call(null,cljs.core.deref.call(null,categories)));
} else {
}

return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.setting_window.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"left","left",-399115937),["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return cljs.core.swap_BANG_.call(null,size,homepage_cljs.utils.toggleScale);
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",nameCatAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add Category",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite2-category-added","favorite2-category-added",1640049326),cljs.core.deref.call(null,nameCatAtom)], null));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a favorite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",nameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"URL",linkAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,cateAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add Favorite",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite2-link-added","favorite2-link-added",1682352719),cljs.core.deref.call(null,cateAtom),cljs.core.deref.call(null,nameAtom),cljs.core.deref.call(null,linkAtom)], null));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a favorite"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,removeCateAtom,((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return cljs.core.reset_BANG_.call(null,removeFavOptionsAtom,homepage_cljs.favorites.get_favs.call(null,cljs.core.deref.call(null,removeCateAtom)));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,removeFavOptionsAtom,removeFavAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove Favorite",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite2-link-removed","favorite2-link-removed",-1549432382),cljs.core.deref.call(null,removeCateAtom),cljs.core.deref.call(null,removeFavAtom)], null));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,categories,removeCategoryAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove Category",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite2-category-removed","favorite2-category-removed",-762192678),cljs.core.deref.call(null,removeCategoryAtom)], null));
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Other"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Migrate from old config",((function (categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom){
return (function (){
return homepage_cljs.favorites.migrate_v1_to_v2.call(null);
});})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
], null)], null);
});
;})(categories,nameCatAtom,nameAtom,linkAtom,cateAtom,removeCateAtom,removeFavAtom,removeFavOptionsAtom,removeCategoryAtom))
});
/**
 * React component to display a category block with all its links.
 *   Takes `catName` as the category name string.
 */
homepage_cljs.favorites.favs_comp_category = (function homepage_cljs$favorites$favs_comp_category(catName){
var wid = reagent.core.atom.call(null,(0));
var links = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites2-category-links","favorites2-category-links",-1990340389),catName], null));
var animWid = homepage_cljs.utils.animate.call(null,wid,(250));
return ((function (wid,links,animWid){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.background.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null),new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (wid,links,animWid){
return (function (){
return cljs.core.reset_BANG_.call(null,wid,(100));
});})(wid,links,animWid))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (wid,links,animWid){
return (function (){
return cljs.core.reset_BANG_.call(null,wid,(0));
});})(wid,links,animWid))
], null),(function (){var swapping_QMARK_ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,homepage_cljs.favorites.swap_category1),catName);
var alpha = ((swapping_QMARK_)?(1):(cljs.core.deref.call(null,animWid) / 100.0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),(8),new cljs.core.Keyword(null,"opacity","opacity",397153780),alpha], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(3),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(3),new cljs.core.Keyword(null,"color","color",1011675173),((swapping_QMARK_)?cljs.core.deref.call(null,homepage_cljs.style.col_accent2):cljs.core.deref.call(null,homepage_cljs.style.col_accent1)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"800",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"\u21C4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(32)], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (swapping_QMARK_,alpha,wid,links,animWid){
return (function (){
return homepage_cljs.favorites.clicked_swap.call(null,catName);
});})(swapping_QMARK_,alpha,wid,links,animWid))
], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text.call(null,homepage_cljs.style.col_white,(20),"800"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),homepage_cljs.utils.deurlizeString.call(null,cljs.core.name.call(null,catName))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),cljs.core.deref.call(null,homepage_cljs.style.col_accent1),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animWid)),"%"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (wid,links,animWid){
return (function homepage_cljs$favorites$favs_comp_category_$_iter__43331(s__43332){
return (new cljs.core.LazySeq(null,((function (wid,links,animWid){
return (function (){
var s__43332__$1 = s__43332;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43332__$1);
if(temp__5720__auto__){
var s__43332__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43332__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43332__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43334 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43333 = (0);
while(true){
if((i__43333 < size__4522__auto__)){
var linkObj = cljs.core._nth.call(null,c__4521__auto__,i__43333);
cljs.core.chunk_append.call(null,b__43334,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text_link.call(null,homepage_cljs.style.col_white,(14),"400"),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(linkObj)], null),homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(linkObj))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(linkObj)], null)));

var G__43335 = (i__43333 + (1));
i__43333 = G__43335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43334),homepage_cljs$favorites$favs_comp_category_$_iter__43331.call(null,cljs.core.chunk_rest.call(null,s__43332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43334),null);
}
} else {
var linkObj = cljs.core.first.call(null,s__43332__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text_link.call(null,homepage_cljs.style.col_white,(14),"400"),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(linkObj)], null),homepage_cljs.utils.deurlizeString.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(linkObj))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(linkObj)], null)),homepage_cljs$favorites$favs_comp_category_$_iter__43331.call(null,cljs.core.rest.call(null,s__43332__$2)));
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
return iter__4523__auto__.call(null,cljs.core.deref.call(null,links));
})())], null)], null);
});
;})(wid,links,animWid))
});
/**
 * Root react component for the favorites page.
 */
homepage_cljs.favorites.favs_main = (function homepage_cljs$favorites$favs_main(){
var sizeSetting = reagent.core.atom.call(null,(0));
var categories = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites2-categories","favorites2-categories",488448325)], null));
return ((function (sizeSetting,categories){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (sizeSetting,categories){
return (function (){
return cljs.core.swap_BANG_.call(null,sizeSetting,homepage_cljs.utils.toggleScale);
});})(sizeSetting,categories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text.call(null,homepage_cljs.style.col_black_full,(48),"bold"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-10),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Favorites"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_settings,sizeSetting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__4523__auto__ = ((function (sizeSetting,categories){
return (function homepage_cljs$favorites$favs_main_$_iter__43336(s__43337){
return (new cljs.core.LazySeq(null,((function (sizeSetting,categories){
return (function (){
var s__43337__$1 = s__43337;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43337__$1);
if(temp__5720__auto__){
var s__43337__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43337__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43337__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43339 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43338 = (0);
while(true){
if((i__43338 < size__4522__auto__)){
var category = cljs.core._nth.call(null,c__4521__auto__,i__43338);
cljs.core.chunk_append.call(null,b__43339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_category,category], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null)));

var G__43340 = (i__43338 + (1));
i__43338 = G__43340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43339),homepage_cljs$favorites$favs_main_$_iter__43336.call(null,cljs.core.chunk_rest.call(null,s__43337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43339),null);
}
} else {
var category = cljs.core.first.call(null,s__43337__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.favorites.favs_comp_category,category], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null)),homepage_cljs$favorites$favs_main_$_iter__43336.call(null,cljs.core.rest.call(null,s__43337__$2)));
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
return iter__4523__auto__.call(null,cljs.core.deref.call(null,categories));
})()], null)], null);
});
;})(sizeSetting,categories))
});

//# sourceMappingURL=favorites.js.map?rel=1563618068871
