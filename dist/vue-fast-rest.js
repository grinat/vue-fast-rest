!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueFastRest={})}(this,function(e){"use strict";function u(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function c(s){return function(){var e=this,a=arguments;return new Promise(function(t,n){var r=s.apply(e,a);function o(e){u(r,t,n,o,i,"next",e)}function i(e){u(r,t,n,o,i,"throw",e)}o(void 0)})}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n,o,i,a,x=t(function(e){var t=function(i){var u,e=Object.prototype,c=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function a(e,t,n,r){var i,a,s,u,o=t&&t.prototype instanceof y?t:y,c=Object.create(o.prototype),f=new A(r||[]);return c._invoke=(i=e,a=n,s=f,u=d,function(e,t){if(u===h)throw new Error("Generator is already running");if(u===m){if("throw"===e)throw t;return O()}for(s.method=e,s.arg=t;;){var n=s.delegate;if(n){var r=k(n,s);if(r){if(r===v)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(u===d)throw u=m,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u=h;var o=p(i,a,s);if("normal"===o.type){if(u=s.done?m:l,o.arg===v)continue;return{value:o.arg,done:s.done}}"throw"===o.type&&(u=m,s.method="throw",s.arg=o.arg)}}),c}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}i.wrap=a;var d="suspendedStart",l="suspendedYield",h="executing",m="completed",v={};function y(){}function s(){}function f(){}var g={};g[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==e&&c.call(w,o)&&(g=w);var b=f.prototype=y.prototype=Object.create(g);function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(u){var t;this._invoke=function(n,r){function e(){return new Promise(function(e,t){!function t(e,n,r,o){var i=p(u[e],u,n);if("throw"!==i.type){var a=i.arg,s=a.value;return s&&"object"==typeof s&&c.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):Promise.resolve(s).then(function(e){a.value=e,r(a)},function(e){return t("throw",e,r,o)})}o(i.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function k(e,t){var n=e.iterator[t.method];if(n===u){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=u,k(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=p(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=u),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(c.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=u,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:u,done:!0}}return s.prototype=b.constructor=f,f.constructor=s,f[r]=s.displayName="GeneratorFunction",i.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(b),e},i.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[n]=function(){return this},i.AsyncIterator=S,i.async=function(e,t,n,r){var o=new S(a(e,t,n,r));return i.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(b),b[r]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},i.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},i.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=u)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return i.type="throw",i.arg=n,r.next=e,t&&(r.method="next",r.arg=u),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),s=c.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&c.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=u),v}},i}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}),l=t(function(e,t){var n;n=function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}return o.m=n,o.c=r,o.p="",o(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3),i=n(5),a=n(22);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=s(n(11));u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=n(23),u.CancelToken=n(24),u.isCancel=n(10),u.all=function(e){return Promise.all(e)},u.spread=n(25),e.exports=u,e.exports.default=u},function(e,t,n){var o=n(3),r=n(4),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},deepMerge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]="object"==typeof e?n({},e):e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},extend:function(n,e,r){return c(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){var o=n(2),r=n(6),i=n(7),a=n(8),s=n(22);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(n){u.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){u.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=u},function(e,t,n){var a=n(2);function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(a.isURLSearchParams(t))r=t.toString();else{var o=[];a.forEach(t,function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))}))}),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},function(e,t,n){var r=n(2);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){var r=n(2),o=n(9),i=n(10),a=n(11),s=n(20),u=n(21);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){var r=n(2);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){var r=n(2),o=n(12),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?s=n(13):"undefined"!=typeof XMLHttpRequest&&(s=n(13)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u},function(e,t,n){var o=n(2);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,f){var p=f(2),d=f(14),l=f(6),h=f(17),m=f(18),v=f(15);e.exports=function(c){return new Promise(function(n,r){var o=c.data,i=c.headers;p.isFormData(o)&&delete i["Content-Type"];var a=new XMLHttpRequest;if(c.auth){var e=c.auth.username||"",t=c.auth.password||"";i.Authorization="Basic "+btoa(e+":"+t)}if(a.open(c.method.toUpperCase(),l(c.url,c.params,c.paramsSerializer),!0),a.timeout=c.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in a?h(a.getAllResponseHeaders()):null,t={data:c.responseType&&"text"!==c.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:e,config:c,request:a};d(n,r,t),a=null}},a.onabort=function(){a&&(r(v("Request aborted",c,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(v("Network Error",c,null,a)),a=null},a.ontimeout=function(){r(v("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",a)),a=null},p.isStandardBrowserEnv()){var s=f(19),u=(c.withCredentials||m(c.url))&&c.xsrfCookieName?s.read(c.xsrfCookieName):void 0;u&&(i[c.xsrfHeaderName]=u)}if("setRequestHeader"in a&&p.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:a.setRequestHeader(t,e)}),c.withCredentials&&(a.withCredentials=!0),c.responseType)try{a.responseType=c.responseType}catch(e){if("json"!==c.responseType)throw e}"function"==typeof c.onDownloadProgress&&a.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),void 0===o&&(o=null),a.send(o)})}},function(e,t,n){var o=n(15);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(o("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){var a=n(16);e.exports=function(e,t,n,r,o){var i=new Error(e);return a(i,t,n,r,o)}},function(e,t){e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var i=n(2),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t){if(o[t]&&0<=a.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){var a=n(2);e.exports=a.isStandardBrowserEnv()?function(){var n,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function i(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return n=i(window.location.href),function(e){var t=a.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},function(e,t,n){var s=n(2);e.exports=s.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),s.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),s.isString(r)&&a.push("path="+r),s.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var o=n(2);e.exports=function(t,n){n=n||{};var r={};return o.forEach(["url","method","params","data"],function(e){void 0!==n[e]&&(r[e]=n[e])}),o.forEach(["headers","auth","proxy"],function(e){o.isObject(n[e])?r[e]=o.deepMerge(t[e],n[e]):void 0!==n[e]?r[e]=n[e]:o.isObject(t[e])?r[e]=o.deepMerge(t[e]):void 0!==t[e]&&(r[e]=t[e])}),o.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(e){void 0!==n[e]?r[e]=n[e]:void 0!==t[e]&&(r[e]=t[e])}),r}},function(e,t){function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){var r=n(23);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t){e.exports=function(t){return function(e){return t.apply(null,e)}}}])},e.exports=n()}),h=function(){function e(){f(this,e)}var r,o,i,a,n,s,t;return p(e,[{key:"beforeRequest",value:(t=c(x.mark(function e(){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})},{key:"getReqConfig",value:(s=c(x.mark(function e(t,n,r){var o;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={},t.store.getters.authToken&&(o.headers={Authorization:"Bearer  "+t.store.getters.authToken}),r&&(o=y({},o,r)),e.abrupt("return",o);case 4:case"end":return e.stop()}},e)})),function(e,t,n){return s.apply(this,arguments)})},{key:"onError",value:(n=c(x.mark(function e(t,n){return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(n.response));case 1:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})},{key:"create",value:(a=c(x.mark(function e(t,n,r,o){var i,a=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,o);case 4:return i=e.sent,e.abrupt("return",l.post(n,r,i).catch(function(e){return a.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n,r){return a.apply(this,arguments)})},{key:"read",value:(i=c(x.mark(function e(t,n,r){var o,i=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,r);case 4:return o=e.sent,e.abrupt("return",l.get(n,o).catch(function(e){return i.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n){return i.apply(this,arguments)})},{key:"update",value:(o=c(x.mark(function e(t,n,r,o){var i,a=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,o);case 4:return i=e.sent,e.abrupt("return",l.patch(n,i).catch(function(e){return a.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n,r){return o.apply(this,arguments)})},{key:"delete",value:(r=c(x.mark(function e(t,n,r){var o,i=this;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeRequest(t);case 2:return e.next=4,this.getReqConfig(t,n,r);case 4:return o=e.sent,e.abrupt("return",l.delete(n,o).catch(function(e){return i.onError(t,e)}));case 6:case"end":return e.stop()}},e,this)})),function(e,t,n){return r.apply(this,arguments)})}]),e}(),w={actions:{updateUrlEndpoint:"rest/updateUrlEndpoint",createModel:"rest/createModel",updateModel:"rest/updateModel",deleteModel:"rest/deleteModel"},getters:{readUrlEndpoint:"rest/readUrlEndpoint",readEndpointState:"rest/readEndpointState"},mutations:{updateEndpoint:"rest/updateEndpoint"},updateActions:{append:"append",prepend:"prepend",replaceSame:"replaceSame",replace:"replace",insertAfter:"insertAfter"}},m="create",b="read",v="update",E="delete",s={readUrlEndpoint:function(t){return function(e){return t.endpoints[e]||null}},readEndpointState:function(n){return function(e){var t;return n.endpointsState[e]||(d(t={},m,null),d(t,b,null),d(t,v,null),d(t,E,null),t)}}},S=function(e,t){return e&&e.hasOwnProperty("id")?e.id===t:!(!e||!e.hasOwnProperty("_storeUUID"))&&e._storeUUID===t},k={deleteModel:function(e,t){var n=t.endpoint,r=t.ids,o=void 0===r?[]:r,i=t.findFunc,a=void 0===i?S:i,s=e.endpoints[n]||null;0===o.length&&console.warn("Pass ids, example: ids: [45, 56], endpoint: ..."),s&&s.data&&Array.isArray(s.data)&&o.forEach(function(e){for(var t=0;t<s.data.length;t++)if(!0===a(s.data[t],e)){s.data.splice(t,1);break}})},updateCache:function(e,t){var n=t.endpoint,r=t.cache,o=void 0===r?0:r;e.cache[n]=+Date.now()+o},updateEndpoint:function(e,t){var n=t.response,r=t.insertMany,o=void 0!==r&&r,i=t.endpoint,a=t.action,s=void 0===a?w.updateActions.replace:a,u=t.id,c=t.findFunc,f=void 0===c?S:c,p=n.data||{},d=e.endpoints[i]||null;d===p&&(d=s!==w.updateActions.replace?{data:[]}:{});var l=-1,h=-1;switch(s){case w.updateActions.append:var m;if(!0===o)(m=d.data).push.apply(m,g(p));else d.data.push(p);break;case w.updateActions.prepend:var v;if(!0===o)(v=d.data).unshift.apply(v,g(p));else d.data.unshift(p);break;case w.updateActions.replaceSame:u||console.warn("Unknown id in ",s),-1<(l=d.data.findIndex(function(e){return f(e,u)}))&&(d.data[l]=p);break;case w.updateActions.replace:d=p;break;case w.updateActions.insertAfter:var y;if(u||console.warn("Unknown id in ",s),-1<(h=d.data.findIndex(function(e){return f(e,u)})))if(!0===o)(y=d.data).splice.apply(y,[h+1,0].concat(g(p)));else d.data.splice(h+1,0,p);break;default:console.warn("Unknown action: ",s)}e.endpoints[i]=d,e.endpoints=Object.assign({},e.endpoints)},setEndpointState:function(e,t){var n=t.type,r=void 0===n?b:n,o=t.loading,i=void 0===o?null:o,a=t.endpoint,s=void 0===a?null:a;if(null!==s){var u;if(!e.endpointsState[s])e.endpointsState[s]=(d(u={},m,null),d(u,b,null),d(u,v,null),d(u,E,null),u);e.endpointsState[s][r]=i,e.endpointsState=Object.assign({},e.endpointsState)}}},j=function(){function e(){f(this,e)}return p(e,null,[{key:"generate",value:function(){var n=+new Date;return"undefined"!=typeof performance&&"function"==typeof performance.now&&(n+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)})}}]),e}(),R={namespaced:!0,state:function(){return{endpoints:{},cache:{},endpointsState:{}}},getters:s,actions:{updateUrlEndpoint:(a=c(x.mark(function e(t,n){var r,o,i,a,s,u,c,f,p,d,l,h;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=n.endpoint,i=n.insertMany,a=void 0!==i&&i,s=n.params,u=n.cache,c=void 0===u?null:u,f=n.offline,p=void 0!==f&&f,e.next=3,t.dispatch("getServices");case 3:if(d=e.sent,null===c&&(c=d.config.cache),!0!==p){e.next=12;break}if(t.state.endpoints[o])return e.abrupt("return",{data:t.state.endpoints[o]});e.next=8;break;case 8:return l={data:{data:[]}},t.commit("updateCache",{endpoint:o,cache:c}),t.commit("updateEndpoint",{endpoint:o,response:l,insertMany:a}),e.abrupt("return",l);case 12:if(h=+new Date,t.state.endpoints[o]&&t.state.cache[o]&&t.state.cache[o]>h)return e.abrupt("return",{data:t.state.endpoints[o]});e.next=16;break;case 16:return t.commit("setEndpointState",{loading:!0,endpoint:o}),e.abrupt("return",d.restClient.read(d,r||o,s).then(function(e){return e&&(t.commit("updateCache",{endpoint:o,cache:c}),t.commit("updateEndpoint",{endpoint:o,response:e,insertMany:a})),t.commit("setEndpointState",{loading:!1,endpoint:o}),e}).catch(function(e){return t.commit("setEndpointState",{loading:!1,endpoint:o}),Promise.reject(e)}));case 18:case"end":return e.stop()}},e)})),function(e,t){return a.apply(this,arguments)}),createModel:(i=c(x.mark(function e(t,n){var r,o,i,a,s,u,c,f,p,d,l,h,m,v;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=n.data,i=n.endpoint,a=n.cache,s=void 0===a?null:a,u=n.params,c=n.action,f=void 0===c?w.updateActions.append:c,p=n.id,d=n.offline,l=void 0!==d&&d,e.next=3,t.dispatch("getServices");case 3:if(h=e.sent,null===s&&(s=h.config.cache),m=y({},o),!0===l)return m._storeUUID=j.generate(),v={data:m},i&&(t.commit("updateEndpoint",{response:v,endpoint:i,action:f,id:p}),t.commit("updateCache",{endpoint:i,cache:s})),e.abrupt("return",v);e.next=11;break;case 11:return t.commit("setEndpointState",{type:b,loading:!0,endpoint:i}),e.abrupt("return",h.restClient.create(h,r,m,u).then(function(e){return i&&(t.commit("updateEndpoint",{response:e,endpoint:i,action:f,id:p}),t.commit("updateCache",{endpoint:i,cache:s})),t.commit("setEndpointState",{type:b,loading:!1,endpoint:i}),e}).catch(function(e){return t.commit("setEndpointState",{type:b,loading:!1,endpoint:i}),Promise.reject(e)}));case 13:case"end":return e.stop()}},e)})),function(e,t){return i.apply(this,arguments)}),updateModel:(o=c(x.mark(function e(t,n){var r,o,i,a,s,u,c,f,p,d,l;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=n.data,i=n.id,a=n.endpoint,s=n.params,u=n.offline,c=void 0!==u&&u,e.next=3,t.dispatch("getServices");case 3:if(f=e.sent,p=w.updateActions.replaceSame,d=y({},o),!0===c)return d.hasOwnProperty("_storeUUID")||(d._storeUUID=j.generate()),l={data:d},a&&t.commit("updateEndpoint",{response:l,id:i,endpoint:a,action:p}),e.abrupt("return",l);e.next=11;break;case 11:return t.commit("setEndpointState",{type:v,loading:!0,endpoint:a}),e.next=14,f.restClient.update(f,r,d,s).then(function(e){return a&&t.commit("updateEndpoint",{response:e,id:i,endpoint:a,action:p}),t.commit("setEndpointState",{type:v,loading:!1,endpoint:a}),e}).catch(function(e){return t.commit("setEndpointState",{type:v,loading:!1,endpoint:a}),Promise.reject(e)});case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)})),function(e,t){return o.apply(this,arguments)}),deleteModel:(n=c(x.mark(function e(t,n){var r,o,i,a,s,u,c;return x.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,o=n.endpoint,i=n.ids,a=n.params,s=n.offline,u=void 0!==s&&s,e.next=3,t.dispatch("getServices");case 3:if(c=e.sent,!0===u)return o&&t.commit("deleteModel",{endpoint:o,ids:i}),e.abrupt("return",!0);e.next=7;break;case 7:return t.commit("setEndpointState",{type:E,loading:!0,endpoint:o}),e.abrupt("return",c.restClient.delete(c,r,a).then(function(e){return o&&t.commit("deleteModel",{endpoint:o,ids:i}),t.commit("setEndpointState",{type:E,loading:!1,endpoint:o}),e}).catch(function(e){return t.commit("setEndpointState",{type:E,loading:!1,endpoint:o}),Promise.reject(e)}));case 9:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})},mutations:k};function A(e,t){var n=t.store,r=t.restClient,o=void 0===r?new h:r,i=t.services,a=void 0===i?{}:i,s=t.preserveState,u=void 0!==s&&s,c=t.config,f=void 0===c?{}:c;if(!n)throw Error("\nYou need to pass store into plugin:    \n    const store = new Vuex.Store() <-- create store or import you store\n    \n    import { plugin } from 'vue-fast-rest'\n    Vue.use(plugin, { store }) <-- pass store to plugin\n    ");var p={cache:0};R.actions=y({},R.actions,{getServices:function(){return Promise.resolve({restClient:o,store:this,services:a,config:Object.assign(p,f)})}}),n.registerModule("rest",R,{preserveState:u})}"undefined"!=typeof window&&window.Vue&&(window.VueFastRest={plugin:A,DefaultRestClient:h,REST:w}),e.DefaultRestClient=h,e.REST=w,e.plugin=A,Object.defineProperty(e,"__esModule",{value:!0})});
