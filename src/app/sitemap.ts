import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";
import { SITE_URL } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL;
  const projects = await getProjects();
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date() })),
  ];
}
