// Service Worker: lädt immer zuerst frisch aus dem Netz (damit Updates sofort da sind)
// und fällt nur offline auf die gespeicherte Kopie zurück.
const CACHE = 'alletests-v2';
const PRECACHE = ['./', 'index.html', 'apps.json', 'assets/style.css', 'assets/pwa.js', 'manifest.webmanifest', 'assets/icons/icon-192.png', 'assets/vendor/qrcode.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
