import{o as c,c as h,w as n,a as o,b as t,u as s,l as g,v as b,d as p,g as x,t as v,F as _,f as w,n as k,h as S}from"./app-7485cb55.js";import{u as U}from"./index-fc7176c5.js";import T from"./Button-406cbd9c.js";import f from"./Input-056eb611.js";import a from"./InputError-9cb9d01f.js";import d from"./Label-99813df6.js";import u from"./Select-8eaad69e.js";import B from"./ValidationErrors-7f856797.js";import q from"./AppLayout-eb7b661f.js";import"./MylochiTinyEditor-caf467ce.js";import"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const y={class:"row"},F={class:"col-xs-12 col-sm-12 col-md-6"},C={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-6"},D={class:"form-group"},L={class:"col-12 card border-0 shadow-none"},$={class:"card-body"},N={class:"row"},O={class:"col-xs-12 col-sm-12 col-md-6"},j={class:"form-group"},z={class:"col-xs-12 col-sm-12 col-md-6"},G={class:"form-group"},P={class:"col-12 card border-0 shadow-none"},R={class:"card-body"},A={class:"row"},I={class:"col-xs-12 col-sm-12 col-md-6"},M={class:"form-group"},Y={class:"col-xs-12 col-sm-12 col-md-6"},W={class:"form-group"},H={class:"col-12 card border-0 shadow-none"},J={class:"card-body"},K={class:"row"},Q={class:"col-xs-12 col-sm-12 col-md-4"},X={class:"form-group"},Z={class:"col-xs-12 col-sm-12 col-md-4"},oo={class:"form-group"},eo={class:"col-xs-12 col-sm-12 col-md-4"},to={class:"form-group"},lo={class:"col-xs-12 col-sm-12 col-md-4"},ro={class:"form-group"},so={class:"col-xs-12 col-sm-12 col-md-4"},io={class:"form-group"},ao={class:"col-xs-12 col-sm-12 col-md-4"},mo={class:"form-group"},no={class:"col-12 card border-0 shadow-none"},uo={class:"card-body"},co={class:"row"},po={class:"col-xs-12 col-sm-12 col-md-4"},vo={class:"form-group"},fo={class:"col-xs-12 col-sm-12 col-md-4"},go={class:"form-group"},bo={class:"col-xs-12 col-sm-12 col-md-4"},xo={class:"form-group"},_o={class:"col-xs-12 col-sm-12 col-md-4"},Vo={class:"form-group"},ho=["value"],wo={class:"col-xs-12 col-sm-12 col-md-4"},ko={class:"form-group"},So=["value"],Uo={class:"col-xs-12 col-sm-12 col-md-4"},To={class:"form-group"},Bo=["value"],qo={class:"col-xs-12 col-sm-12 col-md-12 text-center"},Yo={__name:"edit",props:{canregister:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,services:Object,register:Object,menulang:Object,menuitems:Object},setup(m){const i=m,r=U({domain:i.register.domain,default:i.register.default,logo:i.register.logo,image:i.register.image,imagevisible:i.register.imagevisible,emphasis:i.register.emphasis,title:i.register.title,description:i.register.description,logintext:i.register.logintext,buttontext:i.register.buttontext,buttoncolor:i.register.buttoncolor,buttontextcolor:i.register.buttontextcolor,google:i.register.google,facebook:i.register.facebook,twitter:i.register.twitter,goprovider:i.register.goprovider,fbprovider:i.register.fbprovider,ttprovider:i.register.ttprovider}),V=()=>{r.put(route("managerregister.update",{id:i.register.id}))};return(yo,e)=>(c(),h(q,{menulang:m.menulang,menuitems:m.menuitems,avatar:m.avatar,role:m.role,name:m.name,version:m.version,breadcrumbCurrentTitle:m.breadcrumbCurrentTitle,breadcrumbCurrentSection:m.breadcrumbCurrentSection,title:m.title},{breadcrumb:n(()=>e[18]||(e[18]=[o("li",{class:"breadcrumb-item active","aria-current":"page"},"Nova página de register",-1)])),default:n(()=>[t(B,{class:"mb-4"}),o("form",{onSubmit:S(V,["prevent"])},[o("div",y,[o("div",F,[o("div",C,[t(d,{for:"domain",value:"Domain"}),t(f,{id:"domain",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:s(r).domain,"onUpdate:modelValue":e[0]||(e[0]=l=>s(r).domain=l),name:"domain",autocomplete:"domain",autofocus:"",required:""},null,8,["modelValue"]),t(a,{for:"domain",class:"mt-2"})])]),o("div",E,[o("div",D,[t(d,{for:"default",value:"Default"}),t(u,{id:"default",class:"form-control mt-1 block w-full",placeholder:"Default",modelValue:s(r).default,"onUpdate:modelValue":e[1]||(e[1]=l=>s(r).default=l),name:"default",autocomplete:"",required:""},{default:n(()=>e[19]||(e[19]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(a,{for:"default",class:"mt-2"})])]),o("div",L,[e[20]||(e[20]=o("div",{class:"card-header"},"SEO",-1)),o("div",$,[o("div",N,[o("div",O,[o("div",j,[t(d,{for:"title",value:"Title"}),t(f,{id:"title",type:"text",class:"form-control mt-1 block w-full",placeholder:"Title",modelValue:s(r).title,"onUpdate:modelValue":e[2]||(e[2]=l=>s(r).title=l),name:"title",autocomplete:"title"},null,8,["modelValue"]),t(a,{for:"title",class:"mt-2"})])]),o("div",z,[o("div",G,[t(d,{for:"description",value:"Description"}),g(o("input",{id:"description",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":e[3]||(e[3]=l=>s(r).description=l),name:"description",autocomplete:"",required:""},null,512),[[b,s(r).description]]),t(a,{for:"description",class:"mt-2"})])])])])]),o("div",P,[e[22]||(e[22]=o("div",{class:"card-header"},"Image",-1)),o("div",R,[o("div",A,[o("div",I,[o("div",M,[t(d,{for:"image",value:"Image URL"}),t(f,{id:"image",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://exemple.com/image.png",modelValue:s(r).image,"onUpdate:modelValue":e[4]||(e[4]=l=>s(r).image=l),name:"image",autocomplete:"image",required:""},null,8,["modelValue"]),t(a,{for:"image",class:"mt-2"})])]),o("div",Y,[o("div",W,[t(d,{for:"imagevisible",value:"Image visible"}),t(u,{id:"imagevisible",class:"form-control mt-1 block w-full",placeholder:"imagevisible",modelValue:s(r).imagevisible,"onUpdate:modelValue":e[5]||(e[5]=l=>s(r).imagevisible=l),name:"imagevisible",autocomplete:"",required:""},{default:n(()=>e[21]||(e[21]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(a,{for:"imagevisible",class:"mt-2"})])])])])]),o("div",H,[e[25]||(e[25]=o("div",{class:"card-header"},"Details",-1)),o("div",J,[o("div",K,[o("div",Q,[o("div",X,[t(d,{for:"logo",value:"Logo"}),t(f,{id:"logo",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://exemple.com/image.png",modelValue:s(r).logo,"onUpdate:modelValue":e[6]||(e[6]=l=>s(r).logo=l),name:"logo",autocomplete:"logo",required:""},null,8,["modelValue"]),t(a,{for:"logo",class:"mt-2"})])]),o("div",Z,[o("div",oo,[t(d,{for:"emphasis",value:"Emphasis"}),t(f,{id:"emphasis",type:"text",class:"form-control mt-1 block w-full",placeholder:"Emphasis",modelValue:s(r).emphasis,"onUpdate:modelValue":e[7]||(e[7]=l=>s(r).emphasis=l),name:"emphasis",autocomplete:"emphasis",required:""},null,8,["modelValue"]),t(a,{for:"emphasis",class:"mt-2"})])]),o("div",eo,[o("div",to,[t(d,{for:"logintext",value:"Forgot text"}),g(o("input",{id:"logintext",class:"form-control mt-1 block w-full",placeholder:"Forgot text","onUpdate:modelValue":e[8]||(e[8]=l=>s(r).logintext=l),name:"logintext",autocomplete:"",required:""},null,512),[[b,s(r).logintext]]),t(a,{for:"logintext",class:"mt-2"})])]),o("div",lo,[o("div",ro,[t(d,{for:"buttontext",value:"Button text"}),g(o("input",{id:"buttontext",class:"form-control mt-1 block w-full",placeholder:"Button text","onUpdate:modelValue":e[9]||(e[9]=l=>s(r).buttontext=l),name:"buttontext",autocomplete:"",required:""},null,512),[[b,s(r).buttontext]]),t(a,{for:"buttontext",class:"mt-2"})])]),o("div",so,[o("div",io,[t(d,{for:"buttoncolor",value:"Button color"}),t(u,{id:"buttoncolor",class:"form-control mt-1 block w-full",placeholder:"Button color",modelValue:s(r).buttoncolor,"onUpdate:modelValue":e[10]||(e[10]=l=>s(r).buttoncolor=l),name:"buttoncolor",autocomplete:"",required:""},{default:n(()=>e[23]||(e[23]=[o("option",{value:"bg-blue-600"},"Default",-1),o("option",{value:"btn-primary"},"Blue",-1),o("option",{value:"btn-info"},"Light blue",-1),o("option",{value:"btn-light"},"Light",-1),o("option",{value:"btn-danger"},"Red",-1),o("option",{value:"btn-warning"},"Yellow",-1),o("option",{value:"btn-dark"},"Black",-1)])),_:1},8,["modelValue"]),t(a,{for:"buttoncolor",class:"mt-2"})])]),o("div",ao,[o("div",mo,[t(d,{for:"buttontextcolor",value:"Button Text Color"}),t(u,{id:"buttontextcolor",class:"form-control mt-1 block w-full",placeholder:"Button text color",modelValue:s(r).buttontextcolor,"onUpdate:modelValue":e[11]||(e[11]=l=>s(r).buttontextcolor=l),name:"buttontextcolor",autocomplete:"",required:""},{default:n(()=>e[24]||(e[24]=[o("option",{value:"text-white"},"White",-1),o("option",{value:"text-primary"},"Blue",-1),o("option",{value:"text-info"},"Light blue",-1),o("option",{value:"text-light"},"Light",-1),o("option",{value:"text-danger"},"Red",-1),o("option",{value:"text-warning"},"Yellow",-1),o("option",{value:"text-dark"},"Black",-1)])),_:1},8,["modelValue"]),t(a,{for:"buttoncolor",class:"mt-2"})])])])])]),o("div",no,[e[29]||(e[29]=o("div",{class:"card-header"},"Social Networks & External Providers",-1)),o("div",uo,[o("div",co,[o("div",po,[o("div",vo,[t(d,{for:"google",value:"Enable Google"}),t(u,{id:"google",class:"form-control mt-1 block w-full",placeholder:"Google",modelValue:s(r).google,"onUpdate:modelValue":e[12]||(e[12]=l=>s(r).google=l),name:"google",autocomplete:"",required:""},{default:n(()=>e[26]||(e[26]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(a,{for:"google",class:"mt-2"})])]),o("div",fo,[o("div",go,[t(d,{for:"facebook",value:"Enable Facebook"}),t(u,{id:"facebook",class:"form-control mt-1 block w-full",placeholder:"Facebook",modelValue:s(r).facebook,"onUpdate:modelValue":e[13]||(e[13]=l=>s(r).facebook=l),name:"facebook",autocomplete:"",required:""},{default:n(()=>e[27]||(e[27]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(a,{for:"facebook",class:"mt-2"})])]),o("div",bo,[o("div",xo,[t(d,{for:"twitter",value:"Enable Twitter"}),t(u,{id:"twitter",class:"form-control mt-1 block w-full",placeholder:"Twitter",modelValue:s(r).twitter,"onUpdate:modelValue":e[14]||(e[14]=l=>s(r).twitter=l),name:"twitter",autocomplete:"",required:""},{default:n(()=>e[28]||(e[28]=[o("option",{value:"0"},"False",-1),o("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),t(a,{for:"twitter",class:"mt-2"})])]),o("div",_o,[o("div",Vo,[t(d,{for:"goprovider",value:"Service provider of Google"}),t(u,{id:"goprovider",class:"form-control mt-1 block w-full",placeholder:"Google Provide",modelValue:s(r).goprovider,"onUpdate:modelValue":e[15]||(e[15]=l=>s(r).goprovider=l),name:"goprovider",autocomplete:""},{default:n(()=>[(c(!0),p(_,null,x(m.services,l=>(c(),p("option",{value:l.id},v(l.name)+" - "+v(l.domain),9,ho))),256))]),_:1},8,["modelValue"]),t(a,{for:"goprovider",class:"mt-2"})])]),o("div",wo,[o("div",ko,[t(d,{for:"fbprovider",value:"Service provider of Facebook"}),t(u,{id:"fbprovider",class:"form-control mt-1 block w-full",placeholder:"Facebook Provider",modelValue:s(r).fbprovider,"onUpdate:modelValue":e[16]||(e[16]=l=>s(r).fbprovider=l),name:"fbprovider",autocomplete:""},{default:n(()=>[(c(!0),p(_,null,x(m.services,l=>(c(),p("option",{value:l.id},v(l.name)+" - "+v(l.domain),9,So))),256))]),_:1},8,["modelValue"]),t(a,{for:"fbprovider",class:"mt-2"})])]),o("div",Uo,[o("div",To,[t(d,{for:"ttprovider",value:"Service provider of Twitter"}),t(u,{id:"ttprovider",class:"form-control mt-1 block w-full",placeholder:"Twitter Provider",modelValue:s(r).ttprovider,"onUpdate:modelValue":e[17]||(e[17]=l=>s(r).ttprovider=l),name:"ttprovider",autocomplete:""},{default:n(()=>[(c(!0),p(_,null,x(m.services,l=>(c(),p("option",{value:l.id},v(l.name)+" - "+v(l.domain),9,Bo))),256))]),_:1},8,["modelValue"]),t(a,{for:"ttprovider",class:"mt-2"})])])])])]),o("div",qo,[t(T,{type:"submit",class:k(["btn btn-primary",{"opacity-25":s(r).processing}]),title:"Atualizar","aria-label":"Atualizar",disabled:s(r).processing},{default:n(()=>e[30]||(e[30]=[w("Atualizar")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Yo as default};