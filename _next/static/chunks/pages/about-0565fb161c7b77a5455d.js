(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{170:function(t,e,n){"use strict";var i=n(2122),o=n(4699),r=n(2949),a=n(7294),s=(n(5697),n(2666)),c=n(8920),u=n(5653),l=n(3834);function d(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var h={entering:{opacity:1,transform:d(1)},entered:{opacity:1,transform:"none"}},p=a.forwardRef((function(t,e){var n=t.children,p=t.disableStrictModeCompat,g=void 0!==p&&p,f=t.in,m=t.onEnter,x=t.onEntered,E=t.onEntering,v=t.onExit,y=t.onExited,b=t.onExiting,j=t.style,w=t.timeout,k=void 0===w?"auto":w,C=t.TransitionComponent,S=void 0===C?s.ZP:C,Z=(0,r.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=a.useRef(),N=a.useRef(),_=(0,c.Z)(),D=_.unstable_strictMode&&!g,M=a.useRef(null),R=(0,l.Z)(n.ref,e),O=(0,l.Z)(D?M:void 0,R),A=function(t){return function(e,n){if(t){var i=D?[M.current,e]:[e,n],r=(0,o.Z)(i,2),a=r[0],s=r[1];void 0===s?t(a):t(a,s)}}},F=A(E),W=A((function(t,e){(0,u.n)(t);var n,i=(0,u.C)({style:j,timeout:k},{mode:"enter"}),o=i.duration,r=i.delay;"auto"===k?(n=_.transitions.getAutoHeightDuration(t.clientHeight),N.current=n):n=o,t.style.transition=[_.transitions.create("opacity",{duration:n,delay:r}),_.transitions.create("transform",{duration:.666*n,delay:r})].join(","),m&&m(t,e)})),L=A(x),P=A(b),z=A((function(t){var e,n=(0,u.C)({style:j,timeout:k},{mode:"exit"}),i=n.duration,o=n.delay;"auto"===k?(e=_.transitions.getAutoHeightDuration(t.clientHeight),N.current=e):e=i,t.style.transition=[_.transitions.create("opacity",{duration:e,delay:o}),_.transitions.create("transform",{duration:.666*e,delay:o||.333*e})].join(","),t.style.opacity="0",t.style.transform=d(.75),v&&v(t)})),B=A(y);return a.useEffect((function(){return function(){clearTimeout(T.current)}}),[]),a.createElement(S,(0,i.Z)({appear:!0,in:f,nodeRef:D?M:void 0,onEnter:W,onEntered:L,onEntering:F,onExit:z,onExited:B,onExiting:P,addEndListener:function(t,e){var n=D?t:e;"auto"===k&&(T.current=setTimeout(n,N.current||0))},timeout:"auto"===k?null:k},Z),(function(t,e){return a.cloneElement(n,(0,i.Z)({style:(0,i.Z)({opacity:0,transform:d(.75),visibility:"exited"!==t||f?void 0:"hidden"},h[t],j,n.props.style),ref:O},e))}))}));p.muiSupportAuto=!0,e.Z=p},5653:function(t,e,n){"use strict";n.d(e,{n:function(){return i},C:function(){return o}});var i=function(t){return t.scrollTop};function o(t,e){var n=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:o.transitionDelay}}},8247:function(t,e,n){"use strict";function i(t){return t[Math.floor(Math.random()*t.length)]}function o(t){var e=t.getFullYear(),n=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),o=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),r=t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),a=t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds(),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()];return"".concat(e,"-").concat(n,"-").concat(i," ").concat(s," ").concat(o,":").concat(r,":").concat(a)}n.d(e,{J:function(){return i},L:function(){return o}})},1133:function(t,e,n){"use strict";n.d(e,{R:function(){return c},dz:function(){return u},us:function(){return l},Tl:function(){return d},TJ:function(){return h},xE:function(){return p}});var i=n(5893),o=n(4577),r=n(5747),a=n(9242),s=n(89),c="Kapoo",u="314159265359\ubc88\uc9f8 \uc54c\ud30c\uce74\uc758 \uac1c\ubc1c \ub099\uc11c\uc7a5",l="/assets/images/logo.png",d=[{id:1,title:"Home",url:{pathname:"/"},icon:(0,i.jsx)(o.Z,{})},{id:2,title:"Posts",url:{pathname:"/posts",query:{page:1,category:"All"}},icon:(0,i.jsx)(r.Z,{})},{id:3,title:"Projects",url:{pathname:"/projects",query:{page:1,category:"All"}},icon:(0,i.jsx)(a.Z,{})},{id:4,title:"About",url:{pathname:"/about"},icon:(0,i.jsx)(s.Z,{})}],h=[{title:"Cake is a fxcking LIE",author:"Are you steel there?",images:"https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-07-14-17-16/this-portal-2-level-completed-without-portals-is-outrageous-1594743396198.jpg/EG11/resize/1200x-1/this-portal-2-level-completed-without-portals-is-outrageous-1594743396198.jpg"},{title:"Sierra Madre. \uc77c\ud655\ucc9c\uae08\uc758 \uafc8\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uacf3.",author:"Sierra Madre Casino",images:"https://i.pinimg.com/originals/3e/25/68/3e25682537cbbaa9701867e6888cd88d.jpg"},{title:"Trust Me.",author:"BT",images:"https://cdn.mos.cms.futurecdn.net/qdPeSekFx8TzDHnza2cu2e.jpg"},{title:"A man chooses, A slave obeys.",author:"a Golfer",images:"https://steamuserimages-a.akamaihd.net/ugc/849342107711892529/A6F2773F8A86D9690E843BCE4835D92C7A86851F/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"},{title:"404 Not Found",author:"undefined... x_X",images:"https://i.pinimg.com/originals/17/c4/a4/17c4a4f21be8344c713b69f7ca26f11c.gif"},{title:"\uac8c\uc784\uc744 \ud558\uba74 \uc774\uaca8\uc57c\uc9c0!",author:"D.Va",images:"https://lh3.googleusercontent.com/proxy/mqQAgAROI2wRvVQhwMTsQipXbhL6BQHL5JgvJmEbZV2faDoOc_rcEbyqiccKeehgg8VjbXN32B0MJgDeFsNBf38PydAC3u2vXSaiq9ziztZNOzTzVvEVhlIN7zT8GGAX4u7aWal-LyNAc7CNgkekWbQuKQuZIo-EcmW-ThjO_P7iILChL0T9g6g_DgSRQNmbcPRIkbjwno1VPtjQsNdjCWeyeHdHanyZvnIRmuBS0C03nQ0v45XYnwBRGApjQ4jcoadLzQxxV0DyBnx1gDl40OkLJbjNCsN0hFuK1a-GORjrzv2OMPvjV06Uf_jgZtr72v7RNjiFGrSxrWVYTUefoqFk-cDJPwJ_jmZUyq-n4Krt4kLyz9j8WiRuus66k_wjKXQR1diYcttgXus5oRkaUtu_"},{title:"\ub0b4 \uc190\uc744 \uc7a1\uc544, \uc2dc\uc791\ub418\ub294 Party time.",author:"\ud658\uc0c1\uc18d\uc758 \uadf8\ub300 \u4e2d",images:"http://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/4514/Mgz_Sub_EVT_20180125111859.jpg"},{title:"Enjoy your stay",author:"Fallout New Vegas",images:"https://cdn.mos.cms.futurecdn.net/4Wpwi8S5CBDdhgWxWCZaXo.jpg"},{title:"War... War never changes.",author:"Fallout Series",images:"https://wallup.net/wp-content/uploads/2016/01/270931-video_games-Fallout-power_armor.jpg"},{title:"War... War never changes. Men do.",author:"Ulysses",images:"https://lh3.googleusercontent.com/proxy/2sXjx3Ma1_Xeji4sr2HL4QglzPL_0wj-Do7ttTkc79tXFswwDOlYDjgYi4aP3QLKb844dTsb1DxG5OS08J2CJKGMvNK6ULfpYkPtKyO199HToWavTat87Nsgp1vN2re9ADFphk2aXKC8YzFHjHG3z-uX-1i79ckXcw"},{title:"On your left.",author:"Sam",images:"https://i.imgur.com/vz23TXe.jpg"},{title:"History is written by the victors.",author:"Cpt. Price",images:"https://i.pinimg.com/originals/5f/67/79/5f677994acacdde50241be686f526e0a.jpg"},{title:"History is written by the victors.",author:"Gen. Shepherd",images:"https://www.gamingaccessweekly.com/wp-content/uploads/2020/03/alien-Screenshot-2020-03-31-21-43-51.png"},{title:"Remember. We get dirty, World be stay clean. That's the mission.",author:"Cpt. Price",images:"https://static2.gamerantimages.com/wordpress/wp-content/uploads/2020/06/captain-price-nightfall-skin.jpg"},{title:"Succeeding you, Father.",author:"Arthas Menethil",images:"https://coinpan.com/files/attach/images/198/605/237/028/4027dc6daa25d8aba1d1520ae2820150.jpg"},{title:"My life for Aiur",author:"Zeratul",images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFE0eR_nvrwnAqRKNlB-eZMxW7Zl5CfbZNou54ie3IgzuKYmU6d2y3CxD4K4h-m-ZFD_4&usqp=CAU"},{title:"\ub4dc\ub514\uc5b4, \uc62c \uac83\uc774 \uc654\uad70.",author:"Tychus J. Findlay",images:"https://i.ytimg.com/vi/4LY8uBwkYB4/maxresdefault.jpg"},{title:"\uadf8 \uc5ec\uc790\uac00 \uadf8\ub9cc\ud55c \uac00\uce58\uac00 \uc788\uae38 \ubc14\ub77c\uaca0\uc5b4, \uc9c0\ubbf8...",author:"Tychus J. Findlay...?",images:"https://i.ytimg.com/vi/TuOjcQsdlbw/mqdefault.jpg"}],p=10},9831:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5893),o=n(9008),r=n(1133);function a(t){var e=t.title;return(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"".concat(e," - ").concat(r.R)})})}},4921:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(6156),o=n(5893),r=n(7294),a=n(8367),s=n(1017),c=n(8920),u=n(3457),l=n(7748),d=n(2318),h=n(4720),p=n(5517),g=n(1120),f=n(1490);function m(t){var e=t.title,n=t.desc,m=t.category,x=t.onlyEng,E=function(t,e){return(0,g.Z)((function(e){return{top_wrapper:(0,i.Z)({flexDirection:"column",height:"calc(100vh - 64px)",backgroundImage:"url(".concat(t,")"),backgroundColor:"rgba(0, 0, 0, 0.6)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},e.breakpoints.down("sm"),{height:"calc(100vh - 112px)"}),top_content:{flexDirection:"column",width:"100%",height:"100%",padding:50,justifyContent:"center",alignSelf:"center","& h1, & h2":{color:"white",marginBottom:60,fontWeight:"bold"},"& h3, & h4, & h5, & h6":{color:"white",fontWeight:"bold"}},top_content_eng:{flexDirection:"column",width:"100%",height:"100%",padding:50,justifyContent:"center",alignSelf:"center","& h1, & h2":{color:"white",marginBottom:60,fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},"& h3, & h4, & h5, & h6":{color:"white",fontWeight:"bold"}},down:(0,i.Z)({width:"100%",padding:20,"& svg":{width:50,height:50}},e.breakpoints.down("sm"),{"& svg":{width:30,height:30}}),divider:{opacity:0}}}))()}(t.image),v=(0,c.Z)(),y=(0,u.Z)(v.breakpoints.down("sm")),b=(0,r.useRef)(null);return(0,s.default)({ssrFadeOut:!0}),(0,r.useEffect)((function(){document.getElementById("top").addEventListener("wheel",(function(t){t.deltaY>0&&(t.preventDefault(),b.current.scrollIntoView({behavior:"smooth"}))}))})),(0,o.jsxs)(l.Z,{id:"top",display:"flex",className:E.top_wrapper,children:[(0,o.jsxs)(l.Z,{display:"flex",className:x?E.top_content_eng:E.top_content,children:[(0,o.jsx)(d.Z,{variant:y?"h5":"h3",align:"center",children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:m&&"[".concat(m,"]")})}),(0,o.jsx)(d.Z,{variant:y?"h2":"h1",align:"center",children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:e})}),(0,o.jsx)(d.Z,{variant:y?"h6":"h4",align:"center",children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:n})})]}),(0,o.jsx)(h.Z,{className:E.down,onClick:function(){return b.current.scrollIntoView({behavior:"smooth"})},children:(0,o.jsx)(f.Z,{})}),(0,o.jsx)(p.Z,{ref:b,className:E.divider})]})}},2025:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d},default:function(){return h}});var i=n(5893),o=n(7294),r=n(170),a=n(7748),s=(n(9008),n(4921)),c=n(8247),u=n(1133),l=n(9831),d=!0;function h(t){var e=t.images,n=(0,c.J)(e);return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(l.Z,{title:u.Tl[3].title}),(0,i.jsx)(r.Z,{in:!0,children:(0,i.jsx)(a.Z,{component:"section",children:(0,i.jsx)(s.Z,{title:u.Tl[3].title,image:"/assets/images/main/".concat(n),onlyEng:!0})})})]})}},8961:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2025)}])},2666:function(t,e,n){"use strict";n.d(e,{ZP:function(){return m}});var i=n(9756),o=n(1788),r=(n(5697),n(7294)),a=n(3935),s=!1,c=n(220),u="unmounted",l="exited",d="entering",h="entered",p="exiting",g=function(t){function e(e,n){var i;i=t.call(this,e,n)||this;var o,r=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?r?(o=l,i.appearStatus=d):o=h:o=e.unmountOnExit||e.mountOnEnter?u:l,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:l}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(e=d):n!==d&&n!==h||(e=p)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!==typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:u})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[a.findDOMNode(this),i],r=o[0],c=o[1],u=this.getTimeouts(),l=i?u.appear:u.enter;!t&&!n||s?this.safeSetState({status:h},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,c),this.safeSetState({status:d},(function(){e.props.onEntering(r,c),e.onTransitionEnd(l,(function(){e.safeSetState({status:h},(function(){e.props.onEntered(r,c)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);e&&!s?(this.props.onExit(i),this.safeSetState({status:p},(function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],s=o[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(c.Z.Provider,{value:null},"function"===typeof n?n(t,o):r.cloneElement(r.Children.only(n),o))},e}(r.Component);function f(){}g.contextType=c.Z,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},g.UNMOUNTED=u,g.EXITED=l,g.ENTERING=d,g.ENTERED=h,g.EXITING=p;var m=g}},function(t){t.O(0,[774,598,817],(function(){return e=8961,t(t.s=e);var e}));var e=t.O();_N_E=e}]);