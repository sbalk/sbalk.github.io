function M(){}function P(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function X(){return Object.create(null)}function D(t){t.forEach(B)}function Y(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $(t){return Object.keys(t).length===0}function I(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tt(t,e,n){t.$$.on_destroy.push(I(e,n))}function et(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function nt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function it(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function rt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let p=!1;function ct(){p=!0}function lt(){p=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:O(1,r,z=>e[n[z]].claim_order,u))-1;i[l]=n[a]+1;const v=a+1;n[v]=l,r=Math.max(v,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function W(t,e){t.appendChild(e)}function q(t,e){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ot(t,e,n){p&&!n?q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function ut(){return w(" ")}function at(){return w("")}function k(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dt(t){return t.dataset.svelteH}function _t(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,r=!1){L(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function F(t,e,n,i){return C(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function ht(t,e,n){return F(t,e,n,j)}function G(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function mt(t){return G(t," ")}function pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function bt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let h;function J(){if(h===void 0){h=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{h=!0}}return h}function yt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=j("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=J();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=k(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=k(i.contentWindow,"resize",e),e()}),W(t,i),()=>{(r||o&&i.contentWindow)&&o(),H(i)}}function K(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function gt(t,e){return new t(e)}let m;function y(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function xt(t){b().$$.on_mount.push(t)}function wt(t){b().$$.after_update.push(t)}function vt(t){b().$$.on_destroy.push(t)}function kt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=K(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const _=[],E=[];let d=[];const N=[],S=Promise.resolve();let x=!1;function Q(){x||(x=!0,S.then(U))}function Et(){return Q(),S}function R(t){d.push(t)}const g=new Set;let f=0;function U(){if(f!==0)return;const t=m;do{try{for(;f<_.length;){const e=_[f];f++,y(e),V(e.$$)}}catch(e){throw _.length=0,f=0,e}for(y(null),_.length=0,f=0;E.length;)E.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];g.has(n)||(g.add(n),n())}d.length=0}while(_.length);for(;N.length;)N.pop()();x=!1,g.clear(),y(t)}function V(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}function Nt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{it as A,rt as B,nt as C,R as D,yt as E,st as F,X as G,U as H,Y as I,$ as J,Nt as K,m as L,y as M,B as N,_ as O,Q as P,ct as Q,lt as R,kt as S,vt as T,ut as a,_t as b,ht as c,H as d,j as e,G as f,dt as g,mt as h,ot as i,q as j,pt as k,tt as l,ft as m,M as n,k as o,at as p,wt as q,D as r,Z as s,w as t,xt as u,bt as v,E as w,gt as x,Et as y,et as z};
