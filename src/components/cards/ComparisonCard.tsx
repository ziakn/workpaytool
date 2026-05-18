import Link from "next/link";
import { MapPin } from "lucide-react";

export function ComparisonCard({
  first,
  second,
  href,
}: {
  first: string;
  second: string;
  href: string;
}) {
  return (
    <article className="comparison-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-heading text-xl font-extrabold text-primary">{first}</p>
          <p className="text-sm font-semibold text-text-muted">vs</p>
          <p className="font-heading text-xl font-extrabold text-primary">{second}</p>
        </div>
        <MapPin className="text-secondary" size={22} />
      </div>
      <p className="mt-5 text-sm text-ink-700">Compare salary, rent, and cost of living.</p>
      <Link className="mt-5 inline-flex text-sm font-extrabold text-primary" href={href}>
        Compare
      </Link>
    </article>
  );
}
