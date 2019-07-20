// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.rss');
goog.require('cljs.core');
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
homepage_cljs.rss.data_atom = reagent.core.atom.call(null,null);
/**
 * Fetch the feed to get the data and save it to the data-atom.
 *   Takes `rssName` as the visible name of the feed and `rssUrl` as the link to fetch.
 */
homepage_cljs.rss.fetch_rss = (function homepage_cljs$rss$fetch_rss(rssName,rssUrl){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_43356){
var state_val_43357 = (state_43356[(1)]);
if((state_val_43357 === (1))){
var inst_43343 = [homepage_cljs.rss.rss_proxy,cljs.core.str.cljs$core$IFn$_invoke$arity$1(rssUrl)].join('');
var inst_43344 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43345 = [false];
var inst_43346 = cljs.core.PersistentHashMap.fromArrays(inst_43344,inst_43345);
var inst_43347 = cljs_http.client.get.call(null,inst_43343,inst_43346);
var state_43356__$1 = state_43356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43356__$1,(2),inst_43347);
} else {
if((state_val_43357 === (2))){
var inst_43349 = (state_43356[(2)]);
var inst_43350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43351 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43349);
var inst_43352 = [rssName,inst_43351];
var inst_43353 = (new cljs.core.PersistentVector(null,2,(5),inst_43350,inst_43352,null));
var inst_43354 = cljs.core.reset_BANG_.call(null,homepage_cljs.rss.data_atom,inst_43353);
var state_43356__$1 = state_43356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43356__$1,inst_43354);
} else {
return null;
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__ = null;
var homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____0 = (function (){
var statearr_43358 = [null,null,null,null,null,null,null];
(statearr_43358[(0)] = homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__);

(statearr_43358[(1)] = (1));

return statearr_43358;
});
var homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____1 = (function (state_43356){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_43356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e43359){if((e43359 instanceof Object)){
var ex__30213__auto__ = e43359;
var statearr_43360_43362 = state_43356;
(statearr_43360_43362[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43363 = state_43356;
state_43356 = G__43363;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__ = function(state_43356){
switch(arguments.length){
case 0:
return homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____0.call(this);
case 1:
return homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____1.call(this,state_43356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____0;
homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto____1;
return homepage_cljs$rss$fetch_rss_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_43361 = f__30305__auto__.call(null);
(statearr_43361[(6)] = c__30304__auto__);

return statearr_43361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});
/**
 * Function to change the current feed and fetch the data of the new one.
 */
homepage_cljs.rss.select_feed = (function homepage_cljs$rss$select_feed(feedName,feedUrl){
homepage_cljs.rss.fetch_rss.call(null,feedName,feedUrl);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-selected-changed","rss-selected-changed",-1164536460),feedName], null));
});
/**
 * Predicate to check if a hiccup element is an image too small to be useful.
 *   Takes `data` as an hiccup element. Returns a boolean.
 */
homepage_cljs.rss.is_not_a_useless_image_QMARK_ = (function homepage_cljs$rss$is_not_a_useless_image_QMARK_(data){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,data,(0)),new cljs.core.Keyword(null,"img","img",1442687358))){
var style = cljs.core.get.call(null,data,(1));
var img_h = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(style) | (0));
var img_w = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(style) | (0));
return (!((((((!((img_w == null)))) && ((img_w < (100))))) || ((((!((img_h == null)))) && ((img_h < (100))))))));
} else {
return true;
}
});
/**
 * Check if an hiccup fragment `frag` is of a certain `tag`.
 */
homepage_cljs.rss.is_tag_QMARK_ = (function homepage_cljs$rss$is_tag_QMARK_(frag,tag){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,frag),tag);
});
/**
 * Cycle through and inside a hiccup `fragment` and return the fragment that has a certain `tag`.
 */
