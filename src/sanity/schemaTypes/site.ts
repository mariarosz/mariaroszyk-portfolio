import { defineField, defineType } from "sanity";

const yearItem = { type: "object", fields: [{ name: "what", type: "string" }, { name: "year", type: "string" }] };

export const siteType = defineType({
  name: "site",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "github", type: "url" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "headline", type: "text", rows: 2, description: "Wrap the italic part in *asterisks*" }),
    defineField({ name: "lede", type: "text", rows: 3 }),
    defineField({ name: "about", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "recognition", type: "array", of: [yearItem] }),
    defineField({ name: "education", type: "array", of: [yearItem] }),
  ],
});
