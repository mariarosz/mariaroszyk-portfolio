/* Absolute URL of the site, for metadata, sitemap and robots.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://mariaroszyk.vercel.app, later https://mariaroszyk.dev). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/^/, "https://") ?? "http://localhost:3000").replace(/\/$/, "");
