// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__31512 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31513 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31513;

try{try{var seq__31514 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__31515 = null;
var count__31516 = (0);
var i__31517 = (0);
while(true){
if((i__31517 < count__31516)){
var vec__31524 = chunk__31515.cljs$core$IIndexed$_nth$arity$2(null,i__31517);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31524,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31524,(1),null);
var temp__5718__auto___31546 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___31546)){
var effect_fn_31547 = temp__5718__auto___31546;
(effect_fn_31547.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31547.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31547.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31548 = seq__31514;
var G__31549 = chunk__31515;
var G__31550 = count__31516;
var G__31551 = (i__31517 + (1));
seq__31514 = G__31548;
chunk__31515 = G__31549;
count__31516 = G__31550;
i__31517 = G__31551;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31514);
if(temp__5720__auto__){
var seq__31514__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31514__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31514__$1);
var G__31552 = cljs.core.chunk_rest(seq__31514__$1);
var G__31553 = c__4550__auto__;
var G__31554 = cljs.core.count(c__4550__auto__);
var G__31555 = (0);
seq__31514 = G__31552;
chunk__31515 = G__31553;
count__31516 = G__31554;
i__31517 = G__31555;
continue;
} else {
var vec__31527 = cljs.core.first(seq__31514__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31527,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31527,(1),null);
var temp__5718__auto___31556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___31556)){
var effect_fn_31557 = temp__5718__auto___31556;
(effect_fn_31557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31558 = cljs.core.next(seq__31514__$1);
var G__31559 = null;
var G__31560 = (0);
var G__31561 = (0);
seq__31514 = G__31558;
chunk__31515 = G__31559;
count__31516 = G__31560;
i__31517 = G__31561;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__31334__auto___31562 = re_frame.interop.now();
var duration__31335__auto___31563 = (end__31334__auto___31562 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__31335__auto___31563,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__31334__auto___31562);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31512;
}} else {
var seq__31530 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__31531 = null;
var count__31532 = (0);
var i__31533 = (0);
while(true){
if((i__31533 < count__31532)){
var vec__31540 = chunk__31531.cljs$core$IIndexed$_nth$arity$2(null,i__31533);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31540,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31540,(1),null);
var temp__5718__auto___31564 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___31564)){
var effect_fn_31565 = temp__5718__auto___31564;
(effect_fn_31565.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31565.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31565.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31566 = seq__31530;
var G__31567 = chunk__31531;
var G__31568 = count__31532;
var G__31569 = (i__31533 + (1));
seq__31530 = G__31566;
chunk__31531 = G__31567;
count__31532 = G__31568;
i__31533 = G__31569;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31530);
if(temp__5720__auto__){
var seq__31530__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31530__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31530__$1);
var G__31570 = cljs.core.chunk_rest(seq__31530__$1);
var G__31571 = c__4550__auto__;
var G__31572 = cljs.core.count(c__4550__auto__);
var G__31573 = (0);
seq__31530 = G__31570;
chunk__31531 = G__31571;
count__31532 = G__31572;
i__31533 = G__31573;
continue;
} else {
var vec__31543 = cljs.core.first(seq__31530__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31543,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31543,(1),null);
var temp__5718__auto___31574 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___31574)){
var effect_fn_31575 = temp__5718__auto___31574;
(effect_fn_31575.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31575.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31575.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31576 = cljs.core.next(seq__31530__$1);
var G__31577 = null;
var G__31578 = (0);
var G__31579 = (0);
seq__31530 = G__31576;
chunk__31531 = G__31577;
count__31532 = G__31578;
i__31533 = G__31579;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__31580 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31581 = null;
var count__31582 = (0);
var i__31583 = (0);
while(true){
if((i__31583 < count__31582)){
var map__31588 = chunk__31581.cljs$core$IIndexed$_nth$arity$2(null,i__31583);
var map__31588__$1 = (((((!((map__31588 == null))))?(((((map__31588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31588):map__31588);
var effect = map__31588__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31588__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31588__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__31580,chunk__31581,count__31582,i__31583,map__31588,map__31588__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__31580,chunk__31581,count__31582,i__31583,map__31588,map__31588__$1,effect,ms,dispatch))
,ms);
}


var G__31592 = seq__31580;
var G__31593 = chunk__31581;
var G__31594 = count__31582;
var G__31595 = (i__31583 + (1));
seq__31580 = G__31592;
chunk__31581 = G__31593;
count__31582 = G__31594;
i__31583 = G__31595;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31580);
if(temp__5720__auto__){
var seq__31580__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31580__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31580__$1);
var G__31596 = cljs.core.chunk_rest(seq__31580__$1);
var G__31597 = c__4550__auto__;
var G__31598 = cljs.core.count(c__4550__auto__);
var G__31599 = (0);
seq__31580 = G__31596;
chunk__31581 = G__31597;
count__31582 = G__31598;
i__31583 = G__31599;
continue;
} else {
var map__31590 = cljs.core.first(seq__31580__$1);
var map__31590__$1 = (((((!((map__31590 == null))))?(((((map__31590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31590):map__31590);
var effect = map__31590__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31590__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31590__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__31580,chunk__31581,count__31582,i__31583,map__31590,map__31590__$1,effect,ms,dispatch,seq__31580__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__31580,chunk__31581,count__31582,i__31583,map__31590,map__31590__$1,effect,ms,dispatch,seq__31580__$1,temp__5720__auto__))
,ms);
}


var G__31600 = cljs.core.next(seq__31580__$1);
var G__31601 = null;
var G__31602 = (0);
var G__31603 = (0);
seq__31580 = G__31600;
chunk__31581 = G__31601;
count__31582 = G__31602;
i__31583 = G__31603;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__31604 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31605 = null;
var count__31606 = (0);
var i__31607 = (0);
while(true){
if((i__31607 < count__31606)){
var event = chunk__31605.cljs$core$IIndexed$_nth$arity$2(null,i__31607);
re_frame.router.dispatch(event);


var G__31608 = seq__31604;
var G__31609 = chunk__31605;
var G__31610 = count__31606;
var G__31611 = (i__31607 + (1));
seq__31604 = G__31608;
chunk__31605 = G__31609;
count__31606 = G__31610;
i__31607 = G__31611;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31604);
if(temp__5720__auto__){
var seq__31604__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31604__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31604__$1);
var G__31612 = cljs.core.chunk_rest(seq__31604__$1);
var G__31613 = c__4550__auto__;
var G__31614 = cljs.core.count(c__4550__auto__);
var G__31615 = (0);
seq__31604 = G__31612;
chunk__31605 = G__31613;
count__31606 = G__31614;
i__31607 = G__31615;
continue;
} else {
var event = cljs.core.first(seq__31604__$1);
re_frame.router.dispatch(event);


var G__31616 = cljs.core.next(seq__31604__$1);
var G__31617 = null;
var G__31618 = (0);
var G__31619 = (0);
seq__31604 = G__31616;
chunk__31605 = G__31617;
count__31606 = G__31618;
i__31607 = G__31619;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__31620 = cljs.core.seq(value);
var chunk__31621 = null;
var count__31622 = (0);
var i__31623 = (0);
while(true){
if((i__31623 < count__31622)){
var event = chunk__31621.cljs$core$IIndexed$_nth$arity$2(null,i__31623);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__31624 = seq__31620;
var G__31625 = chunk__31621;
var G__31626 = count__31622;
var G__31627 = (i__31623 + (1));
seq__31620 = G__31624;
chunk__31621 = G__31625;
count__31622 = G__31626;
i__31623 = G__31627;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31620);
if(temp__5720__auto__){
var seq__31620__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31620__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31620__$1);
var G__31628 = cljs.core.chunk_rest(seq__31620__$1);
var G__31629 = c__4550__auto__;
var G__31630 = cljs.core.count(c__4550__auto__);
var G__31631 = (0);
seq__31620 = G__31628;
chunk__31621 = G__31629;
count__31622 = G__31630;
i__31623 = G__31631;
continue;
} else {
var event = cljs.core.first(seq__31620__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__31632 = cljs.core.next(seq__31620__$1);
var G__31633 = null;
var G__31634 = (0);
var G__31635 = (0);
seq__31620 = G__31632;
chunk__31621 = G__31633;
count__31622 = G__31634;
i__31623 = G__31635;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
