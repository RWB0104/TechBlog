(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5660:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(8407),a=r(2775),o=r(8351),s=r(3836),i=r(176),c=r.n(i),l=r(7166),_=r.n(l),u=r(1664),d=r.n(u),p=r(7294),m=r(1649),f=r(2804),x=r(6987),h=r(2773),j=r.n(h),C=r(3750),w=r(5893);function g(e){var t=e.flag,r=_().bind(j());return t?(0,w.jsx)(C.KC7,{className:r("root")}):null}function v(e){var t=e.item,r=t.header,i=r.title,l=r.excerpt,u=r.coverImage,h=r.type,j=r.category,C=r.date,v=t.url,y=(0,o.aT)(),b=(0,p.useState)(void 0),N=b[0],O=b[1],I=(0,n.l)(t.header.date),P=(0,f.Zl)(s.T6),B=(0,f.Zl)(s.LM),E=t.header.type===n.ze.POSTS?P:B,S=(0,f.sJ)(s.Oj),T="/".concat(h,"/").concat(v[1],"/").concat(v[2],"/").concat(v[3],"/").concat(v[4]),k="/".concat(h,"?category=").concat(j),A=_().bind(c());return(0,w.jsxs)("div",{className:A("root",S),children:[(0,w.jsx)("div",{className:A("image-wrapper"),children:(0,w.jsx)(d(),{href:T,passHref:!0,children:(0,w.jsx)("a",{href:"#replace",onClick:function(){return E(window.scrollY)},children:(0,w.jsx)("img",{alt:"cover",className:A("image"),src:u})})})}),(0,w.jsxs)("div",{className:A("body-wrapper"),children:[(0,w.jsxs)("div",{className:A("wrapper"),children:[(0,w.jsxs)("div",{className:A("category-wrapper"),children:[(0,w.jsx)(d(),{href:k,passHref:!0,children:(0,w.jsx)("a",{href:"#replace",children:(0,w.jsx)("img",{alt:j,className:A("category-image"),src:a.En[j]||a.En.All})})}),(0,w.jsx)(d(),{href:k,passHref:!0,children:(0,w.jsx)("a",{href:"#replace",children:(0,w.jsx)("h4",{className:A("category"),children:j})})}),(0,w.jsx)(g,{flag:I})]}),(0,w.jsx)(d(),{href:T,passHref:!0,children:(0,w.jsx)("a",{href:"#replace",onClick:function(){return E(window.scrollY)},children:(0,w.jsx)("h3",{className:A("title"),children:i})})}),y&&(0,w.jsx)("p",{className:A("excerpt"),children:l})]}),(0,w.jsxs)("div",{className:A("footer"),children:[(0,w.jsxs)("p",{children:["\ud83d\udd54 ",(0,n.Jq)(new Date(C))]}),y&&(0,w.jsx)("button",{onClick:function(){return O(void 0===N||!N)},children:(0,w.jsx)(m.OId,{className:A("footer-active",S),"data-status":N})})]}),y&&(0,w.jsx)("div",{className:A("footer-detail"),"data-show":N,children:(0,w.jsx)(x.Z,{header:t.header})})]})]})}var y=r(195),b=r.n(y);function N(e){var t=e.list.map((function(e,t){return(0,w.jsx)(v,{"data-index":t,item:e},t)})),r=_().bind(b());return(0,w.jsx)("div",{className:r("root"),children:t})}},9764:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(8407),a=r(2775),o=r(8351),s=r(1205),i=r(4689),c=r.n(i),l=r(7166),_=r.n(l),u=r(7294),d=r(1649),p=r(5893);function m(){var e=_().bind(c()),t=(0,u.useRef)(null),r=(0,u.useRef)(null),o=(0,u.useRef)(null),s=(0,u.useRef)(null),i=(0,u.useState)(!0),l=i[0],m=i[1];return(0,u.useEffect)((function(){var e=(0,n.XJ)(a.TJ.length),i=a.TJ[e],c=i.title,l=i.author,_=i.images;t.current&&r.current&&(/\.(mp4|webm)$/.test(_)?(t.current.src=_,t.current.style.display="initial",r.current.style.display="none"):(r.current.src=_,r.current.style.display="initial",t.current.style.display="none")),o&&o.current&&(o.current.innerText=c),s&&s.current&&(s.current.innerText=l)}),[l]),(0,p.jsxs)("article",{className:e("root"),children:[(0,p.jsxs)("div",{className:e("image-wrapper"),children:[(0,p.jsx)("img",{alt:"background",className:e("image"),ref:r}),(0,p.jsx)("video",{className:e("image"),ref:t,autoPlay:!0,loop:!0,muted:!0})]}),(0,p.jsxs)("div",{className:e("text-wrapper"),children:[(0,p.jsx)("h1",{className:e("title"),ref:o,children:"-"}),(0,p.jsx)("h3",{className:e("sub"),ref:s,children:"-"})]}),(0,p.jsx)("div",{className:e("button-wrapper"),children:(0,p.jsx)("button",{"aria-label":"refresh",className:e("button"),onClick:function(){return m(!l)},children:(0,p.jsx)(d.Fer,{})})})]})}var f=r(5514),x=r(2766),h=r(9499),j=r(4730),C=r(3836),w=r(5660),g=r(8917),v=r(5508),y=r.n(v),b=r(1664),N=r.n(b),O=r(2804),I=["num","title","url","list","className"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){var t=e.num,r=e.title,n=e.url,a=e.list,o=e.className,s=(0,j.Z)(e,I),i=_().bind(y()),c=(0,O.sJ)(C.Oj);return(0,p.jsxs)("article",B(B({className:i("root",o)},s),{},{children:[(0,p.jsx)("h1",{className:i("title"),children:r}),0===a.length?(0,p.jsx)("div",{className:i("loading"),children:(0,p.jsx)(g.Z,{icon:"search"})}):(0,p.jsx)(w.Z,{list:a.slice(0,t)}),(0,p.jsx)(N(),{href:n,passHref:!0,children:(0,p.jsx)("a",{className:i("more",c),href:"#replace",title:"more",children:"M O R E"})})]}))}function S(){(0,o.D5)();var e=(0,u.useState)([]),t=e[0],r=e[1],i=(0,u.useState)([]),c=i[0],l=i[1],_=(0,o.tH)(),d=(0,o.WK)(n.ze.POSTS),h=(0,o.WK)(n.ze.PROJECTS),j=(0,o.vm)(n.ze.POSTS),C=(0,o.vm)(n.ze.PROJECTS);return(0,u.useEffect)((function(){var e=j?j.rows.map((function(e){return e.dimensionValues[0].value.replace(/.html$/,"")})):[],t=e?e.reduce((function(e,t){var r=d.find((function(e){return"/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])===t}));return r&&e.push(r),e}),[]):[];r(t)}),[d,j]),(0,u.useEffect)((function(){var e=C?C.rows.map((function(e){return e.dimensionValues[0].value.replace(/.html$/,"")})):[],t=e?e.reduce((function(e,t){var r=h.find((function(e){return"/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])===t}));return r&&e.push(r),e}),[]):[];l(t)}),[h,C]),(0,p.jsxs)("section",{children:[(0,p.jsx)(f.Z,{description:s.T[0].desc,title:s.T[0].title,url:""}),(0,p.jsx)(x.Z,{image:_,lower:s.T[0].desc,menu:s.T[0].title,title:a.R}),(0,p.jsx)(E,{list:t,num:10,title:"Posts Popular",url:s.T[1].url}),(0,p.jsx)(m,{}),(0,p.jsx)(E,{list:c,num:10,title:"Projects Popular",url:s.T[2].url})]})}},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9764)}])},176:function(e){e.exports={root:"ContentItem_root__uGPo4",dark:"ContentItem_dark__h6cXX",light:"ContentItem_light__xPe8z","body-wrapper":"ContentItem_body-wrapper__aUadj",wrapper:"ContentItem_wrapper__7MPxJ",footer:"ContentItem_footer__J4dOQ","footer-detail":"ContentItem_footer-detail__eDUb_","slide-down-true":"ContentItem_slide-down-true__SPwRp","slide-down-false":"ContentItem_slide-down-false__Yk2fw","footer-active":"ContentItem_footer-active__pESzE","rotate-180":"ContentItem_rotate-180__iKWhE","rotate-360":"ContentItem_rotate-360__BWElC","image-wrapper":"ContentItem_image-wrapper__0dM2v",image:"ContentItem_image___Eltt","category-wrapper":"ContentItem_category-wrapper__N3RZw","category-image":"ContentItem_category-image__iJB82",category:"ContentItem_category__9ahoS",title:"ContentItem_title__IWSCE",excerpt:"ContentItem_excerpt__mv5CG",rotate:"ContentItem_rotate__W3y_r",spin:"ContentItem_spin__naZTU","slide-in":"ContentItem_slide-in__oBQVS","slide-out":"ContentItem_slide-out__FMGRF"}},195:function(e){e.exports={root:"ContentList_root__ulURv"}},2773:function(e){e.exports={root:"NewContent_root__O0vBm"}},4689:function(e){e.exports={root:"ArtBox_root__D1nvc","image-wrapper":"ArtBox_image-wrapper__7HgXQ","text-wrapper":"ArtBox_text-wrapper__3xlrC",image:"ArtBox_image__vQgQp",title:"ArtBox_title__PWSdw",sub:"ArtBox_sub__v_m_E","button-wrapper":"ArtBox_button-wrapper__quuRc",button:"ArtBox_button__yZmBB",rotate:"ArtBox_rotate__Bx3eY",spin:"ArtBox_spin__i8tPl","slide-in":"ArtBox_slide-in__BmihL","slide-out":"ArtBox_slide-out__4dzki","slide-down-false":"ArtBox_slide-down-false__oSXcW","slide-down-true":"ArtBox_slide-down-true__zYg1B","rotate-180":"ArtBox_rotate-180__XlaqP","rotate-360":"ArtBox_rotate-360__EhSNO"}},5508:function(e){e.exports={root:"ContentsCase_root__pLGZg",title:"ContentsCase_title__XXzRW",loading:"ContentsCase_loading__5_2aD",more:"ContentsCase_more__EIEu7",dark:"ContentsCase_dark__xGEj5",light:"ContentsCase_light__cM_YR",rotate:"ContentsCase_rotate__yTQfW",spin:"ContentsCase_spin__Upivq","slide-in":"ContentsCase_slide-in__VtyeZ","slide-out":"ContentsCase_slide-out__BgugF","slide-down-false":"ContentsCase_slide-down-false__qb259","slide-down-true":"ContentsCase_slide-down-true__rzF4G","rotate-180":"ContentsCase_rotate-180__keaGF","rotate-360":"ContentsCase_rotate-360__OWyaO"}}},function(e){e.O(0,[866,245,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);