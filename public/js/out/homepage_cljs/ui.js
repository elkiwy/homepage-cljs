// Compiled by ClojureScript 1.10.520 {}
goog.provide('homepage_cljs.ui');
goog.require('cljs.core');
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
var len__4730__auto___43180 = arguments.length;
var i__4731__auto___43181 = (0);
while(true){
if((i__4731__auto___43181 < len__4730__auto___43180)){
args__4736__auto__.push((arguments[i__4731__auto___43181]));

var G__43182 = (i__4731__auto___43181 + (1));
i__4731__auto___43181 = G__43182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (itemsAtom,dataAtom,p__43172){
var vec__43173 = p__43172;
var extraFunc = cljs.core.nth.call(null,vec__43173,(0),null);
return ((function (vec__43173,extraFunc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[homepage_cljs.style.col_dark_gray,(14),homepage_cljs.style.col_white,["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"% + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((homepage_cljs.ui.item_padding * (2))),"px)"].join(''),(0),homepage_cljs.ui.item_padding,(5),"myFont",(homepage_cljs.ui.item_h + (homepage_cljs.ui.item_padding * (2))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')]),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__43173,extraFunc){
return (function (p1__43168_SHARP_){
cljs.core.reset_BANG_.call(null,dataAtom,p1__43168_SHARP_.target.value);

if((extraFunc == null)){
return null;
} else {
return extraFunc.call(null);
}
});})(vec__43173,extraFunc))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,dataAtom)], null),(function (){var iter__4523__auto__ = ((function (vec__43173,extraFunc){
return (function homepage_cljs$ui$iter__43176(s__43177){
return (new cljs.core.LazySeq(null,((function (vec__43173,extraFunc){
return (function (){
var s__43177__$1 = s__43177;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__43177__$1);
if(temp__5720__auto__){
var s__43177__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43177__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43177__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43179 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43178 = (0);
while(true){
if((i__43178 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__43178);
cljs.core.chunk_append.call(null,b__43179,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__43183 = (i__43178 + (1));
i__43178 = G__43183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43179),homepage_cljs$ui$iter__43176.call(null,cljs.core.chunk_rest.call(null,s__43177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43179),null);
}
} else {
var item = cljs.core.first.call(null,s__43177__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),homepage_cljs$ui$iter__43176.call(null,cljs.core.rest.call(null,s__43177__$2)));
}
} else {
return null;
}
break;
}
});})(vec__43173,extraFunc))
,null,null));
});})(vec__43173,extraFunc))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,itemsAtom));
})()], null);
});
;})(vec__43173,extraFunc))
});

homepage_cljs.ui.custom_select_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_select_input.cljs$lang$applyTo = (function (seq43169){
var G__43170 = cljs.core.first.call(null,seq43169);
var seq43169__$1 = cljs.core.next.call(null,seq43169);
var G__43171 = cljs.core.first.call(null,seq43169__$1);
var seq43169__$2 = cljs.core.next.call(null,seq43169__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43170,G__43171,seq43169__$2);
});

homepage_cljs.ui.custom_text_input = (function homepage_cljs$ui$custom_text_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43192 = arguments.length;
var i__4731__auto___43193 = (0);
while(true){
if((i__4731__auto___43193 < len__4730__auto___43192)){
args__4736__auto__.push((arguments[i__4731__auto___43193]));

var G__43194 = (i__4731__auto___43193 + (1));
i__4731__auto___43193 = G__43194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_text_input.cljs$core$IFn$_invoke$arity$variadic = (function (placeholder,dataAtom,p__43188){
var vec__43189 = p__43188;
var password_QMARK_ = cljs.core.nth.call(null,vec__43189,(0),null);
return ((function (vec__43189,password_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(password_QMARK_)?"password":"text"),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,dataAtom),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__43189,password_QMARK_){
return (function (p1__43184_SHARP_){
return cljs.core.reset_BANG_.call(null,dataAtom,p1__43184_SHARP_.target.value);
});})(vec__43189,password_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[homepage_cljs.style.col_dark_gray,(14),homepage_cljs.style.col_white,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"%"].join(''),(0),homepage_cljs.ui.item_padding,(5),"myFont",homepage_cljs.ui.item_h,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')])], null)], null);
});
;})(vec__43189,password_QMARK_))
});

