// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__31643){
var vec__31644 = p__31643;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31644,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__31647 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__31651 = arguments.length;
switch (G__31651) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__31653_31677 = clojure.data.equality_partition;
var G__31654_31678 = "null";
var G__31655_31679 = ((function (G__31653_31677,G__31654_31678){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__31653_31677,G__31654_31678))
;
goog.object.set(G__31653_31677,G__31654_31678,G__31655_31679);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__31656_31680 = clojure.data.equality_partition;
var G__31657_31681 = "string";
var G__31658_31682 = ((function (G__31656_31680,G__31657_31681){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__31656_31680,G__31657_31681))
;
goog.object.set(G__31656_31680,G__31657_31681,G__31658_31682);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__31659_31683 = clojure.data.equality_partition;
var G__31660_31684 = "number";
var G__31661_31685 = ((function (G__31659_31683,G__31660_31684){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__31659_31683,G__31660_31684))
;
goog.object.set(G__31659_31683,G__31660_31684,G__31661_31685);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__31662_31686 = clojure.data.equality_partition;
var G__31663_31687 = "array";
var G__31664_31688 = ((function (G__31662_31686,G__31663_31687){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__31662_31686,G__31663_31687))
;
goog.object.set(G__31662_31686,G__31663_31687,G__31664_31688);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__31665_31689 = clojure.data.equality_partition;
var G__31666_31690 = "function";
var G__31667_31691 = ((function (G__31665_31689,G__31666_31690){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__31665_31689,G__31666_31690))
;
goog.object.set(G__31665_31689,G__31666_31690,G__31667_31691);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__31668_31692 = clojure.data.equality_partition;
var G__31669_31693 = "boolean";
var G__31670_31694 = ((function (G__31668_31692,G__31669_31693){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__31668_31692,G__31669_31693))
;
goog.object.set(G__31668_31692,G__31669_31693,G__31670_31694);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__31671_31695 = clojure.data.equality_partition;
var G__31672_31696 = "_";
var G__31673_31697 = ((function (G__31671_31695,G__31672_31696){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__31671_31695,G__31672_31696))
;
goog.object.set(G__31671_31695,G__31672_31696,G__31673_31697);
goog.object.set(clojure.data.Diff,"null",true);

var G__31698_31722 = clojure.data.diff_similar;
var G__31699_31723 = "null";
var G__31700_31724 = ((function (G__31698_31722,G__31699_31723){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31698_31722,G__31699_31723))
;
goog.object.set(G__31698_31722,G__31699_31723,G__31700_31724);

goog.object.set(clojure.data.Diff,"string",true);

var G__31701_31725 = clojure.data.diff_similar;
var G__31702_31726 = "string";
var G__31703_31727 = ((function (G__31701_31725,G__31702_31726){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31701_31725,G__31702_31726))
;
goog.object.set(G__31701_31725,G__31702_31726,G__31703_31727);

goog.object.set(clojure.data.Diff,"number",true);

var G__31704_31728 = clojure.data.diff_similar;
var G__31705_31729 = "number";
var G__31706_31730 = ((function (G__31704_31728,G__31705_31729){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31704_31728,G__31705_31729))
;
goog.object.set(G__31704_31728,G__31705_31729,G__31706_31730);

goog.object.set(clojure.data.Diff,"array",true);

var G__31707_31731 = clojure.data.diff_similar;
var G__31708_31732 = "array";
var G__31709_31733 = ((function (G__31707_31731,G__31708_31732){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__31707_31731,G__31708_31732))
;
goog.object.set(G__31707_31731,G__31708_31732,G__31709_31733);

goog.object.set(clojure.data.Diff,"function",true);

var G__31710_31734 = clojure.data.diff_similar;
var G__31711_31735 = "function";
var G__31712_31736 = ((function (G__31710_31734,G__31711_31735){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31710_31734,G__31711_31735))
;
goog.object.set(G__31710_31734,G__31711_31735,G__31712_31736);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__31713_31737 = clojure.data.diff_similar;
var G__31714_31738 = "boolean";
var G__31715_31739 = ((function (G__31713_31737,G__31714_31738){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31713_31737,G__31714_31738))
;
goog.object.set(G__31713_31737,G__31714_31738,G__31715_31739);

goog.object.set(clojure.data.Diff,"_",true);

var G__31716_31740 = clojure.data.diff_similar;
var G__31717_31741 = "_";
var G__31718_31742 = ((function (G__31716_31740,G__31717_31741){
return (function (a,b){
var fexpr__31720 = (function (){var G__31721 = clojure.data.equality_partition(a);
var G__31721__$1 = (((G__31721 instanceof cljs.core.Keyword))?G__31721.fqn:null);
switch (G__31721__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31721__$1)].join('')));

}
})();
return (fexpr__31720.cljs$core$IFn$_invoke$arity$2 ? fexpr__31720.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31720.call(null,a,b));
});})(G__31716_31740,G__31717_31741))
;
goog.object.set(G__31716_31740,G__31717_31741,G__31718_31742);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
