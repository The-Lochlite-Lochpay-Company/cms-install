import{o as b,c as g,w as d,a as o,b as t,u as i,l as u,v as f,f as x,n as h,h as _}from"./app-7485cb55.js";import{u as V}from"./index-fc7176c5.js";import y from"./Button-406cbd9c.js";import c from"./Input-056eb611.js";import r from"./InputError-9cb9d01f.js";import n from"./Label-99813df6.js";import p from"./Select-8eaad69e.js";import w from"./ValidationErrors-7f856797.js";import k from"./AppLayout-eb7b661f.js";import"./MylochiTinyEditor-caf467ce.js";import"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const U={class:"row"},B={class:"col-xs-12 col-sm-12 col-md-6"},S={class:"form-group"},q={class:"col-xs-12 col-sm-12 col-md-6"},C={class:"form-group"},T={class:"col-12 card border-0 shadow-none"},D={class:"card-body"},$={class:"row"},E={class:"col-xs-12 col-sm-12 col-md-6"},L={class:"form-group"},O={class:"col-xs-12 col-sm-12 col-md-6"},j={class:"form-group"},F={class:"col-12 card border-0 shadow-none"},I={class:"card-body"},N={class:"row"},R={class:"col-xs-12 col-sm-12 col-md-6"},M={class:"form-group"},Y={class:"col-xs-12 col-sm-12 col-md-6"},z={class:"form-group"},W={class:"col-12 card border-0 shadow-none"},A={class:"card-body"},G={class:"row"},H={class:"col-xs-12 col-sm-12 col-md-4"},J={class:"form-group"},K={class:"col-xs-12 col-sm-12 col-md-4"},P={class:"form-group"},Q={class:"col-xs-12 col-sm-12 col-md-4"},X={class:"form-group"},Z={class:"col-xs-12 col-sm-12 col-md-4"},oo={class:"form-group"},eo={class:"col-xs-12 col-sm-12 col-md-4"},to={class:"form-group"},lo={class:"col-xs-12 col-sm-12 col-md-4"},io={class:"form-group"},ao={class:"col-xs-12 col-sm-12 col-md-4"},so={class:"form-group"},ro={class:"col-xs-12 col-sm-12 col-md-4"},no={class:"form-group"},mo={class:"col-xs-12 col-sm-12 col-md-12 text-center"},qo={__name:"edit",props:{canemailverify:Boolean,canemailverify:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,emailverify:Object,menulang:Object,menuitems:Object},setup(m){const s=m,l=V({domain:s.emailverify.domain,default:s.emailverify.default,logo:s.emailverify.logo,image:s.emailverify.image,imagevisible:s.emailverify.imagevisible,emphasis:s.emailverify.emphasis,instruction:s.emailverify.instruction,title:s.emailverify.title,description:s.emailverify.description,confirmationsend:s.emailverify.confirmationsend,changeemailtext:s.emailverify.changeemailtext,buttontext:s.emailverify.buttontext,buttoncolor:s.emailverify.buttoncolor,buttontextcolor:s.emailverify.buttontextcolor}),v=()=>{l.put(route("manageremailverify.update",{id:s.emailverify.id}))};return(co,e)=>(b(),g(k,{menulang:m.menulang,menuitems:m.menuitems,avatar:m.avatar,role:m.role,name:m.name,version:m.version,breadcrumbCurrentTitle:m.breadcrumbCurrentTitle,breadcrumbCurrentSection:m.breadcrumbCurrentSection,title:m.title},{breadcrumb:d(()=>e[14]||(e[14]=[o("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit password recovery page",-1)])),default:d(()=>[t(w,{class:"mb-4"}),o("form",{onSubmit:_(v,["prevent"])},[o("div",U,[o("div",B,[o("div",S,[t(n,{for:"domain",value:"Domain"}),t(c,{id:"domain",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:i(l).domain,"onUpdate:modelValue":e[0]||(e[0]=a=>i(l).domain=a),name:"domain",autocomplete:"domain",autofocus:"",required:""},null,8,["modelValue"]),t(r,{for:"domain",class:"mt-2"})])]),o("div",q,[o("div",C,[t(n,{for:"default",value:"Default"}),t(p,{id:"default",class:"form-control mt-1 block w-full",placeholder:"Default",modelValue:i(l).default,"onUpdate:modelValue":e[1]||(e[1]=a=>i(l).default=a),name:"default",autocomplete:"",required:""},{default:d(()=>e[15]||(e[15]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(r,{for:"default",class:"mt-2"})])]),o("div",T,[e[16]||(e[16]=o("div",{class:"card-header"},"SEO",-1)),o("div",D,[o("div",$,[o("div",E,[o("div",L,[t(n,{for:"title",value:"Title"}),t(c,{id:"title",type:"text",class:"form-control mt-1 block w-full",placeholder:"Title",modelValue:i(l).title,"onUpdate:modelValue":e[2]||(e[2]=a=>i(l).title=a),name:"title",autocomplete:"title"},null,8,["modelValue"]),t(r,{for:"title",class:"mt-2"})])]),o("div",O,[o("div",j,[t(n,{for:"description",value:"Description"}),u(o("input",{id:"description",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":e[3]||(e[3]=a=>i(l).description=a),name:"description",autocomplete:"",required:""},null,512),[[f,i(l).description]]),t(r,{for:"description",class:"mt-2"})])])])])]),o("div",F,[e[18]||(e[18]=o("div",{class:"card-header"},"Image",-1)),o("div",I,[o("div",N,[o("div",R,[o("div",M,[t(n,{for:"image",value:"Image URL"}),t(c,{id:"image",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://exemple.com/image.png",modelValue:i(l).image,"onUpdate:modelValue":e[4]||(e[4]=a=>i(l).image=a),name:"image",autocomplete:"image",required:""},null,8,["modelValue"]),t(r,{for:"image",class:"mt-2"})])]),o("div",Y,[o("div",z,[t(n,{for:"imagevisible",value:"Image visible"}),t(p,{id:"imagevisible",class:"form-control mt-1 block w-full",placeholder:"imagevisible",modelValue:i(l).imagevisible,"onUpdate:modelValue":e[5]||(e[5]=a=>i(l).imagevisible=a),name:"imagevisible",autocomplete:"",required:""},{default:d(()=>e[17]||(e[17]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(r,{for:"imagevisible",class:"mt-2"})])])])])]),o("div",W,[e[21]||(e[21]=o("div",{class:"card-header"},"Details",-1)),o("div",A,[o("div",G,[o("div",H,[o("div",J,[t(n,{for:"logo",value:"Logo"}),t(c,{id:"logo",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://exemple.com/image.png",modelValue:i(l).logo,"onUpdate:modelValue":e[6]||(e[6]=a=>i(l).logo=a),name:"logo",autocomplete:"logo",required:""},null,8,["modelValue"]),t(r,{for:"logo",class:"mt-2"})])]),o("div",K,[o("div",P,[t(n,{for:"emphasis",value:"Emphasis"}),t(c,{id:"emphasis",type:"text",class:"form-control mt-1 block w-full",placeholder:"Emphasis",modelValue:i(l).emphasis,"onUpdate:modelValue":e[7]||(e[7]=a=>i(l).emphasis=a),name:"emphasis",autocomplete:"emphasis",required:""},null,8,["modelValue"]),t(r,{for:"emphasis",class:"mt-2"})])]),o("div",Q,[o("div",X,[t(n,{for:"instruction",value:"instruction"}),t(c,{id:"instruction",type:"text",class:"form-control mt-1 block w-full",placeholder:"instruction",modelValue:i(l).instruction,"onUpdate:modelValue":e[8]||(e[8]=a=>i(l).instruction=a),name:"instruction",autocomplete:"instruction",required:""},null,8,["modelValue"]),t(r,{for:"instruction",class:"mt-2"})])]),o("div",Z,[o("div",oo,[t(n,{for:"changeemailtext",value:"Change Email Text"}),u(o("input",{id:"changeemailtext",class:"form-control mt-1 block w-full",placeholder:"changeemailtext","onUpdate:modelValue":e[9]||(e[9]=a=>i(l).changeemailtext=a),name:"changeemailtext",autocomplete:"",required:""},null,512),[[f,i(l).changeemailtext]]),t(r,{for:"changeemailtext",class:"mt-2"})])]),o("div",eo,[o("div",to,[t(n,{for:"confirmationsend",value:"Confirmation Send"}),u(o("input",{id:"confirmationsend",class:"form-control mt-1 block w-full",placeholder:"confirmationsend","onUpdate:modelValue":e[10]||(e[10]=a=>i(l).confirmationsend=a),name:"confirmationsend",autocomplete:"",required:""},null,512),[[f,i(l).confirmationsend]]),t(r,{for:"confirmationsend",class:"mt-2"})])]),o("div",lo,[o("div",io,[t(n,{for:"buttontext",value:"Button text"}),u(o("input",{id:"buttontext",class:"form-control mt-1 block w-full",placeholder:"Button text","onUpdate:modelValue":e[11]||(e[11]=a=>i(l).buttontext=a),name:"buttontext",autocomplete:"",required:""},null,512),[[f,i(l).buttontext]]),t(r,{for:"buttontext",class:"mt-2"})])]),o("div",ao,[o("div",so,[t(n,{for:"buttoncolor",value:"Button color"}),t(p,{id:"buttoncolor",class:"form-control mt-1 block w-full",placeholder:"Button color",modelValue:i(l).buttoncolor,"onUpdate:modelValue":e[12]||(e[12]=a=>i(l).buttoncolor=a),name:"buttoncolor",autocomplete:"",required:""},{default:d(()=>e[19]||(e[19]=[o("option",{value:"bg-blue-600"},"Default",-1),o("option",{value:"btn-primary"},"Blue",-1),o("option",{value:"btn-info"},"Light blue",-1),o("option",{value:"btn-light"},"Light",-1),o("option",{value:"btn-danger"},"Red",-1),o("option",{value:"btn-warning"},"Yellow",-1),o("option",{value:"btn-dark"},"Black",-1)])),_:1},8,["modelValue"]),t(r,{for:"buttoncolor",class:"mt-2"})])]),o("div",ro,[o("div",no,[t(n,{for:"buttontextcolor",value:"Button Text Color"}),t(p,{id:"buttontextcolor",class:"form-control mt-1 block w-full",placeholder:"Button text color",modelValue:i(l).buttontextcolor,"onUpdate:modelValue":e[13]||(e[13]=a=>i(l).buttontextcolor=a),name:"buttontextcolor",autocomplete:"",required:""},{default:d(()=>e[20]||(e[20]=[o("option",{value:"text-white"},"White",-1),o("option",{value:"text-primary"},"Blue",-1),o("option",{value:"text-info"},"Light blue",-1),o("option",{value:"text-light"},"Light",-1),o("option",{value:"text-danger"},"Red",-1),o("option",{value:"text-warning"},"Yellow",-1),o("option",{value:"text-dark"},"Black",-1)])),_:1},8,["modelValue"]),t(r,{for:"buttoncolor",class:"mt-2"})])])])])]),o("div",mo,[t(y,{type:"submit",class:h(["btn btn-primary",{"opacity-25":i(l).processing}]),title:"Update","aria-label":"Update",disabled:i(l).processing},{default:d(()=>e[22]||(e[22]=[x("Update")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{qo as default};