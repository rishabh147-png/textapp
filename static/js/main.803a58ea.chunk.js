(this.webpackJsonptextapp=this.webpackJsonptextapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{class:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Dark mode"})]})]})]})})}function d(e){var t=Object(c.useState)(" "),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"rgb(203 225 243)":"white"},id:"myBox",rows:"8",value:n,onChange:function(e){s(e.target.value)}})}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 ",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("converted to uppercase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("converted to lowercase","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Removed extra spaces","success")},children:"Remove extra spaces"})]}),Object(o.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").filter((function(e){return 0!==e.length})).length," words and ,",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length,"  time to read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something to preview"})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : ",e.alert.msg]})})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),j=r[0],h=r[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",about:"About us",mode:a,toggleMode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="white",m("Light mode enabled","success")):(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode enabled","success"))}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:m,heading:"ENTER THE TEXT TO CHANGE !!",mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.803a58ea.chunk.js.map