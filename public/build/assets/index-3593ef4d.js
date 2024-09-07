import{o as m,c as f,w as l,a as t,b as r,f as p,u as s,d as u,g as v,t as i,h,e as S,n as C,F as y,W as k,_ as T}from"./app-7485cb55.js";import{u as x,L as c}from"./index-fc7176c5.js";import L from"./Button-406cbd9c.js";import B from"./ValidationErrors-7f856797.js";import D from"./AppLayout-eb7b661f.js";import N from"./LoadingComponent-701afbd3.js";import V from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const _={class:"my-3"},A={class:"table-responsive"},F={class:"table"},O={class:"btn-group"},$=["id"],j={key:0,class:"mb-4 font-medium text-sm text-green-600"},E={class:"card card-body border-light rounded-0 mt-2 shadow-none"},X={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,mainmenu:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){const o=x(),b=d=>{o.delete(route("managermainmenu.destroy",{id:d.submitter.dataset.menu}))},g=k({loader:()=>T(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:N,errorComponent:V,delay:500,timeout:5e3});return(d,a)=>(m(),f(D,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:l(()=>a[0]||(a[0]=[t("li",{class:"breadcrumb-item active"},"Main menu ",-1)])),default:l(()=>[t("div",_,[r(s(c),{href:d.route("managermainmenu.create"),class:"btn btn-primary"},{default:l(()=>a[1]||(a[1]=[p("Add menu")])),_:1},8,["href"])]),t("div",A,[t("table",F,[a[4]||(a[4]=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Domain"),t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Default"),t("th",null,"Status"),t("th",null,"Updated in"),t("th",null,"Action")])],-1)),t("tbody",null,[(m(!0),u(y,null,v(e.mainmenu.data,(n,P)=>(m(),u("tr",{key:n.id},[t("td",null,i(n.id),1),t("td",null,i(n.domain),1),t("td",null,i(n.name),1),t("td",null,i(n.type),1),t("td",null,i(n.default==1?"True":"False"),1),t("td",null,i(n.status),1),t("td",null,i(new Date(n.updated_at).toLocaleString()),1),t("td",null,[t("div",O,[r(s(c),{href:d.route("managermainmenu.edit",{id:n.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-post":n.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To edit"},{default:l(()=>a[2]||(a[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-post"]),t("form",{id:n.id,class:"w-100",onSubmit:h(b,["prevent"])},[r(B,{class:"mb-4"}),e.status?(m(),u("div",j,i(e.status),1)):S("",!0),r(L,{class:C(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":s(o).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-menu":n.id,disabled:s(o).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},{default:l(()=>a[3]||(a[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-menu","class","disabled"])],40,$)])])]))),128))])])]),t("div",E,[r(s(g),{class:"",links:e.mainmenu.links},null,8,["links"])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{X as default};
