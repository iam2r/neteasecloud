(function(e){function t(t){for(var s,r,a=t[0],c=t[1],l=t[2],d=0,u=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var h=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"1d71":function(e,t,i){},"39b3":function(e,t,i){},"6c7d":function(e,t,i){},"7a06":function(e,t,i){},a11d:function(e,t,i){},a1a3:function(e,t,i){},cd49:function(e,t,i){"use strict";i.r(t);i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e");const n={resizeCount:0,transitions:{pages:"fade"}};var o=s["default"].prototype.$state=s["default"].observable(n);class r{constructor(){this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}emit(e,...t){if(!this.events[e])return this;const i=this.events[e];return i.map(e=>e).forEach(e=>e.apply(this,t)),this}off(e,t){if(!this.events[e])return this;if(!t)return this.events[e]=null,this;const i=this.events[e].indexOf(t);return this.events[e].splice(i,1),this}once(e,t){const i=(...s)=>{t.apply(this,s),this.off(e,i)};return this.on(e,i),this}}var a,c=i("bc3a"),l=i.n(c);l.a.defaults.withCredentials=!0;class h{}class d extends r{constructor(e,t){super(),this.timeout=6e4,this.url=e,this.timeout=t||this.timeout,l.a.defaults.timeout=this.timeout}send(e,t,s){return console.log(`ajax Request: ${e} `+JSON.stringify(t)),new Promise(async(n,o)=>{let r=null,a=null;const c=l.a.post(this.url+"/"+e+"?"+i("4328").stringify({timestamp:+new Date}),t);c.catch(t=>{console.error(t.message),r={command:e,err:t},this.emit("http-error",r),s&&s(r,a),o(r)}),a=(await c).data,console.log(`ajax Response: ${e} `+JSON.stringify(a)),200==a.code?(s&&s(r,a),n(a)):(r={command:e,err:a},this.emit("res-error",r),s&&s(r,null),o(r))})}}(function(e){e["SearchAdvice"]="search/default",e["Search"]="search"})(a||(a={}));class u extends d{searchAdvice(e){return this.send(a.SearchAdvice,new h,e)}search(e,t){return this.send(a.Search,e,t)}}var p=i("72c2");p["a"].onChangeOrientation;class f extends r{constructor(){super(),this.lastTouchEnd=0,this.isWinPlatForm=/^Win\w+/.test(navigator.platform),this.innerHeightStore=innerHeight,this.browser=(()=>{const e=navigator.userAgent,t={chrome:e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1,safari:e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),firefox:e.indexOf("Firefox")>-1,ie:!!window.ActiveXObject||"ActiveXObject"in window,edge:e.indexOf("Edge")>-1,opera:e.indexOf("Opera")>-1,qq:e.indexOf("qqbrowse")>-1,360:((e,t)=>{const i=navigator.mimeTypes;for(const s in i)if(i[s][e]==t)return!0;return!1})("type","application/vnd.chromium.remoting-viewer")};return p["a"].mobile()&&p["a"].ios()&&(t.chrome=/C\w+OS\//.test(e),t.firefox=/F\w+OS\//.test(e),t.safari=!t.chrome&&!t.firefox),t})(),this.on("resize",()=>{this.doResize()}),this.onResize(),this.initEvents()}get visibility(){let e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{visibilityChange:t,hidden:e}}onTouchFullScreen(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}stopMultiFinger(e){e.touches.length>1&&e.preventDefault()}stopDoubleClick(e){const t=+new Date;t-this.lastTouchEnd<=300&&e.preventDefault(),this.lastTouchEnd=t}initEvents(e){const t=e?(e,t,i,s)=>{e.removeEventListener(t,i,s)}:(e,t,i,s)=>{e.addEventListener(t,i,s)};t(window,"touchstart",this,{passive:!1}),t(window,"touchend",this),t(window,"touchcancel",this),t(window,"resize",this),t(window,"orientationchange",this),t(window,"gesturestart",this),t(window,"dblclick",this),t(document,this.visibility.visibilityChange,this)}checkRootElementScroll(e){"portrait"==e&&setTimeout(()=>{document.documentElement.scrollTop=0},300)}checkPushNavBar(e,t){const i=document.body.clientHeight,s=screen.width,n=this.browser.chrome?-20:0,o="landscape"==e?t<s+n:t==i,r=document.body;let a=!1;if(o&&"landscape"==e){if(a)return;a=!0,r.style.pointerEvents="none",r.style.height="200vw";const e=0,t=document.documentElement.scrollTop||document.body.scrollTop,i=e-t;let s=t;const n=i/40;(function t(){s!=e&&(s+=n,window.scrollTo(0,s),requestAnimationFrame(t))})()}else a=!1,r.style.pointerEvents="",r.style.height=""}doResize(){const e=p["a"].landscape()?"landscape":"portrait",t=this.innerHeightStore=innerHeight;console.log(`New orientation is ${e},New height is ${t}`),p["a"].mobile()&&p["a"].ios()&&p["a"].iphone()&&!this.isWinPlatForm&&(this.checkRootElementScroll(e),this.checkPushNavBar(e,t))}onResize(){if(this.emit("resize"),p["a"].desktop())return;const e=+new Date,t=()=>{cancelAnimationFrame(this.innerHeightWatchRaf);const i=+new Date-e>500;if(!i)return innerHeight!=this.innerHeightStore?this.emit("resize"):void(this.innerHeightWatchRaf=requestAnimationFrame(t))};t()}handleEvent(e){switch(e.type){case"touchstart":this.stopMultiFinger(e);break;case"touchend":case"touchcancel":if(this.isWinPlatForm)return;p["a"].mobile()&&p["a"].android()&&this.onTouchFullScreen(),p["a"].mobile()&&p["a"].ios()&&this.stopDoubleClick(e);break;case"resize":case"orientationchange":this.onResize();break;case"gesturestart":case"dblclick":e.preventDefault();break;case this.visibility.visibilityChange:this.emit("visibilitychange",document[this.visibility.hidden]?"hidden":"visible");break}}}const v=new u("http://66.11.117.120:3000"),m=new r,b=new f;b.on("resize",()=>{o.resizeCount++});p["a"];i("b429"),i("f5df1"),i("a7a3"),i("f57e");var g=i("8c4f"),w=i("9ab4"),y=i("48d3"),S=i("60a3");i("7a06");let O=class extends y["Component"]{render(){const e=arguments[0];return e("div",{class:"page-home"},["home"])}};O=Object(w["a"])([S["a"]],O);var x=O;let j=class extends y["Component"]{render(){const e=arguments[0];return e("div",{class:"page-mine"},["mine"])}};j=Object(w["a"])([S["a"]],j);var k,T=j;(function(e){e["Home"]="home",e["Mine"]="mine"})(k||(k={})),s["default"].use(g["a"]);const C=[{path:"/"+k.Home,name:k.Home,component:x},{path:"/"+k.Mine,name:k.Mine,component:T},{path:"*",redirect:{name:k.Home}}],z=new g["a"]({mode:"hash",base:"",routes:C});var E=z,H=i("2b88"),A=(i("2532"),i("5319"),i("ddb0"),i("5530")),R=i("7212"),F=i("6dd8");i("39b3");let $=class extends y["Component"]{get swiperScroll(){return this.$refs.mySwiper.$swiper}mounted(){this.initClickHandel(),setTimeout(()=>{this.updateScroll(),this.observeResize()})}observeResize(){const e=[this.$el,this.$el.querySelector(".swiper-slide")],t=new F["a"](t=>{for(const i of t)e.includes(i.target)&&this.updateScroll()});e.forEach(e=>t.observe(e))}initClickHandel(){this.swiperScroll.el.addEventListener("click",()=>{this.stopScroll()})}addNoSwipingToTextNode(e){const t=e.childNodes;t.forEach(e=>{if(1==e.nodeType)this.addNoSwipingToTextNode(e);else if(3==e.nodeType&&e.nodeValue.replace(/(^\s*)|(\s*$)/g,"")){const t=e.parentNode;t.classList.remove("swiper-no-swiping"),t.classList.add("swiper-no-swiping")}})}updateScroll(){this.swiperScroll.update(),this.swiperScroll.scrollbar&&this.swiperScroll.scrollbar.updateSize()}stopScroll(){const e=this.swiperScroll;this.scrollTo(e.getTranslate(),0)}scrollTo(e,t){const i=this.swiperScroll;i.touchEventsData.allowMomentumBounce=!1,i.transitionEnd(),i.setTransition(t),i.setTranslate(e)}render(){const e=arguments[0];return e(R["Swiper"],{ref:"mySwiper",class:"scroll-container",attrs:{options:Object(A["a"])(Object(A["a"])({},this.options),{},{scrollbar:Object(A["a"])(Object(A["a"])({},this.options.scrollbar),{},{el:this.options.scrollbar.el+"-"+this._uid})})}},[e(R["SwiperSlide"],{ref:"scroller",class:this.scrollerClass},[this.$scopedSlots.default()]),e("div",{class:["swiper-scrollbar",(this.options.scrollbar.el+"-"+this._uid).replace(".","").replace("#","")],slot:"scrollbar"})])}};Object(w["a"])([Object(S["d"])({default:()=>({direction:"vertical",slidesPerView:"auto",freeMode:!0,noSwiping:!0,observer:!0,observeParents:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0,snapOnRelease:!1,hide:!0},mousewheel:!0})})],$.prototype,"options",void 0),Object(w["a"])([Object(S["d"])({default:""})],$.prototype,"scrollerClass",void 0),$=Object(w["a"])([S["a"]],$);var P=$,q=(i("841c"),i("2638")),D=i.n(q);i("f7c0");class N extends h{}let M=class extends y["Component"]{constructor(){super(...arguments),this.enterSearch=!1,this.searchValue="",this.searchAdvice={showKeyword:"",realkeyword:""}}async initSearchAdvice(){const e=await v.searchAdvice();this.searchAdvice=e.data}async initSearch(){let e=new N;e.keywords=this.searchValue||this.searchAdvice.realkeyword;await v.search(e)}onSearchValueChange(){this.searchValue||this.initSearchAdvice()}onLeave(){this.enterSearch=!1,console.log(this.inputDom),this.inputDom.blur()}created(){this.initSearchAdvice()}render(){const e=arguments[0];return e("div",{class:"search-component",attrs:{"data-status":this.enterSearch?"enter":"leave"}},[e("v-touch",{attrs:{tag:"i"},class:"icon-search",on:{tap:()=>{this.initSearch()}}}),e("input",D()([{on:{input:e=>{e.target.composing||(this.searchValue=e.target.value)},focus:()=>{this.enterSearch=!0},keydown:y["modifiers"].enter(this.initSearch)},ref:"input-dom",attrs:{type:"text",placeholder:this.searchAdvice.showKeyword},domProps:{value:this.searchValue}},{directives:[{name:"model",value:this.searchValue,modifiers:{}}]}])),e("transition",{attrs:{name:"fade"}},[e("v-touch",{attrs:{tag:"span"},on:{tap:()=>{this.onLeave()}},directives:[{name:"show",value:this.enterSearch}],class:"btn-leave"},["取消"])])])}};Object(w["a"])([Object(S["e"])("input-dom")],M.prototype,"inputDom",void 0),Object(w["a"])([Object(S["f"])("searchValue")],M.prototype,"onSearchValueChange",null),M=Object(w["a"])([S["a"]],M);var V=M;i("6c7d");let _=class extends y["Component"]{render(){const e=arguments[0];return e("div",{class:"header-component"},[e(V)])}};_=Object(w["a"])([S["a"]],_);var L=_;i("a11d");let W=class extends y["Component"]{toggleIndex(e){this.active}render(){const e=arguments[0];return e("ul",{class:"tabs-wrapper"},[Array.from({length:this.length}).map((t,i)=>e("v-touch",{key:i,attrs:{tag:"li"},class:["tabs-item",this.active==i?"active":""],on:{tap:()=>{this.toggleIndex(i)}}},[this.$scopedSlots.default({i:i,isActive:this.active==i})]))])}};Object(w["a"])([Object(S["c"])("change",{type:Number})],W.prototype,"active",void 0),Object(w["a"])([Object(S["d"])({default:0})],W.prototype,"length",void 0),Object(w["a"])([Object(S["b"])("change")],W.prototype,"toggleIndex",null),W=Object(w["a"])([S["a"]],W);var I=W;i("1d71");let J=class extends y["Component"]{constructor(){super(...arguments),this.list=[{key:k.Home,value:"发现"},{key:k.Mine,value:"我的"}]}get active(){const e=this.list.findIndex(e=>e.key==this.$route.name);return~e?e:0}set active(e){this.$router.replace({name:this.list[e].key})}render(){const e=arguments[0];return e("div",{class:"footer-component"},[e(I,{class:"footer-navs",attrs:{length:this.list.length},scopedSlots:{default:({i:t,isActive:i})=>e("div",{class:"footer-nav-item"},[e("div",{class:"icon-box-container"},[e("transition",{attrs:{name:"scale"}},[e("div",{key:i?"on":"off",class:"icon-box",attrs:{"data-status":i?"on":"off"}},[e("i",{class:"icon-"+this.list[t].key})])])]),e("span",[" ",this.list[t].value])])},model:{value:this.active,callback:e=>{this.active=e}}})])}};J=Object(w["a"])([S["a"]],J);var B=J;i("a1a3");let K=class extends y["Component"]{onResize(){setTimeout(()=>{this.pageScroll.updateScroll()},400)}render(){const e=arguments[0];return e("div",{attrs:{id:"app"}},[e("div",{ref:"pages-box",attrs:{id:"pages-box"}},[e(P,{ref:"pageScroll",class:"pages-scroll-view",scopedSlots:{default:()=>e("transition",{attrs:{name:this.$state.transitions.pages}},[e("div",{ref:"page-box-container",class:"page-box-container",key:this.$route.name},[e("router-view")])])}})]),e("div",{attrs:{id:"fixed-box"}},[e(L),e(B),e(H["PortalTarget"],{attrs:{name:"fixed",multiple:!0}})])])}};Object(w["a"])([Object(S["e"])()],K.prototype,"pageScroll",void 0),Object(w["a"])([Object(S["f"])("$state.resizeCount")],K.prototype,"onResize",null),K=Object(w["a"])([S["a"]],K);var X=K,G=i("ca95"),Q=i.n(G);s["default"].config.productionTip=!1,s["default"].use(Q.a,{name:"v-touch"}),new s["default"]({router:E,render:e=>e(X)}).$mount("#app")},f57e:function(e,t,i){},f7c0:function(e,t,i){}});
//# sourceMappingURL=app.c4fef015.js.map