/*
 * Seeds a Sanity dataset with the content from src/content (projects, writing, site)
 * and uploads the images from public/images. Run once after `npx sanity init`:
 *
 *   SANITY_WRITE_TOKEN=... NEXT_PUBLIC_SANITY_PROJECT_ID=... node scripts/seed.mjs
 *
 * Safe to re-run: documents are created or replaced by stable _id.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN first.");
  process.exit(1);
}
const client = createClient({ projectId, dataset, token, apiVersion: "2026-11-01", useCdn: false });

// Load the TypeScript content through a tiny transpile step (tsx is a dev dependency).
const { projects } = await import(pathToFileURL(join(process.cwd(), "src/content/projects.ts")).href);
const { site, writing } = await import(pathToFileURL(join(process.cwd(), "src/content/site.ts")).href);

const uploaded = new Map();
async function image(img) {
  if (!img) return undefined;
  if (!uploaded.has(img.src)) {
    const file = join(process.cwd(), "public", img.src);
    const asset = await client.assets.upload("image", readFileSync(file), { filename: basename(file) });
    uploaded.set(img.src, asset._id);
    console.log("uploaded", img.src);
  }
  return { _type: "image", asset: { _type: "reference", _ref: uploaded.get(img.src) }, alt: img.alt };
}
const key = () => Math.random().toString(36).slice(2, 10);
const blocks = (paras) =>
  paras.map((text) => ({ _type: "block", _key: key(), style: "normal", markDefs: [], children: [{ _type: "span", _key: key(), text, marks: [] }] }));

for (const p of projects) {
  const doc = {
    _id: `project-${p.slug}`,
    _type: "project",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    kind: p.kind,
    year: p.year,
    sortYear: p.sortYear,
    featured: Boolean(p.featured),
    tagline: p.tagline,
    lead: p.lead,
    stack: p.stack,
    facts: p.facts.map((f) => ({ _key: key(), ...f })),
    links: (p.links ?? []).map((l) => ({ _key: key(), ...l })),
    cover: await image(p.cover),
    gallery: await Promise.all(p.gallery.map(async (g) => ({ _key: key(), ...(await image(g)) }))),
    body: blocks(p.body),
  };
  await client.createOrReplace(doc);
  console.log("project", p.slug);
}
for (const w of writing) {
  await client.createOrReplace({ _id: `writing-${w.slug}`, _type: "writing", title: w.title, slug: { _type: "slug", current: w.slug }, summary: w.summary, date: w.date, href: w.href, status: w.status });
  console.log("writing", w.slug);
}
await client.createOrReplace({
  _id: "site",
  _type: "site",
  ...site,
  recognition: site.recognition.map((r) => ({ _key: key(), ...r })),
  education: site.education.map((r) => ({ _key: key(), ...r })),
});
console.log("site settings");
