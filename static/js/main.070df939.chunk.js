(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[0],{105:function(e,t,a){e.exports=a(197)},110:function(e,t,a){},111:function(e,t,a){},116:function(e,t){},118:function(e,t){},149:function(e,t){},150:function(e,t){},192:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(101),s=a.n(l),i=(a(110),a(32)),u=a(33),o=a(37),c=a(35),m=a(38),d=a(39),h=a(15),p=a(36),f=a.n(p);a(111);function g(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-header"},r.a.createElement("img",{src:f.a,className:"Home-logo",alt:"logo"}),r.a.createElement("a",{className:"Home-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}var E=a(102),v=a(34),b=a(57),w=a.n(b),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleKeyPress=function(e){"Enter"===e.key&&a.handleSubmit(e)},a.handleSubmit=function(e){e.preventDefault();var t=a.state.password;a.setState({username:"",password:""}),a.hashPassword(t,a.state.saltRounds)},a.state={username:"",password:"",hash:"",saltRounds:13},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"comparePassword",value:function(){w.a.compareSync(this.state.password,this.state.hash)}},{key:"hashPassword",value:function(e,t){var a=this;w.a.hash(e,t).then((function(e){return a.setState({hash:e})})).then(console.log(this.state.hash))}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,"login form",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit,onKeyPress:this.handleKeyPress},r.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,placeholder:"username",autoFocus:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"submit")),r.a.createElement("div",null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod risus sit amet odio blandit interdum. Curabitur accumsan mauris sit amet blandit feugiat. Etiam vehicula tincidunt sem, at scelerisque ligula fringilla ac. Quisque orci mi, vehicula varius augue non, ullamcorper cursus nulla. Quisque placerat libero at erat vulputate efficitur. Fusce vulputate felis lectus, ac sagittis turpis fringilla at. Vivamus metus orci, fringilla vel ante eu, vestibulum sollicitudin neque."),r.a.createElement("p",null,"Nunc nec ipsum a ipsum ullamcorper ullamcorper non a dolor. Nunc accumsan quam ut tortor ornare tempor. Donec odio urna, ornare a justo sit amet, vulputate pellentesque mauris. Donec at lacus at risus faucibus fermentum. Nunc ultricies, ex id porta pretium, ligula nisi dignissim tellus, et mattis nulla mauris sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a elit feugiat, scelerisque neque id, ultricies massa. Phasellus gravida sodales lectus venenatis molestie. Pellentesque commodo enim eros, ut congue magna cursus vitae.")))}}]),t}(r.a.Component);function y(){return r.a.createElement("div",null,"signup form")}function S(){return r.a.createElement("div",null,"About")}function O(){return r.a.createElement("div",null,"Media")}function k(e){return console.log(e),!0===e.hasLoggedIn?!1===e.isAnon?r.a.createElement("div",null,"Secret area for ",e.userId):r.a.createElement("div",null,"Secret area for anon"):r.a.createElement("div",null,"You are not allowed here")}a(192);var q=["About","Media","Secret","Login","Signup"];function C(){return r.a.createElement("nav",{id:"menu"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:f.a,alt:"home",width:"100px"})),r.a.createElement("ul",null,q.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(d.b,{to:"/"+e},e))}))))}var P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={hasLoggedIn:!1,userId:0,isAnon:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/react-test-app"},r.a.createElement(C,null),r.a.createElement("div",{id:"pageContainer"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(h.a,{path:"/login"},r.a.createElement(j,null)),r.a.createElement(h.a,{path:"/signup"},r.a.createElement(y,null)),r.a.createElement(h.a,{path:"/about"},r.a.createElement(S,null)),r.a.createElement(h.a,{path:"/media"},r.a.createElement(O,null)),r.a.createElement(h.a,Object.assign({path:"/secret"},this.state),r.a.createElement(k,null)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[105,1,2]]]);
//# sourceMappingURL=main.070df939.chunk.js.map