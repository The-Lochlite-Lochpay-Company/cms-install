import{L as a}from"./index-fc7176c5.js";import n from"./AppLayout-eb7b661f.js";import{o as d,c as m,w as r,a as t,t as i,f as l,b as u,u as c}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const f={class:"breadcrumb-item active","aria-current":"page"},g={class:"row"},b={class:"col-xs-12 col-sm-12 col-md-6"},v={class:"form-group"},h={class:"col-xs-12 col-sm-12 col-md-6"},S={class:"form-group"},w={class:"col-xs-12 col-sm-12 col-md-6"},x={class:"form-group"},C={class:"col-xs-12 col-sm-12 col-md-6"},k={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-6"},T={class:"form-group"},y={class:"col-xs-12 col-sm-12 col-md-6"},D={class:"form-group"},I={class:"col-xs-12 col-sm-12 col-md-12"},N={class:"form-group"},O={class:"col-xs-12 col-sm-12 col-md-12"},V={class:"form-group"},q={class:"col-xs-12 col-sm-12 col-md-12 mt-3"},L={class:"row"},j={class:"col"},z=["href","data-file"],P={class:"col"},R=["href","data-file"],J={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,file:Object,fileurl:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){return(s,o)=>(d(),m(n,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:r(()=>[t("li",f,"Arquivo: "+i(e.file.id)+" - "+i(e.file.filename),1)]),default:r(()=>[t("div",g,[t("div",b,[t("div",v,[o[0]||(o[0]=t("strong",null,"ID do arquivo:",-1)),l(" "+i(e.file.id),1)])]),t("div",h,[t("div",S,[o[1]||(o[1]=t("strong",null,"ID do usuário de origem:",-1)),l(" "+i(e.file.user_id),1)])]),t("div",w,[t("div",x,[o[2]||(o[2]=t("strong",null,"Nome do usuário de origem:",-1)),u(c(a),{class:"text-primary ml-2",href:s.route("managerusers.show",{id:e.file.user_id})},{default:r(()=>[l(i(e.file.user_name),1)]),_:1},8,["href"])])]),t("div",C,[t("div",k,[o[3]||(o[3]=t("strong",null,"IP do usuário de origem:",-1)),l(" "+i(e.file.visitor),1)])]),t("div",B,[t("div",T,[o[4]||(o[4]=t("strong",null,"Nome do arquivo:",-1)),l(" "+i(e.file.filename),1)])]),t("div",y,[t("div",D,[o[5]||(o[5]=t("strong",null,"Formato de arquivo:",-1)),l(" "+i(e.file.mimetype),1)])]),t("div",I,[t("div",N,[o[6]||(o[6]=t("strong",null,"Path:",-1)),l(" "+i(e.file.path),1)])]),t("div",O,[t("div",V,[o[7]||(o[7]=t("strong",null,"URL:",-1)),l(" "+i(s.route("filefiling",{date:new Date(e.file.created_at).toISOString().split("T")[0],url:e.file.url})),1)])]),t("div",q,[t("div",L,[t("div",j,[t("a",{href:s.route("filefiling",{date:new Date(e.file.created_at).toISOString().split("T")[0],url:e.file.url}),class:"btn btn-primary bg-primary rounded-0 border-0 text-white","data-event":"link","data-function":"show","data-file":e.file.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Visualizar",target:"”_blank”",rel:"”noopener”"},"Visualizar ",8,z)]),t("div",P,[t("a",{href:s.route("managerstorange.download",{id:e.file.id}),class:"btn btn-dark bg-dark rounded-0 border-0 text-white",type:"button","data-event":"button","data-function":"download","data-file":e.file.id,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Baixar",download:""},"Baixar ",8,R)])])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{J as default};