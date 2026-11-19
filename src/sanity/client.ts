import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, sanityEnabled } from "./env";

/* Created lazily so the site builds without a Sanity project configured. */
let _client: SanityClient | undefined;
export function getClient(): SanityClient {
  if (!sanityEnabled) throw new Error("Sanity is not configured (NEXT_PUBLIC_SANITY_PROJECT_ID is empty).");
  return (_client ??= createClient({ projectId, dataset, apiVersion, useCdn: true }));
}

export const urlFor = (source: unknown) => imageUrlBuilder({ projectId, dataset }).image(source as never);
