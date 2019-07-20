// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38079_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38079_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38080 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38081 = null;
var count__38082 = (0);
var i__38083 = (0);
while(true){
if((i__38083 < count__38082)){
var n = cljs.core._nth.call(null,chunk__38081,i__38083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38084 = seq__38080;
var G__38085 = chunk__38081;
var G__38086 = count__38082;
var G__38087 = (i__38083 + (1));
seq__38080 = G__38084;
chunk__38081 = G__38085;
count__38082 = G__38086;
i__38083 = G__38087;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38080);
if(temp__5720__auto__){
var seq__38080__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38080__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38080__$1);
var G__38088 = cljs.core.chunk_rest.call(null,seq__38080__$1);
var G__38089 = c__4550__auto__;
var G__38090 = cljs.core.count.call(null,c__4550__auto__);
var G__38091 = (0);
seq__38080 = G__38088;
chunk__38081 = G__38089;
count__38082 = G__38090;
i__38083 = G__38091;
continue;
} else {
var n = cljs.core.first.call(null,seq__38080__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38092 = cljs.core.next.call(null,seq__38080__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__38080 = G__38092;
chunk__38081 = G__38093;
count__38082 = G__38094;
i__38083 = G__38095;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38096){
var vec__38097 = p__38096;
var _ = cljs.core.nth.call(null,vec__38097,(0),null);
var v = cljs.core.nth.call(null,vec__38097,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__38100){
var vec__38101 = p__38100;
var k = cljs.core.nth.call(null,vec__38101,(0),null);
var v = cljs.core.nth.call(null,vec__38101,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38113_38121 = cljs.core.seq.call(null,deps);
var chunk__38114_38122 = null;
var count__38115_38123 = (0);
var i__38116_38124 = (0);
while(true){
if((i__38116_38124 < count__38115_38123)){
var dep_38125 = cljs.core._nth.call(null,chunk__38114_38122,i__38116_38124);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_38125;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38125));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38125,(depth + (1)),state);
} else {
}


var G__38126 = seq__38113_38121;
var G__38127 = chunk__38114_38122;
var G__38128 = count__38115_38123;
var G__38129 = (i__38116_38124 + (1));
seq__38113_38121 = G__38126;
chunk__38114_38122 = G__38127;
count__38115_38123 = G__38128;
i__38116_38124 = G__38129;
continue;
} else {
var temp__5720__auto___38130 = cljs.core.seq.call(null,seq__38113_38121);
if(temp__5720__auto___38130){
var seq__38113_38131__$1 = temp__5720__auto___38130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38113_38131__$1)){
var c__4550__auto___38132 = cljs.core.chunk_first.call(null,seq__38113_38131__$1);
var G__38133 = cljs.core.chunk_rest.call(null,seq__38113_38131__$1);
var G__38134 = c__4550__auto___38132;
var G__38135 = cljs.core.count.call(null,c__4550__auto___38132);
var G__38136 = (0);
seq__38113_38121 = G__38133;
chunk__38114_38122 = G__38134;
count__38115_38123 = G__38135;
i__38116_38124 = G__38136;
continue;
} else {
var dep_38137 = cljs.core.first.call(null,seq__38113_38131__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_38137;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38137));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38137,(depth + (1)),state);
} else {
}


var G__38138 = cljs.core.next.call(null,seq__38113_38131__$1);
var G__38139 = null;
var G__38140 = (0);
var G__38141 = (0);
seq__38113_38121 = G__38138;
chunk__38114_38122 = G__38139;
count__38115_38123 = G__38140;
i__38116_38124 = G__38141;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38117){
var vec__38118 = p__38117;
var seq__38119 = cljs.core.seq.call(null,vec__38118);
var first__38120 = cljs.core.first.call(null,seq__38119);
var seq__38119__$1 = cljs.core.next.call(null,seq__38119);
var x = first__38120;
var xs = seq__38119__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38118,seq__38119,first__38120,seq__38119__$1,x,xs,get_deps__$1){
return (function (p1__38104_SHARP_){
return clojure.set.difference.call(null,p1__38104_SHARP_,x);
});})(vec__38118,seq__38119,first__38120,seq__38119__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38142 = cljs.core.seq.call(null,provides);
var chunk__38143 = null;
var count__38144 = (0);
var i__38145 = (0);
while(true){
if((i__38145 < count__38144)){
var prov = cljs.core._nth.call(null,chunk__38143,i__38145);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38154_38162 = cljs.core.seq.call(null,requires);
var chunk__38155_38163 = null;
var count__38156_38164 = (0);
var i__38157_38165 = (0);
while(true){
if((i__38157_38165 < count__38156_38164)){
var req_38166 = cljs.core._nth.call(null,chunk__38155_38163,i__38157_38165);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38166,prov);


var G__38167 = seq__38154_38162;
var G__38168 = chunk__38155_38163;
var G__38169 = count__38156_38164;
var G__38170 = (i__38157_38165 + (1));
seq__38154_38162 = G__38167;
chunk__38155_38163 = G__38168;
count__38156_38164 = G__38169;
i__38157_38165 = G__38170;
continue;
} else {
var temp__5720__auto___38171 = cljs.core.seq.call(null,seq__38154_38162);
if(temp__5720__auto___38171){
var seq__38154_38172__$1 = temp__5720__auto___38171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38154_38172__$1)){
var c__4550__auto___38173 = cljs.core.chunk_first.call(null,seq__38154_38172__$1);
var G__38174 = cljs.core.chunk_rest.call(null,seq__38154_38172__$1);
var G__38175 = c__4550__auto___38173;
var G__38176 = cljs.core.count.call(null,c__4550__auto___38173);
var G__38177 = (0);
seq__38154_38162 = G__38174;
chunk__38155_38163 = G__38175;
count__38156_38164 = G__38176;
i__38157_38165 = G__38177;
continue;
} else {
var req_38178 = cljs.core.first.call(null,seq__38154_38172__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38178,prov);


var G__38179 = cljs.core.next.call(null,seq__38154_38172__$1);
var G__38180 = null;
var G__38181 = (0);
var G__38182 = (0);
seq__38154_38162 = G__38179;
chunk__38155_38163 = G__38180;
count__38156_38164 = G__38181;
i__38157_38165 = G__38182;
continue;
}
} else {
}
}
break;
}


