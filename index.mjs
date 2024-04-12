// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";function f(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var m=f(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-right-async:limit");function d(e,f){var d,p,u;if(d={},arguments.length>1){if(p=function(e,t){return o(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"series")&&(e.series=t.series,!c(e.series))?new TypeError(s("1Rf2o","series",e.series)):l(t,"limit")&&(e.limit=t.limit,!r(e.limit))?new TypeError(s("1Rf3P","limit",e.limit)):null):new TypeError(s("1Rf2V",t))}(d,e),p)throw p;u=f}else u=e;if(!t(u))throw new TypeError(s("1Rf3q",u));return d.series?d.limit=1:d.limit||(d.limit=n),function(e,n,o){if(!i(e))throw new TypeError(s("1RfAh",e));if(!r(n))throw new TypeError(s("1Rf45",n));if(!t(o))throw new TypeError(s("1Rf3q",o));return function(e,t,r,i,s){var n,o,l,c,f,d,p;if(c=e.length,m("Collection length: %d",c),0===c)return m("Finished processing a collection."),s(null,!1);for(l=c<r.limit?c:r.limit,m("Concurrency limit: %d",l),m("Number of arguments: %d",i.length),n=0,f=c,d=0,p=0;p<l;p++)f>0&&u();function u(){m("Collection element %d: %s.",f-=1,JSON.stringify(e[f])),2===i.length?i.call(r.thisArg,e[f],h):3===i.length?i.call(r.thisArg,e[f],f,h):i.call(r.thisArg,e[f],f,e,h)}function h(e,r){if(!o)return e?(o=!0,m("Encountered an error: %s",e.message),s(e)):(m("Processed %d of %d collection elements.",n+=1,c),m("Test result: %s",!!r),r&&!o&&(d+=1)===t?(o=!0,m("Finished processing a collection."),s(null,!0)):f>0?u():n===c?(m("Finished processing a collection."),s(null,!1)):void 0)}}(e,n,d,u,(function(e,t){if(e)return o(e,!1);o(null,t)}))}}function p(e,t,r,i,s){if(arguments.length<5)return d(r)(e,t,i);d(r,i)(e,t,s)}e(p,"factory",d);export{p as default,d as factory};
//# sourceMappingURL=index.mjs.map
