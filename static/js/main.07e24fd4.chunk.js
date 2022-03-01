(this.webpackJsonpdiscord=this.webpackJsonpdiscord||[]).push([[0],{77:function(e,c,a){},78:function(e,c,a){},79:function(e,c,a){},80:function(e,c,a){},85:function(e,c,a){},90:function(e,c,a){},91:function(e,c,a){},92:function(e,c,a){},93:function(e,c,a){"use strict";a.r(c);var n=a(3),s=a(2),t=a.n(s),i=a(24),r=a.n(i),l=(a(77),a(78),a(26)),j=(a(79),a(80),a(50)),o=a.n(j),d=a(51),h=a.n(d),b=a(52),u=a.n(b),O=a(108),m=a(110),x=a(55),p=a.n(x),f=a(54),v=a.n(f),N=a(53),_=a.n(N);var g=function(e){var c=e.channelName;return Object(n.jsxs)("div",{className:"chatHeader",children:[Object(n.jsx)("div",{className:"chatHeader__left",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("span",{className:"chatHeader__hash",children:"#"}),c]})}),Object(n.jsxs)("div",{className:"chatHeader__right",children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(o.a,{})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(u.a,{})}),Object(n.jsxs)("div",{className:"chatHeader__search",children:[Object(n.jsx)(m.a,{placeholder:"search",className:"chatHeader__search"}),Object(n.jsx)(_.a,{})]}),Object(n.jsx)(O.a,{children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(p.a,{})})]})]})},I=a(57),C=a.n(I),S=a(58),y=a.n(S),w=a(59),B=a.n(w),k=a(60),H=a.n(k),E=a(111);a(85);var D=function(e){var c=e.user,a=e.timestamp,s=e.message;return Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)(E.a,{src:c.photo}),Object(n.jsxs)("div",{className:"message__info",children:[Object(n.jsxs)("h5",{children:[c.displayName,Object(n.jsx)("span",{className:"message__timestamp",children:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]}),Object(n.jsx)("h4",{children:s})]})]})},z=a(21),A=a(27),F=Object(A.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,c){e.channelId=c.payload.channelId,e.channelName=c.payload.channelName}}}),V=F.actions.setChannelInfo,W=function(e){return e.app.channelId},G=function(e){return e.app.channelName},J=F.reducer,K=Object(A.b)({name:"user",initialState:{user:null},reducers:{login:function(e,c){e.user=c.payload},logout:function(e,c){e.user=null}}}),M=K.actions,R=M.login,T=M.logout,U=function(e){return e.user.user},P=K.reducer,L=a(29),$=L.a.initializeApp({apiKey:"AIzaSyDzc3GFa5IuE4-ovhcaJUo1f673RyK2FKo",authDomain:"chat-app-9f338.firebaseapp.com",projectId:"chat-app-9f338",storageBucket:"chat-app-9f338.appspot.com",messagingSenderId:"522798811873",appId:"1:522798811873:web:848a9d91ff93efca4185a0"}).firestore(),q=L.a.auth(),Q=new L.a.auth.GoogleAuthProvider,X=$;var Y=function(){var e=Object(s.useRef)(),c=Object(z.c)(W),a=Object(z.c)(U),t=Object(z.c)(G),i=Object(s.useState)(""),r=Object(l.a)(i,2),j=r[0],o=r[1],d=Object(s.useState)([]),h=Object(l.a)(d,2),b=h[0],u=h[1];return Object(s.useEffect)((function(){c&&X.collection("channels").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}),e.current.scrollIntoView())}),[c]),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsx)(g,{channelName:t}),Object(n.jsxs)("div",{className:"chat__messages",children:[b.map((function(e){return Object(n.jsx)(D,{timestamp:e.timestamp,user:e.user,message:e.message},"key")})),Object(n.jsx)("div",{ref:e})]}),Object(n.jsxs)("div",{className:"chat__input",children:[Object(n.jsx)(C.a,{}),Object(n.jsxs)("form",{children:[Object(n.jsx)(m.a,{value:j,disabled:!c,onChange:function(e){return o(e.target.value)},placeholder:"Message #".concat(t),className:"chat__search"}),Object(n.jsx)("button",{type:"submit",disabled:!c,className:"chat__inputButton",onClick:function(e){e.preventDefault(),X.collection("channels").doc(c).collection("messages").add({timestamp:L.a.firestore.FieldValue.serverTimestamp(),message:j,user:a}),o("")},children:"Send Message"})]}),Object(n.jsxs)("div",{className:"chat__inputIcons",children:[Object(n.jsx)(y.a,{}),Object(n.jsx)(B.a,{}),Object(n.jsx)(H.a,{})]})]})]})},Z=(a(90),a(42)),ee=a.n(Z),ce=a(61),ae=a.n(ce);a(91);var ne=function(e){var c=e.id,a=e.channelName,s=Object(z.b)();return Object(n.jsx)("div",{className:"sidebarChannel",onClick:function(){return s(V({channelId:c,channelName:a}))},children:Object(n.jsxs)("h5",{children:[Object(n.jsx)("span",{className:"sidebarChannel__hash",children:"#"}),a]})})},se=a(62),te=a.n(se),ie=a(63),re=a.n(ie),le=a(64),je=a.n(le),oe=a(65),de=a.n(oe),he=a(66),be=a.n(he),ue=a(67),Oe=a.n(ue);var me=function(){var e=Object(z.c)(U),c=Object(s.useState)([]),a=Object(l.a)(c,2),t=a[0],i=a[1];return Object(s.useEffect)((function(){X.collection("channels").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__top",children:[Object(n.jsx)("img",{className:"icon",src:"./Chat.png",alt:""}),Object(n.jsx)("h2",{children:"Vaarta"}),Object(n.jsx)(ee.a,{})]}),Object(n.jsxs)("div",{className:"sidebar__channels",children:[Object(n.jsxs)("div",{className:"sidebar__channelsHeader",children:[Object(n.jsxs)("div",{className:"siderbar__header",children:[Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)("h4",{children:"Text Channels"})]}),Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(ae.a,{onClick:function(){var e=prompt("Enter a new channel name");e&&X.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})})]}),Object(n.jsx)("div",{className:"sidebar__channelslist",children:t.map((function(e){var c=e.id,a=e.channel;return Object(n.jsx)(ne,{id:c,channelName:a.channelName},c)}))})]}),Object(n.jsxs)("div",{className:"sidebar__voice",children:[Object(n.jsx)(te.a,{className:"sidebar__voiceIcon",fontSize:"large"}),Object(n.jsxs)("div",{className:"sidebar__voiceInfo",children:[Object(n.jsx)("h5",{children:"Voice Connected"}),Object(n.jsx)("h6",{children:"Stream"})]}),Object(n.jsxs)("div",{className:"sidebar__voiceIcons",children:[Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(re.a,{})}),Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(je.a,{})})]})]}),Object(n.jsxs)("div",{className:"sidebar__profile",children:[Object(n.jsx)(E.a,{src:e.photo}),Object(n.jsxs)("div",{className:"sidebar__profileInfo",children:[Object(n.jsx)("h5",{children:e.displayName}),Object(n.jsx)("h6",{children:e.uid.substring(0,6)})]}),Object(n.jsxs)("div",{className:"sidebar__profileIcons",children:[Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(de.a,{})}),Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(be.a,{})}),Object(n.jsx)(O.a,{className:"iconBtn",children:Object(n.jsx)(Oe.a,{onClick:function(){return q.signOut()}})})]})]})]})},xe=a(109);a(92);var pe=function(){return Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{className:"login__cont",children:[Object(n.jsx)("div",{className:"login__logo",children:Object(n.jsx)("img",{src:"./Chat.png",alt:""})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(xe.a,{onClick:function(){q.signInWithPopup(Q).catch((function(e){return alert(e.message)}))},children:"Sign In With Google"})]})})};var fe=function(){var e=Object(z.b)(),c=Object(z.c)(U);return Object(s.useEffect)((function(){q.onAuthStateChanged((function(c){e(c?R({uid:c.uid,photo:c.photoURL,email:c.email,displayName:c.displayName}):T())}))}),[e]),Object(n.jsx)("div",{className:"app",children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(me,{}),Object(n.jsx)(Y,{})]}):Object(n.jsx)(pe,{})})},ve=Object(A.a)({reducer:{user:P,app:J}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(z.a,{store:ve,children:Object(n.jsx)(fe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[93,1,2]]]);
//# sourceMappingURL=main.07e24fd4.chunk.js.map