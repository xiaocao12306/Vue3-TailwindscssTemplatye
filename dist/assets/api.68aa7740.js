import{ad as _}from"./vendor.fb7a9a94.js";import{H as Se}from"./config.9bb692cf.js";var k={exports:{}},Q=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},ge=Q,w=Object.prototype.toString;function F(t){return w.call(t)==="[object Array]"}function H(t){return typeof t=="undefined"}function Ce(t){return t!==null&&!H(t)&&t.constructor!==null&&!H(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Oe(t){return w.call(t)==="[object ArrayBuffer]"}function Re(t){return typeof FormData!="undefined"&&t instanceof FormData}function xe(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function Ae(t){return typeof t=="string"}function Ne(t){return typeof t=="number"}function Z(t){return t!==null&&typeof t=="object"}function N(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function $e(t){return w.call(t)==="[object Date]"}function Te(t){return w.call(t)==="[object File]"}function Pe(t){return w.call(t)==="[object Blob]"}function ee(t){return w.call(t)==="[object Function]"}function Ue(t){return Z(t)&&ee(t.pipe)}function Le(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function Be(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function je(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function I(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),F(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function M(){var t={};function e(n,a){N(t[a])&&N(n)?t[a]=M(t[a],n):N(n)?t[a]=M({},n):F(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)I(arguments[r],e);return t}function De(t,e,r){return I(e,function(n,a){r&&typeof n=="function"?t[a]=ge(n,r):t[a]=n}),t}function qe(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:F,isArrayBuffer:Oe,isBuffer:Ce,isFormData:Re,isArrayBufferView:xe,isString:Ae,isNumber:Ne,isObject:Z,isPlainObject:N,isUndefined:H,isDate:$e,isFile:Te,isBlob:Pe,isFunction:ee,isStream:Ue,isURLSearchParams:Le,isStandardBrowserEnv:je,forEach:I,merge:M,extend:De,trim:Be,stripBOM:qe},S=h;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var re=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(S.isURLSearchParams(r))n=r.toString();else{var a=[];S.forEach(r,function(f,v){f===null||typeof f=="undefined"||(S.isArray(f)?v=v+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),a.push(te(v)+"="+te(l))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},_e=h;function $(){this.handlers=[]}$.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){_e.forEach(this.handlers,function(s){s!==null&&e(s)})};var ke=$,Fe=h,He=function(e,r){Fe.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},ne=function(e,r,s,n,a){return e.config=r,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ie=ne,se=function(e,r,s,n,a){var o=new Error(e);return Ie(o,r,s,n,a)},Me=se,Je=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(Me("Request failed with status code "+s.status,s.config,null,s.request,s))},T=h,ze=T.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,o,u){var f=[];f.push(r+"="+encodeURIComponent(s)),T.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),T.isString(a)&&f.push("path="+a),T.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ve=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},We=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Xe=Ve,Ge=We,Ke=function(e,r){return e&&!Xe(r)?Ge(e,r):r},J=h,Ye=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Qe=function(e){var r={},s,n,a;return e&&J.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=J.trim(u.substr(0,a)).toLowerCase(),n=J.trim(u.substr(a+1)),s){if(r[s]&&Ye.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},ae=h,Ze=ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var o=a;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(o){var u=ae.isString(o)?n(o):o;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function z(t){this.message=t}z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};z.prototype.__CANCEL__=!0;var P=z,U=h,et=Je,tt=ze,rt=re,nt=Ke,st=Qe,at=Ze,V=se,it=B,ot=P,ie=function(e){return new Promise(function(s,n){var a=e.data,o=e.headers,u=e.responseType,f;function v(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}U.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+d)}var R=nt(e.baseURL,e.url);i.open(e.method.toUpperCase(),rt(R,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function K(){if(!!i){var m="getAllResponseHeaders"in i?st(i.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?i.responseText:i.response,b={data:E,status:i.status,statusText:i.statusText,headers:m,config:e,request:i};et(function(q){s(q),v()},function(q){n(q),v()},b),i=null}}if("onloadend"in i?i.onloadend=K:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(K)},i.onabort=function(){!i||(n(V("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(V("Network Error",e,null,i)),i=null},i.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||it.transitional;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),n(V(E,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},U.isStandardBrowserEnv()){var Y=(e.withCredentials||at(R))&&e.xsrfCookieName?tt.read(e.xsrfCookieName):void 0;Y&&(o[e.xsrfHeaderName]=Y)}"setRequestHeader"in i&&U.forEach(o,function(E,b){typeof a=="undefined"&&b.toLowerCase()==="content-type"?delete o[b]:i.setRequestHeader(b,E)}),U.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(m){!i||(n(!m||m&&m.type?new ot("canceled"):m),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null),i.send(a)})},c=h,oe=He,ut=ne,ft={"Content-Type":"application/x-www-form-urlencoded"};function ue(t,e){!c.isUndefined(t)&&c.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function lt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ie),t}function ct(t,e,r){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var L={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:lt(),transformRequest:[function(e,r){return oe(r,"Accept"),oe(r,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ue(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||r&&r["Content-Type"]==="application/json"?(ue(r,"application/json"),ct(e)):e}],transformResponse:[function(e){var r=this.transitional||L.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?ut(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){L.headers[e]={}});c.forEach(["post","put","patch"],function(e){L.headers[e]=c.merge(ft)});var B=L,dt=h,ht=B,pt=function(e,r,s){var n=this||ht;return dt.forEach(s,function(o){e=o.call(n,e,r)}),e},fe=function(e){return!!(e&&e.__CANCEL__)},le=h,W=pt,mt=fe,vt=B,yt=P;function X(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new yt("canceled")}var bt=function(e){X(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||vt.adapter;return r(e).then(function(n){return X(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return mt(n)||(X(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,ce=function(e,r){r=r||{};var s={};function n(i,l){return p.isPlainObject(i)&&p.isPlainObject(l)?p.merge(i,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function a(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function o(i){if(!p.isUndefined(r[i]))return n(void 0,r[i])}function u(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function f(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var v={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(l){var d=v[l]||a,R=d(l);p.isUndefined(R)&&d!==f||(s[l]=R)}),s},de={version:"0.24.0"},wt=de.version,G={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){G[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var he={};G.transitional=function(e,r,s){function n(a,o){return"[Axios v"+wt+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!he[o]&&(he[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,u):!0}};function Et(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var u=t[a],f=u===void 0||o(u,a,t);if(f!==!0)throw new TypeError("option "+a+" must be "+f);continue}if(r!==!0)throw Error("Unknown option "+a)}}var St={assertOptions:Et,validators:G},pe=h,gt=re,me=ke,ve=bt,j=ce,ye=St,g=ye.validators;function x(t){this.defaults=t,this.interceptors={request:new me,response:new me}}x.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=j(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&ye.assertOptions(r,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1);var s=[],n=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(n=n&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});var a=[];this.interceptors.response.forEach(function(d){a.push(d.fulfilled,d.rejected)});var o;if(!n){var u=[ve,void 0];for(Array.prototype.unshift.apply(u,s),u=u.concat(a),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=e;s.length;){var v=s.shift(),i=s.shift();try{f=v(f)}catch(l){i(l);break}}try{o=ve(f)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};x.prototype.getUri=function(e){return e=j(this.defaults,e),gt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};pe.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(r,s){return this.request(j(s||{},{method:e,url:r,data:(s||{}).data}))}});pe.forEach(["post","put","patch"],function(e){x.prototype[e]=function(r,s,n){return this.request(j(n||{},{method:e,url:r,data:s}))}});var Ct=x,Ot=P;function C(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(o){r.subscribe(o),n=o}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new Ot(n),e(r.reason))})}C.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};C.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};C.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};C.source=function(){var e,r=new C(function(n){e=n});return{token:r,cancel:e}};var Rt=C,xt=function(e){return function(s){return e.apply(null,s)}},At=function(e){return typeof e=="object"&&e.isAxiosError===!0},be=h,Nt=Q,D=Ct,$t=ce,Tt=B;function we(t){var e=new D(t),r=Nt(D.prototype.request,e);return be.extend(r,D.prototype,e),be.extend(r,e),r.create=function(n){return we($t(t,n))},r}var y=we(Tt);y.Axios=D;y.Cancel=P;y.CancelToken=Rt;y.isCancel=fe;y.VERSION=de.version;y.all=function(e){return Promise.all(e)};y.spread=xt;y.isAxiosError=At;k.exports=y;k.exports.default=y;var O=k.exports;O.defaults.baseURL=Se.build;O.defaults.timeout=1e4;O.interceptors.request.use(t=>{if(localStorage&&localStorage.getItem("Authorization")){const e=localStorage.getItem("Authorization");e&&(t.headers.Authorization=e),console.log("get Authorization success=>",e)}return t},t=>(console.log(t),Promise.error(t)));async function A(t,e){const r=await O({url:t,params:e,method:"GET"});if(r.status===200)return r.data;_(r.status),console.log(r)}async function Pt(t,e){const r=await O({url:t,data:e,method:"POST"});if(r.status===200||r.status===201)return r.data;_(r.status),console.log(r)}async function Ut(t,e){const r=await O({url:t,data:e,method:"PUT"});if(r.status===200)return r.data;_(r.status),console.log(r)}const jt=t=>A("article/list"),Dt=t=>A(`/article/detail/${t}`),qt=t=>A(`/user/detail/${t}/`),_t=()=>A("/answer/type/"),kt=t=>Ut(`/answer/count_add/${t}/`),Ft=t=>Pt("/ai/predict/",t),Ht=()=>A("/answer/count_top/100");export{qt as a,_t as b,kt as c,jt as d,Dt as g,Ht as r,Ft as s};
//# sourceMappingURL=api.68aa7740.js.map