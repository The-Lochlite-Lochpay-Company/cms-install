import{r as u,T as b,o as r,d as a,b as o,u as t,w as m,F as n,Z as C,a as i,f as l,h as p,n as h,j as w}from"./app-7485cb55.js";import V from"./AuthenticationCard-70db1d90.js";import T from"./AuthenticationCardLogo-7999db1d.js";import v from"./InputError-9cb9d01f.js";import _ from"./InputLabel-f7333d50.js";import $ from"./PrimaryButton-bc5fb706.js";import g from"./TextInput-699b3d1e.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},Z={__name:"TwoFactorChallenge",setup(N){const c=u(!1),e=b({code:"",recovery_code:""}),f=u(null),y=u(null),k=async()=>{c.value^=!0,await w(),c.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(j,s)=>(r(),a(n,null,[o(t(C),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[c.value?(r(),a(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(r(),a(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:p(x,["prevent"])},[c.value?(r(),a("div",B,[o(_,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":s[1]||(s[1]=d=>t(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(r(),a("div",U,[o(_,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":s[0]||(s[0]=d=>t(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",onClick:p(k,["prevent"])},[c.value?(r(),a(n,{key:1},[l(" Use an authentication code ")],64)):(r(),a(n,{key:0},[l(" Use a recovery code ")],64))]),o($,{class:h(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>s[2]||(s[2]=[l(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};