/* Renders "plain *italic* plain" as text with <em>. */
export function Headline({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return (
    <h1 className={className}>
      {parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : <span key={i}>{p}</span>))}
    </h1>
  );
}
