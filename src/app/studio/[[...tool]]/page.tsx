import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { sanityEnabled } from "@/sanity/env";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!sanityEnabled) {
    return (
      <main className="py-20">
        <p className="eyebrow">Studio</p>
        <p>Sanity is not configured yet. Set NEXT_PUBLIC_SANITY_PROJECT_ID and redeploy; see README.</p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
