import { BarChart3, BriefcaseBusiness, Calculator, DollarSign, Home, TrendingUp } from "lucide-react";
import { ToolCard } from "@/components/cards/ToolCard";
import { SectionHeading } from "./SectionHeading";

const calculators = [
  ["Salary Comparison Calculator", "Compare your current salary with a new city or job offer.", "/salary-comparison-calculator", Calculator],
  ["Take-Home Pay Calculator", "Estimate monthly pay after taxes and payroll deductions.", "/take-home-pay-calculator", DollarSign],
  ["Cost of Living Calculator", "Compare local prices, rent, and everyday expenses.", "/cost-of-living-calculator", BarChart3],
  ["Rent Affordability Calculator", "Check what rent fits your income and household needs.", "/rent-affordability-calculator", Home],
  ["Hourly to Annual Calculator", "Convert hourly pay into monthly and yearly salary.", "/hourly-to-annual-salary-calculator", TrendingUp],
  ["Relocation Salary Calculator", "Estimate the salary needed before accepting a move.", "/relocation-salary-calculator", BriefcaseBusiness],
] as const;

export function PopularCalculators() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Popular Calculators"
          title="Salary Tools for Smarter Decisions"
          subtitle="Use simple calculators to compare salary, taxes, rent, and real spending power."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map(([title, description, href, Icon]) => (
            <ToolCard description={description} href={href} icon={Icon} key={title} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
