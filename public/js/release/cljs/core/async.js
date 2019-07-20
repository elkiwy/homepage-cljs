// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28668 = arguments.length;
switch (G__28668) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28669 = (function (f,blockable,meta28670){
this.f = f;
this.blockable = blockable;
this.meta28670 = meta28670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28671,meta28670__$1){
var self__ = this;
var _28671__$1 = this;
return (new cljs.core.async.t_cljs$core$async28669(self__.f,self__.blockable,meta28670__$1));
});

cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28671){
var self__ = this;
var _28671__$1 = this;
return self__.meta28670;
});

cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta28670], null);
});

cljs.core.async.t_cljs$core$async28669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28669";

cljs.core.async.t_cljs$core$async28669.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28669");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28669.
 */
cljs.core.async.__GT_t_cljs$core$async28669 = (function cljs$core$async$__GT_t_cljs$core$async28669(f__$1,blockable__$1,meta28670){
return (new cljs.core.async.t_cljs$core$async28669(f__$1,blockable__$1,meta28670));
});

}

return (new cljs.core.async.t_cljs$core$async28669(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__28675 = arguments.length;
switch (G__28675) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__28678 = arguments.length;
switch (G__28678) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__28681 = arguments.length;
switch (G__28681) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28683 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28683) : fn1.call(null,val_28683));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28683,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28683) : fn1.call(null,val_28683));
});})(val_28683,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__28685 = arguments.length;
switch (G__28685) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___28687 = n;
var x_28688 = (0);
while(true){
if((x_28688 < n__4607__auto___28687)){
(a[x_28688] = (0));

var G__28689 = (x_28688 + (1));
x_28688 = G__28689;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__28690 = (i + (1));
i = G__28690;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28691 = (function (flag,meta28692){
this.flag = flag;
this.meta28692 = meta28692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28693,meta28692__$1){
var self__ = this;
var _28693__$1 = this;
return (new cljs.core.async.t_cljs$core$async28691(self__.flag,meta28692__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28693){
var self__ = this;
var _28693__$1 = this;
return self__.meta28692;
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta28692], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28691";

cljs.core.async.t_cljs$core$async28691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28691");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28691.
 */
cljs.core.async.__GT_t_cljs$core$async28691 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28691(flag__$1,meta28692){
return (new cljs.core.async.t_cljs$core$async28691(flag__$1,meta28692));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28691(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28694 = (function (flag,cb,meta28695){
this.flag = flag;
this.cb = cb;
this.meta28695 = meta28695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28696,meta28695__$1){
var self__ = this;
var _28696__$1 = this;
return (new cljs.core.async.t_cljs$core$async28694(self__.flag,self__.cb,meta28695__$1));
});

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28696){
var self__ = this;
var _28696__$1 = this;
return self__.meta28695;
});

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta28695], null);
});

cljs.core.async.t_cljs$core$async28694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28694";

cljs.core.async.t_cljs$core$async28694.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28694");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28694.
 */
cljs.core.async.__GT_t_cljs$core$async28694 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28694(flag__$1,cb__$1,meta28695){
return (new cljs.core.async.t_cljs$core$async28694(flag__$1,cb__$1,meta28695));
});

}