var G__38183 = seq__38142;
var G__38184 = chunk__38143;
var G__38185 = count__38144;
var G__38186 = (i__38145 + (1));
seq__38142 = G__38183;
chunk__38143 = G__38184;
count__38144 = G__38185;
i__38145 = G__38186;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38142);
if(temp__5720__auto__){
var seq__38142__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38142__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38142__$1);
var G__38187 = cljs.core.chunk_rest.call(null,seq__38142__$1);
var G__38188 = c__4550__auto__;
var G__38189 = cljs.core.count.call(null,c__4550__auto__);
var G__38190 = (0);
seq__38142 = G__38187;
chunk__38143 = G__38188;
count__38144 = G__38189;
i__38145 = G__38190;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38142__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38158_38191 = cljs.core.seq.call(null,requires);
var chunk__38159_38192 = null;
var count__38160_38193 = (0);
var i__38161_38194 = (0);
while(true){
if((i__38161_38194 < count__38160_38193)){
var req_38195 = cljs.core._nth.call(null,chunk__38159_38192,i__38161_38194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38195,prov);


var G__38196 = seq__38158_38191;
var G__38197 = chunk__38159_38192;
var G__38198 = count__38160_38193;
var G__38199 = (i__38161_38194 + (1));
seq__38158_38191 = G__38196;
chunk__38159_38192 = G__38197;
count__38160_38193 = G__38198;
i__38161_38194 = G__38199;
continue;
} else {
var temp__5720__auto___38200__$1 = cljs.core.seq.call(null,seq__38158_38191);
if(temp__5720__auto___38200__$1){
var seq__38158_38201__$1 = temp__5720__auto___38200__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38158_38201__$1)){
var c__4550__auto___38202 = cljs.core.chunk_first.call(null,seq__38158_38201__$1);
var G__38203 = cljs.core.chunk_rest.call(null,seq__38158_38201__$1);
var G__38204 = c__4550__auto___38202;
var G__38205 = cljs.core.count.call(null,c__4550__auto___38202);
var G__38206 = (0);
seq__38158_38191 = G__38203;
chunk__38159_38192 = G__38204;
count__38160_38193 = G__38205;
i__38161_38194 = G__38206;
continue;
} else {
var req_38207 = cljs.core.first.call(null,seq__38158_38201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38207,prov);


var G__38208 = cljs.core.next.call(null,seq__38158_38201__$1);
var G__38209 = null;
var G__38210 = (0);
var G__38211 = (0);
seq__38158_38191 = G__38208;
chunk__38159_38192 = G__38209;
count__38160_38193 = G__38210;
i__38161_38194 = G__38211;
continue;
}
} else {
}
}
break;
}


