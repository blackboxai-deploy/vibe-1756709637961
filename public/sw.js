// TuFinanza Service Worker - Enhanced for Offline Support
const CACHE_NAME = 'tufinanza-v1.0.0';
const urlsToCache = [
  '/',
  '/dashboard',
  '/movements',
  '/savings',
  '/calendar',
  '/settings',
  '/manifest.json',
  '/_next/static/css/',
  '/_next/static/chunks/',
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('TuFinanza SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('TuFinanza SW: Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('TuFinanza SW: Cache failed', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('TuFinanza SW: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('TuFinanza SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and data URLs
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          console.log('TuFinanza SW: Serving from cache:', event.request.url);
          return response;
        }
        
        // Try to fetch from network
        return fetch(event.request)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response to cache it
            const responseToCache = response.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            console.log('TuFinanza SW: Network failed, serving offline page');
            
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/') || new Response(
                '<html><body><h1>TuFinanza - Sin conexión</h1><p>La app funciona offline. Tus datos están seguros.</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            // Return empty response for other requests
            return new Response();
          });
      })
  );
});

// Background sync for offline data
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('TuFinanza SW: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // In a real app, this would sync offline data to server
  console.log('TuFinanza SW: Syncing offline data...');
  return Promise.resolve();
}

// Message handling for app communication
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_UPDATE') {
    // Update cache when requested by app
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      })
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});

// Show offline status
self.addEventListener('online', () => {
  console.log('TuFinanza SW: App is online');
});

self.addEventListener('offline', () => {
  console.log('TuFinanza SW: App is offline');
});

console.log('TuFinanza Service Worker loaded successfully - Offline support enabled');