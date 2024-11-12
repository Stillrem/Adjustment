const cacheName = 'app-cache-v1';
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', async event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
