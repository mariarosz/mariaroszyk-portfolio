import { cacheLife } from "next/cache";
import type { Img, Project, Site, Writing } from "@/content/types";
import { projects as localProjects } from "@/content/projects";
import { site as localSite, writing as localWriting } from "@/content/site";
import { sanityEnabled } from "@/sanity/env";
import { getClient, urlFor } from "@/sanity/client";

/*
 * Content comes from Sanity when NEXT_PUBLIC_SANITY_PROJECT_ID is set,
 * otherwise from the typed files in src/content. The site renders the same
 * either way, so it can be deployed before the CMS is wired up and seeded.
 */

type SanityImage = { asset?: { _ref?: string; metadata?: { dimensions?: { width: number; height: number } } }; alt?: string };
type Block = { _type: string; children?: { text: string }[] };

function toImg(image: SanityImage | undefined, fallbackAlt: string): Img | undefined {
  if (!image?.asset) return undefined;
  const dims = image.asset.metadata?.dimensions;
  return {
    src: urlFor(image).width(1600).auto("format").url(),
    alt: image.alt ?? fallbackAlt,
    w: dims?.width ?? 1600,
    h: dims?.height ?? 1067,
  };
}

function blocksToParagraphs(blocks: Block[] | undefined): string[] {
  return (blocks ?? [])
    .filter((b) => b._type === "block")
    .map((b) => (b.children ?? []).map((c) => c.text).join(""))
    .filter((t) => t.trim().length > 0);
}

const PROJECT_FIELDS = `
  title, "slug": slug.current, kind, year, sortYear, featured, tagline, role, outcome, lead, stack, facts, links, body, sections, video,
  cover{..., asset->{_ref, metadata{dimensions}}},
  gallery[]{..., asset->{_ref, metadata{dimensions}}}
`;

type SanityProject = Omit<Project, "cover" | "gallery" | "body"> & {
  cover?: SanityImage;
  gallery?: SanityImage[];
  body?: Block[];
};

function mapProject(p: SanityProject): Project {
  const placeholder: Img = { src: "/images/keeper/cover-2.webp", alt: "", w: 1091, h: 599 };
  return {
    ...p,
    stack: p.stack ?? [],
    facts: p.facts ?? [],
    cover: toImg(p.cover, p.title) ?? placeholder,
    gallery: (p.gallery ?? []).map((g) => toImg(g, p.title)).filter((g): g is Img => Boolean(g)),
    body: blocksToParagraphs(p.body),
  };
}

export async function getProjects(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  if (!sanityEnabled) return localProjects;
  const rows = await getClient().fetch<SanityProject[]>(`*[_type == "project"] | order(sortYear desc){${PROJECT_FIELDS}}`);
  return rows.length ? rows.map(mapProject) : localProjects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}

export async function getSite(): Promise<Site> {
  "use cache";
  cacheLife("hours");
  if (!sanityEnabled) return localSite;
  const s = await getClient().fetch<Partial<Site> | null>(`*[_type == "site"][0]`);
  return { ...localSite, ...(s ?? {}) };
}

export async function getWriting(): Promise<Writing[]> {
  "use cache";
  cacheLife("hours");
  if (!sanityEnabled) return localWriting;
  const rows = await getClient().fetch<Writing[]>(`*[_type == "writing"] | order(date desc){title, "slug": slug.current, summary, date, href, status}`);
  return rows.length ? rows : localWriting;
}
