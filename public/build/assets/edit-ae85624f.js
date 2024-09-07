import{o as u,c as h,w as m,a as r,b as o,u as t,d as g,g as _,f as v,t as x,F as S,n as V,h as k}from"./app-7485cb55.js";import{u as y}from"./index-fc7176c5.js";import C from"./Button-406cbd9c.js";import n from"./Input-056eb611.js";import d from"./InputError-9cb9d01f.js";import N from"./Checkbox-16aaa615.js";import i from"./Label-99813df6.js";import B from"./ValidationErrors-7f856797.js";import O from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const T={class:"row"},U={class:"col-xs-12 col-sm-12 col-md-6"},j={class:"form-group"},z={class:"col-xs-12 col-sm-12 col-md-6"},A={class:"form-group"},F={class:"col-xs-12 col-sm-12 col-md-6"},E={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-6"},q={class:"form-group"},D={class:"col-xs-12 col-sm-12 col-md-12"},M={class:"form-group"},P={class:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3",id:"rowgrouproles"},R={class:"form-check"},G={class:"col-xs-12 col-sm-12 col-md-12 text-center"},re={__name:"edit",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,userid:"",username:String,useremail:String,userroles:Object,rolesall:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(l){const f=l,s=y({name:"",name:f.username,email:f.useremail,password:"",password_confirmation:"",roles:[]}),w=p=>{const e=new Array;$.each($('#rowgrouproles input[type="checkbox"]:checked'),function(a,b){var c=$(b).val();e.push(c)}),s.roles=e,s.transform(a=>({...a})).put(route("managerusers.update",{id:p.submitter.dataset.user}),{onFinish:()=>s.reset("password","password_confirmation")})};return(p,e)=>(u(),h(O,{menulang:l.menulang,menuitems:l.menuitems,avatar:l.avatar,role:l.role,name:l.name,version:l.version,breadcrumbCurrentTitle:l.breadcrumbCurrentTitle,breadcrumbCurrentSection:l.breadcrumbCurrentSection,title:l.title},{breadcrumb:m(()=>e[5]||(e[5]=[r("li",{class:"breadcrumb-item active","aria-current":"page"},"Criar",-1)])),default:m(()=>[o(B,{class:"mb-4"}),r("form",{onSubmit:k(w,["prevent"])},[r("div",T,[r("div",U,[r("div",j,[o(i,{for:"name",value:"Nome"}),o(n,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Nome",modelValue:t(s).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).name=a),name:"name",autocomplete:"name"},null,8,["modelValue"]),o(d,{for:"name",class:"mt-2"})])]),r("div",z,[r("div",A,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"form-control mt-1 block w-full",placeholder:"Email",modelValue:t(s).email,"onUpdate:modelValue":e[1]||(e[1]=a=>t(s).email=a),name:"email",autocomplete:"email"},null,8,["modelValue"]),o(d,{for:"email",class:"mt-2"})])]),r("div",F,[r("div",E,[o(i,{for:"password",value:"Nova senha"}),o(n,{id:"password",type:"password",class:"form-control mt-1 block w-full",placeholder:"Nova senha",modelValue:t(s).password,"onUpdate:modelValue":e[2]||(e[2]=a=>t(s).password=a),name:"password",autocomplete:"new-password"},null,8,["modelValue"]),o(d,{for:"password",class:"mt-2"})])]),r("div",L,[r("div",q,[o(i,{for:"password_confirmation",value:"Confirme a nova senha"}),o(n,{id:"password_confirmation",type:"password",class:"form-control mt-1 block w-full",placeholder:"Confirme a nova senha",modelValue:t(s).password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=a=>t(s).password_confirmation=a),name:"password_confirmation",autocomplete:"new-password"},null,8,["modelValue"]),o(d,{for:"password_confirmation",class:"mt-2"})])]),r("div",D,[r("div",M,[o(i,{for:"permissions",value:"Permissões"}),r("div",P,[(u(!0),g(S,null,_(l.rolesall,(a,b)=>(u(),g("div",R,[o(N,{class:"h-4 w-4 border border-gray-300 rounded-sm me-2 mr-2",type:"checkbox",id:"flexSelectOptionrow"+a.id,value:a.id,modelValue:t(s).roles,"onUpdate:modelValue":e[4]||(e[4]=c=>t(s).roles=c),name:"roles[]",checked:l.userroles.includes(a.name)==!0},null,8,["id","value","modelValue","checked"]),o(i,{class:"inline-block",for:"flexSelectOptionrow"+a.id},{default:m(()=>[v(x(a.name),1)]),_:2},1032,["for"])]))),256))])])]),r("div",G,[o(C,{type:"submit",class:V(["btn btn-primary",{"opacity-25":t(s).processing}]),title:"Atualizar","aria-label":"Atualizar","data-user":l.userid,disabled:t(s).processing},{default:m(()=>e[6]||(e[6]=[v("Atualizar")])),_:1},8,["data-user","class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{re as default};