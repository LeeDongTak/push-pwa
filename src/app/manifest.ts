import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js PWA",
    short_name: "NextPWA",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/seo/favicon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/seo/favicon/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