homepage_cljs.rss.find_tag = (function homepage_cljs$rss$find_tag(fragment,tag){
var frag = fragment;
while(true){
if(cljs.core.empty_QMARK_.call(null,frag)){
return null;
} else {
if(homepage_cljs.rss.is_tag_QMARK_.call(null,frag,tag)){
return frag;
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,frag))){
var sub_result = homepage_cljs.rss.find_tag.call(null,cljs.core.first.call(null,frag),tag);
if((sub_result == null)){
var G__43364 = cljs.core.rest.call(null,frag);
frag = G__43364;
continue;
} else {
return sub_result;
}
} else {
var G__43365 = cljs.core.rest.call(null,frag);
frag = G__43365;
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.background.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both",new cljs.core.Keyword(null,"min-height","min-height",398480837),(72),new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"margin","margin",-995903681),(12)], null)], null),(function (){var descriptionHtml = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(itemData);
var descriptionData = cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,descriptionHtml));
var component = homepage_cljs.rss.find_tag.call(null,cljs.core.first.call(null,descriptionData),new cljs.core.Keyword(null,"img","img",1442687358));
var componentData = cljs.core.second.call(null,component);
var componentStyle = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),(72),new cljs.core.Keyword(null,"height","height",1025178622),(72),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"4px 4px 16px -10px black",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(12)], null);
var styledComponent = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),cljs.core.assoc.call(null,componentData,new cljs.core.Keyword(null,"style","style",-496642736),componentStyle)], null);
return styledComponent;
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(itemData)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.style.text_link.call(null,homepage_cljs.style.col_white,(14),"400")], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(itemData)], null)], null)], null)], null);
});
});
/**
 * React component to display the setting panel.
 */
homepage_cljs.rss.rss_settings = (function homepage_cljs$rss$rss_settings(size){
var newFeedUrlAtom = reagent.core.atom.call(null,"");
var newFeedNameAtom = reagent.core.atom.call(null,"");
var feeds = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-feeds","rss-feeds",-1764409671)], null));
var remFeedNameAtom = reagent.core.atom.call(null,"");
return ((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.setting_window.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"left","left",-399115937),["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return cljs.core.swap_BANG_.call(null,size,homepage_cljs.utils.toggleScale);
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a feed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Name",newFeedNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"url",newFeedUrlAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-added","rss-added",1140289780),cljs.core.deref.call(null,newFeedNameAtom),cljs.core.deref.call(null,newFeedUrlAtom)], null));
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a feed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,reagent.core.atom.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.seq.call(null,cljs.core.deref.call(null,feeds)))),remFeedNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove",((function (newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subreddit-removed","subreddit-removed",1901034033),cljs.core.deref.call(null,remFeedNameAtom)], null));
});})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
], null)], null);
});
;})(newFeedUrlAtom,newFeedNameAtom,feeds,remFeedNameAtom))
});
/**
 * React component to handle the rss feed items.
 */
homepage_cljs.rss.rss_feed = (function homepage_cljs$rss$rss_feed(){
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-selected-name","rss-selected-name",1971163491)], null));
var selectedUrl = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-selected-url","rss-selected-url",-548679874)], null));
return ((function (selected,selectedUrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No rss selected"], null):(((cljs.core.second.call(null,cljs.core.deref.call(null,homepage_cljs.rss.data_atom)) == null))?(function (){
homepage_cljs.rss.fetch_rss.call(null,cljs.core.deref.call(null,selected),cljs.core.deref.call(null,selectedUrl));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected)),"..."].join('')], null);
})()
:(function (){var items = cljs.core.get_in.call(null,cljs.core.second.call(null,cljs.core.deref.call(null,homepage_cljs.rss.data_atom)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var iter__4523__auto__ = ((function (items,selected,selectedUrl){
return (function homepage_cljs$rss$rss_feed_$_iter__43366(s__43367){
return (new cljs.core.LazySeq(null,((function (items,selected,selectedUrl){
return (function (){
var s__43367__$1 = s__43367;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43367__$1);
if(temp__5720__auto__){
var s__43367__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43367__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43367__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43369 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43368 = (0);
while(true){
if((i__43368 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__43368);
cljs.core.chunk_append.call(null,b__43369,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_item_component,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null)));

var G__43370 = (i__43368 + (1));
i__43368 = G__43370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43369),homepage_cljs$rss$rss_feed_$_iter__43366.call(null,cljs.core.chunk_rest.call(null,s__43367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43369),null);
}
} else {
var item = cljs.core.first.call(null,s__43367__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_item_component,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null)),homepage_cljs$rss$rss_feed_$_iter__43366.call(null,cljs.core.rest.call(null,s__43367__$2)));
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
return iter__4523__auto__.call(null,items);
})()
))], null);
});
;})(selected,selectedUrl))
});
/**
 * React component to display the header with the buttons.
 */
