import{u as c}from"./index-fc7176c5.js";import m from"./AppLayout-eb7b661f.js";import{o as i,c as u,w as d,a as e,t as n,d as s,g as b,F as v}from"./app-7485cb55.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const h={class:"row mb-3"},f={class:"col"},g=["src"],S={class:"col"},w={class:""},y={class:""},C={class:""},x={class:""},k={class:""},L={class:""},B={class:""},T={class:"table-responsive overflow-auto h-25 mt-3"},F={class:"table overflow-auto h-25"},H={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object,license:String,framework:Number,host:String,langplatform:Number,extensions:Object,mysql:Number,server:String},setup(t){return c(),(o,r)=>(i(),u(m,{menulang:t.menulang,menuitems:t.menuitems,avatar:t.avatar,role:t.role,name:t.name,version:t.version,breadcrumbCurrentTitle:t.breadcrumbCurrentTitle,breadcrumbCurrentSection:t.breadcrumbCurrentSection,title:t.title},{default:d(()=>[e("div",h,[e("div",f,[e("img",{src:o.window.location.origin+"/application/lochlite.png"},null,8,g)]),e("div",S,[e("div",w,"Framework: Laravel V"+n(t.framework),1),e("div",y,"Lochlite CMS: "+n(t.version),1),e("div",C,"License key: "+n(t.license),1),r[0]||(r[0]=e("p",null,[e("a",{href:"https://lochlite.com",class:"fw-bold font-bold text-primary"},"Software Technical Requirements")],-1)),r[1]||(r[1]=e("p",null,[e("a",{href:"https://lochlite.com",class:"fw-bold font-bold text-primary"},"Software User Manual")],-1)),r[2]||(r[2]=e("p",null,[e("a",{href:"https://lochlite.com",class:"fw-bold font-bold text-primary"},"Software License Term")],-1))])]),e("div",x,"Server: "+n(t.server),1),e("div",k,"Server Host: "+n(t.host),1),e("div",L,"PHP Version: "+n(t.langplatform),1),e("div",B,"MySQL: "+n(t.mysql),1),e("div",T,[e("table",F,[r[3]||(r[3]=e("thead",null,[e("tr",null,[e("th",null,"Extension"),e("th",null,"Version")])],-1)),e("tbody",null,[(i(!0),s(v,null,b(t.extensions,(l,a)=>(i(),s("tr",{key:l.id},[e("td",null,n(a),1),e("td",null,n(l),1)]))),128))])])])]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{H as default};