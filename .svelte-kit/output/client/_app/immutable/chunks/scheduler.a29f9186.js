function q(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function R(){return Object.create(null)}function D(t){t.forEach(B)}function V(t){return typeof t=="function"}function X(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function Y(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function Z(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return q}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function $(t,n,e){t.$$.on_destroy.push(L(n,e))}function tt(t,n,e,i){if(t){const r=N(t,n,e,i);return t[0](r)}}function N(t,n,e,i){return t[1]&&i?P(e.ctx.slice(),t[1](i(n))):e.ctx}function nt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function et(t,n,e,i,r,s){if(r){const c=N(n,e,i,s);t.p(c,r)}}function it(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let p=!1;function rt(){p=!0}function ct(){p=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(r>0&&n[e[r]].claim_order<=a?r+1:M(1,r,C=>n[e[C]].claim_order,a))-1;i[l]=e[o]+1;const v=o+1;e[v]=l,r=Math.max(v,r)}const s=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<s.length&&c[l].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(c[l],o)}}function T(t,n){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function lt(t,n,e){p&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function H(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function at(){return x(" ")}function ot(){return x("")}function ft(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function _t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function dt(t,n,e){const i=n.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&e===""?!0:e:n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:z(t,n,e)}function ht(t){return t.dataset.svelteH}function mt(t){return t===""?null:+t}function pt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){F(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function j(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function bt(t,n,e){return j(t,n,e,H)}function yt(t,n,e){return j(t,n,e,I)}function U(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function gt(t){return U(t," ")}function xt(t,n){n=""+n,t.data!==n&&(t.data=n)}function wt(t,n){t.value=n??""}function vt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function W(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Et(t,n){return new t(n)}let m;function b(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){w().$$.on_mount.push(t)}function Nt(t){w().$$.after_update.push(t)}function At(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=W(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const k=[],S=Promise.resolve();let g=!1;function G(){g||(g=!0,S.then(K))}function jt(){return G(),S}function J(t){_.push(t)}const y=new Set;let f=0;function K(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,b(n),Q(n.$$)}}catch(n){throw d.length=0,f=0,n}for(b(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];y.has(e)||(y.add(e),e())}_.length=0}while(d.length);for(;k.length;)k.pop()();g=!1,y.clear(),b(t)}function Q(t){if(t.fragment!==null){t.update(),D(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}function St(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{I as A,yt as B,Y as C,wt as D,_t as E,tt as F,et as G,it as H,nt as I,dt as J,st as K,mt as L,R as M,K as N,V as O,Z as P,J as Q,St as R,m as S,b as T,B as U,d as V,G as W,rt as X,ct as Y,at as a,Nt as b,gt as c,ut as d,ot as e,H as f,bt as g,pt as h,lt as i,z as j,vt as k,x as l,U as m,xt as n,kt as o,E as p,Et as q,ht as r,X as s,jt as t,T as u,ft as v,q as w,D as x,$ as y,At as z};
