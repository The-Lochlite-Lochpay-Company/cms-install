(()=>{var e={65:function(e,r,t){var n,o,i;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==a(o=function(e){if("object"!=a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=a(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?o:String(o),n)}var o}function r(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function o(e,r){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},o(e,r)}function i(e,r,t){return i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(e,n));return t&&o(i,t.prototype),i},i.apply(null,arguments)}function u(e){var r="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return i(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},u(e)}var c=String.prototype.replace,l=/%20/g,s="RFC3986",f={default:s,formatters:{RFC1738:function(e){return c.call(e,l,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:s},p=Object.prototype.hasOwnProperty,d=Array.isArray,y=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),h=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(t[n]=e[n]);return t},m={arrayToObject:h,assign:function(e,r){return Object.keys(r).reduce((function(e,t){return e[t]=r[t],e}),e)},combine:function(e,r){return[].concat(e,r)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var o=r[n],i=o.obj[o.prop],u=Object.keys(i),c=0;c<u.length;++c){var l=u[c],s=i[l];"object"==a(s)&&null!==s&&-1===t.indexOf(s)&&(r.push({obj:i,prop:l}),t.push(s))}return function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(d(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}}(r),e},decode:function(e,r,t){var n=e.replace(/\+/g," ");if("iso-8859-1"===t)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,r,t,n,o){if(0===e.length)return e;var i=e;if("symbol"==a(e)?i=Symbol.prototype.toString.call(e):"string"!=typeof e&&(i=String(e)),"iso-8859-1"===t)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var u="",c=0;c<i.length;++c){var l=i.charCodeAt(c);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===f.RFC1738&&(40===l||41===l)?u+=i.charAt(c):l<128?u+=y[l]:l<2048?u+=y[192|l>>6]+y[128|63&l]:l<55296||l>=57344?u+=y[224|l>>12]+y[128|l>>6&63]+y[128|63&l]:(l=65536+((1023&l)<<10|1023&i.charCodeAt(c+=1)),u+=y[240|l>>18]+y[128|l>>12&63]+y[128|l>>6&63]+y[128|63&l])}return u},isBuffer:function(e){return!(!e||"object"!=a(e)||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,r){if(d(e)){for(var t=[],n=0;n<e.length;n+=1)t.push(r(e[n]));return t}return r(e)},merge:function e(r,t,n){if(!t)return r;if("object"!=a(t)){if(d(r))r.push(t);else{if(!r||"object"!=a(r))return[r,t];(n&&(n.plainObjects||n.allowPrototypes)||!p.call(Object.prototype,t))&&(r[t]=!0)}return r}if(!r||"object"!=a(r))return[r].concat(t);var o=r;return d(r)&&!d(t)&&(o=h(r,n)),d(r)&&d(t)?(t.forEach((function(t,o){if(p.call(r,o)){var i=r[o];i&&"object"==a(i)&&t&&"object"==a(t)?r[o]=e(i,t,n):r.push(t)}else r[o]=t})),r):Object.keys(t).reduce((function(r,o){var i=t[o];return r[o]=p.call(r,o)?e(r[o],i,n):i,r}),o)}},v=Object.prototype.hasOwnProperty,b={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},g=Array.isArray,O=String.prototype.split,w=Array.prototype.push,j=function(e,r){w.apply(e,g(r)?r:[r])},S=Date.prototype.toISOString,P=f.default,x={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:m.encode,encodeValuesOnly:!1,format:P,formatter:f.formatters[P],indices:!1,serializeDate:function(e){return S.call(e)},skipNulls:!1,strictNullHandling:!1},k=function e(r,t,n,o,i,u,c,l,s,f,p,d,y,h){var v,b=r;if("function"==typeof c?b=c(t,b):b instanceof Date?b=f(b):"comma"===n&&g(b)&&(b=m.maybeMap(b,(function(e){return e instanceof Date?f(e):e}))),null===b){if(o)return u&&!y?u(t,x.encoder,h,"key",p):t;b=""}if("string"==typeof(v=b)||"number"==typeof v||"boolean"==typeof v||"symbol"==a(v)||"bigint"==typeof v||m.isBuffer(b)){if(u){var w=y?t:u(t,x.encoder,h,"key",p);if("comma"===n&&y){for(var S=O.call(String(b),","),P="",k=0;k<S.length;++k)P+=(0===k?"":",")+d(u(S[k],x.encoder,h,"value",p));return[d(w)+"="+P]}return[d(w)+"="+d(u(b,x.encoder,h,"value",p))]}return[d(t)+"="+d(String(b))]}var E,N=[];if(void 0===b)return N;if("comma"===n&&g(b))E=[{value:b.length>0?b.join(",")||null:void 0}];else if(g(c))E=c;else{var A=Object.keys(b);E=l?A.sort(l):A}for(var D=0;D<E.length;++D){var R=E[D],C="object"==a(R)&&void 0!==R.value?R.value:b[R];if(!i||null!==C){var _=g(b)?"function"==typeof n?n(t,R):t:t+(s?"."+R:"["+R+"]");j(N,e(C,_,n,o,i,u,c,l,s,f,p,d,y,h))}}return N},E=Object.prototype.hasOwnProperty,N=Array.isArray,A={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:m.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},D=function(e){return e.replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(parseInt(r,10))}))},R=function(e,r){return e&&"string"==typeof e&&r.comma&&e.indexOf(",")>-1?e.split(","):e},C=function(e,r,t,n){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=t.depth>0&&/(\[[^[\]]*])/.exec(o),u=a?o.slice(0,a.index):o,c=[];if(u){if(!t.plainObjects&&E.call(Object.prototype,u)&&!t.allowPrototypes)return;c.push(u)}for(var l=0;t.depth>0&&null!==(a=i.exec(o))&&l<t.depth;){if(l+=1,!t.plainObjects&&E.call(Object.prototype,a[1].slice(1,-1))&&!t.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+o.slice(a.index)+"]"),function(e,r,t,n){for(var o=n?r:R(r,t),i=e.length-1;i>=0;--i){var a,u=e[i];if("[]"===u&&t.parseArrays)a=[].concat(o);else{a=t.plainObjects?Object.create(null):{};var c="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,l=parseInt(c,10);t.parseArrays||""!==c?!isNaN(l)&&u!==c&&String(l)===c&&l>=0&&t.parseArrays&&l<=t.arrayLimit?(a=[])[l]=o:"__proto__"!==c&&(a[c]=o):a={0:o}}o=a}return o}(c,r,t,n)}},_=function(e,r){var t=function(e){if(!e)return A;if(null!=e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");return{allowDots:void 0===e.allowDots?A.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:A.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:A.arrayLimit,charset:void 0===e.charset?A.charset:e.charset,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:A.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:A.comma,decoder:"function"==typeof e.decoder?e.decoder:A.decoder,delimiter:"string"==typeof e.delimiter||m.isRegExp(e.delimiter)?e.delimiter:A.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:A.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:A.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:A.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:A.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:A.strictNullHandling}}(r);if(""===e||null==e)return t.plainObjects?Object.create(null):{};for(var n="string"==typeof e?function(e,r){var t,n={},o=(r.ignoreQueryPrefix?e.replace(/^\?/,""):e).split(r.delimiter,1/0===r.parameterLimit?void 0:r.parameterLimit),i=-1,a=r.charset;if(r.charsetSentinel)for(t=0;t<o.length;++t)0===o[t].indexOf("utf8=")&&("utf8=%E2%9C%93"===o[t]?a="utf-8":"utf8=%26%2310003%3B"===o[t]&&(a="iso-8859-1"),i=t,t=o.length);for(t=0;t<o.length;++t)if(t!==i){var u,c,l=o[t],s=l.indexOf("]="),f=-1===s?l.indexOf("="):s+1;-1===f?(u=r.decoder(l,A.decoder,a,"key"),c=r.strictNullHandling?null:""):(u=r.decoder(l.slice(0,f),A.decoder,a,"key"),c=m.maybeMap(R(l.slice(f+1),r),(function(e){return r.decoder(e,A.decoder,a,"value")}))),c&&r.interpretNumericEntities&&"iso-8859-1"===a&&(c=D(c)),l.indexOf("[]=")>-1&&(c=N(c)?[c]:c),n[u]=E.call(n,u)?m.combine(n[u],c):c}return n}(e,t):e,o=t.plainObjects?Object.create(null):{},i=Object.keys(n),a=0;a<i.length;++a){var u=i[a],c=C(u,n[u],t,"string"==typeof e);o=m.merge(o,c,t)}return m.compact(o)},L=function(){function e(e,r,t){var n,o;this.name=e,this.definition=r,this.bindings=null!=(n=r.bindings)?n:{},this.wheres=null!=(o=r.wheres)?o:{},this.config=t}var t=e.prototype;return t.matchesUrl=function(e){var r=this;if(!this.definition.methods.includes("GET"))return!1;var t=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(function(e,t,n,o){var i,a="(?<"+n+">"+((null==(i=r.wheres[n])?void 0:i.replace(/(^\^)|(\$$)/g,""))||"[^/?]+")+")";return o?"("+t+a+")?":""+t+a})).replace(/^\w+:\/\//,""),n=e.replace(/^\w+:\/\//,"").split("?"),o=n[0],i=n[1],a=new RegExp("^"+t+"/?$").exec(decodeURI(o));if(a){for(var u in a.groups)a.groups[u]="string"==typeof a.groups[u]?decodeURIComponent(a.groups[u]):a.groups[u];return{params:a.groups,query:_(i)}}return!1},t.compile=function(e){var r=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(function(t,n,o){var i,a;if(!o&&[null,void 0].includes(e[n]))throw new Error("Ziggy error: '"+n+"' parameter is required for route '"+r.name+"'.");if(r.wheres[n]&&!new RegExp("^"+(o?"("+r.wheres[n]+")?":r.wheres[n])+"$").test(null!=(a=e[n])?a:""))throw new Error("Ziggy error: '"+n+"' parameter does not match required format '"+r.wheres[n]+"' for route '"+r.name+"'.");return encodeURI(null!=(i=e[n])?i:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")})).replace(this.origin+"//",this.origin+"/").replace(/\/+$/,""):this.template},r(e,[{key:"template",get:function(){var e=(this.origin+"/"+this.definition.uri).replace(/\/+$/,"");return""===e?"/":e}},{key:"origin",get:function(){return this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:""}},{key:"parameterSegments",get:function(){var e,r;return null!=(e=null==(r=this.template.match(/{[^}?]+\??}/g))?void 0:r.map((function(e){return{name:e.replace(/{|\??}/g,""),required:!/\?}$/.test(e)}})))?e:[]}}]),e}(),T=function(e){var n,i;function u(r,n,o,i){var a;if(void 0===o&&(o=!0),(a=e.call(this)||this).t=null!=i?i:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,a.t=t({},a.t,{absolute:o}),r){if(!a.t.routes[r])throw new Error("Ziggy error: route '"+r+"' is not in the route list.");a.i=new L(r,a.t.routes[r],a.t),a.u=a.l(n)}return a}i=e,(n=u).prototype=Object.create(i.prototype),n.prototype.constructor=n,o(n,i);var c=u.prototype;return c.toString=function(){var e=this,r=Object.keys(this.u).filter((function(r){return!e.i.parameterSegments.some((function(e){return e.name===r}))})).filter((function(e){return"_query"!==e})).reduce((function(r,n){var o;return t({},r,((o={})[n]=e.u[n],o))}),{});return this.i.compile(this.u)+function(e,r){var t,n=e,o=function(e){if(!e)return x;if(null!=e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var r=e.charset||x.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=f.default;if(void 0!==e.format){if(!v.call(f.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var n=f.formatters[t],o=x.filter;return("function"==typeof e.filter||g(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:x.addQueryPrefix,allowDots:void 0===e.allowDots?x.allowDots:!!e.allowDots,charset:r,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:x.charsetSentinel,delimiter:void 0===e.delimiter?x.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:x.encode,encoder:"function"==typeof e.encoder?e.encoder:x.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:x.encodeValuesOnly,filter:o,format:t,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:x.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:x.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:x.strictNullHandling}}(r);"function"==typeof o.filter?n=(0,o.filter)("",n):g(o.filter)&&(t=o.filter);var i=[];if("object"!=a(n)||null===n)return"";var u=b[r&&r.arrayFormat in b?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];t||(t=Object.keys(n)),o.sort&&t.sort(o.sort);for(var c=0;c<t.length;++c){var l=t[c];o.skipNulls&&null===n[l]||j(i,k(n[l],l,u,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset))}var s=i.join(o.delimiter),p=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&(p+="iso-8859-1"===o.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),s.length>0?p+s:""}(t({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(e,r){return"boolean"==typeof e?Number(e):r(e)}})},c.v=function(e){var r=this;e?this.t.absolute&&e.startsWith("/")&&(e=this.p().host+e):e=this.h();var n={},o=Object.entries(this.t.routes).find((function(t){return n=new L(t[0],t[1],r.t).matchesUrl(e)}))||[void 0,void 0];return t({name:o[0]},n,{route:o[1]})},c.h=function(){var e=this.p(),r=e.pathname,t=e.search;return(this.t.absolute?e.host+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t},c.current=function(e,r){var n=this.v(),o=n.name,i=n.params,u=n.query,c=n.route;if(!e)return o;var l=new RegExp("^"+e.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(o);if([null,void 0].includes(r)||!l)return l;var s=new L(o,c,this.t);r=this.l(r,s);var f=t({},i,u);return!(!Object.values(r).every((function(e){return!e}))||Object.values(f).some((function(e){return void 0!==e})))||function e(r,t){return Object.entries(r).every((function(r){var n=r[0],o=r[1];return Array.isArray(o)&&Array.isArray(t[n])?o.every((function(e){return t[n].includes(e)})):"object"==a(o)&&"object"==a(t[n])&&null!==o&&null!==t[n]?e(o,t[n]):t[n]==o}))}(r,f)},c.p=function(){var e,r,t,n,o,i,a="undefined"!=typeof window?window.location:{},u=a.host,c=a.pathname,l=a.search;return{host:null!=(e=null==(r=this.t.location)?void 0:r.host)?e:void 0===u?"":u,pathname:null!=(t=null==(n=this.t.location)?void 0:n.pathname)?t:void 0===c?"":c,search:null!=(o=null==(i=this.t.location)?void 0:i.search)?o:void 0===l?"":l}},c.has=function(e){return Object.keys(this.t.routes).includes(e)},c.l=function(e,r){var n=this;void 0===e&&(e={}),void 0===r&&(r=this.i),null!=e||(e={}),e=["string","number"].includes(a(e))?[e]:e;var o=r.parameterSegments.filter((function(e){return!n.t.defaults[e.name]}));if(Array.isArray(e))e=e.reduce((function(e,r,n){var i,u;return t({},e,o[n]?((i={})[o[n].name]=r,i):"object"==a(r)?r:((u={})[r]="",u))}),{});else if(1===o.length&&!e[o[0].name]&&(e.hasOwnProperty(Object.values(r.bindings)[0])||e.hasOwnProperty("id"))){var i;(i={})[o[0].name]=e,e=i}return t({},this.g(r),this.m(e,r))},c.g=function(e){var r=this;return e.parameterSegments.filter((function(e){return r.t.defaults[e.name]})).reduce((function(e,n,o){var i,a=n.name;return t({},e,((i={})[a]=r.t.defaults[a],i))}),{})},c.m=function(e,r){var n=r.bindings,o=r.parameterSegments;return Object.entries(e).reduce((function(e,r){var i,u,c=r[0],l=r[1];if(!l||"object"!=a(l)||Array.isArray(l)||!o.some((function(e){return e.name===c})))return t({},e,((u={})[c]=l,u));if(!l.hasOwnProperty(n[c])){if(!l.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+c+"' parameter is missing route model binding key '"+n[c]+"'.");n[c]="id"}return t({},e,((i={})[c]=l[n[c]],i))}),{})},c.valueOf=function(){return this.toString()},c.check=function(e){return this.has(e)},r(u,[{key:"params",get:function(){var e=this.v();return t({},e.params,e.query)}}]),u}(u(String));return function(e,r,t,n){var o=new T(e,r,t,n);return e?o.toString():o}},"object"==a(r)?e.exports=i():void 0===(o="function"==typeof(n=i)?n.call(r,t,r,e):n)||(e.exports=o)},634:e=>{function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=634,e.exports=r}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";const e=require("vue"),r=require("@vue/server-renderer"),n=require("@inertiajs/inertia-vue3"),o=require("@inertiajs/server");var i=t.n(o),a=t(65),u=t.n(a);const c=require("workbox-window");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==l(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(i()((function(o){return(0,n.createInertiaApp)({page:o,render:r.renderToString,title:function(e){return"".concat(e," - ").concat("Lochlite CMS")},resolve:function(e){return t(634)("./".concat(e,".vue"))},setup:function(r){var t=r.app,n=r.props,i=r.plugin;return(0,e.createSSRApp)({render:function(){return(0,e.h)(t,n)}}).use(i).mixin({methods:{route:function(e,r,t){return u()(e,r,t,f(f({},o.props.ziggy),{},{location:new URL(o.props.ziggy.url)}))}}})}})})),"serviceWorker"in navigator)&&new c.Workbox("/service-worker.js").register()})()})();