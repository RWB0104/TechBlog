(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4866:function(e,t,n){"use strict";n.d(t,{XJ:function(){return r},SG:function(){return o},Jt:function(){return a},Jq:function(){return c}});function r(e){return Math.floor(Math.random()*e)}function o(e){var t=void 0===e?new Date:new Date(e);return{year:t.getFullYear().toString(),month:t.getMonth()+1>9?(t.getMonth()+1).toString():"0".concat(t.getMonth()+1),day:t.getDate()+1>9?t.getDate().toString():"0".concat(t.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],hour:t.getHours()>9?t.getHours().toString():"0".concat(t.getHours()),minute:t.getMinutes()>9?t.getMinutes().toString():"0".concat(t.getMinutes()),second:t.getSeconds()>9?t.getSeconds().toString():"0".concat(t.getSeconds())}}function a(e){if(e){var t=0;return e.reduce((function(e,n){var r=n.text,o=n.tag,a=n.depth;return a>t?(t++,e+='<ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):a<t?(t--,e+='</ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):e+='<li><a href="#'.concat(o,'">').concat(r,"</a></li>"),e}),"")+"</ul>"}return""}function c(e){var t=(new Date).getTime()-e.getTime();if(t>31536e6){var n=Math.floor(t/31536e6);return"".concat(n,"\ub144 \uc804")}if(t>2592e6){var r=Math.floor(t/2592e6);return"".concat(r,"\ub2ec \uc804")}if(t>864e5){var o=Math.floor(t/864e5);return"".concat(o,"\uc77c \uc804")}if(t>36e5){var a=Math.floor(t/36e5);return"".concat(a,"\uc2dc\uac04 \uc804")}if(t>6e4){var c=Math.floor(t/6e4);return"".concat(c,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},2861:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),o=n(7294),a=n(9956),c=n(2318),i=n(4866),u=n(1733),s=n(1115),l=n.n(s);function f(){var e=(0,o.useRef)(null),t=(0,o.useRef)(null),n=(0,o.useRef)(null),s=(0,i.XJ)(u.TJ.length),f=u.TJ[s],p=f.title,d=f.author,m=f.images;return(0,o.useEffect)((function(){e&&e.current&&(e.current.style.backgroundImage="url(".concat(m,")")),t&&t.current&&(t.current.innerText=p),n&&n.current&&(n.current.innerText=d)})),(0,r.jsxs)(a.Z,{className:l().root,component:"article",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,r.jsx)(a.Z,{className:l().wrapper,position:"absolute",children:(0,r.jsx)("div",{ref:e,className:l().image})}),(0,r.jsxs)(a.Z,{display:"grid",children:[(0,r.jsx)(c.Z,{ref:t,component:"h1",className:l().title,gutterBottom:!0}),(0,r.jsx)(c.Z,{ref:n,component:"h3",className:l().sub})]})]})}},8794:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(9008),a=n(1733);function c(e){var t=e.title,n=e.description,c=void 0===n?a.dz:n,i=e.type,u=void 0===i?"website":i,s=e.url,l=void 0===s?"":s,f=e.image,p=void 0===f?"/favicon.ico":f,d=e.locale,m=void 0===d?"ko_KR":d;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"".concat(t," - ").concat(a.R)}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:site_name",content:a.R}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(t," - ").concat(a.R)}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:u}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(a._n).concat(l)}),(0,r.jsx)("meta",{property:"og:image",content:p}),(0,r.jsx)("meta",{property:"og:locale",content:m}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(a._n).concat(l)})]})}},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(7294),a=n(9956),c=n(2318),i=n(5146),u=n.n(i);function s(e){var t=e.title,n=e.menu,i=e.lower,s=e.image,l=(0,o.useRef)(null),f=(0,o.useRef)(null);(0,o.useEffect)((function(){/(.mp4|webm)$/.test(s)?l&&l.current&&(l.current.src=s):f&&f.current&&(f.current.style.backgroundImage="url(".concat(s,")"))}),[s]);var p=/(.mp4|webm)$/.test(s)?(0,r.jsxs)(a.Z,{className:u()["image-wrapper"],children:[(0,r.jsx)("video",{ref:l,className:u().media,autoPlay:!0,loop:!0,muted:!0,children:(0,r.jsx)("source",{src:s})}),(0,r.jsx)("div",{className:u().plate})]}):(0,r.jsx)(a.Z,{className:u()["image-wrapper"],children:(0,r.jsx)("div",{ref:f,className:u()["image-basic"]})});return(0,r.jsxs)(a.Z,{className:u().root,children:[p,(0,r.jsxs)("div",{className:u()["title-wrapper"],children:[(0,r.jsx)(c.Z,{component:"h1",className:u().title,children:t}),(0,r.jsx)(c.Z,{component:"h3",className:u().menu,children:n}),(0,r.jsx)(c.Z,{component:"h3",className:u().lower,children:i})]})]})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},808:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(a=n(3244))&&a.__esModule?a:{default:a},u=n(3398),s=n(1165),l=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var l=m[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}var g=function(e){var t=e.children,n=(0,c.useContext)(u.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),c=(n(450),n(9807)),i=n(7690),u=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},650:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return f}});var r=n(5893),o=n(9956),a=n(8494),c=n(8794),i=n(4866),u=n(1733),s=n(2861),l=!0;function f(e){var t=e.images,n=(0,i.XJ)(t.length);return(0,r.jsxs)(o.Z,{component:"section",children:[(0,r.jsx)(c.Z,{title:u.Tl[3].title,description:u.Tl[3].desc,url:u.Tl[3].url.pathname,image:"/img/screener/".concat(t[n])}),(0,r.jsx)(a.Z,{title:u.R,menu:u.Tl[3].title,lower:u.Tl[3].desc,image:"/img/screener/".concat(t[n])}),(0,r.jsx)(s.Z,{})]})}},5706:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(650)}])},1115:function(e){e.exports={root:"artbox_root__2SoaA",wrapper:"artbox_wrapper__23yI4",image:"artbox_image__LFR6m",title:"artbox_title__3zWWm",sub:"artbox_sub__3CUqK"}},5146:function(e){e.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","title-wrapper":"screener_title-wrapper__2fzl9","image-basic":"screener_image-basic__2aIiL",media:"screener_media__MeuyJ",plate:"screener_plate__2YHjh",title:"screener_title__3mYUP",menu:"screener_menu__rphxo",lower:"screener_lower__1iaX7"}},9008:function(e,t,n){e.exports=n(808)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),c=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||c()}}},function(e){e.O(0,[774,888,179],(function(){return t=5706,e(e.s=t);var t}));var t=e.O();_N_E=t}]);