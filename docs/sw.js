if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"170a06380f5bfe5f59ad77916b95d064"},{url:"/_next/static/Qp50yfUl5J7MxD6GN77DJ/_buildManifest.js",revision:"ef544889377ff9846917a35f06cc3d61"},{url:"/_next/static/Qp50yfUl5J7MxD6GN77DJ/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Qp50yfUl5J7MxD6GN77DJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/245-873d9ce9d3844c8e.js",revision:"873d9ce9d3844c8e"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/95b64a6e-ce7f75cdc3a87c61.js",revision:"ce7f75cdc3a87c61"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-58ae7c0d0489ab1c.js",revision:"58ae7c0d0489ab1c"},{url:"/_next/static/chunks/pages/404-02596b00b7103d76.js",revision:"02596b00b7103d76"},{url:"/_next/static/chunks/pages/_app-36696412d4220948.js",revision:"36696412d4220948"},{url:"/_next/static/chunks/pages/_error-777a5f0e462a9bdf.js",revision:"777a5f0e462a9bdf"},{url:"/_next/static/chunks/pages/about-4bb658fd4208327b.js",revision:"4bb658fd4208327b"},{url:"/_next/static/chunks/pages/comments-91dfd7367e48a18d.js",revision:"91dfd7367e48a18d"},{url:"/_next/static/chunks/pages/index-cf7422f32a3e8e06.js",revision:"cf7422f32a3e8e06"},{url:"/_next/static/chunks/pages/posts-83e86669450f051a.js",revision:"83e86669450f051a"},{url:"/_next/static/chunks/pages/posts/%5B...url%5D-9818030fcdbd0d8f.js",revision:"9818030fcdbd0d8f"},{url:"/_next/static/chunks/pages/projects-c4d945f106893e2e.js",revision:"c4d945f106893e2e"},{url:"/_next/static/chunks/pages/projects/%5B...url%5D-7a50f26de2cb255e.js",revision:"7a50f26de2cb255e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9d60c4942d171482.js",revision:"9d60c4942d171482"},{url:"/_next/static/css/1cf466a3c290e66a.css",revision:"1cf466a3c290e66a"},{url:"/_next/static/css/428948c48b8681f0.css",revision:"428948c48b8681f0"},{url:"/_next/static/css/4d63798b7bb34665.css",revision:"4d63798b7bb34665"},{url:"/_next/static/css/5c96180d1b945460.css",revision:"5c96180d1b945460"},{url:"/_next/static/css/911053f24c9ca3e9.css",revision:"911053f24c9ca3e9"},{url:"/_next/static/css/b90f7909a95efa3c.css",revision:"b90f7909a95efa3c"},{url:"/_next/static/css/ce9d1830b6ad7e9f.css",revision:"ce9d1830b6ad7e9f"},{url:"/build.txt",revision:"740df7b3d8ae90a0fed3ac56f1434718"},{url:"/favicon.ico",revision:"8e4ac17822da4be01a6397dc42a53f58"},{url:"/image.json",revision:"bd8922db154700306c77eddff413871d"},{url:"/img/icon-128x128.png",revision:"840128ce36aeb12a7c62b005ebac8383"},{url:"/img/icon-144x144.png",revision:"28bd6bcf99ccf7245e36f177d5baf49a"},{url:"/img/icon-152x152.png",revision:"42a3aa89620aa0396a4e0156cdc7e79d"},{url:"/img/icon-192x192.png",revision:"b658f74552aaa0c10536d233f206dd34"},{url:"/img/icon-384x384.png",revision:"d59f9cf3bbfad737144a7ca278916b80"},{url:"/img/icon-48x48.png",revision:"c9956db2a5bca24fcbaf563233cf444f"},{url:"/img/icon-512x512.png",revision:"a03acb4d85386557294a7a62cc432b66"},{url:"/img/icon-72x72.png",revision:"67afab44120237fc00024d4b628aac52"},{url:"/img/icon-96x96.png",revision:"1730b8cf058b7f83fd568f8beb12a295"},{url:"/img/logo.png",revision:"0028f65b9d9285f61fad95930f3ede1b"},{url:"/img/logo.svg",revision:"92076c2dc47eac0de100129469850d0c"},{url:"/img/logo_transparent.png",revision:"d11fb996d251ea037992587727c48fa3"},{url:"/img/profile.jpg",revision:"21517622c01bfffa6e2332637d98d1bd"},{url:"/js/content.js",revision:"bf1a0a52fb195db0f26f0de9d5f13584"},{url:"/js/ga.js",revision:"169d37ec751b42e4181a822564ea4ba5"},{url:"/manifest.json",revision:"4c55bd524413da308db75f35bf74ca57"},{url:"/navere58ae30c341a262f951f2c7b1789463d.html",revision:"acc34bafdae15cabf97c92d196853424"},{url:"/posts-category.json",revision:"02aea15e9fd31887e6b5dbaaff263bd3"},{url:"/posts.json",revision:"a0757ece9f5916b9f6b0152bba1fb7db"},{url:"/projects-category.json",revision:"14505fb84fc8754b651e3d87aa22e968"},{url:"/projects.json",revision:"f3cea26fdb9daa351592cebc49e6dde4"},{url:"/robots.txt",revision:"26561777f75c81ffd444979341b88d3e"},{url:"/rss.xml",revision:"c5bfc706fffe6aef785a729437ebf729"},{url:"/sitemap.xml",revision:"d10237d1c4f793c236ecdb2d0af6657f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
