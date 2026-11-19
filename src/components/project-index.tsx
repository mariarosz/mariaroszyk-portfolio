import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <ul className="m-0 list-none border-t border-rule p-0">
      {projects.map((p) => (
        <li key={p.slug} className="border-b border-rule">
          <Link
            href={`/work/${p.slug}`}
            className="group grid grid-cols-1 gap-1.5 py-5 no-underline sm:grid-cols-[132px_72px_1fr_170px] sm:items-center sm:gap-x-6"
          >
            <Image
              src={p.cover.src}
              alt=""
              width={p.cover.w}
              height={p.cover.h}
              sizes="(max-width: 640px) 100vw, 132px"
              className="aspect-[3/2] w-full border border-rule bg-tint object-cover sm:aspect-[4/3] sm:w-[132px]"
            />
            <span className="text-[13px] text-ink-2 sm:text-[15px]">{p.year}</span>
            <span>
              <span className="font-display text-[22px] font-medium leading-tight group-hover:text-accent">{p.title}</span>
              <br />
              <span className="text-[15px] text-ink-2">{p.tagline}</span>
            </span>
            <span className="text-[13.5px] text-ink-2 sm:text-right">{p.stack.slice(0, 3).join(", ")}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
