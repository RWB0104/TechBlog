(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{1267:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(2122),o=r(1253),n=r(7294),l=(r(5697),r(6010)),i=(0,r(5209).Z)(n.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),c=r(4670),d=r(9693),u=r(3834),s=r(3871),p=r(3629);function f(e){return"Backspace"===e.key||"Delete"===e.key}var m=n.forwardRef((function(e,t){var r=e.avatar,c=e.classes,d=e.className,m=e.clickable,y=e.color,h=void 0===y?"default":y,g=e.component,v=e.deleteIcon,b=e.disabled,C=void 0!==b&&b,k=e.icon,S=e.label,x=e.onClick,w=e.onDelete,O=e.onKeyDown,M=e.onKeyUp,_=e.size,P=void 0===_?"medium":_,I=e.variant,E=void 0===I?"default":I,Z=(0,o.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=n.useRef(null),j=(0,u.Z)($,t),R=function(e){e.stopPropagation(),w&&w(e)},T=!(!1===m||!x)||m,D="small"===P,A=g||(T?p.Z:"div"),F=A===p.Z?{component:"div"}:{},N=null;if(w){var L=(0,l.Z)("default"!==h&&("default"===E?c["deleteIconColor".concat((0,s.Z)(h))]:c["deleteIconOutlinedColor".concat((0,s.Z)(h))]),D&&c.deleteIconSmall);N=v&&n.isValidElement(v)?n.cloneElement(v,{className:(0,l.Z)(v.props.className,c.deleteIcon,L),onClick:R}):n.createElement(i,{className:(0,l.Z)(c.deleteIcon,L),onClick:R})}var z=null;r&&n.isValidElement(r)&&(z=n.cloneElement(r,{className:(0,l.Z)(c.avatar,r.props.className,D&&c.avatarSmall,"default"!==h&&c["avatarColor".concat((0,s.Z)(h))])}));var q=null;return k&&n.isValidElement(k)&&(q=n.cloneElement(k,{className:(0,l.Z)(c.icon,k.props.className,D&&c.iconSmall,"default"!==h&&c["iconColor".concat((0,s.Z)(h))])})),n.createElement(A,(0,a.Z)({role:T||w?"button":void 0,className:(0,l.Z)(c.root,d,"default"!==h&&[c["color".concat((0,s.Z)(h))],T&&c["clickableColor".concat((0,s.Z)(h))],w&&c["deletableColor".concat((0,s.Z)(h))]],"default"!==E&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[h]],C&&c.disabled,D&&c.sizeSmall,T&&c.clickable,w&&c.deletable),"aria-disabled":!!C||void 0,tabIndex:T||w?0:void 0,onClick:x,onKeyDown:function(e){e.currentTarget===e.target&&f(e)&&e.preventDefault(),O&&O(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&f(e)?w(e):"Escape"===e.key&&$.current&&$.current.blur()),M&&M(e)},ref:j},F,Z),z||q,n.createElement("span",{className:(0,l.Z)(c.label,D&&c.labelSmall)},S),N)})),y=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],r=(0,d.Fq)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,d._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,d._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,d._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,d._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,d._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,d._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:r,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,d.Fq)(r,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,d.Fq)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,d.Fq)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,d.Fq)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,d.Fq)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(m)},3398:function(e,t,r){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=r(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(o.default.useContext(n.AmpStateContext))};var a,o=(a=r(7294))&&a.__esModule?a:{default:a},n=r(3398);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,n=e.hasQuery,l=void 0!==n&&n;return r||o&&l}},808:function(e,t,r){"use strict";var a=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var n,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=a?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(r,o,n):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(n=r(3244))&&n.__esModule?n:{default:n},c=r(3398),d=r(1165),u=r(6393);function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var r=l.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,a={};return function(o){var n=!0,l=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){l=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?n=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?n=!1:t.add(o.type);break;case"meta":for(var c=0,d=m.length;c<d;c++){var u=m[c];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?n=!1:r.add(u);else{var s=o.props[u],p=a[u]||new Set;"name"===u&&l||!p.has(s)?(p.add(s),a[u]=p):n=!1}}}return n}}()).reverse().map((function(e,r){var n=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,l.default.cloneElement(e,i)}return l.default.cloneElement(e,{key:n})}))}var h=function(e){var t=e.children,r=(0,l.useContext)(c.AmpStateContext),a=(0,l.useContext)(d.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:y,headManager:a,inAmpMode:(0,u.isInAmpMode)(r)},t)};t.default=h},3244:function(e,t,r){"use strict";var a=r(3115),o=r(2553),n=r(2012),l=(r(450),r(9807)),i=r(7690),c=r(9828);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),s=function(e){l(r,e);var t=d(r);function r(e){var n;return o(this,r),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(a(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=s},9008:function(e,t,r){e.exports=r(808)},8164:function(e,t,r){var a=r(4360);e.exports=function(e){if(Array.isArray(e))return a(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var a=r(8164),o=r(7381),n=r(3585),l=r(5725);e.exports=function(e){return a(e)||o(e)||n(e)||l()}}}]);