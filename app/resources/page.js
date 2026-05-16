import Link from "next/link";
import { resources } from "../data/site";

export const metadata = {
  title: "Resources | WorkPayTools",
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <p className="eyebrow">Resources</p>
        <h1>WorkPayTools guides</h1>
        <p>
          Learn the basics behind salary, tax, VAT, GST, invoices, freelancer
          pricing, and small business calculations.
        </p>
      </section>
      <section className="section">
        <div className="resource-list">
          {resources.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
