!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ByteshiftInjector={})}(this,(function(t){"use strict";var e,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */!function(t){!function(e){var n="object"==typeof r?r:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===n.Reflect?n.Reflect=t:o=i(n.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,u={__proto__:[]}instanceof Array,f=!i&&!u,s={create:i?function(){return nt(Object.create(null))}:u?function(){return nt({__proto__:null})}:function(){return nt({})},has:f?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:f?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},a=Object.getPrototypeOf(Function),c="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=c||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?tt():Map,p=c||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?et():Set,y=new(c||"function"!=typeof WeakMap?rt():WeakMap);function l(t,e,r,n){if(z(r)){if(!V(t))throw new TypeError;if(!H(e))throw new TypeError;return E(t,e)}if(!V(t))throw new TypeError;if(!C(e))throw new TypeError;if(!C(n)&&!z(n)&&!L(n))throw new TypeError;return L(n)&&(n=void 0),j(t,e,r=D(r),n)}function d(t,e){function r(r,n){if(!C(r))throw new TypeError;if(!z(n)&&!Y(n))throw new TypeError;P(t,e,r,n)}return r}function v(t,e,r,n){if(!C(r))throw new TypeError;return z(n)||(n=D(n)),P(t,e,r,n)}function _(t,e,r){if(!C(e))throw new TypeError;return z(r)||(r=D(r)),x(t,e,r)}function w(t,e,r){if(!C(e))throw new TypeError;return z(r)||(r=D(r)),M(t,e,r)}function g(t,e,r){if(!C(e))throw new TypeError;return z(r)||(r=D(r)),S(t,e,r)}function b(t,e,r){if(!C(e))throw new TypeError;return z(r)||(r=D(r)),A(t,e,r)}function m(t,e){if(!C(t))throw new TypeError;return z(e)||(e=D(e)),I(t,e)}function k(t,e){if(!C(t))throw new TypeError;return z(e)||(e=D(e)),K(t,e)}function T(t,e,r){if(!C(e))throw new TypeError;z(r)||(r=D(r));var n=O(e,r,!1);if(z(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=y.get(e);return o.delete(r),o.size>0||y.delete(e),!0}function E(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!z(n)&&!L(n)){if(!H(n))throw new TypeError;e=n}}return e}function j(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=(0,t[o])(e,r,n);if(!z(i)&&!L(i)){if(!C(i))throw new TypeError;n=i}}return n}function O(t,e,r){var n=y.get(t);if(z(n)){if(!r)return;n=new h,y.set(t,n)}var o=n.get(e);if(z(o)){if(!r)return;o=new h,n.set(e,o)}return o}function x(t,e,r){if(M(t,e,r))return!0;var n=Z(e);return!L(n)&&x(t,n,r)}function M(t,e,r){var n=O(e,r,!1);return!z(n)&&q(n.has(t))}function S(t,e,r){if(M(t,e,r))return A(t,e,r);var n=Z(e);return L(n)?void 0:S(t,n,r)}function A(t,e,r){var n=O(e,r,!1);if(!z(n))return n.get(t)}function P(t,e,r,n){O(r,n,!0).set(t,e)}function I(t,e){var r=K(t,e),n=Z(t);if(null===n)return r;var o=I(n,e);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new p,u=[],f=0,s=r;f<s.length;f++){var a=s[f];i.has(a)||(i.add(a),u.push(a))}for(var c=0,h=o;c<h.length;c++){a=h[c];i.has(a)||(i.add(a),u.push(a))}return u}function K(t,e){var r=[],n=O(t,e,!1);if(z(n))return r;for(var o=J(n.keys()),i=0;;){var u=Q(o);if(!u)return r.length=i,r;var f=N(u);try{r[i]=f}catch(t){try{X(o)}finally{throw t}}i++}}function R(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function z(t){return void 0===t}function L(t){return null===t}function U(t){return"symbol"==typeof t}function C(t){return"object"==typeof t?null!==t:"function"==typeof t}function F(t,e){switch(R(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",o=G(t,n);if(void 0!==o){var i=o.call(t,r);if(C(i))throw new TypeError;return i}return $(t,"default"===r?"number":r)}function $(t,e){if("string"===e){var r=t.toString;if(B(r))if(!C(o=r.call(t)))return o;if(B(n=t.valueOf))if(!C(o=n.call(t)))return o}else{var n;if(B(n=t.valueOf))if(!C(o=n.call(t)))return o;var o,i=t.toString;if(B(i))if(!C(o=i.call(t)))return o}throw new TypeError}function q(t){return!!t}function W(t){return""+t}function D(t){var e=F(t,3);return U(e)?e:W(e)}function V(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function B(t){return"function"==typeof t}function H(t){return"function"==typeof t}function Y(t){switch(R(t)){case 3:case 4:return!0;default:return!1}}function G(t,e){var r=t[e];if(null!=r){if(!B(r))throw new TypeError;return r}}function J(t){var e=G(t,o);if(!B(e))throw new TypeError;var r=e.call(t);if(!C(r))throw new TypeError;return r}function N(t){return t.value}function Q(t){var e=t.next();return!e.done&&e}function X(t){var e=t.return;e&&e.call(t)}function Z(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===a)return e;if(e!==a)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o||o===t?e:o}function tt(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}function et(){return function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}()}function rt(){var t=16,r=s.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+a()}while(s.has(r,t));return r[t]=!0,t}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:s.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function f(t){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):u(new Uint8Array(t),t):u(new Array(t),t)}function a(){var e=f(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}function nt(t){return t.__=void 0,delete t.__,t}t("decorate",l),t("metadata",d),t("defineMetadata",v),t("hasMetadata",_),t("hasOwnMetadata",w),t("getMetadata",g),t("getOwnMetadata",b),t("getMetadataKeys",m),t("getOwnMetadataKeys",k),t("deleteMetadata",T)}(o)}()}(e||(e={}));const n="undefined"!=typeof window?window:global,o=Symbol("byteshift-injector");void 0===n[o]&&(n[o]={d:new Map,i:new Map});const i=new class{register(t){n[o].d.set(t,t)}has(t){return n[o].d.has(t)}get(t){if(!this.has(t))throw console.error("The requested service does not exist:",t.name),new Error("Service does not exist.");return n[o].i.has(t)||n[o].i.set(t,new t),n[o].i.get(t)}};t.Inject=function(t,e){const r=Reflect.getMetadata("design:type",t,e);let n;Object.defineProperty(t,e,{configurable:!1,enumerable:!1,get:()=>{if(!n){if(!i.has(r))throw new Error(`The service requested by property "${e}" of "${t.name}" does not exist.`);n=i.get(r)}return n}})},t.InjectDirect=function(t,e){const r=Reflect.getMetadata("design:type",t,e);if(!i.has(r))throw new Error(`The service requested by property "${e}" of "${t.name}" does not exist.`);t[e]=i.get(r)},t.Service=function(t){i.register(t)},t.ServiceHost=i,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
