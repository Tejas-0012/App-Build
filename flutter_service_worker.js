'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9936883e28fc9c31da15630bed5b2328",
"assets/AssetManifest.bin.json": "5e44f2732a40c9fb6225024e4ee81e00",
"assets/AssetManifest.json": "8f327c83f75a5557ee1f56698e496a31",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "d5bf37cf261df6751fc53de48b0421f0",
"assets/lib/src/assets/destination.png": "03eddd58be8fe22575b9d7f0156709a4",
"assets/lib/src/assets/images/dishes/butter-chicken.jpg": "e806f9f76e93b81c09c413d4c38faaad",
"assets/lib/src/assets/images/dishes/chapathi.jpg": "4f2b562f83171e418df749ee9c147b21",
"assets/lib/src/assets/images/dishes/curd-rice.jpg": "afdcef7b9d4075f3c3a8fad307287d3a",
"assets/lib/src/assets/images/dishes/fullmeals.jpg": "b177d131395a83fca65cb4aa1805013b",
"assets/lib/src/assets/images/dishes/garlic%2520-naan.jpg": "32eae85e838ee56efb54a1c8b1c7fc84",
"assets/lib/src/assets/images/dishes/green-salad.jpg": "cfd4c2bb9ae866aeb6b23576cfb4aeee",
"assets/lib/src/assets/images/dishes/grilled-chicken-sandwich.jpg": "d073761e99ce909301b29bb8c060470d",
"assets/lib/src/assets/images/dishes/gulab-jamun.jpg": "08098cf847228a563ff67d805e2f13d3",
"assets/lib/src/assets/images/dishes/hot-sour-soup.jpg": "4a12fd38e26b2977866d917ef45b3efa",
"assets/lib/src/assets/images/dishes/idli.jpg": "8bcc54569c7cd6582e176d309d9d7822",
"assets/lib/src/assets/images/dishes/lemon_rice.jpg": "4d80797ff8cdfafedd4eea7f4a3305f6",
"assets/lib/src/assets/images/dishes/mango-lassi.jpg": "6969cc6f5711c065565c0197f17d969c",
"assets/lib/src/assets/images/dishes/masal-dosa.jpg": "140ce199a7e868c96cab37761c846df9",
"assets/lib/src/assets/images/dishes/pani-puri.jpg": "6820f637e4386ce8d3d532c14b945281",
"assets/lib/src/assets/images/dishes/plain_dosa.jpg": "d0f6dd7b9e1906e4211071af0c259c7e",
"assets/lib/src/assets/images/dishes/sambar_rice.jpg": "14fd668f5c62826141f8c3d65d592ee2",
"assets/lib/src/assets/images/dishes/tomato_rice.jpg": "434861a92d824ad398d62ef46c99d321",
"assets/lib/src/assets/images/dishes/vada.jpg": "072d45a8d6565edb79f54c944124b50b",
"assets/lib/src/assets/images/dishes/veg-biriyani.jpg": "26abab97cb58268b95bfc6a54632e9a4",
"assets/lib/src/assets/images/dishes/vegetable_pulao.jpg": "1d03179ad0ad58e2b302295b459fa204",
"assets/lib/src/assets/images/logo/a2b.jpg": "6980853a9ce5aa2ee6ba0e7a6be3499b",
"assets/lib/src/assets/images/logo/BB.jpg": "adc887c3019534a89d36190f941a3c6e",
"assets/lib/src/assets/images/logo/Blackpearl.png": "a936e0f604880fe1836c688b28df1f9f",
"assets/lib/src/assets/images/logo/BrikOven.png": "a0378ce7854528e1be0a2ad40719cbab",
"assets/lib/src/assets/images/logo/CaliforniaBurrito.png": "462358715ed12f9096e572eebdeab733",
"assets/lib/src/assets/images/logo/Chills.png": "c73a16caab64b71c61c634b731708c47",
"assets/lib/src/assets/images/logo/ChutChang.png": "2512464d774e7b81619299296956281f",
"assets/lib/src/assets/images/logo/default_restaurant.jpeg": "07d1affa91e797819efa1e1f8a500c54",
"assets/lib/src/assets/images/logo/food_truck.jpg": "8b752c0dee455453e06f4334d031ff02",
"assets/lib/src/assets/images/logo/HAE.jpg": "bf61a897e2c21688351fec939a09cd41",
"assets/lib/src/assets/images/logo/index.ts": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/src/assets/images/logo/karavali.jpg": "ca53dd1b843e14491a531ea85e71d14a",
"assets/lib/src/assets/images/logo/KOSHY.jpg": "035011d4193b307d737f149f791a48e9",
"assets/lib/src/assets/images/logo/Mavalli_Tiffin_Room_Logo.png": "a3f75c6b03c771aca355e8b91b61615d",
"assets/lib/src/assets/images/logo/MeghanaFoods.png": "b7f7b14ce394ec1759a673737b61ba64",
"assets/lib/src/assets/images/logo/nagarajuna.png": "22b910652c0b48475dddf7496a2b4b53",
"assets/lib/src/assets/images/logo/OnlyPlace.jpg": "677f6a1cf972db4a5983ede2d831e75a",
"assets/lib/src/assets/images/logo/Shivaji.jpg": "28f18331a3b671a458ecd2efdcebd802",
"assets/lib/src/assets/images/logo/Toit.png": "ee24553e0eeb157f8b3b387e6fe7b1ed",
"assets/lib/src/assets/images/logo/truffles.jpg": "a65b2278bd0b9ed6d6b456a2eef410d8",
"assets/lib/src/assets/images/logo/UdupiPark.jpg": "e1d79c87cf07155cd2e7d7d1ede25619",
"assets/lib/src/assets/images/logo/vidyarthibhavana.jpg": "c026a599d2d07c47a51cef0d8669496e",
"assets/lib/src/assets/source.png": "bdc5cecdeb6d56f235caac863172ab57",
"assets/lib/src/assets/vehicle.png": "c10a2d1afcfa2aebe43d31829ffd1e97",
"assets/NOTICES": "47c60152e76c786868fb4952d276e22b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "cf49223c8b5d4573e861e8cb727f7bca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5e25d16c8379970feda475b3ef9a395",
"/": "a5e25d16c8379970feda475b3ef9a395",
"main.dart.js": "37c31594c58f0c65339c0783ad84c4aa",
"manifest.json": "bba8da2c02d70e6f991d0a0ad00e5342",
"version.json": "e29ba27b48bf83eaf2b098d8fca6e1bd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
