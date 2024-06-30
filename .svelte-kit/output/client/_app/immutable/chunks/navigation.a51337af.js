import{w as Ti}from"./index.7003f703.js";import{u as qe}from"./profile.54ef22b7.js";import{o as As,h as Xa}from"./routes.d0cde595.js";import{j as Ya}from"./singletons.e36dfd25.js";function Ss(t,e){return function(){return t.apply(e,arguments)}}const{toString:Qa}=Object.prototype,{getPrototypeOf:Ai}=Object,dn=(t=>e=>{const n=Qa.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),re=t=>(t=t.toLowerCase(),e=>dn(e)===t),fn=t=>e=>typeof e===t,{isArray:Ge}=Array,ot=fn("undefined");function Za(t){return t!==null&&!ot(t)&&t.constructor!==null&&!ot(t.constructor)&&z(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Rs=re("ArrayBuffer");function ec(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Rs(t.buffer),e}const tc=fn("string"),z=fn("function"),Cs=fn("number"),pn=t=>t!==null&&typeof t=="object",nc=t=>t===!0||t===!1,$t=t=>{if(dn(t)!=="object")return!1;const e=Ai(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ic=re("Date"),rc=re("File"),sc=re("Blob"),oc=re("FileList"),ac=t=>pn(t)&&z(t.pipe),cc=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||z(t.append)&&((e=dn(t))==="formdata"||e==="object"&&z(t.toString)&&t.toString()==="[object FormData]"))},lc=re("URLSearchParams"),uc=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Et(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Ge(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function bs(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Os=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ps=t=>!ot(t)&&t!==Os;function ni(){const{caseless:t}=Ps(this)&&this||{},e={},n=(i,r)=>{const s=t&&bs(e,r)||r;$t(e[s])&&$t(i)?e[s]=ni(e[s],i):$t(i)?e[s]=ni({},i):Ge(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Et(arguments[i],n);return e}const hc=(t,e,n,{allOwnKeys:i}={})=>(Et(e,(r,s)=>{n&&z(r)?t[s]=Ss(r,n):t[s]=r},{allOwnKeys:i}),t),dc=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fc=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},pc=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ai(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},gc=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},mc=t=>{if(!t)return null;if(Ge(t))return t;let e=t.length;if(!Cs(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},yc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ai(Uint8Array)),_c=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},vc=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Ec=re("HTMLFormElement"),wc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),wr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ic=re("RegExp"),ks=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Et(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Tc=t=>{ks(t,(e,n)=>{if(z(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(z(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ac=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Ge(t)?i(t):i(String(t).split(e)),n},Sc=()=>{},Rc=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Bn="abcdefghijklmnopqrstuvwxyz",Ir="0123456789",Ns={DIGIT:Ir,ALPHA:Bn,ALPHA_DIGIT:Bn+Bn.toUpperCase()+Ir},Cc=(t=16,e=Ns.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function bc(t){return!!(t&&z(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Oc=t=>{const e=new Array(10),n=(i,r)=>{if(pn(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Ge(i)?[]:{};return Et(i,(o,a)=>{const c=n(o,r+1);!ot(c)&&(s[a]=c)}),e[r]=void 0,s}}return i};return n(t,0)},Pc=re("AsyncFunction"),kc=t=>t&&(pn(t)||z(t))&&z(t.then)&&z(t.catch),d={isArray:Ge,isArrayBuffer:Rs,isBuffer:Za,isFormData:cc,isArrayBufferView:ec,isString:tc,isNumber:Cs,isBoolean:nc,isObject:pn,isPlainObject:$t,isUndefined:ot,isDate:ic,isFile:rc,isBlob:sc,isRegExp:Ic,isFunction:z,isStream:ac,isURLSearchParams:lc,isTypedArray:yc,isFileList:oc,forEach:Et,merge:ni,extend:hc,trim:uc,stripBOM:dc,inherits:fc,toFlatObject:pc,kindOf:dn,kindOfTest:re,endsWith:gc,toArray:mc,forEachEntry:_c,matchAll:vc,isHTMLForm:Ec,hasOwnProperty:wr,hasOwnProp:wr,reduceDescriptors:ks,freezeMethods:Tc,toObjectSet:Ac,toCamelCase:wc,noop:Sc,toFiniteNumber:Rc,findKey:bs,global:Os,isContextDefined:Ps,ALPHABET:Ns,generateString:Cc,isSpecCompliantForm:bc,toJSONObject:Oc,isAsyncFn:Pc,isThenable:kc};function E(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}d.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ds=E.prototype,Ls={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ls[t]={value:t}});Object.defineProperties(E,Ls);Object.defineProperty(Ds,"isAxiosError",{value:!0});E.from=(t,e,n,i,r,s)=>{const o=Object.create(Ds);return d.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),E.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Nc=null;function ii(t){return d.isPlainObject(t)||d.isArray(t)}function Ms(t){return d.endsWith(t,"[]")?t.slice(0,-2):t}function Tr(t,e,n){return t?t.concat(e).map(function(r,s){return r=Ms(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function Dc(t){return d.isArray(t)&&!t.some(ii)}const Lc=d.toFlatObject(d,{},null,function(e){return/^is[A-Z]/.test(e)});function gn(t,e,n){if(!d.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,R){return!d.isUndefined(R[g])});const i=n.metaTokens,r=n.visitor||h,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(e);if(!d.isFunction(r))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(d.isDate(p))return p.toISOString();if(!c&&d.isBlob(p))throw new E("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(p)||d.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function h(p,g,R){let O=p;if(p&&!R&&typeof p=="object"){if(d.endsWith(g,"{}"))g=i?g:g.slice(0,-2),p=JSON.stringify(p);else if(d.isArray(p)&&Dc(p)||(d.isFileList(p)||d.endsWith(g,"[]"))&&(O=d.toArray(p)))return g=Ms(g),O.forEach(function($,Ut){!(d.isUndefined($)||$===null)&&e.append(o===!0?Tr([g],Ut,s):o===null?g:g+"[]",l($))}),!1}return ii(p)?!0:(e.append(Tr(R,g,s),l(p)),!1)}const u=[],y=Object.assign(Lc,{defaultVisitor:h,convertValue:l,isVisitable:ii});function w(p,g){if(!d.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));u.push(p),d.forEach(p,function(O,q){(!(d.isUndefined(O)||O===null)&&r.call(e,O,d.isString(q)?q.trim():q,g,y))===!0&&w(O,g?g.concat(q):[q])}),u.pop()}}if(!d.isObject(t))throw new TypeError("data must be an object");return w(t),e}function Ar(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Si(t,e){this._pairs=[],t&&gn(t,this,e)}const Us=Si.prototype;Us.append=function(e,n){this._pairs.push([e,n])};Us.toString=function(e){const n=e?function(i){return e.call(this,i,Ar)}:Ar;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Mc(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xs(t,e,n){if(!e)return t;const i=n&&n.encode||Mc,r=n&&n.serialize;let s;if(r?s=r(e,n):s=d.isURLSearchParams(e)?e.toString():new Si(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Uc{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){d.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Sr=Uc,Fs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xc=typeof URLSearchParams<"u"?URLSearchParams:Si,Fc=typeof FormData<"u"?FormData:null,Bc=typeof Blob<"u"?Blob:null,jc={isBrowser:!0,classes:{URLSearchParams:xc,FormData:Fc,Blob:Bc},protocols:["http","https","file","blob","url","data"]},Bs=typeof window<"u"&&typeof document<"u",Hc=(t=>Bs&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),$c=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bs,hasStandardBrowserEnv:Hc,hasStandardBrowserWebWorkerEnv:$c},Symbol.toStringTag,{value:"Module"})),Y={...Vc,...jc};function zc(t,e){return gn(t,new Y.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Y.isNode&&d.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Wc(t){return d.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function qc(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function js(t){function e(n,i,r,s){let o=n[s++];const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&d.isArray(r)?r.length:o,c?(d.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!d.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&d.isArray(r[o])&&(r[o]=qc(r[o])),!a)}if(d.isFormData(t)&&d.isFunction(t.entries)){const n={};return d.forEachEntry(t,(i,r)=>{e(Wc(i),r,n,0)}),n}return null}function Gc(t,e,n){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ri={transitional:Fs,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=d.isObject(e);if(s&&d.isHTMLForm(e)&&(e=new FormData(e)),d.isFormData(e))return r&&r?JSON.stringify(js(e)):e;if(d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return zc(e,this.formSerializer).toString();if((a=d.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return gn(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),Gc(e)):e}],transformResponse:[function(e){const n=this.transitional||Ri.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&d.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?E.from(a,E.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],t=>{Ri.headers[t]={}});const Ci=Ri,Kc=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jc=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&Kc[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Rr=Symbol("internals");function Ze(t){return t&&String(t).trim().toLowerCase()}function Vt(t){return t===!1||t==null?t:d.isArray(t)?t.map(Vt):String(t)}function Xc(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Yc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function jn(t,e,n,i,r){if(d.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!d.isString(e)){if(d.isString(i))return e.indexOf(i)!==-1;if(d.isRegExp(i))return i.test(e)}}function Qc(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Zc(t,e){const n=d.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class mn{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,c,l){const h=Ze(c);if(!h)throw new Error("header name must be a non-empty string");const u=d.findKey(r,h);(!u||r[u]===void 0||l===!0||l===void 0&&r[u]!==!1)&&(r[u||c]=Vt(a))}const o=(a,c)=>d.forEach(a,(l,h)=>s(l,h,c));return d.isPlainObject(e)||e instanceof this.constructor?o(e,n):d.isString(e)&&(e=e.trim())&&!Yc(e)?o(Jc(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=Ze(e),e){const i=d.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return Xc(r);if(d.isFunction(n))return n.call(this,r,i);if(d.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ze(e),e){const i=d.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||jn(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Ze(o),o){const a=d.findKey(i,o);a&&(!n||jn(i,i[a],a,n))&&(delete i[a],r=!0)}}return d.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||jn(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return d.forEach(this,(r,s)=>{const o=d.findKey(i,s);if(o){n[o]=Vt(r),delete n[s];return}const a=e?Qc(s):String(s).trim();a!==s&&delete n[s],n[a]=Vt(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return d.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&d.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Rr]=this[Rr]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Ze(o);i[a]||(Zc(r,o),i[a]=!0)}return d.isArray(e)?e.forEach(s):s(e),this}}mn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(mn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});d.freezeMethods(mn);const le=mn;function Hn(t,e){const n=this||Ci,i=e||n,r=le.from(i.headers);let s=i.data;return d.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Hs(t){return!!(t&&t.__CANCEL__)}function wt(t,e,n){E.call(this,t??"canceled",E.ERR_CANCELED,e,n),this.name="CanceledError"}d.inherits(wt,E,{__CANCEL__:!0});function el(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tl=Y.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(i)&&o.push("path="+i),d.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function nl(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function il(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function $s(t,e){return t&&!nl(e)?il(t,e):e}const rl=Y.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=d.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function sl(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ol(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=i[s];o||(o=l),n[r]=c,i[r]=l;let u=s,y=0;for(;u!==r;)y+=n[u++],u=u%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),l-o<e)return;const w=h&&l-h;return w?Math.round(y*1e3/w):void 0}}function Cr(t,e){let n=0;const i=ol(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a),l=s<=o;n=s;const h={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-s)/c:void 0,event:r};h[e?"download":"upload"]=!0,t(h)}}const al=typeof XMLHttpRequest<"u",cl=al&&function(t){return new Promise(function(n,i){let r=t.data;const s=le.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let h;if(d.isFormData(r)){if(Y.hasStandardBrowserEnv||Y.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((h=s.getContentType())!==!1){const[g,...R]=h?h.split(";").map(O=>O.trim()).filter(Boolean):[];s.setContentType([g||"multipart/form-data",...R].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",R=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(g+":"+R))}const y=$s(t.baseURL,t.url);u.open(t.method.toUpperCase(),xs(y,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function w(){if(!u)return;const g=le.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:t,request:u};el(function($){n($),l()},function($){i($),l()},O),u=null}if("onloadend"in u?u.onloadend=w:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(w)},u.onabort=function(){u&&(i(new E("Request aborted",E.ECONNABORTED,t,u)),u=null)},u.onerror=function(){i(new E("Network Error",E.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let R=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const O=t.transitional||Fs;t.timeoutErrorMessage&&(R=t.timeoutErrorMessage),i(new E(R,O.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,t,u)),u=null},Y.hasStandardBrowserEnv&&(a&&d.isFunction(a)&&(a=a(t)),a||a!==!1&&rl(y))){const g=t.xsrfHeaderName&&t.xsrfCookieName&&tl.read(t.xsrfCookieName);g&&s.set(t.xsrfHeaderName,g)}r===void 0&&s.setContentType(null),"setRequestHeader"in u&&d.forEach(s.toJSON(),function(R,O){u.setRequestHeader(O,R)}),d.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Cr(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Cr(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=g=>{u&&(i(!g||g.type?new wt(null,t,u):g),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const p=sl(y);if(p&&Y.protocols.indexOf(p)===-1){i(new E("Unsupported protocol "+p+":",E.ERR_BAD_REQUEST,t));return}u.send(r||null)})},ri={http:Nc,xhr:cl};d.forEach(ri,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const br=t=>`- ${t}`,ll=t=>d.isFunction(t)||t===null||t===!1,Vs={getAdapter:t=>{t=d.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!ll(n)&&(i=ri[(o=String(n)).toLowerCase()],i===void 0))throw new E(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(br).join(`
`):" "+br(s[0]):"as no adapter specified";throw new E("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:ri};function $n(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new wt(null,t)}function Or(t){return $n(t),t.headers=le.from(t.headers),t.data=Hn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Vs.getAdapter(t.adapter||Ci.adapter)(t).then(function(i){return $n(t),i.data=Hn.call(t,t.transformResponse,i),i.headers=le.from(i.headers),i},function(i){return Hs(i)||($n(t),i&&i.response&&(i.response.data=Hn.call(t,t.transformResponse,i.response),i.response.headers=le.from(i.response.headers))),Promise.reject(i)})}const Pr=t=>t instanceof le?t.toJSON():t;function Ve(t,e){e=e||{};const n={};function i(l,h,u){return d.isPlainObject(l)&&d.isPlainObject(h)?d.merge.call({caseless:u},l,h):d.isPlainObject(h)?d.merge({},h):d.isArray(h)?h.slice():h}function r(l,h,u){if(d.isUndefined(h)){if(!d.isUndefined(l))return i(void 0,l,u)}else return i(l,h,u)}function s(l,h){if(!d.isUndefined(h))return i(void 0,h)}function o(l,h){if(d.isUndefined(h)){if(!d.isUndefined(l))return i(void 0,l)}else return i(void 0,h)}function a(l,h,u){if(u in e)return i(l,h);if(u in t)return i(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>r(Pr(l),Pr(h),!0)};return d.forEach(Object.keys(Object.assign({},t,e)),function(h){const u=c[h]||r,y=u(t[h],e[h],h);d.isUndefined(y)&&u!==a||(n[h]=y)}),n}const zs="1.6.2",bi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{bi[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const kr={};bi.transitional=function(e,n,i){function r(s,o){return"[Axios v"+zs+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new E(r(o," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!kr[o]&&(kr[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function ul(t,e,n){if(typeof t!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new E("option "+s+" must be "+c,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+s,E.ERR_BAD_OPTION)}}const si={assertOptions:ul,validators:bi},ge=si.validators;class Jt{constructor(e){this.defaults=e,this.interceptors={request:new Sr,response:new Sr}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ve(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&si.assertOptions(i,{silentJSONParsing:ge.transitional(ge.boolean),forcedJSONParsing:ge.transitional(ge.boolean),clarifyTimeoutError:ge.transitional(ge.boolean)},!1),r!=null&&(d.isFunction(r)?n.paramsSerializer={serialize:r}:si.assertOptions(r,{encode:ge.function,serialize:ge.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&d.merge(s.common,s[n.method]);s&&d.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=le.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(c=c&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let h,u=0,y;if(!c){const p=[Or.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),y=p.length,h=Promise.resolve(n);u<y;)h=h.then(p[u++],p[u++]);return h}y=a.length;let w=n;for(u=0;u<y;){const p=a[u++],g=a[u++];try{w=p(w)}catch(R){g.call(this,R);break}}try{h=Or.call(this,w)}catch(p){return Promise.reject(p)}for(u=0,y=l.length;u<y;)h=h.then(l[u++],l[u++]);return h}getUri(e){e=Ve(this.defaults,e);const n=$s(e.baseURL,e.url);return xs(n,e.params,e.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(e){Jt.prototype[e]=function(n,i){return this.request(Ve(i||{},{method:e,url:n,data:(i||{}).data}))}});d.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ve(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Jt.prototype[e]=n(),Jt.prototype[e+"Form"]=n(!0)});const zt=Jt;class Oi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new wt(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Oi(function(r){e=r}),cancel:e}}}const hl=Oi;function dl(t){return function(n){return t.apply(null,n)}}function fl(t){return d.isObject(t)&&t.isAxiosError===!0}const oi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oi).forEach(([t,e])=>{oi[e]=t});const pl=oi;function Ws(t){const e=new zt(t),n=Ss(zt.prototype.request,e);return d.extend(n,zt.prototype,e,{allOwnKeys:!0}),d.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Ws(Ve(t,r))},n}const b=Ws(Ci);b.Axios=zt;b.CanceledError=wt;b.CancelToken=hl;b.isCancel=Hs;b.VERSION=zs;b.toFormData=gn;b.AxiosError=E;b.Cancel=b.CanceledError;b.all=function(e){return Promise.all(e)};b.spread=dl;b.isAxiosError=fl;b.mergeConfig=Ve;b.AxiosHeaders=le;b.formToJSON=t=>js(d.isHTMLForm(t)?new FormData(t):t);b.getAdapter=Vs.getAdapter;b.HttpStatusCode=pl;b.default=b;const fe=b,pe=()=>location.hostname==="localhost"||location.hostname==="127.0.0.1"?"http://localhost:8000":"https://cyclix-game.onrender.com";let gl=null,Nr=Ti(gl),ml=!1,T=Ti(ml),yl=!1,qs=Ti(yl);const K=t=>{Nr.set(t),T.set(!1),setTimeout(()=>{Nr.set(null)},4e3)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_l=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let y=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(y=64)),i.push(n[h],n[u],n[y],n[w])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_l(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new vl;const y=s<<2|a>>4;if(i.push(y),l!==64){const w=a<<4&240|l>>2;if(i.push(w),u!==64){const p=l<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(t){const e=Gs(t);return Ks.encodeByteArray(e,!0)},Xt=function(t){return El(t).replace(/\./g,"")},Js=function(t){try{return Ks.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Yt(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wl(n)||(t[n]=Yt(t[n],e[n]));return t}function wl(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=()=>Il().__FIREBASE_DEFAULTS__,Al=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Js(t[1]);return e&&JSON.parse(e)},Pi=()=>{try{return Tl()||Al()||Sl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xs=t=>{var e,n;return(n=(e=Pi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rl=t=>{const e=Xs(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ys=()=>{var t;return(t=Pi())===null||t===void 0?void 0:t.config},Qs=t=>{var e;return(e=Pi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xt(JSON.stringify(n)),Xt(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ol(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function Pl(){return typeof self=="object"&&self.self===self}function kl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dl(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function Ml(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="FirebaseError";class se extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ul,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?xl(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new se(r,a,i)}}function xl(t,e){return t.replace(Fl,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Fl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Lr(s)&&Lr(o)){if(!Qt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Lr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zs(t,e){const n=new jl(t,e);return n.subscribe.bind(n)}class jl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Vn),r.error===void 0&&(r.error=Vn),r.complete===void 0&&(r.complete=Vn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Cl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zl(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vl(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vl(t){return t===be?void 0:t}function zl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $l(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=[];var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const eo={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},ql=I.INFO,Gl={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Kl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Gl[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yn{constructor(e){this.name=e,this._logLevel=ql,this._logHandler=Kl,this._userLogHandler=null,ki.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}function Jl(t){ki.forEach(e=>{e.setLogLevel(t)})}function Xl(t,e){for(const n of ki){let i=null;e&&e.level&&(i=eo[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(i??r.logLevel)&&t({level:I[s].toLowerCase(),message:a,args:o,type:r.name})}}}const Yl=(t,e)=>e.some(n=>t instanceof n);let Mr,Ur;function Ql(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zl(){return Ur||(Ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const to=new WeakMap,ai=new WeakMap,no=new WeakMap,zn=new WeakMap,Ni=new WeakMap;function eu(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ee(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&to.set(n,t)}).catch(()=>{}),Ni.set(e,t),e}function tu(t){if(ai.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ai.set(t,e)}let ci={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||no.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nu(t){ci=t(ci)}function iu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Wn(this),e,...n);return no.set(i,e.sort?e.sort():[e]),Ee(i)}:Zl().includes(t)?function(...e){return t.apply(Wn(this),e),Ee(to.get(this))}:function(...e){return Ee(t.apply(Wn(this),e))}}function ru(t){return typeof t=="function"?iu(t):(t instanceof IDBTransaction&&tu(t),Yl(t,Ql())?new Proxy(t,ci):t)}function Ee(t){if(t instanceof IDBRequest)return eu(t);if(zn.has(t))return zn.get(t);const e=ru(t);return e!==t&&(zn.set(t,e),Ni.set(e,t)),e}const Wn=t=>Ni.get(t);function su(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ee(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ee(o.result),c.oldVersion,c.newVersion,Ee(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ou=["get","getKey","getAll","getAllKeys","count"],au=["put","add","delete","clear"],qn=new Map;function xr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qn.get(e))return qn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=au.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ou.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qn.set(e,s),s}nu(t=>({...t,get:(e,n,i)=>xr(e,n)||t.get(e,n,i),has:(e,n)=>!!xr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function lu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const li="@firebase/app",Fr="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new yn("@firebase/app"),uu="@firebase/app-compat",hu="@firebase/analytics-compat",du="@firebase/analytics",fu="@firebase/app-check-compat",pu="@firebase/app-check",gu="@firebase/auth",mu="@firebase/auth-compat",yu="@firebase/database",_u="@firebase/database-compat",vu="@firebase/functions",Eu="@firebase/functions-compat",wu="@firebase/installations",Iu="@firebase/installations-compat",Tu="@firebase/messaging",Au="@firebase/messaging-compat",Su="@firebase/performance",Ru="@firebase/performance-compat",Cu="@firebase/remote-config",bu="@firebase/remote-config-compat",Ou="@firebase/storage",Pu="@firebase/storage-compat",ku="@firebase/firestore",Nu="@firebase/firestore-compat",Du="firebase",Lu="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="[DEFAULT]",Mu={[li]:"fire-core",[uu]:"fire-core-compat",[du]:"fire-analytics",[hu]:"fire-analytics-compat",[pu]:"fire-app-check",[fu]:"fire-app-check-compat",[gu]:"fire-auth",[mu]:"fire-auth-compat",[yu]:"fire-rtdb",[_u]:"fire-rtdb-compat",[vu]:"fire-fn",[Eu]:"fire-fn-compat",[wu]:"fire-iid",[Iu]:"fire-iid-compat",[Tu]:"fire-fcm",[Au]:"fire-fcm-compat",[Su]:"fire-perf",[Ru]:"fire-perf-compat",[Cu]:"fire-rc",[bu]:"fire-rc-compat",[Ou]:"fire-gcs",[Pu]:"fire-gcs-compat",[ku]:"fire-fst",[Nu]:"fire-fst-compat","fire-js":"fire-js",[Du]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Map,at=new Map;function Zt(t,e){try{t.container.addComponent(e)}catch(n){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function io(t,e){t.container.addOrOverwriteComponent(e)}function Ae(t){const e=t.name;if(at.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;at.set(e,t);for(const n of Te.values())Zt(n,t);return!0}function Tt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Uu(t,e,n=Ie){Tt(t,e).clearInstance(n)}function xu(){at.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ue=new Ue("app","Firebase",Fu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=Lu;function _n(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ie,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ue.create("bad-app-name",{appName:String(r)});if(n||(n=Ys()),!n)throw ue.create("no-options");const s=Te.get(r);if(s){if(Qt(n,s.options)&&Qt(i,s.config))return s;throw ue.create("duplicate-app",{appName:r})}const o=new Wl(r);for(const c of at.values())o.addComponent(c);const a=new Bu(n,i,o);return Te.set(r,a),a}function Di(t=Ie){const e=Te.get(t);if(!e&&t===Ie&&Ys())return _n();if(!e)throw ue.create("no-app",{appName:t});return e}function ju(){return Array.from(Te.values())}async function ro(t){const e=t.name;Te.has(e)&&(Te.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function G(t,e,n){var i;let r=(i=Mu[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(a.join(" "));return}Ae(new we(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function so(t,e){if(t!==null&&typeof t!="function")throw ue.create("invalid-log-argument");Xl(t,e)}function oo(t){Jl(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firebase-heartbeat-database",$u=1,ct="firebase-heartbeat-store";let Gn=null;function ao(){return Gn||(Gn=su(Hu,$u,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ct)}}}).catch(t=>{throw ue.create("idb-open",{originalErrorMessage:t.message})})),Gn}async function Vu(t){try{return await(await ao()).transaction(ct).objectStore(ct).get(co(t))}catch(e){if(e instanceof se)Le.warn(e.message);else{const n=ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(n.message)}}}async function Br(t,e){try{const i=(await ao()).transaction(ct,"readwrite");await i.objectStore(ct).put(e,co(t)),await i.done}catch(n){if(n instanceof se)Le.warn(n.message);else{const i=ue.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Le.warn(i.message)}}}function co(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=1024,Wu=30*24*60*60*1e3;class qu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ku(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jr(),{heartbeatsToSend:i,unsentEntries:r}=Gu(this._heartbeatsCache.heartbeats),s=Xt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jr(){return new Date().toISOString().substring(0,10)}function Gu(t,e=zu){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Hr(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Hr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ku{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?Ml().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vu(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hr(t){return Xt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){Ae(new we("platform-logger",e=>new cu(e),"PRIVATE")),Ae(new we("heartbeat",e=>new qu(e),"PRIVATE")),G(li,Fr,t),G(li,Fr,"esm2017"),G("fire-js","")}Ju("");const Xu=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:se,SDK_VERSION:Se,_DEFAULT_ENTRY_NAME:Ie,_addComponent:Zt,_addOrOverwriteComponent:io,_apps:Te,_clearComponents:xu,_components:at,_getProvider:Tt,_registerComponent:Ae,_removeServiceInstance:Uu,deleteApp:ro,getApp:Di,getApps:ju,initializeApp:_n,onLog:so,registerVersion:G,setLogLevel:oo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this._delegate=e,this.firebase=n,Zt(e,new we("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ro(this._delegate)))}_getService(e,n=Ie){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ie){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Zt(this._delegate,e)}_addOrOverwriteComponent(e){io(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},$r=new Ue("app-compat","Firebase",Qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:G,setLogLevel:oo,onLog:so,apps:null,SDK_VERSION:Se,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:Xu}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(l){delete e[l]}function r(l){if(l=l||Ie,!Dr(e,l))throw $r.create("no-app",{appName:l});return e[l]}r.App=t;function s(l,h={}){const u=_n(l,h);if(Dr(e,u.name))return e[u.name];const y=new t(u,n);return e[u.name]=y,y}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const h=l.name,u=h.replace("-compat","");if(Ae(l)&&l.type==="PUBLIC"){const y=(w=r())=>{if(typeof w[u]!="function")throw $r.create("invalid-app-argument",{appName:h});return w[u]()};l.serviceProps!==void 0&&Yt(y,l.serviceProps),n[u]=y,t.prototype[u]=function(...w){return this._getService.bind(this,h).apply(this,l.multipleInstances?w:[])}}return l.type==="PUBLIC"?n[u]:null}function c(l,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){const t=Zu(Yu);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:lo,extendNamespace:e,createSubscribe:Zs,ErrorFactory:Ue,deepExtend:Yt});function e(n){Yt(t,n)}return t}const eh=lo();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new yn("@firebase/app-compat"),th="@firebase/app-compat",nh="0.2.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){G(th,nh,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Pl()&&self.firebase!==void 0){Vr.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Vr.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const rh=eh;ih();var sh="firebase",oh="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rh.registerVersion(sh,oh,"app-compat");var ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f,Li=Li||{},m=ah||self;function vn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function At(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ch(t){return Object.prototype.hasOwnProperty.call(t,Kn)&&t[Kn]||(t[Kn]=++lh)}var Kn="closure_uid_"+(1e9*Math.random()>>>0),lh=0;function uh(t,e,n){return t.call.apply(t.bind,arguments)}function hh(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function x(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x=uh:x=hh,x.apply(null,arguments)}function xt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function k(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Re(){this.s=this.s,this.o=this.o}var dh=0;Re.prototype.s=!1;Re.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dh!=0)&&ch(this)};Re.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uo=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mi(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function zr(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(vn(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var fh=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};m.addEventListener("test",n,e),m.removeEventListener("test",n,e)}catch{}return t}();function lt(t){return/^[\s\xa0]*$/.test(t)}function En(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function J(t){return En().indexOf(t)!=-1}function Ui(t){return Ui[" "](t),t}Ui[" "]=function(){};function ph(t,e){var n=ad;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gh=J("Opera"),ut=J("Trident")||J("MSIE"),ho=J("Edge"),ui=ho||ut,fo=J("Gecko")&&!(En().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),mh=En().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");function po(){var t=m.document;return t?t.documentMode:void 0}e:{var Wr="",Jn=function(){var t=En();if(fo)return/rv:([^\);]+)(\)|;)/.exec(t);if(ho)return/Edge\/([\d\.]+)/.exec(t);if(ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mh)return/WebKit\/(\S+)/.exec(t);if(gh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jn&&(Wr=Jn?Jn[1]:""),ut){var qr=po();if(qr!=null&&qr>parseFloat(Wr))break e}}m.document&&ut&&po();function ht(t,e){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fo){e:{try{Ui(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ht.$.h.call(this)}}k(ht,F);var yh={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),_h=0;function vh(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++_h,this.fa=this.ia=!1}function wn(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function xi(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Eh(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function go(t){const e={};for(const n in t)e[n]=t[n];return e}const Gr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mo(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Gr.length;s++)n=Gr[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function In(t){this.src=t,this.g={},this.h=0}In.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=di(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vh(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function hi(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=uo(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(wn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function di(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var Fi="closure_lm_"+(1e6*Math.random()|0),Xn={};function yo(t,e,n,i,r){if(i&&i.once)return vo(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yo(t,e[s],n,i,r);return null}return n=Hi(n),t&&t[St]?t.O(e,n,At(i)?!!i.capture:!!i,r):_o(t,e,n,!1,i,r)}function _o(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=At(r)?!!r.capture:!!r,a=ji(t);if(a||(t[Fi]=a=new In(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=wh(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)fh||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(wo(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wh(){function t(n){return e.call(t.src,t.listener,n)}const e=Ih;return t}function vo(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vo(t,e[s],n,i,r);return null}return n=Hi(n),t&&t[St]?t.P(e,n,At(i)?!!i.capture:!!i,r):_o(t,e,n,!0,i,r)}function Eo(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Eo(t,e[s],n,i,r);else i=At(i)?!!i.capture:!!i,n=Hi(n),t&&t[St]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=di(s,n,i,r),-1<n&&(wn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ji(t))&&(e=t.g[e.toString()],t=-1,e&&(t=di(e,n,i,r)),(n=-1<t?e[t]:null)&&Bi(n))}function Bi(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[St])hi(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wo(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ji(e))?(hi(n,t),n.h==0&&(n.src=null,e[Fi]=null)):wn(t)}}}function wo(t){return t in Xn?Xn[t]:Xn[t]="on"+t}function Ih(t,e){if(t.fa)t=!0;else{e=new ht(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Bi(t),t=n.call(i,e)}return t}function ji(t){return t=t[Fi],t instanceof In?t:null}var Yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(t){return typeof t=="function"?t:(t[Yn]||(t[Yn]=function(e){return t.handleEvent(e)}),t[Yn])}function P(){Re.call(this),this.i=new In(this),this.S=this,this.J=null}k(P,Re);P.prototype[St]=!0;P.prototype.removeEventListener=function(t,e,n,i){Eo(this,t,e,n,i)};function D(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var r=e;e=new F(i,t),mo(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Ft(o,i,!0,e)&&r}if(o=e.g=t,r=Ft(o,i,!0,e)&&r,r=Ft(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Ft(o,i,!1,e)&&r}P.prototype.N=function(){if(P.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)wn(n[i]);delete t.g[e],t.h--}}this.J=null};P.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};P.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ft(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hi(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var $i=m.JSON.stringify;class Th{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ah(){var t=Vi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Sh{constructor(){this.h=this.g=null}add(e,n){const i=Io.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Io=new Th(()=>new Rh,t=>t.reset());class Rh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ch(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bh(t){m.setTimeout(()=>{throw t},0)}let dt,ft=!1,Vi=new Sh,To=()=>{const t=m.Promise.resolve(void 0);dt=()=>{t.then(Oh)}};var Oh=()=>{for(var t;t=Ah();){try{t.h.call(t.g)}catch(n){bh(n)}var e=Io;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ft=!1};function Tn(t,e){P.call(this),this.h=t||1,this.g=e||m,this.j=x(this.qb,this),this.l=Date.now()}k(Tn,P);f=Tn.prototype;f.ga=!1;f.T=null;f.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),D(this,"tick"),this.ga&&(zi(this),this.start()))}};f.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}f.N=function(){Tn.$.N.call(this),zi(this),delete this.g};function Wi(t,e,n){if(typeof t=="function")n&&(t=x(t,n));else if(t&&typeof t.handleEvent=="function")t=x(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:m.setTimeout(t,e||0)}function Ao(t){t.g=Wi(()=>{t.g=null,t.i&&(t.i=!1,Ao(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ph extends Re{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ao(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(t){Re.call(this),this.h=t,this.g={}}k(pt,Re);var Kr=[];function So(t,e,n,i){Array.isArray(n)||(n&&(Kr[0]=n.toString()),n=Kr);for(var r=0;r<n.length;r++){var s=yo(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ro(t){xi(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bi(e)},t),t.g={}}pt.prototype.N=function(){pt.$.N.call(this),Ro(this)};pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Ea=function(){this.g=!1};function kh(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Nh(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Fe(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Lh(t,n)+(i?" "+i:"")})}function Dh(t,e){t.info(function(){return"TIMEOUT: "+e})}An.prototype.info=function(){};function Lh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return $i(n)}catch{return e}}var Je={},Jr=null;function qi(){return Jr=Jr||new P}Je.Ta="serverreachability";function Co(t){F.call(this,Je.Ta,t)}k(Co,F);function gt(t){const e=qi();D(e,new Co(e))}Je.STAT_EVENT="statevent";function bo(t,e){F.call(this,Je.STAT_EVENT,t),this.stat=e}k(bo,F);function j(t){const e=qi();D(e,new bo(e,t))}Je.Ua="timingevent";function Oo(t,e){F.call(this,Je.Ua,t),this.size=e}k(Oo,F);function Rt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},e)}var Gi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ki(){}Ki.prototype.h=null;function Xr(t){return t.h||(t.h=t.i())}function Uh(){}var Ct={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ji(){F.call(this,"d")}k(Ji,F);function Xi(){F.call(this,"c")}k(Xi,F);var fi;function Sn(){}k(Sn,Ki);Sn.prototype.g=function(){return new XMLHttpRequest};Sn.prototype.i=function(){return{}};fi=new Sn;function bt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new pt(this),this.P=xh,t=ui?125:void 0,this.V=new Tn(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Po}function Po(){this.i=null,this.g="",this.h=!1}var xh=45e3,ko={},pi={};f=bt.prototype;f.setTimeout=function(t){this.P=t};function gi(t,e,n){t.L=1,t.A=Cn(he(e)),t.u=n,t.S=!0,No(t,null)}function No(t,e){t.G=Date.now(),Ot(t),t.B=he(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),jo(n.i,"t",i),t.o=0,n=t.l.J,t.h=new Po,t.g=aa(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ph(x(t.Pa,t,t.g),t.O)),So(t.U,t.g,"readystatechange",t.nb),e=t.I?go(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),gt(),kh(t.j,t.v,t.B,t.m,t.W,t.u)}f.nb=function(t){t=t.target;const e=this.M;e&&Q(t)==3?e.l():this.Pa(t)};f.Pa=function(t){try{if(t==this.g)e:{const h=Q(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>h)&&(h!=3||ui||this.g&&(this.h.h||this.g.ja()||es(this.g)))){this.J||h!=4||e==7||(e==8||0>=u?gt(3):gt(2)),Rn(this);var n=this.g.da();this.ca=n;t:if(Do(this)){var i=es(this.g);t="";var r=i.length,s=Q(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),rt(this);var o="";break t}this.h.i=new m.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Nh(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lt(a)){var l=a;break t}}l=null}if(n=l)Fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mi(this,n);else{this.i=!1,this.s=3,j(12),Oe(this),rt(this);break e}}this.S?(Lo(this,h,o),ui&&this.i&&h==3&&(So(this.U,this.V,"tick",this.mb),this.V.start())):(Fe(this.j,this.m,o,null),mi(this,o)),h==4&&Oe(this),this.i&&!this.J&&(h==4?ia(this.l,this):(this.i=!1,Ot(this)))}else rd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,j(12)):(this.s=0,j(13)),Oe(this),rt(this)}}}catch{}finally{}};function Do(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Lo(t,e,n){let i=!0,r;for(;!t.J&&t.o<n.length;)if(r=Fh(t,n),r==pi){e==4&&(t.s=4,j(14),i=!1),Fe(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ko){t.s=4,j(15),Fe(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Fe(t.j,t.m,r,null),mi(t,r);Do(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,j(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(e),e.M=!0,j(11))):(Fe(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),rt(t))}f.mb=function(){if(this.g){var t=Q(this.g),e=this.g.ja();this.o<e.length&&(Rn(this),Lo(this,t,e),this.i&&t!=4&&Ot(this))}};function Fh(t,e){var n=t.o,i=e.indexOf(`
`,n);return i==-1?pi:(n=Number(e.substring(n,i)),isNaN(n)?ko:(i+=1,i+n>e.length?pi:(e=e.slice(i,i+n),t.o=i+n,e)))}f.cancel=function(){this.J=!0,Oe(this)};function Ot(t){t.Y=Date.now()+t.P,Mo(t,t.P)}function Mo(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Rt(x(t.lb,t),e)}function Rn(t){t.C&&(m.clearTimeout(t.C),t.C=null)}f.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Dh(this.j,this.B),this.L!=2&&(gt(),j(17)),Oe(this),this.s=2,rt(this)):Mo(this,this.Y-t)};function rt(t){t.l.H==0||t.J||ia(t.l,t)}function Oe(t){Rn(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,zi(t.V),Ro(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mi(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yi(n.i,t))){if(!t.K&&yi(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nn(n),kn(n);else break e;tr(n),j(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Rt(x(n.ib,n),6e3));if(1>=Vo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pe(n,11)}else if((t.K||n.g==t)&&nn(n),!lt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const u=l[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const y=l[5];y!=null&&typeof y=="number"&&0<y&&(i=1.5*y,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const w=t.g;if(w){const p=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Yi(s,s.h),s.h=null))}if(i.F){const g=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.Da=g,S(i.I,i.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=oa(i,i.J?i.pa:null,i.Y),o.K){zo(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Rn(a),Ot(a)),i.g=o}else ta(i);0<n.j.length&&Nn(n)}else l[0]!="stop"&&l[0]!="close"||Pe(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Pe(n,7):er(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}gt(4)}catch{}}function Bh(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function jh(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vn(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Uo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jh(t),i=Bh(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hh(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ne(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ne){this.h=t.h,en(this,t.j),this.s=t.s,this.g=t.g,tn(this,t.m),this.l=t.l;var e=t.i,n=new mt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yr(this,n),this.o=t.o}else t&&(e=String(t).match(xo))?(this.h=!1,en(this,e[1]||"",!0),this.s=nt(e[2]||""),this.g=nt(e[3]||"",!0),tn(this,e[4]),this.l=nt(e[5]||"",!0),Yr(this,e[6]||"",!0),this.o=nt(e[7]||"")):(this.h=!1,this.i=new mt(null,this.h))}Ne.prototype.toString=function(){var t=[],e=this.j;e&&t.push(it(e,Qr,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(it(e,Qr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(it(n,n.charAt(0)=="/"?zh:Vh,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",it(n,qh)),t.join("")};function he(t){return new Ne(t)}function en(t,e,n){t.j=n?nt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yr(t,e,n){e instanceof mt?(t.i=e,Gh(t.i,t.h)):(n||(e=it(e,Wh)),t.i=new mt(e,t.h))}function S(t,e,n){t.i.set(e,n)}function Cn(t){return S(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function it(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$h),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $h(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qr=/[#\/\?@]/g,Vh=/[#\?:]/g,zh=/[#\?]/g,Wh=/[#\?@]/g,qh=/#/g;function mt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ce(t){t.g||(t.g=new Map,t.h=0,t.i&&Hh(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}f=mt.prototype;f.add=function(t,e){Ce(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Fo(t,e){Ce(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bo(t,e){return Ce(t),e=Xe(t,e),t.g.has(e)}f.forEach=function(t,e){Ce(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};f.ta=function(){Ce(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};f.Z=function(t){Ce(this);let e=[];if(typeof t=="string")Bo(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};f.set=function(t,e){return Ce(this),this.i=null,t=Xe(this,t),Bo(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};f.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jo(t,e,n){Fo(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),Mi(n)),t.h+=n.length)}f.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Gh(t,e){e&&!t.j&&(Ce(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Fo(this,i),jo(this,r,n))},t)),t.j=e}var Kh=class{constructor(t,e){this.g=t,this.map=e}};function Ho(t){this.l=t||Jh,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.g&&m.g.Ka&&m.g.Ka()&&m.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jh=10;function $o(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vo(t){return t.h?1:t.g?t.g.size:0}function yi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yi(t,e){t.g?t.g.add(e):t.h=e}function zo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ho.prototype.cancel=function(){if(this.i=Wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wo(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mi(t.i)}var Xh=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function Yh(){this.g=new Xh}function Qh(t,e,n){const i=n||"";try{Uo(t,function(r,s){let o=r;At(r)&&(o=$i(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Zh(t,e){const n=new An;if(m.Image){const i=new Image;i.onload=xt(Bt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xt(Bt,n,i,"TestLoadImage: error",!1,e),i.onabort=xt(Bt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xt(Bt,n,i,"TestLoadImage: timeout",!1,e),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Bt(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function bn(t){this.l=t.ec||null,this.j=t.ob||!1}k(bn,Ki);bn.prototype.g=function(){return new On(this.l,this.j)};bn.prototype.i=function(t){return function(){return t}}({});function On(t,e){P.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}k(On,P);var Qi=0;f=On.prototype;f.open=function(t,e){if(this.readyState!=Qi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yt(this)};f.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||m).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};f.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pt(this)),this.readyState=Qi};f.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yt(this)),this.g&&(this.readyState=3,yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qo(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qo(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}f.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pt(this):yt(this),this.readyState==3&&qo(this)}};f.Za=function(t){this.g&&(this.response=this.responseText=t,Pt(this))};f.Ya=function(t){this.g&&(this.response=t,Pt(this))};f.ka=function(){this.g&&Pt(this)};function Pt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yt(t)}f.setRequestHeader=function(t,e){this.v.append(t,e)};f.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};f.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ed=m.JSON.parse;function C(t){P.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Go,this.L=this.M=!1}k(C,P);var Go="",td=/^https?$/i,nd=["POST","PUT"];f=C.prototype;f.Oa=function(t){this.M=t};f.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fi.g(),this.C=this.u?Xr(this.u):Xr(fi),this.g.onreadystatechange=x(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Zr(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=m.FormData&&t instanceof m.FormData,!(0<=uo(nd,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xo(this),0<this.B&&((this.L=id(this.g))?(this.g.timeout=this.B,this.g.ontimeout=x(this.ua,this)):this.A=Wi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zr(this,s)}};function id(t){return ut&&typeof t.timeout=="number"&&t.ontimeout!==void 0}f.ua=function(){typeof Li<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,D(this,"timeout"),this.abort(8))};function Zr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ko(t),Pn(t)}function Ko(t){t.F||(t.F=!0,D(t,"complete"),D(t,"error"))}f.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,D(this,"complete"),D(this,"abort"),Pn(this))};f.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pn(this,!0)),C.$.N.call(this)};f.La=function(){this.s||(this.G||this.v||this.l?Jo(this):this.kb())};f.kb=function(){Jo(this)};function Jo(t){if(t.h&&typeof Li<"u"&&(!t.C[1]||Q(t)!=4||t.da()!=2)){if(t.v&&Q(t)==4)Wi(t.La,0,t);else if(D(t,"readystatechange"),Q(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(xo)[1]||null;!r&&m.self&&m.self.location&&(r=m.self.location.protocol.slice(0,-1)),i=!td.test(r?r.toLowerCase():"")}n=i}if(n)D(t,"complete"),D(t,"success");else{t.m=6;try{var s=2<Q(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Ko(t)}}finally{Pn(t)}}}}function Pn(t,e){if(t.g){Xo(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||D(t,"ready");try{n.onreadystatechange=i}catch{}}}function Xo(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(m.clearTimeout(t.A),t.A=null)}f.isActive=function(){return!!this.g};function Q(t){return t.g?t.g.readyState:0}f.da=function(){try{return 2<Q(this)?this.g.status:-1}catch{return-1}};f.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};f.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ed(e)}};function es(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Go:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function rd(t){const e={};t=(t.g&&2<=Q(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(lt(t[i]))continue;var n=Ch(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Eh(e,function(i){return i.join(", ")})}f.Ia=function(){return this.m};f.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yo(t){let e="";return xi(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Zi(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Yo(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):S(t,e,n))}function et(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qo(t){this.Ga=0,this.j=[],this.l=new An,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=et("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=et("baseRetryDelayMs",5e3,t),this.hb=et("retryDelaySeedMs",1e4,t),this.eb=et("forwardChannelMaxRetries",2,t),this.xa=et("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ho(t&&t.concurrentRequestLimit),this.Ja=new Yh,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}f=Qo.prototype;f.ra=8;f.H=1;function er(t){if(Zo(t),t.H==3){var e=t.W++,n=he(t.I);if(S(n,"SID",t.K),S(n,"RID",e),S(n,"TYPE","terminate"),kt(t,n),e=new bt(t,t.l,e),e.L=2,e.A=Cn(he(n)),n=!1,m.navigator&&m.navigator.sendBeacon)try{n=m.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&m.Image&&(new Image().src=e.A,n=!0),n||(e.g=aa(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ot(e)}sa(t)}function kn(t){t.g&&(nr(t),t.g.cancel(),t.g=null)}function Zo(t){kn(t),t.u&&(m.clearTimeout(t.u),t.u=null),nn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&m.clearTimeout(t.m),t.m=null)}function Nn(t){if(!$o(t.i)&&!t.m){t.m=!0;var e=t.Na;dt||To(),ft||(dt(),ft=!0),Vi.add(e,t),t.C=0}}function sd(t,e){return Vo(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Rt(x(t.Na,t,e),ra(t,t.C)),t.C++,!0)}f.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new bt(this,this.l,t);let s=this.s;if(this.U&&(s?(s=go(s),mo(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ea(this,r,e),n=he(this.I),S(n,"RID",t),S(n,"CVER",22),this.F&&S(n,"X-HTTP-Session-Id",this.F),kt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Yo(s)))+"&"+e:this.o&&Zi(n,this.o,s)),Yi(this.i,r),this.bb&&S(n,"TYPE","init"),this.P?(S(n,"$req",e),S(n,"SID","null"),r.aa=!0,gi(r,n,null)):gi(r,n,e),this.H=2}}else this.H==3&&(t?ts(this,t):this.j.length==0||$o(this.i)||ts(this))};function ts(t,e){var n;e?n=e.m:n=t.W++;const i=he(t.I);S(i,"SID",t.K),S(i,"RID",n),S(i,"AID",t.V),kt(t,i),t.o&&t.s&&Zi(i,t.o,t.s),n=new bt(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ea(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yi(t.i,n),gi(n,i,e)}function kt(t,e){t.na&&xi(t.na,function(n,i){S(e,i,n)}),t.h&&Uo({},function(n,i){S(e,i,n)})}function ea(t,e,n){n=Math.min(t.j.length,n);var i=t.h?x(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const h=r[c].map;if(l-=s,0>l)s=Math.max(0,r[c].g-100),a=!1;else try{Qh(h,o,"req"+l+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function ta(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;dt||To(),ft||(dt(),ft=!0),Vi.add(e,t),t.A=0}}function tr(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Rt(x(t.Ma,t),ra(t,t.A)),t.A++,!0)}f.Ma=function(){if(this.u=null,na(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Rt(x(this.jb,this),t)}};f.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,j(10),kn(this),na(this))};function nr(t){t.B!=null&&(m.clearTimeout(t.B),t.B=null)}function na(t){t.g=new bt(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=he(t.wa);S(e,"RID","rpc"),S(e,"SID",t.K),S(e,"AID",t.V),S(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&S(e,"TO",t.qa),S(e,"TYPE","xmlhttp"),kt(t,e),t.o&&t.s&&Zi(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Cn(he(e)),n.u=null,n.S=!0,No(n,t)}f.ib=function(){this.v!=null&&(this.v=null,kn(this),tr(this),j(19))};function nn(t){t.v!=null&&(m.clearTimeout(t.v),t.v=null)}function ia(t,e){var n=null;if(t.g==e){nn(t),nr(t),t.g=null;var i=2}else if(yi(t.i,e))n=e.F,zo(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;i=qi(),D(i,new Oo(i,n)),Nn(t)}else ta(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(i==1&&sd(t,e)||i==2&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Pe(t,5);break;case 4:Pe(t,10);break;case 3:Pe(t,6);break;default:Pe(t,2)}}}function ra(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Pe(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=x(t.pb,t);n||(n=new Ne("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||en(n,"https"),Cn(n)),Zh(n.toString(),i)}else j(2);t.H=0,t.h&&t.h.za(e),sa(t),Zo(t)}f.pb=function(t){t?(this.l.info("Successfully pinged google.com"),j(2)):(this.l.info("Failed to ping google.com"),j(1))};function sa(t){if(t.H=0,t.ma=[],t.h){const e=Wo(t.i);(e.length!=0||t.j.length!=0)&&(zr(t.ma,e),zr(t.ma,t.j),t.i.i.length=0,Mi(t.j),t.j.length=0),t.h.ya()}}function oa(t,e,n){var i=n instanceof Ne?he(n):new Ne(n);if(i.g!="")e&&(i.g=e+"."+i.g),tn(i,i.m);else{var r=m.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ne(null);i&&en(s,i),e&&(s.g=e),r&&tn(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&S(i,n,e),S(i,"VER",t.ra),kt(t,i),i}function aa(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new C(new bn({ob:n})):new C(t.va),e.Oa(t.J),e}f.isActive=function(){return!!this.h&&this.h.isActive(this)};function ca(){}f=ca.prototype;f.Ba=function(){};f.Aa=function(){};f.za=function(){};f.ya=function(){};f.isActive=function(){return!0};f.Va=function(){};function W(t,e){P.call(this),this.g=new Qo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!lt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!lt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ye(this)}k(W,P);W.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;j(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=oa(t,null,t.Y),Nn(t)};W.prototype.close=function(){er(this.g)};W.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$i(t),t=n);e.j.push(new Kh(e.fb++,t)),e.H==3&&Nn(e)};W.prototype.N=function(){this.g.h=null,delete this.j,er(this.g),delete this.g,W.$.N.call(this)};function la(t){Ji.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}k(la,Ji);function ua(){Xi.call(this),this.status=1}k(ua,Xi);function Ye(t){this.g=t}k(Ye,ca);Ye.prototype.Ba=function(){D(this.g,"a")};Ye.prototype.Aa=function(t){D(this.g,new la(t))};Ye.prototype.za=function(t){D(this.g,new ua)};Ye.prototype.ya=function(){D(this.g,"b")};function od(){this.blockSize=-1}function ne(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}k(ne,od);ne.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qn(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}ne.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Qn(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Qn(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Qn(this,i),r=0;break}}this.h=r,this.i+=e};ne.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function A(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var ad={};function ir(t){return-128<=t&&128>t?ph(t,function(e){return new A([e|0],0>e?-1:0)}):new A([t|0],0>t?-1:0)}function Z(t){if(isNaN(t)||!isFinite(t))return Be;if(0>t)return N(Z(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=_i;return new A(e,0)}function ha(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return N(ha(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Z(Math.pow(e,8)),i=Be,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=Z(Math.pow(e,s)),i=i.R(s).add(Z(o))):(i=i.R(n),i=i.add(Z(o)))}return i}var _i=4294967296,Be=ir(0),vi=ir(1),ns=ir(16777216);f=A.prototype;f.ea=function(){if(V(this))return-N(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:_i+i)*e,e*=_i}return t};f.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(oe(this))return"0";if(V(this))return"-"+N(this).toString(t);for(var e=Z(Math.pow(t,6)),n=this,i="";;){var r=sn(n,e).g;n=rn(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,oe(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};f.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function oe(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function V(t){return t.h==-1}f.X=function(t){return t=rn(this,t),V(t)?-1:oe(t)?0:1};function N(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new A(n,~t.h).add(vi)}f.abs=function(){return V(this)?N(this):this};f.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new A(n,n[n.length-1]&-2147483648?-1:0)};function rn(t,e){return t.add(N(e))}f.R=function(t){if(oe(this)||oe(t))return Be;if(V(this))return V(t)?N(this).R(N(t)):N(N(this).R(t));if(V(t))return N(this.R(N(t)));if(0>this.X(ns)&&0>t.X(ns))return Z(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,jt(n,2*i+2*r),n[2*i+2*r+1]+=s*c,jt(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,jt(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,jt(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new A(n,0)};function jt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function tt(t,e){this.g=t,this.h=e}function sn(t,e){if(oe(e))throw Error("division by zero");if(oe(t))return new tt(Be,Be);if(V(t))return e=sn(N(t),e),new tt(N(e.g),N(e.h));if(V(e))return e=sn(t,N(e)),new tt(N(e.g),e.h);if(30<t.g.length){if(V(t)||V(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vi,i=e;0>=i.X(t);)n=is(n),i=is(i);var r=xe(n,1),s=xe(i,1);for(i=xe(i,2),n=xe(n,2);!oe(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=xe(i,1),n=xe(n,1)}return e=rn(t,r.R(e)),new tt(r,e)}for(r=Be;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Z(n),o=s.R(e);V(o)||0<o.X(t);)n-=i,s=Z(n),o=s.R(e);oe(s)&&(s=vi),r=r.add(s),t=rn(t,o)}return new tt(r,t)}f.gb=function(t){return sn(this,t).h};f.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new A(n,this.h&t.h)};f.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new A(n,this.h|t.h)};f.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new A(n,this.h^t.h)};function is(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new A(n,t.h)}function xe(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new A(r,t.h)}W.prototype.send=W.prototype.u;W.prototype.open=W.prototype.m;W.prototype.close=W.prototype.close;Gi.NO_ERROR=0;Gi.TIMEOUT=8;Gi.HTTP_ERROR=6;Mh.COMPLETE="complete";Uh.EventType=Ct;Ct.OPEN="a";Ct.CLOSE="b";Ct.ERROR="c";Ct.MESSAGE="d";P.prototype.listen=P.prototype.O;C.prototype.listenOnce=C.prototype.P;C.prototype.getLastError=C.prototype.Sa;C.prototype.getLastErrorCode=C.prototype.Ia;C.prototype.getStatus=C.prototype.da;C.prototype.getResponseJson=C.prototype.Wa;C.prototype.getResponseText=C.prototype.ja;C.prototype.send=C.prototype.ha;C.prototype.setWithCredentials=C.prototype.Oa;ne.prototype.digest=ne.prototype.l;ne.prototype.reset=ne.prototype.reset;ne.prototype.update=ne.prototype.j;A.prototype.add=A.prototype.add;A.prototype.multiply=A.prototype.R;A.prototype.modulo=A.prototype.gb;A.prototype.compare=A.prototype.X;A.prototype.toNumber=A.prototype.ea;A.prototype.toString=A.prototype.toString;A.prototype.getBits=A.prototype.D;A.fromNumber=Z;A.fromString=ha;var cd=A;const rs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}L.UNAUTHENTICATED=new L(null),L.GOOGLE_CREDENTIALS=new L("google-credentials-uid"),L.FIRST_PARTY=new L("first-party-uid"),L.MOCK_USER=new L("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new yn("@firebase/firestore");function H(t,...e){if(ze.logLevel<=I.DEBUG){const n=e.map(sr);ze.debug(`Firestore (${Nt}): ${t}`,...n)}}function rr(t,...e){if(ze.logLevel<=I.ERROR){const n=e.map(sr);ze.error(`Firestore (${Nt}): ${t}`,...n)}}function ld(t,...e){if(ze.logLevel<=I.WARN){const n=e.map(sr);ze.warn(`Firestore (${Nt}): ${t}`,...n)}}function sr(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t="Unexpected state"){const e=`FIRESTORE (${Nt}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function Ei(t,e){t||or()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends se{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(L.UNAUTHENTICATED))}shutdown(){}}class hd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dd{constructor(e){this.t=e,this.currentUser=L.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ei(typeof i.accessToken=="string"),new da(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ei(e===null||typeof e=="string"),new L(e)}}class fd{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=L.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pd{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new fd(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(L.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class md{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ei(typeof n.token=="string"),this.R=n.token,new gd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=yd(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function fa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,i,r,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class on{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss,v;(v=ss||(ss={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cd([4294967295,4294967295],0);function Zn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,i=1e3,r=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=r,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-i);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new ar(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wd(t,e){if(rr("AsyncQueue",`${e}: ${t}`),fa(t))return new U(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=L.UNAUTHENTICATED,this.clientId=_d.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=wd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map;function Td(t,e,n,i){if(e===!0&&i===!0)throw new U(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":or()}function Sd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ad(t);throw new U(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new U(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Td("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pa((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new as({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new as(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ud;switch(i.type){case"firstParty":return new pd(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new U(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=os.get(n);i&&(H("ComponentProvider","Removing Datastore"),os.delete(n),i.terminate())}(this),Promise.resolve()}}function Rd(t,e,n,i={}){var r;const s=(t=Sd(t,ga))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ld("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=L.MOCK_USER;else{a=bl(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new U(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new L(l)}t._authCredentials=new hd(new da(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ed(this,"async_queue_retry"),this.iu=()=>{const n=Zn();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Zn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Zn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new je;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!fa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw rr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=ar.createAndSchedule(this,e,n,i,s=>this.au(s));return this.Xa.push(r),r}su(){this.eu&&or()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class bd extends ga{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new Cd}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}}function Od(t,e){const n=typeof t=="object"?t:Di(),i=typeof t=="string"?t:e||"(default)",r=Tt(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Rl("firestore");s&&Rd(r,...s)}return r}function Pd(t){var e,n,i;const r=t._freezeSettings(),s=function(a,c,l,h){return new vd(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,pa(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Id(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){Nt=r})(Se),Ae(new we("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new bd(new dd(i.getProvider("auth-internal")),new md(i.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(l.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),G(rs,"4.4.0",e),G(rs,"4.4.0","esm2017")})();var kd="firebase",Nd="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G(kd,Nd,"app");const Dd=()=>({apiKey:"AIzaSyBnwi0tfL0WoOM3T_NpixieVeuL4nvi3Jc",authDomain:"cass-9a996.firebaseapp.com",projectId:"cass-9a996",storageBucket:"cass-9a996.appspot.com",messagingSenderId:"817978794599",appId:"1:817978794599:web:749511c7eb4ae670676ac2"});function cr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ma(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ld=ma,ya=new Ue("auth","Firebase",ma());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new yn("@firebase/auth");function Md(t,...e){an.logLevel<=I.WARN&&an.warn(`Auth (${Se}): ${t}`,...e)}function Wt(t,...e){an.logLevel<=I.ERROR&&an.error(`Auth (${Se}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,...e){throw lr(t,...e)}function ee(t,...e){return lr(t,...e)}function _a(t,e,n){const i=Object.assign(Object.assign({},Ld()),{[e]:n});return new Ue("auth","Firebase",i).create(e,{appName:t.name})}function Ud(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ie(t,"argument-error"),_a(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ya.create(t,...e)}function _(t,e,...n){if(!t)throw lr(e,...n)}function ae(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wt(e),new Error(e)}function de(t,e){t||ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xd(){return cs()==="http:"||cs()==="https:"}function cs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xd()||kl()||"connection"in navigator)?navigator.onLine:!0}function Bd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.shortDelay=e,this.longDelay=n,de(n>e,"Short delay should be less than long delay!"),this.isMobile=Ol()||Nl()}get(){return Fd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){de(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Dt(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qe(t,e,n,i,r={}){return Ea(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=It(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),va.fetch()(wa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ea(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},jd),e);try{const r=new Vd(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ht(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ht(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ht(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ht(t,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _a(t,h,l);ie(t,h)}}catch(r){if(r instanceof se)throw r;ie(t,"network-request-failed",{message:String(r)})}}async function $d(t,e,n,i,r={}){const s=await Qe(t,e,n,i,r);return"mfaPendingCredential"in s&&ie(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wa(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ur(t.config,r):`${t.config.apiScheme}://${r}`}class Vd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ee(this.auth,"network-request-failed")),Hd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ht(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ee(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(t,e){return Qe(t,"POST","/v1/accounts:delete",e)}async function Wd(t,e){return Qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qd(t,e=!1){const n=Ke(t),i=await n.getIdToken(e),r=dr(i);_(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:st(ei(r.auth_time)),issuedAtTime:st(ei(r.iat)),expirationTime:st(ei(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ei(t){return Number(t)*1e3}function dr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Js(n);return r?JSON.parse(r):(Wt("Failed to decode base64 JWT payload"),null)}catch(r){return Wt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gd(t){const e=dr(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof se&&Kd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Kd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=st(this.lastLoginAt),this.creationTime=st(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await _t(t,Wd(n,{idToken:i}));_(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qd(s.providerUserInfo):[],a=Yd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Xd(t){const e=Ke(t);await cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yd(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Qd(t){return t.map(e=>{var{providerId:n}=e,i=cr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(t,e){const n=await Ea(t,{},async()=>{const i=It({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=wa(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",va.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ef(t,e){return Qe(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Zd(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new vt;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(_(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(_(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class De{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=cr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _t(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qd(this,e)}reload(){return Xd(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await cn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _t(this,zd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(r=n.email)!==null&&r!==void 0?r:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,q=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:Ut,isAnonymous:vr,providerData:xn,stsTokenManager:Er}=n;_($&&Er,e,"internal-error");const Ka=vt.fromJSON(this.name,Er);_(typeof $=="string",e,"internal-error"),me(u,e.name),me(y,e.name),_(typeof Ut=="boolean",e,"internal-error"),_(typeof vr=="boolean",e,"internal-error"),me(w,e.name),me(p,e.name),me(g,e.name),me(R,e.name),me(O,e.name),me(q,e.name);const Fn=new De({uid:$,auth:e,email:y,emailVerified:Ut,displayName:u,isAnonymous:vr,photoURL:p,phoneNumber:w,tenantId:g,stsTokenManager:Ka,createdAt:O,lastLoginAt:q});return xn&&Array.isArray(xn)&&(Fn.providerData=xn.map(Ja=>Object.assign({},Ja))),R&&(Fn._redirectEventId=R),Fn}static async _fromIdTokenResponse(e,n,i=!1){const r=new vt;r.updateFromServerResponse(n);const s=new De({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await cn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;function ce(t){de(t instanceof Function,"Expected a class definition");let e=ls.get(t);return e?(de(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ls.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ta.type="NONE";const us=Ta;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e,n){return`firebase:${t}:${e}:${n}`}class He{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=qt(this.userKey,r.apiKey,s),this.fullPersistenceKey=qt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new He(ce(us),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||ce(us);const o=qt(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const u=De._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new He(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new He(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ra(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Aa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ba(e))return"Blackberry";if(Oa(e))return"Webos";if(fr(e))return"Safari";if((e.includes("chrome/")||Sa(e))&&!e.includes("edge/"))return"Chrome";if(Ca(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Aa(t=B()){return/firefox\//i.test(t)}function fr(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sa(t=B()){return/crios\//i.test(t)}function Ra(t=B()){return/iemobile/i.test(t)}function Ca(t=B()){return/android/i.test(t)}function ba(t=B()){return/blackberry/i.test(t)}function Oa(t=B()){return/webos/i.test(t)}function Dn(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tf(t=B()){var e;return Dn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nf(){return Dl()&&document.documentMode===10}function Pa(t=B()){return Dn(t)||Ca(t)||Oa(t)||ba(t)||/windows phone/i.test(t)||Ra(t)}function rf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e=[]){let n;switch(t){case"Browser":n=hs(B());break;case"Worker":n=`${hs(B())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Se}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(t,e={}){return Qe(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=6;class cf{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:af,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ds(this),this.idTokenSubscription=new ds(this),this.beforeStateQueue=new sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ya,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ce(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await He.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await of(this),n=new cf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ef(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ce(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await He.create(this,[ce(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Md(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ln(t){return Ke(t)}class ds{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zs(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hf(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=ee("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",uf().appendChild(i)})}function df(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){const n=Tt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Qt(s,e??{}))return r;ie(r,"already-initialized")}return n.initialize({options:e})}function pf(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ce);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gf(t,e,n){const i=Ln(t);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Na(e),{host:o,port:a}=mf(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||yf()}function Na(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mf(t){const e=Na(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:fs(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:fs(o)}}}function fs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ae("not implemented")}_getIdTokenResponse(e){return ae("not implemented")}_linkToIdToken(e,n){return ae("not implemented")}_getReauthenticationResolver(e){return ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(t,e){return $d(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="http://localhost";class Me extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=cr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Me(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $e(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,$e(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$e(e,n)}buildRequest(){const e={requestUri:_f,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=It(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends pr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Lt{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";ye.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return X.credential(n,i)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Lt{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.GITHUB_SIGN_IN_METHOD="github.com";_e.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends Lt{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ve.credential(n,i)}catch{return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com";ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await De._fromIdTokenResponse(e,i,r),o=ps(i);return new We({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=ps(i);return new We({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends se{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ln.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ln(e,n,i,r)}}function La(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ln._fromErrorAndOperation(t,s,e,i):s})}async function vf(t,e,n=!1){const i=await _t(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return We._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await _t(t,La(i,r,e,t),n);_(s.idToken,i,"internal-error");const o=dr(s.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),We._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ie(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(t,e,n=!1){const i="signIn",r=await La(t,i,e),s=await We._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function If(t,e,n,i){return Ke(t).onIdTokenChanged(e,n,i)}function Tf(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const un="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(un,"1"),this.storage.removeItem(un),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){const t=B();return fr(t)||Dn(t)}const Sf=1e3,Rf=10;class Ua extends Ma{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Af()&&rf(),this.fallbackToPolling=Pa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);nf()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rf):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Sf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ua.type="LOCAL";const Cf=Ua;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Ma{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xa.type="SESSION";const Fa=xa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Mn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await bf(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=gr("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const y=u;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(y.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return window}function Pf(t){te().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function kf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Df(){return Ba()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="firebaseLocalStorageDb",Lf=1,hn="firebaseLocalStorage",Ha="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Un(t,e){return t.transaction([hn],e?"readwrite":"readonly").objectStore(hn)}function Mf(){const t=indexedDB.deleteDatabase(ja);return new Mt(t).toPromise()}function Ii(){const t=indexedDB.open(ja,Lf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(hn,{keyPath:Ha})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(hn)?e(i):(i.close(),await Mf(),e(await Ii()))})})}async function gs(t,e,n){const i=Un(t,!0).put({[Ha]:e,value:n});return new Mt(i).toPromise()}async function Uf(t,e){const n=Un(t,!1).get(e),i=await new Mt(n).toPromise();return i===void 0?null:i.value}function ms(t,e){const n=Un(t,!0).delete(e);return new Mt(n).toPromise()}const xf=800,Ff=3;class $a{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ff)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ba()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mn._getInstance(Df()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kf(),!this.activeServiceWorker)return;this.sender=new Of(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await gs(e,un,"1"),await ms(e,un),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>gs(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Uf(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ms(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Un(r,!1).getAll();return new Mt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$a.type="LOCAL";const Bf=$a;new Dt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e){return e?ce(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $e(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jf(t){return wf(t.auth,new mr(t),t.bypassAuthState)}function Hf(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Ef(n,new mr(t),t.bypassAuthState)}async function $f(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),vf(n,new mr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jf;case"linkViaPopup":case"linkViaRedirect":return $f;case"reauthViaPopup":case"reauthViaRedirect":return Hf;default:ie(this.auth,"internal-error")}}resolve(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Dt(2e3,1e4);async function Wa(t,e,n){const i=Ln(t);Ud(t,e,pr);const r=Va(i,n);return new ke(i,"signInViaPopup",e,r).executeNotNull()}class ke extends za{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ke.currentPopupAction&&ke.currentPopupAction.cancel(),ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){de(this.filter.length===1,"Popup operations only handle one event");const e=gr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vf.get())};e()}}ke.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="pendingRedirect",Gt=new Map;class Wf extends za{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gt.get(this.auth._key());if(!e){try{const i=await qf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gt.set(this.auth._key(),e)}return this.bypassAuthState||Gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qf(t,e){const n=Jf(e),i=Kf(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Gf(t,e){Gt.set(t._key(),e)}function Kf(t){return ce(t._redirectPersistence)}function Jf(t){return qt(zf,t.config.apiKey,t.name)}async function Xf(t,e,n=!1){const i=Ln(t),r=Va(i,e),o=await new Wf(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=10*60*1e3;class Qf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!qa(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ee(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yf&&this.cachedEventUids.clear(),this.cachedEventUids.has(ys(e))}saveEventToCache(e){this.cachedEventUids.add(ys(e)),this.lastProcessedEventTime=Date.now()}}function ys(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qa(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e={}){return Qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,np=/^https?/;async function ip(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ep(t);for(const n of e)try{if(rp(n))return}catch{}ie(t,"unauthorized-domain")}function rp(t){const e=wi(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!np.test(n))return!1;if(tp.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Dt(3e4,6e4);function _s(){const t=te().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function op(t){return new Promise((e,n)=>{var i,r,s;function o(){_s(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_s(),n(ee(t,"network-request-failed"))},timeout:sp.get()})}if(!((r=(i=te().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=te().gapi)===null||s===void 0)&&s.load)o();else{const a=df("iframefcb");return te()[a]=()=>{gapi.load?o():n(ee(t,"network-request-failed"))},hf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kt=null,e})}let Kt=null;function ap(t){return Kt=Kt||op(t),Kt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=new Dt(5e3,15e3),lp="__/auth/iframe",up="emulator/auth/iframe",hp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fp(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ur(e,up):`https://${t.config.authDomain}/${lp}`,i={apiKey:e.apiKey,appName:t.name,v:Se},r=dp.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${It(i).slice(1)}`}async function pp(t){const e=await ap(t),n=te().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:fp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hp,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ee(t,"network-request-failed"),a=te().setTimeout(()=>{s(o)},cp.get());function c(){te().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mp=500,yp=600,_p="_blank",vp="http://localhost";class vs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ep(t,e,n,i=mp,r=yp){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=B().toLowerCase();n&&(a=Sa(l)?_p:n),Aa(l)&&(e=e||vp,c.scrollbars="yes");const h=Object.entries(c).reduce((y,[w,p])=>`${y}${w}=${p},`,"");if(tf(l)&&a!=="_self")return wp(e||"",a),new vs(null);const u=window.open(e||"",a,h);_(u,t,"popup-blocked");try{u.focus()}catch{}return new vs(u)}function wp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="__/auth/handler",Tp="emulator/auth/handler",Ap=encodeURIComponent("fac");async function Es(t,e,n,i,r,s){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Se,eventId:r};if(e instanceof pr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))o[h]=u}if(e instanceof Lt){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${Ap}=${encodeURIComponent(c)}`:"";return`${Sp(t)}?${It(a).slice(1)}${l}`}function Sp({config:t}){return t.emulator?ur(t,Tp):`https://${t.authDomain}/${Ip}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="webStorageSupport";class Rp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fa,this._completeRedirectFn=Xf,this._overrideRedirectResult=Gf}async _openPopup(e,n,i,r){var s;de((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Es(e,n,i,wi(),r);return Ep(e,o,gr())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Es(e,n,i,wi(),r);return Pf(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(de(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await pp(e),i=new Qf(e);return n.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ti,{type:ti},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ti];o!==void 0&&n(!!o),ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ip(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pa()||fr()||Dn()}}const Cp=Rp;var ws="@firebase/auth",Is="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pp(t){Ae(new we("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ka(t)},l=new lf(i,r,s,c);return pf(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ae(new we("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(i=>new bp(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),G(ws,Is,Op(t)),G(ws,Is,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=5*60,Np=Qs("authIdTokenMaxAge")||kp;let Ts=null;const Dp=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Np)return;const r=n==null?void 0:n.token;Ts!==r&&(Ts=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ga(t=Di()){const e=Tt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ff(t,{popupRedirectResolver:Cp,persistence:[Bf,Cf,Fa]}),i=Qs("authTokenSyncURL");if(i){const s=Dp(i);Tf(n,s,()=>s(n.currentUser)),If(n,o=>s(o))}const r=Xs("auth");return r&&gf(n,`http://${r}`),n}Pp("Browser");const Lp=Dd(),yr=_n(Lp);Od(yr);const _r=t=>{Xa.set(t==null?void 0:t.token),qe.set(t==null?void 0:t.user),qs.set(!0),localStorage.setItem("drr",JSON.stringify(t==null?void 0:t.token)),T.set(!1)},Mp=async t=>{let e="";return T.set(!0),await fe.post(`${pe()}/auth/google`,{auth:t}).then(n=>{e=n.data,_r(e)}).catch(n=>{var i;K((i=n.response)==null?void 0:i.data)}),e},$p=async()=>{let t="";T.set(!0);const e=Ga(yr);return await Wa(e,new X).then(async n=>{t=await Mp(n==null?void 0:n.user),T.set(!1)}).catch(n=>{K(n.code.slice(5)),T.set(!1)}),t},Vp=()=>{localStorage.removeItem("drr"),T.set(!1),qs.set(!1)},zp=async t=>{T.set(!0);let e="";return await fe.post(`${pe()}/auth/signup`,{auth:t}).then(n=>{e=n.data,_r(e)}).catch(n=>{var i;K((i=n.response)==null?void 0:i.data)}),e},Wp=async t=>{T.set(!0);let e="";return await fe.post(`${pe()}/auth/login`,{auth:t}).then(n=>{e=n.data,_r(e)}).catch(n=>{var i;K((i=n.response)==null?void 0:i.data)}),e},qp=async(t,e)=>{T.set(!0);let n="";return await fe.post(`${pe()}/api/profile/kyc-step1`,{auth:t},{headers:{Authorization:`Bearer ${e}`}}).then(i=>{n=i.data,qe.set(n),T.set(!1)}).catch(i=>{var r;K((r=i.response)==null?void 0:r.data),T.set(!1)}),n},Gp=async(t,e)=>{T.set(!0);let n="";return await fe.post(`${pe()}/api/profile/username`,{username:t},{headers:{Authorization:`Bearer ${e}`}}).then(i=>{n=i.data,qe.set(n),T.set(!1)}).catch(i=>{var r;K((r=i.response)==null?void 0:r.data),T.set(!1)}),n},Kp=async(t,e)=>{T.set(!0);let n="";return await fe.post(`${pe()}/api/profile/privacy`,{private:t},{headers:{Authorization:`Bearer ${e}`}}).then(i=>{n=i.data,qe.set(n),T.set(!1)}).catch(i=>{var r;K((r=i.response)==null?void 0:r.data),T.set(!1)}),n},Up=async(t,e)=>{T.set(!0);let n="";return await fe.post(`${pe()}/api/profile/link-email`,{email:t},{headers:{Authorization:`Bearer ${e}`}}).then(i=>{n=i.data,qe.set(n),T.set(!1)}).catch(i=>{var r;K((r=i.response)==null?void 0:r.data),T.set(!1)}),n},Jp=async t=>{T.set(!0);let e="";return await fe.get(`${pe()}/api/profile/create-otp`,{headers:{Authorization:`Bearer ${t}`}}).then(n=>{e=n.data,sessionStorage.setItem("otp",JSON.stringify(e)),As.set(e),T.set(!1)}).catch(n=>{var i;K((i=n.response)==null?void 0:i.data),T.set(!1)}),e},Xp=async(t,e,n)=>{T.set(!0);let i="";return await fe.post(`${pe()}/api/profile/verify-email`,{code:t,token:e},{headers:{Authorization:`Bearer ${n}`}}).then(r=>{i=r.data,sessionStorage.removeItem("otp"),As.set(null),qe.set(i),T.set(!1)}).catch(r=>{var s;K((s=r.response)==null?void 0:s.data),T.set(!1)}),i},Yp=async t=>{let e="";T.set(!0);const n=Ga(yr);return await Wa(n,new X).then(async i=>{var r;e=await Up((r=i.user)==null?void 0:r.email,t),T.set(!1)}).catch(i=>{K(i.code.slice(5)),T.set(!1)}),e},Qp=Ya("goto");export{fe as a,Vp as b,$p as c,Wp as d,Nr as e,Gp as f,Qp as g,K as h,qs as i,Kp as j,Yp as k,T as l,Jp as m,Xp as n,qp as o,pe as s,zp as u};
