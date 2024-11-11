      // sw.js
   self.addEventListener('install', function(event) {
     // Кэширование файлов
     event.waitUntil(
       caches.open('my-cache').then(function(cache) {
         return cache.addAll([
           '/',
           '/index.html',
           '/icon-192x192.png',
           '/icon-512x512.png'
         ]);
       })
     );
   });

   self.addEventListener('fetch', function(event) {
     event.respondWith(
       caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
       })
     );
   });
   
