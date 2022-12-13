import{Q as je}from"./QBtn.ad8aaf48.js";import{c as R,h as oe,a as Ue,b as xe,d as Ge,Q as Ke}from"./QIcon.9604aca1.js";import{c as r,h as k,r as x,i as $e,o as j,a as U,n as Ce,d as ee,g as I,l as he,e as ye,f as P,w as b,j as ne,k as Je,p as _e,m as Xe,q as J,s as Ye,u as Ze,t as H,v as te,x as C,y as L,z as Z,A as ae,B as me,C as et,D as tt,E as at,F as X,G as ot,H as nt,I as lt,J as it}from"./index.c3a7a033.js";import{Q as rt}from"./QSpace.6310e577.js";import{u as ut,a as st,b as ct,c as dt,d as ft,e as vt,g as ht,f as mt,h as gt,i as fe,Q as qe,j as ge,k as bt,l as yt}from"./QItem.e09f55cb.js";import{u as wt,a as pt}from"./use-dark.47d31e7e.js";import{T as ve}from"./TouchPan.b005f0b9.js";import{b as Y}from"./format.4327ae5c.js";var kt=R({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:w}){const n=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:n.value},oe(w.default))}}),St=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:w}){const n=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:n.value,role:"toolbar"},oe(w.default))}});function xt(){const e=x(!$e.value);return e.value===!1&&j(()=>{e.value=!0}),e}const Be=typeof ResizeObserver!="undefined",Te=Be===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:w}){let n=null,l,o={width:-1,height:-1};function u(f){f===!0||e.debounce===0||e.debounce==="0"?g():n===null&&(n=setTimeout(g,e.debounce))}function g(){if(clearTimeout(n),n=null,l){const{offsetWidth:f,offsetHeight:c}=l;(f!==o.width||c!==o.height)&&(o={width:f,height:c},w("resize",o))}}const{proxy:y}=I();if(Be===!0){let f;const c=a=>{l=y.$el.parentNode,l?(f=new ResizeObserver(u),f.observe(l),g()):a!==!0&&ee(()=>{c(!0)})};return j(()=>{c()}),U(()=>{clearTimeout(n),f!==void 0&&(f.disconnect!==void 0?f.disconnect():l&&f.unobserve(l))}),Ce}else{let a=function(){clearTimeout(n),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",u,he.passive),c=void 0)},q=function(){a(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",u,he.passive),g())};const f=xt();let c;return j(()=>{ee(()=>{l=y.$el,l&&q()})}),U(a),y.trigger=u,()=>{if(f.value===!0)return k("object",{style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:q})}}}}),qt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:w,emit:n}){const{proxy:{$q:l}}=I(),o=ye(ne,P);if(o===P)return console.error("QHeader needs to be child of QLayout"),P;const u=x(parseInt(e.heightHint,10)),g=x(!0),y=r(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||l.platform.is.ios&&o.isContainer.value===!0),f=r(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return g.value===!0?u.value:0;const i=u.value-o.scroll.value.position;return i>0?i:0}),c=r(()=>e.modelValue!==!0||y.value===!0&&g.value!==!0),a=r(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),q=r(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=r(()=>{const i=o.rows.value.top,T={};return i[0]==="l"&&o.left.space===!0&&(T[l.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(T[l.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),T});function v(i,T){o.update("header",i,T)}function h(i,T){i.value!==T&&(i.value=T)}function Q({height:i}){h(u,i),v("size",i)}function S(i){a.value===!0&&h(g,!0),n("focusin",i)}b(()=>e.modelValue,i=>{v("space",i),h(g,!0),o.animate()}),b(f,i=>{v("offset",i)}),b(()=>e.reveal,i=>{i===!1&&h(g,e.modelValue)}),b(g,i=>{o.animate(),n("reveal",i)}),b(o.scroll,i=>{e.reveal===!0&&h(g,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const m={};return o.instances.header=m,e.modelValue===!0&&v("size",u.value),v("space",e.modelValue),v("offset",f.value),U(()=>{o.instances.header===m&&(o.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=Ue(w.default,[]);return e.elevated===!0&&i.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(k(be,{debounce:0,onResize:Q})),k("header",{class:q.value,style:_.value,onFocusin:S},i)}}});const ze=150;var Tt=R({name:"QDrawer",inheritAttrs:!1,props:{...ut,...wt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"onLayout","miniState"],setup(e,{slots:w,emit:n,attrs:l}){const o=I(),{proxy:{$q:u}}=o,g=pt(e,u),{preventBodyScroll:y}=vt(),{registerTimeout:f,removeTimeout:c}=ct(),a=ye(ne,P);if(a===P)return console.error("QDrawer needs to be child of QLayout"),P;let q,_,v;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),Q=r(()=>e.mini===!0&&h.value!==!0),S=r(()=>Q.value===!0?e.miniWidth:e.width),m=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),i=r(()=>e.persistent!==!0&&(h.value===!0||Qe.value===!0));function T(t,s){if(M(),t!==!1&&a.animate(),B(0),h.value===!0){const z=a.instances[G.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),V(1),a.isContainer.value!==!0&&y(!0)}else V(0),t!==!1&&se(!1);f(()=>{t!==!1&&se(!0),s!==!0&&n("show",t)},ze)}function d(t,s){A(),t!==!1&&a.animate(),V(0),B(E.value*S.value),ce(),s!==!0?f(()=>{n("hide",t)},ze):c()}const{show:p,hide:$}=dt({showing:m,hideOnRouteChange:i,handleShow:T,handleHide:d}),{addToHistory:M,removeFromHistory:A}=ft(m,$,i),W={belowBreakpoint:h,hide:$},O=r(()=>e.side==="right"),E=r(()=>(u.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),we=x(0),F=x(!1),le=x(!1),pe=x(S.value*E.value),G=r(()=>O.value===!0?"left":"right"),ie=r(()=>m.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),re=r(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")>-1||u.platform.is.ios===!0&&a.isContainer.value===!0),N=r(()=>e.overlay===!1&&m.value===!0&&h.value===!1),Qe=r(()=>e.overlay===!0&&m.value===!0&&h.value===!1),Oe=r(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&F.value===!1?" hidden":"")),Pe=r(()=>({backgroundColor:`rgba(0,0,0,${we.value*.4})`})),ke=r(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ve=r(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),De=r(()=>{const t={};return a.header.space===!0&&ke.value===!1&&(re.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Ve.value===!1&&(re.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),He=r(()=>{const t={width:`${S.value}px`,transform:`translateX(${pe.value}px)`};return h.value===!0?t:Object.assign(t,De.value)}),Re=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Me=r(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(g.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(re.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),We=r(()=>{const t=u.lang.rtl===!0?e.side:G.value;return[[ve,Ae,void 0,{[t]:!0,mouse:!0}]]}),Ee=r(()=>{const t=u.lang.rtl===!0?G.value:e.side;return[[ve,Se,void 0,{[t]:!0,mouse:!0}]]}),Fe=r(()=>{const t=u.lang.rtl===!0?G.value:e.side;return[[ve,Se,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){Ne(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(h,t=>{t===!0?(q=m.value,m.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(m.value===!0?(B(0),V(0),ce()):p(!1))}),b(()=>e.side,(t,s)=>{a.instances[s]===W&&(a.instances[s]=void 0,a[s].space=!1,a[s].offset=0),a.instances[t]=W,a[t].size=S.value,a[t].space=N.value,a[t].offset=ie.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),b(()=>e.behavior+e.breakpoint,ue),b(a.isContainer,t=>{m.value===!0&&y(t!==!0),t===!0&&ue()}),b(a.scrollbarWidth,()=>{B(m.value===!0?0:void 0)}),b(ie,t=>{D("offset",t)}),b(N,t=>{n("onLayout",t),D("space",t)}),b(O,()=>{B()}),b(S,t=>{B(),de(e.miniToOverlay,t)}),b(()=>e.miniToOverlay,t=>{de(t,S.value)}),b(()=>u.lang.rtl,()=>{B()}),b(()=>e.mini,()=>{e.modelValue===!0&&(Ie(),a.animate())}),b(Q,t=>{n("miniState",t)});function B(t){t===void 0?ee(()=>{t=m.value===!0?0:S.value,B(E.value*t)}):(a.isContainer.value===!0&&O.value===!0&&(h.value===!0||Math.abs(t)===S.value)&&(t+=E.value*a.scrollbarWidth.value),pe.value=t)}function V(t){we.value=t}function se(t){const s=t===!0?"remove":a.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Ie(){clearTimeout(_),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,_=setTimeout(()=>{le.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ae(t){if(m.value!==!1)return;const s=S.value,z=Y(t.distance.x,0,s);if(t.isFinal===!0){z>=Math.min(75,s)===!0?p():(a.animate(),V(0),B(E.value*s)),F.value=!1;return}B((u.lang.rtl===!0?O.value!==!0:O.value)?Math.max(s-z,0):Math.min(0,z-s)),V(Y(z/s,0,1)),t.isFirst===!0&&(F.value=!0)}function Se(t){if(m.value!==!0)return;const s=S.value,z=t.direction===e.side,K=(u.lang.rtl===!0?z!==!0:z)?Y(t.distance.x,0,s):0;if(t.isFinal===!0){Math.abs(K)<Math.min(75,s)===!0?(a.animate(),V(1),B(0)):$(),F.value=!1;return}B(E.value*K),V(Y(1-K/s,0,1)),t.isFirst===!0&&(F.value=!0)}function ce(){y(!1),se(!0)}function D(t,s){a.update(e.side,t,s)}function Ne(t,s){t.value!==s&&(t.value=s)}function de(t,s){D("size",t===!0?e.miniWidth:s)}return a.instances[e.side]=W,de(e.miniToOverlay,S.value),D("space",N.value),D("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),j(()=>{n("onLayout",N.value),n("miniState",Q.value),q=e.showIfAbove===!0;const t=()=>{(m.value===!0?T:d)(!1,!0)};if(a.totalWidth.value!==0){ee(t);return}v=b(a.totalWidth,()=>{v(),v=void 0,m.value===!1&&e.showIfAbove===!0&&h.value===!1?p(!1):t()})}),U(()=>{v!==void 0&&v(),clearTimeout(_),m.value===!0&&ce(),a.instances[e.side]===W&&(a.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const t=[];h.value===!0&&(e.noSwipeOpen===!1&&t.push(Je(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),We.value)),t.push(xe("div",{ref:"backdrop",class:Oe.value,style:Pe.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>Fe.value)));const s=Q.value===!0&&w.mini!==void 0,z=[k("div",{...l,key:""+s,class:[Re.value,l.class]},s===!0?w.mini():oe(w.default))];return e.elevated===!0&&m.value===!0&&z.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(xe("aside",{ref:"content",class:Me.value,style:He.value},z,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ee.value)),k("div",{class:"q-drawer-container"},t)}}}),zt=R({name:"QPageContainer",setup(e,{slots:w}){const{proxy:{$q:n}}=I(),l=ye(ne,P);if(l===P)return console.error("QPageContainer needs to be child of QLayout"),P;_e(Xe,!0);const o=r(()=>{const u={};return l.header.space===!0&&(u.paddingTop=`${l.header.size}px`),l.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(u.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),u});return()=>k("div",{class:"q-page-container",style:o.value},oe(w.default))}});const{passive:Le}=he,Lt=["both","horizontal","vertical"];var $t=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Lt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:w}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,o,u;b(()=>e.scrollTarget,()=>{f(),y()});function g(){l!==null&&l();const q=Math.max(0,mt(o)),_=gt(o),v={top:q-n.position.top,left:_-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:q,left:_},n.directionChanged=n.direction!==h,n.delta=v,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),w("scroll",{...n})}function y(){o=ht(u,e.scrollTarget),o.addEventListener("scroll",c,Le),c(!0)}function f(){o!==void 0&&(o.removeEventListener("scroll",c,Le),o=void 0)}function c(q){if(q===!0||e.debounce===0||e.debounce==="0")g();else if(l===null){const[_,v]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];l=()=>{v(_),l=null}}}const{proxy:a}=I();return b(()=>a.$q.lang.rtl,g),j(()=>{u=a.$el.parentNode,y()}),U(()=>{l!==null&&l(),f()}),Object.assign(a,{trigger:c,getPosition:()=>n}),Ce}}),Ct=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:w,emit:n}){const{proxy:{$q:l}}=I(),o=x(null),u=x(l.screen.height),g=x(e.container===!0?0:l.screen.width),y=x({position:0,direction:"down",inflectionPoint:0}),f=x(0),c=x($e.value===!0?0:fe()),a=r(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=r(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),_=r(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),v=r(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(d){if(e.container===!0||document.qScrollPrevented!==!0){const p={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};y.value=p,e.onScroll!==void 0&&n("scroll",p)}}function Q(d){const{height:p,width:$}=d;let M=!1;u.value!==p&&(M=!0,u.value=p,e.onScrollHeight!==void 0&&n("scrollHeight",p),m()),g.value!==$&&(M=!0,g.value=$),M===!0&&e.onResize!==void 0&&n("resize",d)}function S({height:d}){f.value!==d&&(f.value=d,m())}function m(){if(e.container===!0){const d=u.value>f.value?fe():0;c.value!==d&&(c.value=d)}}let i;const T={instances:{},view:r(()=>e.view),isContainer:r(()=>e.container),rootRef:o,height:u,containerHeight:f,scrollbarWidth:c,totalWidth:r(()=>g.value+c.value),rows:r(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:y,animate(){i!==void 0?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),i=void 0},155)},update(d,p,$){T[d][p]=$}};if(_e(ne,T),fe()>0){let $=function(){d=null,p.classList.remove("hide-scrollbar")},M=function(){if(d===null){if(p.scrollHeight>l.screen.height)return;p.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout($,300)},A=function(W){d!==null&&W==="remove"&&(clearTimeout(d),$()),window[`${W}EventListener`]("resize",M)},d=null;const p=document.body;b(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),Ye(()=>{A("remove")})}return()=>{const d=Ge(w.default,[k($t,{onScroll:h}),k(be,{onResize:Q})]),p=k("div",{class:a.value,style:q.value,ref:e.container===!0?void 0:o,tabindex:-1},d);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:o},[k(be,{onResize:S}),k("div",{class:"absolute-full",style:_.value},[k("div",{class:"scroll",style:v.value},[p])])]):p}}});const _t={__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){return Ze(),(w,n)=>(H(),te(bt,{clickable:"",tag:"a",to:e.link},{default:C(()=>[e.icon?(H(),te(qe,{key:0,avatar:""},{default:C(()=>[L(Ke,{name:e.icon},null,8,["name"])]),_:1})):Z("",!0),L(qe,null,{default:C(()=>[L(ge,null,{default:C(()=>[ae(me(e.title),1)]),_:1}),L(ge,{caption:""},{default:C(()=>[ae(me(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}},Bt=et("drawer",{state:()=>({essentialLinks:[{title:"\uBA54\uC778",caption:"\uBA54\uC778\uD654\uBA74\uC73C\uB85C",icon:"home",link:"/index"},{title:"\uD504\uB85C\uD544",caption:"\uD504\uB85C\uD544 \uD398\uC774\uC9C0",icon:"person",link:"/profile"},{title:"\uD560 \uC77C",caption:"\uD560 \uC77C \uBAA9\uB85D \uD398\uC774\uC9C0",icon:"checklist",link:"/grid"},{title:"\uC2A4\uD2B8\uB9AC\uBC0D",caption:"\uC2A4\uD2B8\uB9AC\uBC0D \uC0C1\uD0DC",icon:"stream",link:"/stream"},{title:"\uAC80\uC0C9",caption:"\uAC80\uC0C9 \uD398\uC774\uC9C0",icon:"search",link:"/search"},{title:"\uD3B8\uC9D1",caption:"\uC2A4\uCF00\uC904 \uD3B8\uC9D1 \uD398\uC774\uC9C0",icon:"edit",link:"/edit"}]}),getters:{},actions:{}}),Qt={key:0,class:"text-bold"},Ot={key:1,class:"text-bold"},Pt={key:2,class:"text-bold"},At={__name:"MainLayout",setup(e){const w=Bt(),n=x(!1),l=()=>{n.value=!n.value};return(o,u)=>{const g=tt("router-view");return H(),te(Ct,{view:"lHh Lpr lFf"},{default:C(()=>[L(qt,{bordered:"",elevated:"",reveal:""},{default:C(()=>[L(St,null,{default:C(()=>[L(je,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l}),L(kt,null,{default:C(()=>[ae("Quasar CLI with Vite App")]),_:1}),at("div",null,"Quasar v"+me(o.$q.version),1),L(rt),o.$q.platform.is.desktop?(H(),X("div",Qt," Gets rendered only on desktop platform. ")):Z("",!0),o.$q.platform.is.ios?(H(),X("div",Ot," Gets rendered only on Ios platform. ")):Z("",!0),o.$q.platform.is.android?(H(),X("div",Pt," Gets rendered only on Android platform. ")):Z("",!0)]),_:1})]),_:1}),L(Tt,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=y=>n.value=y),"show-if-above":"",bordered:""},{default:C(()=>[L(yt,null,{default:C(()=>[L(ge,{header:""},{default:C(()=>[ae("Essential Links")]),_:1}),(H(!0),X(lt,null,ot(nt(w).essentialLinks,y=>(H(),te(_t,it({key:y.title},y),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),L(zt,null,{default:C(()=>[L(g)]),_:1})]),_:1})}}};export{At as default};