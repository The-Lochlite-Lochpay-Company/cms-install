import"./index-fc7176c5.js";import m from"./AppLayout-eb7b661f.js";import{o as n,c as u,w as i,a as r,t as s,f as o,d as l,g as c,F as d}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const g={class:"breadcrumb-item active","aria-current":"page"},b={class:"row"},v={class:"col-xs-12 col-sm-12 col-md-12"},S={class:"form-group"},f={class:"col-xs-12 col-sm-12 col-md-12"},C={class:"form-group"},x={class:"col-xs-12 col-sm-12 col-md-12"},h={class:"form-group"},B={class:"badge badge-success"},L={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,userroles:Array,userid:Number,username:String,useremail:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){return(T,t)=>(n(),u(m,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:i(()=>[r("li",g,"Usuário: "+s(e.userid)+" - "+s(e.username),1)]),default:i(()=>[r("div",b,[r("div",v,[r("div",S,[t[0]||(t[0]=r("strong",null,"Nome:",-1)),o(" "+s(e.username),1)])]),r("div",f,[r("div",C,[t[1]||(t[1]=r("strong",null,"Email:",-1)),o(" "+s(e.useremail),1)])]),r("div",x,[r("div",h,[t[2]||(t[2]=r("strong",null,"Permissões:",-1)),(n(!0),l(d,null,c(e.userroles,a=>(n(),l("div",{key:a},[r("label",B,s(a),1)]))),128))])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{L as default};
