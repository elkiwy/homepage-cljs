// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.rss');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('homepage_cljs.app_state');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.style');
goog.require('tubax.core');
goog.require('hickory.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
homepage_cljs.rss.rss_proxy = "https://api.rss2json.com/v1/api.json?rss_url=";
homepage_cljs.rss.data_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Fetch the feed to get the data and save it to the data-atom.
 *   Takes `rssName` as the visible name of the feed and `rssUrl` as the link to fetch.
 */
homepage_cljs.rss.fetch_rss = (function homepage_cljs$rss$fetch_rss(rssName,rssUrl){
var c__25076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__25007__auto__ = ((function (c__25076__auto__){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (1))){
var inst_31116 = [homepage_cljs.rss.rss_proxy,cljs.core.str.cljs$core$IFn$_invoke$arity$1(rssUrl)].join('');
var inst_31117 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_31118 = [false];
var inst_31119 = cljs.core.PersistentHashMap.fromArrays(inst_31117,inst_31118);
var inst_31120 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_31116,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31119], 0));
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31129__$1,(2),inst_31120);
} else {
if((state_val_31130 === (2))){
var inst_31122 = (state_31129[(2)]);
var inst_31123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31124 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_31122);
var inst_31125 = [rssName,inst_31124];
var inst_31126 = (new cljs.core.PersistentVector(null,2,(5),inst_31123,inst_31125,null));
var inst_31127 = cljs.core.reset_BANG_(homepage_cljs.rss.data_atom,inst_31126);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31129__$1,inst_31127);
} else {
return null;
}
}
});})(c__25076__auto__))
;
return ((function (switch__25007__auto__,c__25076__auto__){
return (function() {
var homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__ = null;
var homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____0 = (function (){
var statearr_31131 = [null,null,null,null,null,null,null];
(statearr_31131[(0)] = homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__);

(statearr_31131[(1)] = (1));

return statearr_31131;
});
var homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____1 = (function (state_31129){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__(state_31129);
if(cljs.core.keyword_identical_QMARK_(result__25010__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31132){if((e31132 instanceof Object)){
var ex__25011__auto__ = e31132;
var statearr_31133_31135 = state_31129;
(statearr_31133_31135[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31129);

return cljs.core.cst$kw$recur;
} else {
throw e31132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25009__auto__,cljs.core.cst$kw$recur)){
var G__31136 = state_31129;
state_31129 = G__31136;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____0.call(this);
case 1:
return homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____0;
homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto____1;
return homepage_cljs$rss$fetch_rss_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_31134 = (f__25077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25077__auto__.cljs$core$IFn$_invoke$arity$0() : f__25077__auto__.call(null));
(statearr_31134[(6)] = c__25076__auto__);

return statearr_31134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
});
/**
 * Function to change the current feed and fetch the data of the new one.
 */
homepage_cljs.rss.select_feed = (function homepage_cljs$rss$select_feed(feedName,feedUrl){
homepage_cljs.rss.fetch_rss(feedName,feedUrl);

var G__31137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_selected_DASH_changed,feedName], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31137) : re_frame.core.dispatch.call(null,G__31137));
});
/**
 * Predicate to check if a hiccup element is an image too small to be useful.
 *   Takes `data` as an hiccup element. Returns a boolean.
 */
homepage_cljs.rss.is_not_a_useless_image_QMARK_ = (function homepage_cljs$rss$is_not_a_useless_image_QMARK_(data){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,(0)),cljs.core.cst$kw$img)){
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,(1));
var img_h = (cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(style) | (0));
var img_w = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(style) | (0));
return (!((((((!((img_w == null)))) && ((img_w < (100))))) || ((((!((img_h == null)))) && ((img_h < (100))))))));
} else {
return true;
}
});
/**
 * Check if an hiccup fragment `frag` is of a certain `tag`.
 */
homepage_cljs.rss.is_tag_QMARK_ = (function homepage_cljs$rss$is_tag_QMARK_(frag,tag){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frag),tag);
});
/**
 * Cycle through and inside a hiccup `fragment` and return the fragment that has a certain `tag`.
 */
