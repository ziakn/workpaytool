import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<[string, string]> }) {
  return (
    <nav className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-text-muted">
      <Link href="/">Home</Link>
      {items.map(([label, href]) => (
        <span className="flex gap-2" key={href}>
          <span>/</span>
          <Link className="text-secondary" href={href}>
            {label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
