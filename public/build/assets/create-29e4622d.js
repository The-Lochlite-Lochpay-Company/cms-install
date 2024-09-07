import{o as u,c as v,w as m,a as s,b as o,u as t,d as p,g as _,f as b,t as h,F as x,n as V,h as S}from"./app-7485cb55.js";import{u as y}from"./index-fc7176c5.js";import C from"./Button-406cbd9c.js";import n from"./Input-056eb611.js";import d from"./InputError-9cb9d01f.js";import k from"./Checkbox-16aaa615.js";import i from"./Label-99813df6.js";import N from"./ValidationErrors-7f856797.js";import B from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const q={class:"row"},O={class:"col-xs-12 col-sm-12 col-md-6"},T={class:"form-group"},U={class:"col-xs-12 col-sm-12 col-md-6"},F={class:"form-group"},R={class:"col-xs-12 col-sm-12 col-md-6"},j={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-6"},P={class:"form-group"},L={class:"col-xs-12 col-sm-12 col-md-12"},z={class:"form-group"},A={class:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3",id:"rowgrouproles"},D={class:"form-check"},M={class:"col-xs-12 col-sm-12 col-md-12 text-center"},se={__name:"create",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,roles:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(l){const r=y({name:"",email:"",password:"",password_confirmation:"",roles:[]}),w=()=>{const c=new Array;$.each($('#rowgrouproles input[type="checkbox"]:checked'),function(e,a){var f=$(a).val();c.push(f)}),r.roles=c,r.transform(e=>({...e})).post(route("managerusers.store"),{onFinish:()=>r.reset("password","password_confirmation")})};return(c,e)=>(u(),v(B,{menulang:l.menulang,menuitems:l.menuitems,avatar:l.avatar,role:l.role,name:l.name,version:l.version,breadcrumbCurrentTitle:l.breadcrumbCurrentTitle,breadcrumbCurrentSection:l.breadcrumbCurrentSection,title:l.title},{breadcrumb:m(()=>e[5]||(e[5]=[s("li",{class:"breadcrumb-item active","aria-current":"page"},"Create",-1)])),default:m(()=>[o(N,{class:"mb-4"}),s("form",{onSubmit:S(w,["prevent"])},[s("div",q,[s("div",O,[s("div",T,[o(i,{for:"name",value:"Name"}),o(n,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Name",modelValue:t(r).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).name=a),name:"name",autocomplete:"name",required:""},null,8,["modelValue"]),o(d,{for:"name",class:"mt-2"})])]),s("div",U,[s("div",F,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"form-control mt-1 block w-full",placeholder:"Email",modelValue:t(r).email,"onUpdate:modelValue":e[1]||(e[1]=a=>t(r).email=a),name:"email",autocomplete:"email",required:""},null,8,["modelValue"]),o(d,{for:"email",class:"mt-2"})])]),s("div",R,[s("div",j,[o(i,{for:"password",value:"New Password"}),o(n,{id:"password",type:"password",class:"form-control mt-1 block w-full",placeholder:"New Password",modelValue:t(r).password,"onUpdate:modelValue":e[2]||(e[2]=a=>t(r).password=a),name:"password",autocomplete:"new-password",required:""},null,8,["modelValue"]),o(d,{for:"password",class:"mt-2"})])]),s("div",E,[s("div",P,[o(i,{for:"password_confirmation",value:"Confirm the new password"}),o(n,{id:"password_confirmation",type:"password",class:"form-control mt-1 block w-full",placeholder:"Confirm the new password",modelValue:t(r).password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=a=>t(r).password_confirmation=a),name:"password_confirmation",autocomplete:"new-password",required:""},null,8,["modelValue"]),o(d,{for:"password_confirmation",class:"mt-2"})])]),s("div",L,[s("div",z,[o(i,{for:"permissions",value:"Permissions"}),s("div",A,[(u(!0),p(x,null,_(l.roles,(a,f)=>(u(),p("div",D,[o(k,{class:"h-4 w-4 border border-gray-300 rounded-sm me-2 mr-2",type:"checkbox",id:"flexSelectOptionrow"+a.id,value:a.id,modelValue:t(r).roles,"onUpdate:modelValue":e[4]||(e[4]=g=>t(r).roles=g),name:"roles[]"},null,8,["id","value","modelValue"]),o(i,{class:"inline-block",for:"flexSelectOptionrow"+a.id},{default:m(()=>[b(h(a.name),1)]),_:2},1032,["for"])]))),256))])])]),s("div",M,[o(C,{type:"submit",class:V(["btn btn-primary",{"opacity-25":t(r).processing}]),title:"Register","aria-label":"Register",disabled:t(r).processing},{default:m(()=>e[6]||(e[6]=[b("Register")])),_:1},8,["class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{se as default};
