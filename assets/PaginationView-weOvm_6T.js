import{_ as g,o as s,c as o,b as a,n as l,bI as r,F as _,i as d,t as h}from"./index-YU522o6f.js";const p={props:["pagination"],methods:{changePage(c){this.$emit("changePage",c)}}},u={"aria-label":"Page navigation example"},m={class:"pagination"},k={class:"page-item"},v=a("span",{"aria-hidden":"true"},"«",-1),P=[v],b=["onClick"],f={class:"page-item"},x=a("span",{"aria-hidden":"true"},"»",-1),C=[x];function B(c,t,e,y,F,i){return s(),o("nav",u,[a("ul",m,[a("li",k,[a("a",{class:l(["page-link",{disabled:!e.pagination.has_pre}]),onClick:t[0]||(t[0]=r(n=>i.changePage(e.pagination.current_page-1),["prevent"])),"aria-label":"Previous"},P,2)]),(s(!0),o(_,null,d(e.pagination.total_pages,n=>(s(),o("li",{class:l(["page-item",{active:e.pagination.current_page===n}]),key:n},[a("a",{class:"page-link",href:"#",onClick:r(N=>i.changePage(n),["prevent"])},h(n),9,b)],2))),128)),a("li",f,[a("a",{class:l(["page-link",{disabled:!e.pagination.has_next}]),onClick:t[1]||(t[1]=r(n=>i.changePage(e.pagination.current_page+1),["prevent"])),"aria-label":"Next"},C,2)])])])}const z=g(p,[["render",B]]);export{z as P};
