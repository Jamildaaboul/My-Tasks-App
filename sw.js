const CACHE_NAME = 'tasks-notes-v2';
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['./', './index.html'])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((c) => c !== CACHE_NAME ? caches.delete(c) : null))));
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request, {ignoreSearch:true}).then((r) => r || fetch(event.request)));
});