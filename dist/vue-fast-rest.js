!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueFastRest={})}(this,function(e){"use strict";function s(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function c(u){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function o(e){s(r,t,n,o,a,"next",e)}function a(e){s(r,t,n,o,a,"throw",e)}o(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(e,t){return e(t={exports:{}},t.exports),t.exports}var x=t(function(e){var t=function(a){var s,e=Object.prototype,c=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function i(e,t,n,r){var a,i,u,s,o=t&&t.prototype instanceof y?t:y,c=Object.create(o.prototype),p=new R(r||[]);return c._invoke=(a=e,i=n,u=p,s=d,function(e,t){if(s===h)throw new Error("Generator is already running");if(s===m){if("throw"===e)throw t;return A()}for(u.method=e,u.arg=t;;){var n=u.delegate;if(n){var r=k(n,u);if(r){if(r===v)continue;return r}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(s===d)throw s=m,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);s=h;var o=f(a,i,u);if("normal"===o.type){if(s=u.done?m:l,o.arg===v)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(s=m,u.method="throw",u.arg=o.arg)}}),c}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=i;var d="suspendedStart",l="suspendedYield",h="executing",m="completed",v={};function y(){}function u(){}function p(){}var g={};g[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(O([])));w&&w!==e&&c.call(w,o)&&(g=w);var b=p.prototype=y.prototype=Object.create(g);function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(s){var t;this._invoke=function(n,r){function e(){return new Promise(function(e,t){!function t(e,n,r,o){var a=f(s[e],s,n);if("throw"!==a.type){var i=a.arg,u=i.value;return u&&"object"==typeof u&&c.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):Promise.resolve(u).then(function(e){i.value=e,r(i)},function(e){return t("throw",e,r,o)})}o(a.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function k(e,t){var n=e.iterator[t.method];if(n===s){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=s,k(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=s),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(c.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=s,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:s,done:!0}}return u.prototype=b.constructor=p,p.constructor=u,p[r]=u.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(b),e},a.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[n]=function(){return this},a.AsyncIterator=S,a.async=function(e,t,n,r){var o=new S(i(e,t,n,r));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(b),b[r]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=O,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=s)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=s),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=c.call(o,"catchLoc"),u=c.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&c.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=s),v}},a}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}),l=t(function(e,t){var n;n=function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}return o.m=n,o.c=r,o.p="",o(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3),a=n(5),i=n(22);function u(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=u(n(11));s.Axios=a,s.create=function(e){return u(i(s.defaults,e))},s.Cancel=n(23),s.CancelToken=n(24),s.isCancel=n(10),s.all=function(e){return Promise.all(e)},s.spread=n(25),e.exports=s,e.exports.default=s},function(e,t,n){var o=n(3),r=n(4),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function u(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},deepMerge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]="object"==typeof e?n({},e):e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},extend:function(n,e,r){return c(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){var o=n(2),r=n(6),a=n(7),i=n(8),u=n(22);function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=u(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(n){s.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){s.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=s},function(e,t,n){var i=n(2);function u(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(i.isURLSearchParams(t))r=t.toString();else{var o=[];i.forEach(t,function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(u(t)+"="+u(e))}))}),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},function(e,t,n){var r=n(2);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){var r=n(2),o=n(9),a=n(10),i=n(11),u=n(20),s=n(21);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return c(t),t.baseURL&&!u(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){var r=n(2);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){var r=n(2),o=n(12),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,s={adapter:("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?u=n(13):"undefined"!=typeof XMLHttpRequest&&(u=n(13)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(a)}),e.exports=s},function(e,t,n){var o=n(2);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,p){var f=p(2),d=p(14),l=p(6),h=p(17),m=p(18),v=p(15);e.exports=function(c){return new Promise(function(n,r){var o=c.data,a=c.headers;f.isFormData(o)&&delete a["Content-Type"];var i=new XMLHttpRequest;if(c.auth){var e=c.auth.username||"",t=c.auth.password||"";a.Authorization="Basic "+btoa(e+":"+t)}if(i.open(c.method.toUpperCase(),l(c.url,c.params,c.paramsSerializer),!0),i.timeout=c.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in i?h(i.getAllResponseHeaders()):null,t={data:c.responseType&&"text"!==c.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:e,config:c,request:i};d(n,r,t),i=null}},i.onabort=function(){i&&(r(v("Request aborted",c,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(v("Network Error",c,null,i)),i=null},i.ontimeout=function(){r(v("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",i)),i=null},f.isStandardBrowserEnv()){var u=p(19),s=(c.withCredentials||m(c.url))&&c.xsrfCookieName?u.read(c.xsrfCookieName):void 0;s&&(a[c.xsrfHeaderName]=s)}if("setRequestHeader"in i&&f.forEach(a,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete a[t]:i.setRequestHeader(t,e)}),c.withCredentials&&(i.withCredentials=!0),c.responseType)try{i.responseType=c.responseType}catch(e){if("json"!==c.responseType)throw e}"function"==typeof c.onDownloadProgress&&i.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(e){i&&(i.abort(),r(e),i=null)}),void 0===o&&(o=null),i.send(o)})}},function(e,t,n){var o=n(15);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(o("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){var i=n(16);e.exports=function(e,t,n,r,o){var a=new Error(e);return i(a,t,n,r,o)}},function(e,t){e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var a=n(2),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&a.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=a.trim(e.substr(0,r)).toLowerCase(),n=a.trim(e.substr(r+1)),t){if(o[t]&&0<=i.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){var i=n(2);e.exports=i.isStandardBrowserEnv()?function(){var n,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return n=a(window.location.href),function(e){var t=i.isString(e)?a(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},function(e,t,n){var u=n(2);e.exports=u.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),u.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),u.isString(r)&&i.push("path="+r),u.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var o=n(2);e.exports=function(t,n){n=n||{};var r={};return o.forEach(["url","method","params","data"],function(e){void 0!==n[e]&&(r[e]=n[e])}),o.forEach(["headers","auth","proxy"],function(e){o.isObject(n[e])?r[e]=o.deepMerge(t[e],n[e]):void 0!==n[e]?r[e]=n[e]:o.isObject(t[e])?r[e]=o.deepMerge(t[e]):void 0!==t[e]&&(r[e]=t[e])}),o.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(e){void 0!==n[e]?r[e]=n[e]:void 0!==t[e]&&(r[e]=t[e])}),r}},function(e,t){function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){var r=n(23);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t){e.exports=function(t){return function(e){return t.apply(null,e)}}}])},e.exports=n()}),h=function(){function e(){p(this,e)}var r,o,a,i,n,u,s,t;return f(e,[{key:"beforeRequest",value:(t=c(x.mark(function e(t){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})},{key:"getReqConfig",value:(s=c(x.mark(function e(t,n){var r,o=arguments;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=2<o.length&&void 0!==o[2]?o[2]:{},t.store.getters.authToken&&(r.headers||(r.headers={}),r.headers.Authorization="Bearer "+t.store.getters.authToken),e.abrupt("return",r);case 3:case"end":return e.stop()}},e)})),function(e,t){return s.apply(this,arguments)})},{key:"onError",value:(u=c(x.mark(function e(t,n){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(n.response));case 1:case"end":return e.stop()}},e)})),function(e,t){return u.apply(this,arguments)})},{key:"onResponse",value:(n=c(x.mark(function e(t,n){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})},{key:"create",value:(i=c(x.mark(function e(t,n,r,o){var a,i=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,o);case 4:return a=e.sent,e.abrupt("return",l.post(n,r,a).then(function(e){return i.onResponse(t,e)}).catch(function(e){return i.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n,r){return i.apply(this,arguments)})},{key:"read",value:(a=c(x.mark(function e(t,n,r){var o,a=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,r);case 4:return o=e.sent,e.abrupt("return",l.get(n,o).then(function(e){return a.onResponse(t,e)}).catch(function(e){return a.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n){return a.apply(this,arguments)})},{key:"update",value:(o=c(x.mark(function e(t,n,r,o){var a,i=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,o);case 4:return a=e.sent,e.abrupt("return",l.patch(n,r,a).then(function(e){return i.onResponse(t,e)}).catch(function(e){return i.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n,r){return o.apply(this,arguments)})},{key:"delete",value:(r=c(x.mark(function e(t,n,r){var o,a=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,r);case 4:return o=e.sent,e.abrupt("return",l.delete(n,o).then(function(e){return a.onResponse(t,e)}).catch(function(e){return a.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n){return r.apply(this,arguments)})}]),e}(),w={actions:{updateUrlEndpoint:"rest/updateUrlEndpoint",createModel:"rest/createModel",updateModel:"rest/updateModel",deleteModel:"rest/deleteModel"},getters:{readUrlEndpoint:"rest/readUrlEndpoint",readEndpointState:"rest/readEndpointState"},mutations:{updateEndpoint:"rest/updateEndpoint"},updateActions:{append:"append",prepend:"prepend",replaceSame:"replaceSame",replace:"replace",insertAfter:"insertAfter"}},m="create",b="read",v="update",E="delete",n=function e(){p(this,e)};d(n,"readUrlEndpoint",function(t){return function(e){return t.endpoints[e]||null}}),d(n,"readEndpointState",function(n){return function(e){var t;return n.endpointsState[e]||(d(t={},m,null),d(t,b,null),d(t,v,null),d(t,E,null),t)}});var S=function(e,t){return e&&e.hasOwnProperty("id")?e.id===t:!(!e||!e.hasOwnProperty("_storeUUID"))&&e._storeUUID===t},k=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;!e._meta&&e.data&&(e._meta={totalCount:e.data.length,pageCount:1,currentPage:1,perPage:2*e.data.length}),e._meta&&(0<t&&(e._meta.totalCount=+e._meta.totalCount+t),0<n&&(e._meta.totalCount=+e._meta.totalCount-n),e._meta.pageCount=Math.ceil(e._meta.totalCount/e._meta.perPage),e._meta.currentPage>e._meta.pageCount&&(e._meta.currentPage=+e._meta.pageCount),e._meta.currentPage<=0&&(e._meta.currentPage=1))},o=function(){function e(){p(this,e)}return f(e,null,[{key:"deleteModel",value:function(e,t){var n=t.endpoint,r=t.ids,o=void 0===r?[]:r,a=t.findFunc,i=void 0===a?S:a,u=e.endpoints[n]||null;0===o.length&&console.warn("Pass ids, example: ids: [45, 56], endpoint: ..."),u&&u.data&&Array.isArray(u.data)&&o.forEach(function(e){for(var t=0;t<u.data.length;t++)if(!0===i(u.data[t],e)){u.data.splice(t,1),k(u,0,1);break}})}},{key:"updateCache",value:function(e,t){var n=t.endpoint,r=t.cache,o=void 0===r?0:r;e.cache[n]=+Date.now()+o}},{key:"updateEndpoint",value:function(e,t){var n=t.response,r=t.insertMany,o=void 0!==r&&r,a=t.endpoint,i=t.action,u=void 0===i?w.updateActions.replace:i,s=t.id,c=t.findFunc,p=void 0===c?S:c,f=n.data||{},d=e.endpoints[a]||null;null===d&&(d=u!==w.updateActions.replace?{data:[],_meta:{}}:{});var l=-1,h=-1;switch(u){case w.updateActions.append:var m;if(!0===o)(m=d.data).push.apply(m,g(f)),k(d,f.length);else d.data.push(f),k(d,1);break;case w.updateActions.prepend:var v;if(!0===o)(v=d.data).unshift.apply(v,g(f)),k(d,f.length);else d.data.unshift(f),k(d,1);break;case w.updateActions.replaceSame:s||console.warn("Unknown id in ",u),-1<(l=d.data.findIndex(function(e){return p(e,s)}))&&(d.data[l]=f);break;case w.updateActions.replace:d=f;break;case w.updateActions.insertAfter:var y;if(s||console.warn("Unknown id in ",u),-1<(h=d.data.findIndex(function(e){return p(e,s)})))if(!0===o)(y=d.data).splice.apply(y,[h+1,0].concat(g(f))),k(d,f.length);else d.data.splice(h+1,0,f),k(d,1);break;default:console.warn("Unknown action: ",u)}e.endpoints[a]=d,e.endpoints=Object.assign({},e.endpoints)}},{key:"setEndpointState",value:function(e,t){var n=t.type,r=void 0===n?b:n,o=t.loading,a=void 0===o?null:o,i=t.endpoint,u=void 0===i?null:i;if(null!==u){var s;if(!e.endpointsState[u])e.endpointsState[u]=(d(s={},m,null),d(s,b,null),d(s,v,null),d(s,E,null),s);e.endpointsState[u][r]=a,e.endpointsState=Object.assign({},e.endpointsState)}}}]),e}(),C=function(){function e(){p(this,e)}return f(e,null,[{key:"generate",value:function(){var n=+new Date;return"undefined"!=typeof performance&&"function"==typeof performance.now&&(n+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)})}}]),e}(),j={restClient:{},store:{},services:{},config:{}},a=function(){function e(){p(this,e)}var t,n,r,o,a;return f(e,null,[{key:"updateUrlEndpoint",value:(a=c(x.mark(function e(t,n){var r,o,a,i,u,s,c,p,f,d,l,h,m,v;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=void 0===r?null:r,a=n.endpoint,i=void 0===a?null:a,u=n.insertMany,s=void 0!==u&&u,c=n.cache,p=void 0===c?null:c,f=n.params,d=n.offline,l=void 0!==d&&d,e.next=3,t.dispatch("getServices");case 3:if(h=e.sent,null===p&&(p=h.config.cache),!0!==l){e.next=11;break}if(t.state.endpoints[i])return e.abrupt("return",{data:t.state.endpoints[i]});e.next=8;break;case 8:return m={data:{data:[]}},i&&(t.commit("updateCache",{endpoint:i,cache:p}),t.commit("updateEndpoint",{endpoint:i,response:m,insertMany:s})),e.abrupt("return",m);case 11:if(v=+new Date,t.state.endpoints[i]&&t.state.cache[i]&&t.state.cache[i]>v)return e.abrupt("return",{data:t.state.endpoints[i]});e.next=15;break;case 15:return i&&t.commit("setEndpointState",{loading:!0,endpoint:i}),e.abrupt("return",h.restClient.read(h,o||i,f).then(function(e){return i&&(t.commit("updateCache",{endpoint:i,cache:p}),t.commit("updateEndpoint",{endpoint:i,response:e,insertMany:s})),i&&t.commit("setEndpointState",{loading:!1,endpoint:i}),e}).catch(function(e){return i&&t.commit("setEndpointState",{loading:!1,endpoint:i}),Promise.reject(e)}));case 17:case"end":return e.stop()}},e)})),function(e,t){return a.apply(this,arguments)})},{key:"createModel",value:(o=c(x.mark(function e(t,n){var r,o,a,i,u,s,c,p,f,d,l,h,m,v;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=void 0===r?null:r,a=n.data,i=n.endpoint,u=void 0===i?null:i,s=n.params,c=n.action,p=void 0===c?w.updateActions.append:c,f=n.id,d=n.offline,l=void 0!==d&&d,e.next=3,t.dispatch("getServices");case 3:if(h=e.sent,m=y({},a),!0===l)return m._storeUUID=C.generate(),v={data:m},u&&t.commit("updateEndpoint",{response:v,endpoint:u,action:p,id:f}),e.abrupt("return",v);e.next=10;break;case 10:return u&&t.commit("setEndpointState",{type:b,loading:!0,endpoint:u}),e.abrupt("return",h.restClient.create(h,o,m,s).then(function(e){return u&&t.commit("updateEndpoint",{response:e,endpoint:u,action:p,id:f}),u&&t.commit("setEndpointState",{type:b,loading:!1,endpoint:u}),e}).catch(function(e){return u&&t.commit("setEndpointState",{type:b,loading:!1,endpoint:u}),Promise.reject(e)}));case 12:case"end":return e.stop()}},e)})),function(e,t){return o.apply(this,arguments)})},{key:"updateModel",value:(r=c(x.mark(function e(t,n){var r,o,a,i,u,s,c,p,f,d,l,h,m;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=void 0===r?null:r,a=n.data,i=n.id,u=n.endpoint,s=void 0===u?null:u,c=n.params,p=n.offline,f=void 0!==p&&p,e.next=3,t.dispatch("getServices");case 3:if(d=e.sent,l=w.updateActions.replaceSame,h=y({},a),!0===f)return h.hasOwnProperty("_storeUUID")||(h._storeUUID=C.generate()),m={data:h},s&&t.commit("updateEndpoint",{response:m,id:i,endpoint:s,action:l}),e.abrupt("return",m);e.next=11;break;case 11:return s&&t.commit("setEndpointState",{type:v,loading:!0,endpoint:s}),e.next=14,d.restClient.update(d,o,h,c).then(function(e){return s&&t.commit("updateEndpoint",{response:e,id:i,endpoint:s,action:l}),s&&t.commit("setEndpointState",{type:v,loading:!1,endpoint:s}),e}).catch(function(e){return s&&t.commit("setEndpointState",{type:v,loading:!1,endpoint:s}),Promise.reject(e)});case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)})},{key:"deleteModel",value:(n=c(x.mark(function e(t,n){var r,o,a,i,u,s,c,p,f;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=void 0===r?null:r,a=n.endpoint,i=void 0===a?null:a,u=n.ids,s=n.params,c=n.offline,p=void 0!==c&&c,e.next=3,t.dispatch("getServices");case 3:if(f=e.sent,!0===p)return i&&t.commit("deleteModel",{endpoint:i,ids:u}),e.abrupt("return",!0);e.next=7;break;case 7:return i&&t.commit("setEndpointState",{type:E,loading:!0,endpoint:i}),e.abrupt("return",f.restClient.delete(f,o,s).then(function(e){return i&&t.commit("deleteModel",{endpoint:i,ids:u}),i&&t.commit("setEndpointState",{type:E,loading:!1,endpoint:i}),e}).catch(function(e){return i&&t.commit("setEndpointState",{type:E,loading:!1,endpoint:i}),Promise.reject(e)}));case 9:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})},{key:"getServices",value:(t=c(x.mark(function e(){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(j));case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})}]),e}(),R={namespaced:!0,state:function(){return{endpoints:{},cache:{},endpointsState:{}}},getters:{readUrlEndpoint:n.readUrlEndpoint,readEndpointState:n.readEndpointState},actions:{updateUrlEndpoint:a.updateUrlEndpoint,createModel:a.createModel,updateModel:a.updateModel,deleteModel:a.deleteModel,getServices:a.getServices},mutations:{deleteModel:o.deleteModel,setEndpointState:o.setEndpointState,updateEndpoint:o.updateEndpoint,updateCache:o.updateCache}},O={cache:0};function i(e,t){var n=t.store,r=t.restClient,o=void 0===r?new h:r,a=t.services,i=void 0===a?{}:a,u=t.preserveState,s=void 0!==u&&u,c=t.config,p=void 0===c?{}:c;if(!n)throw Error("\nYou need to pass store into plugin:    \n    const store = new Vuex.Store() <-- create store or import you store\n    \n    import { plugin } from 'vue-fast-rest'\n    Vue.use(plugin, { store }) <-- pass store to plugin\n    ");var f=Object.assign(j,{restClient:o,store:null,services:i,config:Object.assign(O,p)});R.actions=y({},R.actions,{getServices:function(){return f.store=this,Promise.resolve(f)}}),n.registerModule("rest",R,{preserveState:s})}"undefined"!=typeof window&&window.Vue&&(window.VueFastRest={plugin:i,DefaultRestClient:h,REST:w}),e.DefaultRestClient=h,e.REST=w,e.plugin=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=vue-fast-rest.js.map
