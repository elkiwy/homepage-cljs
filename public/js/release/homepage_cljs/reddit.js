// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.reddit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('homepage_cljs.app_state');
goog.require('homepage_cljs.utils');
goog.require('homepage_cljs.ui');
goog.require('homepage_cljs.style');
goog.require('cljss.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
homepage_cljs.reddit.dataAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["clojure",cljs.core.PersistentArrayMap.EMPTY], null));
/**
 * Fetch a subreddit and store the result into the results atom
 */
homepage_cljs.reddit.fetch_subreddit = (function homepage_cljs$reddit$fetch_subreddit(subRedditName){
var c__25076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25076__auto__){
return (function (){
var f__25077__auto__ = (function (){var switch__25007__auto__ = ((function (c__25076__auto__){
return (function (state_31178){
var state_val_31179 = (state_31178[(1)]);
if((state_val_31179 === (1))){
var inst_31161 = ["https://www.reddit.com/r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subRedditName),".json"].join('');
var inst_31162 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_31163 = [false];
var inst_31164 = cljs.core.PersistentHashMap.fromArrays(inst_31162,inst_31163);
var inst_31165 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_31161,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31164], 0));
var state_31178__$1 = state_31178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31178__$1,(2),inst_31165);
} else {
if((state_val_31179 === (2))){
var inst_31167 = (state_31178[(2)]);
var inst_31168 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_31167);
var inst_31169 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31168);
var inst_31170 = cljs.core.count(inst_31169);
var inst_31171 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetched ",inst_31170," bytes from ",subRedditName], 0));
var inst_31172 = [subRedditName];
var inst_31173 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_31167);
var inst_31174 = [inst_31173];
var inst_31175 = cljs.core.PersistentHashMap.fromArrays(inst_31172,inst_31174);
var inst_31176 = cljs.core.reset_BANG_(homepage_cljs.reddit.dataAtom,inst_31175);
var state_31178__$1 = (function (){var statearr_31180 = state_31178;
(statearr_31180[(7)] = inst_31171);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31178__$1,inst_31176);
} else {
return null;
}
}
});})(c__25076__auto__))
;
return ((function (switch__25007__auto__,c__25076__auto__){
return (function() {
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__ = null;
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____0 = (function (){
var statearr_31181 = [null,null,null,null,null,null,null,null];
(statearr_31181[(0)] = homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__);

(statearr_31181[(1)] = (1));

return statearr_31181;
});
var homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____1 = (function (state_31178){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__(state_31178);
if(cljs.core.keyword_identical_QMARK_(result__25010__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31182){if((e31182 instanceof Object)){
var ex__25011__auto__ = e31182;
var statearr_31183_31185 = state_31178;
(statearr_31183_31185[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31178);

return cljs.core.cst$kw$recur;
} else {
throw e31182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25009__auto__,cljs.core.cst$kw$recur)){
var G__31186 = state_31178;
state_31178 = G__31186;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__ = function(state_31178){
switch(arguments.length){
case 0:
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____0.call(this);
case 1:
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____1.call(this,state_31178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____0;
homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto____1;
return homepage_cljs$reddit$fetch_subreddit_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25076__auto__))
})();
var state__25078__auto__ = (function (){var statearr_31184 = (f__25077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25077__auto__.cljs$core$IFn$_invoke$arity$0() : f__25077__auto__.call(null));
(statearr_31184[(6)] = c__25076__auto__);

return statearr_31184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25078__auto__);
});})(c__25076__auto__))
);

return c__25076__auto__;
});
homepage_cljs.reddit.select_subreddit = (function homepage_cljs$reddit$select_subreddit(sub_name){
var G__31187_31188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_selected_DASH_changed,sub_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31187_31188) : re_frame.core.dispatch.call(null,G__31187_31188));

return homepage_cljs.reddit.fetch_subreddit(sub_name);
});
homepage_cljs.reddit.subreddit_header = (function homepage_cljs$reddit$subreddit_header(){
var sub = (function (){var G__31189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31189) : re_frame.core.subscribe.call(null,G__31189));
})();
var subs = (function (){var G__31190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_subreddits], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31190) : re_frame.core.subscribe.call(null,G__31190));
})();
return ((function (sub,subs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$margin,"0px 96px",cljs.core.cst$kw$margin_DASH_top,(-26),cljs.core.cst$kw$margin_DASH_bottom,(30),cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_wrap,"wrap",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),(function (){var iter__4523__auto__ = ((function (sub,subs){
return (function homepage_cljs$reddit$subreddit_header_$_iter__31191(s__31192){
return (new cljs.core.LazySeq(null,((function (sub,subs){
return (function (){
var s__31192__$1 = s__31192;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31192__$1);
if(temp__5720__auto__){
var s__31192__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31192__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31192__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31194 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31193 = (0);
while(true){
if((i__31193 < size__4522__auto__)){
var subName = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31193);
cljs.core.chunk_append(b__31194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,subName,((function (i__31193,subName,c__4521__auto__,size__4522__auto__,b__31194,s__31192__$2,temp__5720__auto__,sub,subs){
return (function (){
return homepage_cljs.reddit.select_subreddit(subName);
});})(i__31193,subName,c__4521__auto__,size__4522__auto__,b__31194,s__31192__$2,temp__5720__auto__,sub,subs))
,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(38),cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,(1),cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,subName], null)));

var G__31195 = (i__31193 + (1));
i__31193 = G__31195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31194),homepage_cljs$reddit$subreddit_header_$_iter__31191(cljs.core.chunk_rest(s__31192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31194),null);
}
} else {
var subName = cljs.core.first(s__31192__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,subName,((function (subName,s__31192__$2,temp__5720__auto__,sub,subs){
return (function (){
return homepage_cljs.reddit.select_subreddit(subName);
});})(subName,s__31192__$2,temp__5720__auto__,sub,subs))
,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(38),cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$margin,(1),cljs.core.cst$kw$color,homepage_cljs.style.col_white], null),homepage_cljs.style.col_black], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,subName], null)),homepage_cljs$reddit$subreddit_header_$_iter__31191(cljs.core.rest(s__31192__$2)));
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
return iter__4523__auto__(cljs.core.deref(subs));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(1),((cljs.core.empty_QMARK_(cljs.core.deref(sub)))?"":["r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.deref(sub)))].join('')),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,homepage_cljs.style.col_black_full,cljs.core.cst$kw$font_DASH_size,(48)], null)], null)], null);
});
;})(sub,subs))
});
homepage_cljs.reddit.subreddit_post_link = (function homepage_cljs$reddit$subreddit_post_link(post_data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"none"], null),cljs.core.cst$kw$href,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(post_data),cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.style.text_link(homepage_cljs.style.col_white,(16),"400"),homepage_cljs.style.background()], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,(12),cljs.core.cst$kw$margin,"16px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,(4)], null)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(post_data)], null),(function (){var big = (16);
var small = (10);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,(-16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,small,cljs.core.cst$kw$font_DASH_weight,"400"], null)], null),"Up:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,big,cljs.core.cst$kw$font_DASH_weight,"800"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ups.cljs$core$IFn$_invoke$arity$1(post_data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,small,cljs.core.cst$kw$font_DASH_weight,"400"], null)], null)," Down:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,big,cljs.core.cst$kw$font_DASH_weight,"800"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$downs.cljs$core$IFn$_invoke$arity$1(post_data))], null)], null);
})()], null)], null);
});
});
homepage_cljs.reddit.subreddit_posts = (function homepage_cljs$reddit$subreddit_posts(){
var selected = (function (){var G__31196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31196) : re_frame.core.subscribe.call(null,G__31196));
})();
return ((function (selected){
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(selected))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"No subreddit selected."], null);
} else {
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_cljs.reddit.dataAtom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(selected)], null)))){
homepage_cljs.reddit.fetch_subreddit(cljs.core.deref(selected));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),["Fetching \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected)),"\" subreddit..."].join('')], null);
} else {
var posts = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_cljs.reddit.dataAtom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(selected)], null))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4523__auto__ = ((function (posts,selected){
return (function homepage_cljs$reddit$subreddit_posts_$_iter__31197(s__31198){
return (new cljs.core.LazySeq(null,((function (posts,selected){
return (function (){
var s__31198__$1 = s__31198;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31198__$1);
if(temp__5720__auto__){
var s__31198__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31198__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31198__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31200 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31199 = (0);
while(true){
if((i__31199 < size__4522__auto__)){
var post = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31199);
cljs.core.chunk_append(b__31200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_post_link,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(post)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(post))], null)));

var G__31201 = (i__31199 + (1));
i__31199 = G__31201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31200),homepage_cljs$reddit$subreddit_posts_$_iter__31197(cljs.core.chunk_rest(s__31198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31200),null);
}
} else {
var post = cljs.core.first(s__31198__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_post_link,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(post)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(post))], null)),homepage_cljs$reddit$subreddit_posts_$_iter__31197(cljs.core.rest(s__31198__$2)));
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
return iter__4523__auto__(posts);
})()], null);

}
}
});
;})(selected))
});
homepage_cljs.reddit.subreddit_settings = (function homepage_cljs$reddit$subreddit_settings(size){
var subs = (function (){var G__31202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_subreddits], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31202) : re_frame.core.subscribe.call(null,G__31202));
})();
var newSubNameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var remSubNameAtom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.setting_window(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(480),cljs.core.cst$kw$padding_DASH_top,(16),cljs.core.cst$kw$left,["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(size) * (480))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Back",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(size,homepage_cljs.utils.toggleScale);
});})(subs,newSubNameAtom,remSubNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Add a subreddit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_text_input,"Subreddit Name",newSubNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Add",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
var G__31203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_added_DASH_subreddit,cljs.core.deref(newSubNameAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31203) : re_frame.core.dispatch.call(null,G__31203));
});})(subs,newSubNameAtom,remSubNameAtom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_header,(4),"Remove a subreddit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_select_input,subs,remSubNameAtom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.ui.custom_button,"Remove",((function (subs,newSubNameAtom,remSubNameAtom){
return (function (){
var G__31204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reddit_DASH_removed_DASH_subreddit,cljs.core.deref(remSubNameAtom)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31204) : re_frame.core.dispatch.call(null,G__31204));
});})(subs,newSubNameAtom,remSubNameAtom))
], null)], null);
});
;})(subs,newSubNameAtom,remSubNameAtom))
});
homepage_cljs.reddit.subreddit_main = (function homepage_cljs$reddit$subreddit_main(){
var settingSize = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.utils.page_settings,((function (settingSize){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(settingSize,homepage_cljs.utils.toggleScale);
});})(settingSize))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_settings,settingSize], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_cljs.reddit.subreddit_posts], null)], null);
});
