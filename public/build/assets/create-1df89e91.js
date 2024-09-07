import{o as p,c as f,w as m,a as l,b as o,u as s,f as b,n as v,h as V}from"./app-7485cb55.js";import{u as k}from"./index-fc7176c5.js";import g from"./Button-406cbd9c.js";import i from"./Select-8eaad69e.js";import d from"./Input-056eb611.js";import u from"./InputError-9cb9d01f.js";import n from"./Label-99813df6.js";import y from"./ValidationErrors-7f856797.js";import w from"./AppLayout-eb7b661f.js";import"./MylochiTinyEditor-caf467ce.js";import"./purify.es-68816782.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";import"./pt_BR-aa71ef3f.js";const x={class:"row"},h={class:"col-xs-12 col-sm-12 col-md-4"},_={class:"form-group"},U={class:"col-xs-12 col-sm-12 col-md-4"},S={class:"form-group"},B={class:"col-xs-12 col-sm-12 col-md-4"},C={class:"form-group"},T={class:"col-xs-12 col-sm-12 col-md-4"},q={class:"form-group"},D={class:"col-xs-12 col-sm-12 col-md-4"},A={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-4"},$={class:"form-group"},N={class:"col-xs-12 col-sm-12 col-md-4"},F={class:"form-group"},I={class:"col-xs-12 col-sm-12 col-md-4"},M={class:"form-group"},R={class:"col-xs-12 col-sm-12 col-md-4"},j={class:"form-group"},O={class:"col-xs-12 col-sm-12 col-md-4"},z={class:"form-group"},P={class:"col-xs-12 col-sm-12 col-md-4"},W={class:"form-group"},Y={class:"col-xs-12 col-sm-12 col-md-4"},E={class:"form-group"},G={class:"col-xs-12 col-sm-12 col-md-4"},H={class:"form-group"},J={class:"col-xs-12 col-sm-12 col-md-4"},K={class:"form-group"},Q={class:"col-xs-12 col-sm-12 col-md-4"},X={class:"form-group"},Z={class:"col-xs-12 col-sm-12 col-md-4"},oo={class:"form-group"},to={class:"col-xs-12 col-sm-12 col-md-4"},lo={class:"form-group"},eo={class:"col-xs-12 col-sm-12 col-md-4"},so={class:"form-group"},ao={class:"col-xs-12 col-sm-12 col-md-4"},uo={class:"form-group"},no={class:"col-xs-12 col-sm-12 col-md-4"},mo={class:"form-group"},ro={class:"col-xs-12 col-sm-12 col-md-4"},io={class:"form-group"},co={class:"col-xs-12 col-sm-12 col-md-4"},po={class:"form-group"},fo={class:"col-xs-12 col-sm-12 col-md-4"},bo={class:"form-group"},vo={class:"col-xs-12 col-sm-12 col-md-4"},Vo={class:"form-group"},ko={class:"col-xs-12 col-sm-12 col-md-4"},go={class:"form-group"},yo={class:"col-xs-12 col-sm-12 col-md-4"},wo={class:"form-group"},xo={class:"col-xs-12 col-sm-12 col-md-4"},ho={class:"form-group"},_o={class:"col-xs-12 col-sm-12 col-md-4"},Uo={class:"form-group"},So={class:"col-xs-12 col-sm-12 col-md-4"},Bo={class:"form-group"},Co={class:"col-xs-12 col-sm-12 col-md-4"},To={class:"form-group"},qo={class:"col-xs-12 col-sm-12 col-md-12 text-center"},Ho={__name:"create",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(r){const e=k({domain:window.location.origin,menuclass:"",menuid:"mainmenu",name:"main-menu",brand:"My Company",brandtype:"text",button1:"Login",button1id:"buttonlogin",button1class:"",button1route:window.location.origin+"/login",button1status:"active",button2:"Register",button2id:"buttonregister",button2class:"",button2route:window.location.origin+"/register",button2status:"active",facebook:"",twitter:"",linkedin:"",pinterest:"",instagram:"",tiktok:"",whatsapp:"",youtube:"",search:0,searchroute:window.location.origin+"/search",stickytop:1,itemscenter:1,type:"navbar",default:0,status:"active"}),c=()=>{e.post(route("managermainmenu.store"))};return(Do,t)=>(p(),f(w,{menulang:r.menulang,menuitems:r.menuitems,avatar:r.avatar,role:r.role,name:r.name,version:r.version,breadcrumbCurrentTitle:r.breadcrumbCurrentTitle,breadcrumbCurrentSection:r.breadcrumbCurrentSection,title:r.title},{breadcrumb:m(()=>t[30]||(t[30]=[l("li",{class:"breadcrumb-item active","aria-current":"page"},"Criar menu",-1)])),default:m(()=>[o(y,{class:"mb-4"}),l("form",{onSubmit:V(c,["prevent"])},[l("div",x,[l("div",h,[l("div",_,[o(n,{for:"domain",value:"Domain"}),o(d,{id:"domain",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:s(e).domain,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).domain=a),name:"domain",autocomplete:"domain",required:""},null,8,["modelValue"]),o(u,{for:"domain",class:"mt-2"})])]),l("div",U,[l("div",S,[o(n,{for:"default",value:"Default"}),o(i,{id:"default",class:"form-control mt-1 block w-full",placeholder:"default",modelValue:s(e).default,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).default=a),name:"default",autocomplete:"default",required:""},{default:m(()=>t[31]||(t[31]=[l("option",{value:"0"},"False",-1),l("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),o(u,{for:"default",class:"mt-2"})])]),l("div",B,[l("div",C,[o(n,{for:"status",value:"Status"}),o(i,{id:"status",class:"form-control mt-1 block w-full",placeholder:"status",modelValue:s(e).status,"onUpdate:modelValue":t[2]||(t[2]=a=>s(e).status=a),name:"status",autocomplete:"status",required:""},{default:m(()=>t[32]||(t[32]=[l("option",{value:"active"},"Active",-1),l("option",{value:"disable"},"Disable",-1)])),_:1},8,["modelValue"]),o(u,{for:"status",class:"mt-2"})])]),l("div",T,[l("div",q,[o(n,{for:"name",value:"Name"}),o(d,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"name",modelValue:s(e).name,"onUpdate:modelValue":t[3]||(t[3]=a=>s(e).name=a),name:"name",autocomplete:"name",required:""},null,8,["modelValue"]),o(u,{for:"name",class:"mt-2"})])]),l("div",D,[l("div",A,[o(n,{for:"brand",value:"Brand"}),o(d,{id:"brand",type:"text",class:"form-control mt-1 block w-full",placeholder:"brand",modelValue:s(e).brand,"onUpdate:modelValue":t[4]||(t[4]=a=>s(e).brand=a),name:"brand",autocomplete:"brand",required:""},null,8,["modelValue"]),o(u,{for:"brand",class:"mt-2"})])]),l("div",L,[l("div",$,[o(n,{for:"brandtype",value:"Brand Type"}),o(i,{id:"brandtype",class:"form-control mt-1 block w-full",placeholder:"brandtype",modelValue:s(e).brandtype,"onUpdate:modelValue":t[5]||(t[5]=a=>s(e).brandtype=a),name:"brandtype",autocomplete:"brandtype",required:""},{default:m(()=>t[33]||(t[33]=[l("option",{value:"text"},"text",-1),l("option",{value:"image"},"Image",-1)])),_:1},8,["modelValue"]),o(u,{for:"brandtype",class:"mt-2"})])]),t[40]||(t[40]=l("div",{class:"col-xs-12 col-sm-12 col-md-12 py-2 card card-body fw-bold font-bold text-dark bg-light w-full w-100 my-5"}," Buttons ",-1)),l("div",N,[l("div",F,[o(n,{for:"button1",value:"Button 1 Text"}),o(d,{id:"button1",type:"text",class:"form-control mt-1 block w-full",placeholder:"Login",modelValue:s(e).button1,"onUpdate:modelValue":t[6]||(t[6]=a=>s(e).button1=a),name:"button1",autocomplete:"button1"},null,8,["modelValue"]),o(u,{for:"button1",class:"mt-2"})])]),l("div",I,[l("div",M,[o(n,{for:"button1id",value:"Button 1 ID"}),o(d,{id:"button1id",type:"text",class:"form-control mt-1 block w-full",placeholder:"button1id",modelValue:s(e).button1id,"onUpdate:modelValue":t[7]||(t[7]=a=>s(e).button1id=a),name:"button1id",autocomplete:"button1id"},null,8,["modelValue"]),o(u,{for:"button1id",class:"mt-2"})])]),l("div",R,[l("div",j,[o(n,{for:"button1class",value:"Button 1 Class"}),o(d,{id:"button1class",type:"text",class:"form-control mt-1 block w-full",placeholder:"button1class",modelValue:s(e).button1class,"onUpdate:modelValue":t[8]||(t[8]=a=>s(e).button1class=a),name:"button1class",autocomplete:"button1class"},null,8,["modelValue"]),o(u,{for:"button1class",class:"mt-2"})])]),l("div",O,[l("div",z,[o(n,{for:"button1route",value:"Button 1 Link"}),o(d,{id:"button1route",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:s(e).button1route,"onUpdate:modelValue":t[9]||(t[9]=a=>s(e).button1route=a),name:"button1route",autocomplete:"button1route"},null,8,["modelValue"]),o(u,{for:"button1route",class:"mt-2"})])]),l("div",P,[l("div",W,[o(n,{for:"button1status",value:"Button 1 Status"}),o(i,{id:"button1status",class:"form-control mt-1 block w-full",placeholder:"button1status",modelValue:s(e).button1status,"onUpdate:modelValue":t[10]||(t[10]=a=>s(e).button1status=a),name:"button1status",autocomplete:"button1status"},{default:m(()=>t[34]||(t[34]=[l("option",{value:"active"},"Active",-1),l("option",{value:"disable"},"Disable",-1)])),_:1},8,["modelValue"]),o(u,{for:"button1status",class:"mt-2"})])]),t[41]||(t[41]=l("div",{class:"col-xs-12 col-sm-12 col-md-4"},null,-1)),l("div",Y,[l("div",E,[o(n,{for:"button2",value:"Button 2 Text"}),o(d,{id:"button2",type:"text",class:"form-control mt-1 block w-full",placeholder:"Register",modelValue:s(e).button2,"onUpdate:modelValue":t[11]||(t[11]=a=>s(e).button2=a),name:"button2",autocomplete:"button2"},null,8,["modelValue"]),o(u,{for:"button2",class:"mt-2"})])]),l("div",G,[l("div",H,[o(n,{for:"button2id",value:"Button 2 ID"}),o(d,{id:"button2id",type:"text",class:"form-control mt-1 block w-full",placeholder:"button2id",modelValue:s(e).button2id,"onUpdate:modelValue":t[12]||(t[12]=a=>s(e).button2id=a),name:"button2id",autocomplete:"button2id"},null,8,["modelValue"]),o(u,{for:"button2id",class:"mt-2"})])]),l("div",J,[l("div",K,[o(n,{for:"button2class",value:"Button 2 Class"}),o(d,{id:"button2class",type:"text",class:"form-control mt-1 block w-full",placeholder:"button2class",modelValue:s(e).button2class,"onUpdate:modelValue":t[13]||(t[13]=a=>s(e).button2class=a),name:"button2class",autocomplete:"button2class"},null,8,["modelValue"]),o(u,{for:"button2class",class:"mt-2"})])]),l("div",Q,[l("div",X,[o(n,{for:"button2route",value:"Button 2 Link"}),o(d,{id:"button2route",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://domain.com",modelValue:s(e).button2route,"onUpdate:modelValue":t[14]||(t[14]=a=>s(e).button2route=a),name:"button2route",autocomplete:"button2route"},null,8,["modelValue"]),o(u,{for:"button2route",class:"mt-2"})])]),l("div",Z,[l("div",oo,[o(n,{for:"button2status",value:"Button 2 Status"}),o(i,{id:"button2status",class:"form-control mt-1 block w-full",placeholder:"button2status",modelValue:s(e).button2status,"onUpdate:modelValue":t[15]||(t[15]=a=>s(e).button2status=a),name:"button2status",autocomplete:"button2status"},{default:m(()=>t[35]||(t[35]=[l("option",{value:"active"},"Active",-1),l("option",{value:"disable"},"Disable",-1)])),_:1},8,["modelValue"]),o(u,{for:"button2status",class:"mt-2"})])]),t[42]||(t[42]=l("div",{class:"col-xs-12 col-sm-12 col-md-12 py-2 card card-body fw-bold font-bold text-dark bg-light w-full w-100 my-5"}," Social Network ",-1)),l("div",to,[l("div",lo,[o(n,{for:"facebook",value:"Facebook"}),o(d,{id:"facebook",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://facebook.com",modelValue:s(e).facebook,"onUpdate:modelValue":t[16]||(t[16]=a=>s(e).facebook=a),name:"facebook",autocomplete:"facebook"},null,8,["modelValue"]),o(u,{for:"facebook",class:"mt-2"})])]),l("div",eo,[l("div",so,[o(n,{for:"twitter",value:"Twitter"}),o(d,{id:"twitter",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://twitter.com",modelValue:s(e).twitter,"onUpdate:modelValue":t[17]||(t[17]=a=>s(e).twitter=a),name:"twitter",autocomplete:"twitter"},null,8,["modelValue"]),o(u,{for:"twitter",class:"mt-2"})])]),l("div",ao,[l("div",uo,[o(n,{for:"linkedin",value:"Linkedin"}),o(d,{id:"linkedin",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://linkedin.com",modelValue:s(e).linkedin,"onUpdate:modelValue":t[18]||(t[18]=a=>s(e).linkedin=a),name:"linkedin",autocomplete:"linkedin"},null,8,["modelValue"]),o(u,{for:"linkedin",class:"mt-2"})])]),l("div",no,[l("div",mo,[o(n,{for:"pinterest",value:"Pinterest"}),o(d,{id:"pinterest",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://pinterest.com",modelValue:s(e).pinterest,"onUpdate:modelValue":t[19]||(t[19]=a=>s(e).pinterest=a),name:"pinterest",autocomplete:"pinterest"},null,8,["modelValue"]),o(u,{for:"pinterest",class:"mt-2"})])]),l("div",ro,[l("div",io,[o(n,{for:"instagram",value:"Instagram"}),o(d,{id:"instagram",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://instagram.com",modelValue:s(e).instagram,"onUpdate:modelValue":t[20]||(t[20]=a=>s(e).instagram=a),name:"instagram",autocomplete:"instagram"},null,8,["modelValue"]),o(u,{for:"instagram",class:"mt-2"})])]),l("div",co,[l("div",po,[o(n,{for:"tiktok",value:"Tiktok"}),o(d,{id:"tiktok",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://tiktok.com",modelValue:s(e).tiktok,"onUpdate:modelValue":t[21]||(t[21]=a=>s(e).tiktok=a),name:"tiktok",autocomplete:"tiktok"},null,8,["modelValue"]),o(u,{for:"tiktok",class:"mt-2"})])]),l("div",fo,[l("div",bo,[o(n,{for:"whatsapp",value:"Whatsapp"}),o(d,{id:"whatsapp",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://whatsapp.com",modelValue:s(e).whatsapp,"onUpdate:modelValue":t[22]||(t[22]=a=>s(e).whatsapp=a),name:"whatsapp",autocomplete:"whatsapp"},null,8,["modelValue"]),o(u,{for:"whatsapp",class:"mt-2"})])]),l("div",vo,[l("div",Vo,[o(n,{for:"youtube",value:"Youtube"}),o(d,{id:"youtube",type:"text",class:"form-control mt-1 block w-full",placeholder:"https://youtube.com",modelValue:s(e).youtube,"onUpdate:modelValue":t[23]||(t[23]=a=>s(e).youtube=a),name:"youtube",autocomplete:"youtube"},null,8,["modelValue"]),o(u,{for:"youtube",class:"mt-2"})])]),t[43]||(t[43]=l("div",{class:"col-xs-12 col-sm-12 col-md-4"},null,-1)),t[44]||(t[44]=l("div",{class:"col-xs-12 col-sm-12 col-md-12 py-2 card card-body fw-bold font-bold text-dark bg-light w-full w-100 my-5"}," Advanced options ",-1)),l("div",ko,[l("div",go,[o(n,{for:"search",value:"Search"}),o(i,{id:"search",class:"form-control mt-1 block w-full",placeholder:"search",modelValue:s(e).search,"onUpdate:modelValue":t[24]||(t[24]=a=>s(e).search=a),name:"search",autocomplete:"search",required:""},{default:m(()=>t[36]||(t[36]=[l("option",{value:"0"},"False",-1),l("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),o(u,{for:"search",class:"mt-2"})])]),l("div",yo,[l("div",wo,[o(n,{for:"searchroute",value:"Search URL Callback"}),o(d,{id:"searchroute",type:"url",class:"form-control mt-1 block w-full",placeholder:"https://domain.com/search",modelValue:s(e).searchroute,"onUpdate:modelValue":t[25]||(t[25]=a=>s(e).searchroute=a),name:"searchroute",autocomplete:"searchroute",required:""},null,8,["modelValue"]),o(u,{for:"searchroute",class:"mt-2"})])]),l("div",xo,[l("div",ho,[o(n,{for:"menuclass",value:"Menu Class"}),o(d,{id:"menuclass",type:"text",class:"form-control mt-1 block w-full",placeholder:"menuclass",modelValue:s(e).menuclass,"onUpdate:modelValue":t[26]||(t[26]=a=>s(e).menuclass=a),name:"menuclass",autocomplete:"menuclass",required:""},null,8,["modelValue"]),o(u,{for:"menuclass",class:"mt-2"})])]),l("div",_o,[l("div",Uo,[o(n,{for:"menuid",value:"Menu ID"}),o(d,{id:"menuid",type:"text",class:"form-control mt-1 block w-full",placeholder:"menuid",modelValue:s(e).menuid,"onUpdate:modelValue":t[27]||(t[27]=a=>s(e).menuid=a),name:"menuid",autocomplete:"menuid",required:""},null,8,["modelValue"]),o(u,{for:"menuid",class:"mt-2"})])]),l("div",So,[l("div",Bo,[o(n,{for:"type",value:"Type"}),o(i,{id:"type",class:"form-control mt-1 block w-full",placeholder:"type",modelValue:s(e).type,"onUpdate:modelValue":t[28]||(t[28]=a=>s(e).type=a),name:"type",autocomplete:"type",required:""},{default:m(()=>t[37]||(t[37]=[l("option",{value:"navbar"},"Navbar",-1)])),_:1},8,["modelValue"]),o(u,{for:"type",class:"mt-2"})])]),l("div",Co,[l("div",To,[o(n,{for:"stickytop",value:"Sticky Top"}),o(i,{id:"stickytop",class:"form-control mt-1 block w-full",placeholder:"stickytop",modelValue:s(e).stickytop,"onUpdate:modelValue":t[29]||(t[29]=a=>s(e).stickytop=a),name:"stickytop",autocomplete:"stickytop",required:""},{default:m(()=>t[38]||(t[38]=[l("option",{value:"0"},"False",-1),l("option",{value:"1"},"True",-1)])),_:1},8,["modelValue"]),o(u,{for:"stickytop",class:"mt-2"})])]),l("div",qo,[o(g,{type:"submit",class:v(["btn btn-primary",{"opacity-25":s(e).processing}]),title:"Adicionar","aria-label":"Adicionar",disabled:s(e).processing},{default:m(()=>t[39]||(t[39]=[b("Adicionar")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Ho as default};