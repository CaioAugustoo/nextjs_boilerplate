if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script");
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, r, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define("./sw.js", ["./workbox-8778d57b"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/NouDe0uWqMBT03BcOOC-e/_buildManifest.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/NouDe0uWqMBT03BcOOC-e/_ssgManifest.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url:
            "/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.24ad5e5ae8e3a17ecf75.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url:
            "/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.3cef715e1bdc42b7e03f.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/framework.cdbdac0a36200f52203c.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/main-2bbc14fd662f4b9ee283.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/pages/_app-c56eea7ef0a30c096868.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/pages/_error-fb942535921b5be64a37.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/pages/index-4a7fd8b3d92c22cfbfff.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/polyfills-4950599f73bdfc797cc8.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",
          revision: "NouDe0uWqMBT03BcOOC-e",
        },
        {
          url: "/img/hero-illustration.svg",
          revision: "5fd5143cba1046a214d9a359fce22e89",
        },
        {
          url: "/img/icon-192.png",
          revision: "d27169d080684ebb57b8387d05c4b444",
        },
        {
          url: "/img/icon-512.png",
          revision: "f1d74b43a3832183202483a40d9e9d84",
        },
        {
          url: "/img/logo-gh.svg",
          revision: "e3a0c31390db72fd374570f4a57c56b0",
        },
        { url: "/img/logo.svg", revision: "37ec18e21a0e84e78077565dd634314d" },
        { url: "/manifest.json", revision: "3ea63f4c27bdc899a14aa848a7fda9de" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
