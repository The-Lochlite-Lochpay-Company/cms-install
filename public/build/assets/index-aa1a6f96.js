import{o as m,c as f,w as l,a as t,d as u,g as h,t as i,b as o,u as r,h as p,e as v,n as C,F as S,W as k,_ as x}from"./app-7485cb55.js";import{u as y,L as c}from"./index-fc7176c5.js";import L from"./Button-406cbd9c.js";import B from"./ValidationErrors-7f856797.js";import E from"./AppLayout-eb7b661f.js";import _ from"./LoadingComponent-701afbd3.js";import A from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"table-responsive"},V={class:"table"},D={class:"text-wrap w-7/10 block text-truncate truncate"},N={class:"btn-group"},O=["id"],$={key:0,class:"mb-4 font-medium text-sm text-green-600"},j={class:"card card-body border-light rounded-0 mt-2 shadow-none"},Q={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,comments:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){const d=y(),b=s=>{d.delete(route("managercomments.destroy",{id:s.submitter.dataset.comment}))},g=k({loader:()=>x(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:_,errorComponent:A,delay:500,timeout:5e3});return(s,a)=>(m(),f(E,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:l(()=>a[0]||(a[0]=[])),default:l(()=>[t("div",T,[t("table",V,[a[4]||(a[4]=t("thead",null,[t("tr",null,[t("th",null,"Artigo"),t("th",null,"Nome"),t("th",null,"Email"),t("th",null,"Criado em"),t("th",null,"Atualizado em"),t("th",null,"Ação")])],-1)),t("tbody",null,[(m(!0),u(S,null,h(e.comments.data,(n,F)=>(m(),u("tr",{key:n.id},[t("td",D,i(n.post[0].title),1),t("td",null,i(n.name),1),t("td",null,i(n.email),1),t("td",null,i(new Date(n.created_at).toLocaleString()),1),t("td",null,i(new Date(n.updated_at).toLocaleString()),1),t("td",null,[t("div",N,[o(r(c),{href:s.route("managercomments.show",{id:n.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"show","data-comments":n.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Ver"},{default:l(()=>a[1]||(a[1]=[t("i",{class:"mdi mdi-eye"},null,-1)])),_:2},1032,["href","data-comments"]),o(r(c),{href:s.route("managercomments.edit",{id:n.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-comments":n.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Editar"},{default:l(()=>a[2]||(a[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-comments"]),t("form",{id:n.id,class:"w-100",onSubmit:p(b,["prevent"])},[o(B,{class:"mb-4"}),e.status?(m(),u("div",$,i(e.status),1)):v("",!0),o(L,{class:C(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":r(d).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-comment":n.id,disabled:r(d).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Excluir"},{default:l(()=>a[3]||(a[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-comment","class","disabled"])],40,O)])])]))),128))])])]),t("div",j,[o(r(g),{class:"",links:e.comments.links},null,8,["links"])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Q as default};