(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{3889:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var o=n(6589),r=n(8662),a=n.n(r),c=n(5893);function i(t){var e=t.list;return(0,c.jsx)("article",{className:a().root,children:(0,c.jsx)(o.Z,{list:e})})}},9126:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var o=n(2640),r=n(7294),a=n(2804),c=n(1649),i=n(1173),s=n(2775),l=n(8407),d=n(3836),_=n(7234),u=n.n(_),f=n(5893);function h(t){var e=t.type,n=t.list,_=(0,a.sJ)(d.Oj),h=(0,r.useState)(void 0),p=h[0],m=h[1],w=(0,a.FV)(d.Em),g=(0,o.Z)(w,2),x=g[0],C=g[1],j=(0,a.FV)(d.D$),v=(0,o.Z)(j,2),y=v[0],S=v[1],N=(0,a.FV)(d.Oc),Z=(0,o.Z)(N,2),I=Z[0],T=Z[1],k=(0,a.FV)(d.fz),O=(0,o.Z)(k,2),E=O[0],b=O[1],F=e===l.ze.POSTS?x:y,P=e===l.ze.POSTS?C:S,z=e===l.ze.POSTS?I:E,V=e===l.ze.POSTS?T:b,L=n.map((function(t,n){return(0,f.jsxs)("button",{className:u().item,"data-type":e,onClick:function(){return function(t){if("All"===t)V([]);else{var e=z.slice(),n=z.indexOf(t);n>-1?(e.splice(n,1),V(e)):(e.push(t),V(e))}}(t.name)},children:[(0,f.jsx)("img",{className:u().image,alt:t.name,src:"".concat(s.En[t.name]||s.En.All)}),(0,f.jsxs)("div",{className:u().meta,children:[(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["( ",t.count," )"]})]}),(0,f.jsx)("div",{className:u().flag,children:(0,f.jsx)(i.Z,{flag:z.indexOf(t.name)>-1})})]},n)}));return(0,f.jsx)("article",{className:u()["root-wrapper"],children:(0,f.jsxs)("div",{className:u()["root-".concat(_)],children:[(0,f.jsxs)("div",{className:u().header,onClick:function(){m(void 0===p||!p),F>1&&P(1)},"data-show":p,children:[(0,f.jsx)("h4",{className:u().title,children:"\ud83d\udcda \uce74\ud14c\uace0\ub9ac"}),(0,f.jsx)(c.OId,{})]}),(0,f.jsx)("div",{className:u().body,"data-show":p,children:L})]})})}},6589:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var o=n(7294),r=n(1664),a=n.n(r),c=n(2804),i=n(1649),s=n(1173),l=n(6987),d=n(2775),_=n(8407),u=n(6610),f=n(3836),h=n(176),p=n.n(h),m=n(5893);function w(t){var e=t.item,n=e.header,r=n.title,h=n.excerpt,w=n.coverImage,g=n.type,x=n.category,C=n.date,j=e.url,v=(0,u.aT)(),y=(0,o.useState)(void 0),S=y[0],N=y[1],Z=(0,_.l)(e.header.date),I=(0,c.Zl)(f.T6),T=(0,c.Zl)(f.LM),k=e.header.type===_.ze.POSTS?I:T,O=(0,c.sJ)(f.Oj),E="/".concat(g,"/").concat(j[1],"/").concat(j[2],"/").concat(j[3],"/").concat(j[4]),b="/".concat(g,"?category=").concat(x);return(0,m.jsxs)("div",{className:p()["root-".concat(O)],children:[(0,m.jsx)("div",{className:p()["image-wrapper"],children:(0,m.jsx)(a(),{href:E,children:(0,m.jsx)("a",{onClick:function(){return k(window.scrollY)},children:(0,m.jsx)("img",{className:p().image,src:w})})})}),(0,m.jsxs)("div",{className:p()["body-wrapper"],children:[(0,m.jsxs)("div",{className:p().wrapper,children:[(0,m.jsxs)("div",{className:p()["category-wrapper"],children:[(0,m.jsx)(a(),{href:b,children:(0,m.jsx)("a",{children:(0,m.jsx)("img",{className:p()["category-image"],alt:x,src:d.En[x]||"https://user-images.githubusercontent.com/50317129/132937376-276bf532-841b-4f80-9ba7-d05063ee6e92.png"})})}),(0,m.jsx)(a(),{href:b,children:(0,m.jsx)("a",{children:(0,m.jsx)("h4",{className:p().category,children:x})})}),(0,m.jsx)(s.Z,{flag:Z})]}),(0,m.jsx)(a(),{href:E,children:(0,m.jsx)("a",{onClick:function(){return k(window.scrollY)},children:(0,m.jsx)("h3",{className:p().title,children:r})})}),v&&(0,m.jsx)("p",{className:p().excerpt,children:h})]}),(0,m.jsxs)("div",{className:p().footer,children:[(0,m.jsxs)("p",{children:["\ud83d\udd54 ",(0,_.Jq)(new Date(C))]}),v&&(0,m.jsx)("button",{onClick:function(){return N(void 0===S||!S)},children:(0,m.jsx)(i.OId,{className:p()["footer-active-".concat(O)],"data-status":S})})]}),v&&(0,m.jsx)("div",{className:p()["footer-detail"],"data-show":S,children:(0,m.jsx)(l.Z,{header:e.header})})]})]})}var g=n(195),x=n.n(g);function C(t){var e=t.list.map((function(t,e){return(0,m.jsx)(w,{item:t,"data-index":e},e)}));return(0,m.jsx)("div",{className:x().root,children:e})}},3844:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var o=n(2640),r=n(7294),a=n(9583),c=n(2804),i=n(155),s=n(3836),l=n(8407),d=n(6623),_=n.n(d),u=n(5893);function f(t){var e=t.type,n=(0,r.useRef)(null),d=(0,c.sJ)(s.Oj),f=(0,c.FV)(s.oY),h=(0,o.Z)(f,2),p=h[0],m=h[1],w=(0,c.FV)(s.ST),g=(0,o.Z)(w,2),x=g[0],C=g[1],j=(0,c.FV)(s.Em),v=(0,o.Z)(j,2),y=v[0],S=v[1],N=(0,c.FV)(s.D$),Z=(0,o.Z)(N,2),I=Z[0],T=Z[1],k=(0,c.FV)(s.Oc),O=(0,o.Z)(k,2),E=O[0],b=O[1],F=(0,c.FV)(s.fz),P=(0,o.Z)(F,2),z=P[0],V=P[1],L=e===l.ze.POSTS?p:x,J=e===l.ze.POSTS?m:C,M=e===l.ze.POSTS?y:I,R=e===l.ze.POSTS?S:T,D=e===l.ze.POSTS?E:z,Y=e===l.ze.POSTS?b:V;return(0,u.jsx)("article",{className:_()["root-wrapper"],children:(0,u.jsxs)("div",{className:_()["root-".concat(d)],children:[(0,u.jsx)(a.U41,{}),(0,u.jsx)("input",{type:"text",className:_().text,ref:n,value:L,onInput:function(t){J(t.target.value),D.length>0&&Y([]),M>1&&R(1)}}),(0,u.jsx)("button",{onClick:function(){var t;J(""),D.length>0&&Y([]),M>1&&R(1),null===(t=n.current)||void 0===t||t.focus()},children:(0,u.jsx)(i.bjh,{})})]})})}},1173:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var o=n(3750),r=n(2773),a=n.n(r),c=n(5893);function i(t){return t.flag?(0,c.jsx)(o.KC7,{className:a().root}):null}},6557:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var o=n(29),r=n(2640),a=n(7794),c=n.n(a),i=n(7294),s=n(2804),l=n(2766),d=n(5514),_=n(9126),u=n(3889),f=n(3844),h=n(8407),p=n(2775),m=n(1205),w=n(3836),g=n(6610),x=n(5893);function C(){var t=h.ze.PROJECTS,e=(0,i.useState)(""),n=e[0],a=e[1],C=(0,i.useState)([]),j=C[0],v=C[1],y=(0,i.useState)([]),S=y[0],N=y[1],Z=(0,s.FV)(w.Rr),I=(0,r.Z)(Z,2),T=I[0],k=I[1],O=(0,s.FV)(w.D$),E=(0,r.Z)(O,2),b=E[0],F=E[1],P=(0,s.FV)(w.ST),z=(0,r.Z)(P,2),V=z[0],L=z[1],J=(0,s.FV)(w.fz),M=(0,r.Z)(J,2),R=M[0],D=M[1],Y=(0,s.sJ)(w.LM);return(0,g.D5)(h.ze.POSTS),(0,i.useEffect)((function(){var t=function(){b<Math.ceil(T.length/h.WY)&&window.scrollY>window.document.documentElement.scrollHeight-1500&&F(b+1)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}})),(0,i.useEffect)((function(){(0,o.Z)(c().mark((function t(){var e,n,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/image.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,o=(0,h.XJ)(n.list.length),a(n.list[o]);case 8:case"end":return t.stop()}}),t)})))(),(0,o.Z)(c().mark((function e(){var n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,N(o.list),k(o.list);case 8:case"end":return e.stop()}}),e)})))(),(0,o.Z)(c().mark((function e(){var n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,"-category.json"));case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,v(o.list);case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,i.useEffect)((function(){var t=(0,h.gL)(location),e=t.filter((function(t){return"page"===t.key}));if(e.length>0){var n=parseInt(e[0].value);F(isNaN(n)?1:n)}var o=t.filter((function(t){return"search"===t.key}));if(o.length>0)L(o[0].value);else{var r=t.filter((function(t){return"category"===t.key}));r.length>0&&D(r.map((function(t){return t.value})))}window.scrollTo(0,Y)}),[S]),(0,i.useEffect)((function(){V.length>0?b>1?window.history.replaceState(window.history.state,"","".concat(window.location.pathname,"?page=").concat(b,"&search=").concat(V)):window.history.replaceState(window.history.state,"","".concat(window.location.pathname,"?search=").concat(V)):b>1&&R.length>0?window.history.replaceState(window.history.state,"","".concat(window.location.pathname,"?page=").concat(b,"&").concat(R.map((function(t){return"category="+t})).join("&"))):b>1?window.history.replaceState(window.history.state,"","".concat(window.location.pathname,"?page=").concat(b)):R.length>0?window.history.replaceState(window.history.state,"","".concat(window.location.pathname,"?").concat(R.map((function(t){return"category="+t})).join("&"))):window.history.replaceState(window.history.state,"","".concat(window.location.pathname))}),[b,V,R]),(0,i.useEffect)((function(){var t=S.slice();V.length>1?t=t.filter((function(t){var e=t.header,n=e.title,o=e.excerpt,r=e.tag;n=n.replaceAll(/ /g,"").toLowerCase(),o=o.replaceAll(/ /g,"").toLowerCase(),r=r.map((function(t){return t.replaceAll(/ /g,"").toLowerCase()}));var a=V.replaceAll(/ /g,"").toLowerCase();return n.includes(a)||o.includes(a)||r.join(" ").includes(a)})):R.length>0&&(t=t.filter((function(t){return R.indexOf(t.header.category)>-1}))),k(t)}),[S,V,R]),(0,x.jsxs)("section",{children:[(0,x.jsx)(d.Z,{title:m.T[2].title,description:m.T[2].desc,url:m.T[2].url.pathname}),(0,x.jsx)(l.Z,{title:p.R,menu:m.T[2].title,lower:m.T[2].desc,image:n}),(0,x.jsx)(f.Z,{type:t}),(0,x.jsx)(_.Z,{type:t,list:j}),(0,x.jsx)(u.Z,{list:T.slice(0,b*h.WY)})]})}},6192:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6557)}])},8662:function(t){t.exports={root:"ContentBoard_root__9Pkka",pagination:"ContentBoard_pagination__YLv09"}},7234:function(t){t.exports={"root-wrapper":"ContentCategory_root-wrapper___kBXc","root-light":"ContentCategory_root-light__g_M_Q","root-dark":"ContentCategory_root-dark__jgpgZ",header:"ContentCategory_header__hlrVG","rotate-180":"ContentCategory_rotate-180__O4dmL","rotate-360":"ContentCategory_rotate-360__c_I6m",title:"ContentCategory_title__t3GSF",body:"ContentCategory_body__mXUxi","slide-down-true":"ContentCategory_slide-down-true__QJbpT","slide-down-false":"ContentCategory_slide-down-false__LAbj_",item:"ContentCategory_item__ohaxM",image:"ContentCategory_image___yT3F",meta:"ContentCategory_meta__EAcbW",flag:"ContentCategory_flag__l7wmK",rotate:"ContentCategory_rotate__DRm39",spin:"ContentCategory_spin__xKxq0","slide-in":"ContentCategory_slide-in__TY8EM","slide-out":"ContentCategory_slide-out__Mjsdg"}},176:function(t){t.exports={"root-light":"ContentItem_root-light__Z6Nsc","root-dark":"ContentItem_root-dark__8wblZ","body-wrapper":"ContentItem_body-wrapper__aUadj",wrapper:"ContentItem_wrapper__7MPxJ",footer:"ContentItem_footer__J4dOQ","footer-detail":"ContentItem_footer-detail__eDUb_","slide-down-true":"ContentItem_slide-down-true__SPwRp","slide-down-false":"ContentItem_slide-down-false__Yk2fw","footer-active-light":"ContentItem_footer-active-light__DKjD_","rotate-180":"ContentItem_rotate-180__iKWhE","rotate-360":"ContentItem_rotate-360__BWElC","footer-active-dark":"ContentItem_footer-active-dark__NWHcV","image-wrapper":"ContentItem_image-wrapper__0dM2v",image:"ContentItem_image___Eltt","category-wrapper":"ContentItem_category-wrapper__N3RZw","category-image":"ContentItem_category-image__iJB82",category:"ContentItem_category__9ahoS",title:"ContentItem_title__IWSCE",excerpt:"ContentItem_excerpt__mv5CG",rotate:"ContentItem_rotate__W3y_r",spin:"ContentItem_spin__naZTU","slide-in":"ContentItem_slide-in__oBQVS","slide-out":"ContentItem_slide-out__FMGRF"}},195:function(t){t.exports={root:"ContentList_root__ulURv"}},6623:function(t){t.exports={"root-wrapper":"ContentSearch_root-wrapper__zRQ0d","root-light":"ContentSearch_root-light__seSuS","root-dark":"ContentSearch_root-dark__ne0T9",text:"ContentSearch_text__Jnl9H"}},2773:function(t){t.exports={root:"NewContent_root__O0vBm"}}},function(t){t.O(0,[866,245,774,888,179],(function(){return e=6192,t(t.s=e);var e}));var e=t.O();_N_E=e}]);