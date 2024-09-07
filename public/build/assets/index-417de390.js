import{o as h,c as _,w as f,a as e,b as l,u as a,f as V,n as w,h as y}from"./app-7485cb55.js";import{u as k}from"./index-fc7176c5.js";import v from"./Select-8eaad69e.js";import r from"./InputError-9cb9d01f.js";import n from"./Input-056eb611.js";import i from"./Label-99813df6.js";import S from"./Button-406cbd9c.js";import C from"./ValidationErrors-7f856797.js";import U from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const q={class:"row"},B={class:"col-xs-12 col-sm-12 col-md-4"},D={class:"form-group"},T={class:"col-xs-12 col-sm-12 col-md-4"},N={class:"form-group"},O={class:"col-xs-12 col-sm-12 col-md-4"},j={class:"form-group"},z={class:"col-xs-12 col-sm-12 col-md-4"},F={class:"form-group"},H={class:"col-xs-12 col-sm-12 col-md-4"},M={class:"form-group"},R={class:"col-xs-12 col-sm-12 col-md-4"},E={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-12"},A={class:"form-group"},W={class:"col-xs-12 col-sm-12 col-md-4"},X={class:"form-group"},G={class:"col-xs-12 col-sm-12 col-md-4"},I={class:"form-group"},J={class:"col-xs-12 col-sm-12 col-md-4"},K={class:"form-group"},P={class:"card card-body mx-2 mb-3"},Q={class:"row mt-2 px-1"},Y={class:"col-xs-12 col-sm-12 col-md-4"},Z={class:"form-group"},oo={class:"col-xs-12 col-sm-12 col-md-4"},eo={class:"form-group"},lo={class:"col-xs-12 col-sm-12 col-md-4"},to={class:"form-group"},so={class:"col-xs-12 col-sm-12 col-md-4"},ao={class:"form-group"},ro={class:"col-xs-12 col-sm-12 col-md-4"},io={class:"form-group"},no={class:"col-xs-12 col-sm-12 col-md-4"},mo={class:"form-group"},co={class:"col-xs-12 col-sm-12 col-md-12 text-center"},$o={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object,pwa:Object},setup(m){const d=m,s=k({name:d.pwa.name,short_name:d.pwa.short_name,scope:d.pwa.scope,start_url:d.pwa.start_url,background_color:d.pwa.background_color,theme_color:d.pwa.theme_color,description:d.pwa.description,dir:d.pwa.dir,orientation:d.pwa.orientation,display:d.pwa.display,icons:d.pwa.icons}),b=()=>{const g=[];$.each($("input.inputicon"),function(o,t){var c=$(t).val(),x=$(t).attr("name"),p=$(t).attr("mimetype")??"application/octet-stream";c.length>0&&g.push({sizes:x,type:p,src:c})}),s.icons=g,s.transform(o=>({...o})).post(route("managerpwa.store"),{onFinish:()=>s.reset()})};return $("body").on("change keyup keydown","input.inputicon",function(g){var o=$(this),t=$(this).attr("id"),c=$(this).val();if(c.length>0){let x=function(){var p=new XMLHttpRequest;p.open("HEAD",c,!0),p.onreadystatechange=function(){if(this.readyState==this.DONE)if(this.status==200){var u=p.getResponseHeader("Content-Type");u=="image/x-icon"||u=="image/png"||u=="image/jpg"||u=="image/jpeg"||u=="image/gif"||u=="image/webp"?$(o).attr("mimetype",u).removeClass("border-danger").addClass("border-success"):$(o).attr("mimetype","image/"+c.split(".").pop()).removeClass("border-danger").addClass("border-success")}else $(o).addClass("border-danger").removeClass("border-success")},p.send()};$("img#img-"+t).attr("src",c).removeClass("d-none hidden"),x()}else $("img#img-"+t).addClass("d-none hidden"),$(o).removeClass("border-danger border-success")}),$("body").ready(function(){$.each(d.pwa.icons,function(g,o){$("input#"+o.sizes).length>0&&$("input#"+o.sizes).val(o.src)})}),(g,o)=>(h(),_(U,{menulang:m.menulang,menuitems:m.menuitems,avatar:m.avatar,role:m.role,name:m.name,version:m.version,breadcrumbCurrentTitle:m.breadcrumbCurrentTitle,breadcrumbCurrentSection:m.breadcrumbCurrentSection,title:m.title},{breadcrumb:f(()=>o[16]||(o[16]=[e("li",{class:"breadcrumb-item active","aria-current":"page"},"Webmanifest default configuration",-1)])),default:f(()=>[l(C,{class:"mb-4"}),e("form",{onSubmit:y(b,["prevent"])},[e("div",q,[e("div",B,[e("div",D,[l(i,{for:"name",value:"Name"}),l(n,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).name=t),name:"name",autocomplete:"name",required:""},null,8,["modelValue"]),l(r,{for:"name",class:"mt-2"})])]),e("div",T,[e("div",N,[l(i,{for:"short_name",value:"Short name"}),l(n,{id:"short_name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Short name",modelValue:a(s).short_name,"onUpdate:modelValue":o[1]||(o[1]=t=>a(s).short_name=t),name:"short_name",autocomplete:"short_name",required:""},null,8,["modelValue"]),l(r,{for:"short_name",class:"mt-2"})])]),e("div",O,[e("div",j,[l(i,{for:"scope",value:"Scope"}),l(n,{id:"scope",type:"text",class:"form-control mt-1 block w-full",placeholder:"Scope",modelValue:a(s).scope,"onUpdate:modelValue":o[2]||(o[2]=t=>a(s).scope=t),name:"scope",autocomplete:"scope",required:""},null,8,["modelValue"]),l(r,{for:"scope",class:"mt-2"})])]),e("div",z,[e("div",F,[l(i,{for:"start_url",value:"Start url"}),l(n,{id:"start_url",type:"text",class:"form-control mt-1 block w-full",placeholder:"Start url",modelValue:a(s).start_url,"onUpdate:modelValue":o[3]||(o[3]=t=>a(s).start_url=t),name:"short_name",autocomplete:"start_url",required:""},null,8,["modelValue"]),l(r,{for:"start_url",class:"mt-2"})])]),e("div",H,[e("div",M,[l(i,{for:"background_color",value:"Background color"}),l(n,{id:"background_color",type:"color",class:"form-control mt-1 block w-full",placeholder:"Background color",modelValue:a(s).background_color,"onUpdate:modelValue":o[4]||(o[4]=t=>a(s).background_color=t),name:"background_color",autocomplete:"background_color",required:""},null,8,["modelValue"]),l(r,{for:"background_color",class:"mt-2"})])]),e("div",R,[e("div",E,[l(i,{for:"theme_color",value:"Theme color"}),l(n,{id:"theme_color",type:"color",class:"form-control mt-1 block w-full",placeholder:"Theme color",modelValue:a(s).theme_color,"onUpdate:modelValue":o[5]||(o[5]=t=>a(s).theme_color=t),name:"theme_color",autocomplete:"theme_color",required:""},null,8,["modelValue"]),l(r,{for:"theme_color",class:"mt-2"})])]),e("div",L,[e("div",A,[l(i,{for:"description",value:"Description"}),l(n,{id:"description",type:"text",class:"form-control mt-1 block w-full",placeholder:"Description",modelValue:a(s).description,"onUpdate:modelValue":o[6]||(o[6]=t=>a(s).description=t),name:"description",autocomplete:"description",required:""},null,8,["modelValue"]),l(r,{for:"description",class:"mt-2"})])]),e("div",W,[e("div",X,[l(i,{for:"dir",value:"Dir"}),l(v,{id:"dir",class:"form-control mt-1 block w-full",placeholder:"Dir",modelValue:a(s).dir,"onUpdate:modelValue":o[7]||(o[7]=t=>a(s).dir=t),name:"dir",autocomplete:"dir",required:""},{default:f(()=>o[17]||(o[17]=[e("option",null,"ltr",-1),e("option",null,"rtl",-1)])),_:1},8,["modelValue"]),l(r,{for:"dir",class:"mt-2"})])]),e("div",G,[e("div",I,[l(i,{for:"orientation",value:"Orientation"}),l(v,{id:"orientation",class:"form-control mt-1 block w-full",placeholder:"Orientation",modelValue:a(s).orientation,"onUpdate:modelValue":o[8]||(o[8]=t=>a(s).orientation=t),name:"orientation",autocomplete:"orientation",required:""},{default:f(()=>o[18]||(o[18]=[e("option",{value:"any"},"any",-1),e("option",{value:"natural"},"natural",-1),e("option",{value:"landscape"},"landscape",-1),e("option",{value:"landscape-primary"},"landscape-primary",-1),e("option",{value:"landscape-secondary"},"landscape-secondary",-1),e("option",{value:"portrait"},"portrait",-1),e("option",{value:"portrait-primary"},"portrait-primary",-1),e("option",{value:"portrait-secondary"},"portrait-secondary",-1)])),_:1},8,["modelValue"]),l(r,{for:"orientation",class:"mt-2"})])]),e("div",J,[e("div",K,[l(i,{for:"display",value:"Display"}),l(v,{id:"display",class:"form-control mt-1 block w-full",placeholder:"Display",modelValue:a(s).display,"onUpdate:modelValue":o[9]||(o[9]=t=>a(s).display=t),name:"display",autocomplete:"display",required:""},{default:f(()=>o[19]||(o[19]=[e("option",{value:"fullscreen"},"Fullscreen",-1),e("option",{value:"standalone"},"Standalone",-1),e("option",{value:"minimal-ui"},"Minimal-ui",-1),e("option",{value:"browser"},"Browser",-1)])),_:1},8,["modelValue"]),l(r,{for:"display",class:"mt-2"})])]),e("div",P,[o[26]||(o[26]=e("div",{class:"card-header border-0 text-dark font-bold fw-bold"}," icons ",-1)),e("div",Q,[e("div",Y,[o[20]||(o[20]=e("img",{class:"d-none hidden",id:"img-48x48",src:"",width:"48",height:"48"},null,-1)),e("div",Z,[l(i,{for:"48x48",value:"48x48"}),l(n,{id:"48x48",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s48x48,"onUpdate:modelValue":o[10]||(o[10]=t=>a(s).s48x48=t),name:"48x48",autocomplete:"48x48",required:""},null,8,["modelValue"]),l(r,{for:"48x48",class:"mt-2"})])]),e("div",oo,[o[21]||(o[21]=e("img",{class:"d-none hidden",id:"img-72x72",src:"",width:"48",height:"48"},null,-1)),e("div",eo,[l(i,{for:"72x72",value:"72x72"}),l(n,{id:"72x72",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s72x72,"onUpdate:modelValue":o[11]||(o[11]=t=>a(s).s72x72=t),name:"72x72",autocomplete:"72x72"},null,8,["modelValue"]),l(r,{for:"72x72",class:"mt-2"})])]),e("div",lo,[o[22]||(o[22]=e("img",{class:"d-none hidden",id:"img-96x96",src:"",width:"48",height:"48"},null,-1)),e("div",to,[l(i,{for:"96x96",value:"96x96"}),l(n,{id:"96x96",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s96x96,"onUpdate:modelValue":o[12]||(o[12]=t=>a(s).s96x96=t),name:"96x96",autocomplete:"96x96"},null,8,["modelValue"]),l(r,{for:"96x96",class:"mt-2"})])]),e("div",so,[o[23]||(o[23]=e("img",{class:"d-none hidden",id:"img-144x144",src:"",width:"48",height:"48"},null,-1)),e("div",ao,[l(i,{for:"144x144",value:"144x144"}),l(n,{id:"144x144",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s144x144,"onUpdate:modelValue":o[13]||(o[13]=t=>a(s).s144x144=t),name:"144x144",autocomplete:"144x144"},null,8,["modelValue"]),l(r,{for:"144x144",class:"mt-2"})])]),e("div",ro,[o[24]||(o[24]=e("img",{class:"d-none hidden",id:"img-168x168",src:"",width:"48",height:"48"},null,-1)),e("div",io,[l(i,{for:"168x168",value:"168x168"}),l(n,{id:"168x168",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s168x168,"onUpdate:modelValue":o[14]||(o[14]=t=>a(s).s168x168=t),name:"168x168",autocomplete:"168x168"},null,8,["modelValue"]),l(r,{for:"168x168",class:"mt-2"})])]),e("div",no,[o[25]||(o[25]=e("img",{class:"d-none hidden",id:"img-192x192",src:"",width:"48",height:"48"},null,-1)),e("div",mo,[l(i,{for:"192x192",value:"192x192"}),l(n,{id:"192x192",type:"url",class:"form-control mt-1 block w-full inputicon",placeholder:"https://exemple.com/imagem.png",modelValue:a(s).s192x192,"onUpdate:modelValue":o[15]||(o[15]=t=>a(s).s192x192=t),name:"192x192",autocomplete:"192x192"},null,8,["modelValue"]),l(r,{for:"192x192",class:"mt-2"})])])])]),e("div",co,[l(S,{type:"submit",class:w(["btn btn-primary",{"opacity-25":a(s).processing}]),title:"Update","aria-label":"Update",disabled:a(s).processing},{default:f(()=>o[27]||(o[27]=[V("Update")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{$o as default};