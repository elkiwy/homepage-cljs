// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljss.utils');
goog.require('cljs.core');
goog.require('clojure.string');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.pseudo_QMARK_ = (function cljss$utils$pseudo_QMARK_(p__26430){
var vec__26431 = p__26430;
var rule = cljs.core.nth.call(null,vec__26431,(0),null);
var value = cljs.core.nth.call(null,vec__26431,(1),null);
var and__4120__auto__ = cljs.core.re_matches.call(null,/&:.*/,cljs.core.name.call(null,rule));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_.call(null,value);
} else {
return and__4120__auto__;
}
});
cljss.utils.nested_QMARK_ = (function cljss$utils$nested_QMARK_(p__26434){
var vec__26435 = p__26434;
var rule = cljs.core.nth.call(null,vec__26435,(0),null);
var value = cljs.core.nth.call(null,vec__26435,(1),null);
return ((typeof rule === 'string') && (cljs.core.map_QMARK_.call(null,value)));
});
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.call(null,rule,new cljs.core.Keyword(null,"content","content",15833224))){
return cljs.core.pr_str.call(null,val);
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
return (function (p1__26438_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26438_SHARP_),"}"].join('');
}).call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,(function (p__26439){
var vec__26440 = p__26439;
var rule = cljs.core.nth.call(null,vec__26440,(0),null);
var val = cljs.core.nth.call(null,vec__26440,(1),null);
return [cljs.core.name.call(null,rule),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val.call(null,rule,val)),";"].join('');
}),styles)));
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__26443){
var vec__26444 = p__26443;
var rule = cljs.core.nth.call(null,vec__26444,(0),null);
var val = cljs.core.nth.call(null,vec__26444,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,rule),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_.call(null,val))?cljs.core.into.call(null,r,val):cljs.core.conj.call(null,r,val));
return cljs.core.conj.call(null,r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (s__$1,s1){
var s0 = cljs.core.first.call(null,s__$1);
var srest = cljs.core.rest.call(null,s__$1);
if(((cljss.utils.literal_QMARK_.call(null,s1)) && (typeof s0 === 'string'))){
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons.call(null,s1,s__$1);
}
}),(new cljs.core.List(null,"",null,(1),null)),s));
});

//# sourceMappingURL=utils.js.map?rel=1563617057159
