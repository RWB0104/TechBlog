(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{32111:function(e,t,n){"use strict";n.d(t,{Z:function(){return atom_Logo}});var i=n(18891),o=n(91307),r=n(13473),atom_Logo=function(e){let{size:t,...n}=e;return(0,i.jsx)(o.Z,{"data-component":"Logo",...n,children:(0,i.jsx)(r.Z,{alignItems:"center",height:t,justifyContent:"center",width:t,children:(0,i.jsx)("img",{alt:"logo",height:"100%",src:"/logo.png",width:"100%"})})})}},13709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Footer}});var i=n(18891),o=n(39129),atom_Hits=function(e){let{unique:t,countBgcolor:n,titleBgcolor:r,icon:c,iconColor:a,text:l,isFlat:s,...d}=e,u=(0,o.useMemo)(()=>t,[t]),h=(0,o.useMemo)(()=>{let e=Object.entries({count_bg:n,edge_flat:s,icon:c,icon_color:a,title:l,title_bg:r,url:u}).filter(e=>e[1]).map(e=>{let[t,n]=e;return"".concat(t,"=").concat(encodeURIComponent(n||""))}).join("&");return"https://hits.seeyoufarm.com/api/count/incr/badge.svg?".concat(e)},[u,n,r,c,a,l,s]);return(0,i.jsx)("img",{alt:u,"data-component":"Hits",src:h,...d})},r=n(82056),c=n(50276),a=n(52428),l=n(54783),s=n.n(l),d=n(41076),u=n.n(d),h=n(11908),m=n.n(h);let p=s().bind(m());var atom_LinkIconButton=function(e){let{tooltip:t,link:n,...l}=e,{palette:{mode:s}}=(0,r.Z)(),d=(0,o.useMemo)(()=>n.startsWith("/"),[n]);return(0,i.jsx)(a.Z,{title:t,arrow:!0,children:(0,i.jsx)(u(),{"data-component":"LinkIconButton",href:n,target:d?void 0:"_blank",children:(0,i.jsx)(c.Z,{className:p("icon",s),...l})})})},g=n(80820),x=n(45640),f=n(32040),j=n(65564),_=n(53820),v=n(78542),k=n(21882),Z=n(30744),w=n(85613),b=n(19389),S=n(77333),C=n(13473),y=n(31339);function Footer(){return(0,i.jsx)(S.Z,{component:"footer","data-component":"Footer",padding:4,paddingTop:10,children:(0,i.jsxs)(C.Z,{spacing:10,children:[(0,i.jsxs)(C.Z,{spacing:2,children:[(0,i.jsxs)(C.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:2,children:[(0,i.jsx)(atom_LinkIconButton,{link:"https://itcode.dev",tooltip:"\uD835\uDF45번 째 알파카의 우당탕탕 개발 연구소",children:(0,i.jsx)("img",{alt:"itcode.dev",height:24,src:"https://itcode.dev/logo-transparent.png",width:24})}),(0,i.jsx)(atom_LinkIconButton,{link:"https://github.com/RWB0104",tooltip:"GitHub 프로필",children:(0,i.jsx)(j.Z,{})}),(0,i.jsx)(atom_LinkIconButton,{link:"mailto:".concat(g.S7.email),tooltip:g.S7.email,children:(0,i.jsx)(_.Z,{})})]}),(0,i.jsxs)(C.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:2,children:[(0,i.jsx)(atom_LinkIconButton,{link:"https://www.linkedin.com/in/itcode/",tooltip:"LinkedIn",children:(0,i.jsx)(k.Z,{})}),(0,i.jsx)(atom_LinkIconButton,{link:"/sitemap-index.xml",tooltip:"Sitemap XML",children:(0,i.jsx)(w.Z,{})}),(0,i.jsx)(atom_LinkIconButton,{link:"/rss.xml",tooltip:"RSS XML",children:(0,i.jsx)(Z.Z,{})})]})]}),(0,i.jsxs)(C.Z,{spacing:3,children:[(0,i.jsxs)(C.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,i.jsx)(y.Z,{fontWeight:"bold",textAlign:"center",variant:"h5",children:g.L1.title}),(0,i.jsxs)(y.Z,{color:"GrayText",variant:"caption",children:["v",x.i8]})]}),(0,i.jsxs)(C.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,i.jsxs)(C.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[(0,i.jsx)(f.Z,{color:"primary",fontSize:"small"}),(0,i.jsx)(y.Z,{variant:"caption",children:"Copyright. All rights reserved."})]}),(0,i.jsxs)(C.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[(0,i.jsx)(b.Z,{color:"warning",fontSize:"small"}),(0,i.jsxs)(y.Z,{variant:"caption",children:["Developed by ",g.S7.nickname," since 2021.05"]})]}),(0,i.jsxs)(C.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[(0,i.jsx)(v.Z,{color:"error",fontSize:"small"}),(0,i.jsx)(y.Z,{variant:"caption",children:"4th Upgraded at 2023.08"})]})]}),(0,i.jsx)(C.Z,{direction:"row",justifyContent:"center",children:(0,i.jsx)(atom_Hits,{countBgcolor:"#222222",icon:"react.svg",iconColor:"#00d8ff",text:"views",titleBgcolor:"#333333",unique:"https://blog.itcode.dev"})})]})]})})}},66521:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Screener}});var i=n(18891),o=n(52138),r=n(77333),c=n(13473),a=n(54783),l=n.n(a),s=n(63201),d=n(39129),u=n(75614),h=n.n(u);let m=l().bind(h());function Screener(e){let{width:t="100%",height:n="100vh",cover:a,children:l}=e,[u,h]=(0,d.useState)(!1),{data:p=[]}=(0,o.bT)(),g=(0,d.useMemo)(()=>p[Math.floor(Math.random()*(p.length-1))],[p]),x=(0,d.useCallback)(()=>{h(!0)},[h]);return(0,d.useEffect)(()=>{a&&h(!0)},[a]),(0,i.jsxs)(r.Z,{className:m("screener"),component:"article","data-component":"Screener",height:n,position:"relative",width:t,children:[(0,i.jsx)(s.E.div,{animate:u?"animate":void 0,className:m("template"),initial:"initial",transition:{duration:.5},variants:{animate:{backdropFilter:"blur(0px)"},initial:{backdropFilter:"blur(50px)"}},children:(0,i.jsx)(c.Z,{alignItems:"center",bgcolor:"#00000099",height:"100%",justifyContent:"center",width:"100%",children:l})}),(0,i.jsx)(r.Z,{className:m("wrap"),children:a?(0,i.jsx)("img",{alt:a,className:m("cover"),height:"100%",src:a,width:"100%"}):(0,i.jsx)("video",{className:m("cover"),controls:!1,height:"100%",src:g,width:"100%",autoPlay:!0,loop:!0,muted:!0,onCanPlay:x})})]})}},68310:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Navigator}});var i=n(18891),o=n(32111),r=n(80820),c=n(2277),a=n(82056),l=n(77333),s=n(50276),d=n(13473),u=n(31339),h=n(41076),m=n.n(h),p=n(39129),molecule_Header=function(e){let{onMenuClick:t,...n}=e,{palette:{background:{default:h}}}=(0,a.Z)(),[g,x]=(0,p.useState)(!0),f=(0,p.useMemo)(()=>g?"transparent":h,[g,h]),j=(0,p.useMemo)(()=>g?"1px solid #FFFFFF55":void 0,[g]),_=(0,p.useMemo)(()=>g?void 0:"0px 3px 5px #00000044",[g]),v=(0,p.useMemo)(()=>g?"white":void 0,[g]);return(0,p.useEffect)(()=>{x(0===window.scrollY);let handle=()=>{x(0===window.scrollY)};return document&&document.addEventListener("scroll",handle),()=>{document.removeEventListener("scroll",handle)}},[x]),(0,i.jsx)(l.Z,{bgcolor:f,borderBottom:j,boxShadow:_,component:"header","data-component":"Header",height:50,left:0,position:"fixed",top:0,width:"100%",zIndex:1e4,...n,children:(0,i.jsxs)(d.Z,{alignItems:"center",color:v,direction:"row",height:"100%",paddingLeft:2,paddingRight:2,spacing:2,children:[t?(0,i.jsx)(s.Z,{color:"inherit",onClick:t,children:(0,i.jsx)(c.Z,{})}):null,(0,i.jsx)(m(),{href:"/",children:(0,i.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,i.jsx)(o.Z,{size:24}),(0,i.jsx)(u.Z,{color:"inherit",fontWeight:"bold",children:r.L1.title})]})})]})})},g=n(45640),x=n(14858),f=n(63779),j=n(17318),_=n(86831),v=n(62140),k=n(72053),Z=n(3778),w=n(35373),b=n(4620),S=n(9939);let C=[{icon:(0,i.jsx)(j.default,{}),title:"홈",url:"/"},{icon:(0,i.jsx)(_.Z,{}),title:"게시글",url:"/posts"},{icon:(0,i.jsx)(f.Z,{}),title:"프로젝트",url:"/projects"},{icon:(0,i.jsx)(x.Z,{}),title:"방명록",url:"/comments"}];var molecule_Sidebar=function(e){let{...t}=e,n=(0,p.useCallback)(()=>{t.onClose&&t.onClose({},"backdropClick")},[t.onClose]);return(0,i.jsx)(v.ZP,{"data-component":"Sidebar",sx:{zIndex:10001},...t,children:(0,i.jsxs)(d.Z,{alignItems:"center",height:"100%",justifyContent:"space-between",children:[(0,i.jsx)(l.Z,{minWidth:250,children:(0,i.jsx)(k.Z,{children:C.map(e=>{let{icon:t,title:o,url:r}=e;return(0,i.jsx)(Z.ZP,{children:(0,i.jsx)(m(),{className:"fullwidth",href:r,onClick:n,children:(0,i.jsxs)(w.Z,{children:[(0,i.jsx)(b.Z,{children:t}),(0,i.jsx)(S.Z,{primary:o})]})})},o)})})}),(0,i.jsxs)(d.Z,{alignItems:"center",marginBottom:4,spacing:1,children:[(0,i.jsx)(u.Z,{variant:"caption",children:r.L1.title}),(0,i.jsx)(u.Z,{color:"GrayText",variant:"caption",children:g.i8})]})]})})};function Navigator(){let[e,t]=(0,p.useState)(!1),n=(0,p.useCallback)(()=>{t(!0)},[t]),o=(0,p.useCallback)(()=>{t(!1)},[t]);return(0,i.jsxs)(l.Z,{"data-component":"Navigator",children:[(0,i.jsx)(molecule_Header,{onMenuClick:n}),(0,i.jsx)(molecule_Sidebar,{open:e,onClose:o})]})}},98278:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ThemeSwitch}});var i=n(18891),o=n(24865),r=n(84250),c=n(89212),a=n(83535),l=n(54783),s=n.n(l),d=n(63201),u=n(88893),h=n(39129),m=n(86177),p=n.n(m);let g=s().bind(p());function ThemeSwitch(){let{theme:e,toggle:t}=(0,o.N)(),n=(0,h.useCallback)(e=>(0,i.jsxs)(d.E.div,{animate:"animate",className:g("wrap"),exit:"initial",initial:"initial",transition:{duration:.3},variants:{animate:{translateY:0},initial:{translateY:50}},children:["light"===e?(0,i.jsx)(r.Z,{className:g("icon","dark"),htmlColor:"blueviolet"}):null,"dark"===e?(0,i.jsx)(c.Z,{className:g("icon","light"),htmlColor:"orange"}):null]},e),[]),l=(0,h.useCallback)(()=>{t()},[t]);return(0,i.jsx)(a.Z,{className:g("fab",e),size:"small",onClick:l,children:(0,i.jsxs)(u.M,{children:["light"===e?n("light"):null,"dark"===e?n("dark"):null]})})}},79705:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Toaster}});var i=n(18891),o=n(90616),r=n(36936),c=n(19368),a=n(17442),l=n(31339),s=n(39129);function Toaster(){let{toast:e,setToast:t}=(0,o.J)(),n=(0,s.useCallback)(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"escapeKeyDown";n&&"clickaway"===n||t(void 0)},[t]);return(0,i.jsx)(a.Z,{anchorOrigin:(null==e?void 0:e.anchorOrigin)||{horizontal:"right",vertical:"top"},autoHideDuration:(null==e?void 0:e.duration)||3e3,"data-component":"Toaster",open:void 0!==e,sx:{marginTop:8},onClose:n,children:(0,i.jsxs)(r.Z,{severity:null==e?void 0:e.severity,onClose:n,children:[(null==e?void 0:e.title)?(0,i.jsx)(c.Z,{children:(0,i.jsx)(l.Z,{fontWeight:"bold",children:e.title})}):null,(null==e?void 0:e.content)||null]})})}},31594:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Whoop}});var i=n(18891),o=n(26038),r=n(83535),c=n(39129);function Whoop(){let e=(0,c.useCallback)(()=>{window.scrollTo({behavior:"smooth",top:0})},[]);return(0,i.jsx)(r.Z,{"data-component":"Whoop",size:"small",onClick:e,children:(0,i.jsx)(o.Z,{})})}},52138:function(e,t,n){"use strict";n.d(t,{MA:function(){return useGetGooglePopularData},bT:function(){return useScreenerVideo}});var i=n(72422),o=n(59691);function useScreenerVideo(e){return(0,i.a)(["screener-video"],async()=>{let e=await fetch("https://datastore.itcode.dev/itcode/video");if(e.ok){let t=await e.json();return t}throw e},e)}function useGoogleAuthorize(e){return(0,o.D)(["google-authorize"],async()=>{let e=await fetch("https://accounts.google.com/o/oauth2/token",{body:JSON.stringify({client_id:"22130300203-s47tft38ah28e6o2jsv5144vqn1cl32p.apps.googleusercontent.com",client_secret:"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",grant_type:"refresh_token",refresh_token:"1//04SoK9dOIeQQDCgYIARAAGAQSNwF-L9IrNkGEGZ5xuJSsDuT5NbSMUWBd9sFrbtdv3hegoJZmQqSITRMCVMy1y71_DJZl4TsMEac"}),method:"POST"});if(e.ok){let t=await e.json();return t}},e)}function useGetGooglePopularData(e,t){let n=useGoogleAuthorize();return(0,i.a)(["google-popular-data",e],async()=>{let t=await n.mutateAsync(),i=await fetch("https://content-analyticsdata.googleapis.com/v1beta/properties/284521573:runReport?alt=json",{body:JSON.stringify({dateRanges:[{endDate:"today",startDate:"30daysAgo"}],dimensionFilter:{filter:{fieldName:"pagePath",stringFilter:{matchType:"BEGINS_WITH",value:"/".concat(e,"/2")}}},dimensions:[{name:"pagePath"}],limit:6,metricAggregations:["TOTAL"],metrics:[{name:"active28DayUsers"}]}),headers:{Authorization:"".concat(null==t?void 0:t.token_type," ").concat(null==t?void 0:t.access_token)},method:"POST"});if(i.ok){let e=await i.json();return e}},t)}},80820:function(e,t,n){"use strict";n.d(t,{L1:function(){return i},RH:function(){return r},S7:function(){return o}});let i={baseurl:"https://blog.itcode.dev",description:"\uD835\uDF45번째 알파카의 우당탕탕 개발 기록",title:"\uD835\uDF45번째 알파카의 개발 낙서장"},o={email:"psj2716@mensakorea.org",nickname:"RWB",social:{github:{link:"https://github.com/RWB0104",name:"Kapoo"},linkedin:{link:"https://www.linkedin.com/in/itcode/",name:"RWB"}}},r={comments:{description:"\uD83D\uDC9D 두근대며 읽어보는 중...",title:"방명록",url:"/comments"},index:{description:"\uD83E\uDD99 ".concat(i.description),title:"홈",url:"/"},posts:{description:"✒️ 뭔가 끄적끄적 쓰는 중...",title:"게시글",url:"/posts"},projects:{description:"\uD83D\uDDA5️ 무언가 뚝딱뚝딱 하는 중...",title:"프로젝트",url:"/projects"}}},24865:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});var i=n(31360);let o=(0,i.Ue)(e=>({setTheme:t=>{localStorage.setItem("theme",t),e({theme:t})},theme:"dark",toggle:()=>{e(e=>{let{theme:t}=e,n="light"===t?"dark":"light";return localStorage.setItem("theme",n),{theme:n}})}}))},90616:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var i=n(31360);let o=(0,i.Ue)(e=>({setToast:t=>{e({toast:t})}}))},11908:function(e){e.exports={icon:"LinkIconButton_icon__gYQIM",light:"LinkIconButton_light__syiuu",dark:"LinkIconButton_dark__5Sydb"}},75614:function(e){e.exports={screener:"Screener_screener__BCV2t",gradient:"Screener_gradient__mR__K",template:"Screener_template__bRLpD",wrap:"Screener_wrap__pw6Tz",cover:"Screener_cover__q6Mfd"}},71305:function(e){e.exports={icon:"ScreenerBox_icon__Qvdqx",scroll:"ScreenerBox_scroll__VU_pI",text:"ScreenerBox_text__EQeKY"}},86177:function(e){e.exports={fab:"ThemeSwitch_fab__o0N2m",light:"ThemeSwitch_light__fdJAt",dark:"ThemeSwitch_dark__DcN4Q",wrap:"ThemeSwitch_wrap__vzEd0",icon:"ThemeSwitch_icon__Nm2mR"}},45640:function(e){"use strict";e.exports={i8:"4.15.0"}}}]);