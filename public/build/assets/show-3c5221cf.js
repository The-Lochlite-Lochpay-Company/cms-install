import"./index-fc7176c5.js";import r from"./ValidationErrors-7f856797.js";import l from"./AppLayout-eb7b661f.js";import{o as a,c as d,w as i,a as t,t as s,b as c,f as n}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const m={class:"breadcrumb-item active text-truncate w-50","aria-current":"page"},u={class:"row"},b={class:"col-xs-12 col-sm-12 col-md-12"},g={class:"form-group"},v={class:"col-xs-12 col-sm-12 col-md-4"},f={class:"form-group"},k={class:"col-xs-12 col-sm-12 col-md-4"},S={class:"form-group"},x={class:"col-xs-12 col-sm-12 col-md-4"},C={class:"form-group"},w={class:"col-xs-12 col-sm-12 col-md-12"},O={class:"row"},h={class:"col"},B={class:"form-group"},T={class:"col"},j={class:"form-group"},y={class:"col"},D={class:"form-group"},L={class:"col"},N={class:"form-group"},V={class:"col"},q={class:"form-group"},G={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,feedback:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(o){return($,e)=>(a(),d(l,{menulang:o.menulang,menuitems:o.menuitems,avatar:o.avatar,role:o.role,name:o.name,version:o.version,breadcrumbCurrentTitle:o.breadcrumbCurrentTitle,breadcrumbCurrentSection:o.breadcrumbCurrentSection,title:o.title},{breadcrumb:i(()=>[t("li",m,"Feedback: "+s(o.feedback.id)+" - "+s(o.feedback.question),1)]),default:i(()=>[c(r,{class:"mb-4"}),t("div",u,[t("div",b,[t("div",g,[e[0]||(e[0]=t("strong",null,"Question:",-1)),n(" "+s(o.feedback.question),1)])]),t("div",v,[t("div",f,[e[1]||(e[1]=t("strong",null,"Created by:",-1)),n(" "+s(o.feedback.author),1)])]),t("div",k,[t("div",S,[e[2]||(e[2]=t("strong",null,"Created in:",-1)),n(" "+s(new Date(o.feedback.created_at).toLocaleString()),1)])]),t("div",x,[t("div",C,[e[3]||(e[3]=t("strong",null,"Updated in:",-1)),n(" "+s(new Date(o.feedback.updated_at).toLocaleString()),1)])]),e[9]||(e[9]=t("div",{class:"col-xs-12 col-sm-12 col-md-12"},[t("div",{class:"card-title h3 fw-bold my-3"},"Possible Answers")],-1)),t("div",w,[t("div",O,[t("div",h,[t("div",B,[e[4]||(e[4]=t("strong",null,"Option 1:",-1)),n(" "+s(o.feedback.option1),1)])]),t("div",T,[t("div",j,[e[5]||(e[5]=t("strong",null,"Option 2:",-1)),n(" "+s(o.feedback.option2),1)])]),t("div",y,[t("div",D,[e[6]||(e[6]=t("strong",null,"Option 3:",-1)),n(" "+s(o.feedback.option3),1)])]),t("div",L,[t("div",N,[e[7]||(e[7]=t("strong",null,"Option 4:",-1)),n(" "+s(o.feedback.option4),1)])]),t("div",V,[t("div",q,[e[8]||(e[8]=t("strong",null,"Option 5:",-1)),n(" "+s(o.feedback.option5),1)])])])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{G as default};