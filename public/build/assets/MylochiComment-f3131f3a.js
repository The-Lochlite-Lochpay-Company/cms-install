import{o as u,d as c,a as e,h,l as v,v as g,u as i,n as p,b as x,w as P,f,t as m,e as y,x as S,F as k,g as C}from"./app-7485cb55.js";import{u as j,L as z}from"./index-fc7176c5.js";import B from"./ValidationErrors-7f856797.js";import{p as w}from"./purify.es-68816782.js";import"./arrive-097f24c0.js";import{E as O,d as D,P as _}from"./Picker-9453055f.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"flex justify-start mb-2 border-t border-gray-100"},I={key:0,class:"flex w-full mt-1 pt-2 pl-5"},L=["data-post","disabled"],N=["data-post","disabled"],U={key:1,class:"flex w-full mt-1 pt-2 pl-5"},V={class:"dropdown flex justify-end w-full mt-1 pt-2 pr-5"},A={id:"dropdownsherepost",class:"dropdown-menu z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700","aria-labelledby":"dropdownsherepost"},R={class:"py-1 text-sm text-dark dark:text-gray-200","aria-labelledby":"dropdownDefault"},q=["href"],W=["href"],G=["href"],J={class:"flex w-full border-t border-gray-100"},K={class:"mt-3 mx-5 flex flex-row"},Q={class:"flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center"},X={class:"ml-1 text-gray-400 font-thin text-ms"},Y={class:"flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center"},Z={class:"ml-1 text-gray-400 font-thin text-ms"},F={class:"mt-3 mx-5 w-full flex justify-end"},ee={class:"flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center"},te={class:"ml-1 text-gray-400 font-thin text-ms"},oe={class:"flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center"},se={class:"ml-1 text-gray-400 font-thin text-ms"},ne=["src"],re={class:"absolute inset-y-0 right-0 flex items-center pr-6"},ie=["data-post","disabled"],ae={key:1,class:"mb-4 font-medium text-sm text-green-600"},de={class:"bg-white flex justify-center items-center"},le={class:"bg-white w-full mx-5 px-3 py-2 flex flex-col space-y-2",id:"group-comment"},ue={class:"flex items-center space-x-2 main-comment"},ce={class:"flex flex-shrink-0 self-start"},me=["src"],fe={class:"flex items-center justify-center space-x-2"},he={class:"block"},ve={class:"bg-gray-100 w-auto rounded-xl px-2 pb-2"},pe={class:"font-medium"},be={class:"hover:underline text-md"},ge=["data-body"],xe={class:"flex justify-start items-center text-xs w-full"},we={class:"font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1"},ye={class:"hover:underline"};let E=new O(D);const ke={components:{Picker:_},data(){return{emojiIndex:E,emojisOutput:"",showEmojiPicker:!1}},methods:{addEmoji(r){function l(o,d){if(document.selection)o.focus(),sel=document.selection.createRange(),sel.text=d;else if(window.navigator.userAgent.indexOf("Edge")>-1){var a=o.selectionStart,n=o.selectionEnd;o.value=o.value.substring(0,a)+d+o.value.substring(n,o.value.length);var t=a+d.length;o.focus(),o.setSelectionRange(t,t)}else if(o.selectionStart||o.selectionStart=="0"){var a=o.selectionStart,n=o.selectionEnd;o.value=o.value.substring(0,a)+d+o.value.substring(n,o.value.length)}else o.value+=d;b(o,"input")}function b(o,d){if("createEvent"in document){var a=document.createEvent("HTMLEvents");a.initEvent(d,!1,!0),o.dispatchEvent(a)}else{var a=document.createEventObject();a.eventType=d,o.fireEvent("on"+a.eventType,a)}}l(this.$refs.textarea,r.native)},toggleEmojiPicker(){this.showEmojiPicker=!this.showEmojiPicker}}},je=Object.assign(ke,{__name:"MylochiComment",props:{user:Object,post:Object,comments:Object,likes:Object,deslikes:Object,voted:Boolean,status:""},setup(r){const l=j({comment:""}),b=n=>{l.transform(t=>({...t,comment:Base64.encode(w.sanitize($("textarea#newcomment").val()))})).post(route("sendcomment",{id:n.submitter.dataset.post}),{onFinish:()=>l.reset()})},o=j({type:"upvote"}),d=n=>{o.transform(t=>({...t,id:n.submitter.dataset.id,type:n.submitter.dataset.type})).post(route("sendvotes",{id:n.submitter.dataset.post}))};function a(n){var t=Math.floor((new Date-n)/1e3),s=t/31536e3;return s>1?Math.floor(s)+" years":(s=t/2592e3,s>1?Math.floor(s)+" months":(s=t/86400,s>1?Math.floor(s)+" days":(s=t/3600,s>1?Math.floor(s)+" hours":(s=t/60,s>1?Math.floor(s)+" minutes":Math.floor(t)+" seconds"))))}return $("body").ready(function(){$("body").on("keyup keydown change input","#newcomment",function(){$(this).css("height","auto").css("height",this.scrollHeight+(this.offsetHeight-this.clientHeight))}),$.each($("#group-comment > div.main-comment"),function(n,t){var s=$(t).find("div.body-comment"),M=$(s).data("body");$(s).html(w.sanitize(Base64.decode(M)))}),$("#group-comment").arrive("div.main-comment",function(){var n=$(this).find("div.body-comment"),t=$(n).data("body");$(n).html(w.sanitize(Base64.decode(t)))})}),(n,t)=>(u(),c(k,null,[e("div",H,[r.user?(u(),c("div",I,[e("form",{id:"addnewupvote",onSubmit:h(d,["prevent"])},[v(e("input",{type:"hidden",class:"form-control",name:"type","onUpdate:modelValue":t[0]||(t[0]=s=>i(o).type=s)},null,512),[[g,i(o).type]]),e("button",{type:"submit",class:p(["text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 mr-3",{"opacity-25":i(o).processing||r.voted==!0}]),"data-type":"upvote","data-post":r.post.id,disabled:i(o).processing||r.voted==!0},t[5]||(t[5]=[e("i",{class:"fa-solid fa-thumbs-up w-5 h-5"},null,-1)]),10,L)],32),e("form",{id:"addnewdownvote",onSubmit:h(d,["prevent"])},[v(e("input",{type:"hidden",class:"form-control",name:"type","onUpdate:modelValue":t[1]||(t[1]=s=>i(o).type=s)},null,512),[[g,i(o).type]]),e("button",{type:"submit",class:p(["text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800",{"opacity-25":i(o).processing||r.voted==!0}]),"data-type":"downvote","data-post":r.post.id,disabled:i(o).processing||r.voted==!0},t[6]||(t[6]=[e("i",{class:"fa-solid fa-thumbs-down w-5 h-5"},null,-1)]),10,N)],32)])):(u(),c("div",U,[x(i(z),{href:n.route("login.index"),class:"border border-blue-700 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:text-white hover:outline-none focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-3"},{default:P(()=>t[7]||(t[7]=[f(" Faça login para comentar ")])),_:1},8,["href"])])),e("div",V,[t[8]||(t[8]=e("button",{class:"transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2","data-bs-toggle":"dropdown","data-dropdown-toggle":"dropdownsherepost",id:"dropdownDefault","aria-expanded":"false","aria-haspopup":"true",type:"button"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"14px",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})])],-1)),e("div",A,[e("ul",R,[e("li",null,[e("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+n.route(n.route().current(),{id:r.post.url}),class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},"Facebook",8,q)]),e("li",null,[e("a",{href:"https://twitter.com/intent/tweet?url="+n.route(n.route().current(),{id:r.post.url}),class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},"Twitter",8,W)]),e("li",null,[e("a",{href:"whatsapp://send?text="+n.route(n.route().current(),{id:r.post.url}),class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},"Whatsapp",8,G)])])])])]),e("div",J,[e("div",K,[e("div",Q,[t[9]||(t[9]=f("Comentários:")),e("div",X,m(r.comments.length),1)]),e("div",Y,[t[10]||(t[10]=f("Visualizações: ")),e("div",Z,m(r.post.views),1)])]),e("div",F,[e("div",ee,[t[11]||(t[11]=f("Likes: ")),e("div",te,m(r.post.upvote),1)]),e("div",oe,[t[12]||(t[12]=f("Deslikes: ")),e("div",se,m(r.post.downvote),1)])])]),r.user?(u(),c("form",{key:0,class:"relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400",onSubmit:h(b,["prevent"])},[e("img",{class:"w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer",alt:"User avatar",src:r.user.avatar},null,8,ne),e("span",re,[e("button",{type:"button",class:p(["p-1 focus:outline-none focus:shadow-none hover:text-blue-500",{triggered:n.showEmojiPicker}]),onMousedown:t[2]||(t[2]=h((...s)=>n.toggleEmojiPicker&&n.toggleEmojiPicker(...s),["prevent"]))},t[13]||(t[13]=[e("svg",{class:"w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)]),34),e("button",{type:"submit",class:p(["p-1 focus:outline-none focus:shadow-none hover:text-blue-500 ml-2 mr-3",{"opacity-25":i(l).processing}]),"data-post":r.post.id,disabled:i(l).processing},t[14]||(t[14]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)]),10,ie)]),v(e("textarea",{id:"newcomment",class:"h-10 w-full px-3 py-1.5 w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue",style:{"border-radius":"25px"},placeholder:"Post a comment...","onUpdate:modelValue":t[3]||(t[3]=s=>i(l).comment=s),name:"comment",ref:"textarea",onInput:t[4]||(t[4]=s=>n.$emit("input",s.target.value)),autocomplete:"",required:""},null,544),[[g,i(l).comment]])],32)):y("",!0),x(B,{class:"mb-4"}),r.status?(u(),c("div",ae,m(r.status),1)):y("",!0),v(x(i(_),{data:i(E),emoji:"point_up",onSelect:n.addEmoji,title:"Pick your emoji…"},null,8,["data","onSelect"]),[[S,n.showEmojiPicker]]),e("div",de,[e("div",le,[(u(!0),c(k,null,C(r.comments,s=>(u(),c("div",ue,[e("div",ce,[e("img",{src:s.avatar,alt:"",class:"h-8 w-8 object-cover rounded-full"},null,8,me)]),e("div",fe,[e("div",he,[e("div",ve,[e("div",pe,[e("div",be,[e("small",null,m(s.name),1)])]),e("div",{class:"text-sm body-comment","data-body":s.comment},null,8,ge)]),e("div",xe,[e("div",we,[t[15]||(t[15]=e("small",{class:"self-center"},".",-1)),e("div",ye,[e("small",null,m(a(new Date(s.created_at))),1)])])])])])]))),256))])])],64))}}),ze=T(je,[["__scopeId","data-v-58f3235b"]]);export{ze as default};
