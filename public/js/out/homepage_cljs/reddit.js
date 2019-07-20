// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.reddit');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('homepage_cljs.app_state');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.style');
goog.require('cljss.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
homepage_cljs.reddit.dataAtom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, ["clojure",cljs.core.PersistentArrayMap.EMPTY], null));
/**
 * Fetch a subreddit and store the result into the results atom
 */
homepage_cljs.reddit.fetch_subreddit = (function homepage_cljs$reddit$fetch_subreddit(subRedditName){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_43395){
var state_val_43396 = (state_43395[(1)]);
if((state_val_43396 === (1))){
var inst_43378 = ["https://www.reddit.com/r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subRedditName),".json"].join('');
var inst_43379 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43380 = [false];
var inst_43381 = cljs.core.PersistentHashMap.fromArrays(inst_43379,inst_43380);
var inst_43382 = cljs_http.client.get.call(null,inst_43378,inst_43381);
var state_43395__$1 = state_43395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43395__$1,(2),inst_43382);
} else {
if((state_val_43396 === (2))){
var inst_43384 = (state_43395[(2)]);
var inst_43385 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43384);
var inst_43386 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43385);
var inst_43387 = cljs.core.count.call(null,inst_43386);
var inst_43388 = cljs.core.println.call(null,"fetched ",inst_43387," bytes from ",subRedditName);
var inst_43389 = [subRedditName];
var inst_43390 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43384);
var inst_43391 = [inst_43390];
var inst_43392 = cljs.core.PersistentHashMap.fromArrays(inst_43389,inst_43391);
var inst_43393 = cljs.core.reset_BANG_.call(null,homepage_cljs.reddit.dataAtom,inst_43392);
var state_43395__$1 = (function (){var statearr_43397 = state_43395;
(statearr_43397[(7)] = inst_43388);

return statearr_43397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43395__$1,inst_43393);
} else {
return null;
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__ = null;
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____0 = (function (){
var statearr_43398 = [null,null,null,null,null,null,null,null];
(statearr_43398[(0)] = homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__);

(statearr_43398[(1)] = (1));

return statearr_43398;
});
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____1 = (function (state_43395){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_43395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e43399){if((e43399 instanceof Object)){
var ex__30213__auto__ = e43399;
var statearr_43400_43402 = state_43395;
(statearr_43400_43402[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43403 = state_43395;
state_43395 = G__43403;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__ = function(state_43395){
switch(arguments.length){
case 0:
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____0.call(this);
case 1:
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____1.call(this,state_43395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____0;
homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto____1;
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_43401 = f__30305__auto__.call(null);
(statearr_43401[(6)] = c__30304__auto__);

return statearr_43401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});
homepage_cljs.reddit.select_subreddit = (function homepage_cljs$reddit$select_subreddit(sub_name){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-selected-changed","reddit-selected-changed",1670914186),sub_name], null));

return homepage_cljs.reddit.fetch_subreddit.call(null,sub_name);
});
homepage_cljs.reddit.subreddit_header = (function homepage_cljs$reddit$subreddit_header(){
var sub = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-selected","reddit-selected",1038767408)], null));
var subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-subreddits","reddit-subreddits",671607992)], null));
return ((function (sub,subs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 96px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-26),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(30),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__4523__auto__ = ((function (sub,subs){
return (function homepage_cljs$reddit$subreddit_header_$_iter__43404(s__43405){
return (new cljs.core.LazySeq(null,((function (sub,subs){
return (function (){
var s__43405__$1 = s__43405;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43405__$1);
if(temp__5720__auto__){
var s__43405__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43405__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43405__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43407 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43406 = (0);
while(true){
if((i__43406 < size__4522__auto__)){
var subName = cljs.core._nth.call(null,c__4521__auto__,i__43406);
cljs.core.chunk_append.call(null,b__43407,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,subName,((function (i__43406,subName,c__4521__auto__,size__4522__auto__,b__43407,s__43405__$2,temp__5720__auto__,sub,subs){
return (function (){
return homepage_cljs.reddit.select_subreddit.call(null,subName);
});})(i__43406,subName,c__4521__auto__,size__4522__auto__,b__43407,s__43405__$2,temp__5720__auto__,sub,subs))
,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(38),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subName], null)));

var G__43408 = (i__43406 + (1));
i__43406 = G__43408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43407),homepage_cljs$reddit$subreddit_header_$_iter__43404.call(null,cljs.core.chunk_rest.call(null,s__43405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43407),null);
}
} else {
var subName = cljs.core.first.call(null,s__43405__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,subName,((function (subName,s__43405__$2,temp__5720__auto__,sub,subs){
return (function (){
return homepage_cljs.reddit.select_subreddit.call(null,subName);
});})(subName,s__43405__$2,temp__5720__auto__,sub,subs))
,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(38),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),(1),new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subName], null)),homepage_cljs$reddit$subreddit_header_$_iter__43404.call(null,cljs.core.rest.call(null,s__43405__$2)));
}
} else {
return null;
}
break;
}
});})(sub,subs))
,null,null));
});})(sub,subs))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,subs));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,sub)))?"":["r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.deref.call(null,sub)))].join('')),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),homepage_cljs.style.col_black_full,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(48)], null)], null)], null);
});
;})(sub,subs))
});
homepage_cljs.reddit.subreddit_post_link = (function homepage_cljs$reddit$subreddit_post_link(post_data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(post_data),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.style.text_link.call(null,homepage_cljs.style.col_white,(16),"400"),homepage_cljs.style.background.call(null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post_data)], null),(function (){var big = (16);
var small = (10);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),small,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400"], null)], null),"Up:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),big,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"800"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ups","ups",-996341883).cljs$core$IFn$_invoke$arity$1(post_data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),small,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400"], null)], null)," Down:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),big,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"800"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"downs","downs",166217367).cljs$core$IFn$_invoke$arity$1(post_data))], null)], null);
})()], null)], null);
});
});
homepage_cljs.reddit.subreddit_posts = (function homepage_cljs$reddit$subreddit_posts(){
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-selected","reddit-selected",1038767408)], null));
return ((function (selected){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"No subreddit selected."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_cljs.reddit.dataAtom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,selected)], null)))){
homepage_cljs.reddit.fetch_subreddit.call(null,cljs.core.deref.call(null,selected));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),["Fetching \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected)),"\" subreddit..."].join('')], null);
} else {
var posts = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_cljs.reddit.dataAtom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,selected)], null))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (posts,selected){
return (function homepage_cljs$reddit$subreddit_posts_$_iter__43409(s__43410){
return (new cljs.core.LazySeq(null,((function (posts,selected){
return (function (){
var s__43410__$1 = s__43410;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43410__$1);
if(temp__5720__auto__){
var s__43410__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43410__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43410__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43412 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43411 = (0);
while(true){
if((i__43411 < size__4522__auto__)){
var post = cljs.core._nth.call(null,c__4521__auto__,i__43411);
cljs.core.chunk_append.call(null,b__43412,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_post_link,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(post)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(post))], null)));

var G__43413 = (i__43411 + (1));
i__43411 = G__43413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43412),homepage_cljs$reddit$subreddit_posts_$_iter__43409.call(null,cljs.core.chunk_rest.call(null,s__43410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43412),null);
}
} else {
var post = cljs.core.first.call(null,s__43410__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_post_link,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(post)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(post))], null)),homepage_cljs$reddit$subreddit_posts_$_iter__43409.call(null,cljs.core.rest.call(null,s__43410__$2)));
}
} else {
return null;
}
break;
}
});})(posts,selected))
,null,null));
});})(posts,selected))
;
return iter__4523__auto__.call(null,posts);
})()], null);

}
}
});
;})(selected))
});
homepage_cljs.reddit.subreddit_settings = (function homepage_cljs$reddit$subreddit_settings(size){
var subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-subreddits","reddit-subreddits",671607992)], null));
var newSubNameAtom = reagent.core.atom.call(null,"");
var remSubNameAtom = reagent.core.atom.call(null,"");
return ((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.setting_window.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"left","left",-399115937),["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return cljs.core.swap_BANG_.call(null,size,homepage_cljs.utils.toggleScale);
});})(subs,newSubNameAtom,remSubNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a subreddit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Subreddit Name",newSubNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-added-subreddit","reddit-added-subreddit",-1220174065),cljs.core.deref.call(null,newSubNameAtom)], null));
});})(subs,newSubNameAtom,remSubNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a subreddit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,subs,remSubNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reddit-removed-subreddit","reddit-removed-subreddit",-1123375092),cljs.core.deref.call(null,remSubNameAtom)], null));
});})(subs,newSubNameAtom,remSubNameAtom))
], null)], null);
});
;})(subs,newSubNameAtom,remSubNameAtom))
});
homepage_cljs.reddit.subreddit_main = (function homepage_cljs$reddit$subreddit_main(){
var settingSize = reagent.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (settingSize){
return (function (){
return cljs.core.swap_BANG_.call(null,settingSize,homepage_cljs.utils.toggleScale);
});})(settingSize))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_settings,settingSize], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_posts], null)], null);
});

//# sourceMappingURL=reddit.js.map?rel=1563618068965
