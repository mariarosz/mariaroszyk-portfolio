"use client";

import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/content/types";

/* Click-to-play YouTube embed: only the poster frame loads until someone presses play. */
export function VideoEmbed({
  id,
  title,
  poster,
  sizes,
  priority = false,
  className = "",
}: {
  id: string;
  title: string;
  poster: Img;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`relative aspect-video w-full overflow-hidden border border-rule bg-tint ${className}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block h-full w-full cursor-pointer p-0"
        >
          <Image src={poster.src} alt={poster.alt} fill sizes={sizes} priority={priority} className="object-cover" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-paper text-ink transition-colors group-hover:text-accent">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="ml-1 fill-current">
              <path d="M6 4l14 8-14 8z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
