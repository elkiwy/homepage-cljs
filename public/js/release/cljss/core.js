// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljss.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljss.sheet');
goog.require('cljss.utils');
goog.require('clojure.string');
cljss.core.sheets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
cljss.core.remove_styles_BANG_ = (function cljss$core$remove_styles_BANG_(){
cljs.core.run_BANG_(cljss.sheet.flush_BANG_,cljs.core.deref(cljss.core.sheets));

return cljs.core.reset_BANG_(cljss.core.sheets,(new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(cls,static$,vars){
var static$__$1 = ((typeof static$ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$], null):static$);
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css.cljs$core$IFn$_invoke$arity$3(cls,static$__$1,vars) : cljss.core.css.call(null,cls,static$__$1,vars));
} else {
var G__28810_28820 = static$__$1;
var vec__28811_28821 = G__28810_28820;
var seq__28812_28822 = cljs.core.seq(vec__28811_28821);
var first__28813_28823 = cljs.core.first(seq__28812_28822);
var seq__28812_28824__$1 = cljs.core.next(seq__28812_28822);
var s_28825 = first__28813_28823;
var static_28826__$2 = seq__28812_28824__$1;
var idx_28827 = (0);
var G__28810_28828__$1 = G__28810_28820;
var idx_28829__$1 = idx_28827;
while(true){
var vec__28817_28830 = G__28810_28828__$1;
var seq__28818_28831 = cljs.core.seq(vec__28817_28830);
var first__28819_28832 = cljs.core.first(seq__28818_28831);
var seq__28818_28833__$1 = cljs.core.next(seq__28818_28831);
var s_28834__$1 = first__28819_28832;
var static_28835__$3 = seq__28818_28833__$1;
var idx_28836__$2 = idx_28829__$1;
var cls_28837__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_28836__$2)].join('');
cljss.sheet.insert_BANG_(sheet,s_28834__$1,cls_28837__$1);

if(cljs.core.empty_QMARK_(static_28835__$3)){
} else {
var G__28838 = static_28835__$3;
var G__28839 = (idx_28836__$2 + (1));
G__28810_28828__$1 = G__28838;
idx_28829__$1 = G__28839;
continue;
}
break;
}

if((cljs.core.count(vars) > (0))){
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
cljss.sheet.insert_BANG_(sheet,((function (var_cls,static$__$1,sheet){
return (function (){
return cljss.utils.build_css(var_cls,vars);
});})(var_cls,static$__$1,sheet))
,var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",var_cls].join('');
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3(cls,static$,vars) : cljss.core.css_keyframes.call(null,cls,static$,vars));
} else {
var inner = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sheet){
return (function (s,p__28840){
var vec__28841 = p__28840;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(1),null);
return clojure.string.replace(s,id,val);
});})(sheet))
,static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
var keyframes = ["@keyframes ",anim_name,"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_(sheet,keyframes,anim_name);

return anim_name;
}
});
cljss.core._camel_case = (function cljss$core$_camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__28844 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var seq__28845 = cljs.core.seq(vec__28844);
var first__28846 = cljs.core.first(seq__28845);
var seq__28845__$1 = cljs.core.next(seq__28845);
var first_word = first__28846;
var words = seq__28845__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
cljss.core._compile_class_name = (function cljss$core$_compile_class_name(props){
var className = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$className,cljs.core.cst$kw$class,cljs.core.cst$kw$class_DASH_name], null))));
if(cljs.core.empty_QMARK_(className)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",className))," "].join('');
}
});
cljss.core._mk_var_class = (function cljss$core$_mk_var_class(props,vars,cls,static$){
return cljss.core.css(cls,static$,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28848){
var vec__28849 = p__28848;
var cls__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(1),null);
if((function (){var and__4120__auto__ = cljs.core.ifn_QMARK_(v);
if(and__4120__auto__){
if((!((v == null)))){
if((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
}
} else {
return and__4120__auto__;
}
})()){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__28849,cls__$1,v){
return (function (p1__28847_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,p1__28847_SHARP_,null);
});})(vec__28849,cls__$1,v))
,cljs.core.flatten((new cljs.core.List(null,cljs.core.meta(v),null,(1),null))))),null,(1),null)),(2),null));
} else {
if(cljs.core.ifn_QMARK_(v)){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(props) : v.call(null,props)),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v,null,(1),null)),(2),null));

}
}
}),vars));
});
cljss.core._meta_attrs = (function cljss$core$_meta_attrs(vars){
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28854_SHARP_){
if((!((p1__28854_SHARP_ == null)))){
if((((p1__28854_SHARP_.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === p1__28854_SHARP_.cljs$core$IWithMeta$)))){
return true;
} else {
if((!p1__28854_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__28854_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__28854_SHARP_);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,vars)))));
});
cljss.core._camel_case_attrs = (function cljss$core$_camel_case_attrs(props){
return cljs.core.reduce_kv((function (m,k,v){
var k__$1 = (function (){var G__28856 = k;
var G__28856__$1 = (((G__28856 instanceof cljs.core.Keyword))?G__28856.fqn:null);
switch (G__28856__$1) {
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return cljss.core._camel_case(k);

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
cljss.core._styled = (function cljss$core$_styled(cls,static$,vars,attrs,create_element){
var clsn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
var static$__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (clsn){
return (function (p1__28858_SHARP_){
return clojure.string.replace(p1__28858_SHARP_,cls,clsn);
});})(clsn))
,static$):static$);
var vars__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (clsn,static$__$1){
return (function (p__28859){
var vec__28860 = p__28859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28860,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,cls,clsn),v], null);
});})(clsn,static$__$1))
,vars):vars);
var cls__$1 = ((cljss.utils.dev_QMARK_)?clsn:cls);
return ((function (clsn,static$__$1,vars__$1,cls__$1){
return (function() { 
var G__28866__delegate = function (props,children){
var vec__28863 = ((cljs.core.map_QMARK_(props))?[props,children]:[cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.array,props,children)]);
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863,(1),null);
var var_class = cljss.core._mk_var_class(props__$1,vars__$1,cls__$1,static$__$1);
var meta_attrs = cljss.core._meta_attrs(vars__$1);
var className = [cljss.core._compile_class_name(props__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_class)].join('');
var props__$2 = cljss.core._camel_case_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(attrs,meta_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$className], null)], 0))),cljs.core.cst$kw$className,className));
return (create_element.cljs$core$IFn$_invoke$arity$2 ? create_element.cljs$core$IFn$_invoke$arity$2(props__$2,children__$1) : create_element.call(null,props__$2,children__$1));
};
var G__28866 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__28867__i = 0, G__28867__a = new Array(arguments.length -  1);
while (G__28867__i < G__28867__a.length) {G__28867__a[G__28867__i] = arguments[G__28867__i + 1]; ++G__28867__i;}
  children = new cljs.core.IndexedSeq(G__28867__a,0,null);
} 
return G__28866__delegate.call(this,props,children);};
G__28866.cljs$lang$maxFixedArity = 1;
G__28866.cljs$lang$applyTo = (function (arglist__28868){
var props = cljs.core.first(arglist__28868);
var children = cljs.core.rest(arglist__28868);
return G__28866__delegate(props,children);
});
G__28866.cljs$core$IFn$_invoke$arity$variadic = G__28866__delegate;
return G__28866;
})()
;
;})(clsn,static$__$1,vars__$1,cls__$1))
});
