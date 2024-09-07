import{o as s,c as f,w as r,a as t,d as m,g as p,t as u,b as l,u as o,h as v,e as h,n as C,F as k,W as S,_ as y}from"./app-7485cb55.js";import{u as x,L as b}from"./index-fc7176c5.js";import B from"./Button-406cbd9c.js";import L from"./ValidationErrors-7f856797.js";import E from"./AppLayout-eb7b661f.js";import T from"./LoadingComponent-701afbd3.js";import V from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"table-responsive"},$={class:"table"},A={class:"btn-group"},D=["id"],F={key:0,class:"mb-4 font-medium text-sm text-green-600"},O={class:"card card-body border-light rounded-0 mt-2 shadow-none"},K={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,roles:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menuitems:Object},setup(e){const d=x(),c=i=>{d.delete(route("managerroles.destroy",{id:i.submitter.dataset.role}))},g=S({loader:()=>y(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:T,errorComponent:V,delay:500,timeout:5e3});return(i,a)=>(s(),f(E,{menulang:i.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:r(()=>a[0]||(a[0]=[])),default:r(()=>[t("div",N,[t("table",$,[a[4]||(a[4]=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Nome"),t("th",{width:"280px"},"Ação")])],-1)),t("tbody",null,[(s(!0),m(k,null,p(e.roles.data,(n,P)=>(s(),m("tr",{key:n.id},[t("td",null,u(n.id),1),t("td",null,u(n.name),1),t("td",null,[t("div",A,[l(o(b),{href:i.route("managerroles.show",{id:n.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"show","data-role":n.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Ver"},{default:r(()=>a[1]||(a[1]=[t("i",{class:"mdi mdi-eye"},null,-1)])),_:2},1032,["href","data-role"]),l(o(b),{href:i.route("managerroles.edit",{id:n.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-role":n.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Editar"},{default:r(()=>a[2]||(a[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-role"]),t("form",{id:n.id,class:"w-100",onSubmit:v(c,["prevent"])},[l(L,{class:"mb-4"}),e.status?(s(),m("div",F,u(e.status),1)):h("",!0),l(B,{class:C(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":o(d).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-role":n.id,disabled:o(d).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Excluir"},{default:r(()=>a[3]||(a[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-role","class","disabled"])],40,D)])])]))),128))])])]),t("div",O,[l(o(g),{class:"",links:e.roles.links},null,8,["links"])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{K as default};
