// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30364 = arguments.length;
switch (G__30364) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30365 = (function (f,blockable,meta30366){
this.f = f;
this.blockable = blockable;
this.meta30366 = meta30366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30367,meta30366__$1){
var self__ = this;
var _30367__$1 = this;
return (new cljs.core.async.t_cljs$core$async30365(self__.f,self__.blockable,meta30366__$1));
});

cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30367){
var self__ = this;
var _30367__$1 = this;
return self__.meta30366;
});

cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30366","meta30366",-1234800898,null)], null);
});

cljs.core.async.t_cljs$core$async30365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30365";

cljs.core.async.t_cljs$core$async30365.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30365");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30365.
 */
cljs.core.async.__GT_t_cljs$core$async30365 = (function cljs$core$async$__GT_t_cljs$core$async30365(f__$1,blockable__$1,meta30366){
return (new cljs.core.async.t_cljs$core$async30365(f__$1,blockable__$1,meta30366));
});

}

return (new cljs.core.async.t_cljs$core$async30365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30371 = arguments.length;
switch (G__30371) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30374 = arguments.length;
switch (G__30374) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30377 = arguments.length;
switch (G__30377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30379 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30379);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30379,ret){
return (function (){
return fn1.call(null,val_30379);
});})(val_30379,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30381 = arguments.length;
switch (G__30381) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___30383 = n;
var x_30384 = (0);
while(true){
if((x_30384 < n__4607__auto___30383)){
(a[x_30384] = (0));

var G__30385 = (x_30384 + (1));
x_30384 = G__30385;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30386 = (i + (1));
i = G__30386;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30387 = (function (flag,meta30388){
this.flag = flag;
this.meta30388 = meta30388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30389,meta30388__$1){
var self__ = this;
var _30389__$1 = this;
return (new cljs.core.async.t_cljs$core$async30387(self__.flag,meta30388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30389){
var self__ = this;
var _30389__$1 = this;
return self__.meta30388;
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30388","meta30388",1717092134,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30387";

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30387");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30387.
 */
cljs.core.async.__GT_t_cljs$core$async30387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30387(flag__$1,meta30388){
return (new cljs.core.async.t_cljs$core$async30387(flag__$1,meta30388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30390 = (function (flag,cb,meta30391){
this.flag = flag;
this.cb = cb;
this.meta30391 = meta30391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30392,meta30391__$1){
var self__ = this;
var _30392__$1 = this;
return (new cljs.core.async.t_cljs$core$async30390(self__.flag,self__.cb,meta30391__$1));
});

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30392){
var self__ = this;
var _30392__$1 = this;
return self__.meta30391;
});

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30391","meta30391",-1348870981,null)], null);
});

cljs.core.async.t_cljs$core$async30390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30390";

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30390.
 */
cljs.core.async.__GT_t_cljs$core$async30390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30390(flag__$1,cb__$1,meta30391){
return (new cljs.core.async.t_cljs$core$async30390(flag__$1,cb__$1,meta30391));
});

}

return (new cljs.core.async.t_cljs$core$async30390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30395 = (i + (1));
i = G__30395;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30401 = arguments.length;
var i__4731__auto___30402 = (0);
while(true){
if((i__4731__auto___30402 < len__4730__auto___30401)){
args__4736__auto__.push((arguments[i__4731__auto___30402]));

var G__30403 = (i__4731__auto___30402 + (1));
i__4731__auto___30402 = G__30403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30398){
var map__30399 = p__30398;
var map__30399__$1 = (((((!((map__30399 == null))))?(((((map__30399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);
var opts = map__30399__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30396){
var G__30397 = cljs.core.first.call(null,seq30396);
var seq30396__$1 = cljs.core.next.call(null,seq30396);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30397,seq30396__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30405 = arguments.length;
switch (G__30405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30304__auto___30451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___30451){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___30451){
return (function (state_30429){
var state_val_30430 = (state_30429[(1)]);
if((state_val_30430 === (7))){
var inst_30425 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30431_30452 = state_30429__$1;
(statearr_30431_30452[(2)] = inst_30425);

(statearr_30431_30452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (1))){
var state_30429__$1 = state_30429;
var statearr_30432_30453 = state_30429__$1;
(statearr_30432_30453[(2)] = null);

(statearr_30432_30453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (4))){
var inst_30408 = (state_30429[(7)]);
var inst_30408__$1 = (state_30429[(2)]);
var inst_30409 = (inst_30408__$1 == null);
var state_30429__$1 = (function (){var statearr_30433 = state_30429;
(statearr_30433[(7)] = inst_30408__$1);

return statearr_30433;
})();
if(cljs.core.truth_(inst_30409)){
var statearr_30434_30454 = state_30429__$1;
(statearr_30434_30454[(1)] = (5));

} else {
var statearr_30435_30455 = state_30429__$1;
(statearr_30435_30455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (13))){
var state_30429__$1 = state_30429;
var statearr_30436_30456 = state_30429__$1;
(statearr_30436_30456[(2)] = null);

(statearr_30436_30456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (6))){
var inst_30408 = (state_30429[(7)]);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30429__$1,(11),to,inst_30408);
} else {
if((state_val_30430 === (3))){
var inst_30427 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30429__$1,inst_30427);
} else {
if((state_val_30430 === (12))){
var state_30429__$1 = state_30429;
var statearr_30437_30457 = state_30429__$1;
(statearr_30437_30457[(2)] = null);

(statearr_30437_30457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (2))){
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30429__$1,(4),from);
} else {
if((state_val_30430 === (11))){
var inst_30418 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
if(cljs.core.truth_(inst_30418)){
var statearr_30438_30458 = state_30429__$1;
(statearr_30438_30458[(1)] = (12));

} else {
var statearr_30439_30459 = state_30429__$1;
(statearr_30439_30459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (9))){
var state_30429__$1 = state_30429;
var statearr_30440_30460 = state_30429__$1;
(statearr_30440_30460[(2)] = null);

(statearr_30440_30460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (5))){
var state_30429__$1 = state_30429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30441_30461 = state_30429__$1;
(statearr_30441_30461[(1)] = (8));

} else {
var statearr_30442_30462 = state_30429__$1;
(statearr_30442_30462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (14))){
var inst_30423 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30443_30463 = state_30429__$1;
(statearr_30443_30463[(2)] = inst_30423);

(statearr_30443_30463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (10))){
var inst_30415 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30444_30464 = state_30429__$1;
(statearr_30444_30464[(2)] = inst_30415);

(statearr_30444_30464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (8))){
var inst_30412 = cljs.core.async.close_BANG_.call(null,to);
var state_30429__$1 = state_30429;
var statearr_30445_30465 = state_30429__$1;
(statearr_30445_30465[(2)] = inst_30412);

(statearr_30445_30465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___30451))
;
return ((function (switch__30209__auto__,c__30304__auto___30451){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_30446 = [null,null,null,null,null,null,null,null];
(statearr_30446[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_30446[(1)] = (1));

return statearr_30446;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_30429){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30447){if((e30447 instanceof Object)){
var ex__30213__auto__ = e30447;
var statearr_30448_30466 = state_30429;
(statearr_30448_30466[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30429;
state_30429 = G__30467;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_30429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_30429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___30451))
})();
var state__30306__auto__ = (function (){var statearr_30449 = f__30305__auto__.call(null);
(statearr_30449[(6)] = c__30304__auto___30451);

return statearr_30449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___30451))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30468){
var vec__30469 = p__30468;
var v = cljs.core.nth.call(null,vec__30469,(0),null);
var p = cljs.core.nth.call(null,vec__30469,(1),null);
var job = vec__30469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30304__auto___30640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results){
return (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (1))){
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30476__$1,(2),res,v);
} else {
if((state_val_30477 === (2))){
var inst_30473 = (state_30476[(2)]);
var inst_30474 = cljs.core.async.close_BANG_.call(null,res);
var state_30476__$1 = (function (){var statearr_30478 = state_30476;
(statearr_30478[(7)] = inst_30473);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30476__$1,inst_30474);
} else {
return null;
}
}
});})(c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results))
;
return ((function (switch__30209__auto__,c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1 = (function (state_30476){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30480){if((e30480 instanceof Object)){
var ex__30213__auto__ = e30480;
var statearr_30481_30641 = state_30476;
(statearr_30481_30641[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30642 = state_30476;
state_30476 = G__30642;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results))
})();
var state__30306__auto__ = (function (){var statearr_30482 = f__30305__auto__.call(null);
(statearr_30482[(6)] = c__30304__auto___30640);

return statearr_30482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___30640,res,vec__30469,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30483){
var vec__30484 = p__30483;
var v = cljs.core.nth.call(null,vec__30484,(0),null);
var p = cljs.core.nth.call(null,vec__30484,(1),null);
var job = vec__30484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___30643 = n;
var __30644 = (0);
while(true){
if((__30644 < n__4607__auto___30643)){
var G__30487_30645 = type;
var G__30487_30646__$1 = (((G__30487_30645 instanceof cljs.core.Keyword))?G__30487_30645.fqn:null);
switch (G__30487_30646__$1) {
case "compute":
var c__30304__auto___30648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30644,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (__30644,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function (state_30500){
var state_val_30501 = (state_30500[(1)]);
if((state_val_30501 === (1))){
var state_30500__$1 = state_30500;
var statearr_30502_30649 = state_30500__$1;
(statearr_30502_30649[(2)] = null);

(statearr_30502_30649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (2))){
var state_30500__$1 = state_30500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30500__$1,(4),jobs);
} else {
if((state_val_30501 === (3))){
var inst_30498 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30500__$1,inst_30498);
} else {
if((state_val_30501 === (4))){
var inst_30490 = (state_30500[(2)]);
var inst_30491 = process.call(null,inst_30490);
var state_30500__$1 = state_30500;
if(cljs.core.truth_(inst_30491)){
var statearr_30503_30650 = state_30500__$1;
(statearr_30503_30650[(1)] = (5));

} else {
var statearr_30504_30651 = state_30500__$1;
(statearr_30504_30651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (5))){
var state_30500__$1 = state_30500;
var statearr_30505_30652 = state_30500__$1;
(statearr_30505_30652[(2)] = null);

(statearr_30505_30652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (6))){
var state_30500__$1 = state_30500;
var statearr_30506_30653 = state_30500__$1;
(statearr_30506_30653[(2)] = null);

(statearr_30506_30653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (7))){
var inst_30496 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
var statearr_30507_30654 = state_30500__$1;
(statearr_30507_30654[(2)] = inst_30496);

(statearr_30507_30654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30644,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
;
return ((function (__30644,switch__30209__auto__,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null];
(statearr_30508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1 = (function (state_30500){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30509){if((e30509 instanceof Object)){
var ex__30213__auto__ = e30509;
var statearr_30510_30655 = state_30500;
(statearr_30510_30655[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30656 = state_30500;
state_30500 = G__30656;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = function(state_30500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1.call(this,state_30500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__;
})()
;})(__30644,switch__30209__auto__,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
})();
var state__30306__auto__ = (function (){var statearr_30511 = f__30305__auto__.call(null);
(statearr_30511[(6)] = c__30304__auto___30648);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(__30644,c__30304__auto___30648,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
);


break;
case "async":
var c__30304__auto___30657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30644,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (__30644,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function (state_30524){
var state_val_30525 = (state_30524[(1)]);
if((state_val_30525 === (1))){
var state_30524__$1 = state_30524;
var statearr_30526_30658 = state_30524__$1;
(statearr_30526_30658[(2)] = null);

(statearr_30526_30658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (2))){
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30524__$1,(4),jobs);
} else {
if((state_val_30525 === (3))){
var inst_30522 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30524__$1,inst_30522);
} else {
if((state_val_30525 === (4))){
var inst_30514 = (state_30524[(2)]);
var inst_30515 = async.call(null,inst_30514);
var state_30524__$1 = state_30524;
if(cljs.core.truth_(inst_30515)){
var statearr_30527_30659 = state_30524__$1;
(statearr_30527_30659[(1)] = (5));

} else {
var statearr_30528_30660 = state_30524__$1;
(statearr_30528_30660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (5))){
var state_30524__$1 = state_30524;
var statearr_30529_30661 = state_30524__$1;
(statearr_30529_30661[(2)] = null);

(statearr_30529_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (6))){
var state_30524__$1 = state_30524;
var statearr_30530_30662 = state_30524__$1;
(statearr_30530_30662[(2)] = null);

(statearr_30530_30662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (7))){
var inst_30520 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
var statearr_30531_30663 = state_30524__$1;
(statearr_30531_30663[(2)] = inst_30520);

(statearr_30531_30663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30644,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
;
return ((function (__30644,switch__30209__auto__,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1 = (function (state_30524){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object)){
var ex__30213__auto__ = e30533;
var statearr_30534_30664 = state_30524;
(statearr_30534_30664[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30665 = state_30524;
state_30524 = G__30665;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = function(state_30524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1.call(this,state_30524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__;
})()
;})(__30644,switch__30209__auto__,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
})();
var state__30306__auto__ = (function (){var statearr_30535 = f__30305__auto__.call(null);
(statearr_30535[(6)] = c__30304__auto___30657);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(__30644,c__30304__auto___30657,G__30487_30645,G__30487_30646__$1,n__4607__auto___30643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30487_30646__$1)].join('')));

}

var G__30666 = (__30644 + (1));
__30644 = G__30666;
continue;
} else {
}
break;
}

var c__30304__auto___30667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___30667,jobs,results,process,async){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___30667,jobs,results,process,async){
return (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (7))){
var inst_30553 = (state_30557[(2)]);
var state_30557__$1 = state_30557;
var statearr_30559_30668 = state_30557__$1;
(statearr_30559_30668[(2)] = inst_30553);

(statearr_30559_30668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (1))){
var state_30557__$1 = state_30557;
var statearr_30560_30669 = state_30557__$1;
(statearr_30560_30669[(2)] = null);

(statearr_30560_30669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (4))){
var inst_30538 = (state_30557[(7)]);
var inst_30538__$1 = (state_30557[(2)]);
var inst_30539 = (inst_30538__$1 == null);
var state_30557__$1 = (function (){var statearr_30561 = state_30557;
(statearr_30561[(7)] = inst_30538__$1);

return statearr_30561;
})();
if(cljs.core.truth_(inst_30539)){
var statearr_30562_30670 = state_30557__$1;
(statearr_30562_30670[(1)] = (5));

} else {
var statearr_30563_30671 = state_30557__$1;
(statearr_30563_30671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (6))){
var inst_30538 = (state_30557[(7)]);
var inst_30543 = (state_30557[(8)]);
var inst_30543__$1 = cljs.core.async.chan.call(null,(1));
var inst_30544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30545 = [inst_30538,inst_30543__$1];
var inst_30546 = (new cljs.core.PersistentVector(null,2,(5),inst_30544,inst_30545,null));
var state_30557__$1 = (function (){var statearr_30564 = state_30557;
(statearr_30564[(8)] = inst_30543__$1);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30557__$1,(8),jobs,inst_30546);
} else {
if((state_val_30558 === (3))){
var inst_30555 = (state_30557[(2)]);
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30557__$1,inst_30555);
} else {
if((state_val_30558 === (2))){
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30557__$1,(4),from);
} else {
if((state_val_30558 === (9))){
var inst_30550 = (state_30557[(2)]);
var state_30557__$1 = (function (){var statearr_30565 = state_30557;
(statearr_30565[(9)] = inst_30550);

return statearr_30565;
})();
var statearr_30566_30672 = state_30557__$1;
(statearr_30566_30672[(2)] = null);

(statearr_30566_30672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (5))){
var inst_30541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30557__$1 = state_30557;
var statearr_30567_30673 = state_30557__$1;
(statearr_30567_30673[(2)] = inst_30541);

(statearr_30567_30673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (8))){
var inst_30543 = (state_30557[(8)]);
var inst_30548 = (state_30557[(2)]);
var state_30557__$1 = (function (){var statearr_30568 = state_30557;
(statearr_30568[(10)] = inst_30548);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30557__$1,(9),results,inst_30543);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___30667,jobs,results,process,async))
;
return ((function (switch__30209__auto__,c__30304__auto___30667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1 = (function (state_30557){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30570){if((e30570 instanceof Object)){
var ex__30213__auto__ = e30570;
var statearr_30571_30674 = state_30557;
(statearr_30571_30674[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30675 = state_30557;
state_30557 = G__30675;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___30667,jobs,results,process,async))
})();
var state__30306__auto__ = (function (){var statearr_30572 = f__30305__auto__.call(null);
(statearr_30572[(6)] = c__30304__auto___30667);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___30667,jobs,results,process,async))
);


var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__,jobs,results,process,async){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__,jobs,results,process,async){
return (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (7))){
var inst_30606 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30612_30676 = state_30610__$1;
(statearr_30612_30676[(2)] = inst_30606);

(statearr_30612_30676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (20))){
var state_30610__$1 = state_30610;
var statearr_30613_30677 = state_30610__$1;
(statearr_30613_30677[(2)] = null);

(statearr_30613_30677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (1))){
var state_30610__$1 = state_30610;
var statearr_30614_30678 = state_30610__$1;
(statearr_30614_30678[(2)] = null);

(statearr_30614_30678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (4))){
var inst_30575 = (state_30610[(7)]);
var inst_30575__$1 = (state_30610[(2)]);
var inst_30576 = (inst_30575__$1 == null);
var state_30610__$1 = (function (){var statearr_30615 = state_30610;
(statearr_30615[(7)] = inst_30575__$1);

return statearr_30615;
})();
if(cljs.core.truth_(inst_30576)){
var statearr_30616_30679 = state_30610__$1;
(statearr_30616_30679[(1)] = (5));

} else {
var statearr_30617_30680 = state_30610__$1;
(statearr_30617_30680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (15))){
var inst_30588 = (state_30610[(8)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30610__$1,(18),to,inst_30588);
} else {
if((state_val_30611 === (21))){
var inst_30601 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30618_30681 = state_30610__$1;
(statearr_30618_30681[(2)] = inst_30601);

(statearr_30618_30681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (13))){
var inst_30603 = (state_30610[(2)]);
var state_30610__$1 = (function (){var statearr_30619 = state_30610;
(statearr_30619[(9)] = inst_30603);

return statearr_30619;
})();
var statearr_30620_30682 = state_30610__$1;
(statearr_30620_30682[(2)] = null);

(statearr_30620_30682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (6))){
var inst_30575 = (state_30610[(7)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(11),inst_30575);
} else {
if((state_val_30611 === (17))){
var inst_30596 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30596)){
var statearr_30621_30683 = state_30610__$1;
(statearr_30621_30683[(1)] = (19));

} else {
var statearr_30622_30684 = state_30610__$1;
(statearr_30622_30684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (3))){
var inst_30608 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30610__$1,inst_30608);
} else {
if((state_val_30611 === (12))){
var inst_30585 = (state_30610[(10)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(14),inst_30585);
} else {
if((state_val_30611 === (2))){
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(4),results);
} else {
if((state_val_30611 === (19))){
var state_30610__$1 = state_30610;
var statearr_30623_30685 = state_30610__$1;
(statearr_30623_30685[(2)] = null);

(statearr_30623_30685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (11))){
var inst_30585 = (state_30610[(2)]);
var state_30610__$1 = (function (){var statearr_30624 = state_30610;
(statearr_30624[(10)] = inst_30585);

return statearr_30624;
})();
var statearr_30625_30686 = state_30610__$1;
(statearr_30625_30686[(2)] = null);

(statearr_30625_30686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (9))){
var state_30610__$1 = state_30610;
var statearr_30626_30687 = state_30610__$1;
(statearr_30626_30687[(2)] = null);

(statearr_30626_30687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (5))){
var state_30610__$1 = state_30610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30627_30688 = state_30610__$1;
(statearr_30627_30688[(1)] = (8));

} else {
var statearr_30628_30689 = state_30610__$1;
(statearr_30628_30689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (14))){
var inst_30588 = (state_30610[(8)]);
var inst_30590 = (state_30610[(11)]);
var inst_30588__$1 = (state_30610[(2)]);
var inst_30589 = (inst_30588__$1 == null);
var inst_30590__$1 = cljs.core.not.call(null,inst_30589);
var state_30610__$1 = (function (){var statearr_30629 = state_30610;
(statearr_30629[(8)] = inst_30588__$1);

(statearr_30629[(11)] = inst_30590__$1);

return statearr_30629;
})();
if(inst_30590__$1){
var statearr_30630_30690 = state_30610__$1;
(statearr_30630_30690[(1)] = (15));

} else {
var statearr_30631_30691 = state_30610__$1;
(statearr_30631_30691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (16))){
var inst_30590 = (state_30610[(11)]);
var state_30610__$1 = state_30610;
var statearr_30632_30692 = state_30610__$1;
(statearr_30632_30692[(2)] = inst_30590);

(statearr_30632_30692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (10))){
var inst_30582 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30633_30693 = state_30610__$1;
(statearr_30633_30693[(2)] = inst_30582);

(statearr_30633_30693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (18))){
var inst_30593 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30634_30694 = state_30610__$1;
(statearr_30634_30694[(2)] = inst_30593);

(statearr_30634_30694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (8))){
var inst_30579 = cljs.core.async.close_BANG_.call(null,to);
var state_30610__$1 = state_30610;
var statearr_30635_30695 = state_30610__$1;
(statearr_30635_30695[(2)] = inst_30579);

(statearr_30635_30695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto__,jobs,results,process,async))
;
return ((function (switch__30209__auto__,c__30304__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_30636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__);

(statearr_30636[(1)] = (1));

return statearr_30636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1 = (function (state_30610){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30637){if((e30637 instanceof Object)){
var ex__30213__auto__ = e30637;
var statearr_30638_30696 = state_30610;
(statearr_30638_30696[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30697 = state_30610;
state_30610 = G__30697;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__,jobs,results,process,async))
})();
var state__30306__auto__ = (function (){var statearr_30639 = f__30305__auto__.call(null);
(statearr_30639[(6)] = c__30304__auto__);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__,jobs,results,process,async))
);

return c__30304__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30699 = arguments.length;
switch (G__30699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30702 = arguments.length;
switch (G__30702) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30705 = arguments.length;
switch (G__30705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30304__auto___30754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___30754,tc,fc){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___30754,tc,fc){
return (function (state_30731){
var state_val_30732 = (state_30731[(1)]);
if((state_val_30732 === (7))){
var inst_30727 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
var statearr_30733_30755 = state_30731__$1;
(statearr_30733_30755[(2)] = inst_30727);

(statearr_30733_30755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (1))){
var state_30731__$1 = state_30731;
var statearr_30734_30756 = state_30731__$1;
(statearr_30734_30756[(2)] = null);

(statearr_30734_30756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (4))){
var inst_30708 = (state_30731[(7)]);
var inst_30708__$1 = (state_30731[(2)]);
var inst_30709 = (inst_30708__$1 == null);
var state_30731__$1 = (function (){var statearr_30735 = state_30731;
(statearr_30735[(7)] = inst_30708__$1);

return statearr_30735;
})();
if(cljs.core.truth_(inst_30709)){
var statearr_30736_30757 = state_30731__$1;
(statearr_30736_30757[(1)] = (5));

} else {
var statearr_30737_30758 = state_30731__$1;
(statearr_30737_30758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (13))){
var state_30731__$1 = state_30731;
var statearr_30738_30759 = state_30731__$1;
(statearr_30738_30759[(2)] = null);

(statearr_30738_30759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (6))){
var inst_30708 = (state_30731[(7)]);
var inst_30714 = p.call(null,inst_30708);
var state_30731__$1 = state_30731;
if(cljs.core.truth_(inst_30714)){
var statearr_30739_30760 = state_30731__$1;
(statearr_30739_30760[(1)] = (9));

} else {
var statearr_30740_30761 = state_30731__$1;
(statearr_30740_30761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (3))){
var inst_30729 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30731__$1,inst_30729);
} else {
if((state_val_30732 === (12))){
var state_30731__$1 = state_30731;
var statearr_30741_30762 = state_30731__$1;
(statearr_30741_30762[(2)] = null);

(statearr_30741_30762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (2))){
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30731__$1,(4),ch);
} else {
if((state_val_30732 === (11))){
var inst_30708 = (state_30731[(7)]);
var inst_30718 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30731__$1,(8),inst_30718,inst_30708);
} else {
if((state_val_30732 === (9))){
var state_30731__$1 = state_30731;
var statearr_30742_30763 = state_30731__$1;
(statearr_30742_30763[(2)] = tc);

(statearr_30742_30763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (5))){
var inst_30711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30712 = cljs.core.async.close_BANG_.call(null,fc);
var state_30731__$1 = (function (){var statearr_30743 = state_30731;
(statearr_30743[(8)] = inst_30711);

return statearr_30743;
})();
var statearr_30744_30764 = state_30731__$1;
(statearr_30744_30764[(2)] = inst_30712);

(statearr_30744_30764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (14))){
var inst_30725 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
var statearr_30745_30765 = state_30731__$1;
(statearr_30745_30765[(2)] = inst_30725);

(statearr_30745_30765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (10))){
var state_30731__$1 = state_30731;
var statearr_30746_30766 = state_30731__$1;
(statearr_30746_30766[(2)] = fc);

(statearr_30746_30766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (8))){
var inst_30720 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
if(cljs.core.truth_(inst_30720)){
var statearr_30747_30767 = state_30731__$1;
(statearr_30747_30767[(1)] = (12));

} else {
var statearr_30748_30768 = state_30731__$1;
(statearr_30748_30768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___30754,tc,fc))
;
return ((function (switch__30209__auto__,c__30304__auto___30754,tc,fc){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_30749 = [null,null,null,null,null,null,null,null,null];
(statearr_30749[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_30749[(1)] = (1));

return statearr_30749;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_30731){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30750){if((e30750 instanceof Object)){
var ex__30213__auto__ = e30750;
var statearr_30751_30769 = state_30731;
(statearr_30751_30769[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30770 = state_30731;
state_30731 = G__30770;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_30731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_30731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___30754,tc,fc))
})();
var state__30306__auto__ = (function (){var statearr_30752 = f__30305__auto__.call(null);
(statearr_30752[(6)] = c__30304__auto___30754);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___30754,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_30791){
var state_val_30792 = (state_30791[(1)]);
if((state_val_30792 === (7))){
var inst_30787 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30793_30811 = state_30791__$1;
(statearr_30793_30811[(2)] = inst_30787);

(statearr_30793_30811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (1))){
var inst_30771 = init;
var state_30791__$1 = (function (){var statearr_30794 = state_30791;
(statearr_30794[(7)] = inst_30771);

return statearr_30794;
})();
var statearr_30795_30812 = state_30791__$1;
(statearr_30795_30812[(2)] = null);

(statearr_30795_30812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (4))){
var inst_30774 = (state_30791[(8)]);
var inst_30774__$1 = (state_30791[(2)]);
var inst_30775 = (inst_30774__$1 == null);
var state_30791__$1 = (function (){var statearr_30796 = state_30791;
(statearr_30796[(8)] = inst_30774__$1);

return statearr_30796;
})();
if(cljs.core.truth_(inst_30775)){
var statearr_30797_30813 = state_30791__$1;
(statearr_30797_30813[(1)] = (5));

} else {
var statearr_30798_30814 = state_30791__$1;
(statearr_30798_30814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (6))){
var inst_30778 = (state_30791[(9)]);
var inst_30774 = (state_30791[(8)]);
var inst_30771 = (state_30791[(7)]);
var inst_30778__$1 = f.call(null,inst_30771,inst_30774);
var inst_30779 = cljs.core.reduced_QMARK_.call(null,inst_30778__$1);
var state_30791__$1 = (function (){var statearr_30799 = state_30791;
(statearr_30799[(9)] = inst_30778__$1);

return statearr_30799;
})();
if(inst_30779){
var statearr_30800_30815 = state_30791__$1;
(statearr_30800_30815[(1)] = (8));

} else {
var statearr_30801_30816 = state_30791__$1;
(statearr_30801_30816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (3))){
var inst_30789 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else {
if((state_val_30792 === (2))){
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30791__$1,(4),ch);
} else {
if((state_val_30792 === (9))){
var inst_30778 = (state_30791[(9)]);
var inst_30771 = inst_30778;
var state_30791__$1 = (function (){var statearr_30802 = state_30791;
(statearr_30802[(7)] = inst_30771);

return statearr_30802;
})();
var statearr_30803_30817 = state_30791__$1;
(statearr_30803_30817[(2)] = null);

(statearr_30803_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (5))){
var inst_30771 = (state_30791[(7)]);
var state_30791__$1 = state_30791;
var statearr_30804_30818 = state_30791__$1;
(statearr_30804_30818[(2)] = inst_30771);

(statearr_30804_30818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (10))){
var inst_30785 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30805_30819 = state_30791__$1;
(statearr_30805_30819[(2)] = inst_30785);

(statearr_30805_30819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (8))){
var inst_30778 = (state_30791[(9)]);
var inst_30781 = cljs.core.deref.call(null,inst_30778);
var state_30791__$1 = state_30791;
var statearr_30806_30820 = state_30791__$1;
(statearr_30806_30820[(2)] = inst_30781);

(statearr_30806_30820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30210__auto____0 = (function (){
var statearr_30807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30807[(0)] = cljs$core$async$reduce_$_state_machine__30210__auto__);

(statearr_30807[(1)] = (1));

return statearr_30807;
});
var cljs$core$async$reduce_$_state_machine__30210__auto____1 = (function (state_30791){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30808){if((e30808 instanceof Object)){
var ex__30213__auto__ = e30808;
var statearr_30809_30821 = state_30791;
(statearr_30809_30821[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30822 = state_30791;
state_30791 = G__30822;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30210__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30210__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30210__auto____0;
cljs$core$async$reduce_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30210__auto____1;
return cljs$core$async$reduce_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_30810 = f__30305__auto__.call(null);
(statearr_30810[(6)] = c__30304__auto__);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__,f__$1){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__,f__$1){
return (function (state_30828){
var state_val_30829 = (state_30828[(1)]);
if((state_val_30829 === (1))){
var inst_30823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30828__$1,(2),inst_30823);
} else {
if((state_val_30829 === (2))){
var inst_30825 = (state_30828[(2)]);
var inst_30826 = f__$1.call(null,inst_30825);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30828__$1,inst_30826);
} else {
return null;
}
}
});})(c__30304__auto__,f__$1))
;
return ((function (switch__30209__auto__,c__30304__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30210__auto____0 = (function (){
var statearr_30830 = [null,null,null,null,null,null,null];
(statearr_30830[(0)] = cljs$core$async$transduce_$_state_machine__30210__auto__);

(statearr_30830[(1)] = (1));

return statearr_30830;
});
var cljs$core$async$transduce_$_state_machine__30210__auto____1 = (function (state_30828){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30831){if((e30831 instanceof Object)){
var ex__30213__auto__ = e30831;
var statearr_30832_30834 = state_30828;
(statearr_30832_30834[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30828;
state_30828 = G__30835;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30210__auto__ = function(state_30828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30210__auto____1.call(this,state_30828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30210__auto____0;
cljs$core$async$transduce_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30210__auto____1;
return cljs$core$async$transduce_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__,f__$1))
})();
var state__30306__auto__ = (function (){var statearr_30833 = f__30305__auto__.call(null);
(statearr_30833[(6)] = c__30304__auto__);

return statearr_30833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__,f__$1))
);

return c__30304__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30837 = arguments.length;
switch (G__30837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_30862){
var state_val_30863 = (state_30862[(1)]);
if((state_val_30863 === (7))){
var inst_30844 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30864_30885 = state_30862__$1;
(statearr_30864_30885[(2)] = inst_30844);

(statearr_30864_30885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (1))){
var inst_30838 = cljs.core.seq.call(null,coll);
var inst_30839 = inst_30838;
var state_30862__$1 = (function (){var statearr_30865 = state_30862;
(statearr_30865[(7)] = inst_30839);

return statearr_30865;
})();
var statearr_30866_30886 = state_30862__$1;
(statearr_30866_30886[(2)] = null);

(statearr_30866_30886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (4))){
var inst_30839 = (state_30862[(7)]);
var inst_30842 = cljs.core.first.call(null,inst_30839);
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30862__$1,(7),ch,inst_30842);
} else {
if((state_val_30863 === (13))){
var inst_30856 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30867_30887 = state_30862__$1;
(statearr_30867_30887[(2)] = inst_30856);

(statearr_30867_30887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (6))){
var inst_30847 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
if(cljs.core.truth_(inst_30847)){
var statearr_30868_30888 = state_30862__$1;
(statearr_30868_30888[(1)] = (8));

} else {
var statearr_30869_30889 = state_30862__$1;
(statearr_30869_30889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (3))){
var inst_30860 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30862__$1,inst_30860);
} else {
if((state_val_30863 === (12))){
var state_30862__$1 = state_30862;
var statearr_30870_30890 = state_30862__$1;
(statearr_30870_30890[(2)] = null);

(statearr_30870_30890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (2))){
var inst_30839 = (state_30862[(7)]);
var state_30862__$1 = state_30862;
if(cljs.core.truth_(inst_30839)){
var statearr_30871_30891 = state_30862__$1;
(statearr_30871_30891[(1)] = (4));

} else {
var statearr_30872_30892 = state_30862__$1;
(statearr_30872_30892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (11))){
var inst_30853 = cljs.core.async.close_BANG_.call(null,ch);
var state_30862__$1 = state_30862;
var statearr_30873_30893 = state_30862__$1;
(statearr_30873_30893[(2)] = inst_30853);

(statearr_30873_30893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (9))){
var state_30862__$1 = state_30862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30874_30894 = state_30862__$1;
(statearr_30874_30894[(1)] = (11));

} else {
var statearr_30875_30895 = state_30862__$1;
(statearr_30875_30895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (5))){
var inst_30839 = (state_30862[(7)]);
var state_30862__$1 = state_30862;
var statearr_30876_30896 = state_30862__$1;
(statearr_30876_30896[(2)] = inst_30839);

(statearr_30876_30896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (10))){
var inst_30858 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30877_30897 = state_30862__$1;
(statearr_30877_30897[(2)] = inst_30858);

(statearr_30877_30897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (8))){
var inst_30839 = (state_30862[(7)]);
var inst_30849 = cljs.core.next.call(null,inst_30839);
var inst_30839__$1 = inst_30849;
var state_30862__$1 = (function (){var statearr_30878 = state_30862;
(statearr_30878[(7)] = inst_30839__$1);

return statearr_30878;
})();
var statearr_30879_30898 = state_30862__$1;
(statearr_30879_30898[(2)] = null);

(statearr_30879_30898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_30880 = [null,null,null,null,null,null,null,null];
(statearr_30880[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_30880[(1)] = (1));

return statearr_30880;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_30862){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_30862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e30881){if((e30881 instanceof Object)){
var ex__30213__auto__ = e30881;
var statearr_30882_30899 = state_30862;
(statearr_30882_30899[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30862;
state_30862 = G__30900;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_30883 = f__30305__auto__.call(null);
(statearr_30883[(6)] = c__30304__auto__);

return statearr_30883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30901 = (function (ch,cs,meta30902){
this.ch = ch;
this.cs = cs;
this.meta30902 = meta30902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30903,meta30902__$1){
var self__ = this;
var _30903__$1 = this;
return (new cljs.core.async.t_cljs$core$async30901(self__.ch,self__.cs,meta30902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30903){
var self__ = this;
var _30903__$1 = this;
return self__.meta30902;
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30902","meta30902",1289423275,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30901";

cljs.core.async.t_cljs$core$async30901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30901");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30901.
 */
cljs.core.async.__GT_t_cljs$core$async30901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30901(ch__$1,cs__$1,meta30902){
return (new cljs.core.async.t_cljs$core$async30901(ch__$1,cs__$1,meta30902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30304__auto___31123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31123,cs,m,dchan,dctr,done){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31123,cs,m,dchan,dctr,done){
return (function (state_31038){
var state_val_31039 = (state_31038[(1)]);
if((state_val_31039 === (7))){
var inst_31034 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31040_31124 = state_31038__$1;
(statearr_31040_31124[(2)] = inst_31034);

(statearr_31040_31124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (20))){
var inst_30937 = (state_31038[(7)]);
var inst_30949 = cljs.core.first.call(null,inst_30937);
var inst_30950 = cljs.core.nth.call(null,inst_30949,(0),null);
var inst_30951 = cljs.core.nth.call(null,inst_30949,(1),null);
var state_31038__$1 = (function (){var statearr_31041 = state_31038;
(statearr_31041[(8)] = inst_30950);

return statearr_31041;
})();
if(cljs.core.truth_(inst_30951)){
var statearr_31042_31125 = state_31038__$1;
(statearr_31042_31125[(1)] = (22));

} else {
var statearr_31043_31126 = state_31038__$1;
(statearr_31043_31126[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (27))){
var inst_30981 = (state_31038[(9)]);
var inst_30986 = (state_31038[(10)]);
var inst_30979 = (state_31038[(11)]);
var inst_30906 = (state_31038[(12)]);
var inst_30986__$1 = cljs.core._nth.call(null,inst_30979,inst_30981);
var inst_30987 = cljs.core.async.put_BANG_.call(null,inst_30986__$1,inst_30906,done);
var state_31038__$1 = (function (){var statearr_31044 = state_31038;
(statearr_31044[(10)] = inst_30986__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30987)){
var statearr_31045_31127 = state_31038__$1;
(statearr_31045_31127[(1)] = (30));

} else {
var statearr_31046_31128 = state_31038__$1;
(statearr_31046_31128[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (1))){
var state_31038__$1 = state_31038;
var statearr_31047_31129 = state_31038__$1;
(statearr_31047_31129[(2)] = null);

(statearr_31047_31129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (24))){
var inst_30937 = (state_31038[(7)]);
var inst_30956 = (state_31038[(2)]);
var inst_30957 = cljs.core.next.call(null,inst_30937);
var inst_30915 = inst_30957;
var inst_30916 = null;
var inst_30917 = (0);
var inst_30918 = (0);
var state_31038__$1 = (function (){var statearr_31048 = state_31038;
(statearr_31048[(13)] = inst_30915);

(statearr_31048[(14)] = inst_30956);

(statearr_31048[(15)] = inst_30918);

(statearr_31048[(16)] = inst_30917);

(statearr_31048[(17)] = inst_30916);

return statearr_31048;
})();
var statearr_31049_31130 = state_31038__$1;
(statearr_31049_31130[(2)] = null);

(statearr_31049_31130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (39))){
var state_31038__$1 = state_31038;
var statearr_31053_31131 = state_31038__$1;
(statearr_31053_31131[(2)] = null);

(statearr_31053_31131[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (4))){
var inst_30906 = (state_31038[(12)]);
var inst_30906__$1 = (state_31038[(2)]);
var inst_30907 = (inst_30906__$1 == null);
var state_31038__$1 = (function (){var statearr_31054 = state_31038;
(statearr_31054[(12)] = inst_30906__$1);

return statearr_31054;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_31055_31132 = state_31038__$1;
(statearr_31055_31132[(1)] = (5));

} else {
var statearr_31056_31133 = state_31038__$1;
(statearr_31056_31133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (15))){
var inst_30915 = (state_31038[(13)]);
var inst_30918 = (state_31038[(15)]);
var inst_30917 = (state_31038[(16)]);
var inst_30916 = (state_31038[(17)]);
var inst_30933 = (state_31038[(2)]);
var inst_30934 = (inst_30918 + (1));
var tmp31050 = inst_30915;
var tmp31051 = inst_30917;
var tmp31052 = inst_30916;
var inst_30915__$1 = tmp31050;
var inst_30916__$1 = tmp31052;
var inst_30917__$1 = tmp31051;
var inst_30918__$1 = inst_30934;
var state_31038__$1 = (function (){var statearr_31057 = state_31038;
(statearr_31057[(13)] = inst_30915__$1);

(statearr_31057[(18)] = inst_30933);

(statearr_31057[(15)] = inst_30918__$1);

(statearr_31057[(16)] = inst_30917__$1);

(statearr_31057[(17)] = inst_30916__$1);

return statearr_31057;
})();
var statearr_31058_31134 = state_31038__$1;
(statearr_31058_31134[(2)] = null);

(statearr_31058_31134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (21))){
var inst_30960 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31062_31135 = state_31038__$1;
(statearr_31062_31135[(2)] = inst_30960);

(statearr_31062_31135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (31))){
var inst_30986 = (state_31038[(10)]);
var inst_30990 = done.call(null,null);
var inst_30991 = cljs.core.async.untap_STAR_.call(null,m,inst_30986);
var state_31038__$1 = (function (){var statearr_31063 = state_31038;
(statearr_31063[(19)] = inst_30990);

return statearr_31063;
})();
var statearr_31064_31136 = state_31038__$1;
(statearr_31064_31136[(2)] = inst_30991);

(statearr_31064_31136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (32))){
var inst_30978 = (state_31038[(20)]);
var inst_30981 = (state_31038[(9)]);
var inst_30980 = (state_31038[(21)]);
var inst_30979 = (state_31038[(11)]);
var inst_30993 = (state_31038[(2)]);
var inst_30994 = (inst_30981 + (1));
var tmp31059 = inst_30978;
var tmp31060 = inst_30980;
var tmp31061 = inst_30979;
var inst_30978__$1 = tmp31059;
var inst_30979__$1 = tmp31061;
var inst_30980__$1 = tmp31060;
var inst_30981__$1 = inst_30994;
var state_31038__$1 = (function (){var statearr_31065 = state_31038;
(statearr_31065[(20)] = inst_30978__$1);

(statearr_31065[(9)] = inst_30981__$1);

(statearr_31065[(21)] = inst_30980__$1);

(statearr_31065[(11)] = inst_30979__$1);

(statearr_31065[(22)] = inst_30993);

return statearr_31065;
})();
var statearr_31066_31137 = state_31038__$1;
(statearr_31066_31137[(2)] = null);

(statearr_31066_31137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (40))){
var inst_31006 = (state_31038[(23)]);
var inst_31010 = done.call(null,null);
var inst_31011 = cljs.core.async.untap_STAR_.call(null,m,inst_31006);
var state_31038__$1 = (function (){var statearr_31067 = state_31038;
(statearr_31067[(24)] = inst_31010);

return statearr_31067;
})();
var statearr_31068_31138 = state_31038__$1;
(statearr_31068_31138[(2)] = inst_31011);

(statearr_31068_31138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (33))){
var inst_30997 = (state_31038[(25)]);
var inst_30999 = cljs.core.chunked_seq_QMARK_.call(null,inst_30997);
var state_31038__$1 = state_31038;
if(inst_30999){
var statearr_31069_31139 = state_31038__$1;
(statearr_31069_31139[(1)] = (36));

} else {
var statearr_31070_31140 = state_31038__$1;
(statearr_31070_31140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (13))){
var inst_30927 = (state_31038[(26)]);
var inst_30930 = cljs.core.async.close_BANG_.call(null,inst_30927);
var state_31038__$1 = state_31038;
var statearr_31071_31141 = state_31038__$1;
(statearr_31071_31141[(2)] = inst_30930);

(statearr_31071_31141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (22))){
var inst_30950 = (state_31038[(8)]);
var inst_30953 = cljs.core.async.close_BANG_.call(null,inst_30950);
var state_31038__$1 = state_31038;
var statearr_31072_31142 = state_31038__$1;
(statearr_31072_31142[(2)] = inst_30953);

(statearr_31072_31142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (36))){
var inst_30997 = (state_31038[(25)]);
var inst_31001 = cljs.core.chunk_first.call(null,inst_30997);
var inst_31002 = cljs.core.chunk_rest.call(null,inst_30997);
var inst_31003 = cljs.core.count.call(null,inst_31001);
var inst_30978 = inst_31002;
var inst_30979 = inst_31001;
var inst_30980 = inst_31003;
var inst_30981 = (0);
var state_31038__$1 = (function (){var statearr_31073 = state_31038;
(statearr_31073[(20)] = inst_30978);

(statearr_31073[(9)] = inst_30981);

(statearr_31073[(21)] = inst_30980);

(statearr_31073[(11)] = inst_30979);

return statearr_31073;
})();
var statearr_31074_31143 = state_31038__$1;
(statearr_31074_31143[(2)] = null);

(statearr_31074_31143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (41))){
var inst_30997 = (state_31038[(25)]);
var inst_31013 = (state_31038[(2)]);
var inst_31014 = cljs.core.next.call(null,inst_30997);
var inst_30978 = inst_31014;
var inst_30979 = null;
var inst_30980 = (0);
var inst_30981 = (0);
var state_31038__$1 = (function (){var statearr_31075 = state_31038;
(statearr_31075[(20)] = inst_30978);

(statearr_31075[(9)] = inst_30981);

(statearr_31075[(21)] = inst_30980);

(statearr_31075[(27)] = inst_31013);

(statearr_31075[(11)] = inst_30979);

return statearr_31075;
})();
var statearr_31076_31144 = state_31038__$1;
(statearr_31076_31144[(2)] = null);

(statearr_31076_31144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (43))){
var state_31038__$1 = state_31038;
var statearr_31077_31145 = state_31038__$1;
(statearr_31077_31145[(2)] = null);

(statearr_31077_31145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (29))){
var inst_31022 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31078_31146 = state_31038__$1;
(statearr_31078_31146[(2)] = inst_31022);

(statearr_31078_31146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (44))){
var inst_31031 = (state_31038[(2)]);
var state_31038__$1 = (function (){var statearr_31079 = state_31038;
(statearr_31079[(28)] = inst_31031);

return statearr_31079;
})();
var statearr_31080_31147 = state_31038__$1;
(statearr_31080_31147[(2)] = null);

(statearr_31080_31147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (6))){
var inst_30970 = (state_31038[(29)]);
var inst_30969 = cljs.core.deref.call(null,cs);
var inst_30970__$1 = cljs.core.keys.call(null,inst_30969);
var inst_30971 = cljs.core.count.call(null,inst_30970__$1);
var inst_30972 = cljs.core.reset_BANG_.call(null,dctr,inst_30971);
var inst_30977 = cljs.core.seq.call(null,inst_30970__$1);
var inst_30978 = inst_30977;
var inst_30979 = null;
var inst_30980 = (0);
var inst_30981 = (0);
var state_31038__$1 = (function (){var statearr_31081 = state_31038;
(statearr_31081[(20)] = inst_30978);

(statearr_31081[(9)] = inst_30981);

(statearr_31081[(30)] = inst_30972);

(statearr_31081[(21)] = inst_30980);

(statearr_31081[(11)] = inst_30979);

(statearr_31081[(29)] = inst_30970__$1);

return statearr_31081;
})();
var statearr_31082_31148 = state_31038__$1;
(statearr_31082_31148[(2)] = null);

(statearr_31082_31148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (28))){
var inst_30978 = (state_31038[(20)]);
var inst_30997 = (state_31038[(25)]);
var inst_30997__$1 = cljs.core.seq.call(null,inst_30978);
var state_31038__$1 = (function (){var statearr_31083 = state_31038;
(statearr_31083[(25)] = inst_30997__$1);

return statearr_31083;
})();
if(inst_30997__$1){
var statearr_31084_31149 = state_31038__$1;
(statearr_31084_31149[(1)] = (33));

} else {
var statearr_31085_31150 = state_31038__$1;
(statearr_31085_31150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (25))){
var inst_30981 = (state_31038[(9)]);
var inst_30980 = (state_31038[(21)]);
var inst_30983 = (inst_30981 < inst_30980);
var inst_30984 = inst_30983;
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_30984)){
var statearr_31086_31151 = state_31038__$1;
(statearr_31086_31151[(1)] = (27));

} else {
var statearr_31087_31152 = state_31038__$1;
(statearr_31087_31152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (34))){
var state_31038__$1 = state_31038;
var statearr_31088_31153 = state_31038__$1;
(statearr_31088_31153[(2)] = null);

(statearr_31088_31153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (17))){
var state_31038__$1 = state_31038;
var statearr_31089_31154 = state_31038__$1;
(statearr_31089_31154[(2)] = null);

(statearr_31089_31154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (3))){
var inst_31036 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31038__$1,inst_31036);
} else {
if((state_val_31039 === (12))){
var inst_30965 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31090_31155 = state_31038__$1;
(statearr_31090_31155[(2)] = inst_30965);

(statearr_31090_31155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (2))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31038__$1,(4),ch);
} else {
if((state_val_31039 === (23))){
var state_31038__$1 = state_31038;
var statearr_31091_31156 = state_31038__$1;
(statearr_31091_31156[(2)] = null);

(statearr_31091_31156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (35))){
var inst_31020 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31092_31157 = state_31038__$1;
(statearr_31092_31157[(2)] = inst_31020);

(statearr_31092_31157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (19))){
var inst_30937 = (state_31038[(7)]);
var inst_30941 = cljs.core.chunk_first.call(null,inst_30937);
var inst_30942 = cljs.core.chunk_rest.call(null,inst_30937);
var inst_30943 = cljs.core.count.call(null,inst_30941);
var inst_30915 = inst_30942;
var inst_30916 = inst_30941;
var inst_30917 = inst_30943;
var inst_30918 = (0);
var state_31038__$1 = (function (){var statearr_31093 = state_31038;
(statearr_31093[(13)] = inst_30915);

(statearr_31093[(15)] = inst_30918);

(statearr_31093[(16)] = inst_30917);

(statearr_31093[(17)] = inst_30916);

return statearr_31093;
})();
var statearr_31094_31158 = state_31038__$1;
(statearr_31094_31158[(2)] = null);

(statearr_31094_31158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (11))){
var inst_30915 = (state_31038[(13)]);
var inst_30937 = (state_31038[(7)]);
var inst_30937__$1 = cljs.core.seq.call(null,inst_30915);
var state_31038__$1 = (function (){var statearr_31095 = state_31038;
(statearr_31095[(7)] = inst_30937__$1);

return statearr_31095;
})();
if(inst_30937__$1){
var statearr_31096_31159 = state_31038__$1;
(statearr_31096_31159[(1)] = (16));

} else {
var statearr_31097_31160 = state_31038__$1;
(statearr_31097_31160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (9))){
var inst_30967 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31098_31161 = state_31038__$1;
(statearr_31098_31161[(2)] = inst_30967);

(statearr_31098_31161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (5))){
var inst_30913 = cljs.core.deref.call(null,cs);
var inst_30914 = cljs.core.seq.call(null,inst_30913);
var inst_30915 = inst_30914;
var inst_30916 = null;
var inst_30917 = (0);
var inst_30918 = (0);
var state_31038__$1 = (function (){var statearr_31099 = state_31038;
(statearr_31099[(13)] = inst_30915);

(statearr_31099[(15)] = inst_30918);

(statearr_31099[(16)] = inst_30917);

(statearr_31099[(17)] = inst_30916);

return statearr_31099;
})();
var statearr_31100_31162 = state_31038__$1;
(statearr_31100_31162[(2)] = null);

(statearr_31100_31162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (14))){
var state_31038__$1 = state_31038;
var statearr_31101_31163 = state_31038__$1;
(statearr_31101_31163[(2)] = null);

(statearr_31101_31163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (45))){
var inst_31028 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31102_31164 = state_31038__$1;
(statearr_31102_31164[(2)] = inst_31028);

(statearr_31102_31164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (26))){
var inst_30970 = (state_31038[(29)]);
var inst_31024 = (state_31038[(2)]);
var inst_31025 = cljs.core.seq.call(null,inst_30970);
var state_31038__$1 = (function (){var statearr_31103 = state_31038;
(statearr_31103[(31)] = inst_31024);

return statearr_31103;
})();
if(inst_31025){
var statearr_31104_31165 = state_31038__$1;
(statearr_31104_31165[(1)] = (42));

} else {
var statearr_31105_31166 = state_31038__$1;
(statearr_31105_31166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (16))){
var inst_30937 = (state_31038[(7)]);
var inst_30939 = cljs.core.chunked_seq_QMARK_.call(null,inst_30937);
var state_31038__$1 = state_31038;
if(inst_30939){
var statearr_31106_31167 = state_31038__$1;
(statearr_31106_31167[(1)] = (19));

} else {
var statearr_31107_31168 = state_31038__$1;
(statearr_31107_31168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (38))){
var inst_31017 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31108_31169 = state_31038__$1;
(statearr_31108_31169[(2)] = inst_31017);

(statearr_31108_31169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (30))){
var state_31038__$1 = state_31038;
var statearr_31109_31170 = state_31038__$1;
(statearr_31109_31170[(2)] = null);

(statearr_31109_31170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (10))){
var inst_30918 = (state_31038[(15)]);
var inst_30916 = (state_31038[(17)]);
var inst_30926 = cljs.core._nth.call(null,inst_30916,inst_30918);
var inst_30927 = cljs.core.nth.call(null,inst_30926,(0),null);
var inst_30928 = cljs.core.nth.call(null,inst_30926,(1),null);
var state_31038__$1 = (function (){var statearr_31110 = state_31038;
(statearr_31110[(26)] = inst_30927);

return statearr_31110;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_31111_31171 = state_31038__$1;
(statearr_31111_31171[(1)] = (13));

} else {
var statearr_31112_31172 = state_31038__$1;
(statearr_31112_31172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (18))){
var inst_30963 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31113_31173 = state_31038__$1;
(statearr_31113_31173[(2)] = inst_30963);

(statearr_31113_31173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (42))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31038__$1,(45),dchan);
} else {
if((state_val_31039 === (37))){
var inst_30997 = (state_31038[(25)]);
var inst_31006 = (state_31038[(23)]);
var inst_30906 = (state_31038[(12)]);
var inst_31006__$1 = cljs.core.first.call(null,inst_30997);
var inst_31007 = cljs.core.async.put_BANG_.call(null,inst_31006__$1,inst_30906,done);
var state_31038__$1 = (function (){var statearr_31114 = state_31038;
(statearr_31114[(23)] = inst_31006__$1);

return statearr_31114;
})();
if(cljs.core.truth_(inst_31007)){
var statearr_31115_31174 = state_31038__$1;
(statearr_31115_31174[(1)] = (39));

} else {
var statearr_31116_31175 = state_31038__$1;
(statearr_31116_31175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (8))){
var inst_30918 = (state_31038[(15)]);
var inst_30917 = (state_31038[(16)]);
var inst_30920 = (inst_30918 < inst_30917);
var inst_30921 = inst_30920;
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_30921)){
var statearr_31117_31176 = state_31038__$1;
(statearr_31117_31176[(1)] = (10));

} else {
var statearr_31118_31177 = state_31038__$1;
(statearr_31118_31177[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31123,cs,m,dchan,dctr,done))
;
return ((function (switch__30209__auto__,c__30304__auto___31123,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30210__auto__ = null;
var cljs$core$async$mult_$_state_machine__30210__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31119[(0)] = cljs$core$async$mult_$_state_machine__30210__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var cljs$core$async$mult_$_state_machine__30210__auto____1 = (function (state_31038){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object)){
var ex__30213__auto__ = e31120;
var statearr_31121_31178 = state_31038;
(statearr_31121_31178[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31179 = state_31038;
state_31038 = G__31179;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30210__auto__ = function(state_31038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30210__auto____1.call(this,state_31038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30210__auto____0;
cljs$core$async$mult_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30210__auto____1;
return cljs$core$async$mult_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31123,cs,m,dchan,dctr,done))
})();
var state__30306__auto__ = (function (){var statearr_31122 = f__30305__auto__.call(null);
(statearr_31122[(6)] = c__30304__auto___31123);

return statearr_31122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31123,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31181 = arguments.length;
switch (G__31181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31193 = arguments.length;
var i__4731__auto___31194 = (0);
while(true){
if((i__4731__auto___31194 < len__4730__auto___31193)){
args__4736__auto__.push((arguments[i__4731__auto___31194]));

var G__31195 = (i__4731__auto___31194 + (1));
i__4731__auto___31194 = G__31195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31187){
var map__31188 = p__31187;
var map__31188__$1 = (((((!((map__31188 == null))))?(((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var opts = map__31188__$1;
var statearr_31190_31196 = state;
(statearr_31190_31196[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__31188,map__31188__$1,opts){
return (function (val){
var statearr_31191_31197 = state;
(statearr_31191_31197[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31188,map__31188__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31192_31198 = state;
(statearr_31192_31198[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31183){
var G__31184 = cljs.core.first.call(null,seq31183);
var seq31183__$1 = cljs.core.next.call(null,seq31183);
var G__31185 = cljs.core.first.call(null,seq31183__$1);
var seq31183__$2 = cljs.core.next.call(null,seq31183__$1);
var G__31186 = cljs.core.first.call(null,seq31183__$2);
var seq31183__$3 = cljs.core.next.call(null,seq31183__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31184,G__31185,G__31186,seq31183__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31199 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31200){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31200 = meta31200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31201,meta31200__$1){
var self__ = this;
var _31201__$1 = this;
return (new cljs.core.async.t_cljs$core$async31199(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31201){
var self__ = this;
var _31201__$1 = this;
return self__.meta31200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31200","meta31200",1602442726,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31199";

cljs.core.async.t_cljs$core$async31199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31199.
 */
cljs.core.async.__GT_t_cljs$core$async31199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31200){
return (new cljs.core.async.t_cljs$core$async31199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30304__auto___31363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31303){
var state_val_31304 = (state_31303[(1)]);
if((state_val_31304 === (7))){
var inst_31218 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31305_31364 = state_31303__$1;
(statearr_31305_31364[(2)] = inst_31218);

(statearr_31305_31364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (20))){
var inst_31230 = (state_31303[(7)]);
var state_31303__$1 = state_31303;
var statearr_31306_31365 = state_31303__$1;
(statearr_31306_31365[(2)] = inst_31230);

(statearr_31306_31365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (27))){
var state_31303__$1 = state_31303;
var statearr_31307_31366 = state_31303__$1;
(statearr_31307_31366[(2)] = null);

(statearr_31307_31366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (1))){
var inst_31205 = (state_31303[(8)]);
var inst_31205__$1 = calc_state.call(null);
var inst_31207 = (inst_31205__$1 == null);
var inst_31208 = cljs.core.not.call(null,inst_31207);
var state_31303__$1 = (function (){var statearr_31308 = state_31303;
(statearr_31308[(8)] = inst_31205__$1);

return statearr_31308;
})();
if(inst_31208){
var statearr_31309_31367 = state_31303__$1;
(statearr_31309_31367[(1)] = (2));

} else {
var statearr_31310_31368 = state_31303__$1;
(statearr_31310_31368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (24))){
var inst_31277 = (state_31303[(9)]);
var inst_31263 = (state_31303[(10)]);
var inst_31254 = (state_31303[(11)]);
var inst_31277__$1 = inst_31254.call(null,inst_31263);
var state_31303__$1 = (function (){var statearr_31311 = state_31303;
(statearr_31311[(9)] = inst_31277__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31277__$1)){
var statearr_31312_31369 = state_31303__$1;
(statearr_31312_31369[(1)] = (29));

} else {
var statearr_31313_31370 = state_31303__$1;
(statearr_31313_31370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (4))){
var inst_31221 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31221)){
var statearr_31314_31371 = state_31303__$1;
(statearr_31314_31371[(1)] = (8));

} else {
var statearr_31315_31372 = state_31303__$1;
(statearr_31315_31372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (15))){
var inst_31248 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31248)){
var statearr_31316_31373 = state_31303__$1;
(statearr_31316_31373[(1)] = (19));

} else {
var statearr_31317_31374 = state_31303__$1;
(statearr_31317_31374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (21))){
var inst_31253 = (state_31303[(12)]);
var inst_31253__$1 = (state_31303[(2)]);
var inst_31254 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31255 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31256 = cljs.core.get.call(null,inst_31253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31303__$1 = (function (){var statearr_31318 = state_31303;
(statearr_31318[(13)] = inst_31255);

(statearr_31318[(11)] = inst_31254);

(statearr_31318[(12)] = inst_31253__$1);

return statearr_31318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31303__$1,(22),inst_31256);
} else {
if((state_val_31304 === (31))){
var inst_31285 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31285)){
var statearr_31319_31375 = state_31303__$1;
(statearr_31319_31375[(1)] = (32));

} else {
var statearr_31320_31376 = state_31303__$1;
(statearr_31320_31376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (32))){
var inst_31262 = (state_31303[(14)]);
var state_31303__$1 = state_31303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31303__$1,(35),out,inst_31262);
} else {
if((state_val_31304 === (33))){
var inst_31253 = (state_31303[(12)]);
var inst_31230 = inst_31253;
var state_31303__$1 = (function (){var statearr_31321 = state_31303;
(statearr_31321[(7)] = inst_31230);

return statearr_31321;
})();
var statearr_31322_31377 = state_31303__$1;
(statearr_31322_31377[(2)] = null);

(statearr_31322_31377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (13))){
var inst_31230 = (state_31303[(7)]);
var inst_31237 = inst_31230.cljs$lang$protocol_mask$partition0$;
var inst_31238 = (inst_31237 & (64));
var inst_31239 = inst_31230.cljs$core$ISeq$;
var inst_31240 = (cljs.core.PROTOCOL_SENTINEL === inst_31239);
var inst_31241 = ((inst_31238) || (inst_31240));
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31241)){
var statearr_31323_31378 = state_31303__$1;
(statearr_31323_31378[(1)] = (16));

} else {
var statearr_31324_31379 = state_31303__$1;
(statearr_31324_31379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (22))){
var inst_31263 = (state_31303[(10)]);
var inst_31262 = (state_31303[(14)]);
var inst_31261 = (state_31303[(2)]);
var inst_31262__$1 = cljs.core.nth.call(null,inst_31261,(0),null);
var inst_31263__$1 = cljs.core.nth.call(null,inst_31261,(1),null);
var inst_31264 = (inst_31262__$1 == null);
var inst_31265 = cljs.core._EQ_.call(null,inst_31263__$1,change);
var inst_31266 = ((inst_31264) || (inst_31265));
var state_31303__$1 = (function (){var statearr_31325 = state_31303;
(statearr_31325[(10)] = inst_31263__$1);

(statearr_31325[(14)] = inst_31262__$1);

return statearr_31325;
})();
if(cljs.core.truth_(inst_31266)){
var statearr_31326_31380 = state_31303__$1;
(statearr_31326_31380[(1)] = (23));

} else {
var statearr_31327_31381 = state_31303__$1;
(statearr_31327_31381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (36))){
var inst_31253 = (state_31303[(12)]);
var inst_31230 = inst_31253;
var state_31303__$1 = (function (){var statearr_31328 = state_31303;
(statearr_31328[(7)] = inst_31230);

return statearr_31328;
})();
var statearr_31329_31382 = state_31303__$1;
(statearr_31329_31382[(2)] = null);

(statearr_31329_31382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (29))){
var inst_31277 = (state_31303[(9)]);
var state_31303__$1 = state_31303;
var statearr_31330_31383 = state_31303__$1;
(statearr_31330_31383[(2)] = inst_31277);

(statearr_31330_31383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (6))){
var state_31303__$1 = state_31303;
var statearr_31331_31384 = state_31303__$1;
(statearr_31331_31384[(2)] = false);

(statearr_31331_31384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (28))){
var inst_31273 = (state_31303[(2)]);
var inst_31274 = calc_state.call(null);
var inst_31230 = inst_31274;
var state_31303__$1 = (function (){var statearr_31332 = state_31303;
(statearr_31332[(7)] = inst_31230);

(statearr_31332[(15)] = inst_31273);

return statearr_31332;
})();
var statearr_31333_31385 = state_31303__$1;
(statearr_31333_31385[(2)] = null);

(statearr_31333_31385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (25))){
var inst_31299 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31334_31386 = state_31303__$1;
(statearr_31334_31386[(2)] = inst_31299);

(statearr_31334_31386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (34))){
var inst_31297 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31335_31387 = state_31303__$1;
(statearr_31335_31387[(2)] = inst_31297);

(statearr_31335_31387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (17))){
var state_31303__$1 = state_31303;
var statearr_31336_31388 = state_31303__$1;
(statearr_31336_31388[(2)] = false);

(statearr_31336_31388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (3))){
var state_31303__$1 = state_31303;
var statearr_31337_31389 = state_31303__$1;
(statearr_31337_31389[(2)] = false);

(statearr_31337_31389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (12))){
var inst_31301 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31303__$1,inst_31301);
} else {
if((state_val_31304 === (2))){
var inst_31205 = (state_31303[(8)]);
var inst_31210 = inst_31205.cljs$lang$protocol_mask$partition0$;
var inst_31211 = (inst_31210 & (64));
var inst_31212 = inst_31205.cljs$core$ISeq$;
var inst_31213 = (cljs.core.PROTOCOL_SENTINEL === inst_31212);
var inst_31214 = ((inst_31211) || (inst_31213));
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31214)){
var statearr_31338_31390 = state_31303__$1;
(statearr_31338_31390[(1)] = (5));

} else {
var statearr_31339_31391 = state_31303__$1;
(statearr_31339_31391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (23))){
var inst_31262 = (state_31303[(14)]);
var inst_31268 = (inst_31262 == null);
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31268)){
var statearr_31340_31392 = state_31303__$1;
(statearr_31340_31392[(1)] = (26));

} else {
var statearr_31341_31393 = state_31303__$1;
(statearr_31341_31393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (35))){
var inst_31288 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
if(cljs.core.truth_(inst_31288)){
var statearr_31342_31394 = state_31303__$1;
(statearr_31342_31394[(1)] = (36));

} else {
var statearr_31343_31395 = state_31303__$1;
(statearr_31343_31395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (19))){
var inst_31230 = (state_31303[(7)]);
var inst_31250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31230);
var state_31303__$1 = state_31303;
var statearr_31344_31396 = state_31303__$1;
(statearr_31344_31396[(2)] = inst_31250);

(statearr_31344_31396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (11))){
var inst_31230 = (state_31303[(7)]);
var inst_31234 = (inst_31230 == null);
var inst_31235 = cljs.core.not.call(null,inst_31234);
var state_31303__$1 = state_31303;
if(inst_31235){
var statearr_31345_31397 = state_31303__$1;
(statearr_31345_31397[(1)] = (13));

} else {
var statearr_31346_31398 = state_31303__$1;
(statearr_31346_31398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (9))){
var inst_31205 = (state_31303[(8)]);
var state_31303__$1 = state_31303;
var statearr_31347_31399 = state_31303__$1;
(statearr_31347_31399[(2)] = inst_31205);

(statearr_31347_31399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (5))){
var state_31303__$1 = state_31303;
var statearr_31348_31400 = state_31303__$1;
(statearr_31348_31400[(2)] = true);

(statearr_31348_31400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (14))){
var state_31303__$1 = state_31303;
var statearr_31349_31401 = state_31303__$1;
(statearr_31349_31401[(2)] = false);

(statearr_31349_31401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (26))){
var inst_31263 = (state_31303[(10)]);
var inst_31270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31263);
var state_31303__$1 = state_31303;
var statearr_31350_31402 = state_31303__$1;
(statearr_31350_31402[(2)] = inst_31270);

(statearr_31350_31402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (16))){
var state_31303__$1 = state_31303;
var statearr_31351_31403 = state_31303__$1;
(statearr_31351_31403[(2)] = true);

(statearr_31351_31403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (38))){
var inst_31293 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31352_31404 = state_31303__$1;
(statearr_31352_31404[(2)] = inst_31293);

(statearr_31352_31404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (30))){
var inst_31255 = (state_31303[(13)]);
var inst_31263 = (state_31303[(10)]);
var inst_31254 = (state_31303[(11)]);
var inst_31280 = cljs.core.empty_QMARK_.call(null,inst_31254);
var inst_31281 = inst_31255.call(null,inst_31263);
var inst_31282 = cljs.core.not.call(null,inst_31281);
var inst_31283 = ((inst_31280) && (inst_31282));
var state_31303__$1 = state_31303;
var statearr_31353_31405 = state_31303__$1;
(statearr_31353_31405[(2)] = inst_31283);

(statearr_31353_31405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (10))){
var inst_31205 = (state_31303[(8)]);
var inst_31226 = (state_31303[(2)]);
var inst_31227 = cljs.core.get.call(null,inst_31226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31228 = cljs.core.get.call(null,inst_31226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31229 = cljs.core.get.call(null,inst_31226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31230 = inst_31205;
var state_31303__$1 = (function (){var statearr_31354 = state_31303;
(statearr_31354[(16)] = inst_31228);

(statearr_31354[(7)] = inst_31230);

(statearr_31354[(17)] = inst_31229);

(statearr_31354[(18)] = inst_31227);

return statearr_31354;
})();
var statearr_31355_31406 = state_31303__$1;
(statearr_31355_31406[(2)] = null);

(statearr_31355_31406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (18))){
var inst_31245 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31356_31407 = state_31303__$1;
(statearr_31356_31407[(2)] = inst_31245);

(statearr_31356_31407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (37))){
var state_31303__$1 = state_31303;
var statearr_31357_31408 = state_31303__$1;
(statearr_31357_31408[(2)] = null);

(statearr_31357_31408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31304 === (8))){
var inst_31205 = (state_31303[(8)]);
var inst_31223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31205);
var state_31303__$1 = state_31303;
var statearr_31358_31409 = state_31303__$1;
(statearr_31358_31409[(2)] = inst_31223);

(statearr_31358_31409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30209__auto__,c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30210__auto__ = null;
var cljs$core$async$mix_$_state_machine__30210__auto____0 = (function (){
var statearr_31359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31359[(0)] = cljs$core$async$mix_$_state_machine__30210__auto__);

(statearr_31359[(1)] = (1));

return statearr_31359;
});
var cljs$core$async$mix_$_state_machine__30210__auto____1 = (function (state_31303){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31360){if((e31360 instanceof Object)){
var ex__30213__auto__ = e31360;
var statearr_31361_31410 = state_31303;
(statearr_31361_31410[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31411 = state_31303;
state_31303 = G__31411;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30210__auto__ = function(state_31303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30210__auto____1.call(this,state_31303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30210__auto____0;
cljs$core$async$mix_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30210__auto____1;
return cljs$core$async$mix_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30306__auto__ = (function (){var statearr_31362 = f__30305__auto__.call(null);
(statearr_31362[(6)] = c__30304__auto___31363);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31413 = arguments.length;
switch (G__31413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31417 = arguments.length;
switch (G__31417) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__31415_SHARP_){
if(cljs.core.truth_(p1__31415_SHARP_.call(null,topic))){
return p1__31415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31419 = meta31419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31420,meta31419__$1){
var self__ = this;
var _31420__$1 = this;
return (new cljs.core.async.t_cljs$core$async31418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31420){
var self__ = this;
var _31420__$1 = this;
return self__.meta31419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31419","meta31419",-183405585,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31418";

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31418");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31418.
 */
cljs.core.async.__GT_t_cljs$core$async31418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31419){
return (new cljs.core.async.t_cljs$core$async31418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30304__auto___31538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31538,mults,ensure_mult,p){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31538,mults,ensure_mult,p){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (7))){
var inst_31488 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31494_31539 = state_31492__$1;
(statearr_31494_31539[(2)] = inst_31488);

(statearr_31494_31539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (20))){
var state_31492__$1 = state_31492;
var statearr_31495_31540 = state_31492__$1;
(statearr_31495_31540[(2)] = null);

(statearr_31495_31540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (1))){
var state_31492__$1 = state_31492;
var statearr_31496_31541 = state_31492__$1;
(statearr_31496_31541[(2)] = null);

(statearr_31496_31541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (24))){
var inst_31471 = (state_31492[(7)]);
var inst_31480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31471);
var state_31492__$1 = state_31492;
var statearr_31497_31542 = state_31492__$1;
(statearr_31497_31542[(2)] = inst_31480);

(statearr_31497_31542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (4))){
var inst_31423 = (state_31492[(8)]);
var inst_31423__$1 = (state_31492[(2)]);
var inst_31424 = (inst_31423__$1 == null);
var state_31492__$1 = (function (){var statearr_31498 = state_31492;
(statearr_31498[(8)] = inst_31423__$1);

return statearr_31498;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31499_31543 = state_31492__$1;
(statearr_31499_31543[(1)] = (5));

} else {
var statearr_31500_31544 = state_31492__$1;
(statearr_31500_31544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (15))){
var inst_31465 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31501_31545 = state_31492__$1;
(statearr_31501_31545[(2)] = inst_31465);

(statearr_31501_31545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (21))){
var inst_31485 = (state_31492[(2)]);
var state_31492__$1 = (function (){var statearr_31502 = state_31492;
(statearr_31502[(9)] = inst_31485);

return statearr_31502;
})();
var statearr_31503_31546 = state_31492__$1;
(statearr_31503_31546[(2)] = null);

(statearr_31503_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (13))){
var inst_31447 = (state_31492[(10)]);
var inst_31449 = cljs.core.chunked_seq_QMARK_.call(null,inst_31447);
var state_31492__$1 = state_31492;
if(inst_31449){
var statearr_31504_31547 = state_31492__$1;
(statearr_31504_31547[(1)] = (16));

} else {
var statearr_31505_31548 = state_31492__$1;
(statearr_31505_31548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (22))){
var inst_31477 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
if(cljs.core.truth_(inst_31477)){
var statearr_31506_31549 = state_31492__$1;
(statearr_31506_31549[(1)] = (23));

} else {
var statearr_31507_31550 = state_31492__$1;
(statearr_31507_31550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (6))){
var inst_31423 = (state_31492[(8)]);
var inst_31473 = (state_31492[(11)]);
var inst_31471 = (state_31492[(7)]);
var inst_31471__$1 = topic_fn.call(null,inst_31423);
var inst_31472 = cljs.core.deref.call(null,mults);
var inst_31473__$1 = cljs.core.get.call(null,inst_31472,inst_31471__$1);
var state_31492__$1 = (function (){var statearr_31508 = state_31492;
(statearr_31508[(11)] = inst_31473__$1);

(statearr_31508[(7)] = inst_31471__$1);

return statearr_31508;
})();
if(cljs.core.truth_(inst_31473__$1)){
var statearr_31509_31551 = state_31492__$1;
(statearr_31509_31551[(1)] = (19));

} else {
var statearr_31510_31552 = state_31492__$1;
(statearr_31510_31552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (25))){
var inst_31482 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31511_31553 = state_31492__$1;
(statearr_31511_31553[(2)] = inst_31482);

(statearr_31511_31553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (17))){
var inst_31447 = (state_31492[(10)]);
var inst_31456 = cljs.core.first.call(null,inst_31447);
var inst_31457 = cljs.core.async.muxch_STAR_.call(null,inst_31456);
var inst_31458 = cljs.core.async.close_BANG_.call(null,inst_31457);
var inst_31459 = cljs.core.next.call(null,inst_31447);
var inst_31433 = inst_31459;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31492__$1 = (function (){var statearr_31512 = state_31492;
(statearr_31512[(12)] = inst_31435);

(statearr_31512[(13)] = inst_31434);

(statearr_31512[(14)] = inst_31433);

(statearr_31512[(15)] = inst_31458);

(statearr_31512[(16)] = inst_31436);

return statearr_31512;
})();
var statearr_31513_31554 = state_31492__$1;
(statearr_31513_31554[(2)] = null);

(statearr_31513_31554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (3))){
var inst_31490 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (12))){
var inst_31467 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31514_31555 = state_31492__$1;
(statearr_31514_31555[(2)] = inst_31467);

(statearr_31514_31555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (2))){
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(4),ch);
} else {
if((state_val_31493 === (23))){
var state_31492__$1 = state_31492;
var statearr_31515_31556 = state_31492__$1;
(statearr_31515_31556[(2)] = null);

(statearr_31515_31556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (19))){
var inst_31423 = (state_31492[(8)]);
var inst_31473 = (state_31492[(11)]);
var inst_31475 = cljs.core.async.muxch_STAR_.call(null,inst_31473);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31492__$1,(22),inst_31475,inst_31423);
} else {
if((state_val_31493 === (11))){
var inst_31433 = (state_31492[(14)]);
var inst_31447 = (state_31492[(10)]);
var inst_31447__$1 = cljs.core.seq.call(null,inst_31433);
var state_31492__$1 = (function (){var statearr_31516 = state_31492;
(statearr_31516[(10)] = inst_31447__$1);

return statearr_31516;
})();
if(inst_31447__$1){
var statearr_31517_31557 = state_31492__$1;
(statearr_31517_31557[(1)] = (13));

} else {
var statearr_31518_31558 = state_31492__$1;
(statearr_31518_31558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (9))){
var inst_31469 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31519_31559 = state_31492__$1;
(statearr_31519_31559[(2)] = inst_31469);

(statearr_31519_31559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (5))){
var inst_31430 = cljs.core.deref.call(null,mults);
var inst_31431 = cljs.core.vals.call(null,inst_31430);
var inst_31432 = cljs.core.seq.call(null,inst_31431);
var inst_31433 = inst_31432;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31492__$1 = (function (){var statearr_31520 = state_31492;
(statearr_31520[(12)] = inst_31435);

(statearr_31520[(13)] = inst_31434);

(statearr_31520[(14)] = inst_31433);

(statearr_31520[(16)] = inst_31436);

return statearr_31520;
})();
var statearr_31521_31560 = state_31492__$1;
(statearr_31521_31560[(2)] = null);

(statearr_31521_31560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (14))){
var state_31492__$1 = state_31492;
var statearr_31525_31561 = state_31492__$1;
(statearr_31525_31561[(2)] = null);

(statearr_31525_31561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (16))){
var inst_31447 = (state_31492[(10)]);
var inst_31451 = cljs.core.chunk_first.call(null,inst_31447);
var inst_31452 = cljs.core.chunk_rest.call(null,inst_31447);
var inst_31453 = cljs.core.count.call(null,inst_31451);
var inst_31433 = inst_31452;
var inst_31434 = inst_31451;
var inst_31435 = inst_31453;
var inst_31436 = (0);
var state_31492__$1 = (function (){var statearr_31526 = state_31492;
(statearr_31526[(12)] = inst_31435);

(statearr_31526[(13)] = inst_31434);

(statearr_31526[(14)] = inst_31433);

(statearr_31526[(16)] = inst_31436);

return statearr_31526;
})();
var statearr_31527_31562 = state_31492__$1;
(statearr_31527_31562[(2)] = null);

(statearr_31527_31562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (10))){
var inst_31435 = (state_31492[(12)]);
var inst_31434 = (state_31492[(13)]);
var inst_31433 = (state_31492[(14)]);
var inst_31436 = (state_31492[(16)]);
var inst_31441 = cljs.core._nth.call(null,inst_31434,inst_31436);
var inst_31442 = cljs.core.async.muxch_STAR_.call(null,inst_31441);
var inst_31443 = cljs.core.async.close_BANG_.call(null,inst_31442);
var inst_31444 = (inst_31436 + (1));
var tmp31522 = inst_31435;
var tmp31523 = inst_31434;
var tmp31524 = inst_31433;
var inst_31433__$1 = tmp31524;
var inst_31434__$1 = tmp31523;
var inst_31435__$1 = tmp31522;
var inst_31436__$1 = inst_31444;
var state_31492__$1 = (function (){var statearr_31528 = state_31492;
(statearr_31528[(12)] = inst_31435__$1);

(statearr_31528[(13)] = inst_31434__$1);

(statearr_31528[(14)] = inst_31433__$1);

(statearr_31528[(17)] = inst_31443);

(statearr_31528[(16)] = inst_31436__$1);

return statearr_31528;
})();
var statearr_31529_31563 = state_31492__$1;
(statearr_31529_31563[(2)] = null);

(statearr_31529_31563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (18))){
var inst_31462 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31530_31564 = state_31492__$1;
(statearr_31530_31564[(2)] = inst_31462);

(statearr_31530_31564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (8))){
var inst_31435 = (state_31492[(12)]);
var inst_31436 = (state_31492[(16)]);
var inst_31438 = (inst_31436 < inst_31435);
var inst_31439 = inst_31438;
var state_31492__$1 = state_31492;
if(cljs.core.truth_(inst_31439)){
var statearr_31531_31565 = state_31492__$1;
(statearr_31531_31565[(1)] = (10));

} else {
var statearr_31532_31566 = state_31492__$1;
(statearr_31532_31566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31538,mults,ensure_mult,p))
;
return ((function (switch__30209__auto__,c__30304__auto___31538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_31492){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31534){if((e31534 instanceof Object)){
var ex__30213__auto__ = e31534;
var statearr_31535_31567 = state_31492;
(statearr_31535_31567[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31568 = state_31492;
state_31492 = G__31568;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31538,mults,ensure_mult,p))
})();
var state__30306__auto__ = (function (){var statearr_31536 = f__30305__auto__.call(null);
(statearr_31536[(6)] = c__30304__auto___31538);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31538,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31570 = arguments.length;
switch (G__31570) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31573 = arguments.length;
switch (G__31573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31576 = arguments.length;
switch (G__31576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30304__auto___31643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31615){
var state_val_31616 = (state_31615[(1)]);
if((state_val_31616 === (7))){
var state_31615__$1 = state_31615;
var statearr_31617_31644 = state_31615__$1;
(statearr_31617_31644[(2)] = null);

(statearr_31617_31644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (1))){
var state_31615__$1 = state_31615;
var statearr_31618_31645 = state_31615__$1;
(statearr_31618_31645[(2)] = null);

(statearr_31618_31645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (4))){
var inst_31579 = (state_31615[(7)]);
var inst_31581 = (inst_31579 < cnt);
var state_31615__$1 = state_31615;
if(cljs.core.truth_(inst_31581)){
var statearr_31619_31646 = state_31615__$1;
(statearr_31619_31646[(1)] = (6));

} else {
var statearr_31620_31647 = state_31615__$1;
(statearr_31620_31647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (15))){
var inst_31611 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31621_31648 = state_31615__$1;
(statearr_31621_31648[(2)] = inst_31611);

(statearr_31621_31648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (13))){
var inst_31604 = cljs.core.async.close_BANG_.call(null,out);
var state_31615__$1 = state_31615;
var statearr_31622_31649 = state_31615__$1;
(statearr_31622_31649[(2)] = inst_31604);

(statearr_31622_31649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (6))){
var state_31615__$1 = state_31615;
var statearr_31623_31650 = state_31615__$1;
(statearr_31623_31650[(2)] = null);

(statearr_31623_31650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (3))){
var inst_31613 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31615__$1,inst_31613);
} else {
if((state_val_31616 === (12))){
var inst_31601 = (state_31615[(8)]);
var inst_31601__$1 = (state_31615[(2)]);
var inst_31602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31601__$1);
var state_31615__$1 = (function (){var statearr_31624 = state_31615;
(statearr_31624[(8)] = inst_31601__$1);

return statearr_31624;
})();
if(cljs.core.truth_(inst_31602)){
var statearr_31625_31651 = state_31615__$1;
(statearr_31625_31651[(1)] = (13));

} else {
var statearr_31626_31652 = state_31615__$1;
(statearr_31626_31652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (2))){
var inst_31578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31579 = (0);
var state_31615__$1 = (function (){var statearr_31627 = state_31615;
(statearr_31627[(9)] = inst_31578);

(statearr_31627[(7)] = inst_31579);

return statearr_31627;
})();
var statearr_31628_31653 = state_31615__$1;
(statearr_31628_31653[(2)] = null);

(statearr_31628_31653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (11))){
var inst_31579 = (state_31615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31615,(10),Object,null,(9));
var inst_31588 = chs__$1.call(null,inst_31579);
var inst_31589 = done.call(null,inst_31579);
var inst_31590 = cljs.core.async.take_BANG_.call(null,inst_31588,inst_31589);
var state_31615__$1 = state_31615;
var statearr_31629_31654 = state_31615__$1;
(statearr_31629_31654[(2)] = inst_31590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (9))){
var inst_31579 = (state_31615[(7)]);
var inst_31592 = (state_31615[(2)]);
var inst_31593 = (inst_31579 + (1));
var inst_31579__$1 = inst_31593;
var state_31615__$1 = (function (){var statearr_31630 = state_31615;
(statearr_31630[(7)] = inst_31579__$1);

(statearr_31630[(10)] = inst_31592);

return statearr_31630;
})();
var statearr_31631_31655 = state_31615__$1;
(statearr_31631_31655[(2)] = null);

(statearr_31631_31655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (5))){
var inst_31599 = (state_31615[(2)]);
var state_31615__$1 = (function (){var statearr_31632 = state_31615;
(statearr_31632[(11)] = inst_31599);

return statearr_31632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31615__$1,(12),dchan);
} else {
if((state_val_31616 === (14))){
var inst_31601 = (state_31615[(8)]);
var inst_31606 = cljs.core.apply.call(null,f,inst_31601);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31615__$1,(16),out,inst_31606);
} else {
if((state_val_31616 === (16))){
var inst_31608 = (state_31615[(2)]);
var state_31615__$1 = (function (){var statearr_31633 = state_31615;
(statearr_31633[(12)] = inst_31608);

return statearr_31633;
})();
var statearr_31634_31656 = state_31615__$1;
(statearr_31634_31656[(2)] = null);

(statearr_31634_31656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (10))){
var inst_31583 = (state_31615[(2)]);
var inst_31584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31615__$1 = (function (){var statearr_31635 = state_31615;
(statearr_31635[(13)] = inst_31583);

return statearr_31635;
})();
var statearr_31636_31657 = state_31615__$1;
(statearr_31636_31657[(2)] = inst_31584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (8))){
var inst_31597 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31637_31658 = state_31615__$1;
(statearr_31637_31658[(2)] = inst_31597);

(statearr_31637_31658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30209__auto__,c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_31638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31638[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_31638[(1)] = (1));

return statearr_31638;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_31615){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31639){if((e31639 instanceof Object)){
var ex__30213__auto__ = e31639;
var statearr_31640_31659 = state_31615;
(statearr_31640_31659[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31660 = state_31615;
state_31615 = G__31660;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_31615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_31615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30306__auto__ = (function (){var statearr_31641 = f__30305__auto__.call(null);
(statearr_31641[(6)] = c__30304__auto___31643);

return statearr_31641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31643,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31663 = arguments.length;
switch (G__31663) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___31717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31717,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31717,out){
return (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (7))){
var inst_31674 = (state_31695[(7)]);
var inst_31675 = (state_31695[(8)]);
var inst_31674__$1 = (state_31695[(2)]);
var inst_31675__$1 = cljs.core.nth.call(null,inst_31674__$1,(0),null);
var inst_31676 = cljs.core.nth.call(null,inst_31674__$1,(1),null);
var inst_31677 = (inst_31675__$1 == null);
var state_31695__$1 = (function (){var statearr_31697 = state_31695;
(statearr_31697[(7)] = inst_31674__$1);

(statearr_31697[(9)] = inst_31676);

(statearr_31697[(8)] = inst_31675__$1);

return statearr_31697;
})();
if(cljs.core.truth_(inst_31677)){
var statearr_31698_31718 = state_31695__$1;
(statearr_31698_31718[(1)] = (8));

} else {
var statearr_31699_31719 = state_31695__$1;
(statearr_31699_31719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (1))){
var inst_31664 = cljs.core.vec.call(null,chs);
var inst_31665 = inst_31664;
var state_31695__$1 = (function (){var statearr_31700 = state_31695;
(statearr_31700[(10)] = inst_31665);

return statearr_31700;
})();
var statearr_31701_31720 = state_31695__$1;
(statearr_31701_31720[(2)] = null);

(statearr_31701_31720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (4))){
var inst_31665 = (state_31695[(10)]);
var state_31695__$1 = state_31695;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31695__$1,(7),inst_31665);
} else {
if((state_val_31696 === (6))){
var inst_31691 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31702_31721 = state_31695__$1;
(statearr_31702_31721[(2)] = inst_31691);

(statearr_31702_31721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (3))){
var inst_31693 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31695__$1,inst_31693);
} else {
if((state_val_31696 === (2))){
var inst_31665 = (state_31695[(10)]);
var inst_31667 = cljs.core.count.call(null,inst_31665);
var inst_31668 = (inst_31667 > (0));
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31668)){
var statearr_31704_31722 = state_31695__$1;
(statearr_31704_31722[(1)] = (4));

} else {
var statearr_31705_31723 = state_31695__$1;
(statearr_31705_31723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (11))){
var inst_31665 = (state_31695[(10)]);
var inst_31684 = (state_31695[(2)]);
var tmp31703 = inst_31665;
var inst_31665__$1 = tmp31703;
var state_31695__$1 = (function (){var statearr_31706 = state_31695;
(statearr_31706[(10)] = inst_31665__$1);

(statearr_31706[(11)] = inst_31684);

return statearr_31706;
})();
var statearr_31707_31724 = state_31695__$1;
(statearr_31707_31724[(2)] = null);

(statearr_31707_31724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (9))){
var inst_31675 = (state_31695[(8)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31695__$1,(11),out,inst_31675);
} else {
if((state_val_31696 === (5))){
var inst_31689 = cljs.core.async.close_BANG_.call(null,out);
var state_31695__$1 = state_31695;
var statearr_31708_31725 = state_31695__$1;
(statearr_31708_31725[(2)] = inst_31689);

(statearr_31708_31725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (10))){
var inst_31687 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31709_31726 = state_31695__$1;
(statearr_31709_31726[(2)] = inst_31687);

(statearr_31709_31726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (8))){
var inst_31674 = (state_31695[(7)]);
var inst_31665 = (state_31695[(10)]);
var inst_31676 = (state_31695[(9)]);
var inst_31675 = (state_31695[(8)]);
var inst_31679 = (function (){var cs = inst_31665;
var vec__31670 = inst_31674;
var v = inst_31675;
var c = inst_31676;
return ((function (cs,vec__31670,v,c,inst_31674,inst_31665,inst_31676,inst_31675,state_val_31696,c__30304__auto___31717,out){
return (function (p1__31661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31661_SHARP_);
});
;})(cs,vec__31670,v,c,inst_31674,inst_31665,inst_31676,inst_31675,state_val_31696,c__30304__auto___31717,out))
})();
var inst_31680 = cljs.core.filterv.call(null,inst_31679,inst_31665);
var inst_31665__$1 = inst_31680;
var state_31695__$1 = (function (){var statearr_31710 = state_31695;
(statearr_31710[(10)] = inst_31665__$1);

return statearr_31710;
})();
var statearr_31711_31727 = state_31695__$1;
(statearr_31711_31727[(2)] = null);

(statearr_31711_31727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31717,out))
;
return ((function (switch__30209__auto__,c__30304__auto___31717,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_31712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31712[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_31712[(1)] = (1));

return statearr_31712;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_31695){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object)){
var ex__30213__auto__ = e31713;
var statearr_31714_31728 = state_31695;
(statearr_31714_31728[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31729 = state_31695;
state_31695 = G__31729;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31717,out))
})();
var state__30306__auto__ = (function (){var statearr_31715 = f__30305__auto__.call(null);
(statearr_31715[(6)] = c__30304__auto___31717);

return statearr_31715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31717,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31731 = arguments.length;
switch (G__31731) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___31776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31776,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31776,out){
return (function (state_31755){
var state_val_31756 = (state_31755[(1)]);
if((state_val_31756 === (7))){
var inst_31737 = (state_31755[(7)]);
var inst_31737__$1 = (state_31755[(2)]);
var inst_31738 = (inst_31737__$1 == null);
var inst_31739 = cljs.core.not.call(null,inst_31738);
var state_31755__$1 = (function (){var statearr_31757 = state_31755;
(statearr_31757[(7)] = inst_31737__$1);

return statearr_31757;
})();
if(inst_31739){
var statearr_31758_31777 = state_31755__$1;
(statearr_31758_31777[(1)] = (8));

} else {
var statearr_31759_31778 = state_31755__$1;
(statearr_31759_31778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (1))){
var inst_31732 = (0);
var state_31755__$1 = (function (){var statearr_31760 = state_31755;
(statearr_31760[(8)] = inst_31732);

return statearr_31760;
})();
var statearr_31761_31779 = state_31755__$1;
(statearr_31761_31779[(2)] = null);

(statearr_31761_31779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (4))){
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31755__$1,(7),ch);
} else {
if((state_val_31756 === (6))){
var inst_31750 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31762_31780 = state_31755__$1;
(statearr_31762_31780[(2)] = inst_31750);

(statearr_31762_31780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (3))){
var inst_31752 = (state_31755[(2)]);
var inst_31753 = cljs.core.async.close_BANG_.call(null,out);
var state_31755__$1 = (function (){var statearr_31763 = state_31755;
(statearr_31763[(9)] = inst_31752);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31755__$1,inst_31753);
} else {
if((state_val_31756 === (2))){
var inst_31732 = (state_31755[(8)]);
var inst_31734 = (inst_31732 < n);
var state_31755__$1 = state_31755;
if(cljs.core.truth_(inst_31734)){
var statearr_31764_31781 = state_31755__$1;
(statearr_31764_31781[(1)] = (4));

} else {
var statearr_31765_31782 = state_31755__$1;
(statearr_31765_31782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (11))){
var inst_31732 = (state_31755[(8)]);
var inst_31742 = (state_31755[(2)]);
var inst_31743 = (inst_31732 + (1));
var inst_31732__$1 = inst_31743;
var state_31755__$1 = (function (){var statearr_31766 = state_31755;
(statearr_31766[(8)] = inst_31732__$1);

(statearr_31766[(10)] = inst_31742);

return statearr_31766;
})();
var statearr_31767_31783 = state_31755__$1;
(statearr_31767_31783[(2)] = null);

(statearr_31767_31783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (9))){
var state_31755__$1 = state_31755;
var statearr_31768_31784 = state_31755__$1;
(statearr_31768_31784[(2)] = null);

(statearr_31768_31784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (5))){
var state_31755__$1 = state_31755;
var statearr_31769_31785 = state_31755__$1;
(statearr_31769_31785[(2)] = null);

(statearr_31769_31785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (10))){
var inst_31747 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31770_31786 = state_31755__$1;
(statearr_31770_31786[(2)] = inst_31747);

(statearr_31770_31786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (8))){
var inst_31737 = (state_31755[(7)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31755__$1,(11),out,inst_31737);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31776,out))
;
return ((function (switch__30209__auto__,c__30304__auto___31776,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_31771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31771[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_31771[(1)] = (1));

return statearr_31771;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_31755){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31772){if((e31772 instanceof Object)){
var ex__30213__auto__ = e31772;
var statearr_31773_31787 = state_31755;
(statearr_31773_31787[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31788 = state_31755;
state_31755 = G__31788;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_31755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_31755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31776,out))
})();
var state__30306__auto__ = (function (){var statearr_31774 = f__30305__auto__.call(null);
(statearr_31774[(6)] = c__30304__auto___31776);

return statearr_31774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31790 = (function (f,ch,meta31791){
this.f = f;
this.ch = ch;
this.meta31791 = meta31791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31792,meta31791__$1){
var self__ = this;
var _31792__$1 = this;
return (new cljs.core.async.t_cljs$core$async31790(self__.f,self__.ch,meta31791__$1));
});

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31792){
var self__ = this;
var _31792__$1 = this;
return self__.meta31791;
});

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31793 = (function (f,ch,meta31791,_,fn1,meta31794){
this.f = f;
this.ch = ch;
this.meta31791 = meta31791;
this._ = _;
this.fn1 = fn1;
this.meta31794 = meta31794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31795,meta31794__$1){
var self__ = this;
var _31795__$1 = this;
return (new cljs.core.async.t_cljs$core$async31793(self__.f,self__.ch,self__.meta31791,self__._,self__.fn1,meta31794__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31795){
var self__ = this;
var _31795__$1 = this;
return self__.meta31794;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31789_SHARP_){
return f1.call(null,(((p1__31789_SHARP_ == null))?null:self__.f.call(null,p1__31789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31791","meta31791",1462682262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31790","cljs.core.async/t_cljs$core$async31790",1936450835,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31794","meta31794",-1867014731,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31793";

cljs.core.async.t_cljs$core$async31793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31793");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31793.
 */
cljs.core.async.__GT_t_cljs$core$async31793 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31793(f__$1,ch__$1,meta31791__$1,___$2,fn1__$1,meta31794){
return (new cljs.core.async.t_cljs$core$async31793(f__$1,ch__$1,meta31791__$1,___$2,fn1__$1,meta31794));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31793(self__.f,self__.ch,self__.meta31791,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31791","meta31791",1462682262,null)], null);
});

cljs.core.async.t_cljs$core$async31790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31790";

cljs.core.async.t_cljs$core$async31790.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31790");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31790.
 */
cljs.core.async.__GT_t_cljs$core$async31790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31790(f__$1,ch__$1,meta31791){
return (new cljs.core.async.t_cljs$core$async31790(f__$1,ch__$1,meta31791));
});

}

return (new cljs.core.async.t_cljs$core$async31790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31796 = (function (f,ch,meta31797){
this.f = f;
this.ch = ch;
this.meta31797 = meta31797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31798,meta31797__$1){
var self__ = this;
var _31798__$1 = this;
return (new cljs.core.async.t_cljs$core$async31796(self__.f,self__.ch,meta31797__$1));
});

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31798){
var self__ = this;
var _31798__$1 = this;
return self__.meta31797;
});

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31797","meta31797",1033762540,null)], null);
});

cljs.core.async.t_cljs$core$async31796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31796";

cljs.core.async.t_cljs$core$async31796.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31796.
 */
cljs.core.async.__GT_t_cljs$core$async31796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31796(f__$1,ch__$1,meta31797){
return (new cljs.core.async.t_cljs$core$async31796(f__$1,ch__$1,meta31797));
});

}

return (new cljs.core.async.t_cljs$core$async31796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31799 = (function (p,ch,meta31800){
this.p = p;
this.ch = ch;
this.meta31800 = meta31800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31801,meta31800__$1){
var self__ = this;
var _31801__$1 = this;
return (new cljs.core.async.t_cljs$core$async31799(self__.p,self__.ch,meta31800__$1));
});

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31801){
var self__ = this;
var _31801__$1 = this;
return self__.meta31800;
});

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31800","meta31800",-1005661110,null)], null);
});

cljs.core.async.t_cljs$core$async31799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31799";

cljs.core.async.t_cljs$core$async31799.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31799.
 */
cljs.core.async.__GT_t_cljs$core$async31799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31799(p__$1,ch__$1,meta31800){
return (new cljs.core.async.t_cljs$core$async31799(p__$1,ch__$1,meta31800));
});

}

return (new cljs.core.async.t_cljs$core$async31799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31803 = arguments.length;
switch (G__31803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___31843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___31843,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___31843,out){
return (function (state_31824){
var state_val_31825 = (state_31824[(1)]);
if((state_val_31825 === (7))){
var inst_31820 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
var statearr_31826_31844 = state_31824__$1;
(statearr_31826_31844[(2)] = inst_31820);

(statearr_31826_31844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (1))){
var state_31824__$1 = state_31824;
var statearr_31827_31845 = state_31824__$1;
(statearr_31827_31845[(2)] = null);

(statearr_31827_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (4))){
var inst_31806 = (state_31824[(7)]);
var inst_31806__$1 = (state_31824[(2)]);
var inst_31807 = (inst_31806__$1 == null);
var state_31824__$1 = (function (){var statearr_31828 = state_31824;
(statearr_31828[(7)] = inst_31806__$1);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31807)){
var statearr_31829_31846 = state_31824__$1;
(statearr_31829_31846[(1)] = (5));

} else {
var statearr_31830_31847 = state_31824__$1;
(statearr_31830_31847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (6))){
var inst_31806 = (state_31824[(7)]);
var inst_31811 = p.call(null,inst_31806);
var state_31824__$1 = state_31824;
if(cljs.core.truth_(inst_31811)){
var statearr_31831_31848 = state_31824__$1;
(statearr_31831_31848[(1)] = (8));

} else {
var statearr_31832_31849 = state_31824__$1;
(statearr_31832_31849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (3))){
var inst_31822 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31824__$1,inst_31822);
} else {
if((state_val_31825 === (2))){
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(4),ch);
} else {
if((state_val_31825 === (11))){
var inst_31814 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
var statearr_31833_31850 = state_31824__$1;
(statearr_31833_31850[(2)] = inst_31814);

(statearr_31833_31850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (9))){
var state_31824__$1 = state_31824;
var statearr_31834_31851 = state_31824__$1;
(statearr_31834_31851[(2)] = null);

(statearr_31834_31851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (5))){
var inst_31809 = cljs.core.async.close_BANG_.call(null,out);
var state_31824__$1 = state_31824;
var statearr_31835_31852 = state_31824__$1;
(statearr_31835_31852[(2)] = inst_31809);

(statearr_31835_31852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (10))){
var inst_31817 = (state_31824[(2)]);
var state_31824__$1 = (function (){var statearr_31836 = state_31824;
(statearr_31836[(8)] = inst_31817);

return statearr_31836;
})();
var statearr_31837_31853 = state_31824__$1;
(statearr_31837_31853[(2)] = null);

(statearr_31837_31853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (8))){
var inst_31806 = (state_31824[(7)]);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31824__$1,(11),out,inst_31806);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___31843,out))
;
return ((function (switch__30209__auto__,c__30304__auto___31843,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_31838 = [null,null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_31824){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31839){if((e31839 instanceof Object)){
var ex__30213__auto__ = e31839;
var statearr_31840_31854 = state_31824;
(statearr_31840_31854[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31824;
state_31824 = G__31855;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___31843,out))
})();
var state__30306__auto__ = (function (){var statearr_31841 = f__30305__auto__.call(null);
(statearr_31841[(6)] = c__30304__auto___31843);

return statearr_31841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___31843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31857 = arguments.length;
switch (G__31857) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_31920){
var state_val_31921 = (state_31920[(1)]);
if((state_val_31921 === (7))){
var inst_31916 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
var statearr_31922_31960 = state_31920__$1;
(statearr_31922_31960[(2)] = inst_31916);

(statearr_31922_31960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (20))){
var inst_31886 = (state_31920[(7)]);
var inst_31897 = (state_31920[(2)]);
var inst_31898 = cljs.core.next.call(null,inst_31886);
var inst_31872 = inst_31898;
var inst_31873 = null;
var inst_31874 = (0);
var inst_31875 = (0);
var state_31920__$1 = (function (){var statearr_31923 = state_31920;
(statearr_31923[(8)] = inst_31875);

(statearr_31923[(9)] = inst_31873);

(statearr_31923[(10)] = inst_31872);

(statearr_31923[(11)] = inst_31897);

(statearr_31923[(12)] = inst_31874);

return statearr_31923;
})();
var statearr_31924_31961 = state_31920__$1;
(statearr_31924_31961[(2)] = null);

(statearr_31924_31961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (1))){
var state_31920__$1 = state_31920;
var statearr_31925_31962 = state_31920__$1;
(statearr_31925_31962[(2)] = null);

(statearr_31925_31962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (4))){
var inst_31861 = (state_31920[(13)]);
var inst_31861__$1 = (state_31920[(2)]);
var inst_31862 = (inst_31861__$1 == null);
var state_31920__$1 = (function (){var statearr_31926 = state_31920;
(statearr_31926[(13)] = inst_31861__$1);

return statearr_31926;
})();
if(cljs.core.truth_(inst_31862)){
var statearr_31927_31963 = state_31920__$1;
(statearr_31927_31963[(1)] = (5));

} else {
var statearr_31928_31964 = state_31920__$1;
(statearr_31928_31964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (15))){
var state_31920__$1 = state_31920;
var statearr_31932_31965 = state_31920__$1;
(statearr_31932_31965[(2)] = null);

(statearr_31932_31965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (21))){
var state_31920__$1 = state_31920;
var statearr_31933_31966 = state_31920__$1;
(statearr_31933_31966[(2)] = null);

(statearr_31933_31966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (13))){
var inst_31875 = (state_31920[(8)]);
var inst_31873 = (state_31920[(9)]);
var inst_31872 = (state_31920[(10)]);
var inst_31874 = (state_31920[(12)]);
var inst_31882 = (state_31920[(2)]);
var inst_31883 = (inst_31875 + (1));
var tmp31929 = inst_31873;
var tmp31930 = inst_31872;
var tmp31931 = inst_31874;
var inst_31872__$1 = tmp31930;
var inst_31873__$1 = tmp31929;
var inst_31874__$1 = tmp31931;
var inst_31875__$1 = inst_31883;
var state_31920__$1 = (function (){var statearr_31934 = state_31920;
(statearr_31934[(8)] = inst_31875__$1);

(statearr_31934[(9)] = inst_31873__$1);

(statearr_31934[(10)] = inst_31872__$1);

(statearr_31934[(12)] = inst_31874__$1);

(statearr_31934[(14)] = inst_31882);

return statearr_31934;
})();
var statearr_31935_31967 = state_31920__$1;
(statearr_31935_31967[(2)] = null);

(statearr_31935_31967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (22))){
var state_31920__$1 = state_31920;
var statearr_31936_31968 = state_31920__$1;
(statearr_31936_31968[(2)] = null);

(statearr_31936_31968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (6))){
var inst_31861 = (state_31920[(13)]);
var inst_31870 = f.call(null,inst_31861);
var inst_31871 = cljs.core.seq.call(null,inst_31870);
var inst_31872 = inst_31871;
var inst_31873 = null;
var inst_31874 = (0);
var inst_31875 = (0);
var state_31920__$1 = (function (){var statearr_31937 = state_31920;
(statearr_31937[(8)] = inst_31875);

(statearr_31937[(9)] = inst_31873);

(statearr_31937[(10)] = inst_31872);

(statearr_31937[(12)] = inst_31874);

return statearr_31937;
})();
var statearr_31938_31969 = state_31920__$1;
(statearr_31938_31969[(2)] = null);

(statearr_31938_31969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (17))){
var inst_31886 = (state_31920[(7)]);
var inst_31890 = cljs.core.chunk_first.call(null,inst_31886);
var inst_31891 = cljs.core.chunk_rest.call(null,inst_31886);
var inst_31892 = cljs.core.count.call(null,inst_31890);
var inst_31872 = inst_31891;
var inst_31873 = inst_31890;
var inst_31874 = inst_31892;
var inst_31875 = (0);
var state_31920__$1 = (function (){var statearr_31939 = state_31920;
(statearr_31939[(8)] = inst_31875);

(statearr_31939[(9)] = inst_31873);

(statearr_31939[(10)] = inst_31872);

(statearr_31939[(12)] = inst_31874);

return statearr_31939;
})();
var statearr_31940_31970 = state_31920__$1;
(statearr_31940_31970[(2)] = null);

(statearr_31940_31970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (3))){
var inst_31918 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31920__$1,inst_31918);
} else {
if((state_val_31921 === (12))){
var inst_31906 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
var statearr_31941_31971 = state_31920__$1;
(statearr_31941_31971[(2)] = inst_31906);

(statearr_31941_31971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (2))){
var state_31920__$1 = state_31920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31920__$1,(4),in$);
} else {
if((state_val_31921 === (23))){
var inst_31914 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
var statearr_31942_31972 = state_31920__$1;
(statearr_31942_31972[(2)] = inst_31914);

(statearr_31942_31972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (19))){
var inst_31901 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
var statearr_31943_31973 = state_31920__$1;
(statearr_31943_31973[(2)] = inst_31901);

(statearr_31943_31973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (11))){
var inst_31886 = (state_31920[(7)]);
var inst_31872 = (state_31920[(10)]);
var inst_31886__$1 = cljs.core.seq.call(null,inst_31872);
var state_31920__$1 = (function (){var statearr_31944 = state_31920;
(statearr_31944[(7)] = inst_31886__$1);

return statearr_31944;
})();
if(inst_31886__$1){
var statearr_31945_31974 = state_31920__$1;
(statearr_31945_31974[(1)] = (14));

} else {
var statearr_31946_31975 = state_31920__$1;
(statearr_31946_31975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (9))){
var inst_31908 = (state_31920[(2)]);
var inst_31909 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31920__$1 = (function (){var statearr_31947 = state_31920;
(statearr_31947[(15)] = inst_31908);

return statearr_31947;
})();
if(cljs.core.truth_(inst_31909)){
var statearr_31948_31976 = state_31920__$1;
(statearr_31948_31976[(1)] = (21));

} else {
var statearr_31949_31977 = state_31920__$1;
(statearr_31949_31977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (5))){
var inst_31864 = cljs.core.async.close_BANG_.call(null,out);
var state_31920__$1 = state_31920;
var statearr_31950_31978 = state_31920__$1;
(statearr_31950_31978[(2)] = inst_31864);

(statearr_31950_31978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (14))){
var inst_31886 = (state_31920[(7)]);
var inst_31888 = cljs.core.chunked_seq_QMARK_.call(null,inst_31886);
var state_31920__$1 = state_31920;
if(inst_31888){
var statearr_31951_31979 = state_31920__$1;
(statearr_31951_31979[(1)] = (17));

} else {
var statearr_31952_31980 = state_31920__$1;
(statearr_31952_31980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (16))){
var inst_31904 = (state_31920[(2)]);
var state_31920__$1 = state_31920;
var statearr_31953_31981 = state_31920__$1;
(statearr_31953_31981[(2)] = inst_31904);

(statearr_31953_31981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31921 === (10))){
var inst_31875 = (state_31920[(8)]);
var inst_31873 = (state_31920[(9)]);
var inst_31880 = cljs.core._nth.call(null,inst_31873,inst_31875);
var state_31920__$1 = state_31920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31920__$1,(13),out,inst_31880);
} else {
if((state_val_31921 === (18))){
var inst_31886 = (state_31920[(7)]);
var inst_31895 = cljs.core.first.call(null,inst_31886);
var state_31920__$1 = state_31920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31920__$1,(20),out,inst_31895);
} else {
if((state_val_31921 === (8))){
var inst_31875 = (state_31920[(8)]);
var inst_31874 = (state_31920[(12)]);
var inst_31877 = (inst_31875 < inst_31874);
var inst_31878 = inst_31877;
var state_31920__$1 = state_31920;
if(cljs.core.truth_(inst_31878)){
var statearr_31954_31982 = state_31920__$1;
(statearr_31954_31982[(1)] = (10));

} else {
var statearr_31955_31983 = state_31920__$1;
(statearr_31955_31983[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____0 = (function (){
var statearr_31956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__);

(statearr_31956[(1)] = (1));

return statearr_31956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____1 = (function (state_31920){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_31920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e31957){if((e31957 instanceof Object)){
var ex__30213__auto__ = e31957;
var statearr_31958_31984 = state_31920;
(statearr_31958_31984[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31985 = state_31920;
state_31920 = G__31985;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__ = function(state_31920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____1.call(this,state_31920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_31959 = f__30305__auto__.call(null);
(statearr_31959[(6)] = c__30304__auto__);

return statearr_31959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31987 = arguments.length;
switch (G__31987) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31990 = arguments.length;
switch (G__31990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31993 = arguments.length;
switch (G__31993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___32040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___32040,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___32040,out){
return (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_32012 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32019_32041 = state_32017__$1;
(statearr_32019_32041[(2)] = inst_32012);

(statearr_32019_32041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31994 = null;
var state_32017__$1 = (function (){var statearr_32020 = state_32017;
(statearr_32020[(7)] = inst_31994);

return statearr_32020;
})();
var statearr_32021_32042 = state_32017__$1;
(statearr_32021_32042[(2)] = null);

(statearr_32021_32042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31997 = (state_32017[(8)]);
var inst_31997__$1 = (state_32017[(2)]);
var inst_31998 = (inst_31997__$1 == null);
var inst_31999 = cljs.core.not.call(null,inst_31998);
var state_32017__$1 = (function (){var statearr_32022 = state_32017;
(statearr_32022[(8)] = inst_31997__$1);

return statearr_32022;
})();
if(inst_31999){
var statearr_32023_32043 = state_32017__$1;
(statearr_32023_32043[(1)] = (5));

} else {
var statearr_32024_32044 = state_32017__$1;
(statearr_32024_32044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var state_32017__$1 = state_32017;
var statearr_32025_32045 = state_32017__$1;
(statearr_32025_32045[(2)] = null);

(statearr_32025_32045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32014 = (state_32017[(2)]);
var inst_32015 = cljs.core.async.close_BANG_.call(null,out);
var state_32017__$1 = (function (){var statearr_32026 = state_32017;
(statearr_32026[(9)] = inst_32014);

return statearr_32026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (2))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,(4),ch);
} else {
if((state_val_32018 === (11))){
var inst_31997 = (state_32017[(8)]);
var inst_32006 = (state_32017[(2)]);
var inst_31994 = inst_31997;
var state_32017__$1 = (function (){var statearr_32027 = state_32017;
(statearr_32027[(10)] = inst_32006);

(statearr_32027[(7)] = inst_31994);

return statearr_32027;
})();
var statearr_32028_32046 = state_32017__$1;
(statearr_32028_32046[(2)] = null);

(statearr_32028_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31997 = (state_32017[(8)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(11),out,inst_31997);
} else {
if((state_val_32018 === (5))){
var inst_31997 = (state_32017[(8)]);
var inst_31994 = (state_32017[(7)]);
var inst_32001 = cljs.core._EQ_.call(null,inst_31997,inst_31994);
var state_32017__$1 = state_32017;
if(inst_32001){
var statearr_32030_32047 = state_32017__$1;
(statearr_32030_32047[(1)] = (8));

} else {
var statearr_32031_32048 = state_32017__$1;
(statearr_32031_32048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_32009 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32032_32049 = state_32017__$1;
(statearr_32032_32049[(2)] = inst_32009);

(statearr_32032_32049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31994 = (state_32017[(7)]);
var tmp32029 = inst_31994;
var inst_31994__$1 = tmp32029;
var state_32017__$1 = (function (){var statearr_32033 = state_32017;
(statearr_32033[(7)] = inst_31994__$1);

return statearr_32033;
})();
var statearr_32034_32050 = state_32017__$1;
(statearr_32034_32050[(2)] = null);

(statearr_32034_32050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___32040,out))
;
return ((function (switch__30209__auto__,c__30304__auto___32040,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32035[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_32017){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e32036){if((e32036 instanceof Object)){
var ex__30213__auto__ = e32036;
var statearr_32037_32051 = state_32017;
(statearr_32037_32051[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32052 = state_32017;
state_32017 = G__32052;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___32040,out))
})();
var state__30306__auto__ = (function (){var statearr_32038 = f__30305__auto__.call(null);
(statearr_32038[(6)] = c__30304__auto___32040);

return statearr_32038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___32040,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32054 = arguments.length;
switch (G__32054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___32120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___32120,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___32120,out){
return (function (state_32092){
var state_val_32093 = (state_32092[(1)]);
if((state_val_32093 === (7))){
var inst_32088 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32094_32121 = state_32092__$1;
(statearr_32094_32121[(2)] = inst_32088);

(statearr_32094_32121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (1))){
var inst_32055 = (new Array(n));
var inst_32056 = inst_32055;
var inst_32057 = (0);
var state_32092__$1 = (function (){var statearr_32095 = state_32092;
(statearr_32095[(7)] = inst_32056);

(statearr_32095[(8)] = inst_32057);

return statearr_32095;
})();
var statearr_32096_32122 = state_32092__$1;
(statearr_32096_32122[(2)] = null);

(statearr_32096_32122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (4))){
var inst_32060 = (state_32092[(9)]);
var inst_32060__$1 = (state_32092[(2)]);
var inst_32061 = (inst_32060__$1 == null);
var inst_32062 = cljs.core.not.call(null,inst_32061);
var state_32092__$1 = (function (){var statearr_32097 = state_32092;
(statearr_32097[(9)] = inst_32060__$1);

return statearr_32097;
})();
if(inst_32062){
var statearr_32098_32123 = state_32092__$1;
(statearr_32098_32123[(1)] = (5));

} else {
var statearr_32099_32124 = state_32092__$1;
(statearr_32099_32124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (15))){
var inst_32082 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32100_32125 = state_32092__$1;
(statearr_32100_32125[(2)] = inst_32082);

(statearr_32100_32125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (13))){
var state_32092__$1 = state_32092;
var statearr_32101_32126 = state_32092__$1;
(statearr_32101_32126[(2)] = null);

(statearr_32101_32126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (6))){
var inst_32057 = (state_32092[(8)]);
var inst_32078 = (inst_32057 > (0));
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32078)){
var statearr_32102_32127 = state_32092__$1;
(statearr_32102_32127[(1)] = (12));

} else {
var statearr_32103_32128 = state_32092__$1;
(statearr_32103_32128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (3))){
var inst_32090 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32092__$1,inst_32090);
} else {
if((state_val_32093 === (12))){
var inst_32056 = (state_32092[(7)]);
var inst_32080 = cljs.core.vec.call(null,inst_32056);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32092__$1,(15),out,inst_32080);
} else {
if((state_val_32093 === (2))){
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32092__$1,(4),ch);
} else {
if((state_val_32093 === (11))){
var inst_32072 = (state_32092[(2)]);
var inst_32073 = (new Array(n));
var inst_32056 = inst_32073;
var inst_32057 = (0);
var state_32092__$1 = (function (){var statearr_32104 = state_32092;
(statearr_32104[(7)] = inst_32056);

(statearr_32104[(10)] = inst_32072);

(statearr_32104[(8)] = inst_32057);

return statearr_32104;
})();
var statearr_32105_32129 = state_32092__$1;
(statearr_32105_32129[(2)] = null);

(statearr_32105_32129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (9))){
var inst_32056 = (state_32092[(7)]);
var inst_32070 = cljs.core.vec.call(null,inst_32056);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32092__$1,(11),out,inst_32070);
} else {
if((state_val_32093 === (5))){
var inst_32065 = (state_32092[(11)]);
var inst_32056 = (state_32092[(7)]);
var inst_32057 = (state_32092[(8)]);
var inst_32060 = (state_32092[(9)]);
var inst_32064 = (inst_32056[inst_32057] = inst_32060);
var inst_32065__$1 = (inst_32057 + (1));
var inst_32066 = (inst_32065__$1 < n);
var state_32092__$1 = (function (){var statearr_32106 = state_32092;
(statearr_32106[(12)] = inst_32064);

(statearr_32106[(11)] = inst_32065__$1);

return statearr_32106;
})();
if(cljs.core.truth_(inst_32066)){
var statearr_32107_32130 = state_32092__$1;
(statearr_32107_32130[(1)] = (8));

} else {
var statearr_32108_32131 = state_32092__$1;
(statearr_32108_32131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (14))){
var inst_32085 = (state_32092[(2)]);
var inst_32086 = cljs.core.async.close_BANG_.call(null,out);
var state_32092__$1 = (function (){var statearr_32110 = state_32092;
(statearr_32110[(13)] = inst_32085);

return statearr_32110;
})();
var statearr_32111_32132 = state_32092__$1;
(statearr_32111_32132[(2)] = inst_32086);

(statearr_32111_32132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (10))){
var inst_32076 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32112_32133 = state_32092__$1;
(statearr_32112_32133[(2)] = inst_32076);

(statearr_32112_32133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (8))){
var inst_32065 = (state_32092[(11)]);
var inst_32056 = (state_32092[(7)]);
var tmp32109 = inst_32056;
var inst_32056__$1 = tmp32109;
var inst_32057 = inst_32065;
var state_32092__$1 = (function (){var statearr_32113 = state_32092;
(statearr_32113[(7)] = inst_32056__$1);

(statearr_32113[(8)] = inst_32057);

return statearr_32113;
})();
var statearr_32114_32134 = state_32092__$1;
(statearr_32114_32134[(2)] = null);

(statearr_32114_32134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___32120,out))
;
return ((function (switch__30209__auto__,c__30304__auto___32120,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_32092){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_32092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__30213__auto__ = e32116;
var statearr_32117_32135 = state_32092;
(statearr_32117_32135[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32136 = state_32092;
state_32092 = G__32136;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_32092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_32092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___32120,out))
})();
var state__30306__auto__ = (function (){var statearr_32118 = f__30305__auto__.call(null);
(statearr_32118[(6)] = c__30304__auto___32120);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___32120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32138 = arguments.length;
switch (G__32138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30304__auto___32208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___32208,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___32208,out){
return (function (state_32180){
var state_val_32181 = (state_32180[(1)]);
if((state_val_32181 === (7))){
var inst_32176 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32182_32209 = state_32180__$1;
(statearr_32182_32209[(2)] = inst_32176);

(statearr_32182_32209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (1))){
var inst_32139 = [];
var inst_32140 = inst_32139;
var inst_32141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32180__$1 = (function (){var statearr_32183 = state_32180;
(statearr_32183[(7)] = inst_32140);

(statearr_32183[(8)] = inst_32141);

return statearr_32183;
})();
var statearr_32184_32210 = state_32180__$1;
(statearr_32184_32210[(2)] = null);

(statearr_32184_32210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (4))){
var inst_32144 = (state_32180[(9)]);
var inst_32144__$1 = (state_32180[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var inst_32146 = cljs.core.not.call(null,inst_32145);
var state_32180__$1 = (function (){var statearr_32185 = state_32180;
(statearr_32185[(9)] = inst_32144__$1);

return statearr_32185;
})();
if(inst_32146){
var statearr_32186_32211 = state_32180__$1;
(statearr_32186_32211[(1)] = (5));

} else {
var statearr_32187_32212 = state_32180__$1;
(statearr_32187_32212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (15))){
var inst_32170 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32188_32213 = state_32180__$1;
(statearr_32188_32213[(2)] = inst_32170);

(statearr_32188_32213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (13))){
var state_32180__$1 = state_32180;
var statearr_32189_32214 = state_32180__$1;
(statearr_32189_32214[(2)] = null);

(statearr_32189_32214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (6))){
var inst_32140 = (state_32180[(7)]);
var inst_32165 = inst_32140.length;
var inst_32166 = (inst_32165 > (0));
var state_32180__$1 = state_32180;
if(cljs.core.truth_(inst_32166)){
var statearr_32190_32215 = state_32180__$1;
(statearr_32190_32215[(1)] = (12));

} else {
var statearr_32191_32216 = state_32180__$1;
(statearr_32191_32216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (3))){
var inst_32178 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32180__$1,inst_32178);
} else {
if((state_val_32181 === (12))){
var inst_32140 = (state_32180[(7)]);
var inst_32168 = cljs.core.vec.call(null,inst_32140);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32180__$1,(15),out,inst_32168);
} else {
if((state_val_32181 === (2))){
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32180__$1,(4),ch);
} else {
if((state_val_32181 === (11))){
var inst_32144 = (state_32180[(9)]);
var inst_32148 = (state_32180[(10)]);
var inst_32158 = (state_32180[(2)]);
var inst_32159 = [];
var inst_32160 = inst_32159.push(inst_32144);
var inst_32140 = inst_32159;
var inst_32141 = inst_32148;
var state_32180__$1 = (function (){var statearr_32192 = state_32180;
(statearr_32192[(7)] = inst_32140);

(statearr_32192[(11)] = inst_32160);

(statearr_32192[(12)] = inst_32158);

(statearr_32192[(8)] = inst_32141);

return statearr_32192;
})();
var statearr_32193_32217 = state_32180__$1;
(statearr_32193_32217[(2)] = null);

(statearr_32193_32217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (9))){
var inst_32140 = (state_32180[(7)]);
var inst_32156 = cljs.core.vec.call(null,inst_32140);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32180__$1,(11),out,inst_32156);
} else {
if((state_val_32181 === (5))){
var inst_32144 = (state_32180[(9)]);
var inst_32141 = (state_32180[(8)]);
var inst_32148 = (state_32180[(10)]);
var inst_32148__$1 = f.call(null,inst_32144);
var inst_32149 = cljs.core._EQ_.call(null,inst_32148__$1,inst_32141);
var inst_32150 = cljs.core.keyword_identical_QMARK_.call(null,inst_32141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32151 = ((inst_32149) || (inst_32150));
var state_32180__$1 = (function (){var statearr_32194 = state_32180;
(statearr_32194[(10)] = inst_32148__$1);

return statearr_32194;
})();
if(cljs.core.truth_(inst_32151)){
var statearr_32195_32218 = state_32180__$1;
(statearr_32195_32218[(1)] = (8));

} else {
var statearr_32196_32219 = state_32180__$1;
(statearr_32196_32219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (14))){
var inst_32173 = (state_32180[(2)]);
var inst_32174 = cljs.core.async.close_BANG_.call(null,out);
var state_32180__$1 = (function (){var statearr_32198 = state_32180;
(statearr_32198[(13)] = inst_32173);

return statearr_32198;
})();
var statearr_32199_32220 = state_32180__$1;
(statearr_32199_32220[(2)] = inst_32174);

(statearr_32199_32220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (10))){
var inst_32163 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32200_32221 = state_32180__$1;
(statearr_32200_32221[(2)] = inst_32163);

(statearr_32200_32221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (8))){
var inst_32140 = (state_32180[(7)]);
var inst_32144 = (state_32180[(9)]);
var inst_32148 = (state_32180[(10)]);
var inst_32153 = inst_32140.push(inst_32144);
var tmp32197 = inst_32140;
var inst_32140__$1 = tmp32197;
var inst_32141 = inst_32148;
var state_32180__$1 = (function (){var statearr_32201 = state_32180;
(statearr_32201[(14)] = inst_32153);

(statearr_32201[(7)] = inst_32140__$1);

(statearr_32201[(8)] = inst_32141);

return statearr_32201;
})();
var statearr_32202_32222 = state_32180__$1;
(statearr_32202_32222[(2)] = null);

(statearr_32202_32222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___32208,out))
;
return ((function (switch__30209__auto__,c__30304__auto___32208,out){
return (function() {
var cljs$core$async$state_machine__30210__auto__ = null;
var cljs$core$async$state_machine__30210__auto____0 = (function (){
var statearr_32203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32203[(0)] = cljs$core$async$state_machine__30210__auto__);

(statearr_32203[(1)] = (1));

return statearr_32203;
});
var cljs$core$async$state_machine__30210__auto____1 = (function (state_32180){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_32180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e32204){if((e32204 instanceof Object)){
var ex__30213__auto__ = e32204;
var statearr_32205_32223 = state_32180;
(statearr_32205_32223[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32224 = state_32180;
state_32180 = G__32224;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
cljs$core$async$state_machine__30210__auto__ = function(state_32180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30210__auto____1.call(this,state_32180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30210__auto____0;
cljs$core$async$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30210__auto____1;
return cljs$core$async$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___32208,out))
})();
var state__30306__auto__ = (function (){var statearr_32206 = f__30305__auto__.call(null);
(statearr_32206[(6)] = c__30304__auto___32208);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___32208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563617061239
