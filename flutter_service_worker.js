'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "484f1eb5b56fda34792bec10c74a2d11",
".git/config": "7b13e6bc2ce0835e7fb6c754a665fe9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1da78fd0f01bfed406cb64d1db4533a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d12a80c5b65e032a56b25acc5320ca98",
".git/logs/refs/heads/main": "d12a80c5b65e032a56b25acc5320ca98",
".git/logs/refs/heads/site": "79e3f1bd6466f23c39102ea202239c47",
".git/logs/refs/remotes/origin/main": "a305ef7c485972ab41f8048d0ef92a68",
".git/logs/refs/remotes/origin/site": "eb1070cb08f36b25ab0c9d51aed80740",
".git/objects/01/8a480f01276171a795855578f15d6b3d84b41b": "24924bd8483fbd5fb71e44879b1c3a11",
".git/objects/01/b9853ad4c693941a1d1760babc86edf2ce4e59": "653f1489da8f137e7e9613c4cc4713ec",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/00163d6de097b33fbe0f22fff651020da7901f": "8894a82611158ddde03c17943d104b8d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/ae4afd6bffafc1d752837210884019c43d1fd5": "d58f3ccdd5d7a338e99cbbf16d372ba8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/ddab99e45dfcefae6e52d341292e80ba112211": "1634fd6058cd3fb399c07d2b836a5d48",
".git/objects/43/f32fa82f9f13e5f926e0655770ae7d881478fe": "2eae55ac06655cfe73696f03da9cb972",
".git/objects/4a/1c5710a93552ca5814943e882680c0380ac99c": "09e1d51d6b7c362b2ea6ea1464e77c48",
".git/objects/4e/5505ef6dd0fffeba57b638e88504c573ab93f3": "05ac28a394a21e985853e1f48acb6d8f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/6f/dcdb9428f07f7bf8545e034000b7a3b36d58ec": "edcdf620207468493d7e2880d37880f4",
".git/objects/70/e907af47f90a1e5b4ddfdd0bd3b4bc85cd4e18": "c5b127af9020e31e1d4bbb749c52a476",
".git/objects/73/cfc84f6d9bc6b2e7b839e64ef971b4183046cf": "40636d46c70e992940326fe201aa6938",
".git/objects/74/79ed2c7d62b62f023e0a9c9b85394ce893acba": "1da13eca6989911ad0ab2cbc85b69f08",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7f/dd282e6e4dac733933de6c76d484d4d539c196": "e101153d486c6099f215e59b56639950",
".git/objects/86/9c8f9b4451f77512994cfd376bc8e20d3cbfa8": "939e74c9f2240b05ab3c33c3e304174c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a4/19e9f0d87e4224fb514a4927ab44a4e21d670d": "5601d9e5250188ffffa3d9912fcacc9a",
".git/objects/a9/23c72eefefb5d0fc403b414c7eba5694f37a24": "ed14d538b68eaf3d32c9b80ab846a090",
".git/objects/aa/0ec91e1e7ba22e7e610c2e4911e212cb663b7d": "d9e05bc2fc41f4d8c8751dd34d1b13ec",
".git/objects/b2/97153fa25331bbff906f54672b322c28b3118d": "15cf56e74ad4a08a2d87de474a583d05",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9dbbb28dae6c7bda9791c09b4b23428227b12a": "6c60a02517ba5041bfb06184a31e46f5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/3bfd35019a2e211e9c15694e9d615bc38cb7ff": "52192d892fd2a9344f052dde9adb7753",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/008349d459242e4f2d9ba6a7831b05e0916aed": "4f857d4a5800d7c6cf4da1c826387d23",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/2fa6b7de5abdc8868233a32b0dffa2c9f6c7f3": "2c714df93e681224ff295484f6bada61",
".git/objects/f4/05bf58e268ef54fb632988217968a686a20d5e": "426631cb446965a2452f020cd5274fe3",
".git/refs/heads/main": "f83a5cd985ec5abfbda5d6300aead058",
".git/refs/heads/site": "52c69c70236dc8db1041226353452db4",
".git/refs/remotes/origin/main": "f83a5cd985ec5abfbda5d6300aead058",
".git/refs/remotes/origin/site": "52c69c70236dc8db1041226353452db4",
"assets/AssetManifest.json": "f2dc022b83af6fc3677576f03239492e",
"assets/assets/images/enf.png": "01d4e2637d698b3fae38b460a8d7d48e",
"assets/assets/images/frf.png": "378c9d1ee346acefeacd0d42cd4ced15",
"assets/assets/images/lo1.png": "fdff8278d334e1c3261d861f29857178",
"assets/assets/images/myprofile.jpg": "8a66cbf43079f26b20e9820518377d08",
"assets/assets/images/pdg.jpg": "21b3f45ec19290f88134382865a8fdca",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "5bd3b0ec883eb49a5e04dc40378bae70",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5476e84f8970d7759a69cf47448ba22e",
"/": "5476e84f8970d7759a69cf47448ba22e",
"main.dart.js": "202959785283b4d28eecab178d9fd1e8",
"manifest.json": "c9d3b34196ea8c2cc87f6d6532065099",
"version.json": "e03925c900607d3f36b37975ed1348ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
