import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { VideoEmbed } from "./video-embed";

/* Large entries: role as the heading, two sentences with numbers, arrow links, one big image. */
export function WorkEntries({ projects }: { projects: Project[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {projects.map((p) => (
        <li key={p.slug} className="grid gap-5 border-t border-rule py-9 sm:grid-cols-[1fr_1.1fr] sm:gap-10 sm:py-12">
          <div>
            <p className="mb-1 text-[13px] uppercase tracking-[0.12em] text-ink-2">{p.year}</p>
            <h3 className="font-display mb-1 text-[26px] font-medium leading-tight sm:text-[30px]">
              <Link href={`/work/${p.slug}`} className="no-underline hover:text-accent">{p.role ?? p.title}</Link>
              <span className="text-ink-2 font-light">{p.role ? `, ${p.title}` : ""}</span>
            </h3>
            <p className="mb-5 max-w-[36em] text-ink-2">{p.outcome ?? p.tagline}</p>
            <p className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <Link href={`/work/${p.slug}`}>{p.sections ? "Case study" : "Project"} →</Link>
              {p.links?.map((l) => (
                <a key={l.href} href={l.href}>{l.label} →</a>
              ))}
            </p>
          </div>
          {p.video ? (
            <VideoEmbed id={p.video.youtube} title={p.video.title} poster={p.cover} sizes="(max-width: 640px) 100vw, 560px" className="self-start" />
          ) : (
            <Link href={`/work/${p.slug}`} aria-label={p.title}>
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                sizes="(max-width: 640px) 100vw, 560px"
                className={`w-full border border-rule bg-tint ${p.cover.h > p.cover.w * 1.8 ? "max-h-[520px] object-contain object-top bg-tint" : "aspect-[4/3] object-cover"}`}
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
