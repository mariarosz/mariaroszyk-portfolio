import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

/* Image-first grid: the picture carries the entry, the text is a caption. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="m-0 grid list-none gap-x-6 gap-y-9 border-t border-rule p-0 pt-7 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={`/work/${p.slug}`} className="group block no-underline">
            <span className="block overflow-hidden border border-rule bg-tint">
              <Image
                src={p.cover.src}
                alt=""
                width={p.cover.w}
                height={p.cover.h}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-display text-[20px] font-medium leading-tight group-hover:text-accent">{p.title}</span>
              <span className="shrink-0 text-[13px] text-ink-2">{p.year}</span>
            </span>
            <span className="mt-1 line-clamp-2 block text-[14.5px] text-ink-2">{p.tagline}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
