import{c as i,h,H as ee,K as D,L as te,M as ne,N as Y,O as ae,g as G,r as I,a as re,T as ue,k as le,P as B,Q as ie,l as se}from"./index.c3a7a033.js";import{u as N,c as J,e as oe,f as ce,g as de,Q,d as fe}from"./QIcon.9604aca1.js";const ve={size:{type:[Number,String],default:"1em"},color:String};function ge(e){return{cSize:i(()=>e.size in N?`${N[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var me=J({name:"QSpinner",props:{...ve,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=ge(e);return()=>h("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function be(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ee(e);if(t)return t.$el||t}function ze(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function he(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function H(e,t,a,n){a.modifiers.stop===!0&&Y(e);const l=a.modifiers.color;let m=a.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),E=ae(e),{left:y,top:v,width:$,height:u}=t.getBoundingClientRect(),k=Math.sqrt($*$+u*u),g=k/2,p=`${($-k)/2}px`,s=m?p:`${E.left-y-g}px`,b=`${(u-k)/2}px`,T=m?b:`${E.top-v-g}px`;d.className="q-ripple__inner",be(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${s},${T},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(R)};a.abort.push(P);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),a.abort.splice(a.abort.indexOf(P),1)},275)},250)},50)}function V(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var ye=oe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(l,e,n,l.qKeyEvent===!0)},keystart:he(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(l,e,n,!0)},300)};V(n,t),e.__qripple=n,te(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&V(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ne(t,"main"),delete e._qripple)}});const Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ke=Object.keys(Z),pe={align:{type:String,validator:e=>ke.includes(e)}};function qe(e){return i(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function Ke(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function xe(e){return e.appContext.config.globalProperties.$router!==void 0}function De(e){return e.isUnmounted===!0||e.isDeactivated===!0}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $e(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function F(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Se(e,t){return Array.isArray(e)===!0?F(e,t):Array.isArray(t)===!0?F(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Se(e[a],t[a])===!1)return!1;return!0}const Ce={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=G(),{props:n,proxy:l,emit:m}=a,f=xe(a),d=i(()=>n.disable!==!0&&n.href!==void 0),E=t===!0?i(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):i(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=i(()=>E.value===!0?T(n.to):null),v=i(()=>y.value!==null),$=i(()=>d.value===!0||v.value===!0),u=i(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),k=i(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),g=i(()=>{if(v.value===!1)return-1;const{matched:o}=y.value,{length:q}=o,S=o[q-1];if(S===void 0)return-1;const C=l.$route.matched;if(C.length===0)return-1;const w=C.findIndex(W.bind(null,S));if(w>-1)return w;const z=U(o[q-2]);return q>1&&U(S)===z&&C[C.length-1].path!==z?C.findIndex(W.bind(null,o[q-2])):w}),p=i(()=>v.value===!0&&g.value!==-1&&$e(l.$route.params,y.value.params)),s=i(()=>p.value===!0&&g.value===l.$route.matched.length-1&&Le(l.$route.params,y.value.params)),b=i(()=>v.value===!0?s.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function T(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:q,to:S=n.to,replace:C=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const w=l.$router[C===!0?"replace":"push"](S);return q===!0?w:w.then(()=>{}).catch(()=>{})}function R(o){if(v.value===!0){const q=S=>P(o,S);m("click",o,q),o.defaultPrevented!==!0&&q()}else m("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:$,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:s,linkClass:b,linkAttrs:k,getLink:T,navigateToRouterLink:P,navigateOnClick:R}}const X={none:0,xs:4,sm:8,md:16,lg:24,xl:32},we={xs:8,sm:10,md:14,lg:20,xl:24},Pe=["button","submit","reset"],Re=/[^\s]\/[^\s]/,Te=["flat","outline","push","unelevated"],Be=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,_e={...ce,...Ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Te.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...pe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Oe(e){const t=de(e,we),a=qe(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),E=i(()=>{const s=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},s,{padding:e.padding.split(/\s+/).map(b=>b in X?X[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):s}),y=i(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=i(()=>e.disable!==!0&&e.loading!==!0),$=i(()=>v.value===!0?e.tabindex||0:-1),u=i(()=>Be(e,"standard")),k=i(()=>{const s={tabindex:$.value};return l.value===!0?Object.assign(s,f.value):Pe.includes(e.type)===!0&&(s.type=e.type),m.value==="a"?(e.disable===!0?s["aria-disabled"]="true":s.href===void 0&&(s.role="button"),n.value!==!0&&Re.test(e.type)===!0&&(s.type=e.type)):e.disable===!0&&(s.disabled="",s["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(s,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),s}),g=i(()=>{let s;e.color!==void 0?e.flat===!0||e.outline===!0?s=`text-${e.textColor||e.color}`:s=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(s=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(s!==void 0?" "+s:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=i(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:E,innerClasses:p,attributes:k,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=se;let _=null,O=null,A=null;var Ie=J({name:"QBtn",props:{..._e,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=G(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:E,linkTag:y,navigateOnClick:v,isActionable:$}=Oe(e),u=I(null),k=I(null);let g=null,p,s;const b=i(()=>e.label!==void 0&&e.label!==null&&e.label!==""),T=i(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=i(()=>({center:e.round})),R=i(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),o=i(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if($.value===!0){const r={onClick:S,onKeydown:C,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${c}`]=w}return r}return{onClick:B}}),q=i(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...o.value}));function S(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",B,!0),document.removeEventListener("keyup",K,x),u.value!==null&&u.value.removeEventListener("blur",K,x)};document.addEventListener("keydown",B,!0),document.addEventListener("keyup",K,x),u.value.addEventListener("blur",K,x)}}v(r)}}function C(r){u.value!==null&&(a("keydown",r),D(r,[13,32])===!0&&O!==u.value&&(O!==null&&M(),r.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),u.value.addEventListener("blur",L,x)),B(r)))}function w(r){u.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,g=r.target,g.addEventListener("touchcancel",L,x),g.addEventListener("touchend",L,x)),p=!0,clearTimeout(s),s=setTimeout(()=>{p=!1},200)))}function z(r){u.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&A!==u.value&&(A!==null&&M(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,x)))}function L(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(O===u.value&&D(r,[13,32])===!0){const c=new MouseEvent("click",r);c.qKeyEvent=!0,r.defaultPrevented===!0&&ie(c),r.cancelBubble===!0&&Y(c),u.value.dispatchEvent(c),B(r),r.qKeyEvent=!0}a("keyup",r)}M()}}function M(r){const c=k.value;r!==!0&&(_===u.value||A===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(g!==null&&(g.removeEventListener("touchcancel",L,x),g.removeEventListener("touchend",L,x)),_=g=null),A===u.value&&(document.removeEventListener("mouseup",L,x),A=null),O===u.value&&(document.removeEventListener("keyup",L,!0),u.value!==null&&u.value.removeEventListener("blur",L,x),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(r){B(r),r.qSkipRipple=!0}return re(()=>{M(!0)}),Object.assign(n,{click:S}),()=>{let r=[];e.icon!==void 0&&r.push(h(Q,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&r.push(h("span",{class:"block"},[e.label])),r=fe(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(h(Q,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},r)),e.loading!==null&&c.push(h(ue,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(me)])]:null)),le(h(y.value,q.value,c),[[ye,T.value,void 0,P.value]])}}});export{Ie as Q,ye as R,De as a,Ee as b,be as c,pe as d,qe as e,me as f,je as g,Ke as h,ze as i,Ce as u,xe as v};