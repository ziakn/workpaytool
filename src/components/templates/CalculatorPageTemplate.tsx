import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/page-sections/HeroSection";
import { MethodologySection } from "@/components/page-sections/MethodologySection";
import { RelatedLinksSection } from "@/components/page-sections/RelatedLinksSection";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { CalculatorResultCard } from "@/components/calculators/CalculatorResultCard";
import { BreakdownTable } from "@/components/tables/BreakdownTable";
import { Card } from "@/components/ui/Card";

export function CalculatorPageTemplate({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection badge="Calculator" subtitle={subtitle} title={title}>
        <SalaryComparisonCalculator />
      </HeroSection>
      <section className="section pt-12">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <CalculatorResultCard />
          <Card>
            <p className="section-label">Example Calculation</p>
            <h2 className="mt-2">Dallas to New York salary match</h2>
            <p className="mt-4 text-text-muted">
              An $80,000 salary in Dallas may require about $118,400 in New York once
              taxes, rent, and local cost differences are included.
            </p>
          </Card>
        </div>
      </section>
      <section className="section bg-desert-200/55">
        <div className="container">
          <p className="section-label">Breakdown</p>
          <h2 className="mt-3 mb-8">Salary, tax, rent, and cost breakdown</h2>
          <BreakdownTable />
        </div>
      </section>
      <MethodologySection />
      <RelatedLinksSection
        links={[
          ["Salary Comparison Calculator", "/salary-comparison-calculator"],
          ["Take-Home Pay Calculator", "/take-home-pay-calculator"],
          ["Cost of Living Calculator", "/cost-of-living-calculator"],
          ["Rent Affordability Calculator", "/rent-affordability-calculator"],
        ]}
      />
      <FAQSection />
      <Footer />
    </main>
  );
}
