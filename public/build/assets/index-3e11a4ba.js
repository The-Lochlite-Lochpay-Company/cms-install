import{o as d,c as f,w as l,a as t,d as u,g as h,t as i,b as o,u as s,h as v,e as p,n as S,F as C,W as k,_ as y}from"./app-7485cb55.js";import{u as x,L as c}from"./index-fc7176c5.js";import L from"./Button-406cbd9c.js";import T from"./ValidationErrors-7f856797.js";import B from"./AppLayout-eb7b661f.js";import D from"./LoadingComponent-701afbd3.js";import E from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"table-responsive"},O={class:"table"},P={class:"btn-group"},V=["id"],_={key:0,class:"mb-4 font-medium text-sm text-green-600"},$={class:"card card-body border-light rounded-0 mt-2 shadow-none"},K={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,contacts:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){const m=x(),b=r=>{m.delete(route("managercontacts.destroy",{id:r.submitter.dataset.contact}))},g=k({loader:()=>y(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:D,errorComponent:E,delay:500,timeout:5e3});return(r,n)=>(d(),f(B,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:l(()=>n[0]||(n[0]=[])),default:l(()=>[t("div",N,[t("table",O,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Email"),t("th",null,"IP"),t("th",null,"Status"),t("th",null,"Created in"),t("th",null,"Updated in"),t("th",null,"Action")])],-1)),t("tbody",null,[(d(!0),u(C,null,h(e.contacts.data,(a,j)=>(d(),u("tr",{key:a.id},[t("td",null,i(a.name),1),t("td",null,i(a.email),1),t("td",null,i(a.visitor),1),t("td",null,i(a.status),1),t("td",null,i(new Date(a.created_at).toLocaleString()),1),t("td",null,i(new Date(a.updated_at).toLocaleString()),1),t("td",null,[t("div",P,[o(s(c),{href:r.route("managercontacts.show",{id:a.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"show","data-contact":a.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To see"},{default:l(()=>n[1]||(n[1]=[t("i",{class:"mdi mdi-eye"},null,-1)])),_:2},1032,["href","data-contact"]),o(s(c),{href:r.route("managercontacts.edit",{id:a.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-contact":a.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To edit"},{default:l(()=>n[2]||(n[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-contact"]),t("form",{id:a.id,class:"w-100",onSubmit:v(b,["prevent"])},[o(T,{class:"mb-4"}),e.status?(d(),u("div",_,i(e.status),1)):p("",!0),o(L,{class:S(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":s(m).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-contact":a.id,disabled:s(m).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},{default:l(()=>n[3]||(n[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-contact","class","disabled"])],40,V)])])]))),128))])])]),t("div",$,[o(s(g),{class:"",links:e.contacts.links},null,8,["links"])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{K as default};
