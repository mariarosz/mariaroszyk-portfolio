import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pt-7 pb-2">
      <Link href="/" className="font-display text-[22px] font-medium tracking-tight no-underline">
        Maria Roszyk
      </Link>
      <nav className="flex gap-5 text-[15px]">
        <Link href="/#work" className="text-ink-2 no-underline hover:text-ink">Work</Link>
        <Link href="/#thinking" className="text-ink-2 no-underline hover:text-ink">Thinking</Link>
        <Link href="/#art" className="text-ink-2 no-underline hover:text-ink">Art</Link>
        <Link href="/#about" className="text-ink-2 no-underline hover:text-ink">About</Link>
        <Link href="/#writing" className="text-ink-2 no-underline hover:text-ink">Writing</Link>
        <Link href="/#contact" className="text-ink-2 no-underline hover:text-ink">Contact</Link>
      </nav>
    </header>
  );
}
