const cacheName = 'cache-v1'; 
const precacheResources = [ 
  '/', 
  'index.html', 
  'css/style.css', 
  'css/sectstyle.css',
  'img/logo.jpg', 
  'img/Logan.jpg',
   'img/address.png',
    'img/email.png',
    'img/cell.png',
    'img/images/ph-1.png',
    'img/fin.png',
    'img/revolve.png',
    'ss/index.html',


  'img/logan2.jpg',
  'img/images/lady.png',
  'img/images/man-2.png',
  'js/ScrollMagic.min.js',
  'js/animation.gsap.min.js',
  'js/TimelineLite.min.js',
  'js/TweenMax.min.js',
  'js/CSSPlugin.min.js',
  'js/script.js',
  'js/app.js'
]; 

self.addEventListener('install', event => { 
    console.log('Service worker install event!'); 
    event.waitUntil( 
      caches.open(cacheName) 
        .then(cache => { 
          return cache.addAll(precacheResources); 
        }) 
    ); 
});
self.addEventListener('activate', function(event) { 
      // Perform some task
    console.log('activated'); 
});

self.addEventListener('fetch', event => { 
      console.log('Fetch intercepted for:', event.request.url); 
      event.respondWith(caches.match(event.request) 
        .then(cachedResponse => { 
            if (cachedResponse) { 
              return cachedResponse; 
            } 
            return fetch(event.request); 
          }) 
        ); 
    });