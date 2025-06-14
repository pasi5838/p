
const CACHE_NAME = 'tebak-hewan-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './script.js',
  './confetti.js',
  './manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