homepage_cljs.rss.rss_header = (function homepage_cljs$rss$rss_header(){
var feed_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-selected-name","rss-selected-name",1971163491)], null));
var feeds = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rss-feeds","rss-feeds",-1764409671)], null));
return ((function (feed_name,feeds){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 96px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-26),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(30),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__4523__auto__ = ((function (feed_name,feeds){
return (function homepage_cljs$rss$rss_header_$_iter__43371(s__43372){
return (new cljs.core.LazySeq(null,((function (feed_name,feeds){
return (function (){
var s__43372__$1 = s__43372;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43372__$1);
if(temp__5720__auto__){
var s__43372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43372__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43372__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43374 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43373 = (0);
while(true){
if((i__43373 < size__4522__auto__)){
var feed = cljs.core._nth.call(null,c__4521__auto__,i__43373);
cljs.core.chunk_append.call(null,b__43374,(function (){var feedName = cljs.core.first.call(null,feed);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,feedName,((function (i__43373,feedName,feed,c__4521__auto__,size__4522__auto__,b__43374,s__43372__$2,temp__5720__auto__,feed_name,feeds){
return (function (){
return homepage_cljs.rss.select_feed.call(null,feedName,cljs.core.second.call(null,feed));
});})(i__43373,feedName,feed,c__4521__auto__,size__4522__auto__,b__43374,s__43372__$2,temp__5720__auto__,feed_name,feeds))
,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(38),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),feedName], null));
})());

var G__43375 = (i__43373 + (1));
i__43373 = G__43375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43374),homepage_cljs$rss$rss_header_$_iter__43371.call(null,cljs.core.chunk_rest.call(null,s__43372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43374),null);
}
} else {
var feed = cljs.core.first.call(null,s__43372__$2);
return cljs.core.cons.call(null,(function (){var feedName = cljs.core.first.call(null,feed);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,feedName,((function (feedName,feed,s__43372__$2,temp__5720__auto__,feed_name,feeds){
return (function (){
return homepage_cljs.rss.select_feed.call(null,feedName,cljs.core.second.call(null,feed));
});})(feedName,feed,s__43372__$2,temp__5720__auto__,feed_name,feeds))
,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(38),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),feedName], null));
})(),homepage_cljs$rss$rss_header_$_iter__43371.call(null,cljs.core.rest.call(null,s__43372__$2)));
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
return iter__4523__auto__.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,feeds)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),["RSS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,feed_name))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black_full,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(48)], null)], null)], null);
});
;})(feed_name,feeds))
});
/**
 * React component to display the whole rss page.
 */
homepage_cljs.rss.rss_main = (function homepage_cljs$rss$rss_main(){
var settingSize = reagent.core.atom.call(null,(0));
return ((function (settingSize){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (settingSize){
return (function (){
return cljs.core.swap_BANG_.call(null,settingSize,homepage_cljs.utils.toggleScale);
});})(settingSize))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_settings,settingSize], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.rss.rss_feed], null)], null);
});
;})(settingSize))
});

//# sourceMappingURL=rss.js.map?rel=1563618068923