return (new cljs.core.async.t_cljs$core$async28694(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28697_SHARP_){
var G__28699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28697_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28699) : fret.call(null,G__28699));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28698_SHARP_){
var G__28700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28698_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28700) : fret.call(null,G__28700));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28701 = (i + (1));
i = G__28701;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4730__auto___28707 = arguments.length;
var i__4731__auto___28708 = (0);
while(true){
if((i__4731__auto___28708 < len__4730__auto___28707)){
args__4736__auto__.push((arguments[i__4731__auto___28708]));

var G__28709 = (i__4731__auto___28708 + (1));
i__4731__auto___28708 = G__28709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28704){
var map__28705 = p__28704;
var map__28705__$1 = (((((!((map__28705 == null))))?(((((map__28705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28705):map__28705);
var opts = map__28705__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28702){
var G__28703 = cljs.core.first(seq28702);
var seq28702__$1 = cljs.core.next(seq28702);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28703,seq28702__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__28711 = arguments.length;
switch (G__28711) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28608__auto___28757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___28757){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___28757){
return (function (state_28735){
var state_val_28736 = (state_28735[(1)]);
if((state_val_28736 === (7))){
var inst_28731 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28737_28758 = state_28735__$1;
(statearr_28737_28758[(2)] = inst_28731);

(statearr_28737_28758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (1))){
var state_28735__$1 = state_28735;
var statearr_28738_28759 = state_28735__$1;
(statearr_28738_28759[(2)] = null);

(statearr_28738_28759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (4))){
var inst_28714 = (state_28735[(7)]);
var inst_28714__$1 = (state_28735[(2)]);
var inst_28715 = (inst_28714__$1 == null);
var state_28735__$1 = (function (){var statearr_28739 = state_28735;
(statearr_28739[(7)] = inst_28714__$1);

return statearr_28739;
})();
if(cljs.core.truth_(inst_28715)){
var statearr_28740_28760 = state_28735__$1;
(statearr_28740_28760[(1)] = (5));

} else {
var statearr_28741_28761 = state_28735__$1;
(statearr_28741_28761[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (13))){
var state_28735__$1 = state_28735;
var statearr_28742_28762 = state_28735__$1;
(statearr_28742_28762[(2)] = null);

(statearr_28742_28762[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (6))){
var inst_28714 = (state_28735[(7)]);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28735__$1,(11),to,inst_28714);
} else {
if((state_val_28736 === (3))){
var inst_28733 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28735__$1,inst_28733);
} else {
if((state_val_28736 === (12))){
var state_28735__$1 = state_28735;
var statearr_28743_28763 = state_28735__$1;
(statearr_28743_28763[(2)] = null);

(statearr_28743_28763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (2))){
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28735__$1,(4),from);
} else {
if((state_val_28736 === (11))){
var inst_28724 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28724)){
var statearr_28744_28764 = state_28735__$1;
(statearr_28744_28764[(1)] = (12));

} else {
var statearr_28745_28765 = state_28735__$1;
(statearr_28745_28765[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (9))){
var state_28735__$1 = state_28735;
var statearr_28746_28766 = state_28735__$1;
(statearr_28746_28766[(2)] = null);

(statearr_28746_28766[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (5))){
var state_28735__$1 = state_28735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28747_28767 = state_28735__$1;
(statearr_28747_28767[(1)] = (8));

} else {
var statearr_28748_28768 = state_28735__$1;
(statearr_28748_28768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (14))){
var inst_28729 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28749_28769 = state_28735__$1;
(statearr_28749_28769[(2)] = inst_28729);

(statearr_28749_28769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (10))){
var inst_28721 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28750_28770 = state_28735__$1;
(statearr_28750_28770[(2)] = inst_28721);

(statearr_28750_28770[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28736 === (8))){
var inst_28718 = cljs.core.async.close_BANG_(to);
var state_28735__$1 = state_28735;
var statearr_28751_28771 = state_28735__$1;
(statearr_28751_28771[(2)] = inst_28718);

(statearr_28751_28771[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___28757))
;
return ((function (switch__28501__auto__,c__28608__auto___28757){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_28752 = [null,null,null,null,null,null,null,null];
(statearr_28752[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_28752[(1)] = (1));

return statearr_28752;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_28735){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28735);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28753){if((e28753 instanceof Object)){
var ex__28505__auto__ = e28753;
var statearr_28754_28772 = state_28735;
(statearr_28754_28772[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28735);

return cljs.core.cst$kw$recur;
} else {
throw e28753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__28773 = state_28735;
state_28735 = G__28773;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_28735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_28735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___28757))
})();
var state__28610__auto__ = (function (){var statearr_28755 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28755[(6)] = c__28608__auto___28757);

return statearr_28755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___28757))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__28774){
var vec__28775 = p__28774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(1),null);
var job = vec__28775;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28608__auto___28946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results){
return (function (state_28782){
var state_val_28783 = (state_28782[(1)]);
if((state_val_28783 === (1))){
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28782__$1,(2),res,v);
} else {
if((state_val_28783 === (2))){
var inst_28779 = (state_28782[(2)]);
var inst_28780 = cljs.core.async.close_BANG_(res);
var state_28782__$1 = (function (){var statearr_28784 = state_28782;
(statearr_28784[(7)] = inst_28779);

return statearr_28784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28782__$1,inst_28780);
} else {
return null;
}
}
});})(c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results))
;
return ((function (switch__28501__auto__,c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_28785 = [null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1 = (function (state_28782){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28782);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__28505__auto__ = e28786;
var statearr_28787_28947 = state_28782;
(statearr_28787_28947[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28782);

return cljs.core.cst$kw$recur;
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__28948 = state_28782;
state_28782 = G__28948;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = function(state_28782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1.call(this,state_28782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results))
})();
var state__28610__auto__ = (function (){var statearr_28788 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28788[(6)] = c__28608__auto___28946);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___28946,res,vec__28775,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28789){
var vec__28790 = p__28789;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28790,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28790,(1),null);
var job = vec__28790;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___28949 = n;
var __28950 = (0);
while(true){
if((__28950 < n__4607__auto___28949)){
var G__28793_28951 = type;
var G__28793_28952__$1 = (((G__28793_28951 instanceof cljs.core.Keyword))?G__28793_28951.fqn:null);
switch (G__28793_28952__$1) {
case "compute":
var c__28608__auto___28954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28950,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (__28950,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function (state_28806){
var state_val_28807 = (state_28806[(1)]);
if((state_val_28807 === (1))){
var state_28806__$1 = state_28806;
var statearr_28808_28955 = state_28806__$1;
(statearr_28808_28955[(2)] = null);

(statearr_28808_28955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28807 === (2))){
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28806__$1,(4),jobs);
} else {
if((state_val_28807 === (3))){
var inst_28804 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28806__$1,inst_28804);
} else {
if((state_val_28807 === (4))){
var inst_28796 = (state_28806[(2)]);
var inst_28797 = process(inst_28796);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28797)){
var statearr_28809_28956 = state_28806__$1;
(statearr_28809_28956[(1)] = (5));

} else {
var statearr_28810_28957 = state_28806__$1;
(statearr_28810_28957[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28807 === (5))){
var state_28806__$1 = state_28806;
var statearr_28811_28958 = state_28806__$1;
(statearr_28811_28958[(2)] = null);

(statearr_28811_28958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28807 === (6))){
var state_28806__$1 = state_28806;
var statearr_28812_28959 = state_28806__$1;
(statearr_28812_28959[(2)] = null);

(statearr_28812_28959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28807 === (7))){
var inst_28802 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28813_28960 = state_28806__$1;
(statearr_28813_28960[(2)] = inst_28802);

(statearr_28813_28960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28950,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
;
return ((function (__28950,switch__28501__auto__,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_28814 = [null,null,null,null,null,null,null];
(statearr_28814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__);

(statearr_28814[(1)] = (1));

return statearr_28814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1 = (function (state_28806){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28806);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28815){if((e28815 instanceof Object)){
var ex__28505__auto__ = e28815;
var statearr_28816_28961 = state_28806;
(statearr_28816_28961[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28806);

return cljs.core.cst$kw$recur;
} else {
throw e28815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__28962 = state_28806;
state_28806 = G__28962;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = function(state_28806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1.call(this,state_28806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__;
})()
;})(__28950,switch__28501__auto__,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_28817 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28817[(6)] = c__28608__auto___28954);

return statearr_28817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(__28950,c__28608__auto___28954,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
);


break;
case "async":
var c__28608__auto___28963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28950,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (__28950,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (1))){
var state_28830__$1 = state_28830;
var statearr_28832_28964 = state_28830__$1;
(statearr_28832_28964[(2)] = null);

(statearr_28832_28964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28831 === (2))){
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28830__$1,(4),jobs);
} else {
if((state_val_28831 === (3))){
var inst_28828 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28830__$1,inst_28828);
} else {
if((state_val_28831 === (4))){
var inst_28820 = (state_28830[(2)]);
var inst_28821 = async(inst_28820);
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28821)){
var statearr_28833_28965 = state_28830__$1;
(statearr_28833_28965[(1)] = (5));

} else {
var statearr_28834_28966 = state_28830__$1;
(statearr_28834_28966[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28831 === (5))){
var state_28830__$1 = state_28830;
var statearr_28835_28967 = state_28830__$1;
(statearr_28835_28967[(2)] = null);

(statearr_28835_28967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28831 === (6))){
var state_28830__$1 = state_28830;
var statearr_28836_28968 = state_28830__$1;
(statearr_28836_28968[(2)] = null);

(statearr_28836_28968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28831 === (7))){
var inst_28826 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28837_28969 = state_28830__$1;
(statearr_28837_28969[(2)] = inst_28826);

(statearr_28837_28969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28950,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
;
return ((function (__28950,switch__28501__auto__,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_28838 = [null,null,null,null,null,null,null];
(statearr_28838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__);

(statearr_28838[(1)] = (1));

return statearr_28838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1 = (function (state_28830){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28830);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28839){if((e28839 instanceof Object)){
var ex__28505__auto__ = e28839;
var statearr_28840_28970 = state_28830;
(statearr_28840_28970[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28830);

return cljs.core.cst$kw$recur;
} else {
throw e28839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__28971 = state_28830;
state_28830 = G__28971;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__;
})()
;})(__28950,switch__28501__auto__,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_28841 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28841[(6)] = c__28608__auto___28963);

return statearr_28841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(__28950,c__28608__auto___28963,G__28793_28951,G__28793_28952__$1,n__4607__auto___28949,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28793_28952__$1)].join('')));

}

var G__28972 = (__28950 + (1));
__28950 = G__28972;
continue;
} else {
}
break;
}

var c__28608__auto___28973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___28973,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___28973,jobs,results,process,async){
return (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (7))){
var inst_28859 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28865_28974 = state_28863__$1;
(statearr_28865_28974[(2)] = inst_28859);

(statearr_28865_28974[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28864 === (1))){
var state_28863__$1 = state_28863;
var statearr_28866_28975 = state_28863__$1;
(statearr_28866_28975[(2)] = null);

(statearr_28866_28975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28864 === (4))){
var inst_28844 = (state_28863[(7)]);
var inst_28844__$1 = (state_28863[(2)]);
var inst_28845 = (inst_28844__$1 == null);
var state_28863__$1 = (function (){var statearr_28867 = state_28863;
(statearr_28867[(7)] = inst_28844__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28845)){
var statearr_28868_28976 = state_28863__$1;
(statearr_28868_28976[(1)] = (5));

} else {
var statearr_28869_28977 = state_28863__$1;
(statearr_28869_28977[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28864 === (6))){
var inst_28844 = (state_28863[(7)]);
var inst_28849 = (state_28863[(8)]);
var inst_28849__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28851 = [inst_28844,inst_28849__$1];
var inst_28852 = (new cljs.core.PersistentVector(null,2,(5),inst_28850,inst_28851,null));
var state_28863__$1 = (function (){var statearr_28870 = state_28863;
(statearr_28870[(8)] = inst_28849__$1);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28863__$1,(8),jobs,inst_28852);
} else {
if((state_val_28864 === (3))){
var inst_28861 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28863__$1,inst_28861);
} else {
if((state_val_28864 === (2))){
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28863__$1,(4),from);
} else {
if((state_val_28864 === (9))){
var inst_28856 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28871 = state_28863;
(statearr_28871[(9)] = inst_28856);

return statearr_28871;
})();
var statearr_28872_28978 = state_28863__$1;
(statearr_28872_28978[(2)] = null);

(statearr_28872_28978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28864 === (5))){
var inst_28847 = cljs.core.async.close_BANG_(jobs);
var state_28863__$1 = state_28863;
var statearr_28873_28979 = state_28863__$1;
(statearr_28873_28979[(2)] = inst_28847);

(statearr_28873_28979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28864 === (8))){
var inst_28849 = (state_28863[(8)]);
var inst_28854 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28874 = state_28863;
(statearr_28874[(10)] = inst_28854);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28863__$1,(9),results,inst_28849);
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
});})(c__28608__auto___28973,jobs,results,process,async))
;
return ((function (switch__28501__auto__,c__28608__auto___28973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1 = (function (state_28863){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28863);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__28505__auto__ = e28876;
var statearr_28877_28980 = state_28863;
(statearr_28877_28980[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28863);

return cljs.core.cst$kw$recur;
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__28981 = state_28863;
state_28863 = G__28981;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___28973,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_28878 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28878[(6)] = c__28608__auto___28973);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___28973,jobs,results,process,async))
);


var c__28608__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto__,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto__,jobs,results,process,async){
return (function (state_28916){
var state_val_28917 = (state_28916[(1)]);
if((state_val_28917 === (7))){
var inst_28912 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28918_28982 = state_28916__$1;
(statearr_28918_28982[(2)] = inst_28912);

(statearr_28918_28982[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (20))){
var state_28916__$1 = state_28916;
var statearr_28919_28983 = state_28916__$1;
(statearr_28919_28983[(2)] = null);

(statearr_28919_28983[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (1))){
var state_28916__$1 = state_28916;
var statearr_28920_28984 = state_28916__$1;
(statearr_28920_28984[(2)] = null);

(statearr_28920_28984[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (4))){
var inst_28881 = (state_28916[(7)]);
var inst_28881__$1 = (state_28916[(2)]);
var inst_28882 = (inst_28881__$1 == null);
var state_28916__$1 = (function (){var statearr_28921 = state_28916;
(statearr_28921[(7)] = inst_28881__$1);

return statearr_28921;
})();
if(cljs.core.truth_(inst_28882)){
var statearr_28922_28985 = state_28916__$1;
(statearr_28922_28985[(1)] = (5));

} else {
var statearr_28923_28986 = state_28916__$1;
(statearr_28923_28986[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (15))){
var inst_28894 = (state_28916[(8)]);
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28916__$1,(18),to,inst_28894);
} else {
if((state_val_28917 === (21))){
var inst_28907 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28924_28987 = state_28916__$1;
(statearr_28924_28987[(2)] = inst_28907);

(statearr_28924_28987[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (13))){
var inst_28909 = (state_28916[(2)]);
var state_28916__$1 = (function (){var statearr_28925 = state_28916;
(statearr_28925[(9)] = inst_28909);

return statearr_28925;
})();
var statearr_28926_28988 = state_28916__$1;
(statearr_28926_28988[(2)] = null);

(statearr_28926_28988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (6))){
var inst_28881 = (state_28916[(7)]);
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28916__$1,(11),inst_28881);
} else {
if((state_val_28917 === (17))){
var inst_28902 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
if(cljs.core.truth_(inst_28902)){
var statearr_28927_28989 = state_28916__$1;
(statearr_28927_28989[(1)] = (19));

} else {
var statearr_28928_28990 = state_28916__$1;
(statearr_28928_28990[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (3))){
var inst_28914 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28916__$1,inst_28914);
} else {
if((state_val_28917 === (12))){
var inst_28891 = (state_28916[(10)]);
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28916__$1,(14),inst_28891);
} else {
if((state_val_28917 === (2))){
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28916__$1,(4),results);
} else {
if((state_val_28917 === (19))){
var state_28916__$1 = state_28916;
var statearr_28929_28991 = state_28916__$1;
(statearr_28929_28991[(2)] = null);

(statearr_28929_28991[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (11))){
var inst_28891 = (state_28916[(2)]);
var state_28916__$1 = (function (){var statearr_28930 = state_28916;
(statearr_28930[(10)] = inst_28891);

return statearr_28930;
})();
var statearr_28931_28992 = state_28916__$1;
(statearr_28931_28992[(2)] = null);

(statearr_28931_28992[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (9))){
var state_28916__$1 = state_28916;
var statearr_28932_28993 = state_28916__$1;
(statearr_28932_28993[(2)] = null);

(statearr_28932_28993[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (5))){
var state_28916__$1 = state_28916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28933_28994 = state_28916__$1;
(statearr_28933_28994[(1)] = (8));

} else {
var statearr_28934_28995 = state_28916__$1;
(statearr_28934_28995[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (14))){
var inst_28896 = (state_28916[(11)]);
var inst_28894 = (state_28916[(8)]);
var inst_28894__$1 = (state_28916[(2)]);
var inst_28895 = (inst_28894__$1 == null);
var inst_28896__$1 = cljs.core.not(inst_28895);
var state_28916__$1 = (function (){var statearr_28935 = state_28916;
(statearr_28935[(11)] = inst_28896__$1);

(statearr_28935[(8)] = inst_28894__$1);

return statearr_28935;
})();
if(inst_28896__$1){
var statearr_28936_28996 = state_28916__$1;
(statearr_28936_28996[(1)] = (15));

} else {
var statearr_28937_28997 = state_28916__$1;
(statearr_28937_28997[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (16))){
var inst_28896 = (state_28916[(11)]);
var state_28916__$1 = state_28916;
var statearr_28938_28998 = state_28916__$1;
(statearr_28938_28998[(2)] = inst_28896);

(statearr_28938_28998[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (10))){
var inst_28888 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28939_28999 = state_28916__$1;
(statearr_28939_28999[(2)] = inst_28888);

(statearr_28939_28999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (18))){
var inst_28899 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28940_29000 = state_28916__$1;
(statearr_28940_29000[(2)] = inst_28899);

(statearr_28940_29000[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28917 === (8))){
var inst_28885 = cljs.core.async.close_BANG_(to);
var state_28916__$1 = state_28916;
var statearr_28941_29001 = state_28916__$1;
(statearr_28941_29001[(2)] = inst_28885);

(statearr_28941_29001[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto__,jobs,results,process,async))
;
return ((function (switch__28501__auto__,c__28608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_28942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__);

(statearr_28942[(1)] = (1));

return statearr_28942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1 = (function (state_28916){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_28916);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e28943){if((e28943 instanceof Object)){
var ex__28505__auto__ = e28943;
var statearr_28944_29002 = state_28916;
(statearr_28944_29002[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28916);

return cljs.core.cst$kw$recur;
} else {
throw e28943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29003 = state_28916;
state_28916 = G__29003;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__ = function(state_28916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1.call(this,state_28916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto__,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_28945 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_28945[(6)] = c__28608__auto__);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto__,jobs,results,process,async))
);

return c__28608__auto__;
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
var G__29005 = arguments.length;
switch (G__29005) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__29008 = arguments.length;
switch (G__29008) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__29011 = arguments.length;
switch (G__29011) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28608__auto___29060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___29060,tc,fc){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___29060,tc,fc){
return (function (state_29037){
var state_val_29038 = (state_29037[(1)]);
if((state_val_29038 === (7))){
var inst_29033 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29039_29061 = state_29037__$1;
(statearr_29039_29061[(2)] = inst_29033);

(statearr_29039_29061[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (1))){
var state_29037__$1 = state_29037;
var statearr_29040_29062 = state_29037__$1;
(statearr_29040_29062[(2)] = null);

(statearr_29040_29062[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (4))){
var inst_29014 = (state_29037[(7)]);
var inst_29014__$1 = (state_29037[(2)]);
var inst_29015 = (inst_29014__$1 == null);
var state_29037__$1 = (function (){var statearr_29041 = state_29037;
(statearr_29041[(7)] = inst_29014__$1);

return statearr_29041;
})();
if(cljs.core.truth_(inst_29015)){
var statearr_29042_29063 = state_29037__$1;
(statearr_29042_29063[(1)] = (5));

} else {
var statearr_29043_29064 = state_29037__$1;
(statearr_29043_29064[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (13))){
var state_29037__$1 = state_29037;
var statearr_29044_29065 = state_29037__$1;
(statearr_29044_29065[(2)] = null);

(statearr_29044_29065[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (6))){
var inst_29014 = (state_29037[(7)]);
var inst_29020 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29014) : p.call(null,inst_29014));
var state_29037__$1 = state_29037;
if(cljs.core.truth_(inst_29020)){
var statearr_29045_29066 = state_29037__$1;
(statearr_29045_29066[(1)] = (9));

} else {
var statearr_29046_29067 = state_29037__$1;
(statearr_29046_29067[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (3))){
var inst_29035 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29037__$1,inst_29035);
} else {
if((state_val_29038 === (12))){
var state_29037__$1 = state_29037;
var statearr_29047_29068 = state_29037__$1;
(statearr_29047_29068[(2)] = null);

(statearr_29047_29068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (2))){
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29037__$1,(4),ch);
} else {
if((state_val_29038 === (11))){
var inst_29014 = (state_29037[(7)]);
var inst_29024 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29037__$1,(8),inst_29024,inst_29014);
} else {
if((state_val_29038 === (9))){
var state_29037__$1 = state_29037;
var statearr_29048_29069 = state_29037__$1;
(statearr_29048_29069[(2)] = tc);

(statearr_29048_29069[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (5))){
var inst_29017 = cljs.core.async.close_BANG_(tc);
var inst_29018 = cljs.core.async.close_BANG_(fc);
var state_29037__$1 = (function (){var statearr_29049 = state_29037;
(statearr_29049[(8)] = inst_29017);

return statearr_29049;
})();
var statearr_29050_29070 = state_29037__$1;
(statearr_29050_29070[(2)] = inst_29018);

(statearr_29050_29070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (14))){
var inst_29031 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29051_29071 = state_29037__$1;
(statearr_29051_29071[(2)] = inst_29031);

(statearr_29051_29071[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (10))){
var state_29037__$1 = state_29037;
var statearr_29052_29072 = state_29037__$1;
(statearr_29052_29072[(2)] = fc);

(statearr_29052_29072[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29038 === (8))){
var inst_29026 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
if(cljs.core.truth_(inst_29026)){
var statearr_29053_29073 = state_29037__$1;
(statearr_29053_29073[(1)] = (12));

} else {
var statearr_29054_29074 = state_29037__$1;
(statearr_29054_29074[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___29060,tc,fc))
;
return ((function (switch__28501__auto__,c__28608__auto___29060,tc,fc){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_29037){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29037);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29056){if((e29056 instanceof Object)){
var ex__28505__auto__ = e29056;
var statearr_29057_29075 = state_29037;
(statearr_29057_29075[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29037);

return cljs.core.cst$kw$recur;
} else {
throw e29056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29076 = state_29037;
state_29037 = G__29076;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_29037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_29037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___29060,tc,fc))
})();
var state__28610__auto__ = (function (){var statearr_29058 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29058[(6)] = c__28608__auto___29060);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___29060,tc,fc))
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
var c__28608__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto__){
return (function (state_29097){
var state_val_29098 = (state_29097[(1)]);
if((state_val_29098 === (7))){
var inst_29093 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29099_29117 = state_29097__$1;
(statearr_29099_29117[(2)] = inst_29093);

(statearr_29099_29117[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (1))){
var inst_29077 = init;
var state_29097__$1 = (function (){var statearr_29100 = state_29097;
(statearr_29100[(7)] = inst_29077);

return statearr_29100;
})();
var statearr_29101_29118 = state_29097__$1;
(statearr_29101_29118[(2)] = null);

(statearr_29101_29118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (4))){
var inst_29080 = (state_29097[(8)]);
var inst_29080__$1 = (state_29097[(2)]);
var inst_29081 = (inst_29080__$1 == null);
var state_29097__$1 = (function (){var statearr_29102 = state_29097;
(statearr_29102[(8)] = inst_29080__$1);

return statearr_29102;
})();
if(cljs.core.truth_(inst_29081)){
var statearr_29103_29119 = state_29097__$1;
(statearr_29103_29119[(1)] = (5));

} else {
var statearr_29104_29120 = state_29097__$1;
(statearr_29104_29120[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (6))){
var inst_29080 = (state_29097[(8)]);
var inst_29084 = (state_29097[(9)]);
var inst_29077 = (state_29097[(7)]);
var inst_29084__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29077,inst_29080) : f.call(null,inst_29077,inst_29080));
var inst_29085 = cljs.core.reduced_QMARK_(inst_29084__$1);
var state_29097__$1 = (function (){var statearr_29105 = state_29097;
(statearr_29105[(9)] = inst_29084__$1);

return statearr_29105;
})();
if(inst_29085){
var statearr_29106_29121 = state_29097__$1;
(statearr_29106_29121[(1)] = (8));

} else {
var statearr_29107_29122 = state_29097__$1;
(statearr_29107_29122[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (3))){
var inst_29095 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29097__$1,inst_29095);
} else {
if((state_val_29098 === (2))){
var state_29097__$1 = state_29097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29097__$1,(4),ch);
} else {
if((state_val_29098 === (9))){
var inst_29084 = (state_29097[(9)]);
var inst_29077 = inst_29084;
var state_29097__$1 = (function (){var statearr_29108 = state_29097;
(statearr_29108[(7)] = inst_29077);

return statearr_29108;
})();
var statearr_29109_29123 = state_29097__$1;
(statearr_29109_29123[(2)] = null);

(statearr_29109_29123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (5))){
var inst_29077 = (state_29097[(7)]);
var state_29097__$1 = state_29097;
var statearr_29110_29124 = state_29097__$1;
(statearr_29110_29124[(2)] = inst_29077);

(statearr_29110_29124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (10))){
var inst_29091 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29111_29125 = state_29097__$1;
(statearr_29111_29125[(2)] = inst_29091);

(statearr_29111_29125[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29098 === (8))){
var inst_29084 = (state_29097[(9)]);
var inst_29087 = cljs.core.deref(inst_29084);
var state_29097__$1 = state_29097;
var statearr_29112_29126 = state_29097__$1;
(statearr_29112_29126[(2)] = inst_29087);

(statearr_29112_29126[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto__))
;
return ((function (switch__28501__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28502__auto____0 = (function (){
var statearr_29113 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29113[(0)] = cljs$core$async$reduce_$_state_machine__28502__auto__);

(statearr_29113[(1)] = (1));

return statearr_29113;
});
var cljs$core$async$reduce_$_state_machine__28502__auto____1 = (function (state_29097){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29097);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29114){if((e29114 instanceof Object)){
var ex__28505__auto__ = e29114;
var statearr_29115_29127 = state_29097;
(statearr_29115_29127[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29097);

return cljs.core.cst$kw$recur;
} else {
throw e29114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29128 = state_29097;
state_29097 = G__29128;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28502__auto__ = function(state_29097){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28502__auto____1.call(this,state_29097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28502__auto____0;
cljs$core$async$reduce_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28502__auto____1;
return cljs$core$async$reduce_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_29116 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29116[(6)] = c__28608__auto__);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28608__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto__,f__$1){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto__,f__$1){
return (function (state_29134){
var state_val_29135 = (state_29134[(1)]);
if((state_val_29135 === (1))){
var inst_29129 = cljs.core.async.reduce(f__$1,init,ch);
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29134__$1,(2),inst_29129);
} else {
if((state_val_29135 === (2))){
var inst_29131 = (state_29134[(2)]);
var inst_29132 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29131) : f__$1.call(null,inst_29131));
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29134__$1,inst_29132);
} else {
return null;
}
}
});})(c__28608__auto__,f__$1))
;
return ((function (switch__28501__auto__,c__28608__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28502__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null];
(statearr_29136[(0)] = cljs$core$async$transduce_$_state_machine__28502__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var cljs$core$async$transduce_$_state_machine__28502__auto____1 = (function (state_29134){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29134);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29137){if((e29137 instanceof Object)){
var ex__28505__auto__ = e29137;
var statearr_29138_29140 = state_29134;
(statearr_29138_29140[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29134);

return cljs.core.cst$kw$recur;
} else {
throw e29137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29141 = state_29134;
state_29134 = G__29141;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28502__auto__ = function(state_29134){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28502__auto____1.call(this,state_29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28502__auto____0;
cljs$core$async$transduce_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28502__auto____1;
return cljs$core$async$transduce_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto__,f__$1))
})();
var state__28610__auto__ = (function (){var statearr_29139 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29139[(6)] = c__28608__auto__);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto__,f__$1))
);

return c__28608__auto__;
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
var G__29143 = arguments.length;
switch (G__29143) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28608__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto__){
return (function (state_29168){
var state_val_29169 = (state_29168[(1)]);
if((state_val_29169 === (7))){
var inst_29150 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29170_29191 = state_29168__$1;
(statearr_29170_29191[(2)] = inst_29150);

(statearr_29170_29191[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (1))){
var inst_29144 = cljs.core.seq(coll);
var inst_29145 = inst_29144;
var state_29168__$1 = (function (){var statearr_29171 = state_29168;
(statearr_29171[(7)] = inst_29145);

return statearr_29171;
})();
var statearr_29172_29192 = state_29168__$1;
(statearr_29172_29192[(2)] = null);

(statearr_29172_29192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (4))){
var inst_29145 = (state_29168[(7)]);
var inst_29148 = cljs.core.first(inst_29145);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29168__$1,(7),ch,inst_29148);
} else {
if((state_val_29169 === (13))){
var inst_29162 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29173_29193 = state_29168__$1;
(statearr_29173_29193[(2)] = inst_29162);

(statearr_29173_29193[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (6))){
var inst_29153 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29153)){
var statearr_29174_29194 = state_29168__$1;
(statearr_29174_29194[(1)] = (8));

} else {
var statearr_29175_29195 = state_29168__$1;
(statearr_29175_29195[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (3))){
var inst_29166 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29168__$1,inst_29166);
} else {
if((state_val_29169 === (12))){
var state_29168__$1 = state_29168;
var statearr_29176_29196 = state_29168__$1;
(statearr_29176_29196[(2)] = null);

(statearr_29176_29196[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (2))){
var inst_29145 = (state_29168[(7)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29145)){
var statearr_29177_29197 = state_29168__$1;
(statearr_29177_29197[(1)] = (4));

} else {
var statearr_29178_29198 = state_29168__$1;
(statearr_29178_29198[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (11))){
var inst_29159 = cljs.core.async.close_BANG_(ch);
var state_29168__$1 = state_29168;
var statearr_29179_29199 = state_29168__$1;
(statearr_29179_29199[(2)] = inst_29159);

(statearr_29179_29199[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (9))){
var state_29168__$1 = state_29168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29180_29200 = state_29168__$1;
(statearr_29180_29200[(1)] = (11));

} else {
var statearr_29181_29201 = state_29168__$1;
(statearr_29181_29201[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (5))){
var inst_29145 = (state_29168[(7)]);
var state_29168__$1 = state_29168;
var statearr_29182_29202 = state_29168__$1;
(statearr_29182_29202[(2)] = inst_29145);

(statearr_29182_29202[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (10))){
var inst_29164 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29183_29203 = state_29168__$1;
(statearr_29183_29203[(2)] = inst_29164);

(statearr_29183_29203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29169 === (8))){
var inst_29145 = (state_29168[(7)]);
var inst_29155 = cljs.core.next(inst_29145);
var inst_29145__$1 = inst_29155;
var state_29168__$1 = (function (){var statearr_29184 = state_29168;
(statearr_29184[(7)] = inst_29145__$1);

return statearr_29184;
})();
var statearr_29185_29204 = state_29168__$1;
(statearr_29185_29204[(2)] = null);

(statearr_29185_29204[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto__))
;
return ((function (switch__28501__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_29186 = [null,null,null,null,null,null,null,null];
(statearr_29186[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_29186[(1)] = (1));

return statearr_29186;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_29168){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29168);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29187){if((e29187 instanceof Object)){
var ex__28505__auto__ = e29187;
var statearr_29188_29205 = state_29168;
(statearr_29188_29205[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29168);

return cljs.core.cst$kw$recur;
} else {
throw e29187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29206 = state_29168;
state_29168 = G__29206;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_29168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_29168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_29189 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29189[(6)] = c__28608__auto__);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29207 = (function (ch,cs,meta29208){
this.ch = ch;
this.cs = cs;
this.meta29208 = meta29208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29209,meta29208__$1){
var self__ = this;
var _29209__$1 = this;
return (new cljs.core.async.t_cljs$core$async29207(self__.ch,self__.cs,meta29208__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29209){
var self__ = this;
var _29209__$1 = this;
return self__.meta29208;
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29208], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29207";

cljs.core.async.t_cljs$core$async29207.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29207");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29207.
 */
cljs.core.async.__GT_t_cljs$core$async29207 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29207(ch__$1,cs__$1,meta29208){
return (new cljs.core.async.t_cljs$core$async29207(ch__$1,cs__$1,meta29208));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29207(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28608__auto___29429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___29429,cs,m,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___29429,cs,m,dchan,dctr,done){
return (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (7))){
var inst_29340 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29346_29430 = state_29344__$1;
(statearr_29346_29430[(2)] = inst_29340);

(statearr_29346_29430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (20))){
var inst_29243 = (state_29344[(7)]);
var inst_29255 = cljs.core.first(inst_29243);
var inst_29256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29255,(0),null);
var inst_29257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29255,(1),null);
var state_29344__$1 = (function (){var statearr_29347 = state_29344;
(statearr_29347[(8)] = inst_29256);

return statearr_29347;
})();
if(cljs.core.truth_(inst_29257)){
var statearr_29348_29431 = state_29344__$1;
(statearr_29348_29431[(1)] = (22));

} else {
var statearr_29349_29432 = state_29344__$1;
(statearr_29349_29432[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (27))){
var inst_29287 = (state_29344[(9)]);
var inst_29212 = (state_29344[(10)]);
var inst_29292 = (state_29344[(11)]);
var inst_29285 = (state_29344[(12)]);
var inst_29292__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29285,inst_29287);
var inst_29293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29292__$1,inst_29212,done);
var state_29344__$1 = (function (){var statearr_29350 = state_29344;
(statearr_29350[(11)] = inst_29292__$1);

return statearr_29350;
})();
if(cljs.core.truth_(inst_29293)){
var statearr_29351_29433 = state_29344__$1;
(statearr_29351_29433[(1)] = (30));

} else {
var statearr_29352_29434 = state_29344__$1;
(statearr_29352_29434[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (1))){
var state_29344__$1 = state_29344;
var statearr_29353_29435 = state_29344__$1;
(statearr_29353_29435[(2)] = null);

(statearr_29353_29435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (24))){
var inst_29243 = (state_29344[(7)]);
var inst_29262 = (state_29344[(2)]);
var inst_29263 = cljs.core.next(inst_29243);
var inst_29221 = inst_29263;
var inst_29222 = null;
var inst_29223 = (0);
var inst_29224 = (0);
var state_29344__$1 = (function (){var statearr_29354 = state_29344;
(statearr_29354[(13)] = inst_29262);

(statearr_29354[(14)] = inst_29223);

(statearr_29354[(15)] = inst_29224);

(statearr_29354[(16)] = inst_29222);

(statearr_29354[(17)] = inst_29221);

return statearr_29354;
})();
var statearr_29355_29436 = state_29344__$1;
(statearr_29355_29436[(2)] = null);

(statearr_29355_29436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (39))){
var state_29344__$1 = state_29344;
var statearr_29359_29437 = state_29344__$1;
(statearr_29359_29437[(2)] = null);

(statearr_29359_29437[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (4))){
var inst_29212 = (state_29344[(10)]);
var inst_29212__$1 = (state_29344[(2)]);
var inst_29213 = (inst_29212__$1 == null);
var state_29344__$1 = (function (){var statearr_29360 = state_29344;
(statearr_29360[(10)] = inst_29212__$1);

return statearr_29360;
})();
if(cljs.core.truth_(inst_29213)){
var statearr_29361_29438 = state_29344__$1;
(statearr_29361_29438[(1)] = (5));

} else {
var statearr_29362_29439 = state_29344__$1;
(statearr_29362_29439[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (15))){
var inst_29223 = (state_29344[(14)]);
var inst_29224 = (state_29344[(15)]);
var inst_29222 = (state_29344[(16)]);
var inst_29221 = (state_29344[(17)]);
var inst_29239 = (state_29344[(2)]);
var inst_29240 = (inst_29224 + (1));
var tmp29356 = inst_29223;
var tmp29357 = inst_29222;
var tmp29358 = inst_29221;
var inst_29221__$1 = tmp29358;
var inst_29222__$1 = tmp29357;
var inst_29223__$1 = tmp29356;
var inst_29224__$1 = inst_29240;
var state_29344__$1 = (function (){var statearr_29363 = state_29344;
(statearr_29363[(14)] = inst_29223__$1);

(statearr_29363[(18)] = inst_29239);

(statearr_29363[(15)] = inst_29224__$1);

(statearr_29363[(16)] = inst_29222__$1);

(statearr_29363[(17)] = inst_29221__$1);

return statearr_29363;
})();
var statearr_29364_29440 = state_29344__$1;
(statearr_29364_29440[(2)] = null);

(statearr_29364_29440[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (21))){
var inst_29266 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29368_29441 = state_29344__$1;
(statearr_29368_29441[(2)] = inst_29266);

(statearr_29368_29441[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (31))){
var inst_29292 = (state_29344[(11)]);
var inst_29296 = done(null);
var inst_29297 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29292);
var state_29344__$1 = (function (){var statearr_29369 = state_29344;
(statearr_29369[(19)] = inst_29296);

return statearr_29369;
})();
var statearr_29370_29442 = state_29344__$1;
(statearr_29370_29442[(2)] = inst_29297);

(statearr_29370_29442[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (32))){
var inst_29284 = (state_29344[(20)]);
var inst_29287 = (state_29344[(9)]);
var inst_29285 = (state_29344[(12)]);
var inst_29286 = (state_29344[(21)]);
var inst_29299 = (state_29344[(2)]);
var inst_29300 = (inst_29287 + (1));
var tmp29365 = inst_29284;
var tmp29366 = inst_29285;
var tmp29367 = inst_29286;
var inst_29284__$1 = tmp29365;
var inst_29285__$1 = tmp29366;
var inst_29286__$1 = tmp29367;
var inst_29287__$1 = inst_29300;
var state_29344__$1 = (function (){var statearr_29371 = state_29344;
(statearr_29371[(20)] = inst_29284__$1);

(statearr_29371[(9)] = inst_29287__$1);

(statearr_29371[(12)] = inst_29285__$1);

(statearr_29371[(22)] = inst_29299);

(statearr_29371[(21)] = inst_29286__$1);

return statearr_29371;
})();
var statearr_29372_29443 = state_29344__$1;
(statearr_29372_29443[(2)] = null);

(statearr_29372_29443[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (40))){
var inst_29312 = (state_29344[(23)]);
var inst_29316 = done(null);
var inst_29317 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29312);
var state_29344__$1 = (function (){var statearr_29373 = state_29344;
(statearr_29373[(24)] = inst_29316);

return statearr_29373;
})();
var statearr_29374_29444 = state_29344__$1;
(statearr_29374_29444[(2)] = inst_29317);

(statearr_29374_29444[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (33))){
var inst_29303 = (state_29344[(25)]);
var inst_29305 = cljs.core.chunked_seq_QMARK_(inst_29303);
var state_29344__$1 = state_29344;
if(inst_29305){
var statearr_29375_29445 = state_29344__$1;
(statearr_29375_29445[(1)] = (36));

} else {
var statearr_29376_29446 = state_29344__$1;
(statearr_29376_29446[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (13))){
var inst_29233 = (state_29344[(26)]);
var inst_29236 = cljs.core.async.close_BANG_(inst_29233);
var state_29344__$1 = state_29344;
var statearr_29377_29447 = state_29344__$1;
(statearr_29377_29447[(2)] = inst_29236);

(statearr_29377_29447[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (22))){
var inst_29256 = (state_29344[(8)]);
var inst_29259 = cljs.core.async.close_BANG_(inst_29256);
var state_29344__$1 = state_29344;
var statearr_29378_29448 = state_29344__$1;
(statearr_29378_29448[(2)] = inst_29259);

(statearr_29378_29448[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (36))){
var inst_29303 = (state_29344[(25)]);
var inst_29307 = cljs.core.chunk_first(inst_29303);
var inst_29308 = cljs.core.chunk_rest(inst_29303);
var inst_29309 = cljs.core.count(inst_29307);
var inst_29284 = inst_29308;
var inst_29285 = inst_29307;
var inst_29286 = inst_29309;
var inst_29287 = (0);
var state_29344__$1 = (function (){var statearr_29379 = state_29344;
(statearr_29379[(20)] = inst_29284);

(statearr_29379[(9)] = inst_29287);

(statearr_29379[(12)] = inst_29285);

(statearr_29379[(21)] = inst_29286);

return statearr_29379;
})();
var statearr_29380_29449 = state_29344__$1;
(statearr_29380_29449[(2)] = null);

(statearr_29380_29449[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (41))){
var inst_29303 = (state_29344[(25)]);
var inst_29319 = (state_29344[(2)]);
var inst_29320 = cljs.core.next(inst_29303);
var inst_29284 = inst_29320;
var inst_29285 = null;
var inst_29286 = (0);
var inst_29287 = (0);
var state_29344__$1 = (function (){var statearr_29381 = state_29344;
(statearr_29381[(20)] = inst_29284);

(statearr_29381[(9)] = inst_29287);

(statearr_29381[(12)] = inst_29285);

(statearr_29381[(21)] = inst_29286);

(statearr_29381[(27)] = inst_29319);

return statearr_29381;
})();
var statearr_29382_29450 = state_29344__$1;
(statearr_29382_29450[(2)] = null);

(statearr_29382_29450[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (43))){
var state_29344__$1 = state_29344;
var statearr_29383_29451 = state_29344__$1;
(statearr_29383_29451[(2)] = null);

(statearr_29383_29451[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (29))){
var inst_29328 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29384_29452 = state_29344__$1;
(statearr_29384_29452[(2)] = inst_29328);

(statearr_29384_29452[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (44))){
var inst_29337 = (state_29344[(2)]);
var state_29344__$1 = (function (){var statearr_29385 = state_29344;
(statearr_29385[(28)] = inst_29337);

return statearr_29385;
})();
var statearr_29386_29453 = state_29344__$1;
(statearr_29386_29453[(2)] = null);

(statearr_29386_29453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (6))){
var inst_29276 = (state_29344[(29)]);
var inst_29275 = cljs.core.deref(cs);
var inst_29276__$1 = cljs.core.keys(inst_29275);
var inst_29277 = cljs.core.count(inst_29276__$1);
var inst_29278 = cljs.core.reset_BANG_(dctr,inst_29277);
var inst_29283 = cljs.core.seq(inst_29276__$1);
var inst_29284 = inst_29283;
var inst_29285 = null;
var inst_29286 = (0);
var inst_29287 = (0);
var state_29344__$1 = (function (){var statearr_29387 = state_29344;
(statearr_29387[(20)] = inst_29284);

(statearr_29387[(9)] = inst_29287);

(statearr_29387[(12)] = inst_29285);

(statearr_29387[(30)] = inst_29278);

(statearr_29387[(29)] = inst_29276__$1);

(statearr_29387[(21)] = inst_29286);

return statearr_29387;
})();
var statearr_29388_29454 = state_29344__$1;
(statearr_29388_29454[(2)] = null);

(statearr_29388_29454[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (28))){
var inst_29303 = (state_29344[(25)]);
var inst_29284 = (state_29344[(20)]);
var inst_29303__$1 = cljs.core.seq(inst_29284);
var state_29344__$1 = (function (){var statearr_29389 = state_29344;
(statearr_29389[(25)] = inst_29303__$1);

return statearr_29389;
})();
if(inst_29303__$1){
var statearr_29390_29455 = state_29344__$1;
(statearr_29390_29455[(1)] = (33));

} else {
var statearr_29391_29456 = state_29344__$1;
(statearr_29391_29456[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (25))){
var inst_29287 = (state_29344[(9)]);
var inst_29286 = (state_29344[(21)]);
var inst_29289 = (inst_29287 < inst_29286);
var inst_29290 = inst_29289;
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29290)){
var statearr_29392_29457 = state_29344__$1;
(statearr_29392_29457[(1)] = (27));

} else {
var statearr_29393_29458 = state_29344__$1;
(statearr_29393_29458[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (34))){
var state_29344__$1 = state_29344;
var statearr_29394_29459 = state_29344__$1;
(statearr_29394_29459[(2)] = null);

(statearr_29394_29459[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (17))){
var state_29344__$1 = state_29344;
var statearr_29395_29460 = state_29344__$1;
(statearr_29395_29460[(2)] = null);

(statearr_29395_29460[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (3))){
var inst_29342 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29344__$1,inst_29342);
} else {
if((state_val_29345 === (12))){
var inst_29271 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29396_29461 = state_29344__$1;
(statearr_29396_29461[(2)] = inst_29271);

(statearr_29396_29461[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (2))){
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29344__$1,(4),ch);
} else {
if((state_val_29345 === (23))){
var state_29344__$1 = state_29344;
var statearr_29397_29462 = state_29344__$1;
(statearr_29397_29462[(2)] = null);

(statearr_29397_29462[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (35))){
var inst_29326 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29398_29463 = state_29344__$1;
(statearr_29398_29463[(2)] = inst_29326);

(statearr_29398_29463[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (19))){
var inst_29243 = (state_29344[(7)]);
var inst_29247 = cljs.core.chunk_first(inst_29243);
var inst_29248 = cljs.core.chunk_rest(inst_29243);
var inst_29249 = cljs.core.count(inst_29247);
var inst_29221 = inst_29248;
var inst_29222 = inst_29247;
var inst_29223 = inst_29249;
var inst_29224 = (0);
var state_29344__$1 = (function (){var statearr_29399 = state_29344;
(statearr_29399[(14)] = inst_29223);

(statearr_29399[(15)] = inst_29224);

(statearr_29399[(16)] = inst_29222);

(statearr_29399[(17)] = inst_29221);

return statearr_29399;
})();
var statearr_29400_29464 = state_29344__$1;
(statearr_29400_29464[(2)] = null);

(statearr_29400_29464[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (11))){
var inst_29243 = (state_29344[(7)]);
var inst_29221 = (state_29344[(17)]);
var inst_29243__$1 = cljs.core.seq(inst_29221);
var state_29344__$1 = (function (){var statearr_29401 = state_29344;
(statearr_29401[(7)] = inst_29243__$1);

return statearr_29401;
})();
if(inst_29243__$1){
var statearr_29402_29465 = state_29344__$1;
(statearr_29402_29465[(1)] = (16));

} else {
var statearr_29403_29466 = state_29344__$1;
(statearr_29403_29466[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (9))){
var inst_29273 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29404_29467 = state_29344__$1;
(statearr_29404_29467[(2)] = inst_29273);

(statearr_29404_29467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (5))){
var inst_29219 = cljs.core.deref(cs);
var inst_29220 = cljs.core.seq(inst_29219);
var inst_29221 = inst_29220;
var inst_29222 = null;
var inst_29223 = (0);
var inst_29224 = (0);
var state_29344__$1 = (function (){var statearr_29405 = state_29344;
(statearr_29405[(14)] = inst_29223);

(statearr_29405[(15)] = inst_29224);

(statearr_29405[(16)] = inst_29222);

(statearr_29405[(17)] = inst_29221);

return statearr_29405;
})();
var statearr_29406_29468 = state_29344__$1;
(statearr_29406_29468[(2)] = null);

(statearr_29406_29468[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (14))){
var state_29344__$1 = state_29344;
var statearr_29407_29469 = state_29344__$1;
(statearr_29407_29469[(2)] = null);

(statearr_29407_29469[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (45))){
var inst_29334 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29408_29470 = state_29344__$1;
(statearr_29408_29470[(2)] = inst_29334);

(statearr_29408_29470[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (26))){
var inst_29276 = (state_29344[(29)]);
var inst_29330 = (state_29344[(2)]);
var inst_29331 = cljs.core.seq(inst_29276);
var state_29344__$1 = (function (){var statearr_29409 = state_29344;
(statearr_29409[(31)] = inst_29330);

return statearr_29409;
})();
if(inst_29331){
var statearr_29410_29471 = state_29344__$1;
(statearr_29410_29471[(1)] = (42));

} else {
var statearr_29411_29472 = state_29344__$1;
(statearr_29411_29472[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (16))){
var inst_29243 = (state_29344[(7)]);
var inst_29245 = cljs.core.chunked_seq_QMARK_(inst_29243);
var state_29344__$1 = state_29344;
if(inst_29245){
var statearr_29412_29473 = state_29344__$1;
(statearr_29412_29473[(1)] = (19));

} else {
var statearr_29413_29474 = state_29344__$1;
(statearr_29413_29474[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (38))){
var inst_29323 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29414_29475 = state_29344__$1;
(statearr_29414_29475[(2)] = inst_29323);

(statearr_29414_29475[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (30))){
var state_29344__$1 = state_29344;
var statearr_29415_29476 = state_29344__$1;
(statearr_29415_29476[(2)] = null);

(statearr_29415_29476[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (10))){
var inst_29224 = (state_29344[(15)]);
var inst_29222 = (state_29344[(16)]);
var inst_29232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29222,inst_29224);
var inst_29233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29232,(0),null);
var inst_29234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29232,(1),null);
var state_29344__$1 = (function (){var statearr_29416 = state_29344;
(statearr_29416[(26)] = inst_29233);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29234)){
var statearr_29417_29477 = state_29344__$1;
(statearr_29417_29477[(1)] = (13));

} else {
var statearr_29418_29478 = state_29344__$1;
(statearr_29418_29478[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (18))){
var inst_29269 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29419_29479 = state_29344__$1;
(statearr_29419_29479[(2)] = inst_29269);

(statearr_29419_29479[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (42))){
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29344__$1,(45),dchan);
} else {
if((state_val_29345 === (37))){
var inst_29303 = (state_29344[(25)]);
var inst_29212 = (state_29344[(10)]);
var inst_29312 = (state_29344[(23)]);
var inst_29312__$1 = cljs.core.first(inst_29303);
var inst_29313 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29312__$1,inst_29212,done);
var state_29344__$1 = (function (){var statearr_29420 = state_29344;
(statearr_29420[(23)] = inst_29312__$1);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29313)){
var statearr_29421_29480 = state_29344__$1;
(statearr_29421_29480[(1)] = (39));

} else {
var statearr_29422_29481 = state_29344__$1;
(statearr_29422_29481[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29345 === (8))){
var inst_29223 = (state_29344[(14)]);
var inst_29224 = (state_29344[(15)]);
var inst_29226 = (inst_29224 < inst_29223);
var inst_29227 = inst_29226;
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29227)){
var statearr_29423_29482 = state_29344__$1;
(statearr_29423_29482[(1)] = (10));

} else {
var statearr_29424_29483 = state_29344__$1;
(statearr_29424_29483[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___29429,cs,m,dchan,dctr,done))
;
return ((function (switch__28501__auto__,c__28608__auto___29429,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28502__auto__ = null;
var cljs$core$async$mult_$_state_machine__28502__auto____0 = (function (){
var statearr_29425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29425[(0)] = cljs$core$async$mult_$_state_machine__28502__auto__);

(statearr_29425[(1)] = (1));

return statearr_29425;
});
var cljs$core$async$mult_$_state_machine__28502__auto____1 = (function (state_29344){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29344);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29426){if((e29426 instanceof Object)){
var ex__28505__auto__ = e29426;
var statearr_29427_29484 = state_29344;
(statearr_29427_29484[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29344);

return cljs.core.cst$kw$recur;
} else {
throw e29426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29485 = state_29344;
state_29344 = G__29485;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28502__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28502__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28502__auto____0;
cljs$core$async$mult_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28502__auto____1;
return cljs$core$async$mult_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___29429,cs,m,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_29428 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29428[(6)] = c__28608__auto___29429);

return statearr_29428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___29429,cs,m,dchan,dctr,done))
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
var G__29487 = arguments.length;
switch (G__29487) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29499 = arguments.length;
var i__4731__auto___29500 = (0);
while(true){
if((i__4731__auto___29500 < len__4730__auto___29499)){
args__4736__auto__.push((arguments[i__4731__auto___29500]));

var G__29501 = (i__4731__auto___29500 + (1));
i__4731__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29493){
var map__29494 = p__29493;
var map__29494__$1 = (((((!((map__29494 == null))))?(((((map__29494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29494):map__29494);
var opts = map__29494__$1;
var statearr_29496_29502 = state;
(statearr_29496_29502[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__29494,map__29494__$1,opts){
return (function (val){
var statearr_29497_29503 = state;
(statearr_29497_29503[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29494,map__29494__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29498_29504 = state;
(statearr_29498_29504[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29489){
var G__29490 = cljs.core.first(seq29489);
var seq29489__$1 = cljs.core.next(seq29489);
var G__29491 = cljs.core.first(seq29489__$1);
var seq29489__$2 = cljs.core.next(seq29489__$1);
var G__29492 = cljs.core.first(seq29489__$2);
var seq29489__$3 = cljs.core.next(seq29489__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29490,G__29491,G__29492,seq29489__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29505 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29506){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29506 = meta29506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29507,meta29506__$1){
var self__ = this;
var _29507__$1 = this;
return (new cljs.core.async.t_cljs$core$async29505(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29506__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29507){
var self__ = this;
var _29507__$1 = this;
return self__.meta29506;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta29506], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29505";

cljs.core.async.t_cljs$core$async29505.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29505");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29505.
 */
cljs.core.async.__GT_t_cljs$core$async29505 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29505(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29506){
return (new cljs.core.async.t_cljs$core$async29505(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29506));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29505(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___29669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (7))){
var inst_29524 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29611_29670 = state_29609__$1;
(statearr_29611_29670[(2)] = inst_29524);

(statearr_29611_29670[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (20))){
var inst_29536 = (state_29609[(7)]);
var state_29609__$1 = state_29609;
var statearr_29612_29671 = state_29609__$1;
(statearr_29612_29671[(2)] = inst_29536);

(statearr_29612_29671[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (27))){
var state_29609__$1 = state_29609;
var statearr_29613_29672 = state_29609__$1;
(statearr_29613_29672[(2)] = null);

(statearr_29613_29672[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (1))){
var inst_29511 = (state_29609[(8)]);
var inst_29511__$1 = calc_state();
var inst_29513 = (inst_29511__$1 == null);
var inst_29514 = cljs.core.not(inst_29513);
var state_29609__$1 = (function (){var statearr_29614 = state_29609;
(statearr_29614[(8)] = inst_29511__$1);

return statearr_29614;
})();
if(inst_29514){
var statearr_29615_29673 = state_29609__$1;
(statearr_29615_29673[(1)] = (2));

} else {
var statearr_29616_29674 = state_29609__$1;
(statearr_29616_29674[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (24))){
var inst_29560 = (state_29609[(9)]);
var inst_29569 = (state_29609[(10)]);
var inst_29583 = (state_29609[(11)]);
var inst_29583__$1 = (inst_29560.cljs$core$IFn$_invoke$arity$1 ? inst_29560.cljs$core$IFn$_invoke$arity$1(inst_29569) : inst_29560.call(null,inst_29569));
var state_29609__$1 = (function (){var statearr_29617 = state_29609;
(statearr_29617[(11)] = inst_29583__$1);

return statearr_29617;
})();
if(cljs.core.truth_(inst_29583__$1)){
var statearr_29618_29675 = state_29609__$1;
(statearr_29618_29675[(1)] = (29));

} else {
var statearr_29619_29676 = state_29609__$1;
(statearr_29619_29676[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (4))){
var inst_29527 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29527)){
var statearr_29620_29677 = state_29609__$1;
(statearr_29620_29677[(1)] = (8));

} else {
var statearr_29621_29678 = state_29609__$1;
(statearr_29621_29678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (15))){
var inst_29554 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29554)){
var statearr_29622_29679 = state_29609__$1;
(statearr_29622_29679[(1)] = (19));

} else {
var statearr_29623_29680 = state_29609__$1;
(statearr_29623_29680[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (21))){
var inst_29559 = (state_29609[(12)]);
var inst_29559__$1 = (state_29609[(2)]);
var inst_29560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29559__$1,cljs.core.cst$kw$solos);
var inst_29561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29559__$1,cljs.core.cst$kw$mutes);
var inst_29562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29559__$1,cljs.core.cst$kw$reads);
var state_29609__$1 = (function (){var statearr_29624 = state_29609;
(statearr_29624[(9)] = inst_29560);

(statearr_29624[(13)] = inst_29561);

(statearr_29624[(12)] = inst_29559__$1);

return statearr_29624;
})();
return cljs.core.async.ioc_alts_BANG_(state_29609__$1,(22),inst_29562);
} else {
if((state_val_29610 === (31))){
var inst_29591 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29591)){
var statearr_29625_29681 = state_29609__$1;
(statearr_29625_29681[(1)] = (32));

} else {
var statearr_29626_29682 = state_29609__$1;
(statearr_29626_29682[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (32))){
var inst_29568 = (state_29609[(14)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29609__$1,(35),out,inst_29568);
} else {
if((state_val_29610 === (33))){
var inst_29559 = (state_29609[(12)]);
var inst_29536 = inst_29559;
var state_29609__$1 = (function (){var statearr_29627 = state_29609;
(statearr_29627[(7)] = inst_29536);

return statearr_29627;
})();
var statearr_29628_29683 = state_29609__$1;
(statearr_29628_29683[(2)] = null);

(statearr_29628_29683[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (13))){
var inst_29536 = (state_29609[(7)]);
var inst_29543 = inst_29536.cljs$lang$protocol_mask$partition0$;
var inst_29544 = (inst_29543 & (64));
var inst_29545 = inst_29536.cljs$core$ISeq$;
var inst_29546 = (cljs.core.PROTOCOL_SENTINEL === inst_29545);
var inst_29547 = ((inst_29544) || (inst_29546));
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29547)){
var statearr_29629_29684 = state_29609__$1;
(statearr_29629_29684[(1)] = (16));

} else {
var statearr_29630_29685 = state_29609__$1;
(statearr_29630_29685[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (22))){
var inst_29568 = (state_29609[(14)]);
var inst_29569 = (state_29609[(10)]);
var inst_29567 = (state_29609[(2)]);
var inst_29568__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29567,(0),null);
var inst_29569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29567,(1),null);
var inst_29570 = (inst_29568__$1 == null);
var inst_29571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29569__$1,change);
var inst_29572 = ((inst_29570) || (inst_29571));
var state_29609__$1 = (function (){var statearr_29631 = state_29609;
(statearr_29631[(14)] = inst_29568__$1);

(statearr_29631[(10)] = inst_29569__$1);

return statearr_29631;
})();
if(cljs.core.truth_(inst_29572)){
var statearr_29632_29686 = state_29609__$1;
(statearr_29632_29686[(1)] = (23));

} else {
var statearr_29633_29687 = state_29609__$1;
(statearr_29633_29687[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (36))){
var inst_29559 = (state_29609[(12)]);
var inst_29536 = inst_29559;
var state_29609__$1 = (function (){var statearr_29634 = state_29609;
(statearr_29634[(7)] = inst_29536);

return statearr_29634;
})();
var statearr_29635_29688 = state_29609__$1;
(statearr_29635_29688[(2)] = null);

(statearr_29635_29688[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (29))){
var inst_29583 = (state_29609[(11)]);
var state_29609__$1 = state_29609;
var statearr_29636_29689 = state_29609__$1;
(statearr_29636_29689[(2)] = inst_29583);

(statearr_29636_29689[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (6))){
var state_29609__$1 = state_29609;
var statearr_29637_29690 = state_29609__$1;
(statearr_29637_29690[(2)] = false);

(statearr_29637_29690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (28))){
var inst_29579 = (state_29609[(2)]);
var inst_29580 = calc_state();
var inst_29536 = inst_29580;
var state_29609__$1 = (function (){var statearr_29638 = state_29609;
(statearr_29638[(7)] = inst_29536);

(statearr_29638[(15)] = inst_29579);

return statearr_29638;
})();
var statearr_29639_29691 = state_29609__$1;
(statearr_29639_29691[(2)] = null);

(statearr_29639_29691[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (25))){
var inst_29605 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29640_29692 = state_29609__$1;
(statearr_29640_29692[(2)] = inst_29605);

(statearr_29640_29692[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (34))){
var inst_29603 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29641_29693 = state_29609__$1;
(statearr_29641_29693[(2)] = inst_29603);

(statearr_29641_29693[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (17))){
var state_29609__$1 = state_29609;
var statearr_29642_29694 = state_29609__$1;
(statearr_29642_29694[(2)] = false);

(statearr_29642_29694[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (3))){
var state_29609__$1 = state_29609;
var statearr_29643_29695 = state_29609__$1;
(statearr_29643_29695[(2)] = false);

(statearr_29643_29695[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (12))){
var inst_29607 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (2))){
var inst_29511 = (state_29609[(8)]);
var inst_29516 = inst_29511.cljs$lang$protocol_mask$partition0$;
var inst_29517 = (inst_29516 & (64));
var inst_29518 = inst_29511.cljs$core$ISeq$;
var inst_29519 = (cljs.core.PROTOCOL_SENTINEL === inst_29518);
var inst_29520 = ((inst_29517) || (inst_29519));
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29520)){
var statearr_29644_29696 = state_29609__$1;
(statearr_29644_29696[(1)] = (5));

} else {
var statearr_29645_29697 = state_29609__$1;
(statearr_29645_29697[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (23))){
var inst_29568 = (state_29609[(14)]);
var inst_29574 = (inst_29568 == null);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29574)){
var statearr_29646_29698 = state_29609__$1;
(statearr_29646_29698[(1)] = (26));

} else {
var statearr_29647_29699 = state_29609__$1;
(statearr_29647_29699[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (35))){
var inst_29594 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29594)){
var statearr_29648_29700 = state_29609__$1;
(statearr_29648_29700[(1)] = (36));

} else {
var statearr_29649_29701 = state_29609__$1;
(statearr_29649_29701[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (19))){
var inst_29536 = (state_29609[(7)]);
var inst_29556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29536);
var state_29609__$1 = state_29609;
var statearr_29650_29702 = state_29609__$1;
(statearr_29650_29702[(2)] = inst_29556);

(statearr_29650_29702[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (11))){
var inst_29536 = (state_29609[(7)]);
var inst_29540 = (inst_29536 == null);
var inst_29541 = cljs.core.not(inst_29540);
var state_29609__$1 = state_29609;
if(inst_29541){
var statearr_29651_29703 = state_29609__$1;
(statearr_29651_29703[(1)] = (13));

} else {
var statearr_29652_29704 = state_29609__$1;
(statearr_29652_29704[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (9))){
var inst_29511 = (state_29609[(8)]);
var state_29609__$1 = state_29609;
var statearr_29653_29705 = state_29609__$1;
(statearr_29653_29705[(2)] = inst_29511);

(statearr_29653_29705[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (5))){
var state_29609__$1 = state_29609;
var statearr_29654_29706 = state_29609__$1;
(statearr_29654_29706[(2)] = true);

(statearr_29654_29706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (14))){
var state_29609__$1 = state_29609;
var statearr_29655_29707 = state_29609__$1;
(statearr_29655_29707[(2)] = false);

(statearr_29655_29707[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (26))){
var inst_29569 = (state_29609[(10)]);
var inst_29576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29569);
var state_29609__$1 = state_29609;
var statearr_29656_29708 = state_29609__$1;
(statearr_29656_29708[(2)] = inst_29576);

(statearr_29656_29708[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (16))){
var state_29609__$1 = state_29609;
var statearr_29657_29709 = state_29609__$1;
(statearr_29657_29709[(2)] = true);

(statearr_29657_29709[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (38))){
var inst_29599 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29658_29710 = state_29609__$1;
(statearr_29658_29710[(2)] = inst_29599);

(statearr_29658_29710[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (30))){
var inst_29560 = (state_29609[(9)]);
var inst_29561 = (state_29609[(13)]);
var inst_29569 = (state_29609[(10)]);
var inst_29586 = cljs.core.empty_QMARK_(inst_29560);
var inst_29587 = (inst_29561.cljs$core$IFn$_invoke$arity$1 ? inst_29561.cljs$core$IFn$_invoke$arity$1(inst_29569) : inst_29561.call(null,inst_29569));
var inst_29588 = cljs.core.not(inst_29587);
var inst_29589 = ((inst_29586) && (inst_29588));
var state_29609__$1 = state_29609;
var statearr_29659_29711 = state_29609__$1;
(statearr_29659_29711[(2)] = inst_29589);

(statearr_29659_29711[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (10))){
var inst_29511 = (state_29609[(8)]);
var inst_29532 = (state_29609[(2)]);
var inst_29533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29532,cljs.core.cst$kw$solos);
var inst_29534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29532,cljs.core.cst$kw$mutes);
var inst_29535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29532,cljs.core.cst$kw$reads);
var inst_29536 = inst_29511;
var state_29609__$1 = (function (){var statearr_29660 = state_29609;
(statearr_29660[(16)] = inst_29533);

(statearr_29660[(7)] = inst_29536);

(statearr_29660[(17)] = inst_29534);

(statearr_29660[(18)] = inst_29535);

return statearr_29660;
})();
var statearr_29661_29712 = state_29609__$1;
(statearr_29661_29712[(2)] = null);

(statearr_29661_29712[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (18))){
var inst_29551 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29662_29713 = state_29609__$1;
(statearr_29662_29713[(2)] = inst_29551);

(statearr_29662_29713[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (37))){
var state_29609__$1 = state_29609;
var statearr_29663_29714 = state_29609__$1;
(statearr_29663_29714[(2)] = null);

(statearr_29663_29714[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29610 === (8))){
var inst_29511 = (state_29609[(8)]);
var inst_29529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29511);
var state_29609__$1 = state_29609;
var statearr_29664_29715 = state_29609__$1;
(statearr_29664_29715[(2)] = inst_29529);

(statearr_29664_29715[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28501__auto__,c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28502__auto__ = null;
var cljs$core$async$mix_$_state_machine__28502__auto____0 = (function (){
var statearr_29665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29665[(0)] = cljs$core$async$mix_$_state_machine__28502__auto__);

(statearr_29665[(1)] = (1));

return statearr_29665;
});
var cljs$core$async$mix_$_state_machine__28502__auto____1 = (function (state_29609){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29609);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29666){if((e29666 instanceof Object)){
var ex__28505__auto__ = e29666;
var statearr_29667_29716 = state_29609;
(statearr_29667_29716[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29609);

return cljs.core.cst$kw$recur;
} else {
throw e29666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29717 = state_29609;
state_29609 = G__29717;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28502__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28502__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28502__auto____0;
cljs$core$async$mix_$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28502__auto____1;
return cljs$core$async$mix_$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28610__auto__ = (function (){var statearr_29668 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29668[(6)] = c__28608__auto___29669);

return statearr_29668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___29669,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29719 = arguments.length;
switch (G__29719) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__29723 = arguments.length;
switch (G__29723) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__29721_SHARP_){
if(cljs.core.truth_((p1__29721_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29721_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29721_SHARP_.call(null,topic)))){
return p1__29721_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29721_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29724 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29725){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29725 = meta29725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29726,meta29725__$1){
var self__ = this;
var _29726__$1 = this;
return (new cljs.core.async.t_cljs$core$async29724(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29725__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29726){
var self__ = this;
var _29726__$1 = this;
return self__.meta29725;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta29725], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29724";

cljs.core.async.t_cljs$core$async29724.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29724");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29724.
 */
cljs.core.async.__GT_t_cljs$core$async29724 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29725){
return (new cljs.core.async.t_cljs$core$async29724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29725));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29724(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___29844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___29844,mults,ensure_mult,p){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___29844,mults,ensure_mult,p){
return (function (state_29798){
var state_val_29799 = (state_29798[(1)]);
if((state_val_29799 === (7))){
var inst_29794 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29800_29845 = state_29798__$1;
(statearr_29800_29845[(2)] = inst_29794);

(statearr_29800_29845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (20))){
var state_29798__$1 = state_29798;
var statearr_29801_29846 = state_29798__$1;
(statearr_29801_29846[(2)] = null);

(statearr_29801_29846[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (1))){
var state_29798__$1 = state_29798;
var statearr_29802_29847 = state_29798__$1;
(statearr_29802_29847[(2)] = null);

(statearr_29802_29847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (24))){
var inst_29777 = (state_29798[(7)]);
var inst_29786 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29777);
var state_29798__$1 = state_29798;
var statearr_29803_29848 = state_29798__$1;
(statearr_29803_29848[(2)] = inst_29786);

(statearr_29803_29848[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (4))){
var inst_29729 = (state_29798[(8)]);
var inst_29729__$1 = (state_29798[(2)]);
var inst_29730 = (inst_29729__$1 == null);
var state_29798__$1 = (function (){var statearr_29804 = state_29798;
(statearr_29804[(8)] = inst_29729__$1);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29730)){
var statearr_29805_29849 = state_29798__$1;
(statearr_29805_29849[(1)] = (5));

} else {
var statearr_29806_29850 = state_29798__$1;
(statearr_29806_29850[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (15))){
var inst_29771 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29807_29851 = state_29798__$1;
(statearr_29807_29851[(2)] = inst_29771);

(statearr_29807_29851[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (21))){
var inst_29791 = (state_29798[(2)]);
var state_29798__$1 = (function (){var statearr_29808 = state_29798;
(statearr_29808[(9)] = inst_29791);

return statearr_29808;
})();
var statearr_29809_29852 = state_29798__$1;
(statearr_29809_29852[(2)] = null);

(statearr_29809_29852[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (13))){
var inst_29753 = (state_29798[(10)]);
var inst_29755 = cljs.core.chunked_seq_QMARK_(inst_29753);
var state_29798__$1 = state_29798;
if(inst_29755){
var statearr_29810_29853 = state_29798__$1;
(statearr_29810_29853[(1)] = (16));

} else {
var statearr_29811_29854 = state_29798__$1;
(statearr_29811_29854[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (22))){
var inst_29783 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29783)){
var statearr_29812_29855 = state_29798__$1;
(statearr_29812_29855[(1)] = (23));

} else {
var statearr_29813_29856 = state_29798__$1;
(statearr_29813_29856[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (6))){
var inst_29779 = (state_29798[(11)]);
var inst_29729 = (state_29798[(8)]);
var inst_29777 = (state_29798[(7)]);
var inst_29777__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29729) : topic_fn.call(null,inst_29729));
var inst_29778 = cljs.core.deref(mults);
var inst_29779__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29778,inst_29777__$1);
var state_29798__$1 = (function (){var statearr_29814 = state_29798;
(statearr_29814[(11)] = inst_29779__$1);

(statearr_29814[(7)] = inst_29777__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29779__$1)){
var statearr_29815_29857 = state_29798__$1;
(statearr_29815_29857[(1)] = (19));

} else {
var statearr_29816_29858 = state_29798__$1;
(statearr_29816_29858[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (25))){
var inst_29788 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29817_29859 = state_29798__$1;
(statearr_29817_29859[(2)] = inst_29788);

(statearr_29817_29859[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (17))){
var inst_29753 = (state_29798[(10)]);
var inst_29762 = cljs.core.first(inst_29753);
var inst_29763 = cljs.core.async.muxch_STAR_(inst_29762);
var inst_29764 = cljs.core.async.close_BANG_(inst_29763);
var inst_29765 = cljs.core.next(inst_29753);
var inst_29739 = inst_29765;
var inst_29740 = null;
var inst_29741 = (0);
var inst_29742 = (0);
var state_29798__$1 = (function (){var statearr_29818 = state_29798;
(statearr_29818[(12)] = inst_29739);

(statearr_29818[(13)] = inst_29741);

(statearr_29818[(14)] = inst_29764);

(statearr_29818[(15)] = inst_29742);

(statearr_29818[(16)] = inst_29740);

return statearr_29818;
})();
var statearr_29819_29860 = state_29798__$1;
(statearr_29819_29860[(2)] = null);

(statearr_29819_29860[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (3))){
var inst_29796 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29798__$1,inst_29796);
} else {
if((state_val_29799 === (12))){
var inst_29773 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29820_29861 = state_29798__$1;
(statearr_29820_29861[(2)] = inst_29773);

(statearr_29820_29861[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (2))){
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29798__$1,(4),ch);
} else {
if((state_val_29799 === (23))){
var state_29798__$1 = state_29798;
var statearr_29821_29862 = state_29798__$1;
(statearr_29821_29862[(2)] = null);

(statearr_29821_29862[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (19))){
var inst_29779 = (state_29798[(11)]);
var inst_29729 = (state_29798[(8)]);
var inst_29781 = cljs.core.async.muxch_STAR_(inst_29779);
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29798__$1,(22),inst_29781,inst_29729);
} else {
if((state_val_29799 === (11))){
var inst_29739 = (state_29798[(12)]);
var inst_29753 = (state_29798[(10)]);
var inst_29753__$1 = cljs.core.seq(inst_29739);
var state_29798__$1 = (function (){var statearr_29822 = state_29798;
(statearr_29822[(10)] = inst_29753__$1);

return statearr_29822;
})();
if(inst_29753__$1){
var statearr_29823_29863 = state_29798__$1;
(statearr_29823_29863[(1)] = (13));

} else {
var statearr_29824_29864 = state_29798__$1;
(statearr_29824_29864[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (9))){
var inst_29775 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29825_29865 = state_29798__$1;
(statearr_29825_29865[(2)] = inst_29775);

(statearr_29825_29865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (5))){
var inst_29736 = cljs.core.deref(mults);
var inst_29737 = cljs.core.vals(inst_29736);
var inst_29738 = cljs.core.seq(inst_29737);
var inst_29739 = inst_29738;
var inst_29740 = null;
var inst_29741 = (0);
var inst_29742 = (0);
var state_29798__$1 = (function (){var statearr_29826 = state_29798;
(statearr_29826[(12)] = inst_29739);

(statearr_29826[(13)] = inst_29741);

(statearr_29826[(15)] = inst_29742);

(statearr_29826[(16)] = inst_29740);

return statearr_29826;
})();
var statearr_29827_29866 = state_29798__$1;
(statearr_29827_29866[(2)] = null);

(statearr_29827_29866[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (14))){
var state_29798__$1 = state_29798;
var statearr_29831_29867 = state_29798__$1;
(statearr_29831_29867[(2)] = null);

(statearr_29831_29867[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (16))){
var inst_29753 = (state_29798[(10)]);
var inst_29757 = cljs.core.chunk_first(inst_29753);
var inst_29758 = cljs.core.chunk_rest(inst_29753);
var inst_29759 = cljs.core.count(inst_29757);
var inst_29739 = inst_29758;
var inst_29740 = inst_29757;
var inst_29741 = inst_29759;
var inst_29742 = (0);
var state_29798__$1 = (function (){var statearr_29832 = state_29798;
(statearr_29832[(12)] = inst_29739);

(statearr_29832[(13)] = inst_29741);

(statearr_29832[(15)] = inst_29742);

(statearr_29832[(16)] = inst_29740);

return statearr_29832;
})();
var statearr_29833_29868 = state_29798__$1;
(statearr_29833_29868[(2)] = null);

(statearr_29833_29868[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (10))){
var inst_29739 = (state_29798[(12)]);
var inst_29741 = (state_29798[(13)]);
var inst_29742 = (state_29798[(15)]);
var inst_29740 = (state_29798[(16)]);
var inst_29747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29740,inst_29742);
var inst_29748 = cljs.core.async.muxch_STAR_(inst_29747);
var inst_29749 = cljs.core.async.close_BANG_(inst_29748);
var inst_29750 = (inst_29742 + (1));
var tmp29828 = inst_29739;
var tmp29829 = inst_29741;
var tmp29830 = inst_29740;
var inst_29739__$1 = tmp29828;
var inst_29740__$1 = tmp29830;
var inst_29741__$1 = tmp29829;
var inst_29742__$1 = inst_29750;
var state_29798__$1 = (function (){var statearr_29834 = state_29798;
(statearr_29834[(12)] = inst_29739__$1);

(statearr_29834[(13)] = inst_29741__$1);

(statearr_29834[(17)] = inst_29749);

(statearr_29834[(15)] = inst_29742__$1);

(statearr_29834[(16)] = inst_29740__$1);

return statearr_29834;
})();
var statearr_29835_29869 = state_29798__$1;
(statearr_29835_29869[(2)] = null);

(statearr_29835_29869[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (18))){
var inst_29768 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29836_29870 = state_29798__$1;
(statearr_29836_29870[(2)] = inst_29768);

(statearr_29836_29870[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29799 === (8))){
var inst_29741 = (state_29798[(13)]);
var inst_29742 = (state_29798[(15)]);
var inst_29744 = (inst_29742 < inst_29741);
var inst_29745 = inst_29744;
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29745)){
var statearr_29837_29871 = state_29798__$1;
(statearr_29837_29871[(1)] = (10));

} else {
var statearr_29838_29872 = state_29798__$1;
(statearr_29838_29872[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___29844,mults,ensure_mult,p))
;
return ((function (switch__28501__auto__,c__28608__auto___29844,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_29839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29839[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_29839[(1)] = (1));

return statearr_29839;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_29798){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29798);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29840){if((e29840 instanceof Object)){
var ex__28505__auto__ = e29840;
var statearr_29841_29873 = state_29798;
(statearr_29841_29873[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29798);

return cljs.core.cst$kw$recur;
} else {
throw e29840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29874 = state_29798;
state_29798 = G__29874;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_29798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_29798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___29844,mults,ensure_mult,p))
})();
var state__28610__auto__ = (function (){var statearr_29842 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29842[(6)] = c__28608__auto___29844);

return statearr_29842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___29844,mults,ensure_mult,p))
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
var G__29876 = arguments.length;
switch (G__29876) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29879 = arguments.length;
switch (G__29879) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__29882 = arguments.length;
switch (G__29882) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28608__auto___29949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (7))){
var state_29921__$1 = state_29921;
var statearr_29923_29950 = state_29921__$1;
(statearr_29923_29950[(2)] = null);

(statearr_29923_29950[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (1))){
var state_29921__$1 = state_29921;
var statearr_29924_29951 = state_29921__$1;
(statearr_29924_29951[(2)] = null);

(statearr_29924_29951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (4))){
var inst_29885 = (state_29921[(7)]);
var inst_29887 = (inst_29885 < cnt);
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29887)){
var statearr_29925_29952 = state_29921__$1;
(statearr_29925_29952[(1)] = (6));

} else {
var statearr_29926_29953 = state_29921__$1;
(statearr_29926_29953[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (15))){
var inst_29917 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29927_29954 = state_29921__$1;
(statearr_29927_29954[(2)] = inst_29917);

(statearr_29927_29954[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (13))){
var inst_29910 = cljs.core.async.close_BANG_(out);
var state_29921__$1 = state_29921;
var statearr_29928_29955 = state_29921__$1;
(statearr_29928_29955[(2)] = inst_29910);

(statearr_29928_29955[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (6))){
var state_29921__$1 = state_29921;
var statearr_29929_29956 = state_29921__$1;
(statearr_29929_29956[(2)] = null);

(statearr_29929_29956[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (3))){
var inst_29919 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29921__$1,inst_29919);
} else {
if((state_val_29922 === (12))){
var inst_29907 = (state_29921[(8)]);
var inst_29907__$1 = (state_29921[(2)]);
var inst_29908 = cljs.core.some(cljs.core.nil_QMARK_,inst_29907__$1);
var state_29921__$1 = (function (){var statearr_29930 = state_29921;
(statearr_29930[(8)] = inst_29907__$1);

return statearr_29930;
})();
if(cljs.core.truth_(inst_29908)){
var statearr_29931_29957 = state_29921__$1;
(statearr_29931_29957[(1)] = (13));

} else {
var statearr_29932_29958 = state_29921__$1;
(statearr_29932_29958[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (2))){
var inst_29884 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29885 = (0);
var state_29921__$1 = (function (){var statearr_29933 = state_29921;
(statearr_29933[(9)] = inst_29884);

(statearr_29933[(7)] = inst_29885);

return statearr_29933;
})();
var statearr_29934_29959 = state_29921__$1;
(statearr_29934_29959[(2)] = null);

(statearr_29934_29959[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (11))){
var inst_29885 = (state_29921[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29921,(10),Object,null,(9));
var inst_29894 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29885) : chs__$1.call(null,inst_29885));
var inst_29895 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29885) : done.call(null,inst_29885));
var inst_29896 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29894,inst_29895);
var state_29921__$1 = state_29921;
var statearr_29935_29960 = state_29921__$1;
(statearr_29935_29960[(2)] = inst_29896);


cljs.core.async.impl.ioc_helpers.process_exception(state_29921__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (9))){
var inst_29885 = (state_29921[(7)]);
var inst_29898 = (state_29921[(2)]);
var inst_29899 = (inst_29885 + (1));
var inst_29885__$1 = inst_29899;
var state_29921__$1 = (function (){var statearr_29936 = state_29921;
(statearr_29936[(7)] = inst_29885__$1);

(statearr_29936[(10)] = inst_29898);

return statearr_29936;
})();
var statearr_29937_29961 = state_29921__$1;
(statearr_29937_29961[(2)] = null);

(statearr_29937_29961[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (5))){
var inst_29905 = (state_29921[(2)]);
var state_29921__$1 = (function (){var statearr_29938 = state_29921;
(statearr_29938[(11)] = inst_29905);

return statearr_29938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29921__$1,(12),dchan);
} else {
if((state_val_29922 === (14))){
var inst_29907 = (state_29921[(8)]);
var inst_29912 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29907);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29921__$1,(16),out,inst_29912);
} else {
if((state_val_29922 === (16))){
var inst_29914 = (state_29921[(2)]);
var state_29921__$1 = (function (){var statearr_29939 = state_29921;
(statearr_29939[(12)] = inst_29914);

return statearr_29939;
})();
var statearr_29940_29962 = state_29921__$1;
(statearr_29940_29962[(2)] = null);

(statearr_29940_29962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (10))){
var inst_29889 = (state_29921[(2)]);
var inst_29890 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29921__$1 = (function (){var statearr_29941 = state_29921;
(statearr_29941[(13)] = inst_29889);

return statearr_29941;
})();
var statearr_29942_29963 = state_29921__$1;
(statearr_29942_29963[(2)] = inst_29890);


cljs.core.async.impl.ioc_helpers.process_exception(state_29921__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (8))){
var inst_29903 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29943_29964 = state_29921__$1;
(statearr_29943_29964[(2)] = inst_29903);

(statearr_29943_29964[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28501__auto__,c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_29944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29944[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_29944[(1)] = (1));

return statearr_29944;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_29921){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_29921);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e29945){if((e29945 instanceof Object)){
var ex__28505__auto__ = e29945;
var statearr_29946_29965 = state_29921;
(statearr_29946_29965[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29921);

return cljs.core.cst$kw$recur;
} else {
throw e29945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__29966 = state_29921;
state_29921 = G__29966;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_29947 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_29947[(6)] = c__28608__auto___29949);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29969 = arguments.length;
switch (G__29969) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30023,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30023,out){
return (function (state_30001){
var state_val_30002 = (state_30001[(1)]);
if((state_val_30002 === (7))){
var inst_29980 = (state_30001[(7)]);
var inst_29981 = (state_30001[(8)]);
var inst_29980__$1 = (state_30001[(2)]);
var inst_29981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29980__$1,(0),null);
var inst_29982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29980__$1,(1),null);
var inst_29983 = (inst_29981__$1 == null);
var state_30001__$1 = (function (){var statearr_30003 = state_30001;
(statearr_30003[(9)] = inst_29982);

(statearr_30003[(7)] = inst_29980__$1);

(statearr_30003[(8)] = inst_29981__$1);

return statearr_30003;
})();
if(cljs.core.truth_(inst_29983)){
var statearr_30004_30024 = state_30001__$1;
(statearr_30004_30024[(1)] = (8));

} else {
var statearr_30005_30025 = state_30001__$1;
(statearr_30005_30025[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (1))){
var inst_29970 = cljs.core.vec(chs);
var inst_29971 = inst_29970;
var state_30001__$1 = (function (){var statearr_30006 = state_30001;
(statearr_30006[(10)] = inst_29971);

return statearr_30006;
})();
var statearr_30007_30026 = state_30001__$1;
(statearr_30007_30026[(2)] = null);

(statearr_30007_30026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (4))){
var inst_29971 = (state_30001[(10)]);
var state_30001__$1 = state_30001;
return cljs.core.async.ioc_alts_BANG_(state_30001__$1,(7),inst_29971);
} else {
if((state_val_30002 === (6))){
var inst_29997 = (state_30001[(2)]);
var state_30001__$1 = state_30001;
var statearr_30008_30027 = state_30001__$1;
(statearr_30008_30027[(2)] = inst_29997);

(statearr_30008_30027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (3))){
var inst_29999 = (state_30001[(2)]);
var state_30001__$1 = state_30001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30001__$1,inst_29999);
} else {
if((state_val_30002 === (2))){
var inst_29971 = (state_30001[(10)]);
var inst_29973 = cljs.core.count(inst_29971);
var inst_29974 = (inst_29973 > (0));
var state_30001__$1 = state_30001;
if(cljs.core.truth_(inst_29974)){
var statearr_30010_30028 = state_30001__$1;
(statearr_30010_30028[(1)] = (4));

} else {
var statearr_30011_30029 = state_30001__$1;
(statearr_30011_30029[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (11))){
var inst_29971 = (state_30001[(10)]);
var inst_29990 = (state_30001[(2)]);
var tmp30009 = inst_29971;
var inst_29971__$1 = tmp30009;
var state_30001__$1 = (function (){var statearr_30012 = state_30001;
(statearr_30012[(10)] = inst_29971__$1);

(statearr_30012[(11)] = inst_29990);

return statearr_30012;
})();
var statearr_30013_30030 = state_30001__$1;
(statearr_30013_30030[(2)] = null);

(statearr_30013_30030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (9))){
var inst_29981 = (state_30001[(8)]);
var state_30001__$1 = state_30001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30001__$1,(11),out,inst_29981);
} else {
if((state_val_30002 === (5))){
var inst_29995 = cljs.core.async.close_BANG_(out);
var state_30001__$1 = state_30001;
var statearr_30014_30031 = state_30001__$1;
(statearr_30014_30031[(2)] = inst_29995);

(statearr_30014_30031[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (10))){
var inst_29993 = (state_30001[(2)]);
var state_30001__$1 = state_30001;
var statearr_30015_30032 = state_30001__$1;
(statearr_30015_30032[(2)] = inst_29993);

(statearr_30015_30032[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30002 === (8))){
var inst_29982 = (state_30001[(9)]);
var inst_29980 = (state_30001[(7)]);
var inst_29971 = (state_30001[(10)]);
var inst_29981 = (state_30001[(8)]);
var inst_29985 = (function (){var cs = inst_29971;
var vec__29976 = inst_29980;
var v = inst_29981;
var c = inst_29982;
return ((function (cs,vec__29976,v,c,inst_29982,inst_29980,inst_29971,inst_29981,state_val_30002,c__28608__auto___30023,out){
return (function (p1__29967_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29967_SHARP_);
});
;})(cs,vec__29976,v,c,inst_29982,inst_29980,inst_29971,inst_29981,state_val_30002,c__28608__auto___30023,out))
})();
var inst_29986 = cljs.core.filterv(inst_29985,inst_29971);
var inst_29971__$1 = inst_29986;
var state_30001__$1 = (function (){var statearr_30016 = state_30001;
(statearr_30016[(10)] = inst_29971__$1);

return statearr_30016;
})();
var statearr_30017_30033 = state_30001__$1;
(statearr_30017_30033[(2)] = null);

(statearr_30017_30033[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___30023,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30023,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30018[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30018[(1)] = (1));

return statearr_30018;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30001){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30001);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30019){if((e30019 instanceof Object)){
var ex__28505__auto__ = e30019;
var statearr_30020_30034 = state_30001;
(statearr_30020_30034[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30001);

return cljs.core.cst$kw$recur;
} else {
throw e30019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30035 = state_30001;
state_30001 = G__30035;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30023,out))
})();
var state__28610__auto__ = (function (){var statearr_30021 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30021[(6)] = c__28608__auto___30023);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30023,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30037 = arguments.length;
switch (G__30037) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30082,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30082,out){
return (function (state_30061){
var state_val_30062 = (state_30061[(1)]);
if((state_val_30062 === (7))){
var inst_30043 = (state_30061[(7)]);
var inst_30043__$1 = (state_30061[(2)]);
var inst_30044 = (inst_30043__$1 == null);
var inst_30045 = cljs.core.not(inst_30044);
var state_30061__$1 = (function (){var statearr_30063 = state_30061;
(statearr_30063[(7)] = inst_30043__$1);

return statearr_30063;
})();
if(inst_30045){
var statearr_30064_30083 = state_30061__$1;
(statearr_30064_30083[(1)] = (8));

} else {
var statearr_30065_30084 = state_30061__$1;
(statearr_30065_30084[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (1))){
var inst_30038 = (0);
var state_30061__$1 = (function (){var statearr_30066 = state_30061;
(statearr_30066[(8)] = inst_30038);

return statearr_30066;
})();
var statearr_30067_30085 = state_30061__$1;
(statearr_30067_30085[(2)] = null);

(statearr_30067_30085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (4))){
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30061__$1,(7),ch);
} else {
if((state_val_30062 === (6))){
var inst_30056 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
var statearr_30068_30086 = state_30061__$1;
(statearr_30068_30086[(2)] = inst_30056);

(statearr_30068_30086[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (3))){
var inst_30058 = (state_30061[(2)]);
var inst_30059 = cljs.core.async.close_BANG_(out);
var state_30061__$1 = (function (){var statearr_30069 = state_30061;
(statearr_30069[(9)] = inst_30058);

return statearr_30069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30061__$1,inst_30059);
} else {
if((state_val_30062 === (2))){
var inst_30038 = (state_30061[(8)]);
var inst_30040 = (inst_30038 < n);
var state_30061__$1 = state_30061;
if(cljs.core.truth_(inst_30040)){
var statearr_30070_30087 = state_30061__$1;
(statearr_30070_30087[(1)] = (4));

} else {
var statearr_30071_30088 = state_30061__$1;
(statearr_30071_30088[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (11))){
var inst_30038 = (state_30061[(8)]);
var inst_30048 = (state_30061[(2)]);
var inst_30049 = (inst_30038 + (1));
var inst_30038__$1 = inst_30049;
var state_30061__$1 = (function (){var statearr_30072 = state_30061;
(statearr_30072[(8)] = inst_30038__$1);

(statearr_30072[(10)] = inst_30048);

return statearr_30072;
})();
var statearr_30073_30089 = state_30061__$1;
(statearr_30073_30089[(2)] = null);

(statearr_30073_30089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (9))){
var state_30061__$1 = state_30061;
var statearr_30074_30090 = state_30061__$1;
(statearr_30074_30090[(2)] = null);

(statearr_30074_30090[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (5))){
var state_30061__$1 = state_30061;
var statearr_30075_30091 = state_30061__$1;
(statearr_30075_30091[(2)] = null);

(statearr_30075_30091[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (10))){
var inst_30053 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
var statearr_30076_30092 = state_30061__$1;
(statearr_30076_30092[(2)] = inst_30053);

(statearr_30076_30092[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30062 === (8))){
var inst_30043 = (state_30061[(7)]);
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30061__$1,(11),out,inst_30043);
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
});})(c__28608__auto___30082,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30082,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30077[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30077[(1)] = (1));

return statearr_30077;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30061){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30061);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30078){if((e30078 instanceof Object)){
var ex__28505__auto__ = e30078;
var statearr_30079_30093 = state_30061;
(statearr_30079_30093[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30061);

return cljs.core.cst$kw$recur;
} else {
throw e30078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30094 = state_30061;
state_30061 = G__30094;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30082,out))
})();
var state__28610__auto__ = (function (){var statearr_30080 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30080[(6)] = c__28608__auto___30082);

return statearr_30080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30082,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30096 = (function (f,ch,meta30097){
this.f = f;
this.ch = ch;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30098,meta30097__$1){
var self__ = this;
var _30098__$1 = this;
return (new cljs.core.async.t_cljs$core$async30096(self__.f,self__.ch,meta30097__$1));
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30098){
var self__ = this;
var _30098__$1 = this;
return self__.meta30097;
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30099 = (function (f,ch,meta30097,_,fn1,meta30100){
this.f = f;
this.ch = ch;
this.meta30097 = meta30097;
this._ = _;
this.fn1 = fn1;
this.meta30100 = meta30100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30101,meta30100__$1){
var self__ = this;
var _30101__$1 = this;
return (new cljs.core.async.t_cljs$core$async30099(self__.f,self__.ch,self__.meta30097,self__._,self__.fn1,meta30100__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30101){
var self__ = this;
var _30101__$1 = this;
return self__.meta30100;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30095_SHARP_){
var G__30102 = (((p1__30095_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30095_SHARP_) : self__.f.call(null,p1__30095_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30102) : f1.call(null,G__30102));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30097,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async30096], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta30100], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30099";

cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30099");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30099.
 */
cljs.core.async.__GT_t_cljs$core$async30099 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30099(f__$1,ch__$1,meta30097__$1,___$2,fn1__$1,meta30100){
return (new cljs.core.async.t_cljs$core$async30099(f__$1,ch__$1,meta30097__$1,___$2,fn1__$1,meta30100));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30099(self__.f,self__.ch,self__.meta30097,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30103 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30103) : self__.f.call(null,G__30103));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30097], null);
});

cljs.core.async.t_cljs$core$async30096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30096";

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30096");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30096.
 */
cljs.core.async.__GT_t_cljs$core$async30096 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30096(f__$1,ch__$1,meta30097){
return (new cljs.core.async.t_cljs$core$async30096(f__$1,ch__$1,meta30097));
});

}

return (new cljs.core.async.t_cljs$core$async30096(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30104 = (function (f,ch,meta30105){
this.f = f;
this.ch = ch;
this.meta30105 = meta30105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30106,meta30105__$1){
var self__ = this;
var _30106__$1 = this;
return (new cljs.core.async.t_cljs$core$async30104(self__.f,self__.ch,meta30105__$1));
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30106){
var self__ = this;
var _30106__$1 = this;
return self__.meta30105;
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async30104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30105], null);
});

cljs.core.async.t_cljs$core$async30104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30104";

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30104");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30104.
 */
cljs.core.async.__GT_t_cljs$core$async30104 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30104(f__$1,ch__$1,meta30105){
return (new cljs.core.async.t_cljs$core$async30104(f__$1,ch__$1,meta30105));
});

}

return (new cljs.core.async.t_cljs$core$async30104(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30107 = (function (p,ch,meta30108){
this.p = p;
this.ch = ch;
this.meta30108 = meta30108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30109,meta30108__$1){
var self__ = this;
var _30109__$1 = this;
return (new cljs.core.async.t_cljs$core$async30107(self__.p,self__.ch,meta30108__$1));
});

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30109){
var self__ = this;
var _30109__$1 = this;
return self__.meta30108;
});

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30108], null);
});

cljs.core.async.t_cljs$core$async30107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30107";

cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30107");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30107.
 */
cljs.core.async.__GT_t_cljs$core$async30107 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30107(p__$1,ch__$1,meta30108){
return (new cljs.core.async.t_cljs$core$async30107(p__$1,ch__$1,meta30108));
});

}

return (new cljs.core.async.t_cljs$core$async30107(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30111 = arguments.length;
switch (G__30111) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30151,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30151,out){
return (function (state_30132){
var state_val_30133 = (state_30132[(1)]);
if((state_val_30133 === (7))){
var inst_30128 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30134_30152 = state_30132__$1;
(statearr_30134_30152[(2)] = inst_30128);

(statearr_30134_30152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (1))){
var state_30132__$1 = state_30132;
var statearr_30135_30153 = state_30132__$1;
(statearr_30135_30153[(2)] = null);

(statearr_30135_30153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (4))){
var inst_30114 = (state_30132[(7)]);
var inst_30114__$1 = (state_30132[(2)]);
var inst_30115 = (inst_30114__$1 == null);
var state_30132__$1 = (function (){var statearr_30136 = state_30132;
(statearr_30136[(7)] = inst_30114__$1);

return statearr_30136;
})();
if(cljs.core.truth_(inst_30115)){
var statearr_30137_30154 = state_30132__$1;
(statearr_30137_30154[(1)] = (5));

} else {
var statearr_30138_30155 = state_30132__$1;
(statearr_30138_30155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (6))){
var inst_30114 = (state_30132[(7)]);
var inst_30119 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30114) : p.call(null,inst_30114));
var state_30132__$1 = state_30132;
if(cljs.core.truth_(inst_30119)){
var statearr_30139_30156 = state_30132__$1;
(statearr_30139_30156[(1)] = (8));

} else {
var statearr_30140_30157 = state_30132__$1;
(statearr_30140_30157[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (3))){
var inst_30130 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30132__$1,inst_30130);
} else {
if((state_val_30133 === (2))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30132__$1,(4),ch);
} else {
if((state_val_30133 === (11))){
var inst_30122 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30141_30158 = state_30132__$1;
(statearr_30141_30158[(2)] = inst_30122);

(statearr_30141_30158[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (9))){
var state_30132__$1 = state_30132;
var statearr_30142_30159 = state_30132__$1;
(statearr_30142_30159[(2)] = null);

(statearr_30142_30159[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (5))){
var inst_30117 = cljs.core.async.close_BANG_(out);
var state_30132__$1 = state_30132;
var statearr_30143_30160 = state_30132__$1;
(statearr_30143_30160[(2)] = inst_30117);

(statearr_30143_30160[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (10))){
var inst_30125 = (state_30132[(2)]);
var state_30132__$1 = (function (){var statearr_30144 = state_30132;
(statearr_30144[(8)] = inst_30125);

return statearr_30144;
})();
var statearr_30145_30161 = state_30132__$1;
(statearr_30145_30161[(2)] = null);

(statearr_30145_30161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30133 === (8))){
var inst_30114 = (state_30132[(7)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30132__$1,(11),out,inst_30114);
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
});})(c__28608__auto___30151,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30151,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30146 = [null,null,null,null,null,null,null,null,null];
(statearr_30146[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30146[(1)] = (1));

return statearr_30146;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30132){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30132);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30147){if((e30147 instanceof Object)){
var ex__28505__auto__ = e30147;
var statearr_30148_30162 = state_30132;
(statearr_30148_30162[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30132);

return cljs.core.cst$kw$recur;
} else {
throw e30147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30163 = state_30132;
state_30132 = G__30163;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30151,out))
})();
var state__28610__auto__ = (function (){var statearr_30149 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30149[(6)] = c__28608__auto___30151);

return statearr_30149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30151,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30165 = arguments.length;
switch (G__30165) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28608__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto__){
return (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (7))){
var inst_30224 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30230_30268 = state_30228__$1;
(statearr_30230_30268[(2)] = inst_30224);

(statearr_30230_30268[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (20))){
var inst_30194 = (state_30228[(7)]);
var inst_30205 = (state_30228[(2)]);
var inst_30206 = cljs.core.next(inst_30194);
var inst_30180 = inst_30206;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30231 = state_30228;
(statearr_30231[(8)] = inst_30180);

(statearr_30231[(9)] = inst_30205);

(statearr_30231[(10)] = inst_30182);

(statearr_30231[(11)] = inst_30183);

(statearr_30231[(12)] = inst_30181);

return statearr_30231;
})();
var statearr_30232_30269 = state_30228__$1;
(statearr_30232_30269[(2)] = null);

(statearr_30232_30269[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (1))){
var state_30228__$1 = state_30228;
var statearr_30233_30270 = state_30228__$1;
(statearr_30233_30270[(2)] = null);

(statearr_30233_30270[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (4))){
var inst_30169 = (state_30228[(13)]);
var inst_30169__$1 = (state_30228[(2)]);
var inst_30170 = (inst_30169__$1 == null);
var state_30228__$1 = (function (){var statearr_30234 = state_30228;
(statearr_30234[(13)] = inst_30169__$1);

return statearr_30234;
})();
if(cljs.core.truth_(inst_30170)){
var statearr_30235_30271 = state_30228__$1;
(statearr_30235_30271[(1)] = (5));

} else {
var statearr_30236_30272 = state_30228__$1;
(statearr_30236_30272[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (15))){
var state_30228__$1 = state_30228;
var statearr_30240_30273 = state_30228__$1;
(statearr_30240_30273[(2)] = null);

(statearr_30240_30273[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (21))){
var state_30228__$1 = state_30228;
var statearr_30241_30274 = state_30228__$1;
(statearr_30241_30274[(2)] = null);

(statearr_30241_30274[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (13))){
var inst_30180 = (state_30228[(8)]);
var inst_30182 = (state_30228[(10)]);
var inst_30183 = (state_30228[(11)]);
var inst_30181 = (state_30228[(12)]);
var inst_30190 = (state_30228[(2)]);
var inst_30191 = (inst_30183 + (1));
var tmp30237 = inst_30180;
var tmp30238 = inst_30182;
var tmp30239 = inst_30181;
var inst_30180__$1 = tmp30237;
var inst_30181__$1 = tmp30239;
var inst_30182__$1 = tmp30238;
var inst_30183__$1 = inst_30191;
var state_30228__$1 = (function (){var statearr_30242 = state_30228;
(statearr_30242[(14)] = inst_30190);

(statearr_30242[(8)] = inst_30180__$1);

(statearr_30242[(10)] = inst_30182__$1);

(statearr_30242[(11)] = inst_30183__$1);

(statearr_30242[(12)] = inst_30181__$1);

return statearr_30242;
})();
var statearr_30243_30275 = state_30228__$1;
(statearr_30243_30275[(2)] = null);

(statearr_30243_30275[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (22))){
var state_30228__$1 = state_30228;
var statearr_30244_30276 = state_30228__$1;
(statearr_30244_30276[(2)] = null);

(statearr_30244_30276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (6))){
var inst_30169 = (state_30228[(13)]);
var inst_30178 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30169) : f.call(null,inst_30169));
var inst_30179 = cljs.core.seq(inst_30178);
var inst_30180 = inst_30179;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30245 = state_30228;
(statearr_30245[(8)] = inst_30180);

(statearr_30245[(10)] = inst_30182);

(statearr_30245[(11)] = inst_30183);

(statearr_30245[(12)] = inst_30181);

return statearr_30245;
})();
var statearr_30246_30277 = state_30228__$1;
(statearr_30246_30277[(2)] = null);

(statearr_30246_30277[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (17))){
var inst_30194 = (state_30228[(7)]);
var inst_30198 = cljs.core.chunk_first(inst_30194);
var inst_30199 = cljs.core.chunk_rest(inst_30194);
var inst_30200 = cljs.core.count(inst_30198);
var inst_30180 = inst_30199;
var inst_30181 = inst_30198;
var inst_30182 = inst_30200;
var inst_30183 = (0);
var state_30228__$1 = (function (){var statearr_30247 = state_30228;
(statearr_30247[(8)] = inst_30180);

(statearr_30247[(10)] = inst_30182);

(statearr_30247[(11)] = inst_30183);

(statearr_30247[(12)] = inst_30181);

return statearr_30247;
})();
var statearr_30248_30278 = state_30228__$1;
(statearr_30248_30278[(2)] = null);

(statearr_30248_30278[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (3))){
var inst_30226 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30228__$1,inst_30226);
} else {
if((state_val_30229 === (12))){
var inst_30214 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30249_30279 = state_30228__$1;
(statearr_30249_30279[(2)] = inst_30214);

(statearr_30249_30279[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (2))){
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30228__$1,(4),in$);
} else {
if((state_val_30229 === (23))){
var inst_30222 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30250_30280 = state_30228__$1;
(statearr_30250_30280[(2)] = inst_30222);

(statearr_30250_30280[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (19))){
var inst_30209 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30251_30281 = state_30228__$1;
(statearr_30251_30281[(2)] = inst_30209);

(statearr_30251_30281[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (11))){
var inst_30180 = (state_30228[(8)]);
var inst_30194 = (state_30228[(7)]);
var inst_30194__$1 = cljs.core.seq(inst_30180);
var state_30228__$1 = (function (){var statearr_30252 = state_30228;
(statearr_30252[(7)] = inst_30194__$1);

return statearr_30252;
})();
if(inst_30194__$1){
var statearr_30253_30282 = state_30228__$1;
(statearr_30253_30282[(1)] = (14));

} else {
var statearr_30254_30283 = state_30228__$1;
(statearr_30254_30283[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (9))){
var inst_30216 = (state_30228[(2)]);
var inst_30217 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30228__$1 = (function (){var statearr_30255 = state_30228;
(statearr_30255[(15)] = inst_30216);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30217)){
var statearr_30256_30284 = state_30228__$1;
(statearr_30256_30284[(1)] = (21));

} else {
var statearr_30257_30285 = state_30228__$1;
(statearr_30257_30285[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (5))){
var inst_30172 = cljs.core.async.close_BANG_(out);
var state_30228__$1 = state_30228;
var statearr_30258_30286 = state_30228__$1;
(statearr_30258_30286[(2)] = inst_30172);

(statearr_30258_30286[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (14))){
var inst_30194 = (state_30228[(7)]);
var inst_30196 = cljs.core.chunked_seq_QMARK_(inst_30194);
var state_30228__$1 = state_30228;
if(inst_30196){
var statearr_30259_30287 = state_30228__$1;
(statearr_30259_30287[(1)] = (17));

} else {
var statearr_30260_30288 = state_30228__$1;
(statearr_30260_30288[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (16))){
var inst_30212 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30261_30289 = state_30228__$1;
(statearr_30261_30289[(2)] = inst_30212);

(statearr_30261_30289[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30229 === (10))){
var inst_30183 = (state_30228[(11)]);
var inst_30181 = (state_30228[(12)]);
var inst_30188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30181,inst_30183);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30228__$1,(13),out,inst_30188);
} else {
if((state_val_30229 === (18))){
var inst_30194 = (state_30228[(7)]);
var inst_30203 = cljs.core.first(inst_30194);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30228__$1,(20),out,inst_30203);
} else {
if((state_val_30229 === (8))){
var inst_30182 = (state_30228[(10)]);
var inst_30183 = (state_30228[(11)]);
var inst_30185 = (inst_30183 < inst_30182);
var inst_30186 = inst_30185;
var state_30228__$1 = state_30228;
if(cljs.core.truth_(inst_30186)){
var statearr_30262_30290 = state_30228__$1;
(statearr_30262_30290[(1)] = (10));

} else {
var statearr_30263_30291 = state_30228__$1;
(statearr_30263_30291[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__28608__auto__))
;
return ((function (switch__28501__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____1 = (function (state_30228){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30228);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30265){if((e30265 instanceof Object)){
var ex__28505__auto__ = e30265;
var statearr_30266_30292 = state_30228;
(statearr_30266_30292[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30228);

return cljs.core.cst$kw$recur;
} else {
throw e30265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30293 = state_30228;
state_30228 = G__30293;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_30267 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30267[(6)] = c__28608__auto__);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30295 = arguments.length;
switch (G__30295) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30298 = arguments.length;
switch (G__30298) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30301 = arguments.length;
switch (G__30301) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30348,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30348,out){
return (function (state_30325){
var state_val_30326 = (state_30325[(1)]);
if((state_val_30326 === (7))){
var inst_30320 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30327_30349 = state_30325__$1;
(statearr_30327_30349[(2)] = inst_30320);

(statearr_30327_30349[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (1))){
var inst_30302 = null;
var state_30325__$1 = (function (){var statearr_30328 = state_30325;
(statearr_30328[(7)] = inst_30302);

return statearr_30328;
})();
var statearr_30329_30350 = state_30325__$1;
(statearr_30329_30350[(2)] = null);

(statearr_30329_30350[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (4))){
var inst_30305 = (state_30325[(8)]);
var inst_30305__$1 = (state_30325[(2)]);
var inst_30306 = (inst_30305__$1 == null);
var inst_30307 = cljs.core.not(inst_30306);
var state_30325__$1 = (function (){var statearr_30330 = state_30325;
(statearr_30330[(8)] = inst_30305__$1);

return statearr_30330;
})();
if(inst_30307){
var statearr_30331_30351 = state_30325__$1;
(statearr_30331_30351[(1)] = (5));

} else {
var statearr_30332_30352 = state_30325__$1;
(statearr_30332_30352[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (6))){
var state_30325__$1 = state_30325;
var statearr_30333_30353 = state_30325__$1;
(statearr_30333_30353[(2)] = null);

(statearr_30333_30353[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (3))){
var inst_30322 = (state_30325[(2)]);
var inst_30323 = cljs.core.async.close_BANG_(out);
var state_30325__$1 = (function (){var statearr_30334 = state_30325;
(statearr_30334[(9)] = inst_30322);

return statearr_30334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30325__$1,inst_30323);
} else {
if((state_val_30326 === (2))){
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30325__$1,(4),ch);
} else {
if((state_val_30326 === (11))){
var inst_30305 = (state_30325[(8)]);
var inst_30314 = (state_30325[(2)]);
var inst_30302 = inst_30305;
var state_30325__$1 = (function (){var statearr_30335 = state_30325;
(statearr_30335[(10)] = inst_30314);

(statearr_30335[(7)] = inst_30302);

return statearr_30335;
})();
var statearr_30336_30354 = state_30325__$1;
(statearr_30336_30354[(2)] = null);

(statearr_30336_30354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (9))){
var inst_30305 = (state_30325[(8)]);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30325__$1,(11),out,inst_30305);
} else {
if((state_val_30326 === (5))){
var inst_30305 = (state_30325[(8)]);
var inst_30302 = (state_30325[(7)]);
var inst_30309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30305,inst_30302);
var state_30325__$1 = state_30325;
if(inst_30309){
var statearr_30338_30355 = state_30325__$1;
(statearr_30338_30355[(1)] = (8));

} else {
var statearr_30339_30356 = state_30325__$1;
(statearr_30339_30356[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (10))){
var inst_30317 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30340_30357 = state_30325__$1;
(statearr_30340_30357[(2)] = inst_30317);

(statearr_30340_30357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30326 === (8))){
var inst_30302 = (state_30325[(7)]);
var tmp30337 = inst_30302;
var inst_30302__$1 = tmp30337;
var state_30325__$1 = (function (){var statearr_30341 = state_30325;
(statearr_30341[(7)] = inst_30302__$1);

return statearr_30341;
})();
var statearr_30342_30358 = state_30325__$1;
(statearr_30342_30358[(2)] = null);

(statearr_30342_30358[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___30348,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30348,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30343[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30343[(1)] = (1));

return statearr_30343;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30325){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30325);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30344){if((e30344 instanceof Object)){
var ex__28505__auto__ = e30344;
var statearr_30345_30359 = state_30325;
(statearr_30345_30359[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30325);

return cljs.core.cst$kw$recur;
} else {
throw e30344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30360 = state_30325;
state_30325 = G__30360;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30348,out))
})();
var state__28610__auto__ = (function (){var statearr_30346 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30346[(6)] = c__28608__auto___30348);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30348,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30362 = arguments.length;
switch (G__30362) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30428,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30428,out){
return (function (state_30400){
var state_val_30401 = (state_30400[(1)]);
if((state_val_30401 === (7))){
var inst_30396 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30402_30429 = state_30400__$1;
(statearr_30402_30429[(2)] = inst_30396);

(statearr_30402_30429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (1))){
var inst_30363 = (new Array(n));
var inst_30364 = inst_30363;
var inst_30365 = (0);
var state_30400__$1 = (function (){var statearr_30403 = state_30400;
(statearr_30403[(7)] = inst_30365);

(statearr_30403[(8)] = inst_30364);

return statearr_30403;
})();
var statearr_30404_30430 = state_30400__$1;
(statearr_30404_30430[(2)] = null);

(statearr_30404_30430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (4))){
var inst_30368 = (state_30400[(9)]);
var inst_30368__$1 = (state_30400[(2)]);
var inst_30369 = (inst_30368__$1 == null);
var inst_30370 = cljs.core.not(inst_30369);
var state_30400__$1 = (function (){var statearr_30405 = state_30400;
(statearr_30405[(9)] = inst_30368__$1);

return statearr_30405;
})();
if(inst_30370){
var statearr_30406_30431 = state_30400__$1;
(statearr_30406_30431[(1)] = (5));

} else {
var statearr_30407_30432 = state_30400__$1;
(statearr_30407_30432[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (15))){
var inst_30390 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30408_30433 = state_30400__$1;
(statearr_30408_30433[(2)] = inst_30390);

(statearr_30408_30433[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (13))){
var state_30400__$1 = state_30400;
var statearr_30409_30434 = state_30400__$1;
(statearr_30409_30434[(2)] = null);

(statearr_30409_30434[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (6))){
var inst_30365 = (state_30400[(7)]);
var inst_30386 = (inst_30365 > (0));
var state_30400__$1 = state_30400;
if(cljs.core.truth_(inst_30386)){
var statearr_30410_30435 = state_30400__$1;
(statearr_30410_30435[(1)] = (12));

} else {
var statearr_30411_30436 = state_30400__$1;
(statearr_30411_30436[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (3))){
var inst_30398 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30400__$1,inst_30398);
} else {
if((state_val_30401 === (12))){
var inst_30364 = (state_30400[(8)]);
var inst_30388 = cljs.core.vec(inst_30364);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30400__$1,(15),out,inst_30388);
} else {
if((state_val_30401 === (2))){
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30400__$1,(4),ch);
} else {
if((state_val_30401 === (11))){
var inst_30380 = (state_30400[(2)]);
var inst_30381 = (new Array(n));
var inst_30364 = inst_30381;
var inst_30365 = (0);
var state_30400__$1 = (function (){var statearr_30412 = state_30400;
(statearr_30412[(10)] = inst_30380);

(statearr_30412[(7)] = inst_30365);

(statearr_30412[(8)] = inst_30364);

return statearr_30412;
})();
var statearr_30413_30437 = state_30400__$1;
(statearr_30413_30437[(2)] = null);

(statearr_30413_30437[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (9))){
var inst_30364 = (state_30400[(8)]);
var inst_30378 = cljs.core.vec(inst_30364);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30400__$1,(11),out,inst_30378);
} else {
if((state_val_30401 === (5))){
var inst_30368 = (state_30400[(9)]);
var inst_30365 = (state_30400[(7)]);
var inst_30364 = (state_30400[(8)]);
var inst_30373 = (state_30400[(11)]);
var inst_30372 = (inst_30364[inst_30365] = inst_30368);
var inst_30373__$1 = (inst_30365 + (1));
var inst_30374 = (inst_30373__$1 < n);
var state_30400__$1 = (function (){var statearr_30414 = state_30400;
(statearr_30414[(12)] = inst_30372);

(statearr_30414[(11)] = inst_30373__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30415_30438 = state_30400__$1;
(statearr_30415_30438[(1)] = (8));

} else {
var statearr_30416_30439 = state_30400__$1;
(statearr_30416_30439[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (14))){
var inst_30393 = (state_30400[(2)]);
var inst_30394 = cljs.core.async.close_BANG_(out);
var state_30400__$1 = (function (){var statearr_30418 = state_30400;
(statearr_30418[(13)] = inst_30393);

return statearr_30418;
})();
var statearr_30419_30440 = state_30400__$1;
(statearr_30419_30440[(2)] = inst_30394);

(statearr_30419_30440[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (10))){
var inst_30384 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30420_30441 = state_30400__$1;
(statearr_30420_30441[(2)] = inst_30384);

(statearr_30420_30441[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30401 === (8))){
var inst_30364 = (state_30400[(8)]);
var inst_30373 = (state_30400[(11)]);
var tmp30417 = inst_30364;
var inst_30364__$1 = tmp30417;
var inst_30365 = inst_30373;
var state_30400__$1 = (function (){var statearr_30421 = state_30400;
(statearr_30421[(7)] = inst_30365);

(statearr_30421[(8)] = inst_30364__$1);

return statearr_30421;
})();
var statearr_30422_30442 = state_30400__$1;
(statearr_30422_30442[(2)] = null);

(statearr_30422_30442[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___30428,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30428,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30423[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30423[(1)] = (1));

return statearr_30423;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30400){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30400);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object)){
var ex__28505__auto__ = e30424;
var statearr_30425_30443 = state_30400;
(statearr_30425_30443[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30400);

return cljs.core.cst$kw$recur;
} else {
throw e30424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30444 = state_30400;
state_30400 = G__30444;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30428,out))
})();
var state__28610__auto__ = (function (){var statearr_30426 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30426[(6)] = c__28608__auto___30428);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30428,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30446 = arguments.length;
switch (G__30446) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28608__auto___30516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28608__auto___30516,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28501__auto__ = ((function (c__28608__auto___30516,out){
return (function (state_30488){
var state_val_30489 = (state_30488[(1)]);
if((state_val_30489 === (7))){
var inst_30484 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30490_30517 = state_30488__$1;
(statearr_30490_30517[(2)] = inst_30484);

(statearr_30490_30517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (1))){
var inst_30447 = [];
var inst_30448 = inst_30447;
var inst_30449 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_30488__$1 = (function (){var statearr_30491 = state_30488;
(statearr_30491[(7)] = inst_30449);

(statearr_30491[(8)] = inst_30448);

return statearr_30491;
})();
var statearr_30492_30518 = state_30488__$1;
(statearr_30492_30518[(2)] = null);

(statearr_30492_30518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (4))){
var inst_30452 = (state_30488[(9)]);
var inst_30452__$1 = (state_30488[(2)]);
var inst_30453 = (inst_30452__$1 == null);
var inst_30454 = cljs.core.not(inst_30453);
var state_30488__$1 = (function (){var statearr_30493 = state_30488;
(statearr_30493[(9)] = inst_30452__$1);

return statearr_30493;
})();
if(inst_30454){
var statearr_30494_30519 = state_30488__$1;
(statearr_30494_30519[(1)] = (5));

} else {
var statearr_30495_30520 = state_30488__$1;
(statearr_30495_30520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (15))){
var inst_30478 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30496_30521 = state_30488__$1;
(statearr_30496_30521[(2)] = inst_30478);

(statearr_30496_30521[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (13))){
var state_30488__$1 = state_30488;
var statearr_30497_30522 = state_30488__$1;
(statearr_30497_30522[(2)] = null);

(statearr_30497_30522[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (6))){
var inst_30448 = (state_30488[(8)]);
var inst_30473 = inst_30448.length;
var inst_30474 = (inst_30473 > (0));
var state_30488__$1 = state_30488;
if(cljs.core.truth_(inst_30474)){
var statearr_30498_30523 = state_30488__$1;
(statearr_30498_30523[(1)] = (12));

} else {
var statearr_30499_30524 = state_30488__$1;
(statearr_30499_30524[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (3))){
var inst_30486 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30488__$1,inst_30486);
} else {
if((state_val_30489 === (12))){
var inst_30448 = (state_30488[(8)]);
var inst_30476 = cljs.core.vec(inst_30448);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30488__$1,(15),out,inst_30476);
} else {
if((state_val_30489 === (2))){
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30488__$1,(4),ch);
} else {
if((state_val_30489 === (11))){
var inst_30452 = (state_30488[(9)]);
var inst_30456 = (state_30488[(10)]);
var inst_30466 = (state_30488[(2)]);
var inst_30467 = [];
var inst_30468 = inst_30467.push(inst_30452);
var inst_30448 = inst_30467;
var inst_30449 = inst_30456;
var state_30488__$1 = (function (){var statearr_30500 = state_30488;
(statearr_30500[(7)] = inst_30449);

(statearr_30500[(8)] = inst_30448);

(statearr_30500[(11)] = inst_30466);

(statearr_30500[(12)] = inst_30468);

return statearr_30500;
})();
var statearr_30501_30525 = state_30488__$1;
(statearr_30501_30525[(2)] = null);

(statearr_30501_30525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (9))){
var inst_30448 = (state_30488[(8)]);
var inst_30464 = cljs.core.vec(inst_30448);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30488__$1,(11),out,inst_30464);
} else {
if((state_val_30489 === (5))){
var inst_30449 = (state_30488[(7)]);
var inst_30452 = (state_30488[(9)]);
var inst_30456 = (state_30488[(10)]);
var inst_30456__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30452) : f.call(null,inst_30452));
var inst_30457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30456__$1,inst_30449);
var inst_30458 = cljs.core.keyword_identical_QMARK_(inst_30449,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_30459 = ((inst_30457) || (inst_30458));
var state_30488__$1 = (function (){var statearr_30502 = state_30488;
(statearr_30502[(10)] = inst_30456__$1);

return statearr_30502;
})();
if(cljs.core.truth_(inst_30459)){
var statearr_30503_30526 = state_30488__$1;
(statearr_30503_30526[(1)] = (8));

} else {
var statearr_30504_30527 = state_30488__$1;
(statearr_30504_30527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (14))){
var inst_30481 = (state_30488[(2)]);
var inst_30482 = cljs.core.async.close_BANG_(out);
var state_30488__$1 = (function (){var statearr_30506 = state_30488;
(statearr_30506[(13)] = inst_30481);

return statearr_30506;
})();
var statearr_30507_30528 = state_30488__$1;
(statearr_30507_30528[(2)] = inst_30482);

(statearr_30507_30528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (10))){
var inst_30471 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30508_30529 = state_30488__$1;
(statearr_30508_30529[(2)] = inst_30471);

(statearr_30508_30529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30489 === (8))){
var inst_30452 = (state_30488[(9)]);
var inst_30448 = (state_30488[(8)]);
var inst_30456 = (state_30488[(10)]);
var inst_30461 = inst_30448.push(inst_30452);
var tmp30505 = inst_30448;
var inst_30448__$1 = tmp30505;
var inst_30449 = inst_30456;
var state_30488__$1 = (function (){var statearr_30509 = state_30488;
(statearr_30509[(7)] = inst_30449);

(statearr_30509[(14)] = inst_30461);

(statearr_30509[(8)] = inst_30448__$1);

return statearr_30509;
})();
var statearr_30510_30530 = state_30488__$1;
(statearr_30510_30530[(2)] = null);

(statearr_30510_30530[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28608__auto___30516,out))
;
return ((function (switch__28501__auto__,c__28608__auto___30516,out){
return (function() {
var cljs$core$async$state_machine__28502__auto__ = null;
var cljs$core$async$state_machine__28502__auto____0 = (function (){
var statearr_30511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30511[(0)] = cljs$core$async$state_machine__28502__auto__);

(statearr_30511[(1)] = (1));

return statearr_30511;
});
var cljs$core$async$state_machine__28502__auto____1 = (function (state_30488){
while(true){
var ret_value__28503__auto__ = (function (){try{while(true){
var result__28504__auto__ = switch__28501__auto__(state_30488);
if(cljs.core.keyword_identical_QMARK_(result__28504__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28504__auto__;
}
break;
}
}catch (e30512){if((e30512 instanceof Object)){
var ex__28505__auto__ = e30512;
var statearr_30513_30531 = state_30488;
(statearr_30513_30531[(5)] = ex__28505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30488);

return cljs.core.cst$kw$recur;
} else {
throw e30512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28503__auto__,cljs.core.cst$kw$recur)){
var G__30532 = state_30488;
state_30488 = G__30532;
continue;
} else {
return ret_value__28503__auto__;
}
break;
}
});
cljs$core$async$state_machine__28502__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28502__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28502__auto____0;
cljs$core$async$state_machine__28502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28502__auto____1;
return cljs$core$async$state_machine__28502__auto__;
})()
;})(switch__28501__auto__,c__28608__auto___30516,out))
})();
var state__28610__auto__ = (function (){var statearr_30514 = (f__28609__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28609__auto__.cljs$core$IFn$_invoke$arity$0() : f__28609__auto__.call(null));
(statearr_30514[(6)] = c__28608__auto___30516);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28610__auto__);
});})(c__28608__auto___30516,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

