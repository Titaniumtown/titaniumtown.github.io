var cacheName="ytbn-graphing-software-pwa",filesToCache=["./","./index.html","./df7076e31ec9db206e81c45c1654e020.js","./df7076e31ec9db206e81c45c1654e020.wasm"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}));
