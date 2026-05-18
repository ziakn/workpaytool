import { SourceCard } from "@/components/cards/SourceCard";
import { SectionHeading } from "./SectionHeading";

const sources = [
  ["BLS", "Used for occupation and wage estimates in the United States."],
  ["BEA", "Used for regional income and economic comparison data."],
  ["HUD", "Used for rent and housing affordability benchmarks."],
  ["MIT Living Wage", "Used for household spending and living wage context."],
  ["IRS", "Used for federal tax structure and filing-status assumptions."],
  ["Eurostat", "Used for European income and cost-of-living indicators."],
  ["OECD", "Used for international wage and purchasing-power context."],
];

export function DataSourcesSection() {
  return (
    <section className="section bg-desert-200/55">
      <div className="container">
        <SectionHeading
          eyebrow="Data Sources"
          title="Built on Public Salary and Cost Data"
          subtitle="RealSalary uses public datasets and transparent methodology instead of hidden estimates."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map(([name, description]) => (
            <SourceCard description={description} key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
