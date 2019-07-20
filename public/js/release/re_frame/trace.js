// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__31356){
var map__31357 = p__31356;
var map__31357__$1 = (((((!((map__31357 == null))))?(((((map__31357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31357):map__31357);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__31359_31383 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__31360_31384 = null;
var count__31361_31385 = (0);
var i__31362_31386 = (0);
while(true){
if((i__31362_31386 < count__31361_31385)){
var vec__31373_31387 = chunk__31360_31384.cljs$core$IIndexed$_nth$arity$2(null,i__31362_31386);
var k_31388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31373_31387,(0),null);
var cb_31389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31373_31387,(1),null);
try{var G__31377_31390 = cljs.core.deref(re_frame.trace.traces);
(cb_31389.cljs$core$IFn$_invoke$arity$1 ? cb_31389.cljs$core$IFn$_invoke$arity$1(G__31377_31390) : cb_31389.call(null,G__31377_31390));
}catch (e31376){var e_31391 = e31376;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31388,"while storing",cljs.core.deref(re_frame.trace.traces),e_31391], 0));
}

var G__31392 = seq__31359_31383;
var G__31393 = chunk__31360_31384;
var G__31394 = count__31361_31385;
var G__31395 = (i__31362_31386 + (1));
seq__31359_31383 = G__31392;
chunk__31360_31384 = G__31393;
count__31361_31385 = G__31394;
i__31362_31386 = G__31395;
continue;
} else {
var temp__5720__auto___31396 = cljs.core.seq(seq__31359_31383);
if(temp__5720__auto___31396){
var seq__31359_31397__$1 = temp__5720__auto___31396;
if(cljs.core.chunked_seq_QMARK_(seq__31359_31397__$1)){
var c__4550__auto___31398 = cljs.core.chunk_first(seq__31359_31397__$1);
var G__31399 = cljs.core.chunk_rest(seq__31359_31397__$1);
var G__31400 = c__4550__auto___31398;
var G__31401 = cljs.core.count(c__4550__auto___31398);
var G__31402 = (0);
seq__31359_31383 = G__31399;
chunk__31360_31384 = G__31400;
count__31361_31385 = G__31401;
i__31362_31386 = G__31402;
continue;
} else {
var vec__31378_31403 = cljs.core.first(seq__31359_31397__$1);
var k_31404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378_31403,(0),null);
var cb_31405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378_31403,(1),null);
try{var G__31382_31406 = cljs.core.deref(re_frame.trace.traces);
(cb_31405.cljs$core$IFn$_invoke$arity$1 ? cb_31405.cljs$core$IFn$_invoke$arity$1(G__31382_31406) : cb_31405.call(null,G__31382_31406));
}catch (e31381){var e_31407 = e31381;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31404,"while storing",cljs.core.deref(re_frame.trace.traces),e_31407], 0));
}

var G__31408 = cljs.core.next(seq__31359_31397__$1);
var G__31409 = null;
var G__31410 = (0);
var G__31411 = (0);
seq__31359_31383 = G__31408;
chunk__31360_31384 = G__31409;
count__31361_31385 = G__31410;
i__31362_31386 = G__31411;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
