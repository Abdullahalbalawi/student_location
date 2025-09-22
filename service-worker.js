
const CACHE_NAME = 'student-location-cache-v3';
const URLS = ['index.html','manifest.json','icon-192.png','icon-512.png','offline.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(URLS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request).then(r => r || caches.match('offline.html')))
  );
});
