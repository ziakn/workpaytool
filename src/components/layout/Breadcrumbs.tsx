import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<[string, string]> }) {
  return (
    <nav className="breadcrumb flex flex-wrap gap-2">
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
