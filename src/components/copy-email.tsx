"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy address");
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
      <a href={`mailto:${email}`} className="font-display text-[22px] font-light no-underline sm:text-[28px]">
        {email}
      </a>
      <button
        type="button"
        className="rounded-full border border-rule px-3.5 py-2 text-sm hover:border-accent"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setLabel("Copied");
            setTimeout(() => setLabel("Copy address"), 1500);
          } catch {
            setLabel("Select and copy");
          }
        }}
      >
        {label}
      </button>
    </div>
  );
}
