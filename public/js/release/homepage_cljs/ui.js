// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('homepage_cljs.style');
goog.require('homepage_cljs.utils');
homepage_cljs.ui.item_v_margin = (6);
homepage_cljs.ui.item_relative_w = (70);
homepage_cljs.ui.item_h = (22);
homepage_cljs.ui.item_padding = (5);
homepage_cljs.ui.custom_select_input = (function homepage_cljs$ui$custom_select_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29804 = arguments.length;
var i__4731__auto___29805 = (0);
while(true){
if((i__4731__auto___29805 < len__4730__auto___29804)){
args__4736__auto__.push((arguments[i__4731__auto___29805]));

var G__29806 = (i__4731__auto___29805 + (1));
i__4731__auto___29805 = G__29806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (itemsAtom,dataAtom,p__29796){
var vec__29797 = p__29796;
var extraFunc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(0),null);
return ((function (vec__29797,extraFunc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$padding,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],[homepage_cljs.style.col_dark_gray,(14),homepage_cljs.style.col_white,["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"% + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((homepage_cljs.ui.item_padding * (2))),"px)"].join(''),(0),homepage_cljs.ui.item_padding,(5),"myFont",(homepage_cljs.ui.item_h + (homepage_cljs.ui.item_padding * (2))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')]),cljs.core.cst$kw$on_DASH_change,((function (vec__29797,extraFunc){
return (function (p1__29792_SHARP_){
cljs.core.reset_BANG_(dataAtom,p1__29792_SHARP_.target.value);

if((extraFunc == null)){
return null;
} else {
return (extraFunc.cljs$core$IFn$_invoke$arity$0 ? extraFunc.cljs$core$IFn$_invoke$arity$0() : extraFunc.call(null));
}
});})(vec__29797,extraFunc))
,cljs.core.cst$kw$value,cljs.core.deref(dataAtom)], null),(function (){var iter__4523__auto__ = ((function (vec__29797,extraFunc){
return (function homepage_cljs$ui$iter__29800(s__29801){
return (new cljs.core.LazySeq(null,((function (vec__29797,extraFunc){
return (function (){
var s__29801__$1 = s__29801;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29801__$1);
if(temp__5720__auto__){
var s__29801__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29801__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29801__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29803 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29802 = (0);
while(true){
if((i__29802 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29802);
cljs.core.chunk_append(b__29803,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__29807 = (i__29802 + (1));
i__29802 = G__29807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29803),homepage_cljs$ui$iter__29800(cljs.core.chunk_rest(s__29801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29803),null);
}
} else {
var item = cljs.core.first(s__29801__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),homepage_cljs$ui$iter__29800(cljs.core.rest(s__29801__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29797,extraFunc))
,null,null));
});})(vec__29797,extraFunc))
;
return iter__4523__auto__(cljs.core.deref(itemsAtom));
})()], null);
});
;})(vec__29797,extraFunc))
});

homepage_cljs.ui.custom_select_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_select_input.cljs$lang$applyTo = (function (seq29793){
var G__29794 = cljs.core.first(seq29793);
var seq29793__$1 = cljs.core.next(seq29793);
var G__29795 = cljs.core.first(seq29793__$1);
var seq29793__$2 = cljs.core.next(seq29793__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29794,G__29795,seq29793__$2);
});

