import{o as l,c as g,w as n,a as o,b as i,u as a,d as u,g as v,f,t as S,F as x,n as _,h}from"./app-7485cb55.js";import{u as C}from"./index-fc7176c5.js";import y from"./Button-406cbd9c.js";import k from"./Input-056eb611.js";import V from"./InputError-9cb9d01f.js";import w from"./Checkbox-16aaa615.js";import c from"./Label-99813df6.js";import B from"./ValidationErrors-7f856797.js";import N from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const O={class:"row"},T={class:"col-xs-12 col-sm-12 col-md-6"},R={class:"form-group"},j={class:"col-xs-12 col-sm-12 col-md-12"},F={class:"form-group"},L={class:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3",id:"rowgrouppermission"},U={class:"form-check"},z={class:"col-xs-12 col-sm-12 col-md-12 text-center"},X={__name:"create",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,permission:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(r){const s=C({name:"",permission:[]}),b=p=>{const e=new Array;$.each($('#rowgrouppermission input[type="checkbox"]:checked'),function(t,d){var m=$(d).val();e.push(m)}),s.permission=e,s.transform(t=>({...t})).post(route("managerroles.store"))};return(p,e)=>(l(),g(N,{menulang:r.menulang,menuitems:r.menuitems,avatar:r.avatar,role:r.role,name:r.name,version:r.version,breadcrumbCurrentTitle:r.breadcrumbCurrentTitle,breadcrumbCurrentSection:r.breadcrumbCurrentSection,title:r.title},{breadcrumb:n(()=>e[2]||(e[2]=[o("li",{class:"breadcrumb-item active","aria-current":"page"},"Create",-1)])),default:n(()=>[i(B,{class:"mb-4"}),o("form",{onSubmit:h(b,["prevent"])},[o("div",O,[o("div",T,[o("div",R,[i(c,{for:"name",value:"Name"}),i(k,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Nome",modelValue:a(s).name,"onUpdate:modelValue":e[0]||(e[0]=t=>a(s).name=t),name:"name",autocomplete:"name"},null,8,["modelValue"]),i(V,{for:"name",class:"mt-2"})])]),o("div",j,[o("div",F,[i(c,{for:"permissions",value:"Permissions"}),o("div",L,[(l(!0),u(x,null,v(r.permission,(t,d)=>(l(),u("div",U,[i(w,{class:"h-4 w-4 border border-gray-300 rounded-sm me-2 mr-2",type:"checkbox",id:"flexSelectOptionrow"+t.id,value:t.id,modelValue:a(s).permission,"onUpdate:modelValue":e[1]||(e[1]=m=>a(s).permission=m),name:"permission[]"},null,8,["id","value","modelValue"]),i(c,{class:"inline-block",for:"flexSelectOptionrow"+t.id},{default:n(()=>[f(S(t.name),1)]),_:2},1032,["for"])]))),256))])])]),o("div",z,[i(y,{type:"submit",class:_(["btn btn-primary",{"opacity-25":a(s).processing}]),title:"Register","aria-label":"Register",disabled:a(s).processing},{default:n(()=>e[3]||(e[3]=[f("Register")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{X as default};