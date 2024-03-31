import{c as T}from"./cart-bJv941xm.js";import{M as L,T as P}from"./bootstrap.esm-l9cKv-78.js";import{_ as A,R as I,m as N,c as l,b as t,d as c,w as u,F as h,i as p,g as b,t as a,e as C,r as k,o as n}from"./index-YU522o6f.js";import{S as E}from"./sweetalert2.all-eK8a_lGc.js";import{a as m}from"./axios-G2rPRu76.js";import{L as V}from"./index-WUXkvdkE.js";import"./_commonjsHelpers-1J56E-h6.js";var R={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"ssozr",BASE_URL:"/vue2024week62/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:y,VITE_APP_API_NAME:f}=R,B={data(){return{cartData:[],dalModal:"",delData:{},delId:"",disabled:!1,productData:{},isLoading:!1,myToast:{title:""},modal:{Title:"",btn:""}}},components:{RouterLink:I,Loading:V},methods:{getCartData(){m.get(`${y}/v2/api/${f}/cart`).then(e=>{this.cartData=e.data.data}).catch(e=>{alert(e.data.message).error(e)}).finally(()=>{this.isLoading=!1})},openDelModal(e){this.deldata={},this.delModal.show(),this.delId=e.id,this.delData=e.product,this.delData.title=`刪除課程:${e.product.title}`},openDelAllModal(){this.delData={},this.delId="",this.delData.title="確定要清空購物車?",this.delModal.show()},delCart(){this.delId?m.delete(`${y}/v2/api/${f}/cart/${this.delId}`).then(e=>{e.data.success===!0&&(this.myToast.title="已刪除課程",this.myToast.show()),this.delData={},this.delId="",this.delModal.hide(),this.getCartData(),this.getCartDataPinia()}).catch(e=>{alert(e.data.message).error(e)}):m.delete(`${y}/v2/api/${f}/carts`).then(e=>{e.data.success===!0&&(this.myToast.title="已清空購物車",this.myToast.show()),this.delData={},this.delId=" ",this.delModal.hide(),this.getCartData(),this.getCartDataPinia()}).catch(e=>{alert(e.data.message).error(e)})},changeQty(e,i,D){this.disabled=!0;const w={product_id:D,qty:e};m.put(`${y}/v2/api/${f}/cart/${i}`,{data:w}).then(o=>{E.fire(`${o.data.message}`),this.disabled=!1,this.getCartData()}).catch(o=>{alert(o.data.message).error(o)})},formatNumber(e){if(e)return e.toLocaleString()},...N(T,["getCartDataPinia"])},mounted(){this.isLoading=!0,this.getCartData(),this.delModal=new L(this.$refs.delModal),this.myToast=new P(this.$refs.myToast)}},S={class:"container mt-30","data-aos":"fade-right"},j={class:"row justify-content-center"},q={key:0,class:"text-center my-30"},O=t("div",{class:"d-flex justify-content-center"},[t("h2",{class:"mb-10 border-bottom border-3 border-primary"}," 尚未收錄課程 ")],-1),U={key:1,class:"table-wrapper d-lg-block d-none"},Q={class:"table align-middle"},$={class:"text-center"},z=t("th",null,"課程名稱",-1),F=t("th",null,"授課老師",-1),G=t("th",null,"總課程數",-1),H=t("th",null,"購買數量",-1),J=t("th",null,"單價",-1),K=t("th",null,"價格",-1),W={class:"fs-5"},X={class:"dropdown"},Y=["disabled"],Z={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},tt=["onClick"],st=["onClick"],et={class:"text-center"},ot=t("td",null,null,-1),at=t("td",null,null,-1),dt=t("td",null,null,-1),lt=t("td",null,null,-1),nt={class:"align-bottom"},it={class:"border-bottom border-primary border-3 mb-0 fs-6"},rt={class:"ms-1"},ct=t("button",{type:"button",class:"btn btn-primary"}," 結帳 ",-1),_t={key:2,class:"row d-lg-none my-15"},ut={class:"d-flex justify-content-end"},ht={class:"d-flex justify-content-between align-items-center mb-3"},bt={class:"fs-6 fw-blod"},pt={class:"fs-7"},mt=["onClick"],yt={class:"d-flex align-items-center justify-content-between"},ft={class:"dropdown"},gt=["disabled"],vt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},Dt=["onClick"],wt={class:"d-flex justify-content-between"},Ct={class:"border-bottom border-primary border-3 mb-0 fs-4"},kt={class:"ms-1"},Mt=t("button",{type:"button",class:"btn btn-primary"}," 結帳 ",-1),xt={class:"modal",tabindex:"-1",ref:"delModal"},Tt={class:"modal-dialog"},Lt={class:"modal-content"},Pt={class:"modal-header"},At={key:0,class:"modal-title"},It=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Nt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Vt={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"5"}},Rt={id:"liveToast",class:"toast hide",ref:"myToast",role:"alert","aria-live":"assertive","aria-atomic":"true"},Bt={class:"toast-header bg-secondary"},St={class:"me-auto text-white"},jt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function qt(e,i,D,w,o,d){const M=k("Loading"),_=k("RouterLink");return n(),l(h,null,[t("div",S,[t("div",j,[c(M,{active:o.isLoading,"onUpdate:active":i[0]||(i[0]=s=>o.isLoading=s)},null,8,["active"]),o.cartData.total===0?(n(),l("div",q,[O,c(_,{to:"products",class:"btn btn-primary"},{default:u(()=>[b("立即前往課程列表")]),_:1})])):(n(),l("div",U,[t("table",Q,[t("thead",null,[t("tr",$,[z,F,G,H,J,K,t("th",null,[t("button",{type:"button",class:"btn btn-secondary rounded-pill",onClick:i[1]||(i[1]=s=>d.openDelAllModal())}," 清空購物車 ")])])]),t("tbody",null,[(n(!0),l(h,null,p(o.cartData.carts,(s,g)=>(n(),l("tr",{key:g,class:"text-center"},[t("td",null,[c(_,{to:`/class/${s.product.id}`},{default:u(()=>[t("h2",W,a(s.product.title),1)]),_:2},1032,["to"])]),t("td",null,a(s.product.unit),1),t("td",null,a(s.product.origin_price*s.qty)+"堂",1),t("td",null,[t("div",X,[t("button",{disabled:o.disabled,class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},a(s.qty),9,Y),t("ul",Z,[(n(),l(h,null,p(20,(r,v)=>t("li",{key:v},[t("a",{onClick:x=>d.changeQty(r,s.id,s.product_id),class:"dropdown-item"},a(r),9,tt)])),64))])])]),t("td",null,a(s.product.price),1),t("td",null,a(d.formatNumber(s.total)),1),t("td",null,[t("button",{type:"button",class:"btn btn-secondary rounded-pill",onClick:r=>d.openDelModal(s)}," 刪除 ",8,st)])]))),128)),t("tr",et,[ot,at,dt,lt,t("td",nt,[t("h2",it,[b(" 總金額:NT "),t("span",rt,a(d.formatNumber(o.cartData.total)),1)])]),t("td",null,[c(_,{to:"/Order"},{default:u(()=>[ct]),_:1})])])])])])),o.cartData.total!==0?(n(),l("div",_t,[t("div",ut,[t("button",{type:"button",class:"btn btn-secondary rounded-pill col-4 mb-3",onClick:i[2]||(i[2]=s=>d.openDelAllModal())}," 清空購物車 ")]),(n(!0),l(h,null,p(o.cartData.carts,(s,g)=>(n(),l("ul",{key:g,class:"border-bottom pb-3 border-primary"},[t("li",null,[t("div",ht,[c(_,{to:`/class/${s.product.id}`},{default:u(()=>[t("h2",bt,[b(a(s.product.title)+" ",1),t("span",pt,"單價:"+a(s.product.price),1)])]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-secondary rounded-pill",onClick:r=>d.openDelModal(s)}," 刪除 ",8,mt)]),t("div",yt,[t("div",null,"總堂數:"+a(s.product.origin_price*s.qty)+"堂",1),t("div",ft,[b(" 購買次數: "),t("button",{disabled:o.disabled,class:"btn btn-secondary dropdown-toggle py-0",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},a(s.qty),9,gt),t("ul",vt,[(n(),l(h,null,p(20,(r,v)=>t("li",{key:v},[t("a",{onClick:x=>d.changeQty(r,s.id,s.product_id),class:"dropdown-item"},a(r),9,Dt)])),64))])]),t("div",null,"此課程總額: $"+a(d.formatNumber(s.total)),1)])])]))),128)),t("div",wt,[t("h2",Ct,[b(" 總金額:NT "),t("span",kt,a(d.formatNumber(o.cartData.total)),1)]),c(_,{to:"/Order"},{default:u(()=>[Mt]),_:1})])])):C("",!0)])]),t("div",xt,[t("div",Tt,[t("div",Lt,[t("div",Pt,[o.delData.title?(n(),l("h5",At,a(o.delData.title),1)):C("",!0),It]),t("div",Nt,[Et,t("button",{type:"button",class:"btn btn-secondary",onClick:i[3]||(i[3]=s=>d.delCart(o.delData.id))}," 確認 ")])])])],512),t("div",Vt,[t("div",Rt,[t("div",Bt,[t("strong",St,a(o.myToast.title),1),jt])],512)])],64)}const Ht=A(B,[["render",qt]]);export{Ht as default};
