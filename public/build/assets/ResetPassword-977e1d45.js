import{T as f,o as c,d as w,b as o,u as e,w as l,F as _,Z as g,a as t,n as V,f as b,h as k}from"./app-7485cb55.js";import v from"./AuthenticationCard-70db1d90.js";import x from"./AuthenticationCardLogo-7999db1d.js";import m from"./InputError-9cb9d01f.js";import i from"./InputLabel-f7333d50.js";import y from"./PrimaryButton-bc5fb706.js";import n from"./TextInput-699b3d1e.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"mt-4"},$={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},h={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=f({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(q,a)=>(c(),w(_,null,[o(e(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(x)]),default:l(()=>[t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",P,[o(i,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",$,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[o(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>a[3]||(a[3]=[b(" Reset Password ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{h as default};