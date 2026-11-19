import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.tagline,
    openGraph: { title: p.title, description: p.tagline, images: [{ url: p.cover.src, width: p.cover.w, height: p.cover.h }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) notFound();
  const all = await getProjects();
  const siblings = all.filter((q) => q.kind === p.kind);
  const i = siblings.findIndex((q) => q.slug === p.slug);
  const next = siblings[(i + 1) % siblings.length];
  const images = [p.cover, ...p.gallery];
  const isPhone = (g: { w: number; h: number }) => g.h > g.w * 1.8;
  const phones = images.filter(isPhone).slice(0, 3);
  const others = images.filter((g) => !phones.includes(g));

  return (
    <main className="py-10 sm:py-14">
      <Link href={p.kind === "art" ? "/#art" : "/#work"} className="mb-6 inline-block text-sm text-ink-2 no-underline">
        ← {p.kind === "art" ? "Art" : "Work"}
      </Link>
      <div className="mb-9 grid items-end gap-5 sm:grid-cols-2 sm:gap-10">
        <div>
          <h1 className="display mb-3.5 text-[34px] leading-[1.04] sm:text-[clamp(34px,4.6vw,54px)]">{p.title}</h1>
          <p className="display max-w-[24em] text-[24px] font-light leading-[1.3]">{p.lead}</p>
        </div>
        <ul className="m-0 list-none p-0 text-[14.5px] text-ink-2">
          <li className="flex gap-3.5 border-b border-rule py-1.5"><b className="min-w-[92px] font-medium text-ink">Year</b><span>{p.year}</span></li>
          <li className="flex gap-3.5 border-b border-rule py-1.5"><b className="min-w-[92px] font-medium text-ink">{p.kind === "art" ? "Medium" : "Stack"}</b><span>{p.stack.join(" · ")}</span></li>
          {p.facts.map((f) => (
            <li key={f.label} className="flex gap-3.5 border-b border-rule py-1.5"><b className="min-w-[92px] font-medium text-ink">{f.label}</b><span>{f.value}</span></li>
          ))}
          {p.links?.length ? (
            <li className="flex gap-3.5 py-1.5"><b className="min-w-[92px] font-medium text-ink">Links</b><span className="flex gap-4">{p.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</span></li>
          ) : null}
        </ul>
      </div>

      {phones.length ? (
        <div className="mb-3.5 grid grid-cols-3 gap-3.5">
          {phones.map((g, k) => (
            <Image
              key={k}
              src={g.src}
              alt={g.alt}
              width={g.w}
              height={g.h}
              priority={k === 0}
              sizes="(max-width: 640px) 33vw, 340px"
              className="w-full rounded-[4px] border border-rule bg-tint"
            />
          ))}
        </div>
      ) : null}
      {others.length ? (
        <div className="mb-9 grid grid-cols-2 gap-3.5 sm:grid-cols-3">
          {others.map((g, k) => (
            <Image
              key={k}
              src={g.src}
              alt={g.alt}
              width={g.w}
              height={g.h}
              priority={!phones.length && k === 0}
              sizes="(max-width: 640px) 50vw, 700px"
              className={`w-full border border-rule bg-tint object-cover ${
                k === 0 && !phones.length ? (g.h > g.w ? "row-span-2 aspect-[3/4]" : "col-span-2 aspect-[2/1]") : g.h > g.w * 1.3 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            />
          ))}
        </div>
      ) : <div className="mb-6" />}

      {p.sections?.length ? (
        <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-x-10">
          {p.sections.map((sec) => {
            const [label, rest] = sec.heading.includes(":") ? [sec.heading.slice(0, sec.heading.indexOf(":")), sec.heading.slice(sec.heading.indexOf(":") + 1).trim()] : [sec.heading, ""];
            return (
              <div key={sec.heading} className="contents">
                <h2 className="m-0 text-[13px] uppercase tracking-[0.12em] text-accent sm:pt-1">{label}</h2>
                <div className="max-w-[40em]">
                  {rest ? <p className="display mb-3 text-[22px] leading-[1.3] text-ink">{rest}</p> : null}
                  {sec.paragraphs.map((para, k) => (
                    <p key={k} className="mb-4 text-[16.5px] text-ink-2">{para}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="prose-2 max-w-none text-[16.5px] text-ink-2">
          {p.body.map((para, k) => (
            <p key={k} className={`mb-4 ${k === 0 ? "text-ink" : ""}`}>{para}</p>
          ))}
        </div>
      )}

      {next && next.slug !== p.slug ? (
        <p className="mt-12 border-t border-rule pt-6 text-[15px] text-ink-2">
          Next: <Link href={`/work/${next.slug}`}>{next.title}</Link>
        </p>
      ) : null}
    </main>
  );
}