homepage_cljs.ui.custom_text_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_text_input.cljs$lang$applyTo = (function (seq43185){
var G__43186 = cljs.core.first.call(null,seq43185);
var seq43185__$1 = cljs.core.next.call(null,seq43185);
var G__43187 = cljs.core.first.call(null,seq43185__$1);
var seq43185__$2 = cljs.core.next.call(null,seq43185__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43186,G__43187,seq43185__$2);
});

homepage_cljs.ui.custom_button = (function homepage_cljs$ui$custom_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43202 = arguments.length;
var i__4731__auto___43203 = (0);
while(true){
if((i__4731__auto___43203 < len__4730__auto___43202)){
args__4736__auto__.push((arguments[i__4731__auto___43203]));

var G__43204 = (i__4731__auto___43203 + (1));
i__4731__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_button.cljs$core$IFn$_invoke$arity$variadic = (function (name,func,p__43198){
var vec__43199 = p__43198;
var extraStyle = cljs.core.nth.call(null,vec__43199,(0),null);
var bg_col = cljs.core.nth.call(null,vec__43199,(1),null);
return ((function (vec__43199,extraStyle,bg_col){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),func,new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.background_accent_hover.call(null,bg_col),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[homepage_cljs.style.col_black_full,(16),"800",["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_relative_w),"% + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((homepage_cljs.ui.item_padding * (2))),"px)"].join(''),(0),homepage_cljs.ui.item_padding,"none",(5),"myFont",(homepage_cljs.ui.item_h * (2)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(homepage_cljs.ui.item_v_margin),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - homepage_cljs.ui.item_relative_w) / (2))),"%"].join('')]),extraStyle)], null)], null);
});
;})(vec__43199,extraStyle,bg_col))
});

homepage_cljs.ui.custom_button.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_button.cljs$lang$applyTo = (function (seq43195){
var G__43196 = cljs.core.first.call(null,seq43195);
var seq43195__$1 = cljs.core.next.call(null,seq43195);
var G__43197 = cljs.core.first.call(null,seq43195__$1);
var seq43195__$2 = cljs.core.next.call(null,seq43195__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43196,G__43197,seq43195__$2);
});

homepage_cljs.ui.custom_header = (function homepage_cljs$ui$custom_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43212 = arguments.length;
var i__4731__auto___43213 = (0);
while(true){
if((i__4731__auto___43213 < len__4730__auto___43212)){
args__4736__auto__.push((arguments[i__4731__auto___43213]));

var G__43214 = (i__4731__auto___43213 + (1));
i__4731__auto___43213 = G__43214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return homepage_cljs.ui.custom_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

homepage_cljs.ui.custom_header.cljs$core$IFn$_invoke$arity$variadic = (function (level,label,p__43208){
var vec__43209 = p__43208;
var extraStyle = cljs.core.nth.call(null,vec__43209,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),homepage_cljs.style.text.call(null,homepage_cljs.style.col_white,(24),"800"),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(12),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),extraStyle)], null),label], null);
});

homepage_cljs.ui.custom_header.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
homepage_cljs.ui.custom_header.cljs$lang$applyTo = (function (seq43205){
var G__43206 = cljs.core.first.call(null,seq43205);
var seq43205__$1 = cljs.core.next.call(null,seq43205);
var G__43207 = cljs.core.first.call(null,seq43205__$1);
var seq43205__$2 = cljs.core.next.call(null,seq43205__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43206,G__43207,seq43205__$2);
});


//# sourceMappingURL=ui.js.map?rel=1563618068719
