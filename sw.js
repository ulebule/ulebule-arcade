/* ULEBULE ARCADE — service worker.
   Caches the cabinet itself so the launcher opens offline.

   Note on scope: this worker is registered at /ulebule-arcade/, so it only
   controls pages under that path. The games live at sibling paths
   (/batty/, /nebulus/, …) and each carries its own worker — that is what makes
   a game playable offline inside the cabinet, once it has been opened once.
   A game that has never been opened simply fails to load, and the launcher
   says so rather than showing a blank screen. */

/* Caches are shared across the whole origin (ulebule.github.io), so every
   app here can see every other app's caches. Only ever delete our own — the
   prefix check is what stops one game from wiping another game's cache. */
const PREFIX  = 'arcade-';
const VERSION = PREFIX + 'v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())   // a single missing asset must not abort the install
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== VERSION)
                            .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Navigations: fresh copy when online, cached cabinet when not.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Everything else: cache first, refresh in the background.
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
