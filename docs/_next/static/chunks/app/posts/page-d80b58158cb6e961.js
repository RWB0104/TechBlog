(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{24276:function(e,t,n){Promise.resolve().then(n.bind(n,42815)),Promise.resolve().then(n.bind(n,69229)),Promise.resolve().then(n.bind(n,13709)),Promise.resolve().then(n.bind(n,68310)),Promise.resolve().then(n.bind(n,98278)),Promise.resolve().then(n.bind(n,79705)),Promise.resolve().then(n.bind(n,31594)),Promise.resolve().then(n.bind(n,74304))},50884:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MarkdownCategory}});var r=n(18891),o=n(5242),s=n(77333),a=n(91043),l=n(13473),c=n(31339),i=n(54783),d=n.n(i),u=n(46271),h=n.n(u);let m=d().bind(h());var molecule_MarkdownCategoryItem=function(e){let{category:t,count:n,selected:i,dimmed:d,...u}=e;return(0,r.jsx)(a.Z,{className:"fullwidth","data-component":"MarkdownCategoryItem","data-selected":i,...u,children:(0,r.jsxs)(s.Z,{className:m("card"),position:"relative",width:"100%",children:[(0,r.jsx)(s.Z,{className:m("wrap"),height:"100%",width:"100%",children:(0,r.jsx)(o.Z,{alt:t,className:m("image",{dimmed:d}),height:"100%",src:"https://datastore.itcode.dev/blog/category/".concat(encodeURIComponent(t),".png"),width:"100%"})}),(0,r.jsxs)(l.Z,{alignItems:"center",bgcolor:"#000000AA",bottom:0,className:m("title"),direction:"row",justifyContent:"space-between",padding:1,position:"absolute",width:"100%",children:[(0,r.jsx)(c.Z,{color:"white",variant:"caption",children:t}),(0,r.jsx)(c.Z,{color:"white",variant:"caption",children:n})]})]})})},g=n(18510),p=n(63666),w=n(78896),x=n(98080),f=n(48888),k=n(94749),j=n(24839),y=n(39129);function MarkdownCategory(e){let{markdown:t}=e,n=(0,j.useRouter)(),o=(0,j.useSearchParams)(),s=(0,j.usePathname)(),a=(0,y.useMemo)(()=>o.get("keyword"),[o]),i=(0,y.useMemo)(()=>o.getAll("category"),[o]),d=(0,y.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return!a||!(a.length>0)||t.title.includes(a)||t.excerpt.includes(a)}).reduce((e,t)=>{let{frontmatter:n}=t,r=e.findIndex(e=>{let{name:t}=e;return t===n.category}),o=i.includes(n.category);return r>-1?(e[r].count+=1,e[r].selected=o):e.push({count:1,name:n.category,selected:o}),e},[{count:t.length,name:"전체",selected:!1}]),[t,a,i]),u=(0,y.useCallback)(e=>i.length>0&&!i.includes(e),[i]),h=(0,y.useCallback)(e=>{let t=new URLSearchParams(o),r=t.get("keyword"),a=t.getAll("category"),l=a.includes(e);t.delete("page"),r&&t.set("keyword",r),"전체"===e?t.delete("category"):l?(t.delete("category"),a.filter(t=>t!==e).forEach(n=>{n!==e&&t.append("category",n)})):t.append("category",e),n.push("".concat(s,"?").concat(t.toString()),{scroll:!1})},[a,o]);return(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(f.Z,{expandIcon:(0,r.jsx)(g.Z,{}),children:(0,r.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,r.jsx)(p.Z,{color:"primary"}),(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"h5",children:"카테고리"})]})}),(0,r.jsx)(x.Z,{children:(0,r.jsx)(k.ZP,{spacing:.5,container:!0,children:d.map(e=>{let{name:t,count:n,selected:o}=e;return(0,r.jsx)(k.ZP,{md:2,xs:4,item:!0,children:(0,r.jsx)(molecule_MarkdownCategoryItem,{category:t,count:n,dimmed:u(t),selected:o,onClick:()=>h(t)})},t)})})})]})}},5576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MarkdownInfiniteList}});var r=n(18891),o=n(77333),s=n(39129),molecule_InfiniteScroller=function(e){let{fetchMargin:t,isLast:n,onFetch:a,children:l,...c}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.some(e=>(e.isIntersecting&&a&&!n&&a(),e.isIntersecting))},{rootMargin:t,threshold:0});return i.current&&e.observe(i.current),()=>{e.disconnect()}},[i.current,t,n,a]),(0,r.jsxs)(o.Z,{"data-component":"InfiniteScroller",...c,children:[l,(0,r.jsx)(o.Z,{ref:i,width:"100%"})]})},a=n(71),l=n(15049),c=n(24839);function MarkdownInfiniteList(e){let{markdown:t}=e,n=(0,c.useRouter)(),i=(0,c.useSearchParams)(),d=(0,c.usePathname)(),{referer:u,setReferer:h}=(0,l.Eh)(),m=(0,s.useMemo)(()=>parseInt(i.get("page")||"1",10),[i]),g=(0,s.useMemo)(()=>i.get("keyword"),[i]),p=(0,s.useMemo)(()=>i.getAll("category"),[i]),w=(0,s.useCallback)(()=>{let e=new URLSearchParams(i);e.set("page","".concat(m+1)),e.delete("category"),g&&e.set("keyword",g),p.forEach(t=>{e.append("category",t)}),n.push("".concat(d,"?").concat(e.toString()),{scroll:!1})},[d,n,i]),x=(0,s.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return g&&g.length>0&&p.length>0?(t.title.includes(g)||t.excerpt.includes(g))&&p.includes(t.category):g&&g.length>0?t.title.includes(g)||t.excerpt.includes(g):!(p.length>0)||p.includes(t.category)}),[p,g,t]),f=(0,s.useMemo)(()=>{let e=6*m;return x.slice(0,e)},[m,x]),k=(0,s.useMemo)(()=>{let e=Math.ceil(x.length/6);return m>=e},[m,x]),j=(0,s.useCallback)(()=>{let e=new URLSearchParams(i),t=e.get("page"),n=e.get("keyword"),r=e.getAll("category"),o={scroll:window.scrollY};t&&(o.page=t),n&&n.length>0&&(o.keyword=n),r&&r.length>0&&(o.category=r),h(o)},[i,h]);return(0,s.useEffect)(()=>{(null==u?void 0:u.scroll)&&window.scroll({top:u.scroll}),h(void 0)},[h]),(0,r.jsx)(o.Z,{"data-component":"MarkdownInfiniteList",children:(0,r.jsx)(molecule_InfiniteScroller,{fetchMargin:"500px",isLast:k,onFetch:w,children:(0,r.jsx)(a.Z,{markdown:f,onCardClick:j})})})}},66899:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MarkdownSearch}});var r=n(18891),o=n(68563),s=n(2461),a=n(27745),l=n(24839),c=n(39129);function MarkdownSearch(){let e=(0,l.useRouter)(),t=(0,l.useSearchParams)(),n=(0,l.usePathname)(),[i,d]=(0,c.useState)(""),u=(0,c.useRef)(null),h=(0,c.useCallback)(r=>{let{currentTarget:o}=r,s=new URLSearchParams(t);s.delete("page"),o.value.length>0?s.set("keyword",o.value):s.delete("keyword"),e.push("".concat(n,"?").concat(s.toString()),{scroll:!1})},[e,t]);return(0,c.useEffect)(()=>{let e=new URLSearchParams(t),n=e.get("keyword");d(n||"")},[]),(0,r.jsx)(a.Z,{"data-component":"MarkdownSearch",defaultValue:i,label:"키워드",placeholder:"⌨️ 원하는 키워드를 입력해보세요",ref:u,size:"small",variant:"outlined",InputProps:{startAdornment:(0,r.jsx)(s.Z,{position:"start",children:(0,r.jsx)(o.Z,{})})},onChange:h})}},74304:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PostsTemplate}});var r=n(18891),o=n(50884).default,s=n(5576).default,a=n(66899).default,l=n(13473),markdown_MarkdownBox=function(e){let{markdownList:t}=e;return(0,r.jsxs)(l.Z,{"data-component":"MarkdownBox",spacing:10,children:[(0,r.jsxs)(l.Z,{spacing:4,children:[(0,r.jsx)(a,{}),(0,r.jsx)(o,{markdown:t})]}),(0,r.jsx)(s,{markdown:t})]})},c=n(60885),posts_PostsListTemplate=function(e){let{markdownList:t}=e;return(0,r.jsx)(c.Z,{"data-component":"PostsListTemplate",children:(0,r.jsx)(markdown_MarkdownBox,{markdownList:t})})},i=n(80820),d=n(66521).default,u=n(77333),h=n(31339),m=n(54783),g=n.n(m),p=n(71305),w=n.n(p);let x=g().bind(w());var global_ScreenerBox=function(e){let{title:t,name:n,text:o,color:s="white"}=e;return(0,r.jsxs)(l.Z,{alignItems:"center","data-component":"ScreenerBox",height:"100%",justifyContent:"center",padding:4,position:"relative",width:"100%",children:[(0,r.jsxs)(l.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(u.Z,{bgcolor:s,boxShadow:"5px 5px 5px black",width:5}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(h.Z,{className:x("text"),color:"white",fontWeight:"bold",variant:"h4",children:t||i.L1.title}),(0,r.jsx)(h.Z,{className:x("text"),color:s,variant:"h6",children:n}),o?(0,r.jsx)(h.Z,{className:x("text"),color:"white",variant:"h6",children:o}):null]})]}),(0,r.jsxs)(l.Z,{alignItems:"center",bottom:50,position:"absolute",spacing:2,children:[(0,r.jsx)(l.Z,{border:"5px solid white",borderRadius:100,height:50,padding:1,position:"relative",width:31,children:(0,r.jsx)(u.Z,{bgcolor:"white",borderRadius:100,className:x("icon"),height:10,position:"absolute",width:5})}),(0,r.jsx)(h.Z,{color:"white",children:"D O W N"})]})]})},posts_PostsScreenerTemplate=function(){return(0,r.jsx)(d,{children:(0,r.jsx)(global_ScreenerBox,{color:"dodgerblue",name:i.RH.posts.title,text:i.RH.posts.description})})};function PostsTemplate(e){let{markdownList:t}=e;return(0,r.jsxs)(l.Z,{alignItems:"center","data-component":"PostsTemplate",spacing:10,width:"100%",children:[(0,r.jsx)(posts_PostsScreenerTemplate,{}),(0,r.jsx)(posts_PostsListTemplate,{markdownList:t})]})}},15049:function(e,t,n){"use strict";n.d(t,{Eh:function(){return o}});var r=n(31360);(0,r.Ue)(e=>({markdown:[],setMarkdown:t=>{e({markdown:t})}})),(0,r.Ue)(e=>({markdown:[],setMarkdown:t=>{e({markdown:t})}}));let o=(0,r.Ue)(e=>({setReferer:t=>{e({referer:t})}}))},46271:function(e){e.exports={card:"MarkdownCategoryItem_card__ImsuR",image:"MarkdownCategoryItem_image__BZrYE",wrap:"MarkdownCategoryItem_wrap__E1H3l",dimmed:"MarkdownCategoryItem_dimmed__3RTdj",title:"MarkdownCategoryItem_title__0rdoJ"}}},function(e){e.O(0,[119,912,658,14,230,288,818,414,602,41,71,308,445,744],function(){return e(e.s=24276)}),_N_E=e.O()}]);