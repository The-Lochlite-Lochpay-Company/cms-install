import{o as b,c as f,w as n,a as o,b as r,u as s,l as g,v as y,f as v,n as w,h as x}from"./app-7485cb55.js";import{u as V}from"./index-fc7176c5.js";import k from"./Button-406cbd9c.js";import c from"./Input-056eb611.js";import m from"./InputError-9cb9d01f.js";import d from"./Label-99813df6.js";import S from"./ValidationErrors-7f856797.js";import C from"./AppLayout-eb7b661f.js";import h from"./MylochiTinyEditor-caf467ce.js";import{p as _}from"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const T={class:"row"},$={class:"col-xs-12 col-sm-12 col-md-4"},B={class:"form-group"},U={class:"col-xs-12 col-sm-12 col-md-4"},j={class:"form-group"},q={class:"col-xs-12 col-sm-12 col-md-4"},O={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-12"},N={class:"form-group"},P={class:"col-xs-12 col-sm-12 col-md-12 mb-3 rowcolumneditor"},z={class:"col-xs-12 col-sm-12 col-md-12 text-center"},Z={__name:"edit",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,post:Object,postbody:Object,breadcrumbCurrentSection:String,breadcrumbCurrentTitle:String,menulang:Object,menuitems:Object},setup(a){const l=a,t=V({title:l.post.title,keywords:l.post.keywords,image:l.post.imgcap,description:l.post.description,body:l.postbody.body}),p=u=>{t.body=Base64.encode(_.sanitize(tinymce.activeEditor.getContent()||"<p><br><br></p>")),t.transform(e=>({...e})).put(route("managerposts.update",{id:u.submitter.dataset.post}),{onFinish:()=>t.reset()})};return(u,e)=>(b(),f(C,{menulang:a.menulang,menuitems:a.menuitems,avatar:a.avatar,role:a.role,name:a.name,version:a.version,breadcrumbCurrentTitle:a.breadcrumbCurrentTitle,breadcrumbCurrentSection:a.breadcrumbCurrentSection,title:a.title},{breadcrumb:n(()=>e[5]||(e[5]=[o("li",{class:"breadcrumb-item active","aria-current":"page"},"Criar",-1)])),default:n(()=>[r(S,{class:"mb-4"}),o("form",{onSubmit:x(p,["prevent"])},[o("div",T,[o("div",$,[o("div",B,[r(d,{for:"title",value:"Titulo"}),r(c,{id:"title",type:"text",class:"form-control mt-1 block w-full",placeholder:"title",modelValue:s(t).title,"onUpdate:modelValue":e[0]||(e[0]=i=>s(t).title=i),name:"title",autocomplete:"title",required:""},null,8,["modelValue"]),r(m,{for:"title",class:"mt-2"})])]),o("div",U,[o("div",j,[r(d,{for:"keywords",value:"Keywords"}),r(c,{id:"keywords",type:"text",class:"form-control mt-1 block w-full",placeholder:"Keywords",modelValue:s(t).keywords,"onUpdate:modelValue":e[1]||(e[1]=i=>s(t).keywords=i),name:"keywords",autocomplete:"keywords",required:""},null,8,["modelValue"]),r(m,{for:"keywords",class:"mt-2"})])]),o("div",q,[o("div",O,[r(d,{for:"imagecap",value:"Imagem de capa"}),r(c,{id:"imagecap",type:"url",class:"form-control mt-1 block w-full",placeholder:"htpps://exemple.com/image.png",modelValue:s(t).image,"onUpdate:modelValue":e[2]||(e[2]=i=>s(t).image=i),name:"image",autocomplete:"image"},null,8,["modelValue"]),r(m,{for:"imagecap",class:"mt-2"})])]),o("div",E,[o("div",N,[r(d,{for:"description",value:"Resumo do artigo"}),g(o("textarea",{id:"description",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":e[3]||(e[3]=i=>s(t).description=i),name:"description",autocomplete:""},null,512),[[y,s(t).description]]),r(m,{for:"description",class:"mt-2"})])]),o("div",P,[r(h,{"data-type":"edit",placeholder:"Escreva aqui o conteúdo do artigo",modelValue:s(t).body,"onUpdate:modelValue":e[4]||(e[4]=i=>s(t).body=i),name:"body",id:"mylochi-tiny","data-body":a.postbody.body},null,8,["modelValue","data-body"])]),o("div",z,[r(k,{type:"submit",class:w(["btn btn-primary",{"opacity-25":s(t).processing}]),title:"Publicar","aria-label":"Publicar","data-post":a.post.id,disabled:s(t).processing},{default:n(()=>e[6]||(e[6]=[v("Publicar")])),_:1},8,["data-post","class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Z as default};