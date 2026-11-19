import { Weave } from "@/components/weave";
import { Headline } from "@/components/headline";
import { ProjectIndex } from "@/components/project-index";
import { WorkEntries } from "@/components/work-entries";
import { CopyEmail } from "@/components/copy-email";
import { getProjects, getSite, getWriting } from "@/lib/content";

export default async function Home() {
  const [projects, site, writing] = await Promise.all([getProjects(), getSite(), getWriting()]);
  const bySlug = (slugs: string[]) => slugs.map((sl) => projects.find((p) => p.slug === sl)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const work = bySlug(["keeper", "babysteps", "inhabit", "dosyp", "memories"]);
  const thinking = bySlug(["stackoverflow-for-artists"]);
  const thinkingIndex = bySlug(["de-pl-intuitive-dictionary", "code-for-unexpected-events", "spatial-web-lab"]);
  const shown = new Set([...work, ...thinking, ...thinkingIndex].map((p) => p.slug));
  const art = projects.filter((p) => p.kind === "art" && !shown.has(p.slug));

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
            <span><b className="font-medium text-ink">Previously</b> Inhabit, 2022–2023</span>
            <span><b className="font-medium text-ink">Trained at</b> School for Poetic Computation, NYC</span>
          </div>
        </div>
        <Weave className="aspect-[3/2] w-full border border-rule bg-tint sm:aspect-[4/5]" />
      </section>

      <section id="work" className="scroll-mt-6 py-10">
        <p className="eyebrow">Work</p>
        <WorkEntries projects={work} />
      </section>

      <section id="thinking" className="scroll-mt-6 py-10">
        <p className="eyebrow">Thinking</p>
        <p className="display mb-2 max-w-[26em] text-[26px] leading-[1.25]">Three pieces from 2018 about dialogue, misunderstanding and help without a scoreboard.</p>
        <WorkEntries projects={thinking} />
        <ProjectIndex projects={thinkingIndex} />
      </section>

      <section id="art" className="scroll-mt-6 py-10">
        <p className="eyebrow">Art</p>
        <ProjectIndex projects={art} />
      </section>

      <section id="about" className="grid gap-7 py-10 sm:grid-cols-2 sm:gap-10">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="display mb-4 text-[30px] leading-tight">Art history first, then the tools.</h2>
          {site.about.map((p, i) => (
            <p key={i} className="mb-4 max-w-[36em] text-ink-2">{p}</p>
          ))}
        </div>
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
          <p className="eyebrow mt-9">Education</p>
          <ul className="m-0 list-none p-0">
            {site.education.map((r) => (
              <li key={r.what} className="flex justify-between gap-4 border-b border-rule py-2 text-[15px]">
                <span>{r.what}</span>
                <span className="text-ink-2">{r.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="writing" className="py-10">
        <p className="eyebrow">Writing</p>
        <div className="grid gap-7 sm:grid-cols-2">
          {writing.map((w) => (
            <article key={w.slug}>
              <h3 className="font-display mb-2 text-[26px] font-medium leading-tight">
                {w.href ? <a href={w.href}>{w.title}</a> : w.title}
              </h3>
              <p className="max-w-[40em] text-ink-2">
                {w.status === "coming" ? "Coming soon. " : ""}
                {w.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="py-10">
        <p className="eyebrow">Contact</p>
        <CopyEmail email={site.email} />
        <p className="mt-4 flex gap-6 text-[15px]">
          <a href={site.github}>GitHub</a>
          <a href={site.linkedin}>LinkedIn</a>
        </p>
      </section>
    </main>
  );
}
