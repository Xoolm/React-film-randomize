"use strict";(self.webpackChunkreact_film_randomize=self.webpackChunkreact_film_randomize||[]).push([[383],{4383:(e,r,i)=>{i.r(r),i.d(r,{default:()=>ae});var t=i(2791),a=i(1332),s=i(6196),n=i(8254),l=i(9877),o=i(1286),_=i(7247),c=i(9823),m=i(2419),d=i(5585),p=i(872),u=i(7324),x=i(184);const F=e=>{let{film:r}=e;const{allFilms:i,setAllFilms:a,numbers:s}=(0,t.useContext)(u.Z),[F,Z]=(0,t.useState)(!1),[h,v]=(0,t.useState)(r.option),[W,f]=(0,t.useState)(r.value);console.log(r);const g=Math.round(r.quantity/s.length*100);return(0,x.jsx)("div",{className:n.Z.filmWrapp,children:F?(0,x.jsx)("div",{className:n.Z.FormWrapper,children:(0,x.jsxs)("form",{className:n.Z.FormWrapper__form,children:[(0,x.jsx)("input",{maxLength:32,className:n.Z.inputTitle,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:h,onChange:e=>v(e.target.value)}),(0,x.jsxs)("div",{className:n.Z.counterWrapp,children:[(0,x.jsx)(l.Z,{className:n.Z.counterWrapp__plus,onClick:()=>{W<=9&&f((e=>e+1))},children:(0,x.jsx)(m.Z,{})}),(0,x.jsx)("div",{className:n.Z.counterWrapp__display,children:W}),(0,x.jsx)(l.Z,{className:n.Z.counterWrapp__minus,onClick:()=>{W>=2&&f((e=>e-1))},children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsxs)("div",{className:n.Z.formButtons,children:[(0,x.jsx)(l.Z,{color:"info",className:n.Z.FormWrapper__edit,size:"small","aria-label":"edit",onClick:e=>{const t=i.map((e=>r.id===e.id?{...e,option:h,optionSize:11-W,value:W,quantity:Math.floor(110-10*W)}:e));a(t),Z(!1)},children:(0,x.jsx)(p.Z,{className:n.Z.edit__icon})}),(0,x.jsx)(l.Z,{className:n.Z.FormWrapper__close,onClick:()=>Z(!1),size:"small","aria-label":"add",children:(0,x.jsx)(c.Z,{className:n.Z.close__icon})})]})]})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{className:n.Z.filmWrapp__title,children:r.option}),(0,x.jsx)(l.Z,{color:"info",className:n.Z.edit,size:"small","aria-label":"edit",onClick:()=>Z(!0),children:(0,x.jsx)(o.Z,{className:n.Z.filmWrapp__edit__icon})}),(0,x.jsx)(l.Z,{size:"small",className:n.Z.filmWrapp__remove,onClick:e=>{a(i.filter((e=>e.id!==r.id)))},children:(0,x.jsx)(_.Z,{className:n.Z.filmWrapp__remove__icon})}),(0,x.jsxs)("div",{className:n.Z.chanceWrapp,children:[(0,x.jsxs)("p",{className:n.Z.filmFactor,children:[r.value," | "]}),(0,x.jsxs)("p",{className:n.Z.filmChance,children:["| ",g," %"]})]})]})})};var Z=i(976),h=i(3366),v=i(7462),W=i(8182),f=i(4419),g=i(2065),j=i(6934),A=i(1402),N=i(7479),b=i(4036),I=i(5878),C=i(1217);function z(e){return(0,C.Z)("MuiIconButton",e)}const k=(0,I.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),y=["edge","children","className","color","disabled","disableFocusRipple","size"],D=(0,j.ZP)(N.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,"default"!==i.color&&r["color".concat((0,b.Z)(i.color))],i.edge&&r["edge".concat((0,b.Z)(i.edge))],r["size".concat((0,b.Z)(i.size))]]}})((e=>{let{theme:r,ownerState:i}=e;return(0,v.Z)({textAlign:"center",flex:"0 0 auto",fontSize:r.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(r.vars||r).palette.action.active,transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest})},!i.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.activeChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,g.Fq)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===i.edge&&{marginLeft:"small"===i.size?-3:-12},"end"===i.edge&&{marginRight:"small"===i.size?-3:-12})}),(e=>{let{theme:r,ownerState:i}=e;var t;const a=null==(t=(r.vars||r).palette)?void 0:t[i.color];return(0,v.Z)({},"inherit"===i.color&&{color:"inherit"},"inherit"!==i.color&&"default"!==i.color&&(0,v.Z)({color:null==a?void 0:a.main},!i.disableRipple&&{"&:hover":(0,v.Z)({},a&&{backgroundColor:r.vars?"rgba(".concat(a.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,g.Fq)(a.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===i.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===i.size&&{padding:12,fontSize:r.typography.pxToRem(28)},{["&.".concat(k.disabled)]:{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}})})),S=t.forwardRef((function(e,r){const i=(0,A.Z)({props:e,name:"MuiIconButton"}),{edge:t=!1,children:a,className:s,color:n="default",disabled:l=!1,disableFocusRipple:o=!1,size:_="medium"}=i,c=(0,h.Z)(i,y),m=(0,v.Z)({},i,{edge:t,color:n,disabled:l,disableFocusRipple:o,size:_}),d=(e=>{const{classes:r,disabled:i,color:t,edge:a,size:s}=e,n={root:["root",i&&"disabled","default"!==t&&"color".concat((0,b.Z)(t)),a&&"edge".concat((0,b.Z)(a)),"size".concat((0,b.Z)(s))]};return(0,f.Z)(n,z,r)})(m);return(0,x.jsx)(D,(0,v.Z)({className:(0,W.Z)(d.root,s),centerRipple:!0,focusRipple:!o,disabled:l,ref:r,ownerState:m},c,{children:a}))}));var U=i(2362),R=i(6674);const T=e=>{let{user:r}=e;const{allFilms:i,setAllFilms:a}=(0,t.useContext)(u.Z),[s,n]=(0,t.useState)(!0),[o,_]=(0,t.useState)(!1),[F,Z]=(0,t.useState)(""),[h,v]=(0,t.useState)(1);(0,t.useEffect)((()=>{0===i.length&&_(!0)}),[]);const W=(0,t.useRef)(null);return(0,x.jsxs)("div",{className:U.Z.FilmFormWrapper,children:[(0,x.jsx)(R.Z,{timeout:{exit:250},nodeRef:W,in:o,unmountOnExit:!0,onEnter:()=>n(!1),onExited:()=>n(!0),classNames:{enterActive:U.Z.enterActive,enterDone:U.Z.enterDone,exitActive:U.Z.exitActive,exitDone:U.Z.exitDone},children:(0,x.jsxs)("div",{ref:W,className:U.Z.FormWrapper,children:[(0,x.jsxs)("form",{className:U.Z.FormWrapper__form,children:[(0,x.jsx)("input",{required:!0,minLength:1,maxLength:32,className:U.Z.inputTitle,type:"text",onChange:e=>Z(e.target.value),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",value:F}),(0,x.jsxs)("div",{className:U.Z.counterWrapp,children:[(0,x.jsx)(l.Z,{className:U.Z.counterWrapp__plus,onClick:()=>{h<=9&&v((e=>e+1))},children:(0,x.jsx)(m.Z,{})}),(0,x.jsx)("div",{className:U.Z.counterWrapp__display,children:h}),(0,x.jsx)(l.Z,{className:U.Z.counterWrapp__minus,onClick:()=>{h>=2&&v((e=>e-1))},children:(0,x.jsx)(d.Z,{})})]}),(0,x.jsx)(l.Z,{id:"AAA",onClick:()=>{const e={userID:r.id,id:Date.now(),option:F,optionSize:11-h,value:h,chance:1,quantity:Math.floor(110-10*h)};a([...i,e]),Z(""),v(1)},className:U.Z.success,size:"small","aria-label":"add",children:(0,x.jsx)(p.Z,{})})]}),(0,x.jsx)(l.Z,{onClick:()=>{_(!1),Z("")},className:U.Z.openInput,size:"small","aria-label":"add",children:(0,x.jsx)(c.Z,{className:U.Z.openInput_icon})})]})}),s&&(0,x.jsx)(l.Z,{onClick:()=>_(!0),className:U.Z.openInput,size:"small","aria-label":"add",children:(0,x.jsx)(m.Z,{className:U.Z.openInput_icon})})]})};var M=i(5660),E=i(7689);const B=e=>{let{user:r,onDelete:i}=e;const{allFilms:a}=(0,t.useContext)(u.Z),[s,l]=(0,t.useState)();(0,t.useMemo)((()=>l(a.filter((e=>e.userID===r.id)))),[a]);const o=(0,E.UO)();return(0,x.jsxs)("div",{className:Z.Z.userWrapper,children:[!o.id&&(0,x.jsx)(S,{className:Z.Z.userWrapper__remove,"aria-label":"delete",onClick:()=>i(r.id),children:"X"}),(0,x.jsx)("div",{className:Z.Z.userWrapper__title,children:r.userName}),(0,x.jsx)(M.Z,{component:"div",children:s&&s.map((e=>(0,x.jsx)(R.Z,{classNames:{enterActive:n.Z.enterActive,enterDone:n.Z.enterDone,exitActive:n.Z.exitActive},timeout:{exit:250},children:(0,x.jsx)(F,{film:e})},e.id)))}),(0,x.jsx)(T,{user:r})]})};var P=i(1614),w=i(6151);const O="_AddUserForm_UserFormWrapper__lkUtt",q="_AddUserForm_enterActive__WJ4Ey",L="_AddUserForm_enterDone__X1MHQ",H="_AddUserForm_exitActive__CfguG",G="_AddUserForm_exitDone__5jPPP",Q="_AddUserForm_FormWrapper__tQ5Ml",X="_AddUserForm_FormWrapper__form__k-xUd",J="_AddUserForm_Name__input__3TT16",K="_AddUserForm_success__2vwz1",Y="_AddUserForm_openInput__t2AZW",V="_AddUserForm_openInput_icon__Tb4Qn",$="_AddUserForm_closeInput__MTvdK",ee=e=>{let{onCreate:r,users:i}=e;const[a,s]=(0,t.useState)(!0),[n,o]=(0,t.useState)(!1),[_,d]=(0,t.useState)("");(0,t.useEffect)((()=>{0===i.length&&o(!0)}),[]);const u=(0,t.useRef)(null);return(0,x.jsxs)("div",{className:O,children:[(0,x.jsx)(R.Z,{timeout:{exit:0},nodeRef:u,in:n,unmountOnExit:!0,onEnter:()=>s(!1),onExited:()=>s(!0),classNames:{enterActive:q,enterDone:L,exitActive:H,exitDone:G},children:(0,x.jsxs)("div",{ref:u,className:Q,children:[(0,x.jsxs)("form",{className:X,children:[(0,x.jsx)("input",{className:J,type:"text",onChange:e=>d(e.target.value),placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:_,maxLength:20}),(0,x.jsx)(l.Z,{onClick:()=>{r(_),o(!1),d("")},className:K,size:"small","aria-label":"add",children:(0,x.jsx)(p.Z,{})})]}),(0,x.jsx)(l.Z,{onClick:()=>{o(!1),d("")},className:$,size:"small","aria-label":"add",children:(0,x.jsx)(c.Z,{className:V})})]})}),a&&(0,x.jsx)(l.Z,{onClick:()=>o(!0),className:Y,size:"large","aria-label":"add",children:(0,x.jsx)(m.Z,{className:V})})]})};var re=i(6728),ie=i(1087),te=i(9230);const ae=()=>{const{allFilms:e,setAllFilms:r}=(0,t.useContext)(u.Z),[i,n]=(0,re._)([],"users"),l=t=>{n(i.filter((e=>e.id!==t))),r(e.filter((e=>e.userID!==t)))};console.log(i);const{t:o}=(0,te.$G)();return(0,x.jsx)(s.Z,{children:(0,x.jsx)("div",{className:a.Z.FilmsAddingPage__background,children:(0,x.jsxs)(P.Z,{maxWidth:"lg",sx:{display:"flex",flexDirection:"column"},children:[(0,x.jsxs)("div",{className:a.Z.titleContainer,children:[(0,x.jsx)("h1",{children:o("addingPage.rules.rules")}),(0,x.jsx)("p",{children:o("addingPage.rules.added")}),(0,x.jsx)("p",{children:o("addingPage.rules.selected")})]}),(0,x.jsxs)(M.Z,{component:"div",className:a.Z.filmConteinerWrapp__users,children:[i&&i.map((e=>(0,x.jsx)(R.Z,{classNames:{enterActive:Z.Z.enterActive,enterDone:Z.Z.enterDone,exitActive:Z.Z.exitActive},timeout:{exit:250},children:(0,x.jsx)(B,{onDelete:l,user:e})},e.id))),(0,x.jsx)(ee,{users:i,onCreate:e=>{const r={id:Date.now()+1,userName:e};n([...i,r])}})]}),(0,x.jsx)(w.Z,{className:a.Z.adding__button,color:"inherit",children:(0,x.jsx)(ie.OL,{to:"/Games",children:o("addingPage.button")})})]})})})}},6196:(e,r,i)=>{i.d(r,{Z:()=>n});var t=i(9202),a=(i(2791),i(184));const s={initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50}},n=e=>{let{children:r}=e;return(0,a.jsx)(t.E.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.3},children:r})}},2362:(e,r,i)=>{i.d(r,{Z:()=>t});const t={FilmFormWrapper:"_AddFilmForm_FilmFormWrapper__M-GbX",enterActive:"_AddFilmForm_enterActive__MW4-8",enterDone:"_AddFilmForm_enterDone__D06vH",exitActive:"_AddFilmForm_exitActive__F8l4-",exitDone:"_AddFilmForm_exitDone__0lpXd",FormWrapper:"_AddFilmForm_FormWrapper__fokB4",FormWrapper__form:"_AddFilmForm_FormWrapper__form__uqWVl",counterWrapp:"_AddFilmForm_counterWrapp__g4Cdj",counterWrapp__plus:"_AddFilmForm_counterWrapp__plus__8pEeR",counterWrapp__display:"_AddFilmForm_counterWrapp__display__T0Emp",counterWrapp__minus:"_AddFilmForm_counterWrapp__minus__+inRa",inputTitle:"_AddFilmForm_inputTitle__MUgKh","neon-1":"_AddFilmForm_neon-1__lb4oA",success:"_AddFilmForm_success__RvgqZ",openInput:"_AddFilmForm_openInput__7DTSB",openInput_icon:"_AddFilmForm_openInput_icon__ZxYSU"}},8254:(e,r,i)=>{i.d(r,{Z:()=>t});const t={enterActive:"_FilmItem_enterActive__p6s7V",enterDone:"_FilmItem_enterDone__wM-+q",exitActive:"_FilmItem_exitActive__S1ZNV",filmWrapp:"_FilmItem_filmWrapp__fGCTq",FormWrapper:"_FilmItem_FormWrapper__xrfvW",FormWrapper__form:"_FilmItem_FormWrapper__form__tZ5QS",inputTitle:"_FilmItem_inputTitle__5MtYn","neon-1":"_FilmItem_neon-1__8ci1R",counterWrapp:"_FilmItem_counterWrapp__5jHft",counterWrapp__plus:"_FilmItem_counterWrapp__plus__Nkzj9",counterWrapp__display:"_FilmItem_counterWrapp__display__hRYDf",counterWrapp__minus:"_FilmItem_counterWrapp__minus__2ESiU",formButtons:"_FilmItem_formButtons__JHK3O",FormWrapper__edit:"_FilmItem_FormWrapper__edit__SmpMB",edit__icon:"_FilmItem_edit__icon__bRBa6",success:"_FilmItem_success__3TmSd",FormWrapper__close:"_FilmItem_FormWrapper__close__LABHF",chanceWrapp:"_FilmItem_chanceWrapp__iUzNm",filmChance:"_FilmItem_filmChance__yAszh",filmFactor:"_FilmItem_filmFactor__jKYN3",filmWrapp__value:"_FilmItem_filmWrapp__value__RAzEO",filmWrapp__title:"_FilmItem_filmWrapp__title__gIT8r",filmWrapp__chance:"_FilmItem_filmWrapp__chance__Jyxop",filmWrapp__remove:"_FilmItem_filmWrapp__remove__awY5i",filmWrapp__remove__icon:"_FilmItem_filmWrapp__remove__icon__FojJ1",edit:"_FilmItem_edit__HPm-A",filmWrapp__edit__icon:"_FilmItem_filmWrapp__edit__icon__FiXzi"}},976:(e,r,i)=>{i.d(r,{Z:()=>t});const t={enterActive:"_UserFilms_enterActive__XUbbs",enterDone:"_UserFilms_enterDone__HEx9i",exitActive:"_UserFilms_exitActive__JQWyH",userWrapper:"_UserFilms_userWrapper__P2FOO",userWrapper__title:"_UserFilms_userWrapper__title__sy2s2",userWrapper__remove:"_UserFilms_userWrapper__remove__rhTOB",userWrapper__remove__icon:"_UserFilms_userWrapper__remove__icon__Rax5i","neon-1":"_UserFilms_neon-1__toFhB"}},1332:(e,r,i)=>{i.d(r,{Z:()=>t});const t={FilmsAddingPage__background:"_Adding_FilmsAddingPage__background__BFVMZ",titleContainer:"_Adding_titleContainer__rQ1DK",filmConteinerWrapp__users:"_Adding_filmConteinerWrapp__users__aMzT2",adding__button:"_Adding_adding__button__16Lst","neon-3":"_Adding_neon-3__TGT1N"}}}]);
//# sourceMappingURL=383.05d151b7.chunk.js.map