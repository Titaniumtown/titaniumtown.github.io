var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./503114d4bd5cf581f913e91e95806198.js","./503114d4bd5cf581f913e91e95806198.wasm"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}));
