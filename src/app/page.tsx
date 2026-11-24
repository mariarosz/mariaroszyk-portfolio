import Image from "next/image";
import { Weave } from "@/components/weave";
import { Headline } from "@/components/headline";
import { ProjectGrid } from "@/components/project-grid";
import { WorkEntries } from "@/components/work-entries";
import { CopyEmail } from "@/components/copy-email";
import { getProjects, getSite, getWriting } from "@/lib/content";

export default async function Home() {
  const [projects, site, writing] = await Promise.all([getProjects(), getSite(), getWriting()]);
  const bySlug = (slugs: string[]) => slugs.map((sl) => projects.find((p) => p.slug === sl)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const work = bySlug(["keeper", "babysteps", "inhabit", "dosyp", "memories"]);
  const research = bySlug(["stackoverflow-for-artists", "spatial-web-lab", "code-for-unexpected-events", "de-pl-intuitive-dictionary"]);
  const shown = new Set([...work, ...research].map((p) => p.slug));
  const art = [...research, ...projects.filter((p) => p.kind === "art" && !shown.has(p.slug))];
  const published = writing.filter((w) => w.status === "published");

  return (
    <main>
      <section className="grid items-end gap-7 py-11 sm:grid-cols-[1.15fr_.85fr] sm:gap-10 sm:py-[72px] sm:pb-14">
        <div>
          <Headline
            text={site.headline}
            className="display mb-6 text-[38px] leading-[1.04] sm:text-[clamp(38px,5.6vw,64px)]"
          />
          <p className="mb-7 max-w-[34em] text-[19px] text-ink-2">{site.lede}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm tracking-wide text-ink-2">
            <span><b className="font-medium text-ink">Now</b> {site.location}</span>
            <span><b className="font-medium text-ink">Previously</b> Inhabit, 2023–2024</span>
            <span><b className="font-medium text-ink">Trained at</b> School for Poetic Computation, NYC</span>
          </div>
        </div>
        <Weave className="aspect-[3/2] w-full border border-rule bg-tint sm:aspect-[4/5]" />
      </section>

      <section id="work" className="scroll-mt-6 py-10">
        <p className="eyebrow">Work</p>
        <WorkEntries projects={work} />
      </section>

      <section id="art" className="scroll-mt-6 py-10">
        <p className="eyebrow">Art &amp; research</p>
        <ProjectGrid projects={art} />
      </section>

      <section id="about" className="scroll-mt-6 py-10">
        <div className="grid items-start gap-7 sm:grid-cols-2 sm:gap-10">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="display mb-5 text-[30px] leading-tight sm:text-[36px]">Art history first, then the tools.</h2>
            {site.about.map((p, i) => (
              <p key={i} className={`mb-4 max-w-[34em] text-ink ${i === 0 ? "text-[19px] leading-[1.5]" : "text-[17px] leading-[1.6]"}`}>{p}</p>
            ))}
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <a href="/Maria_Roszyk_CV.pdf">CV (PDF)</a>
              <a href={`mailto:${site.email}`}>Email</a>
              <a href={site.github}>GitHub</a>
              <a href={site.linkedin}>LinkedIn</a>
            </p>
          </div>
          <Image
            src="/images/about/maria.webp"
            alt="Maria Roszyk laughing, in profile, outdoors on a sunny day"
            width={800}
            height={800}
            sizes="(max-width: 640px) 100vw, 500px"
            className="aspect-square w-full border border-rule bg-tint object-cover sm:mt-9"
          />
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 sm:gap-10">
          <div>
            <p className="eyebrow">Recognition</p>
            <ul className="m-0 list-none p-0">
              {site.recognition.map((r) => (
                <li key={r.what} className="flex justify-between gap-4 border-b border-rule py-2 text-[15px]">
                  <span>{r.what}</span>
                  <span className="text-ink-2">{r.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Education</p>
            <ul className="m-0 list-none p-0">
              {site.education.map((r) => (
                <li key={r.what} className="flex justify-between gap-4 border-b border-rule py-2 text-[15px]">
                  <span>{r.what}</span>
                  <span className="text-ink-2">{r.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {published.length > 0 && (
        <section id="writing" className="py-10">
          <p className="eyebrow">Writing</p>
          <div className="grid gap-7 sm:grid-cols-2">
            {published.map((w) => (
              <article key={w.slug}>
                <h3 className="font-display mb-2 text-[26px] font-medium leading-tight">
                  {w.href ? <a href={w.href}>{w.title}</a> : w.title}
                </h3>
                <p className="max-w-[40em] text-ink-2">{w.summary}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="contact" className="py-10">
        <p className="eyebrow">Contact</p>
        <CopyEmail email={site.email} />
        <p className="mt-4 flex gap-6 text-[15px]">
          <a href={site.github}>GitHub</a>
          <a href={site.linkedin}>LinkedIn</a>
          <a href="/Maria_Roszyk_CV.pdf">CV (PDF)</a>
        </p>
      </section>
    </main>
  );
}