homepage_cljs.rss.find_tag = (function homepage_cljs$rss$find_tag(fragment,tag){
var frag = fragment;
while(true){
if(cljs.core.empty_QMARK_(frag)){
return null;
} else {
if(homepage_cljs.rss.is_tag_QMARK_(frag,tag)){
return frag;
} else {
if(cljs.core.vector_QMARK_(cljs.core.first(frag))){
var sub_result = (function (){var G__31138 = cljs.core.first(frag);
var G__31139 = tag;
return (homepage_cljs.rss.find_tag.cljs$core$IFn$_invoke$arity$2 ? homepage_cljs.rss.find_tag.cljs$core$IFn$_invoke$arity$2(G__31138,G__31139) : homepage_cljs.rss.find_tag.call(null,G__31138,G__31139));
})();
if((sub_result == null)){
var G__31140 = cljs.core.rest(frag);
frag = G__31140;
continue;
} else {
return sub_result;
}
} else {
var G__31141 = cljs.core.rest(frag);
frag = G__31141;
continue;

}
}
}
break;
}
});
/**
 * React component to display a single item of the rss feed.
 *   Takes a `itemData` map with the data of the item.
 */
homepage_cljs.rss.rss_item_component = (function homepage_cljs$rss$rss_item_component(itemData){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.background(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clear,"both",cljs.core.cst$kw$min_DASH_height,(72),cljs.core.cst$kw$padding,(12),cljs.core.cst$kw$margin,(12)], null)], null),(function (){var descriptionHtml = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(itemData);
var descriptionData = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.parse_fragment(descriptionHtml));
var component = homepage_cljs.rss.find_tag(cljs.core.first(descriptionData),cljs.core.cst$kw$img);
var componentData = cljs.core.second(component);
var componentStyle = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$float,"left",cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$width,(72),cljs.core.cst$kw$height,(72),cljs.core.cst$kw$border_DASH_radius,(2),cljs.core.cst$kw$box_DASH_shadow,"4px 4px 16px -10px black",cljs.core.cst$kw$margin_DASH_right,(12)], null);
var styledComponent = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(componentData,cljs.core.cst$kw$style,componentStyle)], null);
return styledComponent;
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$margin_DASH_bottom,(16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"none"], null),cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(itemData)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.style.text_link(homepage_cljs.style.col_white,(14),"400")], null)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(itemData)], null)], null)], null)], null);
});
});
/**
 * React component to display the setting panel.
 */
homepage_cljs.rss.rss_settings = (function homepage_cljs$rss$rss_settings(size){
var newFeedUrlAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var newFeedNameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var feeds = (function (){var G__31142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_feeds], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31142) : re_frame.core.subscribe.call(null,G__31142));
})();
var remFeedNameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.setting_window(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(480),cljs.core.cst$kw$padding_DASH_top,(16),cljs.core.cst$kw$left,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(size,homepage_cljs.utils.toggleScale);
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a feed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",newFeedNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"url",newFeedUrlAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
var G__31143 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_added,cljs.core.deref(newFeedNameAtom),cljs.core.deref(newFeedUrlAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31143) : re_frame.core.dispatch.call(null,G__31143));
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a feed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(cljs.core.deref(feeds)))),remFeedNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
var G__31144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subreddit_DASH_removed,cljs.core.deref(remFeedNameAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31144) : re_frame.core.dispatch.call(null,G__31144));
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null)], null);
});
;})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
});
/**
 * React component to handle the rss feed items.
 */
