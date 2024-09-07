import{o as s,c as v,w as r,a as t,b as d,f as c,u as m,d as u,g as y,t as n,h as S,e as f,n as h,F as p}from"./app-7485cb55.js";import{u as k,L as b}from"./index-fc7176c5.js";import C from"./Button-406cbd9c.js";import x from"./ValidationErrors-7f856797.js";import T from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const B={class:"my-3 btn-group border-0 rounded-0"},L={class:"table-responsive"},N={class:"table"},V={class:"btn-group"},j=["id"],E={key:0,class:"mb-4 font-medium text-sm text-green-600"},H={__name:"index",props:{canLogin:Boolean,canemailverify:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,emailverify:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){const o=k(),g=l=>{o.delete(route("manageremailverify.destroy",{id:l.submitter.dataset.emailverify}))};return(l,a)=>(s(),v(T,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:r(()=>a[0]||(a[0]=[t("li",{class:"breadcrumb-item active text-truncate w-50","aria-current":"page"},"Página de verificação de email",-1)])),default:r(()=>[t("div",B,[d(m(b),{class:"btn btn-primary me-3 mr-3",href:l.route("manageremailverify.create")},{default:r(()=>a[1]||(a[1]=[c("Adicionar página de verificação de email")])),_:1},8,["href"]),d(m(b),{class:"btn btn-dark",href:l.route("manageremailverify.resettest")},{default:r(()=>a[2]||(a[2]=[c("Test send")])),_:1},8,["href"])]),t("div",L,[t("table",N,[a[5]||(a[5]=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Dominio"),t("th",null,"Titulo"),t("th",null,"Padrão"),t("th",null,"Status"),t("th",null,"Ação")])],-1)),t("tbody",null,[(s(!0),u(p,null,y(e.emailverify.data,(i,F)=>(s(),u("tr",{key:i.id},[t("td",null,n(i.id),1),t("td",null,n(i.domain),1),t("td",null,n(i.title),1),t("td",null,n(i.default==1?"true":"false"),1),t("td",null,n(i.status),1),t("td",null,[t("div",V,[d(m(b),{href:l.route("manageremailverify.edit",{id:i.id}),class:"btn btn-outline-light text-dark","data-event":"link","data-function":"edit","data-post":i.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Editar"},{default:r(()=>a[3]||(a[3]=[t("i",{class:"mdi mdi-pencil"},null,-1)])),_:2},1032,["href","data-post"]),i.default==!1?(s(),u("form",{key:0,id:i.id,class:"w-100",onSubmit:S(g,["prevent"])},[d(x,{class:"mb-4"}),e.status?(s(),u("div",E,n(e.status),1)):f("",!0),d(C,{class:h(["btn btn-outline-light bg-light rounded-0 border-0 text-dark",{"opacity-25":m(o).processing}]),type:"submit","data-event":"submit","data-function":"delete","data-emailverify":i.id,disabled:m(o).processing,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Excluir"},{default:r(()=>a[4]||(a[4]=[t("i",{class:"mdi mdi-delete"},null,-1)])),_:2},1032,["data-emailverify","class","disabled"])],40,j)):f("",!0)])])]))),128))])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{H as default};
