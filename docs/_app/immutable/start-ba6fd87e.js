import{n as we,s as Ze,S as nt,i as rt,a as at,e as x,c as st,b as K,g as ce,t as B,d as fe,f as z,h as J,j as ot,o as ke,k as it,l as lt,m as ct,p as ye,q as D,r as ft,u as ut,v as dt,w as H,x as Le,y as M,z as X,A as Je}from"./chunks/index-069070f8.js";const pt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ht=function(n,e){return new URL(n,e).href},Fe={},ie=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ht(s,o),s in Fe)return;Fe[s]=!0;const u=s.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":pt,u||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),u)return new Promise((_,p)=>{l.addEventListener("load",_),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function mt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function _t(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(n,e){const t=new URL(n);for(const o of gt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,u)=>u(n,s),yt(t),t}function yt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const W=[];function Ue(n,e=we){let t;const o=new Set;function s(l){if(Ze(n,l)&&(n=l,t)){const _=!W.length;for(const p of o)p[1](),W.push(p,n);if(_){for(let p=0;p<W.length;p+=2)W[p][0](W[p+1]);W.length=0}}}function u(l){s(l(n))}function r(l,_=we){const p=[l,_];return o.add(p),o.size===1&&(t=e(s)||we),l(n),()=>{o.delete(p),o.size===0&&(t(),t=null)}}return{set:s,update:u,subscribe:r}}let Ke="",et="";function bt(n){Ke=n.base,et=n.assets||Ke}function Ge(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function Ee(){return{x:pageXOffset,y:pageYOffset}}function We(n){let e,t=null,o=null,s=null;for(const r of n.composedPath())r instanceof Element&&(!e&&r.nodeName.toUpperCase()==="A"&&(e=r),t===null&&(t=be(r,"data-sveltekit-noscroll")),o===null&&(o=be(r,"data-sveltekit-prefetch")),s===null&&(s=be(r,"data-sveltekit-reload")));const u=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:u,options:{noscroll:t,prefetch:o,reload:s}}}function be(n,e){const t=n.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function He(n){const e=Ue(n);let t=!0;function o(){t=!0,e.update(r=>r)}function s(r){t=!1,e.set(r)}function u(r){let l;return e.subscribe(_=>{(l===void 0||t&&_!==l)&&r(l=_)})}return{notify:o,set:s,subscribe:u}}function vt(){const{set:n,subscribe:e}=Ue(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${et}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),r=u!=="1665098239708";return r&&(n(!0),clearTimeout(t)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}function kt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Oe=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;le.delete(o)}return Oe(n,e)};const le=new Map;function Et(n,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${kt(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:r,...l}=JSON.parse(u.textContent),_=u.getAttribute("data-ttl");return _&&le.set(e,{body:r,init:l,ttl:1e3*Number(_)}),Promise.resolve(new Response(r,l))}return Oe(n,t)}function Rt(n,e){const t=le.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(n)}return Oe(n,e)}const St=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function $t(n){const e=[],t=[];let o=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(Lt).map((u,r,l)=>{const _=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const y=r===l.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const T=St.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,q,C,N]=T;return e.push(C),t.push(N),q?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(o=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function Lt(n){return!/^\([^)]+\)$/.test(n)}function Ut(n,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const r=e[u],l=t[u],_=n[u+1]||"";if(l){const p=o[l];if(!p)throw new Error(`Missing "${l}" param matcher`);if(!p(_))return}s[r]=_}return s}function Ot(n,e,t,o){const s=new Set(e);return Object.entries(t).map(([l,[_,p,y]])=>{const{pattern:L,names:R,types:T}=$t(l),q={id:l,exec:C=>{const N=L.exec(C);if(N)return Ut(N,R,T,o)},errors:[1,...y||[]].map(C=>n[C]),layouts:[0,...p||[]].map(r),leaf:u(_)};return q.errors.length=q.layouts.length=Math.max(q.errors.length,q.layouts.length),q});function u(l){const _=l<0;return _&&(l=~l),[_,n[l]]}function r(l){return l===void 0?l:[s.has(l),n[l]]}}function Pt(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=new s(u(n))),{c(){e&&H(e.$$.fragment),t=x()},l(r){e&&Le(e.$$.fragment,r),t=x()},m(r,l){e&&M(e,r,l),K(r,t,l),o=!0},p(r,l){const _={};if(l&4&&(_.data=r[2]),l&2&&(_.form=r[1]),s!==(s=r[0][0])){if(e){ce();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),fe()}s?(e=new s(u(r)),H(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function At(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[It]},$$scope:{ctx:r}}}}return s&&(e=new s(u(n))),{c(){e&&H(e.$$.fragment),t=x()},l(r){e&&Le(e.$$.fragment,r),t=x()},m(r,l){e&&M(e,r,l),K(r,t,l),o=!0},p(r,l){const _={};if(l&4&&(_.data=r[2]),l&523&&(_.$$scope={dirty:l,ctx:r}),s!==(s=r[0][0])){if(e){ce();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),fe()}s?(e=new s(u(r)),H(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function It(n){let e,t,o;var s=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=new s(u(n))),{c(){e&&H(e.$$.fragment),t=x()},l(r){e&&Le(e.$$.fragment,r),t=x()},m(r,l){e&&M(e,r,l),K(r,t,l),o=!0},p(r,l){const _={};if(l&8&&(_.data=r[3]),l&2&&(_.form=r[1]),s!==(s=r[0][1])){if(e){ce();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),fe()}s?(e=new s(u(r)),H(e.$$.fragment),z(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&J(t),e&&X(e,r)}}}function Me(n){let e,t=n[5]&&Xe(n);return{c(){e=it("div"),t&&t.c(),this.h()},l(o){e=lt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ct(e);t&&t.l(s),s.forEach(J),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(o,s){K(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Xe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&J(e),t&&t.d()}}}function Xe(n){let e;return{c(){e=ft(n[6])},l(t){e=ut(t,n[6])},m(t,o){K(t,e,o)},p(t,o){o&64&&dt(e,t[6])},d(t){t&&J(e)}}}function jt(n){let e,t,o,s,u;const r=[At,Pt],l=[];function _(y,L){return y[0][1]?0:1}e=_(n),t=l[e]=r[e](n);let p=n[4]&&Me(n);return{c(){t.c(),o=at(),p&&p.c(),s=x()},l(y){t.l(y),o=st(y),p&&p.l(y),s=x()},m(y,L){l[e].m(y,L),K(y,o,L),p&&p.m(y,L),K(y,s,L),u=!0},p(y,[L]){let R=e;e=_(y),e===R?l[e].p(y,L):(ce(),B(l[R],1,1,()=>{l[R]=null}),fe(),t=l[e],t?t.p(y,L):(t=l[e]=r[e](y),t.c()),z(t,1),t.m(o.parentNode,o)),y[4]?p?p.p(y,L):(p=Me(y),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(y){u||(z(t),u=!0)},o(y){B(t),u=!1},d(y){l[e].d(y),y&&J(o),p&&p.d(y),y&&J(s)}}}function Tt(n,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;ot(o.page.notify);let p=!1,y=!1,L=null;return ke(()=>{const R=o.page.subscribe(()=>{p&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,p=!0),R}),n.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,u=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,l=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&o.page.set(s)},[u,r,l,_,p,y,L,o,s]}class Nt extends nt{constructor(e){super(),rt(this,e,Tt,jt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const qt={},ue=[()=>ie(()=>import("./chunks/0-9e83cd78.js"),["chunks/0-9e83cd78.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-512d445b.js","assets/_layout-903f457c.css","chunks/index-069070f8.js"],import.meta.url),()=>ie(()=>import("./chunks/1-0175e027.js"),["chunks/1-0175e027.js","components/pages/_error.svelte-1bda70d2.js","chunks/index-069070f8.js"],import.meta.url),()=>ie(()=>import("./chunks/2-c383afe9.js"),["chunks/2-c383afe9.js","components/pages/_page.svelte-182d18fa.js","chunks/index-069070f8.js"],import.meta.url)],Ct=[],Dt={"":[2]},Vt={handleError:({error:n})=>{console.error(n)}};class Re{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,t){this.status=e,this.location=t}}function xt(n){n.client}const F={url:He({}),page:He({}),navigating:Ue(null),updated:vt()},Bt="/__data.js";async function zt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,s])=>[o,await s])));return n}const tt="sveltekit:scroll",V="sveltekit:index",ae=Ot(ue,Ct,Dt,qt),Se=ue[0],$e=ue[1];Se();$e();let ee={};try{ee=JSON.parse(sessionStorage[tt])}catch{}function ve(n){ee[n]=Ee()}function Jt({target:n,base:e,trailing_slash:t}){var xe;const o=[];let s=null;const u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},l=!1,_=!1,p=!0,y=!1,L=!1,R,T=(xe=history.state)==null?void 0:xe[V];T||(T=Date.now(),history.replaceState({...history.state,[V]:T},"",location.href));const q=ee[T];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let C=!1,N,Pe,te;async function Ae(){te=te||Promise.resolve(),await te,te=null;const a=new URL(location.href),f=me(a,!0);s=null,await je(f,a,[])}async function de(a,{noscroll:f=!1,replaceState:d=!1,keepfocus:i=!1,state:c={}},h,m){return typeof a=="string"&&(a=new URL(a,Ge(document))),_e({url:a,scroll:f?Ee():null,keepfocus:i,redirect_chain:h,details:{state:c,replaceState:d},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ie(a){const f=me(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:f.id,promise:qe(f)},s.promise}async function je(a,f,d,i,c={},h){var k,v;Pe=c;let m=a&&await qe(a);if(m||(m=await Ve(f,null,Z(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Pe!==c)return!1;if(m.type==="redirect")if(d.length>10||d.includes(f.pathname))m=await ne({status:500,error:Z(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return de(new URL(m.location,f).href,{},[...d,f.pathname],c),!1;else((v=(k=m.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await F.updated.check()&&await re(f);if(o.length=0,L=!1,y=!0,i&&i.details){const{details:w}=i,b=w.replaceState?0:1;w.state[V]=T+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",f)}if(s=null,_){r=m.state,m.props.page&&(m.props.page.url=f);const w=oe();R.$set(m.props),w()}else Te(m);if(i){const{scroll:w,keepfocus:b}=i;if(!b){const S=document.body,U=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),U!==null?S.setAttribute("tabindex",U):S.removeAttribute("tabindex")}if(await Je(),p){const S=f.hash&&document.getElementById(f.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Je();p=!0,m.props.page&&(N=m.props.page),h&&h(),y=!1}function Te(a){var c,h;r=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),N=a.props.page;const d=oe();R=new Nt({target:n,props:{...a.props,stores:F},hydrate:!0}),d();const i={from:null,to:se("to",{params:r.params,routeId:(h=(c=r.route)==null?void 0:c.id)!=null?h:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(m=>m(i)),_=!0}async function Y({url:a,params:f,branch:d,status:i,error:c,route:h,form:m}){var U;const k=d.filter(Boolean),v={type:"loaded",state:{url:a,params:f,branch:d,error:c,route:h},props:{components:k.map(O=>O.node.component)}};m!==void 0&&(v.props.form=m);let w={},b=!N;for(let O=0;O<k.length;O+=1){const I=k[O];w={...w,...I.data},(b||!r.branch.some(j=>j===I))&&(v.props[`data_${O}`]=w,b=b||Object.keys((U=I.data)!=null?U:{}).length>0)}if(b||(b=Object.keys(N.data).length!==Object.keys(w).length),!r.url||a.href!==r.url.href||r.error!==c||m!==void 0||b){v.props.page={error:c,params:f,routeId:h&&h.id,status:i,url:a,form:m,data:b?w:N.data};const O=(I,j)=>{Object.defineProperty(v.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${j}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return v}async function pe({loader:a,parent:f,url:d,params:i,routeId:c,server_data_node:h}){var w,b,S,U,O;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await a();if((w=v.shared)!=null&&w.load){let I=function(...$){for(const g of $){const{href:E}=new URL(g,d);k.dependencies.add(E)}};const j={routeId:c,params:new Proxy(i,{get:($,g)=>(k.params.add(g),$[g])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:wt(d,()=>{k.url=!0}),async fetch($,g){let E;$ instanceof Request?(E=$.url,g={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...g}):E=$;const A=new URL(E,d).href;return I(A),_?Rt(A,g):Et(E,A,g)},setHeaders:()=>{},depends:I,parent(){return k.parent=!0,f()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(S=await v.shared.load.call(null,j))!=null?S:null,m=m?await zt(m):null}return{node:v,loader:a,server:h,shared:(U=v.shared)!=null&&U.load?{type:"data",data:m,uses:k}:null,data:(O=m!=null?m:h==null?void 0:h.data)!=null?O:null}}function Ne(a,f,d,i){if(L)return!0;if(!d)return!1;if(d.parent&&f||d.url&&a)return!0;for(const c of d.params)if(i[c]!==r.params[c])return!0;for(const c of d.dependencies)if(o.some(h=>h(new URL(c))))return!0;return!1}function he(a,f){var d,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function qe({id:a,invalidating:f,url:d,params:i,route:c}){var $;if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:m,leaf:k}=c,v=[...m,k];h.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const b=r.url?a!==r.url.pathname+r.url.search:!1,S=v.reduce((g,E,A)=>{var Q;const P=r.branch[A],G=!!(E!=null&&E[0])&&((P==null?void 0:P.loader)!==E[1]||Ne(b,g.some(Boolean),(Q=P.server)==null?void 0:Q.uses,i));return g.push(G),g},[]);if(S.some(Boolean)){try{w=await Qe(d,S)}catch(g){return ne({status:500,error:Z(g,{url:d,params:i,routeId:c.id}),url:d,routeId:c.id})}if(w.type==="redirect")return w}const U=w==null?void 0:w.nodes;let O=!1;const I=v.map(async(g,E)=>{var Q;if(!g)return;const A=r.branch[E],P=U==null?void 0:U[E];if((!P||P.type==="skip")&&g[1]===(A==null?void 0:A.loader)&&!Ne(b,O,(Q=A.shared)==null?void 0:Q.uses,i))return A;if(O=!0,(P==null?void 0:P.type)==="error")throw P;return pe({loader:g[1],url:d,params:i,routeId:c.id,parent:async()=>{var ze;const Be={};for(let ge=0;ge<E;ge+=1)Object.assign(Be,(ze=await I[ge])==null?void 0:ze.data);return Be},server_data_node:he(P===void 0&&g[0]?{type:"skip"}:P!=null?P:null,A==null?void 0:A.server)})});for(const g of I)g.catch(()=>{});const j=[];for(let g=0;g<v.length;g+=1)if(v[g])try{j.push(await I[g])}catch(E){if(E instanceof Ye)return{type:"redirect",location:E.location};let A=500,P;U!=null&&U.includes(E)?(A=($=E.status)!=null?$:A,P=E.error):E instanceof Re?(A=E.status,P=E.body):P=Z(E,{params:i,url:d,routeId:c.id});const G=await Ce(g,j,h);return G?await Y({url:d,params:i,branch:j.slice(0,G.idx).concat(G.node),status:A,error:P,route:c}):await Ve(d,c.id,P,A)}else j.push(void 0);return await Y({url:d,params:i,branch:j,status:200,error:null,route:c,form:f?void 0:null})}async function Ce(a,f,d){for(;a--;)if(d[a]){let i=a;for(;!f[i];)i-=1;try{return{idx:i+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:a,error:f,url:d,routeId:i}){var w;const c={},h=await Se();let m=null;if(h.server)try{const b=await Qe(d,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(w=b.nodes[0])!=null?w:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||l)&&await re(d)}const k=await pe({loader:Se,url:d,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(m)}),v={node:await $e(),loader:$e,shared:null,server:null,data:null};return await Y({url:d,params:c,branch:[k,v],status:a,error:f,route:null})}function me(a,f){if(De(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ae){const c=i.exec(d);if(c){const h=new URL(a.origin+mt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:f,route:i,params:_t(c),url:h}}}}function De(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function _e({url:a,scroll:f,keepfocus:d,redirect_chain:i,details:c,type:h,delta:m,nav_token:k,accepted:v,blocked:w}){var I,j,$,g;let b=!1;const S=me(a,!1),U={from:se("from",{params:r.params,routeId:(j=(I=r.route)==null?void 0:I.id)!=null?j:null,url:r.url}),to:se("to",{params:($=S==null?void 0:S.params)!=null?$:null,routeId:(g=S==null?void 0:S.route.id)!=null?g:null,url:a}),type:h};m!==void 0&&(U.delta=m);const O={...U,cancel:()=>{b=!0}};if(u.before_navigate.forEach(E=>E(O)),b){w();return}ve(T),v(),_&&F.navigating.set(U),await je(S,a,i,{scroll:f,keepfocus:d,details:c},k,()=>{u.after_navigate.forEach(E=>E(U)),F.navigating.set(null)})}async function Ve(a,f,d,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await ne({status:i,error:d,url:a,routeId:f}):await re(a)}function re(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ke(()=>(u.after_navigate.push(a),()=>{const f=u.after_navigate.indexOf(a);u.after_navigate.splice(f,1)}))},before_navigate:a=>{ke(()=>(u.before_navigate.push(a),()=>{const f=u.before_navigate.indexOf(a);u.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(y||!_)&&(p=!1)},goto:(a,f={})=>de(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:f}=new URL(a,location.href);o.push(d=>d.href===f)}return Ae()},invalidateAll:()=>(L=!0,Ae()),prefetch:async a=>{const f=new URL(a,Ge(document));await Ie(f)},prefetch_routes:async a=>{const d=(a?ae.filter(i=>a.some(c=>i.exec(c))):ae).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:d,route:i}=r;if(!i)return;const c=await Ce(r.branch.length,d,i.errors);if(c){const h=await Y({url:f,params:r.params,branch:d.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});r=h.state;const m=oe();R.$set(h.props),m()}}else if(a.type==="redirect")de(a.location,{},[]);else{const f={form:a.data,page:{...N,form:a.data,status:a.status}},d=oe();R.$set(f),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var m,k;let c=!1;const h={from:se("from",{params:r.params,routeId:(k=(m=r.route)==null?void 0:m.id)!=null?k:null,url:r.url}),to:null,type:"unload",cancel:()=>c=!0};u.before_navigate.forEach(v=>v(h)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ve(T);try{sessionStorage[tt]=JSON.stringify(ee)}catch{}}});const a=i=>{const{url:c,options:h}=We(i);if(c&&h.prefetch){if(De(c))return;Ie(c)}};let f;const d=i=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:h,options:m}=We(i);if(!c||!h)return;const k=c instanceof SVGAElement;if(!k&&!(h.protocol==="https:"||h.protocol==="http:"))return;const v=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||v.includes("external")||m.reload||(k?c.target.baseVal:c.target))return;const[w,b]=h.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){C=!0,ve(T),r.url=h,F.page.set({...N,url:h}),F.page.notify();return}_e({url:h,scroll:m.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[V]===T)return;const c=i.state[V]-T;_e({url:new URL(location.href),scroll:ee[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=i.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[V]:++T},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&F.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:d,params:i,routeId:c,data:h,form:m})=>{var w;l=!0;const k=new URL(location.href);let v;try{const b=d.map(async(S,U)=>{const O=h[U];return pe({loader:ue[S],url:k,params:i,routeId:c,parent:async()=>{const I={};for(let j=0;j<U;j+=1)Object.assign(I,(await b[j]).data);return I},server_data_node:he(O)})});v=await Y({url:k,params:i,branch:await Promise.all(b),status:a,error:f,form:m,route:(w=ae.find(S=>S.id===c))!=null?w:null})}catch(b){if(b instanceof Ye){await re(new URL(b.location,location.href));return}v=await ne({status:b instanceof Re?b.status:500,error:Z(b,{url:k,params:i,routeId:c}),url:k,routeId:c})}Te(v)}}}let Ft=1;async function Qe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Bt,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Ft++)),await ie(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function Z(n,e){var t;return n instanceof Re?n.body:(t=Vt.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(n,e){for(const t of Kt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function Wt({env:n,hydrate:e,paths:t,target:o,trailing_slash:s}){bt(t);const u=Jt({target:o,base:t.base,trailing_slash:s});xt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Wt as start};
