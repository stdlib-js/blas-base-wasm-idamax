"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var y=u(function(G,p){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));p.exports=W
});var d=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function t(e){if(!(this instanceof t))return new t(e);if(!A(e))throw new TypeError(S('26nH0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(t,m);q(t.prototype,"main",function(r,i,a){return this._instance.exports.c_idamax(r,i,a)});q(t.prototype,"ndarray",function(r,i,a,o){return this._instance.exports.c_idamax_ndarray(r,i,a,o)});f.exports=t
});var w=u(function(I,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),v=d();function n(){return this instanceof n?(v.call(this,new B({initial:0})),this):new n}j(n,v);h(n.prototype,"main",function(r,i,a){return this.ndarray(r,i,a,z(r,a))});h(n.prototype,"ndarray",function(r,i,a,o){var l,s;return l=E(this,[T(r,i,a,o)]),s=l[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});x.exports=n
});var _=u(function(J,M){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=w(),C=d(),c=new k;c.initializeSync();V(c,"Module",C.bind(null));M.exports=c
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
