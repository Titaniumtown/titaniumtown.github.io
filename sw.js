var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./58a6e0ff5d915614172a1524efbfec3c.js","./58a6e0ff5d915614172a1524efbfec3c.wasm","./logo.svg"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}));
