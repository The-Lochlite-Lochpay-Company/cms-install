import{L as r}from"./index-fc7176c5.js";import a from"./AppLayout-eb7b661f.js";import{o as d,c,w as n,a as t,t as i,f as l,b as m,u}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const f={class:"breadcrumb-item active","aria-current":"page"},g={class:"row"},b={class:"col-xs-12 col-sm-12 col-md-6"},v={class:"form-group"},h={class:"col-xs-12 col-sm-12 col-md-6"},S={class:"form-group"},w={class:"col-xs-12 col-sm-12 col-md-6"},x={class:"form-group"},T={class:"col-xs-12 col-sm-12 col-md-6"},C={class:"form-group"},k={class:"col-xs-12 col-sm-12 col-md-6"},y={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-6"},O={class:"form-group"},F={class:"col-xs-12 col-sm-12 col-md-12"},L={class:"form-group"},V={class:"col-xs-12 col-sm-12 col-md-12"},j={class:"form-group"},D={class:"col-xs-12 col-sm-12 col-md-12 mt-3"},I={class:"row"},N={class:"col"},P=["href","data-file"],R={class:"col"},z=["href","data-file"],J={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,file:Object,fileurl:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){return(s,o)=>(d(),c(a,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:n(()=>[t("li",f,"File: "+i(e.file.id)+" - "+i(e.file.filename),1)]),default:n(()=>[t("div",g,[t("div",b,[t("div",v,[o[0]||(o[0]=t("strong",null,"File id:",-1)),l(" "+i(e.file.id),1)])]),t("div",h,[t("div",S,[o[1]||(o[1]=t("strong",null,"Source user id:",-1)),l(" "+i(e.file.user_id),1)])]),t("div",w,[t("div",x,[o[2]||(o[2]=t("strong",null,"Source username:",-1)),m(u(r),{class:"text-primary ml-2",href:s.route("managerusers.show",{id:e.file.user_id})},{default:n(()=>[l(i(e.file.user_name),1)]),_:1},8,["href"])])]),t("div",T,[t("div",C,[o[3]||(o[3]=t("strong",null,"Source user IP:",-1)),l(" "+i(e.file.visitor),1)])]),t("div",k,[t("div",y,[o[4]||(o[4]=t("strong",null,"File name:",-1)),l(" "+i(e.file.filename),1)])]),t("div",B,[t("div",O,[o[5]||(o[5]=t("strong",null,"File format:",-1)),l(" "+i(e.file.mimetype),1)])]),t("div",F,[t("div",L,[o[6]||(o[6]=t("strong",null,"Path:",-1)),l(" "+i(e.file.path),1)])]),t("div",V,[t("div",j,[o[7]||(o[7]=t("strong",null,"URL:",-1)),l(" "+i(s.route("filefiling",{date:new Date(e.file.created_at).toISOString().split("T")[0],url:e.file.url})),1)])]),t("div",D,[t("div",I,[t("div",N,[t("a",{href:s.route("filefiling",{date:new Date(e.file.created_at).toISOString().split("T")[0],url:e.file.url}),class:"btn btn-primary bg-primary rounded-0 border-0 text-white","data-event":"link","data-function":"show","data-file":e.file.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To view",target:"”_blank”",rel:"”noopener”"},"Visualizar ",8,P)]),t("div",R,[t("a",{href:s.route("managerstorange.download",{id:e.file.id}),class:"btn btn-dark bg-dark rounded-0 border-0 text-white",type:"button","data-event":"button","data-function":"download","data-file":e.file.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"To go down",download:""},"To go down ",8,z)])])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{J as default};
