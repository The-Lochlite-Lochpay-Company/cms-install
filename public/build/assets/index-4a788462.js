import{_ as f,o as l,c as p,w as r,a as t,d as s,g as v,t as i,b as o,u as d,h as C,e as b,n as h,F as S}from"./app-7485cb55.js";import{u as k,L as c}from"./index-fc7176c5.js";import y from"./Button-406cbd9c.js";import x from"./ValidationErrors-7f856797.js";import T from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const L={class:"table-responsive"},B={class:"table"},D={class:"btn-group"},E=["id"],O={key:0,class:"mb-4 font-medium text-sm text-green-600"},M={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,login:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(a){const u=k(),g=m=>{u.delete(route("managerlogin.destroy",{id:m.submitter.dataset.login}))};return defineAsyncComponent({loader:()=>f(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:LoadingComponent,errorComponent:ErrorComponent,delay:500,timeout:5e3}),(m,n)=>(l(),p(T,{menulang:a.menulang,menuitems:a.menuitems,avatar:a.avatar,role:a.role,name:a.name,version:a.version,breadcrumbCurrentTitle:a.breadcrumbCurrentTitle,breadcrumbCurrentSection:a.breadcrumbCurrentSection,title:a.title},{breadcrumb:r(()=>n[0]||(n[0]=[t("li",{class:"breadcrumb-item active text-truncate w-50","aria-current":"page"},"Login pages",-1)])),default:r(()=>[t("div",L,[t("table",B,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Domain"),t("th",null,"Title"),t("th",null,"Default"),t("th",null,"Status"),t("th",null,"Action")])],-1)),t("tbody",null,[(l(!0),s(S,null,v(a.login.data,(e,V)=>(l(),s("tr",{key:e.id},[t("td",null,i(e.id),1),t("td",null,i(e.domain),1),t("td",null,i(e.title),1),t("td",null,i(e.default==1?"true":"false"),1),t("td",null,i(e.status),1),t("td",null,[t("div",D,[o(d(c),{href:e.domain+"/login",class:"btn btn-outline-light text-dark","data-event":"link","data-function":"show","data-post":e.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To see"},{default:r(()=>n[1]||(n[1]=[t("i",{class:"mdi mdi-eye"},null,-1)])),_:2},1032,["href","data-post"]),o(d(c),{href:m.route("managerlogin.edit",{id:e.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-post":e.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To edit"},{default:r(()=>n[2]||(n[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-post"]),e.default==!1?(l(),s("form",{key:0,id:e.id,class:"w-100",onSubmit:C(g,["prevent"])},[o(x,{class:"mb-4"}),a.status?(l(),s("div",O,i(a.status),1)):b("",!0),o(y,{class:h(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":d(u).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-login":e.id,disabled:d(u).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},{default:r(()=>n[3]||(n[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-login","class","disabled"])],40,E)):b("",!0)])])]))),128))])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{M as default};