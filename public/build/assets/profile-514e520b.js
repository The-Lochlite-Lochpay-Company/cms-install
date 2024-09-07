import{X as h,o as r,c as g,w as o,u as i,a as t,n as x,d as _,t as l,b as u,f as d}from"./app-7485cb55.js";import{L as m}from"./index-fc7176c5.js";import w from"./AppLayout-923f5918.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./Banner-632dd745.js";import"./navbar-20a37e4c.js";import"./sidebar-5dc9f196.js";const b={class:"container"},y={class:"card card-body bg-white dark:bg-gray-800 py-3 px-4"},k={class:"bg-background rounded-md section-1 h-52 md:h-64"},p={class:"px-6 pt-14 mt-8 absolute z-10 flex"},j={class:"relative w-16 h-16 md:w-28 md:h-28"},z=["src"],B={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},M={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},S={class:"relative mx-4 bottom-2 px-2 md:px-0 py-3 md:py-10 font-mono text-xl md:text-2xl text-gray-300"},C={class:"font-bold fw-bold"},V={class:"my-2 flex space-x-4"},L=["href"],N={class:"w-full py-4 px-8 bg-white dark:bg-gray-800 shadow-sm dark:shadow-md rounded-lg my-20"},O={class:"flex justify-center md:justify-end -mt-16"},T={class:"text-dark dark:text-white"},E={class:"h4 font-normal text-dark dark:text-white text-3xl"},A={class:"w-full py-4 px-8 bg-white dark:bg-gray-800 shadow-sm dark:shadow-md rounded-lg my-20"},D={class:"flex justify-center md:justify-end -mt-16"},I={class:"text-dark dark:text-white"},P={class:"h4 font-normal text-dark dark:text-white text-3xl"},X={__name:"profile",props:{title:String,lang:String,status:String,mynotifications:Object,user:Object,email:String,name:String,avatar:String,wallpaper:String,customersarea:Object},setup(e){h(a=>({"1cc7fae6":i(c),b9635dba:f}));const n=e,c=n.customersarea.themecolor,f="url("+(n.wallpaper??"/application/wallpaper.jpg")+")";return(a,s)=>(r(),g(w,{totalmessages:e.mynotifications.total,customersarea:e.customersarea,lang:e.lang,user:e.user,name:e.name,email:e.email,avatar:e.avatar,title:e.title},{default:o(()=>[t("div",b,[t("div",y,[t("div",k,[t("div",p,[t("div",j,[t("img",{src:e.avatar,class:"cat rounded-full w-full h-full border-theming border-2 border-blue-500"},null,8,z),t("div",{class:x([{"bg-green-600":!e.user.email_verified_at==null,"bg-red-500":e.user.email_verified_at==null},"absolute w-4 h-4 right-0 md:right-2 bottom-1 md:bottom-2 rounded-full text-white text-xs text-center leading-4"])},[!e.user.email_verified_at==null?(r(),_("svg",B,s[0]||(s[0]=[t("title",null,"This account is verified",-1),t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},null,-1)]))):(r(),_("svg",M,s[1]||(s[1]=[t("title",null,"This account has not been verified",-1),t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])))],2)]),t("div",S,[t("p",C,l(e.name),1),t("div",V,[t("a",{href:a.route("dashboard.editprofile")+"?tab=photo"},s[2]||(s[2]=[t("span",{class:"bg-blue-600 text-gray-200 text-xs px-2 py-1 rounded-full"},"Editar foto",-1)]),8,L)])])])]),t("div",N,[t("div",O,[u(i(m),{href:a.route("dashboard.editprofile")+"?tab=address",class:"p-2 rounded-full border-2 border-theming"},{default:o(()=>s[3]||(s[3]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1)])),_:1},8,["href"])]),t("address",T,[t("div",E,l(e.user.address??"________________________________"),1),d(" "+l(e.user.city??"__________")+" "+l(e.user.state??"_____________")+" "+l(e.user.country??"_____________")+" ",1),s[4]||(s[4]=t("br",null,null,-1)),d(" "+l(e.user.zipcode??"_____________")+" ",1),s[5]||(s[5]=t("br",null,null,-1))]),s[6]||(s[6]=t("div",{class:"flex justify-end mt-4"},[t("div",{class:"text-xl font-medium text-theming"},"Address")],-1))]),t("div",A,[t("div",D,[u(i(m),{href:a.route("dashboard.editprofile")+"?tab=personal",class:"p-2 rounded-full border-2 border-theming"},{default:o(()=>s[7]||(s[7]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1)])),_:1},8,["href"])]),t("div",I,[t("div",P,l(e.user.name??"________")+" "+l(e.user.last_name??"________ ________"),1),d(" "+l(e.user.email??"_______ @ _____ . ___")+" "+l(e.user.phone??"+__ (__) _____________")+" ",1),s[8]||(s[8]=t("br",null,null,-1))]),s[9]||(s[9]=t("div",{class:"flex justify-end mt-4"},[t("div",{class:"text-xl font-medium text-theming"},"Personal information")],-1))])])])]),_:1},8,["totalmessages","customersarea","lang","user","name","email","avatar","title"]))}},Q=v(X,[["__scopeId","data-v-94664971"]]);export{Q as default};