homepage_cljs.rss.rss_feed = (function homepage_cljs$rss$rss_feed(){
var selected = (function (){var G__31145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_selected_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31145) : re_frame.core.subscribe.call(null,G__31145));
})();
var selectedUrl = (function (){var G__31146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_selected_DASH_url], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31146) : re_frame.core.subscribe.call(null,G__31146));
})();
return ((function (selected,selectedUrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.empty_QMARK_(cljs.core.deref(selected)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"No rss selected"], null):(((cljs.core.second(cljs.core.deref(homepage_cljs.rss.data_atom)) == null))?(function (){
homepage_cljs.rss.fetch_rss(cljs.core.deref(selected),cljs.core.deref(selectedUrl));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected)),"..."].join('')], null);
})()
:(function (){var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.deref(homepage_cljs.rss.data_atom)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null));
var iter__4523__auto__ = ((function (items,selected,selectedUrl){
return (function homepage_cljs$rss$rss_feed_$_iter__31147(s__31148){
return (new cljs.core.LazySeq(null,((function (items,selected,selectedUrl){
return (function (){
var s__31148__$1 = s__31148;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31148__$1);
if(temp__5720__auto__){
var s__31148__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31148__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31148__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31150 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31149 = (0);
while(true){
if((i__31149 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31149);
cljs.core.chunk_append(b__31150,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_item_component,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null)));

var G__31151 = (i__31149 + (1));
i__31149 = G__31151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31150),homepage_cljs$rss$rss_feed_$_iter__31147(cljs.core.chunk_rest(s__31148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31150),null);
}
} else {
var item = cljs.core.first(s__31148__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_item_component,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null)),homepage_cljs$rss$rss_feed_$_iter__31147(cljs.core.rest(s__31148__$2)));
}
} else {
return null;
}
break;
}
});})(items,selected,selectedUrl))
,null,null));
});})(items,selected,selectedUrl))
;
return iter__4523__auto__(items);
})()
))], null);
});
;})(selected,selectedUrl))
});
/**
 * React component to display the header with the buttons.
 */
homepage_cljs.rss.rss_header = (function homepage_cljs$rss$rss_header(){
var feed_name = (function (){var G__31152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_selected_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31152) : re_frame.core.subscribe.call(null,G__31152));
})();
var feeds = (function (){var G__31153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rss_DASH_feeds], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31153) : re_frame.core.subscribe.call(null,G__31153));
})();
return ((function (feed_name,feeds){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$margin,"0px 96px",cljs.core.cst$kw$margin_DASH_top,(-26),cljs.core.cst$kw$margin_DASH_bottom,(30),cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_wrap,"wrap",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),(function (){var iter__4523__auto__ = ((function (feed_name,feeds){
return (function homepage_cljs$rss$rss_header_$_iter__31154(s__31155){
return (new cljs.core.LazySeq(null,((function (feed_name,feeds){
return (function (){
var s__31155__$1 = s__31155;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31155__$1);
if(temp__5720__auto__){
var s__31155__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31155__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31155__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31157 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31156 = (0);
while(true){
if((i__31156 < size__4522__auto__)){
var feed = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31156);
cljs.core.chunk_append(b__31157,(function (){var feedName = cljs.core.first(feed);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,feedName,((function (i__31156,feedName,feed,c__4521__auto__,size__4522__auto__,b__31157,s__31155__$2,temp__5720__auto__,feed_name,feeds){
return (function (){
return homepage_cljs.rss.select_feed(feedName,cljs.core.second(feed));
});})(i__31156,feedName,feed,c__4521__auto__,size__4522__auto__,b__31157,s__31155__$2,temp__5720__auto__,feed_name,feeds))
,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(38),cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,(1),cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,feedName], null));
})());

var G__31158 = (i__31156 + (1));
i__31156 = G__31158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31157),homepage_cljs$rss$rss_header_$_iter__31154(cljs.core.chunk_rest(s__31155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31157),null);
}
} else {
var feed = cljs.core.first(s__31155__$2);
return cljs.core.cons((function (){var feedName = cljs.core.first(feed);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,feedName,((function (feedName,feed,s__31155__$2,temp__5720__auto__,feed_name,feeds){
return (function (){
return homepage_cljs.rss.select_feed(feedName,cljs.core.second(feed));
});})(feedName,feed,s__31155__$2,temp__5720__auto__,feed_name,feeds))
,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(38),cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,(1),cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,feedName], null));
})(),homepage_cljs$rss$rss_header_$_iter__31154(cljs.core.rest(s__31155__$2)));
}
} else {
return null;
}
break;
}
});})(feed_name,feeds))
,null,null));
});})(feed_name,feeds))
;
return iter__4523__auto__(cljs.core.seq(cljs.core.deref(feeds)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),["RSS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(feed_name))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,homepage_cljs.style.col_black_full,cljs.core.cst$kw$font_DASH_size,(48)], null)], null)], null);
});
;})(feed_name,feeds))
});
/**
 * React component to display the whole rss page.
 */
homepage_cljs.rss.rss_main = (function homepage_cljs$rss$rss_main(){
var settingSize = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (settingSize){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (settingSize){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(settingSize,homepage_cljs.utils.toggleScale);
});})(settingSize))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_settings,settingSize], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_feed], null)], null);
});
;})(settingSize))
});
