// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__32246){
var vec__32247 = p__32246;
var k = cljs.core.nth.call(null,vec__32247,(0),null);
var v = cljs.core.nth.call(null,vec__32247,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__32250 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__32250)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__32250)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__32250)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__32250)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__32250)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__32250)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32250)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__32251){
var map__32252 = p__32251;
var map__32252__$1 = (((((!((map__32252 == null))))?(((((map__32252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32252):map__32252);
var request = map__32252__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__32254 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__32254,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__32254,response_type);

G__32254.setTimeoutInterval(timeout);

G__32254.setWithCredentials(send_credentials);

return G__32254;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__32255){
var map__32256 = p__32255;
var map__32256__$1 = (((((!((map__32256 == null))))?(((((map__32256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);
var request = map__32256__$1;
var request_method = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_32280 = ((function (channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__32258_32281 = xhr;
G__32258_32281.setProgressEventsEnabled(true);

G__32258_32281.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_32280,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__32258_32281.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_32280,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__30304__auto___32282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_32269){
var state_val_32270 = (state_32269[(1)]);
if((state_val_32270 === (1))){
var state_32269__$1 = state_32269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32269__$1,(2),cancel);
} else {
if((state_val_32270 === (2))){
var inst_32260 = (state_32269[(2)]);
var inst_32261 = xhr.isComplete();
var inst_32262 = cljs.core.not.call(null,inst_32261);
var state_32269__$1 = (function (){var statearr_32271 = state_32269;
(statearr_32271[(7)] = inst_32260);

return statearr_32271;
})();
if(inst_32262){
var statearr_32272_32283 = state_32269__$1;
(statearr_32272_32283[(1)] = (3));

} else {
var statearr_32273_32284 = state_32269__$1;
(statearr_32273_32284[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (3))){
var inst_32264 = xhr.abort();
var state_32269__$1 = state_32269;
var statearr_32274_32285 = state_32269__$1;
(statearr_32274_32285[(2)] = inst_32264);

(statearr_32274_32285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (4))){
var state_32269__$1 = state_32269;
var statearr_32275_32286 = state_32269__$1;
(statearr_32275_32286[(2)] = null);

(statearr_32275_32286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (5))){
var inst_32267 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32269__$1,inst_32267);
} else {
return null;
}
}
}
}
}
});})(c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__30209__auto__,c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__30210__auto__ = null;
var cljs_http$core$xhr_$_state_machine__30210__auto____0 = (function (){
var statearr_32276 = [null,null,null,null,null,null,null,null];
(statearr_32276[(0)] = cljs_http$core$xhr_$_state_machine__30210__auto__);

(statearr_32276[(1)] = (1));

return statearr_32276;
});
var cljs_http$core$xhr_$_state_machine__30210__auto____1 = (function (state_32269){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_32269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e32277){if((e32277 instanceof Object)){
var ex__30213__auto__ = e32277;
var statearr_32278_32287 = state_32269;
(statearr_32278_32287[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_32269;
state_32269 = G__32288;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__30210__auto__ = function(state_32269){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__30210__auto____1.call(this,state_32269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__30210__auto____0;
cljs_http$core$xhr_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__30210__auto____1;
return cljs_http$core$xhr_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__30306__auto__ = (function (){var statearr_32279 = f__30305__auto__.call(null);
(statearr_32279[(6)] = c__30304__auto___32282);

return statearr_32279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___32282,channel,request_url,method,headers__$1,xhr,map__32256,map__32256__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__32289){
var map__32290 = p__32289;
var map__32290__$1 = (((((!((map__32290 == null))))?(((((map__32290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32290):map__32290);
var request = map__32290__$1;
var timeout = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_32303 = jsonp.send(null,((function (channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_32303], null));

if(cljs.core.truth_(cancel)){
var c__30304__auto___32304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (1))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32296__$1,(2),cancel);
} else {
if((state_val_32297 === (2))){
var inst_32293 = (state_32296[(2)]);
var inst_32294 = jsonp.cancel(req_32303);
var state_32296__$1 = (function (){var statearr_32298 = state_32296;
(statearr_32298[(7)] = inst_32293);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32296__$1,inst_32294);
} else {
return null;
}
}
});})(c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__30209__auto__,c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__30210__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__30210__auto____0 = (function (){
var statearr_32299 = [null,null,null,null,null,null,null,null];
(statearr_32299[(0)] = cljs_http$core$jsonp_$_state_machine__30210__auto__);

(statearr_32299[(1)] = (1));

return statearr_32299;
});
var cljs_http$core$jsonp_$_state_machine__30210__auto____1 = (function (state_32296){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_32296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e32300){if((e32300 instanceof Object)){
var ex__30213__auto__ = e32300;
var statearr_32301_32305 = state_32296;
(statearr_32301_32305[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32306 = state_32296;
state_32296 = G__32306;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__30210__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__30210__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__30210__auto____0;
cljs_http$core$jsonp_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__30210__auto____1;
return cljs_http$core$jsonp_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__30306__auto__ = (function (){var statearr_32302 = f__30305__auto__.call(null);
(statearr_32302[(6)] = c__30304__auto___32304);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___32304,req_32303,channel,jsonp,map__32290,map__32290__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__32307){
var map__32308 = p__32307;
var map__32308__$1 = (((((!((map__32308 == null))))?(((((map__32308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308):map__32308);
var request = map__32308__$1;
var request_method = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1563617061451
