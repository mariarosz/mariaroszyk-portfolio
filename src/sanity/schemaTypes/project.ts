import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "kind", type: "string", options: { list: ["product", "art"], layout: "radio" }, initialValue: "product" }),
    defineField({ name: "year", type: "string", description: "Display, e.g. 2024–2026" }),
    defineField({ name: "sortYear", type: "number" }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "tagline", type: "text", rows: 2, description: "One line in the index" }),
    defineField({ name: "role", type: "string", description: "Heading of a Work entry on the home page, e.g. Product & front-end engineer" }),
    defineField({ name: "outcome", type: "text", rows: 3, description: "Two sentences with numbers, shown on the home page" }),
    defineField({ name: "lead", type: "text", rows: 2, description: "Large italic line on the project page" }),
    defineField({ name: "stack", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({
      name: "facts",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }],
    }),
    defineField({ name: "cover", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }] }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "sections",
      type: "array",
      description: "Case-study skeleton; when present, replaces body",
      of: [{ type: "object", fields: [{ name: "heading", type: "string" }, { name: "paragraphs", type: "array", of: [{ type: "text" }] }] }],
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "url" }] }],
    }),
  ],
  orderings: [{ title: "Newest", name: "newest", by: [{ field: "sortYear", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "year", media: "cover" } },
});
