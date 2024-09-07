import{o,c as p,w as l,a as t,d as u,g as f,t as i,b as r,u as s,h,e as v,n as C,F as S,W as k,_ as y}from"./app-7485cb55.js";import{u as x,L as c}from"./index-fc7176c5.js";import L from"./Button-406cbd9c.js";import T from"./ValidationErrors-7f856797.js";import B from"./AppLayout-eb7b661f.js";import D from"./LoadingComponent-701afbd3.js";import O from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"table-responsive"},_={class:"table"},$={class:"btn-group"},j=["id"],A={key:0,class:"mb-4 font-medium text-sm text-green-600"},E={class:"card card-body border-light rounded-0 mt-2 shadow-none"},H={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,pages:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){const m=x(),b=d=>{m.delete(route("managerpages.destroy",{id:d.submitter.dataset.page}))},g=k({loader:()=>y(()=>import("./Pagination-5869936d.js"),["assets/Pagination-5869936d.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css"]),loadingComponent:D,errorComponent:O,delay:500,timeout:5e3});return(d,n)=>(o(),p(B,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:l(()=>n[0]||(n[0]=[])),default:l(()=>[t("div",V,[t("table",_,[n[4]||(n[4]=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Keywords"),t("th",null,"Category"),t("th",null,"Created in"),t("th",null,"Updated in"),t("th",null,"Action")])],-1)),t("tbody",null,[(o(!0),u(S,null,f(e.pages.data,(a,F)=>(o(),u("tr",{key:a.id},[t("td",null,i(a.title),1),t("td",null,i(a.keywords),1),t("td",null,i(a.category),1),t("td",null,i(new Date(a.created_at).toLocaleString()),1),t("td",null,i(new Date(a.updated_at).toLocaleString()),1),t("td",null,[t("div",$,[r(s(c),{href:d.route("managerpages.show",{id:a.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"show","data-post":a.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To see"},{default:l(()=>n[1]||(n[1]=[t("i",{class:"mdi mdi-eye"},null,-1)])),_:2},1032,["href","data-post"]),r(s(c),{href:d.route("managerpages.edit",{id:a.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-post":a.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To edit"},{default:l(()=>n[2]||(n[2]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-post"]),t("form",{id:a.id,class:"w-100",onSubmit:h(b,["prevent"])},[r(T,{class:"mb-4"}),e.status?(o(),u("div",A,i(e.status),1)):v("",!0),r(L,{class:C(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":s(m).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-page":a.id,disabled:s(m).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},{default:l(()=>n[3]||(n[3]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-page","class","disabled"])],40,j)])])]))),128))])])]),t("div",E,[r(s(g),{class:"",links:e.pages.links},null,8,["links"])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{H as default};
