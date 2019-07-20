// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26632__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26633__i = 0, G__26633__a = new Array(arguments.length -  0);
while (G__26633__i < G__26633__a.length) {G__26633__a[G__26633__i] = arguments[G__26633__i + 0]; ++G__26633__i;}
  args = new cljs.core.IndexedSeq(G__26633__a,0,null);
} 
return G__26632__delegate.call(this,args);};
G__26632.cljs$lang$maxFixedArity = 0;
G__26632.cljs$lang$applyTo = (function (arglist__26634){
var args = cljs.core.seq(arglist__26634);
return G__26632__delegate(args);
});
G__26632.cljs$core$IFn$_invoke$arity$variadic = G__26632__delegate;
return G__26632;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26635__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26636__i = 0, G__26636__a = new Array(arguments.length -  0);
while (G__26636__i < G__26636__a.length) {G__26636__a[G__26636__i] = arguments[G__26636__i + 0]; ++G__26636__i;}
  args = new cljs.core.IndexedSeq(G__26636__a,0,null);
} 
return G__26635__delegate.call(this,args);};
G__26635.cljs$lang$maxFixedArity = 0;
G__26635.cljs$lang$applyTo = (function (arglist__26637){
var args = cljs.core.seq(arglist__26637);
return G__26635__delegate(args);
});
G__26635.cljs$core$IFn$_invoke$arity$variadic = G__26635__delegate;
return G__26635;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563617057339
