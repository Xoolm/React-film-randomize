"use strict";(self.webpackChunkreact_film_randomize=self.webpackChunkreact_film_randomize||[]).push([[215],{9215:function(e,i,n){n.r(i),n.d(i,{default:function(){return w}});var r=n(1413),t=n(9439),s=n(2791),_=n(1332),o=n(6196),l=n(1614),a=n(6151),c=n(5660),m=n(6674),u=n(976),p=n(7324),d=n(1087),f=n(9230),Z="modal_modal__heAIg",F="modal_active__xbVwZ",x="modal_modalContent__pbRw-",v=n(184),h=function(e){var i=e.children,n=e.visible,r=e.setVisible,t=[Z];n&&t.push(F);var s=[x];return n&&s.push(F),(0,v.jsx)("div",{className:t.join(" "),onClick:function(){return r(!1)},children:(0,v.jsx)("div",{className:s.join(" "),onClick:function(e){return e.stopPropagation()},children:i})})},W=n(7689),j=n(8254),A=n(3433),g=n(2362),N=n(9877),I=n(2419),b=n(9823),C=n(872),y=n(5585),D=function(e){var i=e.user,n=e.filmSession,r=e.setFilmSession,_=(0,s.useContext)(p.Z),o=_.lobbyAllFilms,l=_.setLobbyAllFilms,a=_.socket,c=(0,s.useState)(!0),u=(0,t.Z)(c,2),d=u[0],f=u[1],Z=(0,s.useState)(!1),F=(0,t.Z)(Z,2),x=F[0],h=F[1],W=(0,s.useState)(""),j=(0,t.Z)(W,2),D=j[0],k=j[1],S=(0,s.useState)(1),U=(0,t.Z)(S,2),L=U[0],z=U[1];(0,s.useEffect)((function(){a.on("responseNewFilm",(function(e){return l(e)}))}),[o,l,a]),(0,s.useEffect)((function(){a.on("updateUserDisconnectedFilms",(function(e){return l(e)}))}),[o,l,a]),(0,s.useEffect)((function(){0===o.length&&h(!0)}),[]);var w=(0,s.useRef)(null);return(0,v.jsxs)("div",{className:g.Z.FilmFormWrapper,children:[(0,v.jsx)(m.Z,{timeout:{exit:250},nodeRef:w,in:x,unmountOnExit:!0,onEnter:function(){return f(!1)},onExited:function(){return f(!0)},classNames:{enterActive:g.Z.enterActive,enterDone:g.Z.enterDone,exitActive:g.Z.exitActive,exitDone:g.Z.exitDone},children:(0,v.jsxs)("div",{ref:w,className:g.Z.FormWrapper,children:[(0,v.jsxs)("form",{className:g.Z.FormWrapper__form,children:[(0,v.jsx)("input",{required:!0,minLength:1,maxLength:32,className:g.Z.inputTitle,type:"text",onChange:function(e){return k(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",value:D}),(0,v.jsxs)("div",{className:g.Z.counterWrapp,children:[(0,v.jsx)(N.Z,{className:g.Z.counterWrapp__plus,onClick:function(){L<=9&&z((function(e){return e+1}))},children:(0,v.jsx)(I.Z,{})}),(0,v.jsx)("div",{className:g.Z.counterWrapp__display,children:L}),(0,v.jsx)(N.Z,{className:g.Z.counterWrapp__minus,onClick:function(){L>=2&&z((function(e){return e-1}))},children:(0,v.jsx)(y.Z,{})})]}),(0,v.jsx)(N.Z,{id:"AAA",onClick:function(){var e={userID:i.id,lobbyID:i.lobbyID,socketID:a.id,id:Date.now(),option:D,optionSize:11-L,value:L,chance:1,quantity:Math.floor(110-10*L)};k(""),z(1),r([].concat((0,A.Z)(n),[e])),a.emit("newFilm",e)},className:g.Z.success,size:"small","aria-label":"add",children:(0,v.jsx)(C.Z,{})})]}),(0,v.jsx)(N.Z,{onClick:function(){h(!1),k("")},className:g.Z.openInput,size:"small","aria-label":"add",children:(0,v.jsx)(b.Z,{className:g.Z.openInput_icon})})]})}),d&&(0,v.jsx)(N.Z,{onClick:function(){return h(!0)},className:g.Z.openInput,size:"small","aria-label":"add",children:(0,v.jsx)(I.Z,{className:g.Z.openInput_icon})})]})},k=n(1286),S=n(7247),U=function(e){var i=e.film,n=e.userLocal,_=(0,s.useContext)(p.Z),o=_.lobbyAllFilms,l=_.setLobbyAllFilms,a=_.numbersLobby,c=_.socket,m=(0,s.useState)(!1),u=(0,t.Z)(m,2),d=u[0],f=u[1],Z=(0,s.useState)(i.option),F=(0,t.Z)(Z,2),x=F[0],h=F[1],W=(0,s.useState)(i.value),A=(0,t.Z)(W,2),g=A[0],D=A[1];(0,s.useEffect)((function(){c.on("responeFilmDelete",(function(e){return l(e)}))}),[o,l,c]),(0,s.useEffect)((function(){c.on("responeFilmUpdate",(function(e){return l(e)}))}),[o,l,c]);var U=Math.round(i.quantity/a.length*100);return(0,v.jsx)("div",{className:j.Z.filmWrapp,children:d?(0,v.jsx)("div",{className:j.Z.FormWrapper,children:(0,v.jsxs)("form",{className:j.Z.FormWrapper__form,children:[(0,v.jsx)("input",{maxLength:32,className:j.Z.inputTitle,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:x,onChange:function(e){return h(e.target.value)}}),(0,v.jsxs)("div",{className:j.Z.counterWrapp,children:[(0,v.jsx)(N.Z,{className:j.Z.counterWrapp__plus,onClick:function(){g<=9&&D((function(e){return e+1}))},children:(0,v.jsx)(I.Z,{})}),(0,v.jsx)("div",{className:j.Z.counterWrapp__display,children:g}),(0,v.jsx)(N.Z,{className:j.Z.counterWrapp__minus,onClick:function(){g>=2&&D((function(e){return e-1}))},children:(0,v.jsx)(y.Z,{})})]}),(0,v.jsxs)("div",{className:j.Z.formButtons,children:[(0,v.jsx)(N.Z,{color:"info",className:j.Z.FormWrapper__edit,size:"small","aria-label":"edit",onClick:function(e){var n=o.map((function(e){return i.id===e.id?(0,r.Z)((0,r.Z)({},e),{},{option:x,optionSize:11-g,value:g,quantity:Math.floor(110-10*g)}):e}));c.emit("filmUpdate",n,i),f(!1)},children:(0,v.jsx)(C.Z,{className:j.Z.edit__icon})}),(0,v.jsx)(N.Z,{className:j.Z.FormWrapper__close,onClick:function(){return f(!1)},size:"small","aria-label":"add",children:(0,v.jsx)(b.Z,{className:j.Z.close__icon})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:j.Z.filmWrapp__title,children:i.option}),i.userID===n.id?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N.Z,{color:"info",className:j.Z.edit,size:"small","aria-label":"edit",onClick:function(){return f(!0)},children:(0,v.jsx)(k.Z,{className:j.Z.filmWrapp__edit__icon})}),(0,v.jsx)(N.Z,{size:"small",className:j.Z.filmWrapp__remove,onClick:function(e){c.emit("filmDelete",i)},children:(0,v.jsx)(S.Z,{className:j.Z.filmWrapp__remove__icon})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N.Z,{style:{opacity:"0",cursor:"default"},color:"info",className:j.Z.edit,size:"small","aria-label":"edit"}),(0,v.jsx)(N.Z,{style:{opacity:"0",cursor:"default"},size:"small",className:j.Z.filmWrapp__remove})]}),(0,v.jsxs)("div",{className:j.Z.chanceWrapp,children:[(0,v.jsxs)("p",{className:j.Z.filmFactor,children:[i.value," | "]}),(0,v.jsxs)("p",{className:j.Z.filmChance,children:["| ",U," %"]})]})]})})},L=function(e){var i=e.user,n=e.userLocal,r=e.filmSession,_=e.setFilmSession,o=(0,s.useContext)(p.Z).lobbyAllFilms,l=(0,s.useState)(),a=(0,t.Z)(l,2),d=a[0],f=a[1];return(0,s.useMemo)((function(){return f(o.filter((function(e){return e.userID===i.id})))}),[o]),(0,v.jsxs)("div",{className:u.Z.userWrapper,children:[(0,v.jsx)("div",{className:u.Z.userWrapper__title,children:i.userName}),(0,v.jsx)(c.Z,{component:"div",children:d&&d.map((function(e){return(0,v.jsx)(m.Z,{classNames:{enterActive:j.Z.enterActive,enterDone:j.Z.enterDone,exitActive:j.Z.exitActive},timeout:{exit:250},children:(0,v.jsx)(U,{film:e,userLocal:n})},e.id)}))}),i.id===n.id?(0,v.jsx)(D,{user:i,filmSession:r,setFilmSession:_}):null]})};function z(e,i){var n=(0,s.useState)((function(){var n=sessionStorage.getItem(i);return n?JSON.parse(n):e})),r=(0,t.Z)(n,2),_=r[0],o=r[1];return(0,s.useEffect)((function(){sessionStorage.setItem(i,JSON.stringify(_))}),[_]),[_,o]}var w=function(){var e=(0,s.useContext)(p.Z),i=e.lobbyAllFilms,n=e.setLobbyAllFilms,Z=(e.setLobby,e.socket),F=(0,s.useState)(!1),x=(0,t.Z)(F,2),j=x[0],A=x[1],g=(0,s.useState)(""),N=(0,t.Z)(g,2),I=N[0],b=N[1],C=(0,s.useState)([]),y=(0,t.Z)(C,2),D=y[0],k=y[1],S=z([],"sessionUser"),U=(0,t.Z)(S,2),w=U[0],E=U[1],P=z([],"sessionFilms"),O=(0,t.Z)(P,2),R=O[0],q=O[1],B=(0,W.UO)();(0,s.useEffect)((function(){if("userName"in w){var e=(0,r.Z)((0,r.Z)({},w),{},{socketID:Z.id}),i=R.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{socketID:Z.id})}));Z.emit("UserReconection",e,i)}else A(!0)}),[Z]),(0,s.useEffect)((function(){Z.on("responseUserReconection",(function(e){k(e)}))}),[n,Z,i]),(0,s.useEffect)((function(){Z.emit("join",B.id),Z.on("userConnected",(function(e){return console.log(e)})),Z.on("responseNewUser",(function(e,i){k(e),n(i)})),Z.on("updateUserDisconnected",(function(e){return k(e)}))}),[Z,w]);var G=(0,f.$G)().t;return(0,v.jsx)(o.Z,{children:(0,v.jsxs)("div",{className:_.Z.FilmsAddingPage__background,children:[(0,v.jsxs)(l.Z,{maxWidth:"lg",sx:{display:"flex",flexDirection:"column"},children:[(0,v.jsxs)("div",{className:_.Z.titleContainer,children:[(0,v.jsx)("h1",{children:G("addingPage.rules.rules")}),(0,v.jsx)("p",{children:G("addingPage.rules.added")}),(0,v.jsx)("p",{children:G("addingPage.rules.selected")}),(0,v.jsx)(a.Z,{className:_.Z.adding__button,color:"inherit",onClick:function(){sessionStorage.removeItem("sessionUser"),sessionStorage.removeItem("sessionFilms"),Z.close()},children:(0,v.jsx)(d.OL,{to:"/Home",children:"\u0412\u044b\u0439\u0442\u0438"})})]}),(0,v.jsx)(c.Z,{component:"div",className:_.Z.filmConteinerWrapp__users,children:D&&D.map((function(e){return(0,v.jsx)(m.Z,{classNames:{enterActive:u.Z.enterActive,enterDone:u.Z.enterDone,exitActive:u.Z.exitActive},timeout:{exit:250},children:(0,v.jsx)(L,{user:e,userLocal:w,filmSession:R,setFilmSession:q})},e.id)}))}),(0,v.jsx)(a.Z,{className:_.Z.adding__button,color:"inherit",children:(0,v.jsx)(d.OL,{to:"/Games/".concat(B.id),children:G("addingPage.button")})})]}),(0,v.jsxs)(h,{visible:j,setVisible:A,children:[(0,v.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c"}),(0,v.jsx)("input",{type:"text",value:I,onChange:function(e){return b(e.target.value)}}),(0,v.jsx)("button",{onClick:function(){var e={lobbyID:B.id,id:Date.now()+1,socketID:Z.id,userName:I};E(e),A(!j),Z.emit("newUser",e)},children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})]})]})})}},6196:function(e,i,n){var r=n(2333),t=(n(2791),n(184)),s={initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50}};i.Z=function(e){var i=e.children;return(0,t.jsx)(r.E.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.3},children:i})}},2362:function(e,i){i.Z={FilmFormWrapper:"_AddFilmForm_FilmFormWrapper__Ex8UO",enterActive:"_AddFilmForm_enterActive__o5Pqe",enterDone:"_AddFilmForm_enterDone__hthby",exitActive:"_AddFilmForm_exitActive__yYQN7",exitDone:"_AddFilmForm_exitDone__f+J+n",FormWrapper:"_AddFilmForm_FormWrapper__-O6D6",FormWrapper__form:"_AddFilmForm_FormWrapper__form__B9Rd6",counterWrapp:"_AddFilmForm_counterWrapp__hBg7a",counterWrapp__plus:"_AddFilmForm_counterWrapp__plus__L0suQ",counterWrapp__display:"_AddFilmForm_counterWrapp__display__2qw-d",counterWrapp__minus:"_AddFilmForm_counterWrapp__minus__yiXDn",inputTitle:"_AddFilmForm_inputTitle__8O+NH","neon-1":"_AddFilmForm_neon-1__6PL0o",success:"_AddFilmForm_success__gpj4i",openInput:"_AddFilmForm_openInput__20q-1",openInput_icon:"_AddFilmForm_openInput_icon__AG3uH"}},8254:function(e,i){i.Z={enterActive:"_FilmItem_enterActive__nRt8+",enterDone:"_FilmItem_enterDone__HwMRU",exitActive:"_FilmItem_exitActive__mvv1j",filmWrapp:"_FilmItem_filmWrapp__q+gEf",FormWrapper:"_FilmItem_FormWrapper__S9zNW",FormWrapper__form:"_FilmItem_FormWrapper__form__sHDGd",inputTitle:"_FilmItem_inputTitle__rdXAW","neon-1":"_FilmItem_neon-1__sjnpp",counterWrapp:"_FilmItem_counterWrapp__WC2mG",counterWrapp__plus:"_FilmItem_counterWrapp__plus__0tmuH",counterWrapp__display:"_FilmItem_counterWrapp__display__vau6s",counterWrapp__minus:"_FilmItem_counterWrapp__minus__2+34w",formButtons:"_FilmItem_formButtons__ggUqe",FormWrapper__edit:"_FilmItem_FormWrapper__edit__tKLI8",edit__icon:"_FilmItem_edit__icon__gk98w",success:"_FilmItem_success__gy5Pz",FormWrapper__close:"_FilmItem_FormWrapper__close__IwVeL",chanceWrapp:"_FilmItem_chanceWrapp__Ut9-4",filmChance:"_FilmItem_filmChance__-BrPm",filmFactor:"_FilmItem_filmFactor__WXp-f",filmWrapp__value:"_FilmItem_filmWrapp__value__9iu9B",filmWrapp__title:"_FilmItem_filmWrapp__title__Mkdzf",filmWrapp__chance:"_FilmItem_filmWrapp__chance__Orig1",filmWrapp__remove:"_FilmItem_filmWrapp__remove__VN-NJ",filmWrapp__remove__icon:"_FilmItem_filmWrapp__remove__icon__INgfL",edit:"_FilmItem_edit__Wev83",filmWrapp__edit__icon:"_FilmItem_filmWrapp__edit__icon__tnW0U"}},976:function(e,i){i.Z={enterActive:"_UserFilms_enterActive__ikrdl",enterDone:"_UserFilms_enterDone__X0cut",exitActive:"_UserFilms_exitActive__VAsAV",userWrapper:"_UserFilms_userWrapper__upCyA",userWrapper__title:"_UserFilms_userWrapper__title__GGjG4",userWrapper__remove:"_UserFilms_userWrapper__remove__ZRZhH",userWrapper__remove__icon:"_UserFilms_userWrapper__remove__icon__CPita","neon-1":"_UserFilms_neon-1__haOIb"}},1332:function(e,i){i.Z={FilmsAddingPage__background:"_Adding_FilmsAddingPage__background__AAOEm",titleContainer:"_Adding_titleContainer__1DgmW",filmConteinerWrapp__users:"_Adding_filmConteinerWrapp__users__unzsR",adding__button:"_Adding_adding__button__vwB9c","neon-3":"_Adding_neon-3__k-irg"}}}]);
//# sourceMappingURL=215.74a383ff.chunk.js.map