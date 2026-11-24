import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Hide the dev-only "N" indicator in the corner; errors still surface.
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Poster frames for embedded videos (Memories).
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      // Images uploaded to Sanity.
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
