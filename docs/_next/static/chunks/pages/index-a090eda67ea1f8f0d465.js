(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4866:function(e,t,n){"use strict";n.d(t,{XJ:function(){return r},SG:function(){return c},Jt:function(){return o},Jq:function(){return a}});function r(e){return Math.floor(Math.random()*e)}function c(e){var t=void 0===e?new Date:new Date(e);return{year:t.getFullYear().toString(),month:t.getMonth()+1>9?(t.getMonth()+1).toString():"0".concat(t.getMonth()+1),day:t.getDate()+1>9?t.getDate().toString():"0".concat(t.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],hour:t.getHours()>9?t.getHours().toString():"0".concat(t.getHours()),minute:t.getMinutes()>9?t.getMinutes().toString():"0".concat(t.getMinutes()),second:t.getSeconds()>9?t.getSeconds().toString():"0".concat(t.getSeconds())}}function o(e){if(e){var t=0;return e.reduce((function(e,n){var r=n.text,c=n.tag,o=n.depth;return o>t?(t++,e+='<ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):o<t?(t--,e+='</ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):e+='<li><a href="#'.concat(c,'">').concat(r,"</a></li>"),e}),"")+"</ul>"}return""}function a(e){var t=(new Date).getTime()-e.getTime();if(t>31536e6){var n=Math.floor(t/31536e6);return"".concat(n,"\ub144 \uc804")}if(t>2592e6){var r=Math.floor(t/2592e6);return"".concat(r,"\ub2ec \uc804")}if(t>864e5){var c=Math.floor(t/864e5);return"".concat(c,"\uc77c \uc804")}if(t>36e5){var o=Math.floor(t/36e5);return"".concat(o,"\uc2dc\uac04 \uc804")}if(t>6e4){var a=Math.floor(t/6e4);return"".concat(a,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},8996:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(5893),c=n(1749),o=n(7294),a=n(8463),i=n(9738),s=n(9956),l=n(951),u=n(9912),m=n(3901),_=n(2318),p=n(1907),g=n(7812),d=n(6037),f=n(4326),x=n(9945),h=n(1163),j=n(5035),Z=n(1472),y=n(1733),N=n(4866),v=n(385),w=n.n(v);function b(e){var t=e.item,n=t.header,c=n.title,v=n.excerpt,b=n.coverImage,T=n.type,k=n.category,S=n.date,M=t.url,R=(0,h.useRouter)(),C=(0,o.useState)(!1),D=C[0],E=C[1],I=(new Date).getTime()-new Date(t.header.date).getTime()<6048e5;return(0,r.jsxs)(a.Z,{className:w().root,children:[(0,r.jsxs)(i.Z,{onClick:function(){return R.push("/".concat(T,"/").concat(M[1],"/").concat(M[2],"/").concat(M[3],"/").concat(M[4]))},children:[(0,r.jsx)(s.Z,{className:w()["image-wrapper"],children:(0,r.jsx)(l.Z,{className:w().image,component:"img",image:b})}),(0,r.jsxs)(u.Z,{className:w().wrapper,children:[(0,r.jsxs)(s.Z,{display:"grid",className:w()["category-wrapper"],gridTemplateColumns:"40px 1fr",alignItems:"center",children:[(0,r.jsx)(m.Z,{className:w()["category-image"],alt:k,src:y.En[k]||"https://user-images.githubusercontent.com/50317129/132937376-276bf532-841b-4f80-9ba7-d05063ee6e92.png"}),(0,r.jsx)(_.Z,{className:w().category,component:"h4",variant:"h4",gutterBottom:!0,children:k}),(0,r.jsx)(j.Z,{flag:I})]}),(0,r.jsx)(_.Z,{className:w().title,component:"h1",variant:"h3",gutterBottom:!0,children:c}),(0,r.jsx)(_.Z,{className:w().excerpt,children:v})]})]}),(0,r.jsxs)(p.Z,{className:w().footer,children:[(0,r.jsxs)(_.Z,{children:["\ud83d\udd54 ",(0,N.Jq)(new Date(S))]}),(0,r.jsx)(g.Z,{onClick:function(){return E(!D)},children:D?(0,r.jsx)(f.Z,{}):(0,r.jsx)(x.Z,{})})]}),(0,r.jsx)(d.Z,{in:D,unmountOnExit:!0,children:(0,r.jsx)(u.Z,{className:w()["footer-detail"],children:(0,r.jsx)(Z.Z,{header:t.header})})})]})}var T=n(9723),k=n.n(T);function S(e){var t=e.list.map((function(e,t){return(0,r.jsx)(c.Z,{item:!0,className:k().item,children:(0,r.jsx)(b,{item:e})},t)}));return(0,r.jsx)(c.Z,{container:!0,className:k().root,children:t})}},1472:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),c=n(9956),o=n(2318),a=n(3901),i=n(1163),s=n(1267),l=n(4827),u=n.n(l);function m(e){var t=e.type,n=e.tags,c=(0,i.useRouter)(),o=n.map((function(e,n){return(0,r.jsx)(s.Z,{className:u().root,label:e,clickable:!0,onClick:function(){return c.push("/".concat(t,"/tag/").concat(e,"/1"))}},n)}));return(0,r.jsx)(r.Fragment,{children:o})}var _=n(4866),p=n(1733),g=n(4948),d=n.n(g);function f(e){var t=e.header,n=(0,i.useRouter)(),s=(0,_.SG)(t.date);return(0,r.jsxs)(c.Z,{component:"article",className:d().root,children:[(0,r.jsxs)(c.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:d().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,r.jsx)(o.Z,{className:d().text,children:"".concat(s.year,"-").concat(s.month,"-").concat(s.day," ").concat(s.week," ").concat(s.hour,":").concat(s.minute,":").concat(s.second)})]}),(0,r.jsxs)(c.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:d().text,children:"\ud83d\udcda \uce74\ud14c\uace0\ub9ac"}),(0,r.jsxs)(c.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,r.jsx)(a.Z,{alt:t.category,src:p.En[t.category]||"https://user-images.githubusercontent.com/50317129/132937376-276bf532-841b-4f80-9ba7-d05063ee6e92.png"}),(0,r.jsx)(o.Z,{className:d().link,onClick:function(){return n.push("/".concat(t.type,"/category/").concat(t.category,"/1"))},children:t.category})]})]}),(0,r.jsxs)(c.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:d().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(m,{type:t.type,tags:t.tag})})]})]})}},5035:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),c=n(9956),o=n(6328),a=n.n(o);function i(e){return e.flag?(0,r.jsx)(c.Z,{position:"absolute",className:a().root,top:10,right:10}):null}},2861:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),c=n(7294),o=n(9956),a=n(2318),i=n(4866),s=n(1733),l=n(1115),u=n.n(l);function m(){var e=(0,c.useRef)(null),t=(0,c.useRef)(null),n=(0,c.useRef)(null),l=(0,i.XJ)(s.TJ.length),m=s.TJ[l],_=m.title,p=m.author,g=m.images;return(0,c.useEffect)((function(){e&&e.current&&(e.current.style.backgroundImage="url(".concat(g,")")),t&&t.current&&(t.current.innerText=_),n&&n.current&&(n.current.innerText=p)})),(0,r.jsxs)(o.Z,{className:u().root,component:"article",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,r.jsx)(o.Z,{className:u().wrapper,position:"absolute",children:(0,r.jsx)("div",{ref:e,className:u().image})}),(0,r.jsxs)(o.Z,{display:"grid",children:[(0,r.jsx)(a.Z,{ref:t,component:"h1",className:u().title,gutterBottom:!0}),(0,r.jsx)(a.Z,{ref:n,component:"h3",className:u().sub})]})]})}},8794:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),c=n(9008),o=n(1733);function a(e){var t=e.title,n=e.description,a=void 0===n?o.dz:n,i=e.type,s=void 0===i?"website":i,l=e.url,u=void 0===l?"":l,m=e.image,_=void 0===m?"/favicon.ico":m,p=e.locale,g=void 0===p?"ko_KR":p;return(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"".concat(t," - ").concat(o.R)}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:o.R}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(t," - ").concat(o.R)}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:type",content:s}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(o._n).concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:_}),(0,r.jsx)("meta",{property:"og:locale",content:g}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(o._n).concat(u)})]})}},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),c=n(7294),o=n(9956),a=n(2318),i=n(5146),s=n.n(i);function l(e){var t=e.title,n=e.lower,i=e.image,l=e.special?s()["title-special"]:s().title,u=(0,c.useRef)(null);(0,c.useEffect)((function(){u&&u.current&&(u.current.style.backgroundImage="url(".concat(i,")"))}),[i]);var m=/(.mp4|webm)$/.test(i)?(0,r.jsxs)(o.Z,{className:s()["image-wrapper"],children:[(0,r.jsx)("video",{id:"test",className:s().media,autoPlay:!0,loop:!0,muted:!0,children:(0,r.jsx)("source",{src:i})}),(0,r.jsx)("div",{className:s().plate})]}):(0,r.jsx)(o.Z,{className:s()["image-wrapper"],children:(0,r.jsx)("div",{ref:u,className:s()["image-basic"]})});return(0,r.jsxs)(o.Z,{className:s().root,children:[m,(0,r.jsx)(a.Z,{component:"h1",className:l,align:"center",children:t}),(0,r.jsx)(a.Z,{component:"h3",className:s().lower,align:"center",children:n})]})}},6404:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return j}});var r=n(5893),c=n(9956),o=n(2861),a=n(8494),i=n(3832),s=n(2318),l=n(282),u=n(1163),m=n(8996),_=n(4115),p=n.n(_);function g(e){var t=e.num,n=e.title,c=e.url,o=e.list,a=(0,u.useRouter)();return(0,r.jsxs)(i.Z,{maxWidth:"md",className:p().root,children:[(0,r.jsx)(s.Z,{component:"h1",className:p().title,gutterBottom:!0,align:"center",children:n}),(0,r.jsx)(m.Z,{list:o.slice(0,t)}),(0,r.jsx)(l.Z,{className:p().more,onClick:function(){return a.push(c)},children:"M O R E"})]})}var d=n(1733),f=n(4866),x=n(8794),h=!0;function j(e){var t=e.images,n=e.posts,i=e.projects,s=(0,f.XJ)(t.length);return(0,r.jsxs)(c.Z,{component:"section",children:[(0,r.jsx)(x.Z,{title:d.Tl[0].title,description:d.Tl[0].desc,image:"/img/screener/".concat(t[s]),url:""}),(0,r.jsx)(a.Z,{title:d.Tl[0].title,lower:d.Tl[0].desc,image:"/img/screener/".concat(t[s]),special:!0}),(0,r.jsx)(g,{num:5,title:d.Tl[1].title,url:d.Tl[1].url,list:n}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(g,{num:5,title:d.Tl[2].title,url:d.Tl[2].url,list:i})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6404)}])},385:function(e){e.exports={root:"contentitem_root__1P0Bl",image:"contentitem_image__2f-4s",wrapper:"contentitem_wrapper__vTyDZ",footer:"contentitem_footer__33S6R","footer-detail":"contentitem_footer-detail__3ZV0C","image-wrapper":"contentitem_image-wrapper__3K1fJ","category-wrapper":"contentitem_category-wrapper__2VWNG","category-image":"contentitem_category-image__1_86l",category:"contentitem_category__2-LFc",title:"contentitem_title__3t6yt",excerpt:"contentitem_excerpt__1-dpn"}},9723:function(e){e.exports={root:"contentlist_root__1_99K",item:"contentlist_item__2rNn8"}},4948:function(e){e.exports={root:"contentmeta_root__2CAt-",item:"contentmeta_item__1SXyL",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},4827:function(e){e.exports={root:"contenttags_root__x5Yka"}},6328:function(e){e.exports={root:"newcontent_root__3D8JR"}},1115:function(e){e.exports={root:"artbox_root__2SoaA",wrapper:"artbox_wrapper__23yI4",image:"artbox_image__LFR6m",title:"artbox_title__3zWWm",sub:"artbox_sub__3CUqK"}},5146:function(e){e.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL",media:"screener_media__MeuyJ",plate:"screener_plate__2YHjh",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}},4115:function(e){e.exports={root:"contentscase_root__8L-m0",title:"contentscase_title__3MPr_",more:"contentscase_more__3F3uI",rotate:"contentscase_rotate__2eLfA"}}},function(e){e.O(0,[33,910,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);