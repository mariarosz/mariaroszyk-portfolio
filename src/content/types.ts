export type ProjectKind = "product" | "art";

export type Img = { src: string; alt: string; w: number; h: number };

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  year: string; // display, e.g. "2024–2026"
  sortYear: number;
  tagline: string; // one line in the index
  role?: string; // "Product & front-end engineer" — heading of a Work entry on the home page
  outcome?: string; // two sentences with numbers, shown on the home page
  lead: string; // large italic line on the project page
  stack: string[]; // product: technologies; art: medium
  facts: { label: string; value: string }[];
  cover: Img;
  gallery: Img[];
  body: string[]; // paragraphs (used when sections are absent)
  sections?: { heading: string; paragraphs: string[] }[]; // case-study skeleton: Challenge, Role, Insight, Process, Outcome
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export type Writing = {
  slug: string;
  title: string;
  summary: string;
  date?: string; // ISO
  href?: string; // external if published elsewhere
  status: "published" | "coming";
};

export type Site = {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string; // hero h1 (plain text; *em* marks italics)
  lede: string;
  about: string[];
  recognition: { what: string; year: string }[];
  education: { what: string; year: string }[];
};
