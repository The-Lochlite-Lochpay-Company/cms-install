import{o as p,c as g,w as c,a as e,b as m,u as s,l as f,Y as x,v as S,f as C,n as y,h as V}from"./app-7485cb55.js";import{u as h}from"./index-fc7176c5.js";import w from"./Button-406cbd9c.js";import b from"./Input-056eb611.js";import r from"./InputError-9cb9d01f.js";import i from"./Label-99813df6.js";import B from"./ValidationErrors-7f856797.js";import _ from"./AppLayout-eb7b661f.js";import{p as d}from"./purify.es-68816782.js";import"./arrive-097f24c0.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const z={class:"row"},T={class:"col-xs-12 col-sm-12 col-md-6"},k={class:"form-group"},N={class:"col-xs-12 col-sm-12 col-md-6"},A={class:"form-group"},U={class:"col-xs-12 col-sm-12 col-md-12"},j={class:"form-group"},q=["selected"],M=["selected"],O={class:"col-xs-12 col-sm-12 col-md-12"},E={class:"form-group"},F=["data-body"],D={class:"col-xs-12 col-sm-12 col-md-12 text-center"},te={__name:"edit",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,comment:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(t){const l=t,o=h({name:"",name:l.comment.name,email:l.comment.email,status:l.comment.status,comment:l.comment.comment}),v=u=>{o.comment=Base64.encode(d.sanitize($("textarea#comment").val()||"")),o.transform(a=>({...a})).put(route("managercomments.update",{id:u.submitter.dataset.comment}),{onFinish:()=>{o.reset(),$("textarea#comment").val(d.sanitize(Base64.decode(o.comment)))}})};return $("body").ready(function(){$("textarea#comment").val(d.sanitize(Base64.decode($("textarea#comment").data("body"))))}),(u,a)=>(p(),g(_,{menulang:t.menulang,menuitems:t.menuitems,avatar:t.avatar,role:t.role,name:t.name,version:t.version,breadcrumbCurrentTitle:t.breadcrumbCurrentTitle,breadcrumbCurrentSection:t.breadcrumbCurrentSection,title:t.title},{breadcrumb:c(()=>a[4]||(a[4]=[e("li",{class:"breadcrumb-item active","aria-current":"page"},"Criar",-1)])),default:c(()=>[m(B,{class:"mb-4"}),e("form",{onSubmit:V(v,["prevent"])},[e("div",z,[e("div",T,[e("div",k,[m(i,{for:"name",value:"Nome"}),m(b,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Nome",modelValue:s(o).name,"onUpdate:modelValue":a[0]||(a[0]=n=>s(o).name=n),name:"name",autocomplete:"name"},null,8,["modelValue"]),m(r,{for:"name",class:"mt-2"})])]),e("div",N,[e("div",A,[m(i,{for:"email",value:"Email"}),m(b,{id:"email",type:"email",class:"form-control mt-1 block w-full",placeholder:"Email",modelValue:s(o).email,"onUpdate:modelValue":a[1]||(a[1]=n=>s(o).email=n),name:"email",autocomplete:"email"},null,8,["modelValue"]),m(r,{for:"email",class:"mt-2"})])]),e("div",U,[e("div",j,[m(i,{for:"status",value:"Status"}),f(e("select",{id:"status",class:"form-select p-1 block w-full","onUpdate:modelValue":a[2]||(a[2]=n=>s(o).status=n),name:"status",autocomplete:"status",required:""},[e("option",{value:"pending",selected:t.comment.status=="pending"},"Pendente",8,q),e("option",{value:"approved",selected:t.comment.status=="approved"},"Aprovado",8,M)],512),[[x,s(o).status]]),m(r,{for:"status",class:"mt-2"})])]),e("div",O,[e("div",E,[m(i,{for:"comment",value:"Comentário"}),f(e("textarea",{id:"comment",class:"form-control mt-1 block w-full",placeholder:"Texto do comentário aqui","onUpdate:modelValue":a[3]||(a[3]=n=>s(o).comment=n),name:"comment","data-body":t.comment.comment,autocomplete:"",required:""},null,8,F),[[S,s(o).comment]]),m(r,{for:"comment",class:"mt-2"})])]),e("div",D,[m(w,{type:"submit",class:y(["btn btn-primary",{"opacity-25":s(o).processing}]),title:"Atualizar","aria-label":"Atualizar","data-comment":t.comment.id,disabled:s(o).processing},{default:c(()=>a[5]||(a[5]=[C("Atualizar")])),_:1},8,["data-comment","class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{te as default};
