// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('homepage_cljs.style');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljss.core');
goog.require('homepage_cljs.utils');
homepage_cljs.style.fg1 = "#000";
homepage_cljs.style.fg2 = "#333";
homepage_cljs.style.bg1 = "#f0f0f010";
homepage_cljs.style.bg2 = "#f0f0f040";
homepage_cljs.style.bg3 = "#d0d0d0f0";
homepage_cljs.style.col_white = "#f8f4f0";
homepage_cljs.style.col_black = "#000408e0";
homepage_cljs.style.col_black_full = "#000408";
homepage_cljs.style.col_dark_gray = "#303030";
homepage_cljs.style.col_medium_gray = "#252228";
var rand_hue_29781 = cljs.core.rand_int((359));
homepage_cljs.style.col_accent1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rand_hue_29781),", 30%, 70%)"].join(''));

homepage_cljs.style.col_accent2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rand_hue_29781 + (80))),", 30%, 70%)"].join(''));
cljss.core.css(1282347217,["@font-face{","font-family:\"myFont\";src:url(\"css/fonts/FiraCode-Regular.woff\")"," ","format(\"woff\");","}"].join(''),cljs.core.PersistentVector.EMPTY);
cljss.core.css(-2095074843,["@font-face{","font-family:\"myFont\";font-style:bold;font-weight:800;src:url(\"css/fonts/FiraCode-Medium.woff\")"," ","format(\"woff\");","}"].join(''),cljs.core.PersistentVector.EMPTY);
homepage_cljs.style.background = (function homepage_cljs$style$background(){
return cljss.core.css("homepage-cljs_style__background",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__background{border-style:solid;border-width:0px;transition-timing-function:ease-in-out;transition-property:box-shadow;border-radius:2px;transition-duration:0.2s;box-shadow:var(--var-homepage-cljs_style__background-0);background-color:var(--var-homepage-cljs_style__background-1);}",".homepage-cljs_style__background:hover{box-shadow:var(--var-homepage-cljs_style__background-2);}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-0",["4px 4px 20px -10px ",homepage_cljs.style.col_black_full].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-1",homepage_cljs.style.col_black], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-2",["8px 8px 24px -10px ",homepage_cljs.style.col_black_full].join('')], null)], null));
});
homepage_cljs.style.text = (function homepage_cljs$style$text(col,size,weight){
return cljss.core.css("homepage-cljs_style__text",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__text{font-size:var(--var-homepage-cljs_style__text-0);color:var(--var-homepage-cljs_style__text-1);font-weight:var(--var-homepage-cljs_style__text-2);}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"pt"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-1",col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-2",weight], null)], null));
});
homepage_cljs.style.text_link = (function homepage_cljs$style$text_link(col,size,weight){
return cljss.core.css("homepage-cljs_style__text-link",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__text-link{text-decoration:none;transition-property:color;transition-duration:0.25s;transition-timing-function:ease-in-out;font-size:var(--var-homepage-cljs_style__text-link-0);color:var(--var-homepage-cljs_style__text-link-1);font-weight:var(--var-homepage-cljs_style__text-link-2);}",".homepage-cljs_style__text-link:hover{text-decoration:underline;color:var(--var-homepage-cljs_style__text-link-3);}"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-link-0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"pt"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-link-1",col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-link-2",weight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-link-3",cljs.core.deref(homepage_cljs.style.col_accent1)], null)], null));
});
homepage_cljs.style.text_button = (function homepage_cljs$style$text_button(col,size,weight){
return cljss.core.css("homepage-cljs_style__text-button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__text-button{background-color:transparent;transition-timing-function:ease-in-out;text-decoration:none;transition-property:color;border:none;transition-duration:0.25s;font-family:myFont;color:var(--var-homepage-cljs_style__text-button-0);font-size:var(--var-homepage-cljs_style__text-button-1);font-weight:var(--var-homepage-cljs_style__text-button-2);}",".homepage-cljs_style__text-button:hover{text-decoration:underline;color:var(--var-homepage-cljs_style__text-button-3);}"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-button-0",col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-button-1",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"pt"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-button-2",weight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__text-button-3",cljs.core.deref(homepage_cljs.style.col_accent1)], null)], null));
});
homepage_cljs.style.setting_window = (function homepage_cljs$style$setting_window(){
return cljss.core.css("homepage-cljs_style__setting-window",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__setting-window{position:fixed;height:100%;overflow-y:scroll;top:0;transition-property:left;transition-duration:0.25s;transition-timing-function:ease-in-out;background-color:var(--var-homepage-cljs_style__setting-window-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__setting-window-0",[homepage_cljs.style.col_black_full,"f0"].join('')], null)], null));
});
homepage_cljs.style.background_accent_hover = (function homepage_cljs$style$background_accent_hover(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29787 = arguments.length;
var i__4731__auto___29788 = (0);
while(true){
if((i__4731__auto___29788 < len__4730__auto___29787)){
args__4736__auto__.push((arguments[i__4731__auto___29788]));

var G__29789 = (i__4731__auto___29788 + (1));
i__4731__auto___29788 = G__29789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return homepage_cljs.style.background_accent_hover.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

homepage_cljs.style.background_accent_hover.cljs$core$IFn$_invoke$arity$variadic = (function (p__29783){
var vec__29784 = p__29783;
var bg_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29784,(0),null);
return cljss.core.css("homepage-cljs_style__background-accent-hover",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".homepage-cljs_style__background-accent-hover{transition-property:background box-shadow;transition-duration:0.25s;transition-timing-function:ease-in-out;background-color:var(--var-homepage-cljs_style__background-accent-hover-0);}",".homepage-cljs_style__background-accent-hover:hover{box-shadow:var(--var-homepage-cljs_style__background-accent-hover-1);background-color:var(--var-homepage-cljs_style__background-accent-hover-2);}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-accent-hover-0",(((bg_col == null))?cljs.core.deref(homepage_cljs.style.col_accent2):bg_col)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-accent-hover-1",["0px 0px 1px 1px ",homepage_cljs.style.col_black_full].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-homepage-cljs_style__background-accent-hover-2",cljs.core.deref(homepage_cljs.style.col_accent1)], null)], null));
});

homepage_cljs.style.background_accent_hover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
homepage_cljs.style.background_accent_hover.cljs$lang$applyTo = (function (seq29782){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29782));
});

