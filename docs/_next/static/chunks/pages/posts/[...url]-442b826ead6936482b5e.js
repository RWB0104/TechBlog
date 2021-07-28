(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{1267:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(2122),r=n(1253),a=n(7294),c=(n(5697),n(6010)),l=(0,n(5209).Z)(a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),i=n(4670),s=n(9693),u=n(8485),d=n(3871),p=n(6445);function m(e){return"Backspace"===e.key||"Delete"===e.key}var g=a.forwardRef((function(e,t){var n=e.avatar,i=e.classes,s=e.className,g=e.clickable,h=e.color,f=void 0===h?"default":h,y=e.component,v=e.deleteIcon,x=e.disabled,b=void 0!==x&&x,_=e.icon,j=e.label,Z=e.onClick,k=e.onDelete,C=e.onKeyDown,S=e.onKeyUp,w=e.size,N=void 0===w?"medium":w,I=e.variant,T=void 0===I?"default":I,R=(0,r.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),E=a.useRef(null),$=(0,u.Z)(E,t),L=function(e){e.stopPropagation(),k&&k(e)},z=!(!1===g||!Z)||g,F="small"===N,M=y||(z?p.Z:"div"),P=M===p.Z?{component:"div"}:{},D=null;if(k){var O=(0,c.Z)("default"!==f&&("default"===T?i["deleteIconColor".concat((0,d.Z)(f))]:i["deleteIconOutlinedColor".concat((0,d.Z)(f))]),F&&i.deleteIconSmall);D=v&&a.isValidElement(v)?a.cloneElement(v,{className:(0,c.Z)(v.props.className,i.deleteIcon,O),onClick:L}):a.createElement(l,{className:(0,c.Z)(i.deleteIcon,O),onClick:L})}var q=null;n&&a.isValidElement(n)&&(q=a.cloneElement(n,{className:(0,c.Z)(i.avatar,n.props.className,F&&i.avatarSmall,"default"!==f&&i["avatarColor".concat((0,d.Z)(f))])}));var H=null;return _&&a.isValidElement(_)&&(H=a.cloneElement(_,{className:(0,c.Z)(i.icon,_.props.className,F&&i.iconSmall,"default"!==f&&i["iconColor".concat((0,d.Z)(f))])})),a.createElement(M,(0,o.Z)({role:z||k?"button":void 0,className:(0,c.Z)(i.root,s,"default"!==f&&[i["color".concat((0,d.Z)(f))],z&&i["clickableColor".concat((0,d.Z)(f))],k&&i["deletableColor".concat((0,d.Z)(f))]],"default"!==T&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[f]],b&&i.disabled,F&&i.sizeSmall,z&&i.clickable,k&&i.deletable),"aria-disabled":!!b||void 0,tabIndex:z||k?0:void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&m(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(k&&m(e)?k(e):"Escape"===e.key&&E.current&&E.current.blur()),S&&S(e)},ref:$},P,R),q||H,a.createElement("span",{className:(0,c.Z)(i.label,F&&i.labelSmall)},j),D)})),h=(0,i.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=(0,s.Fq)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.Fq)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.Fq)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.Fq)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.Fq)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.Fq)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},4866:function(e,t,n){"use strict";n.d(t,{XJ:function(){return o},SG:function(){return r},Jt:function(){return a}});function o(e){return Math.floor(Math.random()*e)}function r(e){var t=new Date(e);return{year:t.getFullYear().toString(),month:t.getMonth()+1>9?(t.getMonth()+1).toString():"0".concat(t.getMonth()+1),day:t.getDate()+1>9?t.getDate().toString():"0".concat(t.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],hour:t.getHours()>9?t.getHours().toString():"0".concat(t.getHours()),minute:t.getMinutes()>9?t.getMinutes().toString():"0".concat(t.getMinutes()),second:t.getSeconds()>9?t.getSeconds().toString():"0".concat(t.getSeconds())}}function a(e){if(e){var t=0;return e.reduce((function(e,n){var o=n.text,r=n.tag,a=n.depth;return a>t?(t++,e+='<ul><li><a href="#'.concat(r,'">').concat(o,"</a></li>")):a<t?(t--,e+='</ul><li><a href="#'.concat(r,'">').concat(o,"</a></li>")):e+='<li><a href="#'.concat(r,'">').concat(o,"</a></li>"),e}),"")+"</ul>"}return""}},1472:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(5893),r=n(9956),a=n(2318),c=n(3901),l=n(1163),i=n(1267),s=n(4827),u=n.n(s);function d(e){var t=e.type,n=e.tags,r=(0,l.useRouter)(),a=n.map((function(e,n){return(0,o.jsx)(i.Z,{className:u().root,label:e,clickable:!0,onClick:function(){return r.push("/".concat(t,"/tag/").concat(e,"/1"))}},n)}));return(0,o.jsx)(o.Fragment,{children:a})}var p=n(4866),m=n(1733),g=n(4948),h=n.n(g);function f(e){var t=e.header,n=(0,l.useRouter)(),i=(0,p.SG)(t.date);return(0,o.jsxs)(r.Z,{component:"article",className:h().root,children:[(0,o.jsxs)(r.Z,{display:"grid",gridTemplateColumns:"200px 1fr",alignItems:"center",children:[(0,o.jsx)(a.Z,{className:h().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,o.jsx)(a.Z,{className:h().text,children:"".concat(i.year,"-").concat(i.month,"-").concat(i.day," ").concat(i.week," ").concat(i.hour,":").concat(i.minute,":").concat(i.second)})]}),(0,o.jsxs)(r.Z,{display:"grid",gridTemplateColumns:"200px 1fr",alignItems:"center",children:[(0,o.jsx)(a.Z,{className:h().text,children:"\ud83d\udccc \uce74\ud14c\uace0\ub9ac"}),(0,o.jsxs)(r.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,o.jsx)(c.Z,{alt:t.category,src:m.En[t.category]}),(0,o.jsx)(a.Z,{className:h().link,onClick:function(){return n.push("/".concat(t.type,"/category/").concat(t.category,"/1"))},children:t.category})]})]}),(0,o.jsxs)(r.Z,{display:"grid",gridTemplateColumns:"200px 1fr",alignItems:"center",children:[(0,o.jsx)(a.Z,{className:h().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,o.jsx)(r.Z,{children:(0,o.jsx)(d,{type:t.type,tags:t.tag})})]})]})}},8794:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(5893),r=n(9008),a=n(1733);function c(e){var t=e.title,n=e.description,c=void 0===n?a.dz:n,l=e.type,i=void 0===l?"website":l,s=e.url,u=void 0===s?"":s,d=e.image,p=void 0===d?"https://rwb0104.github.io/favicon.ico":d,m=e.locale,g=void 0===m?"ko_KR":m;return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:c}),(0,o.jsx)("meta",{property:"og:site_name",content:a.R}),(0,o.jsx)("meta",{property:"og:title",content:t}),(0,o.jsx)("meta",{property:"og:description",content:c}),(0,o.jsx)("meta",{property:"og:type",content:i}),(0,o.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io".concat(u)}),(0,o.jsx)("meta",{property:"og:image",content:p}),(0,o.jsx)("meta",{property:"og:locale",content:g}),(0,o.jsx)("link",{rel:"canonical",href:"https://rwb0104.github.io".concat(u)})]})}},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(5893),r=n(7294),a=n(9956),c=n(2318),l=n(5146),i=n.n(l);function s(e){var t=e.title,n=e.lower,l=e.image,s=e.special?i()["title-special"]:i().title,u=(0,r.useRef)(null);return(0,r.useEffect)((function(){u&&u.current&&(u.current.style.backgroundImage="url(".concat(l,")"))}),[]),(0,o.jsxs)(a.Z,{className:i().root,position:"relative",display:"grid",gridAutoRows:"auto",gridRowGap:100,alignContent:"center",children:[(0,o.jsx)(a.Z,{className:i()["image-wrapper"],position:"absolute",children:(0,o.jsx)("div",{ref:u,className:i()["image-basic"]})}),(0,o.jsx)(c.Z,{component:"h1",className:s,align:"center",children:t}),(0,o.jsx)(c.Z,{component:"h3",className:i().lower,align:"center",children:n})]})}},2162:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return z}});var o=n(5893),r=n(9956),a=n(3832),c=n(8920),l=n(9008);n(8388);function i(e){var t=e.content,n=(0,c.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.default,{children:[(0,o.jsx)("link",{href:"/prism.css"}),(0,o.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"})]}),(0,o.jsx)("div",{className:"markdown ".concat(n.palette.type),dangerouslySetInnerHTML:{__html:t}})]})}var s=n(2318),u=n(4866),d=n(7869),p=n.n(d);function m(e){var t=e.toc,n=(0,c.Z)();return t&&t.length>0?(0,o.jsxs)(r.Z,{className:p()["toc-".concat(n.palette.type)],children:[(0,o.jsx)(s.Z,{component:"h2",variant:"h2",align:"center",children:"Table of Contents"}),(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,u.Jt)(t)}})]}):null}var g=n(6445),h=n(1163),f=n(5695),y=n.n(f);function v(e){var t=e.group,n=(0,h.useRouter)();if(t&&t.length>0){var a=(t=t.length>20?t.slice(0,20):t).map((function(e,t){return(0,o.jsx)(r.Z,{className:y().item,children:(0,o.jsxs)(g.Z,{className:y().button,onClick:function(){return n.push("/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4]))},children:[(0,o.jsx)("img",{src:e.header.coverImage}),(0,o.jsx)(r.Z,{className:y()["label-wrapper"],children:(0,o.jsx)(s.Z,{className:y().label,children:e.header.title})})]})},t)}));return(0,o.jsxs)(r.Z,{component:"article",className:y().root,children:[(0,o.jsx)(s.Z,{component:"h4",variant:"h4",className:y().title,children:"\ud83e\uddf2 \uc5f0\uad00 \uac8c\uc2dc\ubb3c"}),(0,o.jsx)(r.Z,{className:y().list,children:a})]})}return null}var x=n(1472),b=n(5517),_=n(282),j=n(1587),Z=n(731),k=n.n(Z);function C(e){var t=e.page,n=(0,h.useRouter)(),a=t.prev,c=t.next;return(0,o.jsxs)(r.Z,{component:"article",className:k().root,children:[(0,o.jsxs)(r.Z,{display:"flex",justifyContent:"space-between",children:[(0,o.jsx)(S,{data:a}),(0,o.jsx)(S,{data:c})]}),(0,o.jsx)(b.Z,{className:k().divider}),(0,o.jsx)(r.Z,{children:(0,o.jsx)(_.Z,{className:k().menu,variant:"outlined",startIcon:(0,o.jsx)(j.Z,{}),onClick:function(){return n.push("/".concat(t.type))},children:"\ubaa9\ub85d"})})]})}function S(e){var t=e.data,n=(0,h.useRouter)(),a=(0,c.Z)().palette.type;if(null===t)return null;var l=null===t||void 0===t?void 0:t.url;return(0,o.jsx)(g.Z,{className:k()["button-".concat(a)],onClick:function(){return n.push("/".concat(null===t||void 0===t?void 0:t.header.type,"/").concat(l[1],"/").concat(l[2],"/").concat(l[3],"/").concat(l[4]))},children:(0,o.jsx)(r.Z,{children:t.header.title})})}var w=n(7294),N=n(329),I=n.n(N);function T(e){var t=e.flag,n=(0,c.Z)().palette.type;return(0,w.useEffect)((function(){if(t)if(0===document.querySelectorAll("#utterances > div").length){var e,o=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),o.appendChild(r),null===(e=document.getElementById("utterances"))||void 0===e||e.appendChild(o)}else{var a,c=document.querySelector("#utterances iframe");if(null!==c)null===(a=c.contentWindow)||void 0===a||a.postMessage({type:"set-theme",theme:"github-".concat(n)},"https://utteranc.es/")}})),t?(0,o.jsx)(r.Z,{className:I().root,component:"article",id:"utterances"}):null}function R(e){var t=e.page,n=e.data,c=e.group;return(0,o.jsx)(r.Z,{position:"relative",children:(0,o.jsxs)(a.Z,{maxWidth:"md",children:[(0,o.jsx)(m,{toc:n.toc}),(0,o.jsx)(i,{content:n.content}),(0,o.jsx)(v,{group:c}),(0,o.jsx)(x.Z,{header:n.header}),(0,o.jsx)(C,{page:t}),(0,o.jsx)(T,{flag:n.header.comment})]})})}var E=n(8794),$=n(8494),L=!0;function z(e){var t=e.page,n=e.group,a=e.data,c=a.url;return(0,o.jsxs)(r.Z,{component:"section",children:[(0,o.jsx)($.Z,{title:a.header.title,lower:a.header.category,image:a.header.coverImage}),(0,o.jsx)(E.Z,{title:a.header.title,description:a.header.excerpt,url:"/".concat(a.header.type,"/").concat(c[1],"/").concat(c[2],"/").concat(c[3],"/").concat(c[4]),image:a.header.coverImage}),(0,o.jsx)(r.Z,{children:(0,o.jsx)(R,{page:t,group:n,data:a})})]})}},5334:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[...url]",function(){return n(2162)}])},5695:function(e){e.exports={root:"contentgroup_root__393Yi",title:"contentgroup_title__14YEL",list:"contentgroup_list__1HHxc",item:"contentgroup_item__1sEJk",button:"contentgroup_button__1Zz1J","label-wrapper":"contentgroup_label-wrapper__3L-So",label:"contentgroup_label__5f_Ku"}},4948:function(e){e.exports={root:"contentmeta_root__2CAt-",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},731:function(e){e.exports={root:"contentmover_root__B7rpT",divider:"contentmover_divider__14jgu","button-dark":"contentmover_button-dark__3zOui","button-light":"contentmover_button-light__36Q1m",menu:"contentmover_menu__E6t4v"}},4827:function(e){e.exports={root:"contenttags_root__x5Yka"}},7869:function(e){e.exports={"toc-dark":"contenttoc_toc-dark__OVber","toc-light":"contenttoc_toc-light__KRzMn"}},329:function(e){e.exports={root:"utterances_root__33E-l"}},5146:function(e){e.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL","image-ios":"screener_image-ios__Imz4X",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}},8388:function(){}},function(e){e.O(0,[774,888,179],(function(){return t=5334,e(e.s=t);var t}));var t=e.O();_N_E=t}]);