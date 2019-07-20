// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__28216 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28217 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28217;

try{try{var seq__28218 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28219 = null;
var count__28220 = (0);
var i__28221 = (0);
while(true){
if((i__28221 < count__28220)){
var vec__28228 = cljs.core._nth.call(null,chunk__28219,i__28221);
var effect_key = cljs.core.nth.call(null,vec__28228,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28228,(1),null);
var temp__5718__auto___28250 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___28250)){
var effect_fn_28251 = temp__5718__auto___28250;
effect_fn_28251.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28252 = seq__28218;
var G__28253 = chunk__28219;
var G__28254 = count__28220;
var G__28255 = (i__28221 + (1));
seq__28218 = G__28252;
chunk__28219 = G__28253;
count__28220 = G__28254;
i__28221 = G__28255;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28218);
if(temp__5720__auto__){
var seq__28218__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28218__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28218__$1);
var G__28256 = cljs.core.chunk_rest.call(null,seq__28218__$1);
var G__28257 = c__4550__auto__;
var G__28258 = cljs.core.count.call(null,c__4550__auto__);
var G__28259 = (0);
seq__28218 = G__28256;
chunk__28219 = G__28257;
count__28220 = G__28258;
i__28221 = G__28259;
continue;
} else {
var vec__28231 = cljs.core.first.call(null,seq__28218__$1);
var effect_key = cljs.core.nth.call(null,vec__28231,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28231,(1),null);
var temp__5718__auto___28260 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___28260)){
var effect_fn_28261 = temp__5718__auto___28260;
effect_fn_28261.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28262 = cljs.core.next.call(null,seq__28218__$1);
var G__28263 = null;
var G__28264 = (0);
var G__28265 = (0);
seq__28218 = G__28262;
chunk__28219 = G__28263;
count__28220 = G__28264;
i__28221 = G__28265;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__28047__auto___28266 = re_frame.interop.now.call(null);
var duration__28048__auto___28267 = (end__28047__auto___28266 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28048__auto___28267,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__28047__auto___28266);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28216;
}} else {
var seq__28234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28235 = null;
var count__28236 = (0);
var i__28237 = (0);
while(true){
if((i__28237 < count__28236)){
var vec__28244 = cljs.core._nth.call(null,chunk__28235,i__28237);
var effect_key = cljs.core.nth.call(null,vec__28244,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28244,(1),null);
var temp__5718__auto___28268 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___28268)){
var effect_fn_28269 = temp__5718__auto___28268;
effect_fn_28269.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28270 = seq__28234;
var G__28271 = chunk__28235;
var G__28272 = count__28236;
var G__28273 = (i__28237 + (1));
seq__28234 = G__28270;
chunk__28235 = G__28271;
count__28236 = G__28272;
i__28237 = G__28273;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28234);
if(temp__5720__auto__){
var seq__28234__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28234__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28234__$1);
var G__28274 = cljs.core.chunk_rest.call(null,seq__28234__$1);
var G__28275 = c__4550__auto__;
var G__28276 = cljs.core.count.call(null,c__4550__auto__);
var G__28277 = (0);
seq__28234 = G__28274;
chunk__28235 = G__28275;
count__28236 = G__28276;
i__28237 = G__28277;
continue;
} else {
var vec__28247 = cljs.core.first.call(null,seq__28234__$1);
var effect_key = cljs.core.nth.call(null,vec__28247,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28247,(1),null);
var temp__5718__auto___28278 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___28278)){
var effect_fn_28279 = temp__5718__auto___28278;
effect_fn_28279.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28280 = cljs.core.next.call(null,seq__28234__$1);
var G__28281 = null;
var G__28282 = (0);
var G__28283 = (0);
seq__28234 = G__28280;
chunk__28235 = G__28281;
count__28236 = G__28282;
i__28237 = G__28283;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__28284 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28285 = null;
var count__28286 = (0);
var i__28287 = (0);
while(true){
if((i__28287 < count__28286)){
var map__28292 = cljs.core._nth.call(null,chunk__28285,i__28287);
var map__28292__$1 = (((((!((map__28292 == null))))?(((((map__28292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292):map__28292);
var effect = map__28292__$1;
var ms = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28284,chunk__28285,count__28286,i__28287,map__28292,map__28292__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28284,chunk__28285,count__28286,i__28287,map__28292,map__28292__$1,effect,ms,dispatch))
,ms);
}


var G__28296 = seq__28284;
var G__28297 = chunk__28285;
var G__28298 = count__28286;
var G__28299 = (i__28287 + (1));
seq__28284 = G__28296;
chunk__28285 = G__28297;
count__28286 = G__28298;
i__28287 = G__28299;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28284);
if(temp__5720__auto__){
var seq__28284__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28284__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28284__$1);
var G__28300 = cljs.core.chunk_rest.call(null,seq__28284__$1);
var G__28301 = c__4550__auto__;
var G__28302 = cljs.core.count.call(null,c__4550__auto__);
var G__28303 = (0);
seq__28284 = G__28300;
chunk__28285 = G__28301;
count__28286 = G__28302;
i__28287 = G__28303;
continue;
} else {
var map__28294 = cljs.core.first.call(null,seq__28284__$1);
var map__28294__$1 = (((((!((map__28294 == null))))?(((((map__28294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28294):map__28294);
var effect = map__28294__$1;
var ms = cljs.core.get.call(null,map__28294__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28294__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28284,chunk__28285,count__28286,i__28287,map__28294,map__28294__$1,effect,ms,dispatch,seq__28284__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28284,chunk__28285,count__28286,i__28287,map__28294,map__28294__$1,effect,ms,dispatch,seq__28284__$1,temp__5720__auto__))
,ms);
}


var G__28304 = cljs.core.next.call(null,seq__28284__$1);
var G__28305 = null;
var G__28306 = (0);
var G__28307 = (0);
seq__28284 = G__28304;
chunk__28285 = G__28305;
count__28286 = G__28306;
i__28287 = G__28307;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__28308 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28309 = null;
var count__28310 = (0);
var i__28311 = (0);
while(true){
if((i__28311 < count__28310)){
var event = cljs.core._nth.call(null,chunk__28309,i__28311);
re_frame.router.dispatch.call(null,event);


var G__28312 = seq__28308;
var G__28313 = chunk__28309;
var G__28314 = count__28310;
var G__28315 = (i__28311 + (1));
seq__28308 = G__28312;
chunk__28309 = G__28313;
count__28310 = G__28314;
i__28311 = G__28315;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28308);
if(temp__5720__auto__){
var seq__28308__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28308__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28308__$1);
var G__28316 = cljs.core.chunk_rest.call(null,seq__28308__$1);
var G__28317 = c__4550__auto__;
var G__28318 = cljs.core.count.call(null,c__4550__auto__);
var G__28319 = (0);
seq__28308 = G__28316;
chunk__28309 = G__28317;
count__28310 = G__28318;
i__28311 = G__28319;
continue;
} else {
var event = cljs.core.first.call(null,seq__28308__$1);
re_frame.router.dispatch.call(null,event);


var G__28320 = cljs.core.next.call(null,seq__28308__$1);
var G__28321 = null;
var G__28322 = (0);
var G__28323 = (0);
seq__28308 = G__28320;
chunk__28309 = G__28321;
count__28310 = G__28322;
i__28311 = G__28323;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__28324 = cljs.core.seq.call(null,value);
var chunk__28325 = null;
var count__28326 = (0);
var i__28327 = (0);
while(true){
if((i__28327 < count__28326)){
var event = cljs.core._nth.call(null,chunk__28325,i__28327);
clear_event.call(null,event);


var G__28328 = seq__28324;
var G__28329 = chunk__28325;
var G__28330 = count__28326;
var G__28331 = (i__28327 + (1));
seq__28324 = G__28328;
chunk__28325 = G__28329;
count__28326 = G__28330;
i__28327 = G__28331;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28324);
if(temp__5720__auto__){
var seq__28324__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28324__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28324__$1);
var G__28332 = cljs.core.chunk_rest.call(null,seq__28324__$1);
var G__28333 = c__4550__auto__;
var G__28334 = cljs.core.count.call(null,c__4550__auto__);
var G__28335 = (0);
seq__28324 = G__28332;
chunk__28325 = G__28333;
count__28326 = G__28334;
i__28327 = G__28335;
continue;
} else {
var event = cljs.core.first.call(null,seq__28324__$1);
clear_event.call(null,event);


var G__28336 = cljs.core.next.call(null,seq__28324__$1);
var G__28337 = null;
var G__28338 = (0);
var G__28339 = (0);
seq__28324 = G__28336;
chunk__28325 = G__28337;
count__28326 = G__28338;
i__28327 = G__28339;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1563617059458
