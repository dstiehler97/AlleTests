// Registriert den Service Worker (Offline-Fähigkeit) – in jeder Seite einbinden.
if ('serviceWorker' in navigator) {
  const base = new URL('../', document.currentScript.src);
  navigator.serviceWorker.register(new URL('sw.js', base), { scope: base.pathname });
}
