!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ByteshiftInjector={})}(this,(function(t){"use strict";var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
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
	***************************************************************************** */!function(t){!function(e){var r="object"==typeof n?n:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=o(t);function o(t,e){return function(n,r){"function"!=typeof t[n]&&Object.defineProperty(t,n,{configurable:!0,writable:!0,value:r}),e&&e(n,r)}}void 0===r.Reflect?r.Reflect=t:i=o(r.Reflect,i),function(t){var e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,r=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,s={__proto__:[]}instanceof Array,u=!o&&!s,c={create:o?function(){return rt(Object.create(null))}:s?function(){return rt({__proto__:null})}:function(){return rt({})},has:u?function(t,n){return e.call(t,n)}:function(t,e){return e in t},get:u?function(t,n){return e.call(t,n)?t[n]:void 0}:function(t,e){return t[e]}},a=Object.getPrototypeOf(Function),f="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?tt():Map,l=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?et():Set,p=new(f||"function"!=typeof WeakMap?nt():WeakMap);function y(t,e,n,r){if(K(n)){if(!B(t))throw new TypeError;if(!X(e))throw new TypeError;return E(t,e)}if(!B(t))throw new TypeError;if(!L(e))throw new TypeError;if(!L(r)&&!K(r)&&!D(r))throw new TypeError;return D(r)&&(r=void 0),O(t,e,n=V(n),r)}function d(t,e){function n(n,r){if(!L(n))throw new TypeError;if(!K(r)&&!Y(r))throw new TypeError;S(t,e,n,r)}return n}function v(t,e,n,r){if(!L(n))throw new TypeError;return K(r)||(r=V(r)),S(t,e,n,r)}function _(t,e,n){if(!L(e))throw new TypeError;return K(n)||(n=V(n)),A(t,e,n)}function w(t,e,n){if(!L(e))throw new TypeError;return K(n)||(n=V(n)),M(t,e,n)}function g(t,e,n){if(!L(e))throw new TypeError;return K(n)||(n=V(n)),j(t,e,n)}function m(t,e,n){if(!L(e))throw new TypeError;return K(n)||(n=V(n)),C(t,e,n)}function b(t,e){if(!L(t))throw new TypeError;return K(e)||(e=V(e)),I(t,e)}function x(t,e){if(!L(t))throw new TypeError;return K(e)||(e=V(e)),P(t,e)}function k(t,e,n){if(!L(e))throw new TypeError;K(n)||(n=V(n));var r=T(e,n,!1);if(K(r))return!1;if(!r.delete(t))return!1;if(r.size>0)return!0;var i=p.get(e);return i.delete(n),i.size>0||p.delete(e),!0}function E(t,e){for(var n=t.length-1;n>=0;--n){var r=(0,t[n])(e);if(!K(r)&&!D(r)){if(!X(r))throw new TypeError;e=r}}return e}function O(t,e,n,r){for(var i=t.length-1;i>=0;--i){var o=(0,t[i])(e,n,r);if(!K(o)&&!D(o)){if(!L(o))throw new TypeError;r=o}}return r}function T(t,e,n){var r=p.get(t);if(K(r)){if(!n)return;r=new h,p.set(t,r)}var i=r.get(e);if(K(i)){if(!n)return;i=new h,r.set(e,i)}return i}function A(t,e,n){if(M(t,e,n))return!0;var r=Z(e);return!D(r)&&A(t,r,n)}function M(t,e,n){var r=T(e,n,!1);return!K(r)&&F(r.has(t))}function j(t,e,n){if(M(t,e,n))return C(t,e,n);var r=Z(e);return D(r)?void 0:j(t,r,n)}function C(t,e,n){var r=T(e,n,!1);if(!K(r))return r.get(t)}function S(t,e,n,r){T(n,r,!0).set(t,e)}function I(t,e){var n=P(t,e),r=Z(t);if(null===r)return n;var i=I(r,e);if(i.length<=0)return n;if(n.length<=0)return i;for(var o=new l,s=[],u=0,c=n;u<c.length;u++){var a=c[u];o.has(a)||(o.add(a),s.push(a))}for(var f=0,h=i;f<h.length;f++){a=h[f];o.has(a)||(o.add(a),s.push(a))}return s}function P(t,e){var n=[],r=T(t,e,!1);if(K(r))return n;for(var i=G(r.keys()),o=0;;){var s=J(i);if(!s)return n.length=o,n;var u=H(s);try{n[o]=u}catch(t){try{Q(i)}finally{throw t}}o++}}function R(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function K(t){return void 0===t}function D(t){return null===t}function z(t){return"symbol"==typeof t}function L(t){return"object"==typeof t?null!==t:"function"==typeof t}function U(t,e){switch(R(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var n=3===e?"string":5===e?"number":"default",i=q(t,r);if(void 0!==i){var o=i.call(t,n);if(L(o))throw new TypeError;return o}return $(t,"default"===n?"number":n)}function $(t,e){if("string"===e){var n=t.toString;if(N(n))if(!L(i=n.call(t)))return i;if(N(r=t.valueOf))if(!L(i=r.call(t)))return i}else{var r;if(N(r=t.valueOf))if(!L(i=r.call(t)))return i;var i,o=t.toString;if(N(o))if(!L(i=o.call(t)))return i}throw new TypeError}function F(t){return!!t}function W(t){return""+t}function V(t){var e=U(t,3);return z(e)?e:W(e)}function B(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function N(t){return"function"==typeof t}function X(t){return"function"==typeof t}function Y(t){switch(R(t)){case 3:case 4:return!0;default:return!1}}function q(t,e){var n=t[e];if(null!=n){if(!N(n))throw new TypeError;return n}}function G(t){var e=q(t,i);if(!N(e))throw new TypeError;var n=e.call(t);if(!L(n))throw new TypeError;return n}function H(t){return t.value}function J(t){var e=t.next();return!e.done&&e}function Q(t){var e=t.return;e&&e.call(t)}function Z(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===a)return e;if(e!==a)return e;var n=t.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return e;var i=r.constructor;return"function"!=typeof i||i===t?e:i}function tt(){var t={},e=[],n=function(){function t(t,e,n){this._index=0,this._keys=t,this._values=e,this._selector=n}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var n=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var n=this._find(t,!0);return this._values[n]=e,this},e.prototype.delete=function(e){var n=this._find(e,!1);if(n>=0){for(var r=this._keys.length,i=n+1;i<r;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new n(this._keys,this._values,r)},e.prototype.values=function(){return new n(this._keys,this._values,o)},e.prototype.entries=function(){return new n(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function r(t,e){return t}function o(t,e){return e}function s(t,e){return[t,e]}}function et(){return function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}()}function nt(){var t=16,n=c.create(),r=i();return function(){function t(){this._key=i()}return t.prototype.has=function(t){var e=o(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=o(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){return o(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=o(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=i()},t}();function i(){var t;do{t="@@WeakMap@@"+a()}while(c.has(n,t));return n[t]=!0,t}function o(t,n){if(!e.call(t,r)){if(!n)return;Object.defineProperty(t,r,{value:c.create()})}return t[r]}function s(t,e){for(var n=0;n<e;++n)t[n]=255*Math.random()|0;return t}function u(t){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):s(new Uint8Array(t),t):s(new Array(t),t)}function a(){var e=u(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var n="",r=0;r<t;++r){var i=e[r];4!==r&&6!==r&&8!==r||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}function rt(t){return t.__=void 0,delete t.__,t}t("decorate",y),t("metadata",d),t("defineMetadata",v),t("hasMetadata",_),t("hasOwnMetadata",w),t("getMetadata",g),t("getOwnMetadata",m),t("getMetadataKeys",b),t("getOwnMetadataKeys",x),t("deleteMetadata",k)}(i)}()}(e||(e={}));const r="custom:byteshift-di:collections";const i="__default_context__";class o{constructor(t,e,n,r){this.definitions=t,this.contexts=e,this.contextId=n,this.onDisposeCallback=r,this.services=new Map,this.isCompiled=!1,this.isDisposed=!1}async get(t){if(this.isDisposed)throw new Error("Cannot grab a service from a disposed container.");if(!this.definitions.has(t))throw new Error(`The service "${t.name}" does not exist.`);this.isCompiled||await this.compile();const e=this.getContextOf(t);return e.services.has(t)?e.services.get(t):e===this?e.compileServiceAsync(t):e.get(t)}async compile(){if(this.isCompiled)return;const t=Array.from(this.definitions.keys());for(const e of t){const t=this.definitions.get(e);if("function"==typeof t.autoload){if(!1===t.autoload(this.contextId))continue}else if(!t.autoload)continue;this.getContextOf(e).services.has(e)||await this.compileServiceAsync(e)}return this.isCompiled=!0,this}dispose(){if(null===this.contextId||this.contextId===i)throw new Error("Root context cannot be disposed of.");this.isDisposed=!0;for(const t of this.services.values())"function"==typeof t?.dispose&&t.dispose();this.services.clear(),this.onDisposeCallback()}async compileServiceAsync(t){const e=await this.compileService(t);return"function"!=typeof e.initialize||await e.initialize(this.contextId),e}async compileService(t){const e=this.definitions.get(t),n=this.getContextOf(t),r=await this.resolveArgumentsOf(t),i=e.factory?await e.factory(t,{dependencies:r,contextId:this.contextId}):new t(...await this.resolveArgumentsOf(t));return n.services.set(t,i),i}async resolveArgumentsOf(t,e){const n=[],i=Reflect.getMetadata("design:paramtypes",t,e)??[],o=Reflect.getMetadata(r,t)??{},s=this.definitions.get(t);let u=0;for(const e of i)if(++u,!s.factory||this.definitions.has(e))if(Array.isArray(o[u-1])){const e=[];for(const n of o[u-1])await this.resolveArgument(t,s,n,u,e);n.push(e)}else await this.resolveArgument(t,s,e,u,n);else n.push(void 0);return n}async resolveArgument(t,e,n,r,i){if(!this.definitions.has(n))throw new Error(`Argument #${r+1} of the constructor of class "${t.name}" is not a registered service.`);if(!e.isolated&&this.definitions.get(n).isolated)throw new Error(`A non-isolated service (${t.name}) cannot depend on an isolated service (${n.name}).`);const o=this.getContextOf(n);o.services.has(n)?i.push(o.services.get(n)):i.push(await o.compileService(n))}getContextOf(t){return this.definitions.get(t)?.isolated?this:this.contexts.get(i)}}class s{constructor(){this.definitions=new Map,this.contexts=new Map,this.reset()}register(t,e){if(this.definitions.has(t))throw new Error(`Class "${t.name}" is already registered.`);this.definitions.set(t,e)}compile(){return this.of().compile()}reset(){this.definitions.clear(),this.contexts.clear(),this.contexts.set(i,new o(this.definitions,this.contexts,null,null))}of(t=i){return this.contexts.has(t)||this.contexts.set(t,new o(this.definitions,this.contexts,t,(()=>{this.contexts.delete(t)}))),this.contexts.get(t)}async get(t){return this.of().get(t)}}const u="undefined"!=typeof window?window:global,c="__byteshift-injector_2__";void 0===u[c]&&(u[c]=new s);const a=u[c];t.Collection=function(t){return function(e,n,i){const o=Reflect.getMetadata(r,e)??{};o[i]=t,Reflect.defineMetadata(r,o,e)}},t.CollectionMetadataKey=r,t.Context=o,t.DEFAULT_CONTEXT_ID=i,t.Service=function(t={}){return function(e){a.register(e,{isolated:t.isolated??!1,autoload:t.autoload??!1,factory:t.factory??void 0})}},t.ServiceContainer=a,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