homepage_cljs.ui.custom_text_input = (function homepage_cljs$ui$custom_text_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29816 = arguments.length;
var i__4731__auto___29817 = (0);
while(true){
if((i__4731__auto___29817 < len__4730__auto___29816)){
args__4736__auto__.push((arguments[i__4731__auto___29817]));

var G__29818 = (i__4731__auto___29817 + (1));
i__4731__auto___29817 = G__29818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_text_input.cljs$core$IFn$_invoke$arity$variadic = (function (placeholder,dataAtom,p__29812){
var vec__29813 = p__29812;
var password_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29813,(0),null);
return ((function (vec__29813,password_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,(cljs.core.truth_(password_QMARK_)?"password":"text"),cljs.core.cst$kw$value,cljs.core.deref(dataAtom),cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,((function (vec__29813,password_QMARK_){
return (function (p1__29808_SHARP_){
return cljs.core.reset_BANG_(dataAtom,p1__29808_SHARP_.target.value);
});})(vec__29813,password_QMARK_))
,cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$padding,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],[homepage_cljs.style.col_dark_gray,(14),homepage_cljs.style.col_white,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"%"].join(''),(0),homepage_cljs.ui.item_padding,(5),"myFont",homepage_cljs.ui.item_h,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')])], null)], null);
});
;})(vec__29813,password_QMARK_))
});

homepage_cljs.ui.custom_text_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_text_input.cljs$lang$applyTo = (function (seq29809){
var G__29810 = cljs.core.first(seq29809);
var seq29809__$1 = cljs.core.next(seq29809);
var G__29811 = cljs.core.first(seq29809__$1);
var seq29809__$2 = cljs.core.next(seq29809__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29810,G__29811,seq29809__$2);
});

homepage_cljs.ui.custom_button = (function homepage_cljs$ui$custom_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29826 = arguments.length;
var i__4731__auto___29827 = (0);
while(true){
if((i__4731__auto___29827 < len__4730__auto___29826)){
args__4736__auto__.push((arguments[i__4731__auto___29827]));

var G__29828 = (i__4731__auto___29827 + (1));
i__4731__auto___29827 = G__29828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_button.cljs$core$IFn$_invoke$arity$variadic = (function (name,func,p__29822){
var vec__29823 = p__29822;
var extraStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(0),null);
var bg_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(1),null);
return ((function (vec__29823,extraStyle,bg_col){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,name,cljs.core.cst$kw$on_DASH_click,func,cljs.core.cst$kw$class,homepage_cljs.style.background_accent_hover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bg_col], 0)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$width,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$padding,cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],[homepage_cljs.style.col_black_full,(16),"800",["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"% + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((homepage_cljs.ui.item_padding * (2))),"px)"].join(''),(0),homepage_cljs.ui.item_padding,"none",(5),"myFont",(homepage_cljs.ui.item_h * (2)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')]),extraStyle], 0))], null)], null);
});
;})(vec__29823,extraStyle,bg_col))
});

homepage_cljs.ui.custom_button.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_button.cljs$lang$applyTo = (function (seq29819){
var G__29820 = cljs.core.first(seq29819);
var seq29819__$1 = cljs.core.next(seq29819);
var G__29821 = cljs.core.first(seq29819__$1);
var seq29819__$2 = cljs.core.next(seq29819__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29820,G__29821,seq29819__$2);
});

homepage_cljs.ui.custom_header = (function homepage_cljs$ui$custom_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29836 = arguments.length;
var i__4731__auto___29837 = (0);
while(true){
if((i__4731__auto___29837 < len__4730__auto___29836)){
args__4736__auto__.push((arguments[i__4731__auto___29837]));

var G__29838 = (i__4731__auto___29837 + (1));
i__4731__auto___29837 = G__29838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_header.cljs$core$IFn$_invoke$arity$variadic = (function (level,label,p__29832){
var vec__29833 = p__29832;
var extraStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29833,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,homepage_cljs.style.text(homepage_cljs.style.col_white,(24),"800"),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,(12),cljs.core.cst$kw$text_DASH_align,"center"], null),extraStyle], 0))], null),label], null);
});

homepage_cljs.ui.custom_header.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_header.cljs$lang$applyTo = (function (seq29829){
var G__29830 = cljs.core.first(seq29829);
var seq29829__$1 = cljs.core.next(seq29829);
var G__29831 = cljs.core.first(seq29829__$1);
var seq29829__$2 = cljs.core.next(seq29829__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29830,G__29831,seq29829__$2);
});

