(function(e){function t(t){for(var i,r,a=t[0],c=t[1],l=t[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},s={app:0},o=[];function a(e){return c.p+"js/"+({"main-async":"main-async"}[e]||e)+"."+{"main-async":"9a85d12d"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"main-async":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({"main-async":"main-async"}[e]||e)+"."+{"main-async":"c15974db"}[e]+".css",s=c.p+i,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var l=o[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===i||u===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=s[e]=[t,n]}));t.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}s[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"99da":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i,r=n("cb29");(function(e){e["quadratic"]="quadratic",e["circular"]="circular",e["back"]="back",e["bounce"]="bounce",e["elastic"]="elastic"})(i||(i={}));const s={[i.quadratic]:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:e=>e*(2-e)},[i.circular]:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:e=>Math.sqrt(1- --e*e)},[i.back]:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:e=>{const t=4;return(e-=1)*e*((t+1)*e+t)+1}},[i.bounce]:{style:"",fn:e=>(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},[i.elastic]:{style:"",fn:e=>{const t=.22,n=.4;return 0===e?0:1==e?1:n*Math.pow(2,-10*e)*Math.sin((e-t/4)*(2*Math.PI)/t)+1}}};class o extends r["a"]{constructor(e){super(),this.target=null,this.isAnimating=!1,this.target=e}getNow(){return window.performance&&window.performance.now&&window.performance.timing?window.performance.now()+window.performance.timing.navigationStart:+new Date}setTarget(e){for(const t in this.target)Object.prototype.hasOwnProperty.call(this.target,t)&&(this.target[t]=e(t))}to(e,t,n=i.circular){const r=this.getNow(),o=r+t,a=JSON.parse(JSON.stringify(this.target)),c=window.requestAnimationFrame||window.requestAnimationFrame.bind(window)||(e=>{setTimeout(e,1e3/60)}),l=()=>{const i=this.getNow();if(i>=o)return this.setTarget(t=>e[t]),this.isAnimating=!1,this.emit("update",this.target),void this.emit("complete",this.target);const u=(i-r)/t,d=s[n].fn(u);this.setTarget(t=>(e[t]-a[t])*d+a[t]),this.emit("update",this.target),this.isAnimating&&c(l)};return this.isAnimating=!0,l(),this}kill(){return this.isAnimating=!1,this}}const a=document.querySelector("body");a.addEventListener("click",()=>{new o({x:0}).to({x:360},1e3).on("update",({x:e})=>{console.log(e),a.style.transform=`rotate(${e}deg)`})});var c,l=n("72c2");class u extends r["a"]{constructor(){super(),this.isPlatForm=/^(Win|Mac)\w+/.test(navigator.platform),this.innerHeightStore=innerHeight,this.browser=(()=>{const e=navigator.userAgent,t={chrome:e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1,safari:e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),firefox:e.indexOf("Firefox")>-1,ie:!!window.ActiveXObject||"ActiveXObject"in window,edge:e.indexOf("Edge")>-1,opera:e.indexOf("Opera")>-1,qq:e.indexOf("qqbrowse")>-1,360:((e,t)=>{const n=navigator.mimeTypes;for(const i in n)if(n[i][e]==t)return!0;return!1})("type","application/vnd.chromium.remoting-viewer")};return l["a"].mobile()&&l["a"].ios()&&(t.chrome=/C\w+OS\//.test(e),t.firefox=/F\w+OS\//.test(e),t.safari=!t.chrome&&!t.firefox),t})(),this.on("resize",()=>{this.doResize()}),this.onResize(),this.initEvents()}get visibility(){let e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{visibilityChange:t,hidden:e}}onTouchFullScreen(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}stopMultiFinger(e){e.touches.length>1&&e.preventDefault()}initEvents(e){const t=e?(e,t,n,i)=>{e.removeEventListener(t,n,i)}:(e,t,n,i)=>{e.addEventListener(t,n,i)};t(window,"touchstart",this,{passive:!1}),t(window,"touchend",this),t(window,"resize",this),t(window,"orientationchange",this),t(document,"click",this,!0),t(document,this.visibility.visibilityChange,this)}checkRootElementScroll(e){"portrait"==e&&setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0},300)}checkPushNavBar(e,t){const n=document.body.clientHeight,i=screen.width,r=this.browser.chrome?-20:0,s="landscape"==e?t<i+r:t==n,a=document.body;let c=!1;if(s&&"landscape"==e){if(c)return;c=!0,a.style.pointerEvents="none",a.style.height="200vw";const e={y:document.documentElement.scrollTop||document.body.scrollTop};new o(e).on("update",()=>{window.scrollTo(0,e.y)}).to({y:0},200)}else c=!1,a.style.pointerEvents="",a.style.height=""}doResize(){const e=l["a"].landscape()?"landscape":"portrait",t=this.innerHeightStore=innerHeight;console.log(`New orientation is ${e},New height is ${t}`),l["a"].mobile()&&l["a"].ios()&&l["a"].iphone()&&!this.isPlatForm&&(this.checkRootElementScroll(e),this.checkPushNavBar(e,t))}onResize(){if(this.emit("resize"),l["a"].desktop())return;const e=+new Date,t=()=>{cancelAnimationFrame(this.innerHeightWatchRaf);const n=+new Date-e>500;if(!n)return innerHeight!=this.innerHeightStore?this.emit("resize"):void(this.innerHeightWatchRaf=requestAnimationFrame(t))};t()}preventDoubleClick(e){const t=e.target,n=+new Date,i=t.lastTime||n;n-i<=300&&(console.log("dblclick"),e.preventDefault()),t.lastTime=n}handleEvent(e){switch(e.type){case"touchstart":this.stopMultiFinger(e);break;case"touchend":if(this.isPlatForm)return;l["a"].mobile()&&l["a"].android()&&this.onTouchFullScreen();break;case"resize":case"orientationchange":this.onResize();break;case"click":l["a"].mobile()&&l["a"].ios()&&this.preventDoubleClick(e);break;case this.visibility.visibilityChange:this.emit("visibilitychange",document[this.visibility.hidden]?"hidden":"visible");break}}}(function(e){e["Loaded"]="loaded"})(c||(c={}));const d=new r["a"],h=new u,f={resizeCount:0,transitions:{pages:"fade"}},m={events:d,browsers:h,device:l["a"],state:f};t["b"]=m},cb29:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("ddb0");class i{constructor(){this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}emit(e,...t){if(!this.events[e])return this;const n=this.events[e];return n.map(e=>e).forEach(e=>e(...t)),this}off(e,t){if(!this.events[e])return this;if(!t)return this.events[e]=null,this;const n=this.events[e].indexOf(t);return this.events[e].splice(n,1),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}}},cd49:function(e,t,n){"use strict";n.r(t);n("ddb0"),n("e6cf"),n("cca6"),n("a79d"),n("b429"),n("f5df1"),n("f57e");var i=n("99da");n("cee0"),n("0481"),n("4069");class r{static h(e,t,n){return(Array.isArray(t)||"string"===typeof t)&&(n=t,t={}),n=n?n.flat():[],n=n instanceof Array?n:[n],{type:e,props:t,children:n}}static createElement(e){if("string"===typeof e)return document.createTextNode(e);const{type:t,props:n,children:i}=e,s=document.createElement(t);return r.setProps(s,n),i.map(r.createElement).forEach(s.appendChild.bind(s)),s}static setProps(e,t){for(const n in t){if("children"==n)continue;const i=t[n];if("object"===typeof i)switch(n){case"style":{let t="";for(const e in i){const n=i[e];t+=`${e}:${n};`}e.setAttribute(n,t);break}default:r.setProps(e,i);break}else e.setAttribute(n,i)}}}class s{constructor(e=500){this.minVisibleTimes=e,this.init()}init(){i["b"].events.once(i["a"].Loaded,()=>this.destory()),document.querySelector("body").appendChild(this.$el=r.createElement(this.render(r.h)))}render(e){return e("div",{attrs:{id:"loading-box"}},[e("div",{class:"main-content"},[e("div",{class:"text-base64"}),e("div",{class:"logo-box"},[e("i",{class:"icon-logo"})])])])}visiblePromise(){return new Promise((e,t)=>{setTimeout(()=>{e()},this.minVisibleTimes)})}destory(){const e=()=>{this.$el.removeEventListener("transitionend",e),this.$el.parentNode.removeChild(this.$el),this.$el=null};this.$el.addEventListener("transitionend",e,{once:!0}),this.$el.style.opacity="0"}}const o={images:{sprites:{src:n("d405")}}};var a=o,c=n("efaf");const l=new s(2500),u=()=>new Promise(async e=>{await Promise.all(Object.values(a.images).map(e=>new Promise(async t=>{e.target=await Object(c["b"])(e.src),t()}))),e()}),d=()=>n.e("main-async").then(n.bind(null,"afad"));Promise.all([u(),d(),l.visiblePromise()]).then(()=>{i["b"].events.emit(i["a"].Loaded)})},cee0:function(e,t,n){},d405:function(e,t,n){e.exports=n.p+"img/netease.56482c34.png"},efaf:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s}));n("25f0"),n("2532"),n("466d"),n("1276"),n("ddb0"),n("2b3d");const i=(e,t=!1)=>new Promise((n,i)=>{if(t){const t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="blob",t.onreadystatechange=()=>{4==t.readyState&&200==t.status&&n(URL.createObjectURL(t.response))},t.send()}else{const t=new Image;t.onload=()=>{n(t)},t.onerror=()=>{i("load error:"+e)},t.src=e}}),r=(e,t,n="localStorage")=>{e&&("string"!==typeof t&&(t=JSON.stringify(t)),window[n].setItem(e,t))},s=(e,t="localStorage",n=!1)=>{if(!e)return;const i=window[t].getItem(e);return n?JSON.parse(i):i}},f57e:function(e,t,n){}});
//# sourceMappingURL=app.0d4906a2.js.map