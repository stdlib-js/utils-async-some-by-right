// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";function d(i,t){return l(t)?(o(t,"thisArg")&&(i.thisArg=t.thisArg),o(t,"series")&&(i.series=t.series,!m(i.series))?new TypeError(s("0ig30","series",i.series)):o(t,"limit")&&(i.limit=t.limit,!e(i.limit))?new TypeError(s("0ig3b","limit",i.limit)):null):new TypeError(s("0ig2h",t))}var f=()=>{};function h(i,t,e,r,s){var n,l,o,m,d,h,p;if(0===(m=i.length))return s(null,!1);for(o=m<e.limit?m:e.limit,f("Number of arguments: %d",r.length),n=0,d=m,h=0,p=0;p<o;p++)d>0&&g();function g(){f("Collection element %d: %s.",d-=1,JSON.stringify(i[d])),2===r.length?r.call(e.thisArg,i[d],c):3===r.length?r.call(e.thisArg,i[d],d,c):r.call(e.thisArg,i[d],d,i,c)}function c(i,e){if(!l)return i?(l=!0,f("Encountered an error: %s",i.message),s(i)):(n+=1,e&&!l&&(h+=1)===t?(l=!0,s(null,!0)):d>0?g():n===m?s(null,!1):void 0)}}function p(i,l){var o,m,f;if(o={},arguments.length>1){if(m=d(o,i))throw m;f=l}else f=i;if(!t(f))throw new TypeError(s("0ig43",f));return o.series?o.limit=1:o.limit||(o.limit=n),p;function p(i,n,l){if(!r(i))throw new TypeError(s("0igBO",i));if(!e(n))throw new TypeError(s("0ig4I",n));if(!t(l))throw new TypeError(s("0ig43",l));return h(i,n,o,f,(function(i,t){if(i)return l(i,!1);l(null,t)}))}}function g(i,t,e,r,s){if(arguments.length<5)return p(e)(i,t,r);p(e,r)(i,t,s)}i(g,"factory",p);export{g as default,p as factory};
//# sourceMappingURL=index.mjs.map
