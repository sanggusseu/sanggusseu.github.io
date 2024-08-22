import{r as w,C as z,b as c,c as T,o as f,m as k,n as g,h as O,g as b,f as h,a as R,V as D,W as E}from"./index.7eb68120.js";import{i as L}from"./QBtn.ec7aa166.js";function x(){const e=w(!z.value);return e.value===!1&&c(()=>{e.value=!0}),{isHydrated:e}}const y=typeof ResizeObserver!="undefined",p=y===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var H=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let i=null,r,s={width:-1,height:-1};function u(n){n===!0||e.debounce===0||e.debounce==="0"?l():i===null&&(i=setTimeout(l,e.debounce))}function l(){if(i!==null&&(clearTimeout(i),i=null),r){const{offsetWidth:n,offsetHeight:o}=r;(n!==s.width||o!==s.height)&&(s={width:n,height:o},t("resize",s))}}const{proxy:d}=b();if(d.trigger=u,y===!0){let n;const o=a=>{r=d.$el.parentNode,r?(n=new ResizeObserver(u),n.observe(r),l()):a!==!0&&g(()=>{o(!0)})};return c(()=>{o()}),f(()=>{i!==null&&clearTimeout(i),n!==void 0&&(n.disconnect!==void 0?n.disconnect():r&&n.unobserve(r))}),k}else{let a=function(){i!==null&&(clearTimeout(i),i=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",u,h.passive),o=void 0)},m=function(){a(),r&&r.contentDocument&&(o=r.contentDocument.defaultView,o.addEventListener("resize",u,h.passive),l())};const{isHydrated:n}=x();let o;return c(()=>{g(()=>{r=d.$el,r&&m()})}),f(a),()=>{if(n.value===!0)return O("object",{class:"q--avoid-card-border",style:p.style,tabindex:-1,type:"text/html",data:p.url,"aria-hidden":"true",onLoad:m})}}}});const P={dark:{type:Boolean,default:null}};function _(e,t){return R(()=>e.dark===null?t.dark.isActive:e.dark)}function j(){let e=null;const t=b();function i(){e!==null&&(clearTimeout(e),e=null)}return D(i),f(i),{removeTimeout:i,registerTimeout(r,s){i(),L(t)===!1&&(e=setTimeout(()=>{e=null,r()},s))}}}const v={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},A=Object.keys(v);v.all=!0;function B(e){const t={};for(const i of A)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?v:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const C=["INPUT","TEXTAREA"];function q(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&C.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function I(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),E.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var Q=(e,t)=>{const i=e.__vccOpts||e;for(const[r,s]of t)i[r]=s;return i};export{H as Q,Q as _,_ as a,j as b,I as c,B as g,q as s,P as u};
