(function(e){function t(t){for(var i,r,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a={app:0},o=[];function c(e){return s.p+"js/"+({"main-async":"main-async"}[e]||e)+"-legacy."+{"main-async":"4134761b"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"main-async":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({"main-async":"main-async"}[e]||e)+"."+{"main-async":"33181807"}[e]+".css",a=s.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===i||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"99da":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i,r,a=n("cb29"),o=(n("99af"),n("c975"),n("d4ec")),c=n("bee2"),s=n("262e"),u=n("2caf"),l=n("ade3");(function(e){e["quadratic"]="quadratic",e["circular"]="circular",e["back"]="back",e["bounce"]="bounce",e["elastic"]="elastic"})(r||(r={}));var f,d=(i={},Object(l["a"])(i,r.quadratic,{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}}),Object(l["a"])(i,r.circular,{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return Math.sqrt(1- --e*e)}}),Object(l["a"])(i,r.back,{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e-=1)*e*((t+1)*e+t)+1}}),Object(l["a"])(i,r.bounce,{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}}),Object(l["a"])(i,r.elastic,{style:"",fn:function(e){var t=.22,n=.4;return 0===e?0:1==e?1:n*Math.pow(2,-10*e)*Math.sin((e-t/4)*(2*Math.PI)/t)+1}}),i),h=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(e){var i;return Object(o["a"])(this,n),i=t.call(this),i.target=null,i.isAnimating=!1,i.target=e,i}return Object(c["a"])(n,[{key:"getNow",value:function(){return window.performance&&window.performance.now&&window.performance.timing?window.performance.now()+window.performance.timing.navigationStart:+new Date}},{key:"setTarget",value:function(e){for(var t in this.target)this.target.hasOwnProperty(t)&&(this.target[t]=e(t))}},{key:"to",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.circular,a=this.getNow(),o=a+t,c=JSON.parse(JSON.stringify(this.target)),s=window.requestAnimationFrame||window.requestAnimationFrame.bind(window)||function(e){setTimeout(e,1e3/60)},u=function r(){var u=n.getNow();if(u>=o)return n.setTarget((function(t){return e[t]})),n.isAnimating=!1,n.emit("update",n.target),void n.emit("complete",n.target);var l=(u-a)/t,f=d[i].fn(l);n.setTarget((function(t){return(e[t]-c[t])*f+c[t]})),n.emit("update",n.target),n.isAnimating&&s(r)};return this.isAnimating=!0,u(),this}},{key:"kill",value:function(){return this.isAnimating=!1,this}}]),n}(a["a"]),v=n("72c2"),m=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.call(this),e.isWinPlatForm=/^Win\w+/.test(navigator.platform),e.innerHeightStore=innerHeight,e.browser=function(){var e=navigator.userAgent,t={chrome:e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1,safari:e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),firefox:e.indexOf("Firefox")>-1,ie:!!window.ActiveXObject||"ActiveXObject"in window,edge:e.indexOf("Edge")>-1,opera:e.indexOf("Opera")>-1,qq:e.indexOf("qqbrowse")>-1,360:function(e,t){var n=navigator.mimeTypes;for(var i in n)if(n[i][e]==t)return!0;return!1}("type","application/vnd.chromium.remoting-viewer")};return v["a"].mobile()&&v["a"].ios()&&(t.chrome=/C\w+OS\//.test(e),t.firefox=/F\w+OS\//.test(e),t.safari=!t.chrome&&!t.firefox),t}(),e.on("resize",(function(){e.doResize()})),e.onResize(),e.initEvents(),e}return Object(c["a"])(n,[{key:"onTouchFullScreen",value:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}},{key:"stopMultiFinger",value:function(e){e.touches.length>1&&e.preventDefault()}},{key:"initEvents",value:function(e){var t=e?function(e,t,n,i){e.removeEventListener(t,n,i)}:function(e,t,n,i){e.addEventListener(t,n,i)};t(window,"touchstart",this,{passive:!1}),t(window,"touchend",this),t(window,"resize",this),t(window,"orientationchange",this),t(document,"click",this,!0),t(document,this.visibility.visibilityChange,this)}},{key:"checkRootElementScroll",value:function(e){"portrait"==e&&setTimeout((function(){document.documentElement.scrollTop=0}),300)}},{key:"checkPushNavBar",value:function(e,t){var n=document.body.clientHeight,i=screen.width,r=this.browser.chrome?-20:0,a="landscape"==e?t<i+r:t==n,o=document.body,c=!1;if(a&&"landscape"==e){if(c)return;c=!0,o.style.pointerEvents="none",o.style.height="200vw";var s={y:document.documentElement.scrollTop||document.body.scrollTop};new h(s).on("update",(function(){window.scrollTo(0,s.y)})).to({y:0},200)}else c=!1,o.style.pointerEvents="",o.style.height=""}},{key:"doResize",value:function(){var e=v["a"].landscape()?"landscape":"portrait",t=this.innerHeightStore=innerHeight;console.log("New orientation is ".concat(e,",New height is ").concat(t)),v["a"].mobile()&&v["a"].ios()&&v["a"].iphone()&&!this.isWinPlatForm&&(this.checkRootElementScroll(e),this.checkPushNavBar(e,t))}},{key:"onResize",value:function(){var e=this;if(this.emit("resize"),!v["a"].desktop()){var t=+new Date,n=function n(){cancelAnimationFrame(e.innerHeightWatchRaf);var i=+new Date-t>500;if(!i)return innerHeight!=e.innerHeightStore?e.emit("resize"):void(e.innerHeightWatchRaf=requestAnimationFrame(n))};n()}}},{key:"onClick",value:function(e){e._constructed||(e.preventDefault(),e.stopPropagation(),this.doClick(e))}},{key:"doClick",value:function(e){var t,n=e.target,i=/INPUT/.test(n.tagName)&&"file"==n.getAttribute("type");/(SELECT|INPUT|TEXTAREA)/i.test(n.tagName)&&!i||(t=document.createEvent("MouseEvents"),t.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),t._constructed=!0,n.dispatchEvent(t))}},{key:"handleEvent",value:function(e){switch(e.type){case"touchstart":this.stopMultiFinger(e);break;case"touchend":if(this.isWinPlatForm)return;v["a"].mobile()&&v["a"].android()&&this.onTouchFullScreen();break;case"resize":case"orientationchange":this.onResize();break;case"click":this.onClick(e);break;case this.visibility.visibilityChange:this.emit("visibilitychange",document[this.visibility.hidden]?"hidden":"visible");break}}},{key:"visibility",get:function(){var e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{visibilityChange:t,hidden:e}}}]),n}(a["a"]);(function(e){e["Loaded"]="loaded"})(f||(f={}));var p=new a["a"],b=new m,y={resizeCount:0,transitions:{pages:"fade"}},g={events:p,browsers:b,device:v["a"],state:y};t["b"]=g},cb29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("4160"),n("c975"),n("d81d"),n("a434"),n("159b");var i=n("d4ec"),r=n("bee2"),a=function(){function e(){Object(i["a"])(this,e),this.events={}}return Object(r["a"])(e,[{key:"on",value:function(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!this.events[e])return this;var r=this.events[e];return r.map((function(e){return e})).forEach((function(e){return e(n)})),this}},{key:"off",value:function(e,t){if(!this.events[e])return this;if(!t)return this.events[e]=null,this;var n=this.events[e].indexOf(t);return this.events[e].splice(n,1),this}},{key:"once",value:function(e,t){var n=this,i=function i(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];t(a),n.off(e,i)};return this.on(e,i),this}}]),e}()},cd49:function(e,t,n){"use strict";n.r(t);n("d81d"),n("d3b7"),n("07ac"),n("3ca3"),n("ddb0"),n("96cf");var i=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b429"),n("f5df1"),n("f57e"),n("99da")),a=n("d4ec"),o=n("bee2"),c=(n("cee0"),n("99af"),n("0481"),n("4160"),n("4069"),n("159b"),n("53ca")),s=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,null,[{key:"h",value:function(e,t,n){return(Array.isArray(t)||"string"===typeof t)&&(n=t,t={}),n=n?n.flat():[],n=n instanceof Array?n:[n],{type:e,props:t,children:n}}},{key:"createElement",value:function(t){if("string"===typeof t)return document.createTextNode(t);var n=t.type,i=t.props,r=t.children,a=document.createElement(n);return e.setProps(a,i),r.map(e.createElement).forEach(a.appendChild.bind(a)),a}},{key:"setProps",value:function(t,n){for(var i in n)if("children"!=i){var r=n[i];if("object"===Object(c["a"])(r))switch(i){case"style":var a="";for(var o in r){var s=r[o];a+="".concat(o,":").concat(s,";")}t.setAttribute(i,a);break;default:e.setProps(t,r);break}else t.setAttribute(i,r)}}}]),e}(),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;Object(a["a"])(this,e),this.minVisibleTimes=t,this.init()}return Object(o["a"])(e,[{key:"init",value:function(){var e=this;r["b"].events.once(r["a"].Loaded,(function(){return e.destory()})),document.querySelector("body").appendChild(this.$el=s.createElement(this.render(s.h)))}},{key:"render",value:function(e){return e("div",{attrs:{id:"loading-box"}},[e("div",{class:"main-content"},[e("div",{class:"text-base64"}),e("div",{class:"logo-box"},[e("i",{class:"icon-logo"})])])])}},{key:"visiblePromise",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){t()}),e.minVisibleTimes)}))}},{key:"destory",value:function(){var e=this,t=function t(){e.$el.removeEventListener("transitionend",t),e.$el.parentNode.removeChild(e.$el),e.$el=null};this.$el.addEventListener("transitionend",t,{once:!0}),this.$el.style.opacity="0"}}]),e}(),l={images:{sprites:{src:n("d405")}}},f=l,d=n("efaf"),h=new u(2500),v=function(){return new Promise(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Object.values(f.images).map((function(e){return new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["b"])(e.src);case 2:e.target=t.sent,n();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})));case 2:t();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},m=function(){return n.e("main-async").then(n.bind(null,"afad"))};Promise.all([v(),m(),h.visiblePromise()]).then((function(){r["b"].events.emit(r["a"].Loaded)}))},cee0:function(e,t,n){},d405:function(e,t,n){e.exports=n.p+"img/netease.56482c34.png"},efaf:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));n("4de4"),n("4160"),n("a630"),n("caad"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("3ca3"),n("466d"),n("1276"),n("159b"),n("ddb0"),n("2b3d"),n("53ca"),n("96cf"),n("1da1");var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(n,i){if(t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onreadystatechange=function(){4==r.readyState&&200==r.status&&n(URL.createObjectURL(r.response))},r.send()}else{var a=new Image;a.onload=function(){n(a)},a.onerror=function(){i("load error:"+e)},a.src=e}}))},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"localStorage";e&&("string"!==typeof t&&(t=JSON.stringify(t)),window[n].setItem(e,t))},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localStorage",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e){var i=window[t].getItem(e);return n?JSON.parse(i):i}}},f57e:function(e,t,n){}});
//# sourceMappingURL=app-legacy.62eb5858.js.map