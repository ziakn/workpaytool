import { notFound } from "next/navigation";
import ToolCard from "../components/ToolCard";
import { countries } from "../data/site";

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }));
}

export function generateMetadata({ params }) {
  const country = countries.find((item) => item.slug === params.country);

  if (!country) {
    return {};
  }

  return {
    title: `${country.name} Tools | WorkPayTools`,
  };
}

export default function CountryPage({ params }) {
  const country = countries.find((item) => item.slug === params.country);

  if (!country) {
    notFound();
  }

  return (
    <main>
      <section className="subpage-hero">
        <p className="eyebrow">Country tools</p>
        <h1>{country.name} calculators</h1>
        <p>
          Salary, tax, invoice, and work calculators grouped for {country.name}.
        </p>
      </section>
      <section className="section">
        <div className="tool-grid">
          {country.tools.map((tool) => (
            <ToolCard
              key={tool}
              title={tool}
              href={`/${country.slug}/${tool.toLowerCase().replaceAll(" ", "-")}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
