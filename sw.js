/* Unicorn World: replace the old root café cache, keeping saves. */
const REVISION="9043bed3796bf8df";
const PREFIX='sneaky-restaurant:'+new URL(self.registration.scope).pathname+':';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(
 caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)).map(key=>caches.delete(key)))).then(()=>self.clients.claim())
));
// No fetch interception: world resources use the network. Each native game
// retains its own more-specific offline worker. Shared-world offline is later work.
