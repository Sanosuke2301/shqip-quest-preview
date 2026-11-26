// Version 0.3A.4: CODE-ONLY preview. User-imported MP3s live in private IndexedDB, never public cache.
const CACHE_PREFIX = 'sq-preview-';
const CACHE_NAME = CACHE_PREFIX + 'v0.3a.4';
const VERSION = '0.3a.4';

// Fetch unique URLs for each release, but store the launch page at its normal URL.
// This avoids keeping an outdated app.js when a browser/CDN cached the previous release.
const PRECACHE = [
  ['./', `./?build=${VERSION}`],
  ['./index.html', `./index.html?build=${VERSION}`],
  [`./styles.css?build=${VERSION}`, `./styles.css?build=${VERSION}`],
  [`./app.js?build=${VERSION}`, `./app.js?build=${VERSION}`],
  [`./lessons.js?build=${VERSION}`, `./lessons.js?build=${VERSION}`],
  ['./manifest.webmanifest', `./manifest.webmanifest?build=${VERSION}`],
  ['./assets/icon-192.png', `./assets/icon-192.png?build=${VERSION}`],
  ['./assets/icon-512.png', `./assets/icon-512.png?build=${VERSION}`]
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Ensure every required resource is downloaded before the update becomes ready.
    // An install failure leaves the previous working service worker in control.
    await Promise.all(PRECACHE.map(async ([key,source]) => {
      const url = new URL(source, self.registration.scope);
      const response = await fetch(new Request(url.href, {cache:'no-store'}));
      if (!response.ok) throw new Error(`Offline asset not available: ${source} (${response.status})`);
      await cache.put(new Request(new URL(key, self.registration.scope).href), response);
    }));
    // Keep existing preview active until the user clicks Update now.
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const response = await fetch(req);
      if (response.ok) await cache.put(req, response.clone());
      return response;
    } catch {
      if (req.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
