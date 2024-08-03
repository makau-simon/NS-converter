let cacheName = 'nsCache'
let assets = [
  "index.html",
  "main.js",
  "images/binary.png"
  ]
self.addEventListener('install',(e)=>{
  e.waitUntil(
    caches.open(cacheName).then(cache=>{
      return cache.addAll(assets)
    })
    )
})
self.addEventListener('Fetch',(e)=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response || fetch(e.request)
    })
    )
})