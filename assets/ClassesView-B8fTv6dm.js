import{P as f}from"./PaginationView-weOvm_6T.js";import{_ as v,a as P,R as D,c as p,b as a,z as x,A as b,F as y,i as C,d as A,n as V,r as h,o as c,h as E,w,t as _,f as R}from"./index-YU522o6f.js";import{s as k}from"./search-JtnSM32F.js";import{a as r}from"./axios-G2rPRu76.js";var I={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_NAME:d,VITE_APP_API_URL:l}=I,S={data(){return{filterValue:"",dropdownText:"課程篩選",classData:[],pagination:{},changeData:""}},computed:{...P(k,["categoryData"])},components:{Pagination:f,RouterLink:D},methods:{getClassData(e=1){r.get(`${l}/v2/api/${d}/products/?page=${e}`).then(t=>{this.classData=t.data.products,this.pagination=t.data.pagination}).catch(t=>{alert(t.data.message).error(t)})},changePage(e){this.getClassData(e)},changeClass(e){const t=e.target.value;r.get(`${l}v2/api/${d}/products/?category=${t}`).then(o=>{this.classData=o.data.products,this.pagination=o.data.pagination}).catch(o=>{alert(o.data.message).error(o)})},searchClass(e){r.get(`${l}v2/api/${d}/products/?category=${e}`).then(t=>{this.changeData=e,this.classData=t.data.products,this.pagination=t.data.pagination}).catch(t=>{alert(t.data.message).error(t)})},text(){this.categoryData?this.searchClass(this.categoryData):this.getClassData()}},mounted(){this.text()}},L={class:"container-fluid","data-aos":"fade-right"},$={class:"container mt-30 pb-15 px-0"},B={class:"mb-4"},N={class:"btn btn-primary"},T=R('<option value="" selected>全部課程</option><option value="自我成長">自我成長</option><option value="感情婚姻">感情婚姻</option><option value="人際關係">人際關係</option><option value="諮商談話">諮商談話</option>',5),U=[T],M={class:"row"},j={class:"card h-100 bg-primary border-0 pt-4"},z={class:"d-flex justify-content-center"},F={class:"d-flex justify-content-center align-items-center border rounded-circle border-secondary",style:{width:"308px",height:"308px"}},O=["src"],q={class:"card-body text-center p-0 mt-5"},G={class:"card-title fs-4"},H={class:"mt-8 mb-6"},J={class:"card-text fs-6"},K=a("div",{class:"card-footer text-center bg-secondary text-white"}," 詳細介紹 ",-1);function Q(e,t,o,W,n,i){const g=h("RouterLink"),u=h("Pagination");return c(),p("div",L,[a("div",$,[a("div",B,[a("div",N,[x(a("select",{class:"btn btn-primary px-0 py-3 border-0",onChange:t[0]||(t[0]=(...s)=>i.changeClass&&i.changeClass(...s)),"onUpdate:modelValue":t[1]||(t[1]=s=>n.changeData=s)},U,544),[[b,n.changeData]])])]),a("div",M,[(c(!0),p(y,null,C(n.classData,(s,m)=>(c(),E(g,{to:`/product/${s.id}`,key:m,class:"col-lg-4 col-md-6 mb-8 border-0 card-group justify-content-center product"},{default:w(()=>[a("div",j,[a("div",z,[a("div",F,[a("img",{src:s.imageUrl,class:"card-img-top rounded-circle card-img p-5",alt:"導師照片"},null,8,O)])]),a("div",q,[a("h2",G,_(s.title),1),a("div",H,[a("p",J,_(s.description),1)])]),K])]),_:2},1032,["to"]))),128))]),A(u,{class:V({"d-none":n.pagination.total_pages===1}),pagination:n.pagination,onChangePage:i.changePage},null,8,["class","pagination","onChangePage"])])])}const at=v(S,[["render",Q]]);export{at as default};
