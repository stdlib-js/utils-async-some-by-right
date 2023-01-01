// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";function d(e,t){return o(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"series")&&(e.series=t.series,!m(e.series))?new TypeError(s("0ig30","series",e.series)):l(t,"limit")&&(e.limit=t.limit,!i(e.limit))?new TypeError(s("0ig3b","limit",e.limit)):null):new TypeError(s("0ig2h",t))}function c(e){var t=e.default;if("function"==typeof t){var i=function(){return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-right-async:limit");function p(e,t,i,r,s){var n,o,l,m,d,c,p;if(m=e.length,f("Collection length: %d",m),0===m)return f("Finished processing a collection."),s(null,!1);for(l=m<i.limit?m:i.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",r.length),n=0,d=m,c=0,p=0;p<l;p++)d>0&&h();function h(){f("Collection element %d: %s.",d-=1,JSON.stringify(e[d])),2===r.length?r.call(i.thisArg,e[d],u):3===r.length?r.call(i.thisArg,e[d],d,u):r.call(i.thisArg,e[d],d,e,u)}function u(e,i){if(!o)return e?(o=!0,f("Encountered an error: %s",e.message),s(e)):(f("Processed %d of %d collection elements.",n+=1,m),f("Test result: %s",!!i),i&&!o&&(c+=1)===t?(o=!0,f("Finished processing a collection."),s(null,!0)):d>0?h():n===m?(f("Finished processing a collection."),s(null,!1)):void 0)}}function h(e,o){var l,m,c;if(l={},arguments.length>1){if(m=d(l,e))throw m;c=o}else c=e;if(!t(c))throw new TypeError(s("0ig43",c));return l.series?l.limit=1:l.limit||(l.limit=n),f;function f(e,n,o){if(!r(e))throw new TypeError(s("0igBO",e));if(!i(n))throw new TypeError(s("0ig4I",n));if(!t(o))throw new TypeError(s("0ig43",o));return p(e,n,l,c,(function(e,t){if(e)return o(e,!1);o(null,t)}))}}function u(e,t,i,r,s){if(arguments.length<5)return h(i)(e,t,r);h(i,r)(e,t,s)}e(u,"factory",h);export{u as default,h as factory};
//# sourceMappingURL=index.mjs.map
