import{a as c,h as v,z as ae,c as Q,g as F,T as ve,k as ge,F as I,q as me,y as he,v as re,x as be,r as U,o as ye,U as ke,s as P,f as pe,u as xe}from"./index.d129cd5f.js";const V={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=V){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function qe(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function et(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function tt(e,t,a,n,l,d){t.key=n+l;const o=v(e,t,a);return l===!0?ae(o,d()):o}const H="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Le=/^ion-/,Be=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=Q({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=F(),n=ue(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let o,i=e.name;if(i==="none"||!i)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(i);if(s!==void 0)if(s.icon!==void 0){if(i=s.icon,i==="none"||!i)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(i)===!0){const[s,y=H]=i.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Re.test(i)===!0)return{img:!0,src:i.substring(4)};if(we.test(i)===!0){const[s,y=H]=i.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=i.match(Ee);if(b!==null)o=le[b[1]](i);else if(Be.test(i)===!0)o=i;else if(Le.test(i)===!0)o=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(X.test(i)===!0){o="notranslate material-symbols";const s=i.match(X);s!==null&&(i=i.substring(6),o+=se[s[1]]),q=i}else{o="notranslate material-icons";const s=i.match($e);s!==null&&(i=i.substring(2),o+=oe[s[1]]),q=i}return{cls:o,content:q}});return()=>{const o={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,o,qe(t.default)):d.value.img===!0?v(e.tag,o,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(o.class+=" "+d.value.cls),v(e.tag,o,z(t.default,[d.value.content])))}}});const Ce={size:{type:[String,Number],default:"1em"},color:String};function _e(e){return{cSize:c(()=>e.size in V?`${V[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=Q({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=_e(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function nt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ve(e);if(t)return t.$el||t}function Ae(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&re(e);const l=a.modifiers.color;let d=a.modifiers.center;d=d===!0||n===!0;const o=document.createElement("span"),i=document.createElement("span"),q=be(e),{left:b,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-s-h}px`;i.className="q-ripple__inner",Te(i,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(i),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(C)};a.abort.push(B);let C=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,C=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,C=setTimeout(()=>{o.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var Me=ge({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(l,e,n,l.qKeyEvent===!0)},keystart:Ae(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&I(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(l,e,n,!0)},300)};J(n,t),e.__qripple=n,me(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),he(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(ce),je={align:{type:String,validator:e=>Oe.includes(e)}};function ze(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function de(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{de(e,a)}):e.add(t)}function at(e){const t=new Set;return e.forEach(a=>{de(t,a)}),Array.from(t)}function Ne(e){return e.appContext.config.globalProperties.$router!==void 0}function rt(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((d,o)=>d!==l[o]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(De(e[a],t[a])===!1)return!1;return!0}const fe={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},it={...fe,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ve({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=F(),{props:n,proxy:l,emit:d}=a,o=Ne(a),i=c(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?c(()=>o===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>o===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=c(()=>q.value===!0?_(n.to):null),s=c(()=>b.value!==null),y=c(()=>i.value===!0||s.value===!0),u=c(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=c(()=>i.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=c(()=>{if(s.value===!1)return-1;const{matched:g}=b.value,{length:E}=g,S=g[E-1];if(S===void 0)return-1;const w=l.$route.matched;if(w.length===0)return-1;const L=w.findIndex(ee.bind(null,S));if(L!==-1)return L;const N=Z(g[E-2]);return E>1&&Z(S)===N&&w[w.length-1].path!==N?w.findIndex(ee.bind(null,g[E-2])):L}),p=c(()=>s.value===!0&&h.value!==-1&&Ke(l.$route.params,b.value.params)),f=c(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Ie(l.$route.params,b.value.params)),x=c(()=>s.value===!0?f.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:E,to:S=n.to,replace:w=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=l.$router[w===!0?"replace":"push"](S);return E===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(s.value===!0){const E=S=>B(g,S);d("click",g,E),g.defaultPrevented!==!0&&E()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:i,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Qe={xs:8,sm:10,md:14,lg:20,xl:24},Fe=["button","submit","reset"],Ue=/[^\s]\/[^\s]/,He=["flat","outline","push","unelevated"];function We(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Xe={...ie,...fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...He.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...je.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ye={...Xe,round:Boolean};function Ge(e){const t=ue(e,Qe),a=ze(e),{hasRouterLink:n,hasLink:l,linkTag:d,linkAttrs:o,navigateOnClick:i}=Ve({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),b=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>s.value===!0?e.tabindex||0:-1),u=c(()=>We(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,o.value):Fe.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),n.value!==!0&&Ue.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),h=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:i,isActionable:s}}const{passiveCapture:$}=pe;let T=null,A=null,M=null;var ut=Q({name:"QBtn",props:{...Ye,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=F(),{classes:l,style:d,innerClasses:o,attributes:i,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Ge(e),u=U(null),k=U(null);let h=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=c(()=>({center:e.round})),C=c(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),g=c(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const r={onClick:S,onKeydown:w,onMousedown:N};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${m}`]=L}return r}return{onClick:P}}),E=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...i.value,...g.value}));function S(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,$),u.value!==null&&u.value.removeEventListener("blur",K,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,$),u.value.addEventListener("blur",K,$)}}s(r)}}function w(r){u.value!==null&&(a("keydown",r),I(r,[13,32])===!0&&A!==u.value&&(A!==null&&O(),r.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),u.value.addEventListener("blur",R,$)),P(r)))}function L(r){u.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&O(),T=u.value,h=r.target,h.addEventListener("touchcancel",R,$),h.addEventListener("touchend",R,$)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function N(r){u.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&M!==u.value&&(M!==null&&O(),M=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,$)))}function R(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(A===u.value&&I(r,[13,32])===!0){const m=new MouseEvent("click",r);m.qKeyEvent=!0,r.defaultPrevented===!0&&xe(m),r.cancelBubble===!0&&re(m),u.value.dispatchEvent(m),P(r),r.qKeyEvent=!0}a("keyup",r)}O()}}function O(r){const m=k.value;r!==!0&&(T===u.value||M===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",R,$),h.removeEventListener("touchend",R,$)),T=h=null),M===u.value&&(document.removeEventListener("mouseup",R,$),M=null),A===u.value&&(document.removeEventListener("keyup",R,!0),u.value!==null&&u.value.removeEventListener("blur",R,$),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(r){P(r),r.qSkipRipple=!0}return ye(()=>{O(!0)}),Object.assign(n,{click:r=>{y.value===!0&&S(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&r.push(v("span",{class:"block"},[e.label])),r=z(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},r)),e.loading!==null&&m.push(v(ke,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Pe)])]:null)),ae(v(b.value,E.value,m),[[Me,_.value,void 0,B.value]])}}});export{Y as Q,Me as R,Ze as a,tt as b,Te as c,z as d,Ve as e,ut as f,nt as g,qe as h,rt as i,at as j,Pe as k,je as l,ze as m,ie as n,ue as o,et as p,it as u,Ne as v};
