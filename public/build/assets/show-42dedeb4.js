import"./index-fc7176c5.js";import l from"./AppLayout-eb7b661f.js";import{o as n,c as m,w as o,a as t,t as a,f as c,d as s,g as d,F as u}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const g={class:"breadcrumb-item active","aria-current":"page"},b={class:"row"},v={class:"col-xs-12 col-sm-12 col-md-12"},S={class:"form-group"},f={class:"col-xs-12 col-sm-12 col-md-12"},C={class:"form-group"},h={class:"grid grid-cols-1 md:grid-cols-3 md:grid-cols-4 mt-3"},x={class:"badge badge-dark p-2"},y={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,roledata:Object,rolePermissions:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){return(B,r)=>(n(),m(l,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:o(()=>[t("li",g,"Role: "+a(e.roledata.id)+" - "+a(e.roledata.name),1)]),default:o(()=>[t("div",b,[t("div",v,[t("div",S,[r[0]||(r[0]=t("strong",null,"Name:",-1)),c(" "+a(e.roledata.name),1)])]),t("div",f,[t("div",C,[r[1]||(r[1]=t("strong",null,"Permissions:",-1)),t("div",h,[(n(!0),s(u,null,d(e.rolePermissions,i=>(n(),s("div",{key:i.id},[t("label",x,a(i.name),1)]))),128))])])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{y as default};
