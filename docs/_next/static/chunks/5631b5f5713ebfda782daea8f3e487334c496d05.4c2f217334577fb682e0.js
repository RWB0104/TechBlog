(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/a9y":function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),c=r("7W2i"),a=r("a1gu"),i=r("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}var l=r("TqRt");t.__esModule=!0,t.default=void 0;var d=l(r("q1tI")),s=l(r("8Kt/")),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var b=function(e){c(r,e);var t=f(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||u[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:g.error},d.default.createElement(s.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:g.h1},e):null,d.default.createElement("div",{style:g.desc},d.default.createElement("h2",{style:g.h2},t,"."))))}}]),r}(d.default.Component);t.default=b,b.displayName="ErrorPage",b.getInitialProps=p,b.origGetInitialProps=p;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"20a2":function(e,t,r){e.exports=r("nOHt")},An1w:function(e,t,r){"use strict";t.a={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"}},eomm:function(e,t,r){e.exports=r("/a9y")},uTx1:function(e,t,r){"use strict";r.d(t,"a",(function(){return W}));var n=r("rePB"),o=r("nKUr"),c=r("q1tI"),a=r.n(c),i=r("tr08"),f=r("lopY"),l=r("R/WZ"),d=r("dl/7"),s=r("nXt3"),u={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},b=r("rwtN"),g=r("edxh"),m={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},h={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},k={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},y=r("6yBS"),A={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},x={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},O=r("An1w"),w={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},j=r("Yb7a"),v={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},C={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},S=r("LXXt"),E={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},B=r("g4pe"),R=r.n(B);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e){var t=e.content,r=Object(i.a)(),n=function(e){return Object(l.a)((function(t){var r=Object.entries(d.a).reduce((function(e,t){return e["& .red-".concat(t[0])]={color:t[1]},e}),{}),n=Object.entries(s.a).reduce((function(e,t){return e["& .pink-".concat(t[0])]={color:t[1]},e}),{}),o=Object.entries(u).reduce((function(e,t){return e["& .purple-".concat(t[0])]={color:t[1]},e}),{}),c=Object.entries(p).reduce((function(e,t){return e["& .deepPurple-".concat(t[0])]={color:t[1]},e}),{}),a=Object.entries(b.a).reduce((function(e,t){return e["& .indigo-".concat(t[0])]={color:t[1]},e}),{}),i=Object.entries(g.a).reduce((function(e,t){return e["& .blue-".concat(t[0])]={color:t[1]},e}),{}),f=Object.entries(m).reduce((function(e,t){return e["& .lightBlue-".concat(t[0])]={color:t[1]},e}),{}),l=Object.entries(h).reduce((function(e,t){return e["& .cyan-".concat(t[0])]={color:t[1]},e}),{}),B=Object.entries(k).reduce((function(e,t){return e["& .teal-".concat(t[0])]={color:t[1]},e}),{}),R=Object.entries(y.a).reduce((function(e,t){return e["& .green-".concat(t[0])]={color:t[1]},e}),{}),z=Object.entries(A).reduce((function(e,t){return e["& .lightGreen-".concat(t[0])]={color:t[1]},e}),{}),W=Object.entries(x).reduce((function(e,t){return e["& .lime-".concat(t[0])]={color:t[1]},e}),{}),H=Object.entries(O.a).reduce((function(e,t){return e["& .yellow-".concat(t[0])]={color:t[1]},e}),{}),P=Object.entries(w).reduce((function(e,t){return e["& .amber-".concat(t[0])]={color:t[1]},e}),{}),M=Object.entries(j.a).reduce((function(e,t){return e["& .orange-".concat(t[0])]={color:t[1]},e}),{}),D=Object.entries(v).reduce((function(e,t){return e["& .deepOrange-".concat(t[0])]={color:t[1]},e}),{}),F=Object.entries(C).reduce((function(e,t){return e["& .brown-".concat(t[0])]={color:t[1]},e}),{}),N=Object.entries(S.a).reduce((function(e,t){return e["& .grey-".concat(t[0])]={color:t[1]},e}),{}),U=Object.entries(E).reduce((function(e,t){return e["& .blueGrey-".concat(t[0])]={color:t[1]},e}),{}),_="dark"===t.palette.type?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)";return{markdown:T(T(T(T(T(T(T(T(T(T(T(T(T(T(T(T(T(T(T(T({fontSize:e?"1rem":"1.25rem",fontFamily:"\ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, sans-serif",marginBottom:t.spacing(20),lineHeight:1.75,"& .center":{textAlign:"center"},"& .small":{fontSize:e?"0.75rem":"1rem"},"& .large":{fontSize:e?"1.25rem":"1.5rem"},"& .primary":{color:t.palette.primary[t.palette.type]},"& .secondary":{color:t.palette.secondary[t.palette.type]},"& .error":{color:t.palette.error[t.palette.type]},"& .warning":{color:t.palette.warning[t.palette.type]},"& .info":{color:t.palette.warning[t.palette.type]},"& .success":{color:t.palette.warning[t.palette.type]}},r),n),o),c),a),i),f),l),B),R),z),W),H),P),M),D),F),N),U),{},{"& .MuiDivider-root":{border:"none",height:1,margin:0,flexShrink:0,backgroundColor:_},"& .remark-highlight":{"& *":{userSelect:"text",msUserSelect:"text",MozUserSelect:"text",WebkitUserSelect:"text"}},"& h1, & h2, & h3, & h4, & h5, & h6":{marginTop:t.spacing(10)},"& h1, & h2, & h3":{borderBottom:"1px solid ".concat(_)},"& a":{color:m[400]},"& blockquote":{borderLeft:"4px solid ".concat(j.a[500]),backgroundColor:"dark"===t.palette.type?"#222":"#EEE",marginTop:t.spacing(8),marginBottom:t.spacing(8),padding:"15px 25px",fontStyle:"italic",color:"dark"===t.palette.type?"#AAA":"#555","& > :first-child":{marginTop:0},"& > :last-child":{marginBottom:0}},"& img":{maxWidth:"100%",display:"block",margin:"0 auto",marginTop:80,marginBottom:80},"& p span":{wordBreak:"break-word"},"& strong":{wordBreak:"break-word"},"& table":{display:"block",overflow:"auto",padding:0,margin:"auto",fontSize:"1rem",marginTop:t.spacing(7),marginBottom:t.spacing(7),borderCollapse:"collapse","& tr":{borderTop:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),backgroundColor:"transparent",margin:0,padding:0},"& tr:nth-child(2n)":{backgroundColor:"dark"===t.palette.type?"#041733":"whitesmoke"},"& tr th":{fontWeight:"bold",border:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),margin:0,padding:"6px 13px",wordBreak:"keep-all"},"& tr td":{border:"1px solid ".concat("dark"===t.palette.type?"#333333":"#CCCCCC"),margin:0,padding:"6px 13px",wordBreak:"keep-all"},"& tr th :first-child, & tr td :first-child":{marginTop:0},"& tr th :last-child, & tr td :last-child":{marginBottom:0}},"& code:not([class*='language-'])":{backgroundColor:b.a[700],color:"white",padding:5,borderRadius:5,fontFamily:"Hack, \ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, monospace",fontSize:"0.75em",marginLeft:t.spacing(1),marginRight:t.spacing(1),userSelect:"text",msUserSelect:"text",MozUserSelect:"text",WebkitUserSelect:"text",wordBreak:"break-word"},"& code[class*='language-'], pre[class*='language-']":{color:"#ccc",background:"none",fontFamily:"Hack, \ub098\ub214\uc2a4\ud018\uc5b4\ub77c\uc6b4\ub4dc, monospace",fontSize:16,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:1.5,tabSize:4,MozTabSize:4,hyphens:"none",msHyphens:"none",MozHyphens:"none",WebkitHyphens:"none"},"& pre[class*='language-']":{padding:"2em",margin:".5em 0",overflow:"auto"},"& :not(pre) > code[class*='language-'], pre[class*='language-']":{background:"#020213",borderRadius:10},"& :not(pre) > code[class*='language-']":{padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"& pre.language-tc":{maxHeight:300,overflow:"auto"},"& .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata":{color:"#00c800"},"& .token.punctuation":{color:"#ccc"},"& .token.tag, .token.attr-name, .token.namespace, .token.deleted":{color:"#e2777a"},"& .token.function-name":{color:"#6196cc"},"& .token.boolean, .token.number, .token.function":{color:"#f08d49"},"& .token.property, .token.class-name, .token.constant, .token.symbol":{color:"#f8c555"},"& .token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin":{color:"#cc99cd"},"& .token.string, .token.char, .token.attr-value, .token.regex, .token.variable":{color:"#7ec699"},"& .token.operator, .token.entity, .token.url":{color:"#67cdcc"},"& .token.important, .token.bold":{fontWeight:"bold"},"& .token.italic":{fontStyle:"italic"},"& .token.entity":{cursor:"help"},"& .token.inserted":{color:"green"},"& a.head-link":{textDecoration:"none",marginRight:t.spacing(1)},"& .toc-wrap":{backgroundColor:"dark"===t.palette.type?"#222":"#EEE",marginTop:t.spacing(10),padding:t.spacing(3),"& .toc-link":{textDecoration:"none",color:t.palette.text.primary,transition:"500ms","&:hover":{color:t.palette.primary.main,transition:"500ms"}},"& .toc-item-h1":{marginTop:t.spacing(3),marginBottom:t.spacing(3)}},"& .math-display":{overflow:"auto"}})}}))()}(Object(f.a)(r.breakpoints.down("sm")));return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)(R.a,{children:Object(o.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"})}),Object(o.jsx)("div",{className:n.markdown,dangerouslySetInnerHTML:{__html:t.content}})]})}}}]);