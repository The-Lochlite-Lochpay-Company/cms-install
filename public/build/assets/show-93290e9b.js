import{L as n}from"./index-fc7176c5.js";import d from"./ValidationErrors-7f856797.js";import c from"./AppLayout-eb7b661f.js";import{o as m,c as u,w as r,a as t,t as o,b as i,f as a,u as g}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const b={class:"breadcrumb-item active text-truncate w-50","aria-current":"page"},f={class:"row"},v={class:"col-xs-12 col-sm-12 col-md-6"},x={class:"form-group"},w={class:"col-xs-12 col-sm-12 col-md-6"},h={class:"form-group"},S={class:"col-xs-12 col-sm-12 col-md-6"},k={class:"form-group"},C={class:"col-xs-12 col-sm-12 col-md-6"},T={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-12"},L={class:"form-group"},p={class:"col-xs-12 col-sm-12 col-md-4"},y={class:"form-group"},A={class:"col-xs-12 col-sm-12 col-md-4"},D={class:"form-group"},j={class:"col-xs-12 col-sm-12 col-md-12 text-center"},R={__name:"show",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,page:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(e){return(l,s)=>(m(),u(c,{menulang:e.menulang,menuitems:e.menuitems,avatar:e.avatar,role:e.role,name:e.name,version:e.version,breadcrumbCurrentTitle:e.breadcrumbCurrentTitle,breadcrumbCurrentSection:e.breadcrumbCurrentSection,title:e.title},{breadcrumb:r(()=>[t("li",b,"Page: "+o(e.page.id)+" - "+o(e.page.title),1)]),default:r(()=>[i(d,{class:"mb-4"}),t("div",f,[t("div",v,[t("div",x,[s[0]||(s[0]=t("strong",{class:"h5 text-dark fw-bold"}," Title: ",-1)),a(" "+o(e.page.title),1)])]),t("div",w,[t("div",h,[s[1]||(s[1]=t("strong",{class:"h5 text-dark fw-bold"},"Keywords:",-1)),a(" "+o(e.page.keywords),1)])]),t("div",S,[t("div",k,[s[2]||(s[2]=t("strong",{class:"h5 text-dark fw-bold"},"Main page:",-1)),a(" "+o(e.page.welcome==!0?"True":"False"),1)])]),t("div",C,[t("div",T,[s[3]||(s[3]=t("strong",{class:"h5 text-dark fw-bold"},"Author:",-1)),a(" "+o(e.page.authors),1)])]),t("div",B,[t("div",L,[s[4]||(s[4]=t("div",{class:"h5 text-dark fw-bold"},"Description:",-1)),a(" "+o(e.page.description),1)])]),t("div",p,[t("div",y,[s[5]||(s[5]=t("strong",{class:"h5 text-dark fw-bold"},"Created in:",-1)),a(" "+o(new Date(e.page.created_at).toLocaleString()),1)])]),t("div",A,[t("div",D,[s[6]||(s[6]=t("strong",{class:"h5 text-dark fw-bold"},"Updated in:",-1)),a(" "+o(new Date(e.page.updated_at).toLocaleString()),1)])]),t("div",j,[i(g(n),{class:"btn btn-primary",title:"Access page","aria-label":"Access page",href:l.route("show",{id:e.page.url==null?e.page.id:e.page.url})},{default:r(()=>s[7]||(s[7]=[a("Access page")])),_:1},8,["href"])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{R as default};
