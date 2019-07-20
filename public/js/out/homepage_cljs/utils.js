// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.utils');
goog.require('cljs.core');
goog.require('reagent.core');
homepage_cljs.utils.app_version = "0.0.1";
homepage_cljs.utils.discard_json = (function homepage_cljs$utils$discard_json(subreddits){
var subs = cljs.core.seq.call(null,subreddits);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,subs)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result);
} else {
var G__43151 = cljs.core.rest.call(null,subs);
var G__43152 = cljs.core.concat.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.first.call(null,subs)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json","json",1279968570),""], null)], null)], null));
subs = G__43151;
result = G__43152;
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
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"start","start",-355208981),homepage_cljs.utils.now.call(null)], null));
return reagent.ratom.make_reaction.call(null,((function (anim){
return (function (){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),cljs.core.deref.call(null,x))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),homepage_cljs.utils.now.call(null),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var t = (homepage_cljs.utils.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = homepage_cljs.utils.interpolate_ease_in_out.call(null,duration,t);
var a = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim));
var b = cljs.core.deref.call(null,x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
reagent.core.next_tick.call(null,((function (at,t,scale,a,b,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)) + (1)));
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
return cljs.core.update_in.call(null,m,path,cljs.core.dissoc,key);
});
homepage_cljs.utils.page_settings = (function homepage_cljs$utils$page_settings(f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"res/icon-settings.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"Settings"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),f], null)], null)], null);
});
homepage_cljs.utils.toggleScale = (function homepage_cljs$utils$toggleScale(val){
if(cljs.core._EQ_.call(null,val,(0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,val,(1))){
return (0);
} else {
return val;

}
}
});
homepage_cljs.utils.remove_from_vector = (function homepage_cljs$utils$remove_from_vector(coll,item){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (p1__43153_SHARP_){
return cljs.core._EQ_.call(null,p1__43153_SHARP_,item);
}),coll));
});
homepage_cljs.utils.urlizeString = (function homepage_cljs$utils$urlizeString(s){
if((s == null)){
return null;
} else {
return clojure.string.replace.call(null,s," ","%20");
}
});
homepage_cljs.utils.deurlizeString = (function homepage_cljs$utils$deurlizeString(s){
if((s == null)){
return null;
} else {
return clojure.string.replace.call(null,s,"%20"," ");
}
});
homepage_cljs.utils.index = (function homepage_cljs$utils$index(v,pred){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__43154_SHARP_){
return pred.call(null,cljs.core.second.call(null,p1__43154_SHARP_));
}),cljs.core.map_indexed.call(null,cljs.core.vector,v)));
});
homepage_cljs.utils.remove_vec = (function homepage_cljs$utils$remove_vec(vec,item){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([item]),vec));
});

//# sourceMappingURL=utils.js.map?rel=1563618068648
