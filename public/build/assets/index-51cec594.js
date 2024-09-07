import{o as w,c as b,w as c,a as o,b as e,u as i,l as p,v as f,f as _,n as x,h as y}from"./app-7485cb55.js";import{u as V}from"./index-fc7176c5.js";import a from"./InputError-9cb9d01f.js";import n from"./Input-056eb611.js";import u from"./Select-8eaad69e.js";import d from"./Label-99813df6.js";import h from"./Button-406cbd9c.js";import k from"./ValidationErrors-7f856797.js";import U from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const S={class:"card card-body shadow-sm mb-4"},C={class:"row"},T={class:"col-xs-12 col-sm-12 col-md-4"},q={class:"form-group"},$={class:"col-xs-12 col-sm-12 col-md-4"},B={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-4"},O={class:"form-group"},j={class:"col-xs-12 col-sm-12 col-md-4"},D={class:"form-group"},F={class:"col-xs-12 col-sm-12 col-md-4"},N={class:"form-group"},A={class:"col-xs-12 col-sm-12 col-md-4"},K={class:"form-group"},M={class:"col-xs-12 col-sm-12 col-md-12"},R={class:"form-group"},z={class:"card card-body shadow-sm mt-4 mb-2"},G={class:"row"},I={class:"col-xs-12 col-sm-12 col-md-12"},L={class:"form-group"},P={class:"card card-body shadow-sm mt-4 mb-2"},W={class:"row"},H={class:"col-xs-12 col-sm-12 col-md-12"},J={class:"form-group"},Q={class:"card card-body shadow-sm mt-4 mb-2"},X={class:"row"},Y={class:"col-xs-12 col-sm-12 col-md-4"},Z={class:"form-group"},oo={class:"col-xs-12 col-sm-12 col-md-8"},to={class:"form-group"},eo={class:"col-xs-12 col-sm-12 col-md-4"},lo={class:"form-group"},io={class:"col-xs-12 col-sm-12 col-md-4"},so={class:"form-group"},ro={class:"col-xs-12 col-sm-12 col-md-4"},ao={class:"form-group"},no={class:"col-xs-12 col-sm-12 col-md-12"},mo={class:"form-group"},co={class:"card card-body shadow-sm mt-4 mb-3"},uo={class:"row"},po={class:"col-xs-12 col-sm-12 col-md-4"},fo={class:"form-group"},vo={class:"col-xs-12 col-sm-12 col-md-8"},go={class:"form-group"},wo={class:"col-xs-12 col-sm-12 col-md-4"},bo={class:"form-group"},_o={class:"col-xs-12 col-sm-12 col-md-4"},xo={class:"form-group"},yo={class:"col-xs-12 col-sm-12 col-md-4"},Vo={class:"form-group"},ho={class:"col-xs-12 col-sm-12 col-md-12"},ko={class:"form-group"},Uo={class:"col-xs-12 col-sm-12 col-md-12 text-center"},Ko={__name:"index",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object,seo:Object},setup(m){const r=m,l=V({title:r.seo.title,keywords:r.seo.keywords,author:r.seo.author,description:r.seo.description,translate:r.seo.translate,robots:r.seo.robots,google_site_verification:r.seo.google_site_verification,pdomain_verify:r.seo.pdomain_verify,ogtype:r.seo.ogtype,ogurl:r.seo.ogurl,ogtitle:r.seo.ogtitle,ogdescription:r.seo.ogdescription,ogimage:r.seo.ogimage,fbapp_id:r.seo.fbapp_id,twittercard:r.seo.twittercard,twitterurl:r.seo.twitterurl,twittertitle:r.seo.twittertitle,twitterdescription:r.seo.twitterdescription,twitterimage:r.seo.twitterimage,twittersite:r.seo.twittersite,msapplicationtilecolor:r.seo.msapplicationtilecolor,themecolor:r.seo.themecolor,favicon:r.seo.icon}),g=()=>{l.transform(v=>({...v})).post(route("managerseo.store"))};return(v,t)=>(w(),b(U,{menulang:m.menulang,menuitems:m.menuitems,avatar:m.avatar,role:m.role,name:m.name,version:m.version,breadcrumbCurrentTitle:m.breadcrumbCurrentTitle,breadcrumbCurrentSection:m.breadcrumbCurrentSection,title:m.title},{breadcrumb:c(()=>t[21]||(t[21]=[o("li",{class:"breadcrumb-item active","aria-current":"page"},"Default SEO Setup",-1)])),default:c(()=>[e(k,{class:"mb-4"}),o("form",{onSubmit:y(g,["prevent"])},[o("div",S,[t[24]||(t[24]=o("div",{class:"card-header boder-0 mb-2"},"Basic",-1)),o("div",C,[o("div",T,[o("div",q,[e(d,{for:"title",value:"Title"}),e(n,{id:"title",type:"text",class:"form-control mt-1 block w-full",placeholder:"title",modelValue:i(l).title,"onUpdate:modelValue":t[0]||(t[0]=s=>i(l).title=s),name:"title",autocomplete:"title",required:""},null,8,["modelValue"]),e(a,{for:"title",class:"mt-2"})])]),o("div",$,[o("div",B,[e(d,{for:"keywords",value:"Keywords"}),e(n,{id:"keywords",type:"text",class:"form-control mt-1 block w-full",placeholder:"Keywords",modelValue:i(l).keywords,"onUpdate:modelValue":t[1]||(t[1]=s=>i(l).keywords=s),name:"keywords",autocomplete:"keywords",required:""},null,8,["modelValue"]),e(a,{for:"keywords",class:"mt-2"})])]),o("div",E,[o("div",O,[e(d,{for:"author",value:"Author"}),e(n,{id:"author",type:"text",class:"form-control mt-1 block w-full",placeholder:"Author",modelValue:i(l).author,"onUpdate:modelValue":t[2]||(t[2]=s=>i(l).author=s),name:"author",autocomplete:"author",required:""},null,8,["modelValue"]),e(a,{for:"author",class:"mt-2"})])]),o("div",j,[o("div",D,[e(d,{for:"favicon",value:"Favicon"}),e(n,{id:"favicon",type:"url",class:"form-control mt-1 block w-full",placeholder:"favicon",modelValue:i(l).favicon,"onUpdate:modelValue":t[3]||(t[3]=s=>i(l).favicon=s),name:"favicon",autocomplete:"favicon"},null,8,["modelValue"]),e(a,{for:"favicon",class:"mt-2"})])]),o("div",F,[o("div",N,[e(d,{for:"robots",value:"Robots"}),e(u,{id:"robots",class:"form-control mt-1 block w-full",placeholder:"robots",modelValue:i(l).robots,"onUpdate:modelValue":t[4]||(t[4]=s=>i(l).robots=s),name:"robots",autocomplete:"robots"},{default:c(()=>t[22]||(t[22]=[o("option",{value:"index,follow"},"index, follow ",-1),o("option",{value:"noindex,nofollow"},"noindex, nofollow ",-1),o("option",{value:"index"},"index ",-1),o("option",{value:"noindex"},"noindex ",-1),o("option",{value:"follow"},"follow ",-1),o("option",{value:"nofollow"},"nofollow ",-1),o("option",{value:"noodp"},"noodp ",-1),o("option",{value:"noarchive"},"noarchive ",-1),o("option",{value:"nosnippet"},"nosnippet ",-1),o("option",{value:"noimageindex"},"noimageindex ",-1),o("option",{value:"index,nofollow"},"index, nofollow ",-1),o("option",{value:"noindex,follow"},"noindex, follow ",-1),o("option",{value:"noodp,noarchive"},"noodp, noarchive ",-1),o("option",{value:"nosnippet,noimageindex"},"nosnippet, noimageindex ",-1),o("option",{value:"noodp,noarchive,nosnippet,noimageindex"},"noodp, noarchive, nosnippet, noimageindex ",-1),o("option",{value:"noindex,nofollow,noodp,noarchive,nosnippet,noimageindex"},"noindex, nofollow, noodp, noarchive, nosnippet, noimageindex ",-1)])),_:1},8,["modelValue"]),e(a,{for:"robots",class:"mt-2"})])]),o("div",A,[o("div",K,[e(d,{for:"translate",value:"Translate"}),e(u,{id:"translate",class:"form-control mt-1 block w-full",placeholder:"translate",modelValue:i(l).translate,"onUpdate:modelValue":t[5]||(t[5]=s=>i(l).translate=s),name:"translate",autocomplete:"translate"},{default:c(()=>t[23]||(t[23]=[o("option",{value:"translate"},"translate ",-1),o("option",{value:"notranslate"},"notranslate ",-1)])),_:1},8,["modelValue"]),e(a,{for:"translate",class:"mt-2"})])]),o("div",M,[o("div",R,[e(d,{for:"description",value:"Description"}),p(o("textarea",{id:"description",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":t[6]||(t[6]=s=>i(l).description=s),name:"description",autocomplete:"",required:""},null,512),[[f,i(l).description]]),e(a,{for:"description",class:"mt-2"})])])])]),o("div",z,[t[25]||(t[25]=o("div",{class:"card-header boder-0 mb-2"},"Google",-1)),o("div",G,[o("div",I,[o("div",L,[e(d,{for:"google_site_verification",value:"google-site-verification"}),e(n,{id:"google_site_verification",type:"text",class:"form-control mt-1 block w-full",placeholder:"google_site_verification",modelValue:i(l).google_site_verification,"onUpdate:modelValue":t[7]||(t[7]=s=>i(l).google_site_verification=s),name:"google_site_verification",autocomplete:"google_site_verification"},null,8,["modelValue"]),e(a,{for:"google_site_verification",class:"mt-2"})])])])]),o("div",P,[t[26]||(t[26]=o("div",{class:"card-header boder-0 mb-2"},"Pinterest",-1)),o("div",W,[o("div",H,[o("div",J,[e(d,{for:"pdomain_verify",value:"p:domain_verify"}),e(n,{id:"pdomain_verify",type:"text",class:"form-control mt-1 block w-full",placeholder:"pdomain_verify",modelValue:i(l).pdomain_verify,"onUpdate:modelValue":t[8]||(t[8]=s=>i(l).pdomain_verify=s),name:"pdomain_verify",autocomplete:"pdomain_verify"},null,8,["modelValue"]),e(a,{for:"pdomain_verify",class:"mt-2"})])])])]),o("div",Q,[t[28]||(t[28]=o("div",{class:"card-header boder-0 mb-2"},"Twitter",-1)),o("div",X,[o("div",Y,[o("div",Z,[e(d,{for:"twittercard",value:"twitter:card"}),e(u,{id:"twittercard",class:"form-control mt-1 block w-full",placeholder:"twittercard",modelValue:i(l).twittercard,"onUpdate:modelValue":t[9]||(t[9]=s=>i(l).twittercard=s),name:"twittercard",autocomplete:"twittercard"},{default:c(()=>t[27]||(t[27]=[o("option",{value:"summary"},"summary",-1),o("option",{value:"summary_large_image"},"summary_large_image",-1),o("option",{value:"app"},"app",-1),o("option",{value:"player"},"player",-1)])),_:1},8,["modelValue"]),e(a,{for:"twittercard",class:"mt-2"})])]),o("div",oo,[o("div",to,[e(d,{for:"twittertitle",value:"twitter:title"}),e(n,{id:"twittertitle",type:"text",class:"form-control mt-1 block w-full",placeholder:"twittertitle",modelValue:i(l).twittertitle,"onUpdate:modelValue":t[10]||(t[10]=s=>i(l).twittertitle=s),name:"twittertitle",autocomplete:"twittertitle"},null,8,["modelValue"]),e(a,{for:"twittertitle",class:"mt-2"})])]),o("div",eo,[o("div",lo,[e(d,{for:"twitterurl",value:"twitter:url"}),e(n,{id:"twitterurl",type:"url",class:"form-control mt-1 block w-full",placeholder:"twitterurl",modelValue:i(l).twitterurl,"onUpdate:modelValue":t[11]||(t[11]=s=>i(l).twitterurl=s),name:"twitterurl",autocomplete:"twitterurl"},null,8,["modelValue"]),e(a,{for:"twitterurl",class:"mt-2"})])]),o("div",io,[o("div",so,[e(d,{for:"twittersite",value:"twitter:site"}),e(n,{id:"twittersite",type:"text",class:"form-control mt-1 block w-full",placeholder:"twittersite",modelValue:i(l).twittersite,"onUpdate:modelValue":t[12]||(t[12]=s=>i(l).twittersite=s),name:"twittersite",autocomplete:"twittersite"},null,8,["modelValue"]),e(a,{for:"twittersite",class:"mt-2"})])]),o("div",ro,[o("div",ao,[e(d,{for:"twitterimage",value:"twitter:image"}),e(n,{id:"twitterimage",type:"url",class:"form-control mt-1 block w-full",placeholder:"twitterimage",modelValue:i(l).twitterimage,"onUpdate:modelValue":t[13]||(t[13]=s=>i(l).twitterimage=s),name:"twitterimage",autocomplete:"twitterimage"},null,8,["modelValue"]),e(a,{for:"twitterimage",class:"mt-2"})])]),o("div",no,[o("div",mo,[e(d,{for:"twitterdescription",value:"twitter:description"}),p(o("textarea",{id:"twitterdescription",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":t[14]||(t[14]=s=>i(l).twitterdescription=s),name:"twitterdescription",autocomplete:""},null,512),[[f,i(l).twitterdescription]]),e(a,{for:"twitterdescription",class:"mt-2"})])])])]),o("div",co,[t[30]||(t[30]=o("div",{class:"card-header boder-0 mb-2"},"Facebook, Instagram, Whatsapp, Viber, Telegram and outhers",-1)),o("div",uo,[o("div",po,[o("div",fo,[e(d,{for:"ogtype",value:"og:type"}),e(u,{id:"ogtype",class:"form-control mt-1 block w-full",placeholder:"ogtype",modelValue:i(l).ogtype,"onUpdate:modelValue":t[15]||(t[15]=s=>i(l).ogtype=s),name:"ogtype",autocomplete:"ogtype"},{default:c(()=>t[29]||(t[29]=[o("option",{value:"website"},"website ",-1),o("option",{value:"article"},"article ",-1),o("option",{value:"book"},"book ",-1),o("option",{value:"profile"},"profile ",-1),o("option",{value:"video"},"video ",-1),o("option",{value:"music"},"music ",-1)])),_:1},8,["modelValue"]),e(a,{for:"ogtype",class:"mt-2"})])]),o("div",vo,[o("div",go,[e(d,{for:"ogtitle",value:"og:title"}),e(n,{id:"ogtitle",type:"text",class:"form-control mt-1 block w-full",placeholder:"ogtitle",modelValue:i(l).ogtitle,"onUpdate:modelValue":t[16]||(t[16]=s=>i(l).ogtitle=s),name:"ogtitle",autocomplete:"ogtitle"},null,8,["modelValue"]),e(a,{for:"ogtitle",class:"mt-2"})])]),o("div",wo,[o("div",bo,[e(d,{for:"ogurl",value:"og:url"}),e(n,{id:"ogurl",type:"url",class:"form-control mt-1 block w-full",placeholder:"ogurl",modelValue:i(l).ogurl,"onUpdate:modelValue":t[17]||(t[17]=s=>i(l).ogurl=s),name:"ogurl",autocomplete:"ogurl"},null,8,["modelValue"]),e(a,{for:"ogurl",class:"mt-2"})])]),o("div",_o,[o("div",xo,[e(d,{for:"ogimage",value:"og:image"}),e(n,{id:"ogimage",type:"url",class:"form-control mt-1 block w-full",placeholder:"ogimage",modelValue:i(l).ogimage,"onUpdate:modelValue":t[18]||(t[18]=s=>i(l).ogimage=s),name:"ogimage",autocomplete:"ogimage"},null,8,["modelValue"]),e(a,{for:"ogimage",class:"mt-2"})])]),o("div",yo,[o("div",Vo,[e(d,{for:"fbapp_id",value:"fb:app_id"}),e(n,{id:"fbapp_id",type:"text",class:"form-control mt-1 block w-full",placeholder:"fbapp_id",modelValue:i(l).fbapp_id,"onUpdate:modelValue":t[19]||(t[19]=s=>i(l).fbapp_id=s),name:"fbapp_id",autocomplete:"fbapp_id"},null,8,["modelValue"]),e(a,{for:"fbapp_id",class:"mt-2"})])]),o("div",ho,[o("div",ko,[e(d,{for:"ogdescription",value:"og:description"}),p(o("textarea",{id:"ogdescription",class:"form-control mt-1 block w-full",placeholder:"Escreva a descrição que aparecerá nos buscadores","onUpdate:modelValue":t[20]||(t[20]=s=>i(l).ogdescription=s),name:"ogdescription",autocomplete:""},null,512),[[f,i(l).ogdescription]]),e(a,{for:"ogdescription",class:"mt-2"})])])])]),o("div",Uo,[e(h,{type:"submit",class:x(["btn btn-primary",{"opacity-25":i(l).processing}]),title:"Update","aria-label":"Update",disabled:i(l).processing},{default:c(()=>t[31]||(t[31]=[_("Update")])),_:1},8,["class","disabled"])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{Ko as default};
