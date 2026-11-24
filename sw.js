const CACHE_NAME='shqip-quest-v0.2.0';
const APP_SHELL=['./','./index.html','./styles.css','./app.js','./lessons.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('shqip-quest-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;try{const response=await fetch(req);if(response.ok){const c=await caches.open(CACHE_NAME);await c.put(req,response.clone())}return response}catch{if(req.mode==='navigate')return (await caches.match('./index.html'))||Response.error();return Response.error()}})());
});
