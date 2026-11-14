// Service worker του Greek Energy Hub.
// Δεν κρατά αντίγραφα: κάθε σελίδα και κάθε αρχείο δεδομένων έρχεται πάντα φρέσκο από το δίκτυο.
// Πιάνει μόνο τα ανοίγματα σελίδων, για να δείξει ένα απλό μήνυμα όταν δεν υπάρχει σύνδεση.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const OFFLINE = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Greek Energy</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
background:#0f172a;color:#f8fafc;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:1.5rem}
p{color:#94a3b8;line-height:1.5}button{margin-top:1rem;background:#e2e8f0;color:#0f172a;border:0;border-radius:8px;
padding:.6rem 1.2rem;font-weight:700}</style></head><body><div><h1>Greek Energy</h1>
<p>Δεν υπάρχει σύνδεση στο internet.<br>No internet connection.</p>
<button onclick="location.reload()">Δοκιμή ξανά · Retry</button></div></body></html>`;

self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;          // όλα τα άλλα: κανονικά, χωρίς παρέμβαση
  e.respondWith(fetch(e.request).catch(() =>
    new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
