import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-2 py-9 text-sm text-ink-2">
      <span>
        {site.name}, {site.location}
      </span>
      <span>Set in Fraunces and Instrument Sans. Built with Next.js and Tailwind CSS.</span>
    </footer>
  );
}
