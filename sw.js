self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // جلب كل شيء مباشرة من السيرفر لضمان ظهور التعديلات فوراً
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
