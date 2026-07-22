const CACHE_NAME = 'dashboard-cache-v1';
const urlsToCache = [
  './',
  './index.html' 
  // If your HTML file has a different name, change 'index.html' to match it
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});