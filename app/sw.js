const CACHE = "ptr-v1";
const ASSETS = [
  "./",
  "./index.html", "./settings.html", "./dashboard.html", "./reports.html", "./help.html",
  "./styles.css", "./boot.js", "./i18n.js",
  "./icons/icon-192.png", "./icons/icon-512.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
});

self.addEventListener("fetch", e=>{
  const {request} = e;
  if (request.method !== "GET") return;
  e.respondWith(
    caches.match(request).then(cached=>{
      return cached || fetch(request).then(resp=>{
        const clone = resp.clone();
        caches.open(CACHE).then(c=>c.put(request, clone)).catch(()=>{});
        return resp;
      }).catch(()=> cached);
    })
  );
});
