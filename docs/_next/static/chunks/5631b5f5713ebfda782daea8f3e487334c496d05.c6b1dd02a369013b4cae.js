(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),c=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return a(this,n)}}var f=n("TqRt");t.__esModule=!0,t.default=void 0;var d=f(n("q1tI")),s=f(n("8Kt/")),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var b=function(e){o(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||u[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:g.error},d.default.createElement(s.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:g.h1},e):null,d.default.createElement("div",{style:g.desc},d.default.createElement("h2",{style:g.h2},t,"."))))}}]),n}(d.default.Component);t.default=b,b.displayName="ErrorPage",b.getInitialProps=p,b.origGetInitialProps=p;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"2uji":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),c=n("tRbT"),o=n("R/WZ"),a=n("LXXt"),i=n("q1tI"),l=n("5AJ6"),f=Object(l.a)(i.createElement("path",{d:"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"}),"SpeakerNotesOff"),d=n("6yTC");function s(){var e=Object(o.a)((function(e){return{grid:{textAlign:"center"},grid_icon:{color:a.a[500],width:64,height:64,marginTop:e.spacing(10)},grid_typo:{color:a.a[500],fontSize:"1.5em",marginTop:e.spacing(2)}}}))();return Object(r.jsxs)(c.a,{container:!0,className:e.grid,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(f,{className:e.grid_icon})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(d.a,{up:"h4",down:"h6",className:e.grid_typo,children:"\ub313\uae00 \uc11c\ube44\uc2a4\uac00 \uc911\uc9c0\ub41c \uac8c\uc2dc\ubb3c\uc785\ub2c8\ub2e4."})})]})}},"6SpC":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),c=n("q1tI"),o=n("tr08"),a=n("hlFM"),i=n("R/WZ");function l(){var e=Object(i.a)((function(e){return{utterances:{marginTop:e.spacing(10)}}}))(),t=Object(o.a)().palette.type;return Object(c.useEffect)((function(){if(0===document.querySelectorAll("#utterances > div").length){var e=document.createElement("div"),n=document.createElement("script");n.src="https://utteranc.es/client.js",n.async=!0,n.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),n.setAttribute("issue-term","pathname"),n.setAttribute("theme","dark"===t?"github-dark":"github-light"),n.setAttribute("crossOrigin","anonymous"),e.appendChild(n),document.getElementById("utterances").appendChild(e)}else{var r;null===(r=document.querySelector("#utterances iframe"))||void 0===r||r.contentWindow.postMessage({type:"set-theme",theme:"dark"===t?"github-dark":"github-light"},"https://utteranc.es/")}})),Object(r.jsx)(a.a,{component:"article",id:"utterances",className:e.utterances})}},An1w:function(e,t,n){"use strict";t.a={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"}},eomm:function(e,t,n){e.exports=n("/a9y")},n0mX:function(e,t,n){"use strict";var r=n("q1tI"),c=n("5AJ6");t.a=Object(c.a)(r.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu")},slHK:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("nKUr"),c=n("20a2"),o=n("tr08"),a=n("lopY"),i=n("tRbT"),l=n("Z3vd"),f=n("R/WZ"),d=n("q1tI"),s=n("5AJ6"),u=Object(s.a)(d.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),p=Object(s.a)(d.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),b=n("xDpm");function g(e){var t=e.page,n=Object(f.a)((function(){return{button:{height:"100%"}}}))(),d=Object(c.useRouter)(),s=Object(o.a)(),g=Object(a.a)(s.breakpoints.down("sm")),m=b.c.exec(t.prev.slug),h=b.c.exec(t.next.slug);return Object(r.jsxs)(i.a,{container:!0,spacing:4,justify:"space-between",children:[Object(r.jsx)(i.a,{item:!0,xs:g?6:4,children:-1!==t.prev&&Object(r.jsx)(l.a,{variant:"outlined",color:"primary",className:n.button,fullWidth:!0,startIcon:Object(r.jsx)(u,{}),onClick:function(){return d.push("/".concat(t.type,"/").concat(m[1],"/").concat(m[2],"/").concat(m[3],"/").concat(m[4],"/"))},children:t.prev.title})}),Object(r.jsx)(i.a,{item:!0,xs:g?6:4,children:-1!==t.next&&Object(r.jsx)(l.a,{variant:"outlined",color:"primary",className:n.button,fullWidth:!0,endIcon:Object(r.jsx)(p,{}),onClick:function(){return d.push("/".concat(t.type,"/").concat(h[1],"/").concat(h[2],"/").concat(h[3],"/").concat(h[4]))},children:t.next.title})})]})}},uTx1:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var r=n("rePB"),c=n("nKUr"),o=n("q1tI"),a=n.n(o),i=n("tr08"),l=n("lopY"),f=n("R/WZ"),d=n("dl/7"),s=n("nXt3"),u={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},b=n("rwtN"),g=n("edxh"),m={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},h={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},k={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},y=n("6yBS"),j={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},x={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},A=n("An1w"),O={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},v=n("Yb7a"),w={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},C={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},S=n("LXXt"),E={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},z=n("g4pe"),H=n.n(z);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e){var t=e.content,n=Object(i.a)(),r=function(e){return Object(f.a)((function(t){var n=Object.entries(d.a).reduce((function(e,t){return e["& .red-".concat(t[0])]={color:t[1]},e}),{}),r=Object.entries(s.a).reduce((function(e,t){return e["& .pink-".concat(t[0])]={color:t[1]},e}),{}),c=Object.entries(u).reduce((function(e,t){return e["& .purple-".concat(t[0])]={color:t[1]},e}),{}),o=Object.entries(p).reduce((function(e,t){return e["& .deepPurple-".concat(t[0])]={color:t[1]},e}),{}),a=Object.entries(b.a).reduce((function(e,t){return e["& .indigo-".concat(t[0])]={color:t[1]},e}),{}),i=Object.entries(g.a).reduce((function(e,t){return e["& .blue-".concat(t[0])]={color:t[1]},e}),{}),l=Object.entries(m).reduce((function(e,t){return e["& .lightBlue-".concat(t[0])]={color:t[1]},e}),{}),f=Object.entries(h).reduce((function(e,t){return e["& .cyan-".concat(t[0])]={color:t[1]},e}),{}),z=Object.entries(k).reduce((function(e,t){return e["& .teal-".concat(t[0])]={color:t[1]},e}),{}),H=Object.entries(y.a).reduce((function(e,t){return e["& .green-".concat(t[0])]={color:t[1]},e}),{}),R=Object.entries(j).reduce((function(e,t){return e["& .lightGreen-".concat(t[0])]={color:t[1]},e}),{}),W=Object.entries(x).reduce((function(e,t){return e["& .lime-".concat(t[0])]={color:t[1]},e}),{}),T=Object.entries(A.a).reduce((function(e,t){return e["& .yellow-".concat(t[0])]={color:t[1]},e}),{}),M=Object.entries(O).reduce((function(e,t){return e["& .amber-".concat(t[0])]={color:t[1]},e}),{}),N=Object.entries(v.a).reduce((function(e,t){return e["& .orange-".concat(t[0])]={color:t[1]},e}),{}),I=Object.entries(w).reduce((function(e,t){return e["& .deepOrange-".concat(t[0])]={color:t[1]},e}),{}),L=Object.entries(C).reduce((function(e,t){return e["& .brown-".concat(t[0])]={color:t[1]},e}),{}),P=Object.entries(S.a).reduce((function(e,t){return e["& .grey-".concat(t[0])]={color:t[1]},e}),{}),_=Object.entries(E).reduce((function(e,t){return e["& .blueGrey-".concat(t[0])]={color:t[1]},e}),{}),U="dark"===t.palette.type?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)";return{markdown:B(B(B(B(B(B(B(B(B(B(B(B(B(B(B(B(B(B(B(B({fontSize:e?"1rem":"1.25rem",fontFamily:"\ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, sans-serif",marginBottom:t.spacing(20),lineHeight:1.75,"& .center":{textAlign:"center"},"& .small":{fontSize:e?"0.75rem":"1rem"},"& .large":{fontSize:e?"1.25rem":"1.5rem"},"& .primary":{color:t.palette.primary[t.palette.type]},"& .secondary":{color:t.palette.secondary[t.palette.type]},"& .error":{color:t.palette.error[t.palette.type]},"& .warning":{color:t.palette.warning[t.palette.type]},"& .info":{color:t.palette.warning[t.palette.type]},"& .success":{color:t.palette.warning[t.palette.type]}},n),r),c),o),a),i),l),f),z),H),R),W),T),M),N),I),L),P),_),{},{"& .MuiDivider-root":{border:"none",height:1,margin:0,flexShrink:0,backgroundColor:U},"& .remark-highlight":{"& *":{userSelect:"text",msUserSelect:"text",MozUserSelect:"text",WebkitUserSelect:"text"}},"& h1, & h2, & h3, & h4, & h5, & h6":{marginTop:t.spacing(10)},"& h1, & h2, & h3":{borderBottom:"1px solid ".concat(U)},"& a":{color:m[400]},"& blockquote":{borderLeft:"4px solid ".concat(v.a[500]),backgroundColor:"dark"===t.palette.type?"#222":"#EEE",marginTop:t.spacing(8),marginBottom:t.spacing(8),padding:"15px 25px",fontStyle:"italic",color:"dark"===t.palette.type?"#AAA":"#555","& > :first-child":{marginTop:0},"& > :last-child":{marginBottom:0}},"& img":{maxWidth:"100%",display:"block",margin:"0 auto",marginTop:80,marginBottom:80},"& p span":{wordBreak:"break-word"},"& strong":{wordBreak:"break-word"},"& table":{display:"block",overflow:"auto",padding:0,margin:"auto",fontSize:"1rem",marginTop:t.spacing(7),marginBottom:t.spacing(7),borderCollapse:"collapse","& tr":{borderTop:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),backgroundColor:"transparent",margin:0,padding:0},"& tr:nth-child(2n)":{backgroundColor:"dark"===t.palette.type?"#041733":"whitesmoke"},"& tr th":{fontWeight:"bold",border:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),margin:0,padding:"6px 13px",wordBreak:"keep-all"},"& tr td":{border:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),margin:0,padding:"6px 13px",wordBreak:"keep-all"},"& tr th :first-child, & tr td :first-child":{marginTop:0},"& tr th :last-child, & tr td :last-child":{marginBottom:0}},"& code:not([class*='language-'])":{backgroundColor:b.a[700],color:"white",padding:5,borderRadius:5,fontFamily:"Hack, \ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, monospace",fontSize:"0.75em",marginLeft:t.spacing(1),marginRight:t.spacing(1),userSelect:"text",msUserSelect:"text",MozUserSelect:"text",WebkitUserSelect:"text",wordBreak:"break-word"},"& code[class*='language-'], pre[class*='language-']":{color:"#ccc",background:"none",fontFamily:"Hack, \ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, monospace",fontSize:16,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:1.5,tabSize:4,MozTabSize:4,hyphens:"none",msHyphens:"none",MozHyphens:"none",WebkitHyphens:"none"},"& pre[class*='language-']":{padding:"2em",margin:".5em 0",overflow:"auto"},"& :not(pre) > code[class*='language-'], pre[class*='language-']":{background:"#020213",borderRadius:10},"& :not(pre) > code[class*='language-']":{padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"& pre.language-tc":{maxHeight:300,overflow:"auto"},"& .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata":{color:"#00c800"},"& .token.punctuation":{color:"#ccc"},"& .token.tag, .token.attr-name, .token.namespace, .token.deleted":{color:"#e2777a"},"& .token.function-name":{color:"#6196cc"},"& .token.boolean, .token.number, .token.function":{color:"#f08d49"},"& .token.property, .token.class-name, .token.constant, .token.symbol":{color:"#f8c555"},"& .token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin":{color:"#cc99cd"},"& .token.string, .token.char, .token.attr-value, .token.regex, .token.variable":{color:"#7ec699"},"& .token.operator, .token.entity, .token.url":{color:"#67cdcc"},"& .token.important, .token.bold":{fontWeight:"bold"},"& .token.italic":{fontStyle:"italic"},"& .token.entity":{cursor:"help"},"& .token.inserted":{color:"green"},"& a.head-link":{textDecoration:"none",marginRight:t.spacing(1)},"& .toc-wrap":{backgroundColor:"dark"===t.palette.type?"#222":"#EEE",marginTop:t.spacing(10),padding:t.spacing(3),"& .toc-link":{textDecoration:"none",color:t.palette.text.primary,transition:"500ms","&:hover":{color:t.palette.primary.main,transition:"500ms"}},"& .toc-item-h1":{marginTop:t.spacing(3),marginBottom:t.spacing(3)}},"& .math-display":{overflow:"auto"}})}}))()}(Object(l.a)(n.breakpoints.down("sm")));return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(H.a,{children:Object(c.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"})}),Object(c.jsx)("div",{className:r.markdown,dangerouslySetInnerHTML:{__html:t.content}})]})}}}]);