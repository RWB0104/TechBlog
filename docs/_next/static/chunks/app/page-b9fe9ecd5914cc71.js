(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{90394:function(e,t,n){"use strict";var r=n(47255);t.Z=void 0;var i=r(n(19448)),o=n(18891),a=(0,i.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=a},56857:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(91147),i=n(87152),o=n(39129),a=n(72337),s=n(12688),l=n(27245),c=n(15835),d=n(81467),u=n(18891),h=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=n(19219),f=n(85402);function getAvatarUtilityClass(e){return(0,f.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],useUtilityClasses=e=>{let{classes:t,variant:n,colorDefault:r}=e;return(0,s.Z)({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},getAvatarUtilityClass,t)},p=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),x=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,l.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function useLoaded({crossOrigin:e,referrerPolicy:t,src:n,srcSet:r}){let[i,a]=o.useState(!1);return o.useEffect(()=>{if(!n&&!r)return;a(!1);let i=!0,o=new Image;return o.onload=()=>{i&&a("loaded")},o.onerror=()=>{i&&a("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=n,r&&(o.srcset=r),()=>{i=!1}},[e,t,n,r]),i}let Z=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:s,className:l,component:d="div",imgProps:h,sizes:m,src:f,srcSet:Z,variant:j="circular"}=n,b=(0,r.Z)(n,g),w=null,y=useLoaded((0,i.Z)({},h,{src:f,srcSet:Z})),P=f||Z,k=P&&"error"!==y,S=(0,i.Z)({},n,{colorDefault:!k,component:d,variant:j}),C=useUtilityClasses(S);return w=k?(0,u.jsx)(x,(0,i.Z)({alt:o,src:f,srcSet:Z,sizes:m,ownerState:S,className:C.img},h)):null!=s?s:P&&o?o[0]:(0,u.jsx)(v,{ownerState:S,className:C.fallback}),(0,u.jsx)(p,(0,i.Z)({as:d,ownerState:S,className:(0,a.Z)(C.root,l),ref:t},b,{children:w}))});var j=Z},16355:function(e,t,n){Promise.resolve().then(n.bind(n,42815)),Promise.resolve().then(n.bind(n,95879)),Promise.resolve().then(n.bind(n,69229)),Promise.resolve().then(n.bind(n,88634)),Promise.resolve().then(n.bind(n,13709)),Promise.resolve().then(n.bind(n,66521)),Promise.resolve().then(n.bind(n,68310)),Promise.resolve().then(n.t.bind(n,71305,23)),Promise.resolve().then(n.bind(n,98278)),Promise.resolve().then(n.bind(n,79705)),Promise.resolve().then(n.bind(n,31594)),Promise.resolve().then(n.bind(n,13942)),Promise.resolve().then(n.bind(n,27223)),Promise.resolve().then(n.bind(n,92479)),Promise.resolve().then(n.bind(n,49808))},39587:function(e,t,n){"use strict";n.r(t),n.d(t,{dancingScript:function(){return c.a},default:function(){return AppThemeProvider},gamjaFlower:function(){return u.a},notoSans:function(){return o.a},ubuntuMono:function(){return s.a}});var r=n(18891),i=n(197),o=n.n(i),a=n(8319),s=n.n(a),l=n(69907),c=n.n(l),d=n(7270),u=n.n(d),h=n(24865),m=n(17970),f=n(91558),g=n(20903),p=n(39129),x=n(46552);function AppThemeProvider(e){let{children:t}=e;x.ZP.initialize("G-7QYWYNZ90R");let{theme:n,setTheme:i}=(0,h.N)(),a=[o().style.fontFamily,"sans-serif"],s=(0,p.useCallback)(e=>(0,m.Z)({palette:{mode:e},typography:{fontFamily:a.join(", ")}}),[a]);return(0,p.useEffect)(()=>{let e="light"===localStorage.getItem("theme")?"light":"dark";i(e)},[i]),(0,r.jsxs)(f.Z,{theme:s(n),children:[(0,r.jsx)(g.ZP,{}),t]})}},15790:function(e,t,n){"use strict";n.d(t,{CN:function(){return r.gamjaFlower},GM:function(){return r.ubuntuMono},Vj:function(){return r.dancingScript},wh:function(){return r.notoSans}});var r=n(39587)},13942:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return BusinessCard}});var r=n(18891),i=n(32111),o=n(80820),a=n(90394),s=n(65564),l=n(21882),c=n(82056),d=n(77333),u=n(13473),h=n(31339),m=n(54783),f=n.n(m),g=n(63201),p=n(41076),x=n.n(p),v=n(81664),Z=n.n(v);let j=f().bind(Z());function BusinessCard(){let{palette:{background:{default:e}}}=(0,c.Z)();return(0,r.jsx)(g.E.div,{initial:{opacity:0,translateY:50},transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1,translateY:0},children:(0,r.jsx)(d.Z,{borderRadius:2,boxShadow:"3px 3px 10px black",className:j("card"),"data-component":"BusinessCard",height:380,maxWidth:280,padding:.5,width:"100%",children:(0,r.jsx)(d.Z,{bgcolor:e,borderRadius:2,height:"100%",padding:2,children:(0,r.jsxs)(u.Z,{height:"100%",justifyContent:"space-between",width:"100%",children:[(0,r.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(h.Z,{className:j("text"),fontWeight:"bold",variant:"h4",children:o.S7.nickname}),(0,r.jsx)(i.Z,{size:42})]}),(0,r.jsxs)(u.Z,{spacing:1,children:[(0,r.jsx)(h.Z,{className:j("text"),fontWeight:"bold",children:o.L1.title}),(0,r.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)("img",{alt:"홈페이지",height:24,src:"https://itcode.dev/logo.png",width:24}),(0,r.jsx)(x(),{href:"https://itcode.dev",children:(0,r.jsx)(h.Z,{children:"홈페이지"})})]}),(0,r.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(x(),{href:"mailto:".concat(o.S7.email),children:(0,r.jsx)(h.Z,{children:o.S7.email})})]}),(0,r.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(x(),{href:o.S7.social.github.link,target:"_blank",children:(0,r.jsx)(h.Z,{children:o.S7.social.github.name})})]}),(0,r.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(x(),{href:o.S7.social.linkedin.link,target:"_blank",children:(0,r.jsx)(h.Z,{children:o.S7.social.linkedin.name})})]})]})]})})})})}},27223:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HomeNewistBox}});var r=n(18891),i=n(71),o=n(68161),a=n(13473),s=n(31339),l=n(39129);function HomeNewistBox(e){let{markdownList:t}=e,n=(0,l.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return(0,o.UY)(t.date)}).sort((e,t)=>t.frontmatter.date-e.frontmatter.date),[t]);return(0,r.jsxs)(a.Z,{"data-component":"HomeNewistBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,r.jsxs)(a.Z,{spacing:2,children:[(0,r.jsx)(s.Z,{fontWeight:"bold",variant:"h4",children:"✨ 신규 컨텐츠"}),(0,r.jsx)(s.Z,{color:"GrayText",children:"2주 이내에 작성된 게시글/프로젝트의 목록입니다."})]}),(0,r.jsx)(i.Z,{markdown:n})]})}},92479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HomePopularBox}});var r=n(18891),i=n(52138),o=n(41263),a=n(71),s=n(13473),l=n(31339),c=n(39129);function HomePopularBox(e){let{type:t,markdownList:n}=e,{data:d,isLoading:u}=(0,i.MA)(t),h=(0,c.useMemo)(()=>"posts"===t?"게시글":"프로젝트",[t]),m=(0,c.useMemo)(()=>{let e=(null==d?void 0:d.rows.map(e=>{let{dimensionValues:t}=e;return t[0].value}))||[];return e.map(e=>n.filter(t=>{let{url:n}=t;return e===n})[0])},[d,n]);return(0,r.jsxs)(s.Z,{"data-component":"HomePopularBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,r.jsxs)(s.Z,{spacing:2,children:[(0,r.jsxs)(l.Z,{fontWeight:"bold",variant:"h4",children:["\uD83D\uDC51 인기 ",h]}),(0,r.jsxs)(l.Z,{color:"GrayText",children:["한 달 이내의 Google Analytics 데이터 중, 가장 조회수가 높은 ",h,"의 목록입니다."]})]}),u?(0,r.jsx)(s.Z,{alignItems:"center",children:(0,r.jsx)(o.Z,{iconName:"loading",maxWidth:200,width:"100%"})}):(0,r.jsx)(a.Z,{markdown:m})]})}},49808:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HomeWelcomBox}});var r=n(18891),i=n(5242),o=n(80820),a=n(15790),s=n(13473),l=n(31339);function HomeWelcomBox(){return(0,r.jsxs)(s.Z,{alignItems:"center","data-component":"HomeWelcomBox",padding:4,paddingBottom:20,paddingTop:20,spacing:5,children:[(0,r.jsx)(s.Z,{borderRadius:4,boxShadow:"0px 0px 20px #00000099",display:"flex",height:300,overflow:"hidden",width:300,children:(0,r.jsx)(i.Z,{alt:o.L1.title,height:"100%",src:"/thumb.png",width:"100%"})}),(0,r.jsx)(l.Z,{fontFamily:a.CN.style.fontFamily,fontWeight:"bold",textAlign:"center",variant:"h4",children:o.L1.title})]})}},81664:function(e){e.exports={card:"BusinessCard_card__QmAX0",text:"BusinessCard_text__QjLjC",image:"BusinessCard_image__uNH5_"}}},function(e){e.O(0,[119,130,912,658,14,180,288,818,690,602,41,71,308,445,744],function(){return e(e.s=16355)}),_N_E=e.O()}]);