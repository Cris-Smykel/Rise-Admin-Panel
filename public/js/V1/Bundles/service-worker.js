if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const t=e=>n(e,i),f={module:{uri:i},exports:o,require:t};s[i]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(d(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"blog.bundle.js",revision:"d61bc225077a479dd5ffd49af1f74357"},{url:"contact.bundle.js",revision:"e907bbff36ec716065821d47d42ddce6"},{url:"main.bundle.js",revision:"0f1684ef2d1a005bff34d574ac316eb3"},{url:"newsletter.bundle.js",revision:"8e02d2ad94ca9f2c46190797b08fd98f"},{url:"products.bundle.js",revision:"fab28b03caff9be5564599d98f8a6215"}],{})}));
