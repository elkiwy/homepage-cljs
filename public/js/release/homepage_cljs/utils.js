// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
homepage_cljs.utils.app_version = "0.0.1";
homepage_cljs.utils.discard_json = (function homepage_cljs$utils$discard_json(subreddits){
var subs = cljs.core.seq(subreddits);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(subs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result);
} else {
var G__26861 = cljs.core.rest(subs);
var G__26862 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.first(subs)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$json,""], null)], null)], null));
subs = G__26861;
result = G__26862;
continue;
}
break;
}
});
homepage_cljs.utils.interpolate_ease_in_out = (function homepage_cljs$utils$interpolate_ease_in_out(duration,totalT){
var t = (totalT / duration);
if((t <= 0.5)){
return ((((((16) * t) * t) * t) * t) * t);
} else {
var p = ((t * (2)) - (2));
return ((((((0.5 * p) * p) * p) * p) * p) + (1));
}
});
homepage_cljs.utils.now = (function homepage_cljs$utils$now(){
return (new Date());
});
/**
 * Animate a value from a value to a value in a duration with an easing function.
 *   The destination value will be the one that the atom will be set at when changing value.
 *   Returns a Reaction (atom-like behaviour).
 */
homepage_cljs.utils.animate = (function homepage_cljs$utils$animate(x,duration){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$from,cljs.core.deref(x),cljs.core.cst$kw$to,cljs.core.deref(x),cljs.core.cst$kw$at,cljs.core.deref(x),cljs.core.cst$kw$start,homepage_cljs.utils.now()], null));
return reagent.ratom.make_reaction(((function (anim){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)),cljs.core.deref(x))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,cljs.core.cst$kw$start,homepage_cljs.utils.now(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$to,cljs.core.deref(x),cljs.core.cst$kw$from,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)),cljs.core.cst$kw$frame,(0)], 0));
} else {
}

var t = (homepage_cljs.utils.now() - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)));
var scale = homepage_cljs.utils.interpolate_ease_in_out(duration,t);
var a = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim));
var b = cljs.core.deref(x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
reagent.core.next_tick(((function (at,t,scale,a,b,anim){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,cljs.core.cst$kw$at,at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$frame,(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)) + (1))], 0));
});})(at,t,scale,a,b,anim))
);

return at;
} else {
return b;
}
});})(anim))
);
});
homepage_cljs.utils.dissoc_in = (function homepage_cljs$utils$dissoc_in(m,path,key){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,path,cljs.core.dissoc,key);
});
homepage_cljs.utils.page_settings = (function homepage_cljs$utils$page_settings(f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"res/icon-settings.svg",cljs.core.cst$kw$alt,"Settings"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"",cljs.core.cst$kw$on_DASH_click,f], null)], null)], null);
});
homepage_cljs.utils.toggleScale = (function homepage_cljs$utils$toggleScale(val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,(0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,(1))){
return (0);
} else {
return val;

}
}
});
homepage_cljs.utils.remove_from_vector = (function homepage_cljs$utils$remove_from_vector(coll,item){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26863_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26863_SHARP_,item);
}),coll));
});
homepage_cljs.utils.urlizeString = (function homepage_cljs$utils$urlizeString(s){
if((s == null)){
return null;
} else {
return clojure.string.replace(s," ","%20");
}
});
homepage_cljs.utils.deurlizeString = (function homepage_cljs$utils$deurlizeString(s){
if((s == null)){
return null;
} else {
return clojure.string.replace(s,"%20"," ");
}
});
homepage_cljs.utils.index = (function homepage_cljs$utils$index(v,pred){
return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26864_SHARP_){
var G__26865 = cljs.core.second(p1__26864_SHARP_);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__26865) : pred.call(null,G__26865));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,v)));
});
homepage_cljs.utils.remove_vec = (function homepage_cljs$utils$remove_vec(vec,item){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([item]),vec));
});
