import{o as u,c as _,w as m,a as r,b as o,u as l,d as w,g as h,f as g,t as x,F as S,n as V,h as k}from"./app-7485cb55.js";import{u as y}from"./index-fc7176c5.js";import C from"./Button-406cbd9c.js";import n from"./Input-056eb611.js";import d from"./InputError-9cb9d01f.js";import U from"./Checkbox-16aaa615.js";import i from"./Label-99813df6.js";import N from"./ValidationErrors-7f856797.js";import B from"./AppLayout-eb7b661f.js";import"./Banner-632dd745.js";import"./navbar-8d63831d.js";import"./vue-the-mask-85fa20c8.js";import"./sidebar-7fbca1a3.js";const O={class:"row"},T={class:"col-xs-12 col-sm-12 col-md-6"},j={class:"form-group"},E={class:"col-xs-12 col-sm-12 col-md-6"},F={class:"form-group"},P={class:"col-xs-12 col-sm-12 col-md-6"},L={class:"form-group"},q={class:"col-xs-12 col-sm-12 col-md-6"},z={class:"form-group"},A={class:"col-xs-12 col-sm-12 col-md-12"},D={class:"form-group"},M={class:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3",id:"rowgrouproles"},R={class:"form-check"},G={class:"col-xs-12 col-sm-12 col-md-12 text-center"},re={__name:"edit",props:{canLogin:Boolean,canRegister:Boolean,title:String,status:String,name:String,role:String,avatar:String,version:String,userid:"",username:String,useremail:String,userroles:Object,rolesall:Object,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,menulang:Object,menuitems:Object},setup(t){const f=t,a=y({name:"",name:f.username,email:f.useremail,password:"",password_confirmation:"",roles:[]}),v=p=>{const e=new Array;$.each($('#rowgrouproles input[type="checkbox"]:checked'),function(s,b){var c=$(b).val();e.push(c)}),a.roles=e,a.transform(s=>({...s})).put(route("managerusers.update",{id:p.submitter.dataset.user}),{onFinish:()=>a.reset("password","password_confirmation")})};return(p,e)=>(u(),_(B,{menulang:t.menulang,menuitems:t.menuitems,avatar:t.avatar,role:t.role,name:t.name,version:t.version,breadcrumbCurrentTitle:t.breadcrumbCurrentTitle,breadcrumbCurrentSection:t.breadcrumbCurrentSection,title:t.title},{breadcrumb:m(()=>e[5]||(e[5]=[r("li",{class:"breadcrumb-item active","aria-current":"page"},"Editing",-1)])),default:m(()=>[o(N,{class:"mb-4"}),r("form",{onSubmit:k(v,["prevent"])},[r("div",O,[r("div",T,[r("div",j,[o(i,{for:"name",value:"Name"}),o(n,{id:"name",type:"text",class:"form-control mt-1 block w-full",placeholder:"Name",modelValue:l(a).name,"onUpdate:modelValue":e[0]||(e[0]=s=>l(a).name=s),name:"name",autocomplete:"name"},null,8,["modelValue"]),o(d,{for:"name",class:"mt-2"})])]),r("div",E,[r("div",F,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"form-control mt-1 block w-full",placeholder:"Email",modelValue:l(a).email,"onUpdate:modelValue":e[1]||(e[1]=s=>l(a).email=s),name:"email",autocomplete:"email"},null,8,["modelValue"]),o(d,{for:"email",class:"mt-2"})])]),r("div",P,[r("div",L,[o(i,{for:"password",value:"New Password"}),o(n,{id:"password",type:"password",class:"form-control mt-1 block w-full",placeholder:"New Password",modelValue:l(a).password,"onUpdate:modelValue":e[2]||(e[2]=s=>l(a).password=s),name:"password",autocomplete:"new-password"},null,8,["modelValue"]),o(d,{for:"password",class:"mt-2"})])]),r("div",q,[r("div",z,[o(i,{for:"password_confirmation",value:"Confirm the new password"}),o(n,{id:"password_confirmation",type:"password",class:"form-control mt-1 block w-full",placeholder:"Confirm the new password",modelValue:l(a).password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=s=>l(a).password_confirmation=s),name:"password_confirmation",autocomplete:"new-password"},null,8,["modelValue"]),o(d,{for:"password_confirmation",class:"mt-2"})])]),r("div",A,[r("div",D,[o(i,{for:"permissions",value:"Permissions"}),r("div",M,[(u(!0),w(S,null,h(t.rolesall,(s,b)=>(u(),w("div",R,[o(U,{class:"h-4 w-4 border border-gray-300 rounded-sm me-2 mr-2",type:"checkbox",id:"flexSelectOptionrow"+s.id,value:s.id,modelValue:l(a).roles,"onUpdate:modelValue":e[4]||(e[4]=c=>l(a).roles=c),name:"roles[]",checked:t.userroles.includes(s.name)==!0},null,8,["id","value","modelValue","checked"]),o(i,{class:"inline-block",for:"flexSelectOptionrow"+s.id},{default:m(()=>[g(x(s.name),1)]),_:2},1032,["for"])]))),256))])])]),r("div",G,[o(C,{type:"submit",class:V(["btn btn-primary",{"opacity-25":l(a).processing}]),title:"Update","aria-label":"Update","data-user":t.userid,disabled:l(a).processing},{default:m(()=>e[6]||(e[6]=[g("Update")])),_:1},8,["data-user","class","disabled"])])])],32)]),_:1},8,["menulang","menuitems","avatar","role","name","version","breadcrumbCurrentTitle","breadcrumbCurrentSection","title"]))}};export{re as default};
