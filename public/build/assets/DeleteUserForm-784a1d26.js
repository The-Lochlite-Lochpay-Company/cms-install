import{r as m,T as y,o as w,c as _,w as o,f as s,a as i,b as r,u as l,M as k,n as v}from"./app-7485cb55.js";import x from"./ActionSection-2ba3d291.js";import c from"./DangerButton-7aeb2fe1.js";import g from"./DialogModal-d0ed3206.js";import C from"./InputError-9cb9d01f.js";import D from"./SecondaryButton-e7d33719.js";import b from"./TextInput-699b3d1e.js";import"./SectionTitle-1e2ad9a3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-ea0c2bfd.js";const V={class:"mt-5"},$={class:"mt-4"},z={__name:"DeleteUserForm",setup(A){const n=m(!1),a=m(null),t=y({password:""}),p=()=>{n.value=!0,setTimeout(()=>a.value.focus(),250)},d=()=>{t.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>a.value.focus(),onFinish:()=>t.reset()})},u=()=>{n.value=!1,t.reset()};return(U,e)=>(w(),_(x,null,{title:o(()=>e[1]||(e[1]=[s(" Delete Account ")])),description:o(()=>e[2]||(e[2]=[s(" Permanently delete your account. ")])),content:o(()=>[e[8]||(e[8]=i("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1)),i("div",V,[r(c,{onClick:p},{default:o(()=>e[3]||(e[3]=[s(" Delete Account ")])),_:1})]),r(g,{show:n.value,onClose:u},{title:o(()=>e[4]||(e[4]=[s(" Delete Account ")])),content:o(()=>[e[5]||(e[5]=s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")),i("div",$,[r(b,{ref_key:"passwordInput",ref:a,modelValue:l(t).password,"onUpdate:modelValue":e[0]||(e[0]=f=>l(t).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:k(d,["enter"])},null,8,["modelValue"]),r(C,{message:l(t).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(D,{onClick:u},{default:o(()=>e[6]||(e[6]=[s(" Cancel ")])),_:1}),r(c,{class:v(["ms-3",{"opacity-25":l(t).processing}]),disabled:l(t).processing,onClick:d},{default:o(()=>e[7]||(e[7]=[s(" Delete Account ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};
