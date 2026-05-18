import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

export function RelatedLinksSection({ links }: { links: Array<[string, string]> }) {
  return (
    <section className="section bg-desert-200/55">
      <div className="container">
        <SectionHeading eyebrow="Related" title="Related calculators and guides" />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {links.map(([label, href]) => (
            <Link className="rounded-input border border-border bg-desert-50 px-4 py-3 text-sm font-bold text-ink-700 transition hover:bg-desert-200 hover:text-secondary" href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
