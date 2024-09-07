import{o as p,c as f,w as n,a as t,b as r,u as a,l as b,v as g,f as v,n as y,h as w}from"./app-7485cb55.js";import{u as x}from"./index-fc7176c5.js";import V from"./Button-406cbd9c.js";import d from"./Input-056eb611.js";import i from"./InputError-9cb9d01f.js";import m from"./Label-99813df6.js";import C from"./ValidationErrors-7f856797.js";import k from"./AppLayout-eb7b661f.js";import _ from"./MylochiTinyEditor-caf467ce.js";import{p as S}from"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const h={class:"row"},T={class:"col-xs-12 col-sm-12 col-md-4"},$={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-4"},q={class:"form-group"},U={class:"col-xs-12 col-sm-12 col-md-4"},E={class:"form-group"},N={class:"col-xs-12 col-sm-12 col-md-12"},j={class:"form-group"},z={class:"col-xs-12 col-sm-12 col-md-12 mb-3"},F={class:"col-xs-12 col-sm-12 col-md-12 text-center"},Y={__name:"create",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(s){const e=x({title:"",keywords:"",image:"",description:"",body:""}),u=()=>{e.body=Base64.encode(S.sanitize(tinymce.activeEditor.getContent()||"<p><br><br></p>")),e.transform(c=>({...c})).post(route("managerposts.store"),{onFinish:()=>e.reset()})};return(c,o)=>(p(),f(k,{menulang:s.menulang,menuitems:s.menuitems,avatar:s.avatar,role:s.role,name:s.name,version:s.version,breadcrumbCurrentTitle:s.breadcrumbCurrentTitle,breadcrumbCurrentSection:s.breadcrumbCurrentSection,title:s.title},{breadcrumb:n(()=>o[5]||(o[5]=[t("li",{class:"breadcrumb-item active","aria-current":"page"},"Criar",-1)])),default:n(()=>[r(C,{class:"mb-4"}),t("form",{onSubmit:w(u,["prevent"])},[t("div",h,[t("div",T,[t("div",$,[r(m,{for:"title",value:"Titulo"}),r(d,{id:"title",type:"text",class:"form-control mt-1 block w-full",placeholder:"title",modelValue:a(e).title,"onUpdate:modelValue":o[0]||(o[0]=l=>a(e).title=l),name:"title",autocomplete:"title",required:""},null,8,["modelValue"]),r(i,{for:"title",class:"mt-2"})])]),t("div",B,[t("div",q,[r(m,{for:"keywords",value:"Keywords"}),r(d,{id:"keywords",type:"text",class:"form-control mt-1 block w-full",placeholder:"Keywords",modelValue:a(e).keywords,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).keywords=l),name:"keywords",autocomplete:"keywords",required:""},null,8,["modelValue"]),r(i,{for:"keywords",class:"mt-2"})])]),t("div",U,[t("div",E,[r(m,{for:"imagecap",value:"Imagem de capa"}),r(d,{id:"imagecap",type:"url",class:"form-control mt-1 block w-full",placeholder:"htpps://exemple.com/image.png",modelValue:a(e).image,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).image=l),name:"image",autocomplete:"imagecap"},null,8,["modelValue"]),r(i,{for:"imagecap",class:"mt-2"})])]),t("div",N,[t("div",j,[r(m,{for:"description",value:"Resumo do artigo"}),b(t("textarea",{id:"description",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":o[3]||(o[3]=l=>a(e).description=l),name:"description",autocomplete:"",required:""},null,512),[[g,a(e).description]]),r(i,{for:"description",class:"mt-2"})])]),t("div",z,[r(_,{"data-type":"new",placeholder:"Escreva aqui o conteúdo do artigo",modelValue:a(e).body,"onUpdate:modelValue":o[4]||(o[4]=l=>a(e).body=l),name:"body",id:"mylochi-tiny"},null,8,["modelValue"])]),t("div",F,[r(V,{type:"submit",class:y(["btn btn-primary",{"opacity-25":a(e).processing}]),title:"Cadastrar","aria-label":"Cadastrar",disabled:a(e).processing},{default:n(()=>o[6]||(o[6]=[v("Cadastrar")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Y as default};