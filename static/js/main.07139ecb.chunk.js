(this["webpackJsonppagination-react"]=this["webpackJsonppagination-react"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),o=(n(9),n(2)),r=(n(10),n(0));var l=function(t){var e=t.posts;return t.loading?Object(r.jsx)("h2",{children:"Loading..."}):Object(r.jsx)("ul",{className:"list-group mb-4",children:e.map((function(t){var e=t.id,n=t.title;return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsxs)("div",{className:"list-number",children:[e,"."]}),n]},e)}))})};var u=function(t){for(var e=t.postsPerPage,n=t.totalPosts,c=t.handlePagination,a=[],i=1;i<=Math.ceil(n/e);i++)a.push(i);return Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{className:"pagination",children:a.map((function(t){return Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)("a",{onClick:function(){return c(t)},href:"!#",className:"page-link",children:t})},t)}))})})};var j=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),j=s[0],h=s[1],b=Object(c.useState)(1),d=Object(o.a)(b,2),f=d[0],p=d[1],g=Object(c.useState)(10),O=Object(o.a)(g,1)[0];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){h(!0),a(t)})).catch((function(t){console.log(t)})).finally((function(){h(!1)}))}),[]);var m=f*O,x=m-O,v=n.slice(x,m);return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("h1",{className:"text-primary mb-3",children:"Pagination"}),Object(r.jsx)(l,{posts:v,loading:j}),Object(r.jsx)(u,{postsPerPage:O,totalPosts:n.length,handlePagination:function(t){p(t)}})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.07139ecb.chunk.js.map