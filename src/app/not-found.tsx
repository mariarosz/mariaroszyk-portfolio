import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-20">
      <p className="eyebrow">404</p>
      <h1 className="display mb-4 text-[34px]">Nothing woven here yet.</h1>
      <Link href="/">Back to the index</Link>
    </main>
  );
}
