import"./index-fc7176c5.js";import d from"./ValidationErrors-7f856797.js";import c from"./AppLayout-eb7b661f.js";import{o as n,c as m,w as i,a as e,t as o,b as u,f as r,d as l,g as b,F as g}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const v={class:"breadcrumb-item active text-truncate w-50","aria-current":"page"},f={class:"row"},S={class:"col-xs-12 col-sm-12 col-md-12"},x={class:"form-group"},k={class:"col-xs-12 col-sm-12 col-md-6"},C={class:"form-group"},w={class:"col-xs-12 col-sm-12 col-md-6"},h={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-6"},y={class:"form-group"},N={class:"col-xs-12 col-sm-12 col-md-6"},T={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-12"},O={class:"row"},j={class:"col-12"},D={class:"form-group"},P={class:"col-12"},R={class:"form-group"},p={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,feedback:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(t){return(V,s)=>(n(),m(c,{menulang:t.menulang,menuitems:t.menuitems,avatar:t.avatar,role:t.role,name:t.name,version:t.version,breadcrumbCurrentTitle:t.breadcrumbCurrentTitle,breadcrumbCurrentSection:t.breadcrumbCurrentSection,title:t.title},{breadcrumb:i(()=>[e("li",v,"Resposta: "+o(t.feedback.id)+" - "+o(t.feedback.name),1)]),default:i(()=>[u(d,{class:"mb-4"}),e("div",f,[e("div",S,[e("div",x,[s[0]||(s[0]=e("strong",null,"Nome:",-1)),r(" "+o(t.feedback.name),1)])]),e("div",k,[e("div",C,[s[1]||(s[1]=e("strong",null,"Email:",-1)),r(" "+o(t.feedback.email),1)])]),e("div",w,[e("div",h,[s[2]||(s[2]=e("strong",null,"IP:",-1)),r(" "+o(t.feedback.visitor),1)])]),e("div",B,[e("div",y,[s[3]||(s[3]=e("strong",null,"Criado em:",-1)),r(" "+o(new Date(t.feedback.created_at).toLocaleString()),1)])]),e("div",N,[e("div",T,[s[4]||(s[4]=e("strong",null,"Atualizado em:",-1)),r(" "+o(new Date(t.feedback.updated_at).toLocaleString()),1)])]),s[7]||(s[7]=e("div",{class:"col-xs-12 col-sm-12 col-md-12"},[e("div",{class:"card-title h3 fw-bold my-3"},"Perguntas e respostas")],-1)),e("div",L,[(n(!0),l(g,null,b(JSON.parse(t.feedback.responses),(a,E)=>(n(),l("div",{class:"card shadow-none border border-primary py-3 px-4 mb-3",key:a.id},[e("div",O,[e("div",j,[e("div",D,[s[5]||(s[5]=e("strong",null,"Pergunta:",-1)),r(" "+o(a.question),1)])]),e("div",P,[e("div",R,[s[6]||(s[6]=e("strong",null,"Resposta:",-1)),r(" "+o(a.response),1)])])])]))),128))])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{p as default};