import{o,c as i,w as n,a as e,b as m,u as l,W as u,_ as s}from"./app-7485cb55.js";import"./index-fc7176c5.js";import c from"./AppLayout-eb7b661f.js";import d from"./LoadingComponent-701afbd3.js";import b from"./ErrorComponent-ea8ede7b.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,event:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(t){const a=u({loader:()=>s(()=>import("./MylochiCalendar-d65c0a53.js"),["assets/MylochiCalendar-d65c0a53.js","assets/index-fc7176c5.js","assets/app-7485cb55.js","assets/app-132d250d.css","assets/datetime-79dd386f.js"]),loadingComponent:d,errorComponent:b,delay:500,timeout:5e3});return(f,r)=>(o(),i(c,{menulang:t.menulang,menuitems:t.menuitems,avatar:t.avatar,role:t.role,name:t.name,version:t.version,breadcrumbCurrentTitle:t.breadcrumbCurrentTitle,breadcrumbCurrentSection:t.breadcrumbCurrentSection,title:t.title},{breadcrumb:n(()=>r[0]||(r[0]=[])),modal:n(()=>r[1]||(r[1]=[e("div",{class:"font-bold mb-2"},"Cadastrar novo evento",-1),e("form",{class:"form-group",id:"newevent"},[e("div",{class:"mb-3"},[e("label",{for:"exampleFormControlInput1",class:"form-label"},"Titulo"),e("input",{type:"text",class:"form-control",id:"inputEventTitle",required:""})]),e("div",{class:"mb-3"},[e("label",{for:"exampleFormControlInput1",class:"form-label"},"inicio"),e("input",{type:"datetime-local",class:"form-control",id:"inputEventStart",required:""})]),e("div",{class:"mb-3"},[e("label",{for:"exampleFormControlInput1",class:"form-label"},"Termino"),e("input",{type:"datetime-local",class:"form-control",id:"inputEventEnd",required:""})]),e("button",{type:"submit",class:"btn btn-primary bg-primary"},"Salvar")],-1)])),default:n(()=>[m(l(a))]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{I as default};
