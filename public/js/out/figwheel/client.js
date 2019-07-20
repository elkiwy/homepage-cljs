// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e39956){if((e39956 instanceof Error)){
var e = e39956;
return "Error: Unable to stringify";
} else {
throw e39956;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39959 = arguments.length;
switch (G__39959) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39957_SHARP_){
if(typeof p1__39957_SHARP_ === 'string'){
return p1__39957_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39957_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39962 = arguments.length;
var i__4731__auto___39963 = (0);
while(true){
if((i__4731__auto___39963 < len__4730__auto___39962)){
args__4736__auto__.push((arguments[i__4731__auto___39963]));

var G__39964 = (i__4731__auto___39963 + (1));
i__4731__auto___39963 = G__39964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39961){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39961));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39966 = arguments.length;
var i__4731__auto___39967 = (0);
while(true){
if((i__4731__auto___39967 < len__4730__auto___39966)){
args__4736__auto__.push((arguments[i__4731__auto___39967]));

var G__39968 = (i__4731__auto___39967 + (1));
i__4731__auto___39967 = G__39968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39965){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39965));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39969){
var map__39970 = p__39969;
var map__39970__$1 = (((((!((map__39970 == null))))?(((((map__39970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39970):map__39970);
var message = cljs.core.get.call(null,map__39970__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39970__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30304__auto___40049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___40049,ch){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___40049,ch){
return (function (state_40021){
var state_val_40022 = (state_40021[(1)]);
if((state_val_40022 === (7))){
var inst_40017 = (state_40021[(2)]);
var state_40021__$1 = state_40021;
var statearr_40023_40050 = state_40021__$1;
(statearr_40023_40050[(2)] = inst_40017);

(statearr_40023_40050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (1))){
var state_40021__$1 = state_40021;
var statearr_40024_40051 = state_40021__$1;
(statearr_40024_40051[(2)] = null);

(statearr_40024_40051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (4))){
var inst_39974 = (state_40021[(7)]);
var inst_39974__$1 = (state_40021[(2)]);
var state_40021__$1 = (function (){var statearr_40025 = state_40021;
(statearr_40025[(7)] = inst_39974__$1);

return statearr_40025;
})();
if(cljs.core.truth_(inst_39974__$1)){
var statearr_40026_40052 = state_40021__$1;
(statearr_40026_40052[(1)] = (5));

} else {
var statearr_40027_40053 = state_40021__$1;
(statearr_40027_40053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (15))){
var inst_39981 = (state_40021[(8)]);
var inst_39996 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39981);
var inst_39997 = cljs.core.first.call(null,inst_39996);
var inst_39998 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39997);
var inst_39999 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39998)].join('');
var inst_40000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39999);
var state_40021__$1 = state_40021;
var statearr_40028_40054 = state_40021__$1;
(statearr_40028_40054[(2)] = inst_40000);

(statearr_40028_40054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (13))){
var inst_40005 = (state_40021[(2)]);
var state_40021__$1 = state_40021;
var statearr_40029_40055 = state_40021__$1;
(statearr_40029_40055[(2)] = inst_40005);

(statearr_40029_40055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (6))){
var state_40021__$1 = state_40021;
var statearr_40030_40056 = state_40021__$1;
(statearr_40030_40056[(2)] = null);

(statearr_40030_40056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (17))){
var inst_40003 = (state_40021[(2)]);
var state_40021__$1 = state_40021;
var statearr_40031_40057 = state_40021__$1;
(statearr_40031_40057[(2)] = inst_40003);

(statearr_40031_40057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (3))){
var inst_40019 = (state_40021[(2)]);
var state_40021__$1 = state_40021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40021__$1,inst_40019);
} else {
if((state_val_40022 === (12))){
var inst_39980 = (state_40021[(9)]);
var inst_39994 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39980,opts);
var state_40021__$1 = state_40021;
if(inst_39994){
var statearr_40032_40058 = state_40021__$1;
(statearr_40032_40058[(1)] = (15));

} else {
var statearr_40033_40059 = state_40021__$1;
(statearr_40033_40059[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (2))){
var state_40021__$1 = state_40021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40021__$1,(4),ch);
} else {
if((state_val_40022 === (11))){
var inst_39981 = (state_40021[(8)]);
var inst_39986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39987 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39981);
var inst_39988 = cljs.core.async.timeout.call(null,(1000));
var inst_39989 = [inst_39987,inst_39988];
var inst_39990 = (new cljs.core.PersistentVector(null,2,(5),inst_39986,inst_39989,null));
var state_40021__$1 = state_40021;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40021__$1,(14),inst_39990);
} else {
if((state_val_40022 === (9))){
var inst_39981 = (state_40021[(8)]);
var inst_40007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40008 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39981);
var inst_40009 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40008);
var inst_40010 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40009)].join('');
var inst_40011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40010);
var state_40021__$1 = (function (){var statearr_40034 = state_40021;
(statearr_40034[(10)] = inst_40007);

return statearr_40034;
})();
var statearr_40035_40060 = state_40021__$1;
(statearr_40035_40060[(2)] = inst_40011);

(statearr_40035_40060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (5))){
var inst_39974 = (state_40021[(7)]);
var inst_39976 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39977 = (new cljs.core.PersistentArrayMap(null,2,inst_39976,null));
var inst_39978 = (new cljs.core.PersistentHashSet(null,inst_39977,null));
var inst_39979 = figwheel.client.focus_msgs.call(null,inst_39978,inst_39974);
var inst_39980 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39979);
var inst_39981 = cljs.core.first.call(null,inst_39979);
var inst_39982 = figwheel.client.autoload_QMARK_.call(null);
var state_40021__$1 = (function (){var statearr_40036 = state_40021;
(statearr_40036[(9)] = inst_39980);

(statearr_40036[(8)] = inst_39981);

return statearr_40036;
})();
if(cljs.core.truth_(inst_39982)){
var statearr_40037_40061 = state_40021__$1;
(statearr_40037_40061[(1)] = (8));

} else {
var statearr_40038_40062 = state_40021__$1;
(statearr_40038_40062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (14))){
var inst_39992 = (state_40021[(2)]);
var state_40021__$1 = state_40021;
var statearr_40039_40063 = state_40021__$1;
(statearr_40039_40063[(2)] = inst_39992);

(statearr_40039_40063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (16))){
var state_40021__$1 = state_40021;
var statearr_40040_40064 = state_40021__$1;
(statearr_40040_40064[(2)] = null);

(statearr_40040_40064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (10))){
var inst_40013 = (state_40021[(2)]);
var state_40021__$1 = (function (){var statearr_40041 = state_40021;
(statearr_40041[(11)] = inst_40013);

return statearr_40041;
})();
var statearr_40042_40065 = state_40021__$1;
(statearr_40042_40065[(2)] = null);

(statearr_40042_40065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40022 === (8))){
var inst_39980 = (state_40021[(9)]);
var inst_39984 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39980,opts);
var state_40021__$1 = state_40021;
if(cljs.core.truth_(inst_39984)){
var statearr_40043_40066 = state_40021__$1;
(statearr_40043_40066[(1)] = (11));

} else {
var statearr_40044_40067 = state_40021__$1;
(statearr_40044_40067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto___40049,ch))
;
return ((function (switch__30209__auto__,c__30304__auto___40049,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____0 = (function (){
var statearr_40045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40045[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__);

(statearr_40045[(1)] = (1));

return statearr_40045;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____1 = (function (state_40021){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_40021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e40046){if((e40046 instanceof Object)){
var ex__30213__auto__ = e40046;
var statearr_40047_40068 = state_40021;
(statearr_40047_40068[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40069 = state_40021;
state_40021 = G__40069;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__ = function(state_40021){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____1.call(this,state_40021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30210__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___40049,ch))
})();
var state__30306__auto__ = (function (){var statearr_40048 = f__30305__auto__.call(null);
(statearr_40048[(6)] = c__30304__auto___40049);

return statearr_40048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___40049,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40070_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40070_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40076 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40076){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40074 = true;
var _STAR_print_fn_STAR__temp_val__40075 = ((function (_STAR_print_newline_STAR__orig_val__40072,_STAR_print_fn_STAR__orig_val__40073,_STAR_print_newline_STAR__temp_val__40074,sb,base_path_40076){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__40072,_STAR_print_fn_STAR__orig_val__40073,_STAR_print_newline_STAR__temp_val__40074,sb,base_path_40076))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40074;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40075;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40073;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40072;
}}catch (e40071){if((e40071 instanceof Error)){
var e = e40071;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40076], null));
} else {
var e = e40071;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40076))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40077){
var map__40078 = p__40077;
var map__40078__$1 = (((((!((map__40078 == null))))?(((((map__40078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40078):map__40078);
var opts = map__40078__$1;
var build_id = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40078,map__40078__$1,opts,build_id){
return (function (p__40080){
var vec__40081 = p__40080;
var seq__40082 = cljs.core.seq.call(null,vec__40081);
var first__40083 = cljs.core.first.call(null,seq__40082);
var seq__40082__$1 = cljs.core.next.call(null,seq__40082);
var map__40084 = first__40083;
var map__40084__$1 = (((((!((map__40084 == null))))?(((((map__40084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40084):map__40084);
var msg = map__40084__$1;
var msg_name = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40082__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40081,seq__40082,first__40083,seq__40082__$1,map__40084,map__40084__$1,msg,msg_name,_,map__40078,map__40078__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40081,seq__40082,first__40083,seq__40082__$1,map__40084,map__40084__$1,msg,msg_name,_,map__40078,map__40078__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40078,map__40078__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40086){
var vec__40087 = p__40086;
var seq__40088 = cljs.core.seq.call(null,vec__40087);
var first__40089 = cljs.core.first.call(null,seq__40088);
var seq__40088__$1 = cljs.core.next.call(null,seq__40088);
var map__40090 = first__40089;
var map__40090__$1 = (((((!((map__40090 == null))))?(((((map__40090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40090):map__40090);
var msg = map__40090__$1;
var msg_name = cljs.core.get.call(null,map__40090__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40088__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40092){
var map__40093 = p__40092;
var map__40093__$1 = (((((!((map__40093 == null))))?(((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40093):map__40093);
var on_compile_warning = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40093,map__40093__$1,on_compile_warning,on_compile_fail){
return (function (p__40095){
var vec__40096 = p__40095;
var seq__40097 = cljs.core.seq.call(null,vec__40096);
var first__40098 = cljs.core.first.call(null,seq__40097);
var seq__40097__$1 = cljs.core.next.call(null,seq__40097);
var map__40099 = first__40098;
var map__40099__$1 = (((((!((map__40099 == null))))?(((((map__40099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40099):map__40099);
var msg = map__40099__$1;
var msg_name = cljs.core.get.call(null,map__40099__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40097__$1;
var pred__40101 = cljs.core._EQ_;
var expr__40102 = msg_name;
if(cljs.core.truth_(pred__40101.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40102))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40101.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40102))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40093,map__40093__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__,msg_hist,msg_names,msg){
return (function (state_40191){
var state_val_40192 = (state_40191[(1)]);
if((state_val_40192 === (7))){
var inst_40111 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
if(cljs.core.truth_(inst_40111)){
var statearr_40193_40240 = state_40191__$1;
(statearr_40193_40240[(1)] = (8));

} else {
var statearr_40194_40241 = state_40191__$1;
(statearr_40194_40241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (20))){
var inst_40185 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40195_40242 = state_40191__$1;
(statearr_40195_40242[(2)] = inst_40185);

(statearr_40195_40242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (27))){
var inst_40181 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40196_40243 = state_40191__$1;
(statearr_40196_40243[(2)] = inst_40181);

(statearr_40196_40243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (1))){
var inst_40104 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40191__$1 = state_40191;
if(cljs.core.truth_(inst_40104)){
var statearr_40197_40244 = state_40191__$1;
(statearr_40197_40244[(1)] = (2));

} else {
var statearr_40198_40245 = state_40191__$1;
(statearr_40198_40245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (24))){
var inst_40183 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40199_40246 = state_40191__$1;
(statearr_40199_40246[(2)] = inst_40183);

(statearr_40199_40246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (4))){
var inst_40189 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40191__$1,inst_40189);
} else {
if((state_val_40192 === (15))){
var inst_40187 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40200_40247 = state_40191__$1;
(statearr_40200_40247[(2)] = inst_40187);

(statearr_40200_40247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (21))){
var inst_40140 = (state_40191[(2)]);
var inst_40141 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40142 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40141);
var state_40191__$1 = (function (){var statearr_40201 = state_40191;
(statearr_40201[(7)] = inst_40140);

return statearr_40201;
})();
var statearr_40202_40248 = state_40191__$1;
(statearr_40202_40248[(2)] = inst_40142);

(statearr_40202_40248[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (31))){
var inst_40170 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40170){
var statearr_40203_40249 = state_40191__$1;
(statearr_40203_40249[(1)] = (34));

} else {
var statearr_40204_40250 = state_40191__$1;
(statearr_40204_40250[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (32))){
var inst_40179 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40205_40251 = state_40191__$1;
(statearr_40205_40251[(2)] = inst_40179);

(statearr_40205_40251[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (33))){
var inst_40166 = (state_40191[(2)]);
var inst_40167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40168 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40167);
var state_40191__$1 = (function (){var statearr_40206 = state_40191;
(statearr_40206[(8)] = inst_40166);

return statearr_40206;
})();
var statearr_40207_40252 = state_40191__$1;
(statearr_40207_40252[(2)] = inst_40168);

(statearr_40207_40252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (13))){
var inst_40125 = figwheel.client.heads_up.clear.call(null);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(16),inst_40125);
} else {
if((state_val_40192 === (22))){
var inst_40146 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40147 = figwheel.client.heads_up.append_warning_message.call(null,inst_40146);
var state_40191__$1 = state_40191;
var statearr_40208_40253 = state_40191__$1;
(statearr_40208_40253[(2)] = inst_40147);

(statearr_40208_40253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (36))){
var inst_40177 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40209_40254 = state_40191__$1;
(statearr_40209_40254[(2)] = inst_40177);

(statearr_40209_40254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (29))){
var inst_40157 = (state_40191[(2)]);
var inst_40158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40159 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40158);
var state_40191__$1 = (function (){var statearr_40210 = state_40191;
(statearr_40210[(9)] = inst_40157);

return statearr_40210;
})();
var statearr_40211_40255 = state_40191__$1;
(statearr_40211_40255[(2)] = inst_40159);

(statearr_40211_40255[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (6))){
var inst_40106 = (state_40191[(10)]);
var state_40191__$1 = state_40191;
var statearr_40212_40256 = state_40191__$1;
(statearr_40212_40256[(2)] = inst_40106);

(statearr_40212_40256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (28))){
var inst_40153 = (state_40191[(2)]);
var inst_40154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40155 = figwheel.client.heads_up.display_warning.call(null,inst_40154);
var state_40191__$1 = (function (){var statearr_40213 = state_40191;
(statearr_40213[(11)] = inst_40153);

return statearr_40213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(29),inst_40155);
} else {
if((state_val_40192 === (25))){
var inst_40151 = figwheel.client.heads_up.clear.call(null);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(28),inst_40151);
} else {
if((state_val_40192 === (34))){
var inst_40172 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(37),inst_40172);
} else {
if((state_val_40192 === (17))){
var inst_40131 = (state_40191[(2)]);
var inst_40132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40133 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40132);
var state_40191__$1 = (function (){var statearr_40214 = state_40191;
(statearr_40214[(12)] = inst_40131);

return statearr_40214;
})();
var statearr_40215_40257 = state_40191__$1;
(statearr_40215_40257[(2)] = inst_40133);

(statearr_40215_40257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (3))){
var inst_40123 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40123){
var statearr_40216_40258 = state_40191__$1;
(statearr_40216_40258[(1)] = (13));

} else {
var statearr_40217_40259 = state_40191__$1;
(statearr_40217_40259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (12))){
var inst_40119 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40218_40260 = state_40191__$1;
(statearr_40218_40260[(2)] = inst_40119);

(statearr_40218_40260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (2))){
var inst_40106 = (state_40191[(10)]);
var inst_40106__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40191__$1 = (function (){var statearr_40219 = state_40191;
(statearr_40219[(10)] = inst_40106__$1);

return statearr_40219;
})();
if(cljs.core.truth_(inst_40106__$1)){
var statearr_40220_40261 = state_40191__$1;
(statearr_40220_40261[(1)] = (5));

} else {
var statearr_40221_40262 = state_40191__$1;
(statearr_40221_40262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (23))){
var inst_40149 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40149){
var statearr_40222_40263 = state_40191__$1;
(statearr_40222_40263[(1)] = (25));

} else {
var statearr_40223_40264 = state_40191__$1;
(statearr_40223_40264[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (35))){
var state_40191__$1 = state_40191;
var statearr_40224_40265 = state_40191__$1;
(statearr_40224_40265[(2)] = null);

(statearr_40224_40265[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (19))){
var inst_40144 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40144){
var statearr_40225_40266 = state_40191__$1;
(statearr_40225_40266[(1)] = (22));

} else {
var statearr_40226_40267 = state_40191__$1;
(statearr_40226_40267[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (11))){
var inst_40115 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40227_40268 = state_40191__$1;
(statearr_40227_40268[(2)] = inst_40115);

(statearr_40227_40268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (9))){
var inst_40117 = figwheel.client.heads_up.clear.call(null);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(12),inst_40117);
} else {
if((state_val_40192 === (5))){
var inst_40108 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40191__$1 = state_40191;
var statearr_40228_40269 = state_40191__$1;
(statearr_40228_40269[(2)] = inst_40108);

(statearr_40228_40269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (14))){
var inst_40135 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40135){
var statearr_40229_40270 = state_40191__$1;
(statearr_40229_40270[(1)] = (18));

} else {
var statearr_40230_40271 = state_40191__$1;
(statearr_40230_40271[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (26))){
var inst_40161 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40191__$1 = state_40191;
if(inst_40161){
var statearr_40231_40272 = state_40191__$1;
(statearr_40231_40272[(1)] = (30));

} else {
var statearr_40232_40273 = state_40191__$1;
(statearr_40232_40273[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (16))){
var inst_40127 = (state_40191[(2)]);
var inst_40128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40129 = figwheel.client.heads_up.display_exception.call(null,inst_40128);
var state_40191__$1 = (function (){var statearr_40233 = state_40191;
(statearr_40233[(13)] = inst_40127);

return statearr_40233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(17),inst_40129);
} else {
if((state_val_40192 === (30))){
var inst_40163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40164 = figwheel.client.heads_up.display_warning.call(null,inst_40163);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(33),inst_40164);
} else {
if((state_val_40192 === (10))){
var inst_40121 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40234_40274 = state_40191__$1;
(statearr_40234_40274[(2)] = inst_40121);

(statearr_40234_40274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (18))){
var inst_40137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40138 = figwheel.client.heads_up.display_exception.call(null,inst_40137);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(21),inst_40138);
} else {
if((state_val_40192 === (37))){
var inst_40174 = (state_40191[(2)]);
var state_40191__$1 = state_40191;
var statearr_40235_40275 = state_40191__$1;
(statearr_40235_40275[(2)] = inst_40174);

(statearr_40235_40275[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40192 === (8))){
var inst_40113 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40191__$1 = state_40191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40191__$1,(11),inst_40113);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30304__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30209__auto__,c__30304__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____0 = (function (){
var statearr_40236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40236[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__);

(statearr_40236[(1)] = (1));

return statearr_40236;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____1 = (function (state_40191){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_40191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e40237){if((e40237 instanceof Object)){
var ex__30213__auto__ = e40237;
var statearr_40238_40276 = state_40191;
(statearr_40238_40276[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40277 = state_40191;
state_40191 = G__40277;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__ = function(state_40191){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____1.call(this,state_40191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__,msg_hist,msg_names,msg))
})();
var state__30306__auto__ = (function (){var statearr_40239 = f__30305__auto__.call(null);
(statearr_40239[(6)] = c__30304__auto__);

return statearr_40239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__,msg_hist,msg_names,msg))
);

return c__30304__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30304__auto___40306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___40306,ch){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___40306,ch){
return (function (state_40292){
var state_val_40293 = (state_40292[(1)]);
if((state_val_40293 === (1))){
var state_40292__$1 = state_40292;
var statearr_40294_40307 = state_40292__$1;
(statearr_40294_40307[(2)] = null);

(statearr_40294_40307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (2))){
var state_40292__$1 = state_40292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40292__$1,(4),ch);
} else {
if((state_val_40293 === (3))){
var inst_40290 = (state_40292[(2)]);
var state_40292__$1 = state_40292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40292__$1,inst_40290);
} else {
if((state_val_40293 === (4))){
var inst_40280 = (state_40292[(7)]);
var inst_40280__$1 = (state_40292[(2)]);
var state_40292__$1 = (function (){var statearr_40295 = state_40292;
(statearr_40295[(7)] = inst_40280__$1);

return statearr_40295;
})();
if(cljs.core.truth_(inst_40280__$1)){
var statearr_40296_40308 = state_40292__$1;
(statearr_40296_40308[(1)] = (5));

} else {
var statearr_40297_40309 = state_40292__$1;
(statearr_40297_40309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (5))){
var inst_40280 = (state_40292[(7)]);
var inst_40282 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40280);
var state_40292__$1 = state_40292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40292__$1,(8),inst_40282);
} else {
if((state_val_40293 === (6))){
var state_40292__$1 = state_40292;
var statearr_40298_40310 = state_40292__$1;
(statearr_40298_40310[(2)] = null);

(statearr_40298_40310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (7))){
var inst_40288 = (state_40292[(2)]);
var state_40292__$1 = state_40292;
var statearr_40299_40311 = state_40292__$1;
(statearr_40299_40311[(2)] = inst_40288);

(statearr_40299_40311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (8))){
var inst_40284 = (state_40292[(2)]);
var state_40292__$1 = (function (){var statearr_40300 = state_40292;
(statearr_40300[(8)] = inst_40284);

return statearr_40300;
})();
var statearr_40301_40312 = state_40292__$1;
(statearr_40301_40312[(2)] = null);

(statearr_40301_40312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30304__auto___40306,ch))
;
return ((function (switch__30209__auto__,c__30304__auto___40306,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30210__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30210__auto____0 = (function (){
var statearr_40302 = [null,null,null,null,null,null,null,null,null];
(statearr_40302[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30210__auto__);

(statearr_40302[(1)] = (1));

return statearr_40302;
});
var figwheel$client$heads_up_plugin_$_state_machine__30210__auto____1 = (function (state_40292){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_40292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e40303){if((e40303 instanceof Object)){
var ex__30213__auto__ = e40303;
var statearr_40304_40313 = state_40292;
(statearr_40304_40313[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40314 = state_40292;
state_40292 = G__40314;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30210__auto__ = function(state_40292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30210__auto____1.call(this,state_40292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30210__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30210__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___40306,ch))
})();
var state__30306__auto__ = (function (){var statearr_40305 = f__30305__auto__.call(null);
(statearr_40305[(6)] = c__30304__auto___40306);

return statearr_40305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___40306,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_40320){
var state_val_40321 = (state_40320[(1)]);
if((state_val_40321 === (1))){
var inst_40315 = cljs.core.async.timeout.call(null,(3000));
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(2),inst_40315);
} else {
if((state_val_40321 === (2))){
var inst_40317 = (state_40320[(2)]);
var inst_40318 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40320__$1 = (function (){var statearr_40322 = state_40320;
(statearr_40322[(7)] = inst_40317);

return statearr_40322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40320__$1,inst_40318);
} else {
return null;
}
}
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____0 = (function (){
var statearr_40323 = [null,null,null,null,null,null,null,null];
(statearr_40323[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__);

(statearr_40323[(1)] = (1));

return statearr_40323;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____1 = (function (state_40320){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_40320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e40324){if((e40324 instanceof Object)){
var ex__30213__auto__ = e40324;
var statearr_40325_40327 = state_40320;
(statearr_40325_40327[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40328 = state_40320;
state_40320 = G__40328;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__ = function(state_40320){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____1.call(this,state_40320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30210__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_40326 = f__30305__auto__.call(null);
(statearr_40326[(6)] = c__30304__auto__);

return statearr_40326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__,figwheel_version,temp__5720__auto__){
return (function (state_40335){
var state_val_40336 = (state_40335[(1)]);
if((state_val_40336 === (1))){
var inst_40329 = cljs.core.async.timeout.call(null,(2000));
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40335__$1,(2),inst_40329);
} else {
if((state_val_40336 === (2))){
var inst_40331 = (state_40335[(2)]);
var inst_40332 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40333 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40332);
var state_40335__$1 = (function (){var statearr_40337 = state_40335;
(statearr_40337[(7)] = inst_40331);

return statearr_40337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40335__$1,inst_40333);
} else {
return null;
}
}
});})(c__30304__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____0 = (function (){
var statearr_40338 = [null,null,null,null,null,null,null,null];
(statearr_40338[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__);

(statearr_40338[(1)] = (1));

return statearr_40338;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____1 = (function (state_40335){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_40335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e40339){if((e40339 instanceof Object)){
var ex__30213__auto__ = e40339;
var statearr_40340_40342 = state_40335;
(statearr_40340_40342[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40343 = state_40335;
state_40335 = G__40343;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__ = function(state_40335){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____1.call(this,state_40335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__,figwheel_version,temp__5720__auto__))
})();
var state__30306__auto__ = (function (){var statearr_40341 = f__30305__auto__.call(null);
(statearr_40341[(6)] = c__30304__auto__);

return statearr_40341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__,figwheel_version,temp__5720__auto__))
);

return c__30304__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40344){
var map__40345 = p__40344;
var map__40345__$1 = (((((!((map__40345 == null))))?(((((map__40345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40345):map__40345);
var file = cljs.core.get.call(null,map__40345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40345__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40347 = "";
var G__40347__$1 = (cljs.core.truth_(file)?[G__40347,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40347);
var G__40347__$2 = (cljs.core.truth_(line)?[G__40347__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40347__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__40347__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40347__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40348){
var map__40349 = p__40348;
var map__40349__$1 = (((((!((map__40349 == null))))?(((((map__40349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40349):map__40349);
var ed = map__40349__$1;
var exception_data = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_40352 = (function (){var G__40351 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40351)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__40351;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_40352);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40353){
var map__40354 = p__40353;
var map__40354__$1 = (((((!((map__40354 == null))))?(((((map__40354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40354):map__40354);
var w = map__40354__$1;
var message = cljs.core.get.call(null,map__40354__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40356 = cljs.core.seq.call(null,plugins);
var chunk__40357 = null;
var count__40358 = (0);
var i__40359 = (0);
while(true){
if((i__40359 < count__40358)){
var vec__40366 = cljs.core._nth.call(null,chunk__40357,i__40359);
var k = cljs.core.nth.call(null,vec__40366,(0),null);
var plugin = cljs.core.nth.call(null,vec__40366,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40372 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40356,chunk__40357,count__40358,i__40359,pl_40372,vec__40366,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40372.call(null,msg_hist);
});})(seq__40356,chunk__40357,count__40358,i__40359,pl_40372,vec__40366,k,plugin))
);
} else {
}


var G__40373 = seq__40356;
var G__40374 = chunk__40357;
var G__40375 = count__40358;
var G__40376 = (i__40359 + (1));
seq__40356 = G__40373;
chunk__40357 = G__40374;
count__40358 = G__40375;
i__40359 = G__40376;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40356);
if(temp__5720__auto__){
var seq__40356__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40356__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40356__$1);
var G__40377 = cljs.core.chunk_rest.call(null,seq__40356__$1);
var G__40378 = c__4550__auto__;
var G__40379 = cljs.core.count.call(null,c__4550__auto__);
var G__40380 = (0);
seq__40356 = G__40377;
chunk__40357 = G__40378;
count__40358 = G__40379;
i__40359 = G__40380;
continue;
} else {
var vec__40369 = cljs.core.first.call(null,seq__40356__$1);
var k = cljs.core.nth.call(null,vec__40369,(0),null);
var plugin = cljs.core.nth.call(null,vec__40369,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40381 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40356,chunk__40357,count__40358,i__40359,pl_40381,vec__40369,k,plugin,seq__40356__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40381.call(null,msg_hist);
});})(seq__40356,chunk__40357,count__40358,i__40359,pl_40381,vec__40369,k,plugin,seq__40356__$1,temp__5720__auto__))
);
} else {
}


var G__40382 = cljs.core.next.call(null,seq__40356__$1);
var G__40383 = null;
var G__40384 = (0);
var G__40385 = (0);
seq__40356 = G__40382;
chunk__40357 = G__40383;
count__40358 = G__40384;
i__40359 = G__40385;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40387 = arguments.length;
switch (G__40387) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40388_40393 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40389_40394 = null;
var count__40390_40395 = (0);
var i__40391_40396 = (0);
while(true){
if((i__40391_40396 < count__40390_40395)){
var msg_40397 = cljs.core._nth.call(null,chunk__40389_40394,i__40391_40396);
figwheel.client.socket.handle_incoming_message.call(null,msg_40397);


var G__40398 = seq__40388_40393;
var G__40399 = chunk__40389_40394;
var G__40400 = count__40390_40395;
var G__40401 = (i__40391_40396 + (1));
seq__40388_40393 = G__40398;
chunk__40389_40394 = G__40399;
count__40390_40395 = G__40400;
i__40391_40396 = G__40401;
continue;
} else {
var temp__5720__auto___40402 = cljs.core.seq.call(null,seq__40388_40393);
if(temp__5720__auto___40402){
var seq__40388_40403__$1 = temp__5720__auto___40402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40388_40403__$1)){
var c__4550__auto___40404 = cljs.core.chunk_first.call(null,seq__40388_40403__$1);
var G__40405 = cljs.core.chunk_rest.call(null,seq__40388_40403__$1);
var G__40406 = c__4550__auto___40404;
var G__40407 = cljs.core.count.call(null,c__4550__auto___40404);
var G__40408 = (0);
seq__40388_40393 = G__40405;
chunk__40389_40394 = G__40406;
count__40390_40395 = G__40407;
i__40391_40396 = G__40408;
continue;
} else {
var msg_40409 = cljs.core.first.call(null,seq__40388_40403__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40409);


var G__40410 = cljs.core.next.call(null,seq__40388_40403__$1);
var G__40411 = null;
var G__40412 = (0);
var G__40413 = (0);
seq__40388_40393 = G__40410;
chunk__40389_40394 = G__40411;
count__40390_40395 = G__40412;
i__40391_40396 = G__40413;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40418 = arguments.length;
var i__4731__auto___40419 = (0);
while(true){
if((i__4731__auto___40419 < len__4730__auto___40418)){
args__4736__auto__.push((arguments[i__4731__auto___40419]));

var G__40420 = (i__4731__auto___40419 + (1));
i__4731__auto___40419 = G__40420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40415){
var map__40416 = p__40415;
var map__40416__$1 = (((((!((map__40416 == null))))?(((((map__40416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40416):map__40416);
var opts = map__40416__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40414));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40421){if((e40421 instanceof Error)){
var e = e40421;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40421;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40422){
var map__40423 = p__40422;
var map__40423__$1 = (((((!((map__40423 == null))))?(((((map__40423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40423):map__40423);
var msg_name = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563617067116
