(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{40:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),r=n.n(s),o=n(33),i=n.n(o),c=(n(40),n(3)),u=n.n(c),d=n(14),b=n(10),l=n(11),j=n(5),h=n(13),p=n(12),m=(n(42),n(6)),f=n(2),g=(n(43),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"home-page-div",children:Object(a.jsx)("h1",{children:"In this website you can write code in python, you have just to sign up!"})})}}]),n}(s.Component)),O=n(18),v=(n(44),n(21)),x=n.n(v).a.create({baseURL:"/"}),_=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).submitData=Object(d.a)(u.a.mark((function t(){var e,n,s,r,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.state,n=e.username,s=e.email,r=e.password,o={username:n,email:s,password:r},t.next=4,x.post("/signup",o);case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)}))),a.transitioForm=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({form_state:"transition"}),t.next=3,a.submitData();case 3:"true"===(e=t.sent).data.response&&a.setState({form_state:"done"}),"false"===e.data.response&&a.setState({form_state:"wrong",reasonWhyRejected:e.data.reason});case 6:case"end":return t.stop()}}),t)}))),a.onSubmitForm=function(t){t.preventDefault(),a.transitioForm()},a.turnItBack=function(t){t.preventDefault(),a.setState({form_state:"default"})},a.state={form_state:"default",signup_ready:!1,username:"",email:"",password:"",reasonWhyRejected:""},a.onSubmitForm=a.onSubmitForm.bind(Object(j.a)(a)),a.onChangeInput=a.onChangeInput.bind(Object(j.a)(a)),a.submitData=a.submitData.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"onChangeInput",value:function(t){var e=t.target.value,n=t.target.name;this.setState(Object(O.a)({},n,e))}},{key:"render",value:function(){var t=void 0,e=void 0;switch(this.state.form_state){case"transition":t="Processing...";break;case"done":t="Done!";break;case"wrong":t=this.state.reasonWhyRejected,e="Back";break;default:t="Something goes wrong, try again...",e="Back"}return Object(a.jsxs)("form",{className:"signup-main",onSubmit:this.onSubmitForm,children:[Object(a.jsxs)("div",{id:"transition-div","data-transition":this.state.form_state,children:[Object(a.jsx)("h3",{id:"transition-h3","data-h3-state":this.state.form_state,children:t}),Object(a.jsx)("button",{onClick:this.turnItBack,id:"transition-btn","data-btn-state":this.state.form_state,children:e}),Object(a.jsx)(m.b,{to:"login",id:"transition-link","data-link-state":this.state.form_state,children:"Go to login"})]}),Object(a.jsx)("h4",{children:"Sign up"}),Object(a.jsx)("input",{onChange:this.onChangeInput,value:this.state.username,type:"text",name:"username",placeholder:"username"}),Object(a.jsx)("input",{onChange:this.onChangeInput,value:this.state.email,type:"email",name:"email",placeholder:"email"}),Object(a.jsx)("input",{onChange:this.onChangeInput,value:this.state.password,type:"password",name:"password",placeholder:"password"}),Object(a.jsx)("button",{type:"submit",name:"submit",children:"Sign up"}),Object(a.jsxs)("p",{children:["Already have an account?",Object(a.jsx)(m.b,{to:"login",children:" Login"})]})]})}}]),n}(s.Component),k=(n(67),n(68),n.p+"static/media/logo.bbc2b5a6.png"),w=r.a.createContext(!1);var y=function(t){var e="",n="",s="",r="";return"true"===t.user_is_logged&&(s="false",n="true",r="false",e="true"),"false"===t.user_is_logged&&(s="true",n="false",r="true",e="false"),Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)(m.b,{to:"/","data-status":"true",children:[" ",Object(a.jsx)("img",{src:k})," "]}),Object(a.jsx)(m.b,{to:"codedesk","data-status":e,children:"Code Desk"}),Object(a.jsx)(m.b,{to:"login","data-status":s,children:"Login"}),Object(a.jsx)(m.b,{to:"signup","data-status":r,children:"Sign up"}),Object(a.jsx)(m.b,{to:"logout","data-status":n,children:"Logout"})]})},C=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(b.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(w.Consumer,{children:function(t){return Object(a.jsx)(y,{user_is_logged:t.user_is_logged})}})}}]),n}(s.Component),S=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).submitData=Object(d.a)(u.a.mark((function t(){var e,n,s,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.state,n=e.username,s=e.password,r={username:n,password:s},t.next=4,x.post("/login",r);case 4:"true"===(o=t.sent).data.response?a.setState({form_state:"good"}):a.setState({form_state:"bad",reasonWhyRejected:o.data.reason});case 6:case"end":return t.stop()}}),t)}))),a.transition=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({form_state:"transition"}),a.submitData();case 2:case"end":return t.stop()}}),t)}))),a.state={form_state:"default",username:"",password:"",reasonWhyRejected:""},a.onSubmit=a.onSubmit.bind(Object(j.a)(a)),a.submitData=a.submitData.bind(Object(j.a)(a)),a.transition=a.transition.bind(Object(j.a)(a)),a.bringDefaut=a.bringDefaut.bind(Object(j.a)(a)),a.onChangeInput=a.onChangeInput.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"onChangeInput",value:function(t){t.preventDefault();var e=t.target.value,n=t.target.name;this.setState(Object(O.a)({},n,e))}},{key:"onSubmit",value:function(t){t.preventDefault(),this.transition()}},{key:"bringDefaut",value:function(t){t.preventDefault(),this.setState({form_state:"default"})}},{key:"render",value:function(){var t="";switch(this.state.form_state){case"transition":t="Processing...";break;case"good":return t="You are now logged! Redirecting...",Object(a.jsx)(w.Consumer,{children:function(t){t.value;var e=t.is_loggedf;return Object(a.jsxs)(f.a,{to:"/",children:[" ",e()," "]})}});case"bad":t=this.state.reasonWhyRejected;break;default:console.log("I know his name")}return console.log(this.state.form_state),Object(a.jsxs)("form",{onSubmit:this.onSubmit,className:"login-div",children:[Object(a.jsxs)("div",{"data-state":this.state.form_state,className:"transition-div",children:[Object(a.jsx)("h4",{children:t}),Object(a.jsx)("button",{onClick:this.bringDefaut,children:"Back"})]}),Object(a.jsx)("h4",{children:"Login"}),Object(a.jsx)("input",{onChange:this.onChangeInput,value:this.state.username,type:"text",name:"username",placeholder:"username"}),Object(a.jsx)("input",{onChange:this.onChangeInput,value:this.state.password,type:"password",name:"password",placeholder:"password"}),Object(a.jsx)("button",{type:"submit",name:"submit",children:"Login"}),Object(a.jsxs)("p",{children:["Dont have an account?",Object(a.jsx)(m.b,{to:"signup",children:" Sign up"})]})]})}}]),n}(s.Component),D=(n(69),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).sendData=Object(d.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={code:a.state.code_value},t.next=3,x.post("runcode",e);case 3:n=t.sent,a.setState({output_value:n.data.response});case 5:case"end":return t.stop()}}),t)}))),a.state={code_value:"",output_value:""},a.onChange=a.onChange.bind(Object(j.a)(a)),a.onRun=a.onRun.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"onChange",value:function(t){t.preventDefault(),this.setState({code_value:t.target.value})}},{key:"onRun",value:function(t){t.preventDefault(),this.sendData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"desk-div",children:[Object(a.jsx)("textarea",{onChange:this.onChange,className:"textarea-input",name:"input",value:this.state.code_value}),Object(a.jsx)("button",{onClick:this.onRun,name:"",children:"Run"}),Object(a.jsx)("textarea",{className:"textarea-output",name:"output",value:this.state.output_value})]})}}]),n}(s.Component));var I=function(t){return Object(a.jsx)(w.Consumer,{children:function(t){return function(){var t=Object(d.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.post("logout");case 2:t.sent,e.is_loggedf();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(t),Object(a.jsx)(f.a,{to:"/"})}})};n(70);var R=function(t){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("p",{children:" \xa9 2020 copyright Daniel Henrique.  "})})},N=function(){return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(f.d,{children:[Object(a.jsx)(f.b,{exact:!0,path:"/",component:g}),Object(a.jsx)(f.b,{path:"/signup",component:_}),Object(a.jsx)(f.b,{path:"/login",component:S}),Object(a.jsx)(f.b,{path:"/codedesk",component:D}),Object(a.jsx)(f.b,{path:"/logout",component:I})]})]})},B=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).is_logged=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("is_logged");case 2:e=t.sent,a.setState({user_is_logged:e.data.response});case 4:case"end":return t.stop()}}),t)}))),a.state={user_is_logged:"",is_loggedf:a.is_logged},a.is_logged=a.is_logged.bind(Object(j.a)(a)),a.is_logged(),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(w.Provider,{value:this.state,children:[Object(a.jsx)(N,{}),Object(a.jsx)(R,{})]})})}}]),n}(s.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fb9050d2.chunk.js.map