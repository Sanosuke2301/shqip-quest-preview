// GitHub Pages preview and production are different paths but share the same
// browser Cache Storage origin. Give their caches unrelated prefixes.
const IS_PREVIEW = new URL(self.registration.scope).pathname.split('/').includes('shqip-quest-preview');
const CACHE_PREFIX = IS_PREVIEW ? 'sq-preview-' : 'shqip-quest-';
const CACHE_NAME = CACHE_PREFIX + 'v0.2.1';
const APP_SHELL=['./','./index.html','./styles.css','./app.js','./lessons.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 event.respondWith((async()=>{const activeCache=await caches.open(CACHE_NAME);const cached=await activeCache.match(req);if(cached)return cached;try{const response=await fetch(req);if(response.ok){await activeCache.put(req,response.clone())}return response}catch{if(req.mode==='navigate')return (await activeCache.match('./index.html'))||Response.error();return Response.error()}})());
});
