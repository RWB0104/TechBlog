(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{100:function(e,t,n){"use strict";n.d(t,{FM:function(){return c},IW:function(){return o},MA:function(){return a},Py:function(){return s},q7:function(){return i}});var r=n(8767);function a(e,t){let n=(0,r.useMutation)(["useGoogleAuthorize"],async()=>{let e=await fetch("https://accounts.google.com/o/oauth2/token",{body:JSON.stringify({client_id:"22130300203-s47tft38ah28e6o2jsv5144vqn1cl32p.apps.googleusercontent.com",client_secret:"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",grant_type:"refresh_token",refresh_token:"1//04SoK9dOIeQQDCgYIARAAGAQSNwF-L9IrNkGEGZ5xuJSsDuT5NbSMUWBd9sFrbtdv3hegoJZmQqSITRMCVMy1y71_DJZl4TsMEac"}),method:"POST"});if(e.ok){let t=await e.json();return t}},void 0);return(0,r.useQuery)(["useGetGooglePopularData",e],async()=>{let t=await n.mutateAsync(),r=await fetch("https://content-analyticsdata.googleapis.com/v1beta/properties/284521573:runReport?alt=json",{body:JSON.stringify({dateRanges:[{endDate:"today",startDate:"30daysAgo"}],dimensionFilter:{filter:{fieldName:"pagePath",stringFilter:{matchType:"BEGINS_WITH",value:"/".concat(e,"/2")}}},dimensions:[{name:"pagePath"}],limit:"10",metricAggregations:["TOTAL"],metrics:[{name:"active28DayUsers"}]}),headers:{Authorization:"".concat(null==t?void 0:t.token_type," ").concat(null==t?void 0:t.access_token)},method:"POST"});if(r.ok){let e=await r.json();return e}},t)}function o(e,t){return(0,r.useQuery)(["useGetContents",e],async()=>{let t=await fetch("/".concat(e,".json")),n=(await t.json()).list;return n},t)}function s(e,t){return(0,r.useQuery)(["useGetCategories",e],async()=>{let t=await fetch("/".concat(e,"-category.json")),n=(await t.json()).list;return n},t)}function c(e,t,n,a){return(0,r.useQuery)(["useGetPopularContents",e],async()=>{if(t&&n){let e=n.rows.map(e=>e.dimensionValues[0].value.replace(/.html$/,""))||[];return(null==e?void 0:e.reduce((e,n)=>{let r=null==t?void 0:t.find(e=>"/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])===n);return r&&e.push(r),e},[]))||[]}return[]},{enabled:void 0!==t&&void 0!==n,...a})}function i(e){return(0,r.useQuery)(["useGetImage"],async()=>{let e=await fetch("/image.json"),t=await e.json();return t},e)}},2785:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(5893),a=n(6058),o=n(1586),s=n(5821),c=n(344),i=n.n(c),l=n(7166),u=n.n(l),d=n(210),p=n(495),m=n(3448),h=n.n(m),_=n(1664),f=n.n(_),j=n(2804);function g(e){let{urls:t,group:n}=e,a=(0,j.sJ)(p.Oj),o=u().bind(h());if(n&&n.length>0){let e="/".concat(n[0].header.type,"/").concat(t.slice(2,6).join("/")),s=n.map((t,n)=>{let{title:a}=t.header,o="/".concat(t.header.type,"/").concat(t.url.slice(1,5).join("/"));return(0,r.jsx)("li",{children:e===o?(0,r.jsxs)("p",{title:a,children:["\uD83D\uDC40 ",(0,r.jsx)("b",{children:a})]}):(0,r.jsx)(f(),{href:o,legacyBehavior:!0,passHref:!0,children:(0,r.jsx)("a",{href:"#replace",title:a,children:a})})},n)}),c=n[0].header.group;return(0,r.jsxs)("article",{className:o("root",a),children:[(0,r.jsxs)("div",{className:o("meta"),children:[(0,r.jsx)("div",{className:o("dimmer"),children:(0,r.jsxs)("div",{className:o("prompt"),children:[(0,r.jsx)("h3",{className:o("title"),children:"시리즈 톺아보기"}),(0,r.jsx)("p",{children:c})]})}),(0,r.jsx)("img",{alt:c,className:o("image"),src:n[0].header.coverImage,title:c})]}),(0,r.jsx)("div",{className:o("body"),children:(0,r.jsx)("ul",{className:o("list"),children:s})})]})}return null}var x=n(6579),y=n(6715),v=n.n(y),b=n(155);function N(e){let{className:t,data:n,isNext:a}=e;return n?(0,r.jsx)(f(),{href:"/".concat(null==n?void 0:n.header.type,"/").concat(null==n?void 0:n.url.slice(1,5).join("/")),legacyBehavior:!0,passHref:!0,children:(0,r.jsxs)("a",{className:t,"data-prev":a,href:"#replace",title:n.header.title,children:[a&&(0,r.jsx)(b.O8Q,{}),(0,r.jsx)("p",{children:n.header.title}),!a&&(0,r.jsx)(b.qvS,{})]})}):null}function C(e){let{page:t}=e,{prev:n,next:a}=t,o=(0,j.sJ)(p.Oj),s=u().bind(v());return(0,r.jsxs)("article",{className:s("root"),children:[(0,r.jsxs)("div",{className:s("mover-wrapper"),children:[(0,r.jsx)("div",{children:(0,r.jsx)(N,{className:s("button",o),data:a,isNext:!0})}),(0,r.jsx)("div",{children:(0,r.jsx)(N,{className:s("button",o),data:n})})]}),(0,r.jsx)("hr",{className:s("divider")}),(0,r.jsx)("div",{children:(0,r.jsx)(f(),{href:"/".concat(t.type),legacyBehavior:!0,passHref:!0,children:(0,r.jsxs)("a",{className:s("button",o),href:"#replace",title:"/".concat(t.type),children:[(0,r.jsx)(b.pLT,{}),(0,r.jsx)("p",{children:"목록"})]})})})]})}var w=n(9273),k=n.n(w);function S(e){let{toc:t}=e,n=(0,j.sJ)(p.Oj),a=u().bind(k());return t?(0,r.jsxs)("div",{className:a("toc",n),children:[(0,r.jsx)("h2",{children:"Table of Contents"}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]}):null}var M=n(9527),O=n.n(M);function G(e){let{content:t}=e,n=(0,j.sJ)(p.Oj);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O(),{children:(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",rel:"stylesheet"})}),(0,r.jsx)("div",{className:"markdown ".concat(n),dangerouslySetInnerHTML:{__html:t}})]})}function T(e){var t,n,c;let{data:l}=e,p=l.header.type===a.ze.POSTS?"posts":"projects",m=[p].concat(l.url),h=u().bind(i()),_={next:null===(t=l.meta)||void 0===t?void 0:t.next,prev:null===(n=l.meta)||void 0===n?void 0:n.prev,type:l.header.type};return(0,r.jsxs)("article",{className:h("root"),children:[(0,r.jsx)(g,{group:null===(c=l.meta)||void 0===c?void 0:c.group,urls:m}),(0,r.jsx)(S,{toc:l.toc}),(0,r.jsx)(o.Z,{urls:m}),(0,r.jsx)(G,{content:l.content}),(0,r.jsx)(d.Z,{adClient:"ca-pub-5522045122225064",adFormat:"rspv",adLayout:"in-article",adSlot:"8348565597",fullWidthResponsive:"true"}),(0,r.jsx)(x.Z,{header:l.header}),(0,r.jsx)(C,{page:_}),(0,r.jsx)(s.Z,{flag:l.header.comment})]})}},6579:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),a=n(6058),o=n(7183),s=n(4293),c=n.n(s),i=n(7166),l=n.n(i),u=n(1664),d=n.n(u),p=n(495),m=n(2880),h=n.n(m),_=n(2804);function f(e){let{type:t,tags:n}=e,a=l().bind(h()),o=(0,_.sJ)(p.Oj);return(0,r.jsx)(r.Fragment,{children:n.map((e,n)=>(0,r.jsx)("p",{className:a("root",o),"data-type":t,children:e},n))})}function j(e){let{header:t}=e,n=(0,a.SG)(t.date),s=l().bind(c());return(0,r.jsxs)("article",{className:s("root"),children:[(0,r.jsxs)("div",{className:s("item"),children:[(0,r.jsx)("p",{className:s("text"),children:"\uD83D\uDCC6 작성일"}),(0,r.jsx)("p",{className:s("text"),children:"".concat(n.year,"-").concat(n.month,"-").concat(n.day," ").concat(n.week," ").concat(n.hour,":").concat(n.minute,":").concat(n.second)})]}),(0,r.jsxs)("div",{className:s("item"),children:[(0,r.jsx)("p",{className:s("text"),children:"\uD83D\uDCDA 카테고리"}),(0,r.jsxs)("div",{className:s("category-wrapper"),children:[(0,r.jsx)("img",{alt:t.category,className:s("category-image"),src:o.En[t.category]||o.En.All}),(0,r.jsx)(d(),{href:"/".concat(t.type,"?category=").concat(t.category),legacyBehavior:!0,passHref:!0,children:(0,r.jsx)("a",{className:s("link"),href:"#replace",children:t.category})})]})]}),(0,r.jsxs)("div",{className:s("item"),children:[(0,r.jsx)("p",{className:s("text"),children:"\uD83C\uDFF7️ 태그"}),(0,r.jsx)("div",{className:s("tags"),children:(0,r.jsx)(f,{tags:t.tag,type:t.type})})]})]})}},6765:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(7183),o=n(9527),s=n.n(o);function c(e){let{title:t,description:n=a.dz,type:o="website",url:c="",image:i="https://user-images.githubusercontent.com/50317129/167476335-17cd861c-1d56-4384-b0ae-8c3680d9de29.png",locale:l="ko_KR"}=e;return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"".concat(t," - ").concat(a.R)}),(0,r.jsx)("meta",{content:n,name:"description"}),(0,r.jsx)("meta",{content:a.R,property:"og:site_name"}),(0,r.jsx)("meta",{content:"".concat(t," - ").concat(a.R),property:"og:title"}),(0,r.jsx)("meta",{content:n,property:"og:description"}),(0,r.jsx)("meta",{content:o,property:"og:type"}),(0,r.jsx)("meta",{content:"".concat(a._n).concat(c),property:"og:url"}),(0,r.jsx)("meta",{content:i,property:"og:image"}),(0,r.jsx)("meta",{content:l,property:"og:locale"}),(0,r.jsx)("link",{href:"".concat(a._n).concat(c),rel:"canonical"})]})}},8318:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=n(6058),o=n(100),s=n(4819),c=n.n(s),i=n(7166),l=n.n(i),u=n(7294);function d(e){let{title:t,menu:n,lower:s,image:i}=e,d=l().bind(c()),{data:p}=(0,o.q7)(),[m]=(0,u.useState)(i||(null==p?void 0:p.list[(0,a.XJ)((null==p?void 0:p.list.length)||0)])),h=(0,u.useRef)(null),_=(0,u.useRef)(null);(0,u.useEffect)(()=>{m&&(/(.mp4|webm)$/.test(m)&&h.current?h.current.src=m:_.current&&(_.current.src=m))},[m]);let f=(0,u.useMemo)(()=>/(.mp4|webm)$/.test(m||"")?(0,r.jsx)("video",{className:d("media"),ref:h,autoPlay:!0,loop:!0,muted:!0}):(0,r.jsx)("img",{alt:"screen",className:d("image"),ref:_}),[m]);return(0,r.jsxs)("div",{className:d("root"),children:[(0,r.jsxs)("div",{className:d("image-wrapper"),children:[m?f:null,(0,r.jsx)("div",{className:c().plate})]}),(0,r.jsxs)("div",{className:d("title-wrapper"),children:[(0,r.jsx)("h1",{className:d("title"),children:t}),(0,r.jsx)("h3",{className:d("menu"),children:n}),(0,r.jsx)("h3",{className:d("lower"),children:s})]})]})}},5821:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(495),o=n(5748),s=n.n(o),c=n(2804);function i(e){let{flag:t}=e,n=(0,c.sJ)(a.Oj);return t?(0,r.jsx)("article",{className:s().root,id:"utterances",ref:e=>{if(e){if(0===document.querySelectorAll("#utterances > div").length){let t=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),t.appendChild(r),e.appendChild(t)}else{let t=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),t.appendChild(r),e.innerHTML="",e.appendChild(t)}}}}):null}},3448:function(e){e.exports={root:"ContentGroup_root___wrl8",dark:"ContentGroup_dark__jaISC",light:"ContentGroup_light__Jf1Lm",meta:"ContentGroup_meta__GT44c",dimmer:"ContentGroup_dimmer__7IGYO",prompt:"ContentGroup_prompt__mEBPw",image:"ContentGroup_image__0mWxQ",body:"ContentGroup_body__d78i7",list:"ContentGroup_list__PUfee"}},344:function(e){e.exports={root:"ContentLayout_root__6BVQ5"}},4293:function(e){e.exports={root:"ContentMeta_root__AB4q4",item:"ContentMeta_item__t2nv1","category-wrapper":"ContentMeta_category-wrapper__iTc3o","category-image":"ContentMeta_category-image__eFQNA",tags:"ContentMeta_tags__fn78c",text:"ContentMeta_text__7J2iz",link:"ContentMeta_link__Vhv65"}},6715:function(e){e.exports={button:"ContentMover_button__y5Gt8",dark:"ContentMover_dark__g0c2f",light:"ContentMover_light__jf6kT",root:"ContentMover_root__nbsUY","mover-wrapper":"ContentMover_mover-wrapper__AirRw",divider:"ContentMover_divider__0fz_H"}},2880:function(e){e.exports={root:"ContentTags_root__CsQOH",dark:"ContentTags_dark__A25TF",light:"ContentTags_light__Cm8k6"}},9273:function(e){e.exports={toc:"ContentToc_toc__5DTLv",dark:"ContentToc_dark__c0obj",light:"ContentToc_light__6ApKv"}},5748:function(e){e.exports={root:"Utterances_root__4mTVu"}},4819:function(e){e.exports={root:"Screener_root__TDRyI","image-wrapper":"Screener_image-wrapper__gwI4x","title-wrapper":"Screener_title-wrapper__MBQoW",image:"Screener_image__9miJb",media:"Screener_media__oeW6o",plate:"Screener_plate__LqO_8",title:"Screener_title__Qaw47",menu:"Screener_menu__I6GMV",lower:"Screener_lower__oLlSG"}},9527:function(e,t,n){e.exports=n(3121)},4298:function(e,t,n){e.exports=n(3573)},5074:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}(n(7294));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}let o=e=>((0,r.useEffect)(()=>{window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),r.default.createElement("ins",{className:`adsbygoogle ${e.className}`,style:e.style,"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-layout":e.adLayout,"data-ad-layout-key":e.adLayoutKey,"data-ad-format":e.adFormat,"data-full-width-responsive":e.fullWidthResponsive}));o.defaultProps={className:"",style:{display:"block"},adLayout:"",adLayoutKey:"",adFormat:"auto",fullWidthResponsive:"false"},t.default=o},210:function(e,t,n){"use strict";t.Z=void 0;var r,a=((r=n(5074))&&r.__esModule?r:{default:r}).default;t.Z=a}}]);