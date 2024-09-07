import{H as T}from"./index-fc7176c5.js";import V from"./Banner-632dd745.js";import{r as O,o as f,d as y,b as p,u as F,a as i,t as v,p as C,e as D,f as x,F as E}from"./app-7485cb55.js";import B from"./navbar-8d63831d.js";import W from"./sidebar-7fbca1a3.js";import"./vue-the-mask-85fa20c8.js";(function(e){e(function(){e(".nav-settings").click(function(){e("#theme-settings").removeClass("open"),e("#right-sidebar").toggleClass("open")}),e(".settings-close").click(function(){e("#right-sidebar,#theme-settings,#color-settings").removeClass("open")}),e(".navbar-nav .nav-item.color-setting").on("click",function(){e("#right-sidebar").removeClass("open"),e("#theme-settings").toggleClass("open")});var a="navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink",r="sidebar-light sidebar-dark",o=e("body");e("#sidebar-light-theme").on("click",function(){o.removeClass(r),o.addClass("sidebar-light"),e(".sidebar-bg-options").removeClass("selected"),e(this).addClass("selected")}),e("#sidebar-dark-theme").on("click",function(){o.removeClass(r),o.addClass("sidebar-dark"),e(".sidebar-bg-options").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.primary").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-primary"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.success").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-success"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.warning").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-warning"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.danger").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-danger"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.pink").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-pink"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.info").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-info"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.dark").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-dark"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.default").on("click",function(){e(".navbar").removeClass(a),e(".tiles").removeClass("selected"),e(this).addClass("selected")})})})(jQuery);(function(e){e("#sparkline-line-chart").length&&e("#sparkline-line-chart").sparkline([5,6,7,9,9,5,3,2,2,4,6,7],{type:"line",width:"100%",height:"100%"}),e("#sparkline-bar-chart").length&&e("#sparkline-bar-chart").sparkline([5,6,7,2,0,-4,4],{type:"bar",height:"100%",barWidth:"58.5%",barColor:"#58D8A3",negBarColor:"#e56e72",zeroColor:"green"}),e("#sparkline-pie-chart").length&&e("#sparkline-pie-chart").sparkline([1,1,2,4],{type:"pie",sliceColors:["#0CB5F9","#58d8a3","#F4767B","#F9B65F"],borderColor:"#",width:"100%",height:"100%"}),e("#sparkline-bullet-chart").length&&e("#sparkline-bullet-chart").sparkline([10,12,12,9,7],{type:"bullet",height:"238",width:"100%"}),e("#sparkline-composite-chart").length&&e("#sparkline-composite-chart").sparkline([5,6,7,2,0,3,6,8,1,2,2,0,3,6],{type:"line",width:"100%",height:"100%"}),e("#sparkline-composite-chart").length&&e("#sparkline-composite-chart").sparkline([5,6,7,2,0,3,6,8,1,2,2,0,3,6],{type:"bar",height:"150px",width:"100%",barWidth:10,barSpacing:5,barColor:"#60a76d",negBarColor:"#60a76d",composite:!0}),e(".demo-sparkline").length&&e(".demo-sparkline").sparkline("html",{enableTagOptions:!0,width:"100%",height:"30px",fillColor:!1}),e(".top-seelling-dashboard-chart").length&&e(".top-seelling-dashboard-chart").sparkline("html",{enableTagOptions:!0,width:"100%",barWidth:30,fillColor:!1})})(jQuery);(function(e){e(".todo-list .todo-item"),e(".todo-list .todo-item:not(.edit-mode)").append('<div class="edit-icon"><i class="mdi mdi-pencil"></i></div>'),e(".edit-icon").on("click",function(){e(this).parent().addClass("edit-mode"),e(".todo-list .todo-item button[type='reset']").on("click",function(){e(this).closest(".todo-item").addClass("edit-mode")})})})(jQuery);(function(e){e(function(){var a=e(".todo-list"),r=e(".todo-list-input");e(".todo-list-add-btn").on("click",function(o){o.preventDefault();var n=e(this).prevAll(".todo-list-input").val();n&&(a.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>"+n+"<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>"),r.val(""))}),a.on("change",".checkbox",function(){e(this).attr("checked")?e(this).removeAttr("checked"):e(this).attr("checked","checked"),e(this).closest("li").toggleClass("completed")}),a.on("click",".remove",function(){e(this).parent().remove()})})})(jQuery);getComputedStyle(document.body).getPropertyValue("--primary");getComputedStyle(document.body).getPropertyValue("--secondary");getComputedStyle(document.body).getPropertyValue("--success");getComputedStyle(document.body).getPropertyValue("--warning");getComputedStyle(document.body).getPropertyValue("--danger");getComputedStyle(document.body).getPropertyValue("--info");getComputedStyle(document.body).getPropertyValue("--dark");getComputedStyle(document.body).getPropertyValue("--light");(function(e){e(function(){e("body").hasClass("dark-theme"),e("canvas").length&&(Chart.defaults.plugins.tooltip.enabled=!1,Chart.defaults.color="#354d66",Chart.defaults.font.family='"Poppins", sans-serif',Chart.defaults.plugins.tooltip.custom=function(t){var s=document.getElementById("chartjs-tooltip");if(s||(s=document.createElement("div"),s.id="chartjs-tooltip",s.innerHTML="<table></table>",document.body.appendChild(s)),t.opacity===0){s.style.opacity=0;return}s.classList.remove("above","below","no-transform"),t.yAlign?s.classList.add(t.yAlign):s.classList.add("no-transform");function l(b){return b.lines}if(t.body){var g=t.title||[],u=t.body.map(l),h="<thead>";g.forEach(function(b){h+="<tr><th>"+b+"</th></tr>"}),h+="</thead><tbody>",u.forEach(function(b,L){var S=t.labelColors[L],m="background:"+S.borderColor;m+="; border-color:"+S.borderColor,m+="; border-width: 2px";var _='<span style="'+m+'"></span>';h+="<tr><td>"+_+b+"</td></tr>"}),h+="</tbody>";var R=s.querySelector("table");R.innerHTML=h}var w=this._chart.canvas.getBoundingClientRect();s.style.opacity=1,s.style.position="absolute",s.style.left=w.left+window.pageXOffset+t.caretX+"px",s.style.top=w.top+window.pageYOffset+t.caretY+"px",s.style.fontFamily=t._bodyFontFamily,s.style.fontSize=t.bodyFontSize+"px",s.style.fontStyle=t._bodyFontStyle,s.style.padding=t.yPadding+"px "+t.xPadding+"px",s.style.pointerEvents="none"},Chart.defaults.plugins.legend.labels.fontStyle="italic",Chart.defaults.plugins.tooltip.intersect=!1);var a=e("body");if(e(".content-wrapper"),e(".container-scroller"),e(".footer"),e("#sidebar"),!e("#sidebar").hasClass("dynamic-active-class-disabled")){var r=location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g,"");e("#sidebar >.nav > li:not(.not-navigation-link) a").each(function(){var t=e(this);r===""?t.attr("href").indexOf("index.html")!==-1&&(e(this).parents(".nav-item").last().addClass("active"),e(this).parents(".sub-menu").length&&e(this).addClass("active")):t.attr("href").indexOf(r)!==-1&&(e(this).parents(".nav-item").last().addClass("active"),e(this).parents(".sub-menu").length&&e(this).addClass("active"),r!=="index.html"&&(e(this).parents(".nav-item").last().find(".nav-link").attr("aria-expanded","true"),e(this).parents(".sub-menu").length&&e(this).closest(".collapse").addClass("show")))})}function o(t){var s=window.location.href;s.split("/");var l=s.replace(/demo_.\d*/,t);window.location.href=l}e("#theme-light-switch").on("click",function(t){t.preventDefault(),o("demo_1")}),e("#theme-dark-switch").on("click",function(t){t.preventDefault(),o("demo_3")}),e(".email-wrapper .mail-list-container .mail-list").on("click",function(){e(".email-wrapper .mail-list-container").addClass("d-none"),e(".email-wrapper .mail-view").addClass("d-block")}),e(".email-wrapper .mail-back-button").on("click",function(){e(".email-wrapper .mail-list-container").removeClass("d-none"),e(".email-wrapper .mail-view").removeClass("d-block")}),e(".aside-toggler").on("click",function(){e(".mail-sidebar,.chat-list-wrapper").toggleClass("menu-open")}),e("#color-setting").on("click",function(){e("#color-settings").addClass("open")}),e("#layout-toggler").on("click",function(){e("#theme-settings").addClass("open")}),e("#chat-toggler").on("click",function(){e("#right-sidebar").addClass("open")}),e("#sidebar > .nav > .nav-item > a[data-toggle='collapse']").on("click",function(){e("#sidebar > .nav > .nav-item").find(".collapse.show").collapse("hide")}),n();function n(){a.hasClass("rtl")||(e(".settings-panel .tab-content .tab-pane.scroll-wrapper").length&&new PerfectScrollbar(".settings-panel .tab-content .tab-pane.scroll-wrapper"),e(".chats").length&&new PerfectScrollbar(".chats"),e(".scroll-container").length&&new PerfectScrollbar(".scroll-container"),a.hasClass("sidebar-fixed")&&new PerfectScrollbar("#sidebar .nav"),e(".ps-enabled").length&&new PerfectScrollbar(".ps-enabled"))}e('[data-toggle="minimize"]').on("click",function(){a.toggleClass("sidebar-icon-only")}),e(".form-check label,.form-radio label").append('<i class="input-helper"></i>')}),e(".sidebar .sidebar-inner > .nav > .nav-item").not(".brand-logo").attr("toggle-status","closed"),e(".sidebar .sidebar-inner > .nav > .nav-item").on("click",function(){e(".sidebar .sidebar-inner > .nav > .nav-item").removeClass("active"),e(this).addClass("active"),e(".sidebar .sidebar-inner > .nav > .nav-item").find(".submenu").removeClass("open"),e(".sidebar .sidebar-inner > .nav > .nav-item").not(this).attr("toggle-status","closed");var a=e(this).attr("toggle-status");a=="closed"?(e(this).find(".submenu").addClass("open"),e(this).attr("toggle-status","open")):(e(this).find(".submenu").removeClass("open"),e(this).not(".brand-logo").attr("toggle-status","closed"))})})(jQuery);(function(e){e(document).on("mouseenter mouseleave",".sidebar .nav-item",function(a){var r=e("body"),o=r.hasClass("sidebar-icon-only"),n=r.hasClass("horizontal-menu"),t=r.hasClass("sidebar-fixed"),s=e(this);"ontouchstart"in document.documentElement?(o||n)&&(a.type==="mouseenter"?s.addClass("hover-open"):s.removeClass("hover-open")):(o||n)&&(t?a.type==="mouseenter"&&r.removeClass("sidebar-icon-only"):a.type==="mouseenter"?s.addClass("hover-open"):s.removeClass("hover-open"))}),e(".navbar.horizontal-layout .navbar-menu-wrapper .navbar-toggler").on("click",function(){e(".navbar.horizontal-layout").toggleClass("header-toggled")})})(jQuery);(function(e){e(function(){e('[data-toggle="offcanvas"]').on("click",function(){e(".sidebar-offcanvas").toggleClass("active")})})})(jQuery);(function(e){function a(r,o,n){var t,s,l,g=[],u=[];for(t=0;t<o;t++)g.push({field:"field"+t,title:"Cell"+t});for(t=0;t<n;t++){for(l={},s=0;s<o;s++)l["field"+s]="Row-"+t+"-"+s;u.push(l)}r.bootstrapTable("destroy").bootstrapTable({columns:g,data:u})}e(function(){e("#table").lenght>0&&a(e("#table"),50,50)}),window.actionEvents={"click .like":function(r,o,n,t){alert("You click like icon, row: "+JSON.stringify(n)),console.log(o,n,t)},"click .edit":function(r,o,n,t){alert("You click edit icon, row: "+JSON.stringify(n)),console.log(o,n,t)},"click .remove":function(r,o,n,t){alert("You click remove icon, row: "+JSON.stringify(n)),console.log(o,n,t)}}})(jQuery);(function(e){e(function(){var a=getComputedStyle(document.body);e("#calendar").length&&e("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,basicWeek,basicDay"},locale:"en",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["SUN","MON","TUE","WED","THU","FRI","SAT"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["January","February","March","April","May","June","July","August","September","October","November","December"],defaultDate:"2017-07-12",navLinks:!0,editable:!0,eventLimit:!0,events:[{title:"All Day Event",start:"2017-07-01"},{title:"Long Event",start:"2017-07-07",end:"2017-07-10",color:a.getPropertyValue("--info")},{id:999,title:"Repeating Event",start:"2017-07-09T16:00:00",color:a.getPropertyValue("--danger")},{id:999,title:"Repeating Event",start:"2017-07-16T16:00:00",color:a.getPropertyValue("--info")},{title:"Conference",start:"2017-07-11",end:"2017-07-13"},{title:"Meeting",start:"2017-07-12T10:30:00",end:"2017-07-12T12:30:00",color:a.getPropertyValue("--danger")},{title:"Lunch",start:"2017-07-12T12:00:00"},{title:"Meeting",start:"2017-07-12T14:30:00"},{title:"Happy Hour",start:"2017-07-12T17:30:00"},{title:"Dinner",start:"2017-07-12T20:00:00"},{title:"Birthday Party",start:"2017-07-13T07:00:00"},{title:"Click for Google",url:"http://google.com/",start:"2017-07-28",color:a.getPropertyValue("--danger")}]})})})(jQuery);var c=getComputedStyle(document.body).getPropertyValue("--primary"),P=getComputedStyle(document.body).getPropertyValue("--secondary"),d=getComputedStyle(document.body).getPropertyValue("--success"),A=getComputedStyle(document.body).getPropertyValue("--warning"),k=getComputedStyle(document.body).getPropertyValue("--danger");getComputedStyle(document.body).getPropertyValue("--info");getComputedStyle(document.body).getPropertyValue("--dark");getComputedStyle(document.body).getPropertyValue("--light");(function(e){e(function(){var a={scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},elements:{point:{radius:1},line:{tension:0}},stepsize:100};if(e("#revenue-chart").length&&e("#revenue-chart").sparkline("html",{enableTagOptions:!0,width:"100%",height:"70",fillColor:"false",barWidth:2,barSpacing:10,chartRangeMin:0}),e("#dashboard-area-chart").length){var r=e("#dashboard-area-chart").get(0).getContext("2d"),o={labels:["0","1","2","3","4","5","6","7","8","9"],datasets:[{label:"Mês anterior",data:[3,3,8,5,7,4,6,4,6,3],backgroundColor:"#2196f3",borderColor:"#0c83e2",borderWidth:1,fill:!0},{label:"Mês atual",data:[7,5,14,7,12,6,10,6,11,5],backgroundColor:"#19d895",borderColor:"#15b67d",borderWidth:1,fill:!0}]},n={responsive:!0,maintainAspectRatio:!0,scales:{yAxes:[{gridLines:{color:"#F2F6F9"},ticks:{beginAtZero:!0,min:0,max:20,stepSize:10}}],xAxes:[{gridLines:{color:"#F2F6F9"},ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:2}},layout:{padding:{left:0,right:0,top:0,bottom:0}},stepsize:1};new Chart(r,{type:"line",data:o,options:n})}if(e("#trafficDoughnutChart").length){var t=e("#trafficDoughnutChart").get(0).getContext("2d"),s={datasets:[{data:[70,20],backgroundColor:[c,d],borderColor:[c,d]}],labels:["Chrome","Firefox","Safari","Opera","IE"]},l={cutoutPercentage:70,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0,maintainAspectRatio:!0,showScale:!0,legend:{display:!1},layout:{padding:{left:0,right:0,top:0,bottom:0}}};new Chart(t,{type:"doughnut",data:s,options:l})}if(e("#sourceLineChart").length){var g=e("#sourceLineChart").get(0).getContext("2d");new Chart(g,{type:"line",data:{labels:["2011","2012","2013","2014","2015","2016","2017","2018"],datasets:[{label:"Desktop",data:[0,16,3,5,2,12,9,3],borderColor:d,backgroundColor:d,borderWidth:2,fill:!1},{label:"Mobile",data:[0,23,7,12,40,17,26,13],borderColor:c,backgroundColor:c,borderWidth:2,fill:!1}]},options:{responsive:!0,animation:{animateScale:!0,animateRotate:!0},elements:{point:{radius:2}},layout:{padding:{left:0,right:0,top:0,bottom:0}},legend:!1,stepsize:20,scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)",display:!0}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0.05)",display:!0}}]}}})}if(e("#statistics-chart").length){var u=e("#statistics-chart").get(0).getContext("2d");new Chart(u,{type:"bar",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],datasets:[{label:"Revenue",data:[39,19,25,16,31,39,23,20,23,18],backgroundColor:d},{label:"Sales",data:[27,12,26,15,21,27,13,19,32,22],backgroundColor:c}]},options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{responsive:!0,maintainAspectRatio:!0,yAxes:[{stacked:!0,display:!1,gridLines:{color:"rgba(0, 0, 0, 0.03)"}}],xAxes:[{stacked:!0,display:!1,barPercentage:.3,gridLines:{display:!1}}]},legend:{display:!1}}})}if(e("#review-rating-1").length&&e("#review-rating-1").barrating({theme:"css-stars",showSelectedRating:!1,initialRating:4}),e("#review-rating-2").length&&e("#review-rating-2").barrating({theme:"css-stars",showSelectedRating:!1,initialRating:5}),e("#review-rating-3").length&&e("#review-rating-3").barrating({theme:"css-stars",showSelectedRating:!1,initialRating:3}),e("#review-rating-4").length&&e("#review-rating-4").barrating({theme:"css-stars",showSelectedRating:!1,initialRating:4}),e("#review-rating-5").length&&e("#review-rating-5").barrating({theme:"css-stars",showSelectedRating:!1,initialRating:2}),e("#trafficSourceDoughnutChart").length){var t=e("#trafficSourceDoughnutChart").get(0).getContext("2d"),s={datasets:[{data:[185,85,15],backgroundColor:["rgba(38,52,73,0.5)",d,k],borderColor:["rgba(38,52,73,0.1)",d,k]}],labels:["Human Resources","Manger","Other"]},l={cutoutPercentage:75,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0,maintainAspectRatio:!0,showScale:!0,legend:{display:!1},layout:{padding:{left:0,right:0,top:0,bottom:0}}};new Chart(t,{type:"doughnut",data:s,options:l})}if(e("#source-graph-1").length){var r=e("#source-graph-1").get(0).getContext("2d"),o={labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],datasets:[{label:"Profit",data:[1,3,7,4,1,9,6],borderColor:[A],borderWidth:2,fill:!1}]};new Chart(r,{type:"line",data:o,options:a})}if(e("#source-graph-2").length){var r=e("#source-graph-2").get(0).getContext("2d"),o={labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],datasets:[{label:"Profit",data:[1,4,8,3,4,6,1],borderColor:[d],borderWidth:2,fill:!1}]};new Chart(r,{type:"line",data:o,options:a})}if(e("#UsersDoughnutChart").length){var t=e("#UsersDoughnutChart").get(0).getContext("2d"),s={datasets:[{data:[80,34,100],backgroundColor:[d,c,P],borderColor:[d,c,P]}],labels:["Request","Email"]},l={cutoutPercentage:70,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0,maintainAspectRatio:!0,showScale:!0,legend:{display:!1},layout:{padding:{left:0,right:0,top:0,bottom:0}}};new Chart(t,{type:"doughnut",data:s,options:l})}if(e("#conversionBarChart").length){var u=e("#conversionBarChart").get(0).getContext("2d");new Chart(u,{type:"bar",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],datasets:[{label:"Amount Due",data:[39,19,25,16,31,39,12,18,33,24],backgroundColor:c,borderColor:c,borderWidth:0}]},options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},scales:{responsive:!0,maintainAspectRatio:!0,yAxes:[{display:!1,gridLines:{color:"rgba(0, 0, 0, 0.03)"}}],xAxes:[{display:!1,barPercentage:.4,gridLines:{display:!1}}]},legend:{display:!1}}})}if(e("#source-graph-3").length){var r=e("#source-graph-3").get(0).getContext("2d"),o={labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],datasets:[{label:"Profit",data:[8,12,5,4,1,12,4],borderColor:[k],borderWidth:2,fill:!1}]};new Chart(r,{type:"line",data:o,options:a})}if(e("#source-graph-4").length){var r=e("#source-graph-4").get(0).getContext("2d"),o={labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],datasets:[{label:"Profit",data:[6,9,3,4,2,5,6],borderColor:[A],borderWidth:2,fill:!1}]};new Chart(r,{type:"line",data:o,options:a})}if(e("#product-area-chart").length){var r=e("#product-area-chart").get(0).getContext("2d"),o={labels:["2013","2014","2014","2015","2016","2017","2018"],datasets:[{label:"Support",data:[150,200,150,220,350,275,365],backgroundColor:"rgba(52,110,240,0.7)",borderColor:"rgba(52,110,240,0.8)",borderWidth:2,fill:!0},{label:"Product",data:[300,400,300,440,700,550,730],backgroundColor:"rgba(0,187,248,0.7)",borderColor:"rgba(0,187,248,0.8)",borderWidth:2,fill:!0}]},n={scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},elements:{point:{radius:3},line:{tension:0}},stepsize:1};new Chart(r,{type:"line",data:o,options:n})}})})(jQuery);const j={class:"container-scroller",id:"app"},N={class:"container-fluid page-body-wrapper"},z={class:"main-panel"},Q={class:"content-wrapper"},J={class:"card"},I={class:"card-body"},U={key:0},Y={class:"card-title h3 fw-bold mb-0 pb-0"},M={"aria-label":"breadcrumb"},H={class:"breadcrumb pl-0 border-0"},q={class:"breadcrumb-item active"},X={class:"footer"},Z={class:"container-fluid clearfix"},G={class:"float-none float-sm-right d-block mt-1 mt-sm-0 text-center"},K={key:0},$={class:"modal fade",id:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ee={class:"modal-dialog"},te={class:"modal-content bg-white"},ae={class:"modal-body bg-white"},de={__name:"AppLayout",props:{title:String,canLogin:Boolean,canRegister:Boolean,breadcrumbCurrentTitle:String,breadcrumbCurrentSection:String,user:Object,menulang:Object,menuitems:Object,name:String,avatar:String,role:String,version:String,year:String},setup(e){return new Date().getFullYear(),O(!1),(a,r)=>(f(),y(E,null,[p(F(T),{title:e.title},null,8,["title"]),i("div",j,[p(B,{menulang:e.menulang,avatar:e.avatar,name:e.name,user:e.user},null,8,["menulang","avatar","name","user"]),i("div",N,[p(W,{menuitems:e.menuitems,avatar:e.avatar,name:e.name,role:e.role},null,8,["menuitems","avatar","name","role"]),i("div",z,[i("main",Q,[p(V),i("div",J,[i("div",I,[a.$slots.breadcrumb?(f(),y("header",U,[i("div",Y,v(e.breadcrumbCurrentTitle),1),i("nav",M,[i("ol",H,[r[0]||(r[0]=i("li",{class:"breadcrumb-item"},[i("a",{href:"/dashboard"},"Dashboard")],-1)),i("li",q,v(e.breadcrumbCurrentSection),1),C(a.$slots,"breadcrumb")])])])):D("",!0),C(a.$slots,"default")])])]),i("footer",X,[i("div",Z,[r[2]||(r[2]=i("span",{class:"text-muted d-block text-center text-sm-left d-sm-inline-block"},[x("Copyright © "),i("a",{href:"https://www.lochlite.com/",target:"_blank"},"The Lochlite & Lochpay Company")],-1)),i("span",G,[r[1]||(r[1]=i("a",{href:"https://www.lochlite.com/solutions/cms",target:"_blank"},"Lochlite CMS",-1)),x(" - Version "+v(e.version),1)])])])])])]),a.$slots.modal?(f(),y("div",K,[i("div",$,[i("div",ee,[i("div",te,[i("div",ae,[C(a.$slots,"modal")]),r[3]||(r[3]=i("div",{class:"modal-footer"},[i("button",{type:"button",class:"btn btn-dark bg-dark text-white","data-bs-dismiss":"modal"},"Close")],-1))])])])])):D("",!0)],64))}};export{de as default};