import{s as S,e as _,t as f,a as x,c as d,b as g,f as h,d as l,h as k,i as m,k as v,l as $,n as E,m as q}from"../chunks/scheduler.jux-S3lS.js";import{S as y,i as C}from"../chunks/index.TrKqgwyP.js";import{s as H}from"../chunks/entry.rDw1uZks.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=k(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends y{constructor(t){super(),C(this,t,z,w,S,{})}};export{F as component};
