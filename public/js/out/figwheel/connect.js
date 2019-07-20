// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40454__delegate = function (x__40438__auto__){
if(cljs.core.truth_(homepage_cljs.core.mount_root)){
return cljs.core.apply.call(null,homepage_cljs.core.mount_root,x__40438__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","homepage-cljs.core/mount-root","' is missing"].join(''));
}
};
var G__40454 = function (var_args){
var x__40438__auto__ = null;
if (arguments.length > 0) {
var G__40455__i = 0, G__40455__a = new Array(arguments.length -  0);
while (G__40455__i < G__40455__a.length) {G__40455__a[G__40455__i] = arguments[G__40455__i + 0]; ++G__40455__i;}
  x__40438__auto__ = new cljs.core.IndexedSeq(G__40455__a,0,null);
} 
return G__40454__delegate.call(this,x__40438__auto__);};
G__40454.cljs$lang$maxFixedArity = 0;
G__40454.cljs$lang$applyTo = (function (arglist__40456){
var x__40438__auto__ = cljs.core.seq(arglist__40456);
return G__40454__delegate(x__40438__auto__);
});
G__40454.cljs$core$IFn$_invoke$arity$variadic = G__40454__delegate;
return G__40454;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1563617067199
