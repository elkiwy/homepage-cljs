// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__30554 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__30554.cljs$core$IFn$_invoke$arity$1 ? fexpr__30554.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__30554.call(null,channel));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__30555){
var vec__30556 = p__30555;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__30559 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__30559)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__30559)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__30559)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__30559)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__30559)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__30559)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30559)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__30560){
var map__30561 = p__30560;
var map__30561__$1 = (((((!((map__30561 == null))))?(((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30561):map__30561);
var request = map__30561__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4131__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__30563 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__30563,default_headers);

cljs_http.core.apply_response_type_BANG_(G__30563,response_type);

G__30563.setTimeoutInterval(timeout);

G__30563.setWithCredentials(send_credentials);

return G__30563;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__30564){
var map__30565 = p__30564;
var map__30565__$1 = (((((!((map__30565 == null))))?(((((map__30565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30565):map__30565);
var request = map__30565__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__30567 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__30567) : cljs_http.core.error_kw.call(null,G__30567));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_30590 = ((function (channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__30568_30591 = xhr;
G__30568_30591.setProgressEventsEnabled(true);

G__30568_30591.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_30590,cljs.core.cst$kw$upload));

G__30568_30591.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_30590,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__28608__auto___30592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_30579){
var state_val_30580 = (state_30579[(1)]);
if((state_val_30580 === (1))){
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30579__$1,(2),cancel);
} else {
if((state_val_30580 === (2))){
var inst_30570 = (state_30579[(2)]);
var inst_30571 = xhr.isComplete();
var inst_30572 = cljs.core.not(inst_30571);
var state_30579__$1 = (function (){var statearr_30581 = state_30579;
(statearr_30581[(7)] = inst_30570);

return statearr_30581;
})();
if(inst_30572){
var statearr_30582_30593 = state_30579__$1;
(statearr_30582_30593[(1)] = (3));

} else {
var statearr_30583_30594 = state_30579__$1;
(statearr_30583_30594[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30580 === (3))){
var inst_30574 = xhr.abort();
var state_30579__$1 = state_30579;
var statearr_30584_30595 = state_30579__$1;
(statearr_30584_30595[(2)] = inst_30574);

(statearr_30584_30595[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30580 === (4))){
var state_30579__$1 = state_30579;
var statearr_30585_30596 = state_30579__$1;
(statearr_30585_30596[(2)] = null);

(statearr_30585_30596[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30580 === (5))){
var inst_30577 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30579__$1,inst_30577);
} else {
return null;
}
}
}
}
}
});})(c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__28501__auto__,c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__28502__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28502__auto____0 = (function (){
var statearr_30586 = [null,null,null,null,null,null,null,null];
(statearr_30586[(0)] = cljs_http$core$xhr_$_state_machine__28502__auto__);

(statearr_30586[(1)] = (1));

return statearr_30586;
});
var cljs_http$core$xhr_$_state_machine__28502__auto____1 = (function (state_30579){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30579);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30587){if((e30587 instanceof Object)){
var ex__28505__auto__ = e30587;
var statearr_30588_30597 = state_30579;
(statearr_30588_30597[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30579);

return cljs.core.cst$kw$recur;
} else {
throw e30587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30598 = state_30579;
state_30579 = G__30598;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28502__auto__ = function(state_30579){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28502__auto____1.call(this,state_30579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28502__auto____0;
cljs_http$core$xhr_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28502__auto____1;
return cljs_http$core$xhr_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__28610__auto__ = (function (){var statearr_30589 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30589[(6)] = c__28608__auto___30592);

return statearr_30589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30592,channel,request_url,method,headers__$1,xhr,map__30565,map__30565__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__30599){
var map__30600 = p__30599;
var map__30600__$1 = (((((!((map__30600 == null))))?(((((map__30600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30600):map__30600);
var request = map__30600__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30600__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30600__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30600__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30600__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_30613 = jsonp.send(null,((function (channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_30613], null));

if(cljs.core.truth_(cancel)){
var c__28608__auto___30614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (1))){
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30606__$1,(2),cancel);
} else {
if((state_val_30607 === (2))){
var inst_30603 = (state_30606[(2)]);
var inst_30604 = jsonp.cancel(req_30613);
var state_30606__$1 = (function (){var statearr_30608 = state_30606;
(statearr_30608[(7)] = inst_30603);

return statearr_30608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30606__$1,inst_30604);
} else {
return null;
}
}
});})(c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__28501__auto__,c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__28502__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28502__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = cljs_http$core$jsonp_$_state_machine__28502__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var cljs_http$core$jsonp_$_state_machine__28502__auto____1 = (function (state_30606){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30606);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30610){if((e30610 instanceof Object)){
var ex__28505__auto__ = e30610;
var statearr_30611_30615 = state_30606;
(statearr_30611_30615[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30606);

return cljs.core.cst$kw$recur;
} else {
throw e30610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30616 = state_30606;
state_30606 = G__30616;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28502__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28502__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28502__auto____0;
cljs_http$core$jsonp_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28502__auto____1;
return cljs_http$core$jsonp_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__28610__auto__ = (function (){var statearr_30612 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30612[(6)] = c__28608__auto___30614);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30614,req_30613,channel,jsonp,map__30600,map__30600__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__30617){
var map__30618 = p__30617;
var map__30618__$1 = (((((!((map__30618 == null))))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30618):map__30618);
var request = map__30618__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
