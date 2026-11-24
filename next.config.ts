import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Hide the dev-only "N" indicator in the corner; errors still surface.
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Poster frames for embedded videos (Memories) and the About portrait.
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      // Images uploaded to Sanity.
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
      // Portrait in About: the same picture as on GitHub.
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/u/36976939" },
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
