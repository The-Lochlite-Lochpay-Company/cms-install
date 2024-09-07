import{o as y,c as g,w as n,a as e,b as l,u as s,f as k,n as x,h}from"./app-7485cb55.js";import{u as w}from"./index-fc7176c5.js";import V from"./Button-406cbd9c.js";import f from"./Select-8eaad69e.js";import c from"./Input-056eb611.js";import m from"./InputError-9cb9d01f.js";import d from"./Label-99813df6.js";import _ from"./ValidationErrors-7f856797.js";import q from"./AppLayout-eb7b661f.js";import"./MylochiTinyEditor-caf467ce.js";import"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const S={class:"row"},C={class:"col-xs-12 col-sm-12 col-md-6"},T={class:"form-group"},j={class:"col-xs-12 col-sm-12 col-md-6"},U={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-4"},A={class:"form-group"},K={class:"col-xs-12 col-sm-12 col-md-4"},N={class:"form-group"},D={class:"col-xs-12 col-sm-12 col-md-4"},I={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-4"},O={class:"form-group"},P={class:"col-xs-12 col-sm-12 col-md-4"},R={class:"form-group"},z={class:"col-xs-12 col-sm-12 col-md-12 apiitemgroup"},F={id:"item1",class:"border border-primary py-2 px-2 apiitem mb-4"},H={class:"row"},M={class:"col-xs-12 col-sm-12 col-md-6"},Q={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-6"},G={class:"form-group"},J={class:"col-xs-12 col-sm-12 col-md-12 text-center"},pe={__name:"create",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(i){const t=w({domain:"",name:"",host:"",query:"",callback:"",type:"post",datatype:"json",items:[]}),b=()=>{var r={},o={},a=[];$.each($("div.apiitem"),function(W,u){var p=$(u).find('input[name="key"]').val(),v=$(u).find('input[name="value"]').val();a.push({key:p,value:v}),o[p]=v}),r.original=a,r.api=o,t.items=r,t.post(route("managerservices.store"))};return $("body").on("click","#newitem",function(){var r=$(".apiitem").length+1;$(".apiitemgroup").append('<div id="item'+r+'" class="position-relative relative border border-primary py-2 px-2 apiitem mb-4"> <div class="row"> <div class="col-xs-12 col-sm-12 col-md-6"> <div class="form-group"> <label for="key'+r+'">Key</label> <input id="key'+r+'" type="text" class="form-control mt-1 block w-full" placeholder="Key" name="key" autocomplete="key" required /> </div> </div> <div class="col-xs-12 col-sm-12 col-md-6"> <div class="form-group"> <label for="value'+r+'">Value</label> <input id="value'+r+'" type="text" class="form-control mt-1 block w-full" placeholder="value'+r+'" name="value" autocomplete="value" required />  </div> </div> </div> <button data-id="item'+r+'" class="btn btn-light shadow-sm p-2 px-2 text-center align-self-center cursor-text rounded-circle text-dark absolute top-0 right-0 -translate-y-6 translate-x-6 deleteitem"> <i class="menu-icon mdi mdi-trash-can"></i> </button> </div>')}),$("body").on("click",".deleteitem",function(){var r=$(this).data("id");$("#"+r).remove()}),(r,o)=>(y(),g(q,{menulang:i.menulang,menuitems:i.menulang,apiitems:r.apiitems,avatar:i.avatar,role:i.role,name:i.name,version:i.version,breadcrumbCurrentTitle:i.breadcrumbCurrentTitle,breadcrumbCurrentSection:i.breadcrumbCurrentSection,title:i.title},{breadcrumb:n(()=>o[7]||(o[7]=[e("li",{class:"breadcrumb-item active","aria-current":"page"},"Add services",-1)])),default:n(()=>[l(_,{class:"mb-4"}),e("form",{onSubmit:h(b,["prevent"])},[e("div",S,[e("div",C,[e("div",T,[l(d,{for:"domain",value:"Domain"}),l(c,{type:"url",id:"domain",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:s(t).domain,"onUpdate:modelValue":o[0]||(o[0]=a=>s(t).domain=a),name:"domain",autocomplete:"domain",required:""},null,8,["modelValue"]),l(m,{for:"domain",class:"mt-2"})])]),e("div",j,[e("div",U,[l(d,{for:"name",value:"Name"}),l(c,{type:"text",id:"name",class:"form-control mt-1 block w-full",placeholder:"name",modelValue:s(t).name,"onUpdate:modelValue":o[1]||(o[1]=a=>s(t).name=a),name:"name",autocomplete:"name",required:""},null,8,["modelValue"]),l(m,{for:"name",class:"mt-2"})])]),o[11]||(o[11]=e("div",{class:"col-xs-12 col-sm-12 col-md-12 py-2 card card-body fw-bold font-bold text-dark bg-light w-full w-100 my-5"},[e("div",{class:"row"},[e("div",{class:"col me-auto mr-auto"},[e("strong",null,"API Connect")])])],-1)),e("div",B,[e("div",A,[l(d,{for:"host",value:"Host"}),l(c,{modelValue:s(t).host,"onUpdate:modelValue":o[2]||(o[2]=a=>s(t).host=a),id:"host",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://api.domain.com",name:"host",autocomplete:"host",required:""},null,8,["modelValue"]),l(m,{for:"host",class:"mt-2"})])]),e("div",K,[e("div",N,[l(d,{for:"callback",value:"Callback"}),l(c,{modelValue:s(t).callback,"onUpdate:modelValue":o[3]||(o[3]=a=>s(t).callback=a),id:"callback",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://mydomain.com/exemple",name:"callback",autocomplete:"callback",required:""},null,8,["modelValue"]),l(m,{for:"callback",class:"mt-2"})])]),e("div",D,[e("div",I,[l(d,{for:"type",value:"Type"}),l(f,{modelValue:s(t).type,"onUpdate:modelValue":o[4]||(o[4]=a=>s(t).type=a),id:"type",class:"form-control mt-1 block w-full",placeholder:"json",name:"type",autocomplete:"type",required:""},{default:n(()=>o[8]||(o[8]=[e("option",{value:"get",selected:""},"get",-1),e("option",{value:"post",selected:""},"post",-1)])),_:1},8,["modelValue"]),l(m,{for:"type",class:"mt-2"})])]),e("div",L,[e("div",O,[l(d,{for:"data",value:"Data type"}),l(f,{modelValue:s(t).datatype,"onUpdate:modelValue":o[5]||(o[5]=a=>s(t).datatype=a),id:"data",class:"form-control mt-1 block w-full",placeholder:"data",name:"data",autocomplete:"data",required:""},{default:n(()=>o[9]||(o[9]=[e("option",{value:"json",selected:""},"json",-1)])),_:1},8,["modelValue"]),l(m,{for:"data",class:"mt-2"})])]),e("div",P,[e("div",R,[l(d,{for:"query",value:"URL Query"}),l(c,{modelValue:s(t).query,"onUpdate:modelValue":o[6]||(o[6]=a=>s(t).query=a),id:"query",type:"text",class:"form-control mt-1 block w-full",placeholder:"?query=value&query2=value&query3=value...",name:"query",autocomplete:"query"},null,8,["modelValue"]),l(m,{for:"query",class:"mt-2"})])]),o[12]||(o[12]=e("div",{class:"col-xs-12 col-sm-12 col-md-12 py-2 card card-body fw-bold font-bold text-dark bg-light w-full w-100 my-5"},[e("div",{class:"row"},[e("div",{class:"col me-auto mr-auto"},[e("strong",null,"API Data")]),e("div",{clas:"col-3"},[e("button",{type:"button",id:"newitem",class:"btn btn-primary btn-block"},"Add item")])])],-1)),e("div",z,[e("div",F,[e("div",H,[e("div",M,[e("div",Q,[l(d,{for:"key",value:"Key"}),l(c,{id:"key1",type:"text",class:"form-control mt-1 block w-full",placeholder:"Key",name:"key",autocomplete:"key",required:""}),l(m,{for:"key1",class:"mt-2"})])]),e("div",E,[e("div",G,[l(d,{for:"value1",value:"Value"}),l(c,{id:"value1",type:"text",class:"form-control mt-1 block w-full",placeholder:"Value",name:"value",autocomplete:"value",required:""}),l(m,{for:"value1",class:"mt-2"})])])])])]),e("div",J,[l(V,{type:"submit",class:x(["btn btn-primary",{"opacity-25":s(t).processing}]),title:"To save","aria-label":"To save",disabled:s(t).processing},{default:n(()=>o[10]||(o[10]=[k("To save")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","apiitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{pe as default};