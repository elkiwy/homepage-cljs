// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__28069){
var map__28070 = p__28069;
var map__28070__$1 = (((((!((map__28070 == null))))?(((((map__28070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070):map__28070);
var operation = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__28072_28092 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__28073_28093 = null;
var count__28074_28094 = (0);
var i__28075_28095 = (0);
while(true){
if((i__28075_28095 < count__28074_28094)){
var vec__28084_28096 = cljs.core._nth.call(null,chunk__28073_28093,i__28075_28095);
var k_28097 = cljs.core.nth.call(null,vec__28084_28096,(0),null);
var cb_28098 = cljs.core.nth.call(null,vec__28084_28096,(1),null);
try{cb_28098.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e28087){var e_28099 = e28087;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_28097,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_28099);
}

var G__28100 = seq__28072_28092;
var G__28101 = chunk__28073_28093;
var G__28102 = count__28074_28094;
var G__28103 = (i__28075_28095 + (1));
seq__28072_28092 = G__28100;
chunk__28073_28093 = G__28101;
count__28074_28094 = G__28102;
i__28075_28095 = G__28103;
continue;
} else {
var temp__5720__auto___28104 = cljs.core.seq.call(null,seq__28072_28092);
if(temp__5720__auto___28104){
var seq__28072_28105__$1 = temp__5720__auto___28104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28072_28105__$1)){
var c__4550__auto___28106 = cljs.core.chunk_first.call(null,seq__28072_28105__$1);
var G__28107 = cljs.core.chunk_rest.call(null,seq__28072_28105__$1);
var G__28108 = c__4550__auto___28106;
var G__28109 = cljs.core.count.call(null,c__4550__auto___28106);
var G__28110 = (0);
seq__28072_28092 = G__28107;
chunk__28073_28093 = G__28108;
count__28074_28094 = G__28109;
i__28075_28095 = G__28110;
continue;
} else {
var vec__28088_28111 = cljs.core.first.call(null,seq__28072_28105__$1);
var k_28112 = cljs.core.nth.call(null,vec__28088_28111,(0),null);
var cb_28113 = cljs.core.nth.call(null,vec__28088_28111,(1),null);
try{cb_28113.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e28091){var e_28114 = e28091;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_28112,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_28114);
}

var G__28115 = cljs.core.next.call(null,seq__28072_28105__$1);
var G__28116 = null;
var G__28117 = (0);
var G__28118 = (0);
seq__28072_28092 = G__28115;
chunk__28073_28093 = G__28116;
count__28074_28094 = G__28117;
i__28075_28095 = G__28118;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1563617059222
