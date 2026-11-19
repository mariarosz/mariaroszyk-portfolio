import { defineField, defineType } from "sanity";

export const writingType = defineType({
  name: "writing",
  title: "Writing",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "summary", type: "text", rows: 2 }),
    defineField({ name: "date", type: "date" }),
    defineField({ name: "href", type: "url", description: "External link, if published elsewhere" }),
    defineField({ name: "status", type: "string", options: { list: ["published", "coming"] }, initialValue: "coming" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
});
