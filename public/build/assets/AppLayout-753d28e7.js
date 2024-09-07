import{r as M,o as s,d as a,b as n,u as w,a as t,w as o,c as f,e as d,n as y,t as g,h as v,F as h,g as c,p as x,Z as S,i as C,f as i,q as $}from"./app-7485cb55.js";import B from"./ApplicationMark-a4cacc12.js";import L from"./Banner-632dd745.js";import _ from"./Dropdown-f0ac81e4.js";import m from"./DropdownLink-8d56b776.js";import P from"./NavLink-fcde02a3.js";import p from"./ResponsiveNavLink-880270b8.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},F={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},N={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},D={class:"flex justify-between h-16"},V={class:"flex"},z={class:"shrink-0 flex items-center"},O={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},I={class:"hidden sm:flex sm:items-center sm:ms-6"},q={class:"ms-3 relative"},E={class:"inline-flex rounded-md"},J={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Z={class:"w-60"},G=["onSubmit"],H={class:"flex items-center"},K={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Q={class:"ms-3 relative"},R={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},U=["src","alt"],W={key:1,class:"inline-flex rounded-md"},X={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Y={class:"-me-2 flex items-center sm:hidden"},ee={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},te={class:"pt-2 pb-3 space-y-1"},re={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},se={class:"flex items-center px-4"},oe={key:0,class:"shrink-0 me-3"},ae=["src","alt"],ne={class:"font-medium text-base text-gray-800 dark:text-gray-200"},ie={class:"font-medium text-sm text-gray-500"},de={class:"mt-3 space-y-1"},le=["onSubmit"],ue={class:"flex items-center"},pe={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ge={key:0,class:"bg-white dark:bg-gray-800 shadow"},me={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},xe={__name:"AppLayout",props:{title:String},setup(j){const u=M(!1),b=r=>{$.put(route("current-team.update"),{team_id:r.id},{preserveState:!1})},k=()=>{$.post(route("logout"))};return(r,e)=>(s(),a("div",null,[n(w(S),{title:j.title},null,8,["title"]),n(L),t("div",A,[t("nav",F,[t("div",N,[t("div",D,[t("div",V,[t("div",z,[n(w(C),{href:r.route("dashboard")},{default:o(()=>[n(B,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",O,[n(P,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:o(()=>e[1]||(e[1]=[i(" Dashboard ")])),_:1},8,["href","active"])])]),t("div",I,[t("div",q,[r.$page.props.jetstream.hasTeamFeatures?(s(),f(_,{key:0,align:"right",width:"60"},{trigger:o(()=>[t("span",E,[t("button",J,[i(g(r.$page.props.auth.user.current_team.name)+" ",1),e[2]||(e[2]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]),content:o(()=>[t("div",Z,[e[8]||(e[8]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),n(m,{href:r.route("teams.show",r.$page.props.auth.user.current_team)},{default:o(()=>e[3]||(e[3]=[i(" Team Settings ")])),_:1},8,["href"]),r.$page.props.jetstream.canCreateTeams?(s(),f(m,{key:0,href:r.route("teams.create")},{default:o(()=>e[4]||(e[4]=[i(" Create New Team ")])),_:1},8,["href"])):d("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),a(h,{key:1},[e[6]||(e[6]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[7]||(e[7]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),a(h,null,c(r.$page.props.auth.user.all_teams,l=>(s(),a("form",{key:l.id,onSubmit:v(T=>b(l),["prevent"])},[n(m,{as:"button"},{default:o(()=>[t("div",H,[l.id==r.$page.props.auth.user.current_team_id?(s(),a("svg",K,e[5]||(e[5]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):d("",!0),t("div",null,g(l.name),1)])]),_:2},1024)],40,G))),128))],64)):d("",!0)])]),_:1})):d("",!0)]),t("div",Q,[n(_,{align:"right",width:"48"},{trigger:o(()=>[r.$page.props.jetstream.managesProfilePhotos?(s(),a("button",R,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,U)])):(s(),a("span",W,[t("button",X,[i(g(r.$page.props.auth.user.name)+" ",1),e[9]||(e[9]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]),content:o(()=>[e[13]||(e[13]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),n(m,{href:r.route("profile.show")},{default:o(()=>e[10]||(e[10]=[i(" Profile ")])),_:1},8,["href"]),r.$page.props.jetstream.hasApiFeatures?(s(),f(m,{key:0,href:r.route("api-tokens.index")},{default:o(()=>e[11]||(e[11]=[i(" API Tokens ")])),_:1},8,["href"])):d("",!0),e[14]||(e[14]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t("form",{onSubmit:v(k,["prevent"])},[n(m,{as:"button"},{default:o(()=>e[12]||(e[12]=[i(" Log Out ")])),_:1})],32)]),_:1})])]),t("div",Y,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:e[0]||(e[0]=l=>u.value=!u.value)},[(s(),a("svg",ee,[t("path",{class:y({hidden:u.value,"inline-flex":!u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:y({hidden:!u.value,"inline-flex":u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:y([{block:u.value,hidden:!u.value},"sm:hidden"])},[t("div",te,[n(p,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:o(()=>e[15]||(e[15]=[i(" Dashboard ")])),_:1},8,["href","active"])]),t("div",re,[t("div",se,[r.$page.props.jetstream.managesProfilePhotos?(s(),a("div",oe,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,ae)])):d("",!0),t("div",null,[t("div",ne,g(r.$page.props.auth.user.name),1),t("div",ie,g(r.$page.props.auth.user.email),1)])]),t("div",de,[n(p,{href:r.route("profile.show"),active:r.route().current("profile.show")},{default:o(()=>e[16]||(e[16]=[i(" Profile ")])),_:1},8,["href","active"]),r.$page.props.jetstream.hasApiFeatures?(s(),f(p,{key:0,href:r.route("api-tokens.index"),active:r.route().current("api-tokens.index")},{default:o(()=>e[17]||(e[17]=[i(" API Tokens ")])),_:1},8,["href","active"])):d("",!0),t("form",{method:"POST",onSubmit:v(k,["prevent"])},[n(p,{as:"button"},{default:o(()=>e[18]||(e[18]=[i(" Log Out ")])),_:1})],32),r.$page.props.jetstream.hasTeamFeatures?(s(),a(h,{key:1},[e[24]||(e[24]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[25]||(e[25]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),n(p,{href:r.route("teams.show",r.$page.props.auth.user.current_team),active:r.route().current("teams.show")},{default:o(()=>e[19]||(e[19]=[i(" Team Settings ")])),_:1},8,["href","active"]),r.$page.props.jetstream.canCreateTeams?(s(),f(p,{key:0,href:r.route("teams.create"),active:r.route().current("teams.create")},{default:o(()=>e[20]||(e[20]=[i(" Create New Team ")])),_:1},8,["href","active"])):d("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),a(h,{key:1},[e[22]||(e[22]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[23]||(e[23]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),a(h,null,c(r.$page.props.auth.user.all_teams,l=>(s(),a("form",{key:l.id,onSubmit:v(T=>b(l),["prevent"])},[n(p,{as:"button"},{default:o(()=>[t("div",ue,[l.id==r.$page.props.auth.user.current_team_id?(s(),a("svg",pe,e[21]||(e[21]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):d("",!0),t("div",null,g(l.name),1)])]),_:2},1024)],40,le))),128))],64)):d("",!0)],64)):d("",!0)])])],2)]),r.$slots.header?(s(),a("header",ge,[t("div",me,[x(r.$slots,"header")])])):d("",!0),t("main",null,[x(r.$slots,"default")])])]))}};export{xe as default};