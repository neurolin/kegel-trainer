const CACHE='kegel-v6-precise-audio';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
const AUDIO=[];
for(let n=1;n<=20;n++){
}
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll([...CORE,...AUDIO])).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;})));
});
