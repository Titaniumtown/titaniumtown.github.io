var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./c9bda045b431a4d5a597bf96052de92f.js","./c9bda045b431a4d5a597bf96052de92f.wasm","./favicon.ico"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(n){return n||fetch(e.request)})))}));