var G__38212 = cljs.core.next.call(null,seq__38142__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__38142 = G__38212;
chunk__38143 = G__38213;
count__38144 = G__38214;
i__38145 = G__38215;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38216_38220 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38217_38221 = null;
var count__38218_38222 = (0);
var i__38219_38223 = (0);
while(true){
if((i__38219_38223 < count__38218_38222)){
var ns_38224 = cljs.core._nth.call(null,chunk__38217_38221,i__38219_38223);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38224);


var G__38225 = seq__38216_38220;
var G__38226 = chunk__38217_38221;
var G__38227 = count__38218_38222;
var G__38228 = (i__38219_38223 + (1));
seq__38216_38220 = G__38225;
chunk__38217_38221 = G__38226;
count__38218_38222 = G__38227;
i__38219_38223 = G__38228;
continue;
} else {
var temp__5720__auto___38229 = cljs.core.seq.call(null,seq__38216_38220);
if(temp__5720__auto___38229){
var seq__38216_38230__$1 = temp__5720__auto___38229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38216_38230__$1)){
var c__4550__auto___38231 = cljs.core.chunk_first.call(null,seq__38216_38230__$1);
var G__38232 = cljs.core.chunk_rest.call(null,seq__38216_38230__$1);
var G__38233 = c__4550__auto___38231;
var G__38234 = cljs.core.count.call(null,c__4550__auto___38231);
var G__38235 = (0);
seq__38216_38220 = G__38232;
chunk__38217_38221 = G__38233;
count__38218_38222 = G__38234;
i__38219_38223 = G__38235;
continue;
} else {
var ns_38236 = cljs.core.first.call(null,seq__38216_38230__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38236);


var G__38237 = cljs.core.next.call(null,seq__38216_38230__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__38216_38220 = G__38237;
chunk__38217_38221 = G__38238;
count__38218_38222 = G__38239;
i__38219_38223 = G__38240;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38241__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38242__i = 0, G__38242__a = new Array(arguments.length -  0);
while (G__38242__i < G__38242__a.length) {G__38242__a[G__38242__i] = arguments[G__38242__i + 0]; ++G__38242__i;}
  args = new cljs.core.IndexedSeq(G__38242__a,0,null);
} 
return G__38241__delegate.call(this,args);};
G__38241.cljs$lang$maxFixedArity = 0;
G__38241.cljs$lang$applyTo = (function (arglist__38243){
var args = cljs.core.seq(arglist__38243);
return G__38241__delegate(args);
});
G__38241.cljs$core$IFn$_invoke$arity$variadic = G__38241__delegate;
return G__38241;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__38244_SHARP_,p2__38245_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38244_SHARP_)),p2__38245_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__38246_SHARP_,p2__38247_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38246_SHARP_),p2__38247_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38248 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38248.addCallback(((function (G__38248){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38248))
);

G__38248.addErrback(((function (G__38248){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38248))
);

return G__38248;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38249){if((e38249 instanceof Error)){
var e = e38249;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38249;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38250){if((e38250 instanceof Error)){
var e = e38250;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38250;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38251 = cljs.core._EQ_;
var expr__38252 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38251.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38252))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38251.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38252))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38251.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38252))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38251,expr__38252){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38251,expr__38252))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38254,callback){
var map__38255 = p__38254;
var map__38255__$1 = (((((!((map__38255 == null))))?(((((map__38255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38255):map__38255);
var file_msg = map__38255__$1;
var request_url = cljs.core.get.call(null,map__38255__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38255,map__38255__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38255,map__38255__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__){
return (function (state_38293){
var state_val_38294 = (state_38293[(1)]);
if((state_val_38294 === (7))){
var inst_38289 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38295_38321 = state_38293__$1;
(statearr_38295_38321[(2)] = inst_38289);

(statearr_38295_38321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (1))){
var state_38293__$1 = state_38293;
var statearr_38296_38322 = state_38293__$1;
(statearr_38296_38322[(2)] = null);

(statearr_38296_38322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (4))){
var inst_38259 = (state_38293[(7)]);
var inst_38259__$1 = (state_38293[(2)]);
var state_38293__$1 = (function (){var statearr_38297 = state_38293;
(statearr_38297[(7)] = inst_38259__$1);

return statearr_38297;
})();
if(cljs.core.truth_(inst_38259__$1)){
var statearr_38298_38323 = state_38293__$1;
(statearr_38298_38323[(1)] = (5));

} else {
var statearr_38299_38324 = state_38293__$1;
(statearr_38299_38324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (15))){
var inst_38274 = (state_38293[(8)]);
var inst_38272 = (state_38293[(9)]);
var inst_38276 = inst_38274.call(null,inst_38272);
var state_38293__$1 = state_38293;
var statearr_38300_38325 = state_38293__$1;
(statearr_38300_38325[(2)] = inst_38276);

(statearr_38300_38325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (13))){
var inst_38283 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38301_38326 = state_38293__$1;
(statearr_38301_38326[(2)] = inst_38283);

(statearr_38301_38326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (6))){
var state_38293__$1 = state_38293;
var statearr_38302_38327 = state_38293__$1;
(statearr_38302_38327[(2)] = null);

(statearr_38302_38327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (17))){
var inst_38280 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38303_38328 = state_38293__$1;
(statearr_38303_38328[(2)] = inst_38280);

(statearr_38303_38328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (3))){
var inst_38291 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38293__$1,inst_38291);
} else {
if((state_val_38294 === (12))){
var state_38293__$1 = state_38293;
var statearr_38304_38329 = state_38293__$1;
(statearr_38304_38329[(2)] = null);

(statearr_38304_38329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (2))){
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38293__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38294 === (11))){
var inst_38264 = (state_38293[(10)]);
var inst_38270 = figwheel.client.file_reloading.blocking_load.call(null,inst_38264);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38293__$1,(14),inst_38270);
} else {
if((state_val_38294 === (9))){
var inst_38264 = (state_38293[(10)]);
var state_38293__$1 = state_38293;
if(cljs.core.truth_(inst_38264)){
var statearr_38305_38330 = state_38293__$1;
(statearr_38305_38330[(1)] = (11));

} else {
var statearr_38306_38331 = state_38293__$1;
(statearr_38306_38331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (5))){
var inst_38259 = (state_38293[(7)]);
var inst_38265 = (state_38293[(11)]);
var inst_38264 = cljs.core.nth.call(null,inst_38259,(0),null);
var inst_38265__$1 = cljs.core.nth.call(null,inst_38259,(1),null);
var state_38293__$1 = (function (){var statearr_38307 = state_38293;
(statearr_38307[(10)] = inst_38264);

(statearr_38307[(11)] = inst_38265__$1);

return statearr_38307;
})();
if(cljs.core.truth_(inst_38265__$1)){
var statearr_38308_38332 = state_38293__$1;
(statearr_38308_38332[(1)] = (8));

} else {
var statearr_38309_38333 = state_38293__$1;
(statearr_38309_38333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (14))){
var inst_38274 = (state_38293[(8)]);
var inst_38264 = (state_38293[(10)]);
var inst_38272 = (state_38293[(2)]);
var inst_38273 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38274__$1 = cljs.core.get.call(null,inst_38273,inst_38264);
var state_38293__$1 = (function (){var statearr_38310 = state_38293;
(statearr_38310[(8)] = inst_38274__$1);

(statearr_38310[(9)] = inst_38272);

return statearr_38310;
})();
if(cljs.core.truth_(inst_38274__$1)){
var statearr_38311_38334 = state_38293__$1;
(statearr_38311_38334[(1)] = (15));

} else {
var statearr_38312_38335 = state_38293__$1;
(statearr_38312_38335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (16))){
var inst_38272 = (state_38293[(9)]);
var inst_38278 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38272);
var state_38293__$1 = state_38293;
var statearr_38313_38336 = state_38293__$1;
(statearr_38313_38336[(2)] = inst_38278);

(statearr_38313_38336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (10))){
var inst_38285 = (state_38293[(2)]);
var state_38293__$1 = (function (){var statearr_38314 = state_38293;
(statearr_38314[(12)] = inst_38285);

return statearr_38314;
})();
var statearr_38315_38337 = state_38293__$1;
(statearr_38315_38337[(2)] = null);

(statearr_38315_38337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (8))){
var inst_38265 = (state_38293[(11)]);
var inst_38267 = eval(inst_38265);
var state_38293__$1 = state_38293;
var statearr_38316_38338 = state_38293__$1;
(statearr_38316_38338[(2)] = inst_38267);

(statearr_38316_38338[(1)] = (10));


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
});})(c__30304__auto__))
;
return ((function (switch__30209__auto__,c__30304__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30210__auto__ = null;
var figwheel$client$file_reloading$state_machine__30210__auto____0 = (function (){
var statearr_38317 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38317[(0)] = figwheel$client$file_reloading$state_machine__30210__auto__);

(statearr_38317[(1)] = (1));

return statearr_38317;
});
var figwheel$client$file_reloading$state_machine__30210__auto____1 = (function (state_38293){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_38293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e38318){if((e38318 instanceof Object)){
var ex__30213__auto__ = e38318;
var statearr_38319_38339 = state_38293;
(statearr_38319_38339[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38340 = state_38293;
state_38293 = G__38340;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30210__auto__ = function(state_38293){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30210__auto____1.call(this,state_38293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30210__auto____0;
figwheel$client$file_reloading$state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30210__auto____1;
return figwheel$client$file_reloading$state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__))
})();
var state__30306__auto__ = (function (){var statearr_38320 = f__30305__auto__.call(null);
(statearr_38320[(6)] = c__30304__auto__);

return statearr_38320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__))
);

return c__30304__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38342 = arguments.length;
switch (G__38342) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38344,callback){
var map__38345 = p__38344;
var map__38345__$1 = (((((!((map__38345 == null))))?(((((map__38345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38345):map__38345);
var file_msg = map__38345__$1;
var namespace = cljs.core.get.call(null,map__38345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38345,map__38345__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38345,map__38345__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38347){
var map__38348 = p__38347;
var map__38348__$1 = (((((!((map__38348 == null))))?(((((map__38348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38348):map__38348);
var file_msg = map__38348__$1;
var namespace = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38350){
var map__38351 = p__38350;
var map__38351__$1 = (((((!((map__38351 == null))))?(((((map__38351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38351):map__38351);
var file_msg = map__38351__$1;
var namespace = cljs.core.get.call(null,map__38351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38353,callback){
var map__38354 = p__38353;
var map__38354__$1 = (((((!((map__38354 == null))))?(((((map__38354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38354):map__38354);
var file_msg = map__38354__$1;
var request_url = cljs.core.get.call(null,map__38354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30304__auto___38404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto___38404,out){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto___38404,out){
return (function (state_38389){
var state_val_38390 = (state_38389[(1)]);
if((state_val_38390 === (1))){
var inst_38363 = cljs.core.seq.call(null,files);
var inst_38364 = cljs.core.first.call(null,inst_38363);
var inst_38365 = cljs.core.next.call(null,inst_38363);
var inst_38366 = files;
var state_38389__$1 = (function (){var statearr_38391 = state_38389;
(statearr_38391[(7)] = inst_38365);

(statearr_38391[(8)] = inst_38364);

(statearr_38391[(9)] = inst_38366);

return statearr_38391;
})();
var statearr_38392_38405 = state_38389__$1;
(statearr_38392_38405[(2)] = null);

(statearr_38392_38405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (2))){
var inst_38372 = (state_38389[(10)]);
var inst_38366 = (state_38389[(9)]);
var inst_38371 = cljs.core.seq.call(null,inst_38366);
var inst_38372__$1 = cljs.core.first.call(null,inst_38371);
var inst_38373 = cljs.core.next.call(null,inst_38371);
var inst_38374 = (inst_38372__$1 == null);
var inst_38375 = cljs.core.not.call(null,inst_38374);
var state_38389__$1 = (function (){var statearr_38393 = state_38389;
(statearr_38393[(11)] = inst_38373);

(statearr_38393[(10)] = inst_38372__$1);

return statearr_38393;
})();
if(inst_38375){
var statearr_38394_38406 = state_38389__$1;
(statearr_38394_38406[(1)] = (4));

} else {
var statearr_38395_38407 = state_38389__$1;
(statearr_38395_38407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (3))){
var inst_38387 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38389__$1,inst_38387);
} else {
if((state_val_38390 === (4))){
var inst_38372 = (state_38389[(10)]);
var inst_38377 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38372);
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38389__$1,(7),inst_38377);
} else {
if((state_val_38390 === (5))){
var inst_38383 = cljs.core.async.close_BANG_.call(null,out);
var state_38389__$1 = state_38389;
var statearr_38396_38408 = state_38389__$1;
(statearr_38396_38408[(2)] = inst_38383);

(statearr_38396_38408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (6))){
var inst_38385 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
var statearr_38397_38409 = state_38389__$1;
(statearr_38397_38409[(2)] = inst_38385);

(statearr_38397_38409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (7))){
var inst_38373 = (state_38389[(11)]);
var inst_38379 = (state_38389[(2)]);
var inst_38380 = cljs.core.async.put_BANG_.call(null,out,inst_38379);
var inst_38366 = inst_38373;
var state_38389__$1 = (function (){var statearr_38398 = state_38389;
(statearr_38398[(12)] = inst_38380);

(statearr_38398[(9)] = inst_38366);

return statearr_38398;
})();
var statearr_38399_38410 = state_38389__$1;
(statearr_38399_38410[(2)] = null);

(statearr_38399_38410[(1)] = (2));


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
});})(c__30304__auto___38404,out))
;
return ((function (switch__30209__auto__,c__30304__auto___38404,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____0 = (function (){
var statearr_38400 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38400[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__);

(statearr_38400[(1)] = (1));

return statearr_38400;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____1 = (function (state_38389){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_38389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e38401){if((e38401 instanceof Object)){
var ex__30213__auto__ = e38401;
var statearr_38402_38411 = state_38389;
(statearr_38402_38411[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38412 = state_38389;
state_38389 = G__38412;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__ = function(state_38389){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____1.call(this,state_38389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto___38404,out))
})();
var state__30306__auto__ = (function (){var statearr_38403 = f__30305__auto__.call(null);
(statearr_38403[(6)] = c__30304__auto___38404);

return statearr_38403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto___38404,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38413,opts){
var map__38414 = p__38413;
var map__38414__$1 = (((((!((map__38414 == null))))?(((((map__38414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38414):map__38414);
var eval_body = cljs.core.get.call(null,map__38414__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38416){var e = e38416;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38417_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38417_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38418){
var vec__38419 = p__38418;
var k = cljs.core.nth.call(null,vec__38419,(0),null);
var v = cljs.core.nth.call(null,vec__38419,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38422){
var vec__38423 = p__38422;
var k = cljs.core.nth.call(null,vec__38423,(0),null);
var v = cljs.core.nth.call(null,vec__38423,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38429,p__38430){
var map__38431 = p__38429;
var map__38431__$1 = (((((!((map__38431 == null))))?(((((map__38431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38431):map__38431);
var opts = map__38431__$1;
var before_jsload = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38432 = p__38430;
var map__38432__$1 = (((((!((map__38432 == null))))?(((((map__38432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38432):map__38432);
var msg = map__38432__$1;
var files = cljs.core.get.call(null,map__38432__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38432__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38432__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30305__auto__ = (function (){var switch__30209__auto__ = ((function (c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38586){
var state_val_38587 = (state_38586[(1)]);
if((state_val_38587 === (7))){
var inst_38446 = (state_38586[(7)]);
var inst_38448 = (state_38586[(8)]);
var inst_38447 = (state_38586[(9)]);
var inst_38449 = (state_38586[(10)]);
var inst_38454 = cljs.core._nth.call(null,inst_38447,inst_38449);
var inst_38455 = figwheel.client.file_reloading.eval_body.call(null,inst_38454,opts);
var inst_38456 = (inst_38449 + (1));
var tmp38588 = inst_38446;
var tmp38589 = inst_38448;
var tmp38590 = inst_38447;
var inst_38446__$1 = tmp38588;
var inst_38447__$1 = tmp38590;
var inst_38448__$1 = tmp38589;
var inst_38449__$1 = inst_38456;
var state_38586__$1 = (function (){var statearr_38591 = state_38586;
(statearr_38591[(7)] = inst_38446__$1);

(statearr_38591[(11)] = inst_38455);

(statearr_38591[(8)] = inst_38448__$1);

(statearr_38591[(9)] = inst_38447__$1);

(statearr_38591[(10)] = inst_38449__$1);

return statearr_38591;
})();
var statearr_38592_38675 = state_38586__$1;
(statearr_38592_38675[(2)] = null);

(statearr_38592_38675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (20))){
var inst_38489 = (state_38586[(12)]);
var inst_38497 = figwheel.client.file_reloading.sort_files.call(null,inst_38489);
var state_38586__$1 = state_38586;
var statearr_38593_38676 = state_38586__$1;
(statearr_38593_38676[(2)] = inst_38497);

(statearr_38593_38676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (27))){
var state_38586__$1 = state_38586;
var statearr_38594_38677 = state_38586__$1;
(statearr_38594_38677[(2)] = null);

(statearr_38594_38677[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (1))){
var inst_38438 = (state_38586[(13)]);
var inst_38435 = before_jsload.call(null,files);
var inst_38436 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38437 = (function (){return ((function (inst_38438,inst_38435,inst_38436,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38426_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38426_SHARP_);
});
;})(inst_38438,inst_38435,inst_38436,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38438__$1 = cljs.core.filter.call(null,inst_38437,files);
var inst_38439 = cljs.core.not_empty.call(null,inst_38438__$1);
var state_38586__$1 = (function (){var statearr_38595 = state_38586;
(statearr_38595[(14)] = inst_38435);

(statearr_38595[(13)] = inst_38438__$1);

(statearr_38595[(15)] = inst_38436);

return statearr_38595;
})();
if(cljs.core.truth_(inst_38439)){
var statearr_38596_38678 = state_38586__$1;
(statearr_38596_38678[(1)] = (2));

} else {
var statearr_38597_38679 = state_38586__$1;
(statearr_38597_38679[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (24))){
var state_38586__$1 = state_38586;
var statearr_38598_38680 = state_38586__$1;
(statearr_38598_38680[(2)] = null);

(statearr_38598_38680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (39))){
var inst_38539 = (state_38586[(16)]);
var state_38586__$1 = state_38586;
var statearr_38599_38681 = state_38586__$1;
(statearr_38599_38681[(2)] = inst_38539);

(statearr_38599_38681[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (46))){
var inst_38581 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38600_38682 = state_38586__$1;
(statearr_38600_38682[(2)] = inst_38581);

(statearr_38600_38682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (4))){
var inst_38483 = (state_38586[(2)]);
var inst_38484 = cljs.core.List.EMPTY;
var inst_38485 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38484);
var inst_38486 = (function (){return ((function (inst_38483,inst_38484,inst_38485,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38427_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38427_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38427_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38427_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_38483,inst_38484,inst_38485,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38487 = cljs.core.filter.call(null,inst_38486,files);
var inst_38488 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38489 = cljs.core.concat.call(null,inst_38487,inst_38488);
var state_38586__$1 = (function (){var statearr_38601 = state_38586;
(statearr_38601[(17)] = inst_38483);

(statearr_38601[(12)] = inst_38489);

(statearr_38601[(18)] = inst_38485);

return statearr_38601;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38602_38683 = state_38586__$1;
(statearr_38602_38683[(1)] = (16));

} else {
var statearr_38603_38684 = state_38586__$1;
(statearr_38603_38684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (15))){
var inst_38473 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38604_38685 = state_38586__$1;
(statearr_38604_38685[(2)] = inst_38473);

(statearr_38604_38685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (21))){
var inst_38499 = (state_38586[(19)]);
var inst_38499__$1 = (state_38586[(2)]);
var inst_38500 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38499__$1);
var state_38586__$1 = (function (){var statearr_38605 = state_38586;
(statearr_38605[(19)] = inst_38499__$1);

return statearr_38605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38586__$1,(22),inst_38500);
} else {
if((state_val_38587 === (31))){
var inst_38584 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38586__$1,inst_38584);
} else {
if((state_val_38587 === (32))){
var inst_38539 = (state_38586[(16)]);
var inst_38544 = inst_38539.cljs$lang$protocol_mask$partition0$;
var inst_38545 = (inst_38544 & (64));
var inst_38546 = inst_38539.cljs$core$ISeq$;
var inst_38547 = (cljs.core.PROTOCOL_SENTINEL === inst_38546);
var inst_38548 = ((inst_38545) || (inst_38547));
var state_38586__$1 = state_38586;
if(cljs.core.truth_(inst_38548)){
var statearr_38606_38686 = state_38586__$1;
(statearr_38606_38686[(1)] = (35));

} else {
var statearr_38607_38687 = state_38586__$1;
(statearr_38607_38687[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (40))){
var inst_38561 = (state_38586[(20)]);
var inst_38560 = (state_38586[(2)]);
var inst_38561__$1 = cljs.core.get.call(null,inst_38560,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38562 = cljs.core.get.call(null,inst_38560,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38563 = cljs.core.not_empty.call(null,inst_38561__$1);
var state_38586__$1 = (function (){var statearr_38608 = state_38586;
(statearr_38608[(21)] = inst_38562);

(statearr_38608[(20)] = inst_38561__$1);

return statearr_38608;
})();
if(cljs.core.truth_(inst_38563)){
var statearr_38609_38688 = state_38586__$1;
(statearr_38609_38688[(1)] = (41));

} else {
var statearr_38610_38689 = state_38586__$1;
(statearr_38610_38689[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (33))){
var state_38586__$1 = state_38586;
var statearr_38611_38690 = state_38586__$1;
(statearr_38611_38690[(2)] = false);

(statearr_38611_38690[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (13))){
var inst_38459 = (state_38586[(22)]);
var inst_38463 = cljs.core.chunk_first.call(null,inst_38459);
var inst_38464 = cljs.core.chunk_rest.call(null,inst_38459);
var inst_38465 = cljs.core.count.call(null,inst_38463);
var inst_38446 = inst_38464;
var inst_38447 = inst_38463;
var inst_38448 = inst_38465;
var inst_38449 = (0);
var state_38586__$1 = (function (){var statearr_38612 = state_38586;
(statearr_38612[(7)] = inst_38446);

(statearr_38612[(8)] = inst_38448);

(statearr_38612[(9)] = inst_38447);

(statearr_38612[(10)] = inst_38449);

return statearr_38612;
})();
var statearr_38613_38691 = state_38586__$1;
(statearr_38613_38691[(2)] = null);

(statearr_38613_38691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (22))){
var inst_38502 = (state_38586[(23)]);
var inst_38503 = (state_38586[(24)]);
var inst_38499 = (state_38586[(19)]);
var inst_38507 = (state_38586[(25)]);
var inst_38502__$1 = (state_38586[(2)]);
var inst_38503__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38502__$1);
var inst_38504 = (function (){var all_files = inst_38499;
var res_SINGLEQUOTE_ = inst_38502__$1;
var res = inst_38503__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38502,inst_38503,inst_38499,inst_38507,inst_38502__$1,inst_38503__$1,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38428_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38428_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38502,inst_38503,inst_38499,inst_38507,inst_38502__$1,inst_38503__$1,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38505 = cljs.core.filter.call(null,inst_38504,inst_38502__$1);
var inst_38506 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38507__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38506);
var inst_38508 = cljs.core.not_empty.call(null,inst_38507__$1);
var state_38586__$1 = (function (){var statearr_38614 = state_38586;
(statearr_38614[(23)] = inst_38502__$1);

(statearr_38614[(24)] = inst_38503__$1);

(statearr_38614[(25)] = inst_38507__$1);

(statearr_38614[(26)] = inst_38505);

return statearr_38614;
})();
if(cljs.core.truth_(inst_38508)){
var statearr_38615_38692 = state_38586__$1;
(statearr_38615_38692[(1)] = (23));

} else {
var statearr_38616_38693 = state_38586__$1;
(statearr_38616_38693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (36))){
var state_38586__$1 = state_38586;
var statearr_38617_38694 = state_38586__$1;
(statearr_38617_38694[(2)] = false);

(statearr_38617_38694[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (41))){
var inst_38561 = (state_38586[(20)]);
var inst_38565 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38566 = cljs.core.map.call(null,inst_38565,inst_38561);
var inst_38567 = cljs.core.pr_str.call(null,inst_38566);
var inst_38568 = ["figwheel-no-load meta-data: ",inst_38567].join('');
var inst_38569 = figwheel.client.utils.log.call(null,inst_38568);
var state_38586__$1 = state_38586;
var statearr_38618_38695 = state_38586__$1;
(statearr_38618_38695[(2)] = inst_38569);

(statearr_38618_38695[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (43))){
var inst_38562 = (state_38586[(21)]);
var inst_38572 = (state_38586[(2)]);
var inst_38573 = cljs.core.not_empty.call(null,inst_38562);
var state_38586__$1 = (function (){var statearr_38619 = state_38586;
(statearr_38619[(27)] = inst_38572);

return statearr_38619;
})();
if(cljs.core.truth_(inst_38573)){
var statearr_38620_38696 = state_38586__$1;
(statearr_38620_38696[(1)] = (44));

} else {
var statearr_38621_38697 = state_38586__$1;
(statearr_38621_38697[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (29))){
var inst_38502 = (state_38586[(23)]);
var inst_38503 = (state_38586[(24)]);
var inst_38499 = (state_38586[(19)]);
var inst_38507 = (state_38586[(25)]);
var inst_38539 = (state_38586[(16)]);
var inst_38505 = (state_38586[(26)]);
var inst_38535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38538 = (function (){var all_files = inst_38499;
var res_SINGLEQUOTE_ = inst_38502;
var res = inst_38503;
var files_not_loaded = inst_38505;
var dependencies_that_loaded = inst_38507;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38539,inst_38505,inst_38535,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38537){
var map__38622 = p__38537;
var map__38622__$1 = (((((!((map__38622 == null))))?(((((map__38622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38622):map__38622);
var namespace = cljs.core.get.call(null,map__38622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38539,inst_38505,inst_38535,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38539__$1 = cljs.core.group_by.call(null,inst_38538,inst_38505);
var inst_38541 = (inst_38539__$1 == null);
var inst_38542 = cljs.core.not.call(null,inst_38541);
var state_38586__$1 = (function (){var statearr_38624 = state_38586;
(statearr_38624[(28)] = inst_38535);

(statearr_38624[(16)] = inst_38539__$1);

return statearr_38624;
})();
if(inst_38542){
var statearr_38625_38698 = state_38586__$1;
(statearr_38625_38698[(1)] = (32));

} else {
var statearr_38626_38699 = state_38586__$1;
(statearr_38626_38699[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (44))){
var inst_38562 = (state_38586[(21)]);
var inst_38575 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38562);
var inst_38576 = cljs.core.pr_str.call(null,inst_38575);
var inst_38577 = ["not required: ",inst_38576].join('');
var inst_38578 = figwheel.client.utils.log.call(null,inst_38577);
var state_38586__$1 = state_38586;
var statearr_38627_38700 = state_38586__$1;
(statearr_38627_38700[(2)] = inst_38578);

(statearr_38627_38700[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (6))){
var inst_38480 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38628_38701 = state_38586__$1;
(statearr_38628_38701[(2)] = inst_38480);

(statearr_38628_38701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (28))){
var inst_38505 = (state_38586[(26)]);
var inst_38532 = (state_38586[(2)]);
var inst_38533 = cljs.core.not_empty.call(null,inst_38505);
var state_38586__$1 = (function (){var statearr_38629 = state_38586;
(statearr_38629[(29)] = inst_38532);

return statearr_38629;
})();
if(cljs.core.truth_(inst_38533)){
var statearr_38630_38702 = state_38586__$1;
(statearr_38630_38702[(1)] = (29));

} else {
var statearr_38631_38703 = state_38586__$1;
(statearr_38631_38703[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (25))){
var inst_38503 = (state_38586[(24)]);
var inst_38519 = (state_38586[(2)]);
var inst_38520 = cljs.core.not_empty.call(null,inst_38503);
var state_38586__$1 = (function (){var statearr_38632 = state_38586;
(statearr_38632[(30)] = inst_38519);

return statearr_38632;
})();
if(cljs.core.truth_(inst_38520)){
var statearr_38633_38704 = state_38586__$1;
(statearr_38633_38704[(1)] = (26));

} else {
var statearr_38634_38705 = state_38586__$1;
(statearr_38634_38705[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (34))){
var inst_38555 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
if(cljs.core.truth_(inst_38555)){
var statearr_38635_38706 = state_38586__$1;
(statearr_38635_38706[(1)] = (38));

} else {
var statearr_38636_38707 = state_38586__$1;
(statearr_38636_38707[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (17))){
var state_38586__$1 = state_38586;
var statearr_38637_38708 = state_38586__$1;
(statearr_38637_38708[(2)] = recompile_dependents);

(statearr_38637_38708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (3))){
var state_38586__$1 = state_38586;
var statearr_38638_38709 = state_38586__$1;
(statearr_38638_38709[(2)] = null);

(statearr_38638_38709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (12))){
var inst_38476 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38639_38710 = state_38586__$1;
(statearr_38639_38710[(2)] = inst_38476);

(statearr_38639_38710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (2))){
var inst_38438 = (state_38586[(13)]);
var inst_38445 = cljs.core.seq.call(null,inst_38438);
var inst_38446 = inst_38445;
var inst_38447 = null;
var inst_38448 = (0);
var inst_38449 = (0);
var state_38586__$1 = (function (){var statearr_38640 = state_38586;
(statearr_38640[(7)] = inst_38446);

(statearr_38640[(8)] = inst_38448);

(statearr_38640[(9)] = inst_38447);

(statearr_38640[(10)] = inst_38449);

return statearr_38640;
})();
var statearr_38641_38711 = state_38586__$1;
(statearr_38641_38711[(2)] = null);

(statearr_38641_38711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (23))){
var inst_38502 = (state_38586[(23)]);
var inst_38503 = (state_38586[(24)]);
var inst_38499 = (state_38586[(19)]);
var inst_38507 = (state_38586[(25)]);
var inst_38505 = (state_38586[(26)]);
var inst_38510 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38512 = (function (){var all_files = inst_38499;
var res_SINGLEQUOTE_ = inst_38502;
var res = inst_38503;
var files_not_loaded = inst_38505;
var dependencies_that_loaded = inst_38507;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38510,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38511){
var map__38642 = p__38511;
var map__38642__$1 = (((((!((map__38642 == null))))?(((((map__38642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38642):map__38642);
var request_url = cljs.core.get.call(null,map__38642__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38510,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38513 = cljs.core.reverse.call(null,inst_38507);
var inst_38514 = cljs.core.map.call(null,inst_38512,inst_38513);
var inst_38515 = cljs.core.pr_str.call(null,inst_38514);
var inst_38516 = figwheel.client.utils.log.call(null,inst_38515);
var state_38586__$1 = (function (){var statearr_38644 = state_38586;
(statearr_38644[(31)] = inst_38510);

return statearr_38644;
})();
var statearr_38645_38712 = state_38586__$1;
(statearr_38645_38712[(2)] = inst_38516);

(statearr_38645_38712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (35))){
var state_38586__$1 = state_38586;
var statearr_38646_38713 = state_38586__$1;
(statearr_38646_38713[(2)] = true);

(statearr_38646_38713[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (19))){
var inst_38489 = (state_38586[(12)]);
var inst_38495 = figwheel.client.file_reloading.expand_files.call(null,inst_38489);
var state_38586__$1 = state_38586;
var statearr_38647_38714 = state_38586__$1;
(statearr_38647_38714[(2)] = inst_38495);

(statearr_38647_38714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (11))){
var state_38586__$1 = state_38586;
var statearr_38648_38715 = state_38586__$1;
(statearr_38648_38715[(2)] = null);

(statearr_38648_38715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (9))){
var inst_38478 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38649_38716 = state_38586__$1;
(statearr_38649_38716[(2)] = inst_38478);

(statearr_38649_38716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (5))){
var inst_38448 = (state_38586[(8)]);
var inst_38449 = (state_38586[(10)]);
var inst_38451 = (inst_38449 < inst_38448);
var inst_38452 = inst_38451;
var state_38586__$1 = state_38586;
if(cljs.core.truth_(inst_38452)){
var statearr_38650_38717 = state_38586__$1;
(statearr_38650_38717[(1)] = (7));

} else {
var statearr_38651_38718 = state_38586__$1;
(statearr_38651_38718[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (14))){
var inst_38459 = (state_38586[(22)]);
var inst_38468 = cljs.core.first.call(null,inst_38459);
var inst_38469 = figwheel.client.file_reloading.eval_body.call(null,inst_38468,opts);
var inst_38470 = cljs.core.next.call(null,inst_38459);
var inst_38446 = inst_38470;
var inst_38447 = null;
var inst_38448 = (0);
var inst_38449 = (0);
var state_38586__$1 = (function (){var statearr_38652 = state_38586;
(statearr_38652[(32)] = inst_38469);

(statearr_38652[(7)] = inst_38446);

(statearr_38652[(8)] = inst_38448);

(statearr_38652[(9)] = inst_38447);

(statearr_38652[(10)] = inst_38449);

return statearr_38652;
})();
var statearr_38653_38719 = state_38586__$1;
(statearr_38653_38719[(2)] = null);

(statearr_38653_38719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (45))){
var state_38586__$1 = state_38586;
var statearr_38654_38720 = state_38586__$1;
(statearr_38654_38720[(2)] = null);

(statearr_38654_38720[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (26))){
var inst_38502 = (state_38586[(23)]);
var inst_38503 = (state_38586[(24)]);
var inst_38499 = (state_38586[(19)]);
var inst_38507 = (state_38586[(25)]);
var inst_38505 = (state_38586[(26)]);
var inst_38522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38524 = (function (){var all_files = inst_38499;
var res_SINGLEQUOTE_ = inst_38502;
var res = inst_38503;
var files_not_loaded = inst_38505;
var dependencies_that_loaded = inst_38507;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38522,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38523){
var map__38655 = p__38523;
var map__38655__$1 = (((((!((map__38655 == null))))?(((((map__38655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38655):map__38655);
var namespace = cljs.core.get.call(null,map__38655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38522,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38525 = cljs.core.map.call(null,inst_38524,inst_38503);
var inst_38526 = cljs.core.pr_str.call(null,inst_38525);
var inst_38527 = figwheel.client.utils.log.call(null,inst_38526);
var inst_38528 = (function (){var all_files = inst_38499;
var res_SINGLEQUOTE_ = inst_38502;
var res = inst_38503;
var files_not_loaded = inst_38505;
var dependencies_that_loaded = inst_38507;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38522,inst_38524,inst_38525,inst_38526,inst_38527,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38502,inst_38503,inst_38499,inst_38507,inst_38505,inst_38522,inst_38524,inst_38525,inst_38526,inst_38527,state_val_38587,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38529 = setTimeout(inst_38528,(10));
var state_38586__$1 = (function (){var statearr_38657 = state_38586;
(statearr_38657[(33)] = inst_38522);

(statearr_38657[(34)] = inst_38527);

return statearr_38657;
})();
var statearr_38658_38721 = state_38586__$1;
(statearr_38658_38721[(2)] = inst_38529);

(statearr_38658_38721[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (16))){
var state_38586__$1 = state_38586;
var statearr_38659_38722 = state_38586__$1;
(statearr_38659_38722[(2)] = reload_dependents);

(statearr_38659_38722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (38))){
var inst_38539 = (state_38586[(16)]);
var inst_38557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38539);
var state_38586__$1 = state_38586;
var statearr_38660_38723 = state_38586__$1;
(statearr_38660_38723[(2)] = inst_38557);

(statearr_38660_38723[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (30))){
var state_38586__$1 = state_38586;
var statearr_38661_38724 = state_38586__$1;
(statearr_38661_38724[(2)] = null);

(statearr_38661_38724[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (10))){
var inst_38459 = (state_38586[(22)]);
var inst_38461 = cljs.core.chunked_seq_QMARK_.call(null,inst_38459);
var state_38586__$1 = state_38586;
if(inst_38461){
var statearr_38662_38725 = state_38586__$1;
(statearr_38662_38725[(1)] = (13));

} else {
var statearr_38663_38726 = state_38586__$1;
(statearr_38663_38726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (18))){
var inst_38493 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
if(cljs.core.truth_(inst_38493)){
var statearr_38664_38727 = state_38586__$1;
(statearr_38664_38727[(1)] = (19));

} else {
var statearr_38665_38728 = state_38586__$1;
(statearr_38665_38728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (42))){
var state_38586__$1 = state_38586;
var statearr_38666_38729 = state_38586__$1;
(statearr_38666_38729[(2)] = null);

(statearr_38666_38729[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (37))){
var inst_38552 = (state_38586[(2)]);
var state_38586__$1 = state_38586;
var statearr_38667_38730 = state_38586__$1;
(statearr_38667_38730[(2)] = inst_38552);

(statearr_38667_38730[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38587 === (8))){
var inst_38459 = (state_38586[(22)]);
var inst_38446 = (state_38586[(7)]);
var inst_38459__$1 = cljs.core.seq.call(null,inst_38446);
var state_38586__$1 = (function (){var statearr_38668 = state_38586;
(statearr_38668[(22)] = inst_38459__$1);

return statearr_38668;
})();
if(inst_38459__$1){
var statearr_38669_38731 = state_38586__$1;
(statearr_38669_38731[(1)] = (10));

} else {
var statearr_38670_38732 = state_38586__$1;
(statearr_38670_38732[(1)] = (11));

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
});})(c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30209__auto__,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____0 = (function (){
var statearr_38671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38671[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__);

(statearr_38671[(1)] = (1));

return statearr_38671;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____1 = (function (state_38586){
while(true){
var ret_value__30211__auto__ = (function (){try{while(true){
var result__30212__auto__ = switch__30209__auto__.call(null,state_38586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30212__auto__;
}
break;
}
}catch (e38672){if((e38672 instanceof Object)){
var ex__30213__auto__ = e38672;
var statearr_38673_38733 = state_38586;
(statearr_38673_38733[(5)] = ex__30213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38734 = state_38586;
state_38586 = G__38734;
continue;
} else {
return ret_value__30211__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__ = function(state_38586){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____1.call(this,state_38586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30210__auto__;
})()
;})(switch__30209__auto__,c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30306__auto__ = (function (){var statearr_38674 = f__30305__auto__.call(null);
(statearr_38674[(6)] = c__30304__auto__);

return statearr_38674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30306__auto__);
});})(c__30304__auto__,map__38431,map__38431__$1,opts,before_jsload,on_jsload,reload_dependents,map__38432,map__38432__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30304__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38737,link){
var map__38738 = p__38737;
var map__38738__$1 = (((((!((map__38738 == null))))?(((((map__38738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38738):map__38738);
var file = cljs.core.get.call(null,map__38738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__38738,map__38738__$1,file){
return (function (p1__38735_SHARP_,p2__38736_SHARP_){
if(cljs.core._EQ_.call(null,p1__38735_SHARP_,p2__38736_SHARP_)){
return p1__38735_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__38738,map__38738__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38741){
var map__38742 = p__38741;
var map__38742__$1 = (((((!((map__38742 == null))))?(((((map__38742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38742):map__38742);
var match_length = cljs.core.get.call(null,map__38742__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38742__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38740_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38740_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38744_SHARP_,p2__38745_SHARP_){
return cljs.core.assoc.call(null,p1__38744_SHARP_,cljs.core.get.call(null,p2__38745_SHARP_,key),p2__38745_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38746 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38746);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38746);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38747,p__38748){
var map__38749 = p__38747;
var map__38749__$1 = (((((!((map__38749 == null))))?(((((map__38749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38749):map__38749);
var on_cssload = cljs.core.get.call(null,map__38749__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38750 = p__38748;
var map__38750__$1 = (((((!((map__38750 == null))))?(((((map__38750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38750):map__38750);
var files_msg = map__38750__$1;
var files = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563617065782
