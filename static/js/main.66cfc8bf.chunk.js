(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),l=c(1);c(9);var i=c(2),s=c.n(i),r=c(0);const o=e=>{let{total:a,perPage:c,currentPage:t,onPageChange:n=(()=>{})}=e;return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:()=>n(t-1),children:"\xab"})}),a.map((e=>Object(r.jsx)("li",{className:s()("page-item",{active:t===e.id}),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link ".concat(t===a.length?"disabled":""),href:"#".concat(e.id),onClick:()=>n(e.id),children:e.id})},e.id))),Object(r.jsx)("li",{className:s()("page-item",{disabled:t===a.length}),children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===c,onClick:()=>n(t+1),children:"\xbb"})})]})},d=function(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}(1,42).map(((e,a)=>({name:"Item ".concat(e),id:a}))),j=()=>{const[e,a]=Object(l.useState)(9),[c,t]=Object(l.useState)(5),[n,i]=Object(l.useState)(1),s=Array.from({length:e},((e,a)=>({id:a+1})));return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(n," (items ").concat((n-1)*c+1," - ").concat(c*n>42?42:c*n," of 42)")}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:c,onChange:e=>{const c=+e.target.value;t(c),a(Math.ceil(d.length/c)),i(1)},children:[Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"10",children:"10"}),Object(r.jsx)("option",{value:"20",children:"20"})]})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(o,{total:s,perPage:e,currentPage:n,onPageChange:e=>{i(e)}}),Object(r.jsx)("ul",{children:d.slice((n-1)*c,(n-1)*c+c).map((e=>Object(r.jsx)("li",{"data-cy":"item",children:e.name},e.id)))})]})};n.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.66cfc8bf.chunk.js.map