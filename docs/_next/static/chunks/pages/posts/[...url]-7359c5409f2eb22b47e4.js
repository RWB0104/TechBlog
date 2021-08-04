(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{1267:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(2122),o=n(1253),r=n(7294),c=(n(5697),n(6010)),l=(0,n(5209).Z)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),i=n(4670),s=n(9693),u=n(8485),d=n(3871),p=n(6445);function m(e){return"Backspace"===e.key||"Delete"===e.key}var g=r.forwardRef((function(e,t){var n=e.avatar,i=e.classes,s=e.className,g=e.clickable,h=e.color,f=void 0===h?"default":h,y=e.component,v=e.deleteIcon,x=e.disabled,_=void 0!==x&&x,b=e.icon,j=e.label,Z=e.onClick,k=e.onDelete,C=e.onKeyDown,S=e.onKeyUp,w=e.size,N=void 0===w?"medium":w,I=e.variant,R=void 0===I?"default":I,T=(0,o.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),E=r.useRef(null),M=(0,u.Z)(E,t),$=function(e){e.stopPropagation(),k&&k(e)},L=!(!1===g||!Z)||g,z="small"===N,D=y||(L?p.Z:"div"),F=D===p.Z?{component:"div"}:{},P=null;if(k){var q=(0,c.Z)("default"!==f&&("default"===R?i["deleteIconColor".concat((0,d.Z)(f))]:i["deleteIconOutlinedColor".concat((0,d.Z)(f))]),z&&i.deleteIconSmall);P=v&&r.isValidElement(v)?r.cloneElement(v,{className:(0,c.Z)(v.props.className,i.deleteIcon,q),onClick:$}):r.createElement(l,{className:(0,c.Z)(i.deleteIcon,q),onClick:$})}var O=null;n&&r.isValidElement(n)&&(O=r.cloneElement(n,{className:(0,c.Z)(i.avatar,n.props.className,z&&i.avatarSmall,"default"!==f&&i["avatarColor".concat((0,d.Z)(f))])}));var H=null;return b&&r.isValidElement(b)&&(H=r.cloneElement(b,{className:(0,c.Z)(i.icon,b.props.className,z&&i.iconSmall,"default"!==f&&i["iconColor".concat((0,d.Z)(f))])})),r.createElement(D,(0,a.Z)({role:L||k?"button":void 0,className:(0,c.Z)(i.root,s,"default"!==f&&[i["color".concat((0,d.Z)(f))],L&&i["clickableColor".concat((0,d.Z)(f))],k&&i["deletableColor".concat((0,d.Z)(f))]],"default"!==R&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[f]],_&&i.disabled,z&&i.sizeSmall,L&&i.clickable,k&&i.deletable),"aria-disabled":!!_||void 0,tabIndex:L||k?0:void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&m(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(k&&m(e)?k(e):"Escape"===e.key&&E.current&&E.current.blur()),S&&S(e)},ref:M},F,T),O||H,r.createElement("span",{className:(0,c.Z)(i.label,z&&i.labelSmall)},j),P)})),h=(0,i.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=(0,s.Fq)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.Fq)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.Fq)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.Fq)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.Fq)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.Fq)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},4866:function(e,t,n){"use strict";n.d(t,{XJ:function(){return a},SG:function(){return o},Jt:function(){return r},Jq:function(){return c}});function a(e){return Math.floor(Math.random()*e)}function o(e){var t=void 0===e?new Date:new Date(e);return{year:t.getFullYear().toString(),month:t.getMonth()+1>9?(t.getMonth()+1).toString():"0".concat(t.getMonth()+1),day:t.getDate()+1>9?t.getDate().toString():"0".concat(t.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],hour:t.getHours()>9?t.getHours().toString():"0".concat(t.getHours()),minute:t.getMinutes()>9?t.getMinutes().toString():"0".concat(t.getMinutes()),second:t.getSeconds()>9?t.getSeconds().toString():"0".concat(t.getSeconds())}}function r(e){if(e){var t=0;return e.reduce((function(e,n){var a=n.text,o=n.tag,r=n.depth;return r>t?(t++,e+='<ul><li><a href="#'.concat(o,'">').concat(a,"</a></li>")):r<t?(t--,e+='</ul><li><a href="#'.concat(o,'">').concat(a,"</a></li>")):e+='<li><a href="#'.concat(o,'">').concat(a,"</a></li>"),e}),"")+"</ul>"}return""}function c(e){var t=(new Date).getTime()-e.getTime();if(t>31536e6){var n=Math.floor(t/31536e6);return"".concat(n,"\ub144 \uc804")}if(t>2592e6){var a=Math.floor(t/2592e6);return"".concat(a,"\ub2ec \uc804")}if(t>864e5){var o=Math.floor(t/864e5);return"".concat(o,"\uc77c \uc804")}if(t>36e5){var r=Math.floor(t/36e5);return"".concat(r,"\uc2dc\uac04 \uc804")}var c=Math.floor(t/6e4);return"".concat(c,"\ubd84 \uc804")}},1472:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(5893),o=n(9956),r=n(2318),c=n(3901),l=n(1163),i=n(1267),s=n(4827),u=n.n(s);function d(e){var t=e.type,n=e.tags,o=(0,l.useRouter)(),r=n.map((function(e,n){return(0,a.jsx)(i.Z,{className:u().root,label:e,clickable:!0,onClick:function(){return o.push("/".concat(t,"/tag/").concat(e,"/1"))}},n)}));return(0,a.jsx)(a.Fragment,{children:r})}var p=n(4866),m=n(1733),g=n(4948),h=n.n(g);function f(e){var t=e.header,n=(0,l.useRouter)(),i=(0,p.SG)(t.date);return(0,a.jsxs)(o.Z,{component:"article",className:h().root,children:[(0,a.jsxs)(o.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,a.jsx)(r.Z,{className:h().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,a.jsx)(r.Z,{className:h().text,children:"".concat(i.year,"-").concat(i.month,"-").concat(i.day," ").concat(i.week," ").concat(i.hour,":").concat(i.minute,":").concat(i.second)})]}),(0,a.jsxs)(o.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,a.jsx)(r.Z,{className:h().text,children:"\ud83d\udccc \uce74\ud14c\uace0\ub9ac"}),(0,a.jsxs)(o.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,a.jsx)(c.Z,{alt:t.category,src:m.En[t.category]}),(0,a.jsx)(r.Z,{className:h().link,onClick:function(){return n.push("/".concat(t.type,"/category/").concat(t.category,"/1"))},children:t.category})]})]}),(0,a.jsxs)(o.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,a.jsx)(r.Z,{className:h().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(d,{type:t.type,tags:t.tag})})]})]})}},8794:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(5893),o=n(9008),r=n(1733);function c(e){var t=e.title,n=e.description,c=void 0===n?r.dz:n,l=e.type,i=void 0===l?"website":l,s=e.url,u=void 0===s?"":s,d=e.image,p=void 0===d?"https://rwb0104.github.io/favicon.ico":d,m=e.locale,g=void 0===m?"ko_KR":m;return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:c}),(0,a.jsx)("meta",{property:"og:site_name",content:r.R}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:c}),(0,a.jsx)("meta",{property:"og:type",content:i}),(0,a.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io".concat(u)}),(0,a.jsx)("meta",{property:"og:image",content:p}),(0,a.jsx)("meta",{property:"og:locale",content:g}),(0,a.jsx)("link",{rel:"canonical",href:"https://rwb0104.github.io".concat(u)})]})}},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(5893),o=n(7294),r=n(9956),c=n(2318),l=n(5146),i=n.n(l);function s(e){var t=e.title,n=e.lower,l=e.image,s=e.special?i()["title-special"]:i().title,u=(0,o.useRef)(null);return(0,o.useEffect)((function(){u&&u.current&&(u.current.style.backgroundImage="url(".concat(l,")"))}),[]),(0,a.jsxs)(r.Z,{className:i().root,position:"relative",display:"grid",gridAutoRows:"auto",gridRowGap:100,alignContent:"center",children:[(0,a.jsx)(r.Z,{className:i()["image-wrapper"],position:"absolute",children:(0,a.jsx)("div",{ref:u,className:i()["image-basic"]})}),(0,a.jsx)(c.Z,{component:"h1",className:s,align:"center",children:t}),(0,a.jsx)(c.Z,{component:"h3",className:i().lower,align:"center",children:n})]})}},2162:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return $},default:function(){return L}});var a=n(5893),o=n(9956),r=n(3832),c=n(8920),l=n(9008);n(8388);function i(e){var t=e.content,n=(0,c.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("link",{href:"/prism.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"})]}),(0,a.jsx)("div",{className:"markdown ".concat(n.palette.type),dangerouslySetInnerHTML:{__html:t}})]})}var s=n(2318),u=n(4866),d=n(7869),p=n.n(d);function m(e){var t=e.toc,n=(0,c.Z)();return t&&t.length>0?(0,a.jsxs)(o.Z,{className:p()["toc-".concat(n.palette.type)],children:[(0,a.jsx)(s.Z,{component:"h2",variant:"h2",align:"center",children:"Table of Contents"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,u.Jt)(t)}})]}):null}var g=n(6445),h=n(1163),f=n(5695),y=n.n(f);function v(e){var t=e.group,n=(0,h.useRouter)();if(t&&t.length>0){var r=(t=t.length>20?t.slice(0,20):t).map((function(e,t){return(0,a.jsx)(o.Z,{className:y().item,children:(0,a.jsxs)(g.Z,{className:y().button,onClick:function(){return n.push("/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4]))},children:[(0,a.jsx)("img",{src:e.header.coverImage}),(0,a.jsx)(o.Z,{className:y()["label-wrapper"],children:(0,a.jsx)(s.Z,{className:y().label,children:e.header.title})})]})},t)}));return(0,a.jsxs)(o.Z,{component:"article",className:y().root,children:[(0,a.jsx)(s.Z,{component:"h4",variant:"h4",className:y().title,children:"\ud83e\uddf2 \uc5f0\uad00 \uac8c\uc2dc\ubb3c"}),(0,a.jsx)(o.Z,{className:y().list,children:r})]})}return null}var x=n(1472),_=n(5517),b=n(282),j=n(1587),Z=n(731),k=n.n(Z);function C(e){var t=e.page,n=(0,h.useRouter)(),r=t.prev,c=t.next;return(0,a.jsxs)(o.Z,{component:"article",className:k().root,children:[(0,a.jsxs)(o.Z,{display:"flex",justifyContent:"space-between",children:[(0,a.jsx)(S,{data:r}),(0,a.jsx)(S,{data:c})]}),(0,a.jsx)(_.Z,{className:k().divider}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(b.Z,{className:k().menu,variant:"outlined",startIcon:(0,a.jsx)(j.Z,{}),onClick:function(){return n.push("/".concat(t.type))},children:"\ubaa9\ub85d"})})]})}function S(e){var t=e.data,n=(0,h.useRouter)(),r=(0,c.Z)().palette.type;if(null===t)return null;var l=null===t||void 0===t?void 0:t.url;return(0,a.jsx)(g.Z,{className:k()["button-".concat(r)],onClick:function(){return n.push("/".concat(null===t||void 0===t?void 0:t.header.type,"/").concat(l[1],"/").concat(l[2],"/").concat(l[3],"/").concat(l[4]))},children:(0,a.jsx)(o.Z,{children:t.header.title})})}var w=n(7294),N=n(329),I=n.n(N);function R(e){var t=e.flag,n=(0,c.Z)().palette.type;return(0,w.useEffect)((function(){if(t)if(0===document.querySelectorAll("#utterances > div").length){var e,a=document.createElement("div"),o=document.createElement("script");o.src="https://utteranc.es/client.js",o.async=!0,o.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),o.setAttribute("issue-term","pathname"),o.setAttribute("theme","github-".concat(n)),o.setAttribute("crossOrigin","anonymous"),a.appendChild(o),null===(e=document.getElementById("utterances"))||void 0===e||e.appendChild(a)}else{var r,c=document.querySelector("#utterances iframe");if(null!==c)null===(r=c.contentWindow)||void 0===r||r.postMessage({type:"set-theme",theme:"github-".concat(n)},"https://utteranc.es/")}})),t?(0,a.jsx)(o.Z,{className:I().root,component:"article",id:"utterances"}):null}function T(e){var t=e.page,n=e.data,c=e.group;return(0,a.jsx)(o.Z,{position:"relative",children:(0,a.jsxs)(r.Z,{maxWidth:"md",children:[(0,a.jsx)(m,{toc:n.toc}),(0,a.jsx)(i,{content:n.content}),(0,a.jsx)(v,{group:c}),(0,a.jsx)(x.Z,{header:n.header}),(0,a.jsx)(C,{page:t}),(0,a.jsx)(R,{flag:n.header.comment})]})})}var E=n(8794),M=n(8494),$=!0;function L(e){var t=e.page,n=e.group,r=e.data,c=r.url;return(0,a.jsxs)(o.Z,{component:"section",children:[(0,a.jsx)(M.Z,{title:r.header.title,lower:r.header.category,image:r.header.coverImage}),(0,a.jsx)(E.Z,{title:r.header.title,description:r.header.excerpt,url:"/".concat(r.header.type,"/").concat(c[1],"/").concat(c[2],"/").concat(c[3],"/").concat(c[4]),image:r.header.coverImage}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(T,{page:t,group:n,data:r})})]})}},5334:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[...url]",function(){return n(2162)}])},5695:function(e){e.exports={root:"contentgroup_root__393Yi",title:"contentgroup_title__14YEL",list:"contentgroup_list__1HHxc",item:"contentgroup_item__1sEJk",button:"contentgroup_button__1Zz1J","label-wrapper":"contentgroup_label-wrapper__3L-So",label:"contentgroup_label__5f_Ku"}},4948:function(e){e.exports={root:"contentmeta_root__2CAt-",item:"contentmeta_item__1SXyL",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},731:function(e){e.exports={root:"contentmover_root__B7rpT",divider:"contentmover_divider__14jgu","button-dark":"contentmover_button-dark__3zOui","button-light":"contentmover_button-light__36Q1m",menu:"contentmover_menu__E6t4v"}},4827:function(e){e.exports={root:"contenttags_root__x5Yka"}},7869:function(e){e.exports={"toc-dark":"contenttoc_toc-dark__OVber","toc-light":"contenttoc_toc-light__KRzMn"}},329:function(e){e.exports={root:"utterances_root__33E-l"}},5146:function(e){e.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL","image-ios":"screener_image-ios__Imz4X",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}},8388:function(){}},function(e){e.O(0,[774,888,179],(function(){return t=5334,e(e.s=t);var t}));var t=e.O();_N_E=t}]);