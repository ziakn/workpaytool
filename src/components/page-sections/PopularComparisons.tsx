import { ComparisonCard } from "@/components/cards/ComparisonCard";
import { SectionHeading } from "./SectionHeading";

const comparisons = [
  ["New York", "Dallas", "/us/compare/new-york-ny-vs-dallas-tx"],
  ["San Francisco", "Austin", "/us/compare/san-francisco-ca-vs-austin-tx"],
  ["Los Angeles", "Houston", "/us/compare/los-angeles-ca-vs-houston-tx"],
  ["Chicago", "Miami", "/us/compare/chicago-il-vs-miami-fl"],
  ["Seattle", "Denver", "/us/compare/seattle-wa-vs-denver-co"],
  ["London", "Berlin", "/compare/london-vs-berlin"],
] as const;

export function PopularComparisons() {
  return (
    <section className="section bg-desert-200/55">
      <div className="container">
        <SectionHeading eyebrow="Compare Cities" title="Popular Salary Comparisons" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map(([first, second, href]) => (
            <ComparisonCard first={first} href={href} key={href} second={second} />
          ))}
        </div>
      </div>
    </section>
  );
}
