// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39609){
var map__39610 = p__39609;
var map__39610__$1 = (((((!((map__39610 == null))))?(((((map__39610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39610):map__39610);
var m = map__39610__$1;
var n = cljs.core.get.call(null,map__39610__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39612_39644 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39613_39645 = null;
var count__39614_39646 = (0);
var i__39615_39647 = (0);
while(true){
if((i__39615_39647 < count__39614_39646)){
var f_39648 = cljs.core._nth.call(null,chunk__39613_39645,i__39615_39647);
cljs.core.println.call(null,"  ",f_39648);


var G__39649 = seq__39612_39644;
var G__39650 = chunk__39613_39645;
var G__39651 = count__39614_39646;
var G__39652 = (i__39615_39647 + (1));
seq__39612_39644 = G__39649;
chunk__39613_39645 = G__39650;
count__39614_39646 = G__39651;
i__39615_39647 = G__39652;
continue;
} else {
var temp__5720__auto___39653 = cljs.core.seq.call(null,seq__39612_39644);
if(temp__5720__auto___39653){
var seq__39612_39654__$1 = temp__5720__auto___39653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39612_39654__$1)){
var c__4550__auto___39655 = cljs.core.chunk_first.call(null,seq__39612_39654__$1);
var G__39656 = cljs.core.chunk_rest.call(null,seq__39612_39654__$1);
var G__39657 = c__4550__auto___39655;
var G__39658 = cljs.core.count.call(null,c__4550__auto___39655);
var G__39659 = (0);
seq__39612_39644 = G__39656;
chunk__39613_39645 = G__39657;
count__39614_39646 = G__39658;
i__39615_39647 = G__39659;
continue;
} else {
var f_39660 = cljs.core.first.call(null,seq__39612_39654__$1);
cljs.core.println.call(null,"  ",f_39660);


var G__39661 = cljs.core.next.call(null,seq__39612_39654__$1);
var G__39662 = null;
var G__39663 = (0);
var G__39664 = (0);
seq__39612_39644 = G__39661;
chunk__39613_39645 = G__39662;
count__39614_39646 = G__39663;
i__39615_39647 = G__39664;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39665 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39665);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39665)))?cljs.core.second.call(null,arglists_39665):arglists_39665));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39616_39666 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39617_39667 = null;
var count__39618_39668 = (0);
var i__39619_39669 = (0);
while(true){
if((i__39619_39669 < count__39618_39668)){
var vec__39630_39670 = cljs.core._nth.call(null,chunk__39617_39667,i__39619_39669);
var name_39671 = cljs.core.nth.call(null,vec__39630_39670,(0),null);
var map__39633_39672 = cljs.core.nth.call(null,vec__39630_39670,(1),null);
var map__39633_39673__$1 = (((((!((map__39633_39672 == null))))?(((((map__39633_39672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39633_39672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39633_39672):map__39633_39672);
var doc_39674 = cljs.core.get.call(null,map__39633_39673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39675 = cljs.core.get.call(null,map__39633_39673__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39671);

cljs.core.println.call(null," ",arglists_39675);

if(cljs.core.truth_(doc_39674)){
cljs.core.println.call(null," ",doc_39674);
} else {
}


var G__39676 = seq__39616_39666;
var G__39677 = chunk__39617_39667;
var G__39678 = count__39618_39668;
var G__39679 = (i__39619_39669 + (1));
seq__39616_39666 = G__39676;
chunk__39617_39667 = G__39677;
count__39618_39668 = G__39678;
i__39619_39669 = G__39679;
continue;
} else {
var temp__5720__auto___39680 = cljs.core.seq.call(null,seq__39616_39666);
if(temp__5720__auto___39680){
var seq__39616_39681__$1 = temp__5720__auto___39680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39616_39681__$1)){
var c__4550__auto___39682 = cljs.core.chunk_first.call(null,seq__39616_39681__$1);
var G__39683 = cljs.core.chunk_rest.call(null,seq__39616_39681__$1);
var G__39684 = c__4550__auto___39682;
var G__39685 = cljs.core.count.call(null,c__4550__auto___39682);
var G__39686 = (0);
seq__39616_39666 = G__39683;
chunk__39617_39667 = G__39684;
count__39618_39668 = G__39685;
i__39619_39669 = G__39686;
continue;
} else {
var vec__39635_39687 = cljs.core.first.call(null,seq__39616_39681__$1);
var name_39688 = cljs.core.nth.call(null,vec__39635_39687,(0),null);
var map__39638_39689 = cljs.core.nth.call(null,vec__39635_39687,(1),null);
var map__39638_39690__$1 = (((((!((map__39638_39689 == null))))?(((((map__39638_39689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39638_39689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39638_39689):map__39638_39689);
var doc_39691 = cljs.core.get.call(null,map__39638_39690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39692 = cljs.core.get.call(null,map__39638_39690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39688);

cljs.core.println.call(null," ",arglists_39692);

if(cljs.core.truth_(doc_39691)){
cljs.core.println.call(null," ",doc_39691);
} else {
}


var G__39693 = cljs.core.next.call(null,seq__39616_39681__$1);
var G__39694 = null;
var G__39695 = (0);
var G__39696 = (0);
seq__39616_39666 = G__39693;
chunk__39617_39667 = G__39694;
count__39618_39668 = G__39695;
i__39619_39669 = G__39696;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__39640 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39641 = null;
var count__39642 = (0);
var i__39643 = (0);
while(true){
if((i__39643 < count__39642)){
var role = cljs.core._nth.call(null,chunk__39641,i__39643);
var temp__5720__auto___39697__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39697__$1)){
var spec_39698 = temp__5720__auto___39697__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39698));
} else {
}


var G__39699 = seq__39640;
var G__39700 = chunk__39641;
var G__39701 = count__39642;
var G__39702 = (i__39643 + (1));
seq__39640 = G__39699;
chunk__39641 = G__39700;
count__39642 = G__39701;
i__39643 = G__39702;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__39640);
if(temp__5720__auto____$1){
var seq__39640__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39640__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39640__$1);
var G__39703 = cljs.core.chunk_rest.call(null,seq__39640__$1);
var G__39704 = c__4550__auto__;
var G__39705 = cljs.core.count.call(null,c__4550__auto__);
var G__39706 = (0);
seq__39640 = G__39703;
chunk__39641 = G__39704;
count__39642 = G__39705;
i__39643 = G__39706;
continue;
} else {
var role = cljs.core.first.call(null,seq__39640__$1);
var temp__5720__auto___39707__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39707__$2)){
var spec_39708 = temp__5720__auto___39707__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39708));
} else {
}


var G__39709 = cljs.core.next.call(null,seq__39640__$1);
var G__39710 = null;
var G__39711 = (0);
var G__39712 = (0);
seq__39640 = G__39709;
chunk__39641 = G__39710;
count__39642 = G__39711;
i__39643 = G__39712;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39713 = cljs.core.conj.call(null,via,t);
var G__39714 = cljs.core.ex_cause.call(null,t);
via = G__39713;
t = G__39714;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39717 = datafied_throwable;
var map__39717__$1 = (((((!((map__39717 == null))))?(((((map__39717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39717):map__39717);
var via = cljs.core.get.call(null,map__39717__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39717__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39717__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39718 = cljs.core.last.call(null,via);
var map__39718__$1 = (((((!((map__39718 == null))))?(((((map__39718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39718):map__39718);
var type = cljs.core.get.call(null,map__39718__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39718__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39718__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39719 = data;
var map__39719__$1 = (((((!((map__39719 == null))))?(((((map__39719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39719):map__39719);
var problems = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39720 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39720__$1 = (((((!((map__39720 == null))))?(((((map__39720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39720):map__39720);
var top_data = map__39720__$1;
var source = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39725 = phase;
var G__39725__$1 = (((G__39725 instanceof cljs.core.Keyword))?G__39725.fqn:null);
switch (G__39725__$1) {
case "read-source":
var map__39726 = data;
var map__39726__$1 = (((((!((map__39726 == null))))?(((((map__39726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39726):map__39726);
var line = cljs.core.get.call(null,map__39726__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39726__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39728 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39728__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39728,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39728);
var G__39728__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39728__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39728__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39728__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39728__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39729 = top_data;
var G__39729__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39729,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39729);
var G__39729__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39729__$1);
var G__39729__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39729__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39729__$2);
var G__39729__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39729__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39729__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39729__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39729__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39730 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39730,(0),null);
var method = cljs.core.nth.call(null,vec__39730,(1),null);
var file = cljs.core.nth.call(null,vec__39730,(2),null);
var line = cljs.core.nth.call(null,vec__39730,(3),null);
var G__39733 = top_data;
var G__39733__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39733,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39733);
var G__39733__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39733__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39733__$1);
var G__39733__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__39733__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39733__$2);
var G__39733__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39733__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39733__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39733__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39733__$4;
}

break;
case "execution":
var vec__39734 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39734,(0),null);
var method = cljs.core.nth.call(null,vec__39734,(1),null);
var file = cljs.core.nth.call(null,vec__39734,(2),null);
var line = cljs.core.nth.call(null,vec__39734,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__39734,source__$1,method,file,line,G__39725,G__39725__$1,map__39717,map__39717__$1,via,trace,phase,map__39718,map__39718__$1,type,message,data,map__39719,map__39719__$1,problems,fn,caller,map__39720,map__39720__$1,top_data,source){
return (function (p1__39716_SHARP_){
var or__4131__auto__ = (p1__39716_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39716_SHARP_);
}
});})(vec__39734,source__$1,method,file,line,G__39725,G__39725__$1,map__39717,map__39717__$1,via,trace,phase,map__39718,map__39718__$1,type,message,data,map__39719,map__39719__$1,problems,fn,caller,map__39720,map__39720__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__39737 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39737__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39737,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39737);
var G__39737__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39737__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39737__$1);
var G__39737__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__39737__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39737__$2);
var G__39737__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39737__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39737__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39737__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39737__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39725__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39741){
var map__39742 = p__39741;
var map__39742__$1 = (((((!((map__39742 == null))))?(((((map__39742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39742):map__39742);
var triage_data = map__39742__$1;
var phase = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39744 = phase;
var G__39744__$1 = (((G__39744 instanceof cljs.core.Keyword))?G__39744.fqn:null);
switch (G__39744__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39745_39754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39746_39755 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39747_39756 = true;
var _STAR_print_fn_STAR__temp_val__39748_39757 = ((function (_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39747_39756;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39748_39757;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,_STAR_print_fn_STAR__temp_val__39748_39757,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,_STAR_print_fn_STAR__temp_val__39748_39757,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39739_SHARP_){
return cljs.core.dissoc.call(null,p1__39739_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,_STAR_print_fn_STAR__temp_val__39748_39757,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39745_39754,_STAR_print_fn_STAR__orig_val__39746_39755,_STAR_print_newline_STAR__temp_val__39747_39756,_STAR_print_fn_STAR__temp_val__39748_39757,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39746_39755;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39745_39754;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39749_39758 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39750_39759 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39751_39760 = true;
var _STAR_print_fn_STAR__temp_val__39752_39761 = ((function (_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39751_39760;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39752_39761;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,_STAR_print_fn_STAR__temp_val__39752_39761,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,_STAR_print_fn_STAR__temp_val__39752_39761,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39740_SHARP_){
return cljs.core.dissoc.call(null,p1__39740_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,_STAR_print_fn_STAR__temp_val__39752_39761,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39749_39758,_STAR_print_fn_STAR__orig_val__39750_39759,_STAR_print_newline_STAR__temp_val__39751_39760,_STAR_print_fn_STAR__temp_val__39752_39761,sb__4661__auto__,G__39744,G__39744__$1,loc,class_name,simple_class,cause_type,format,map__39742,map__39742__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39750_39759;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39749_39758;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39744__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1563617066771
