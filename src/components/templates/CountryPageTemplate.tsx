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

export function CountryPageTemplate({ country }: { country: string }) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection
        badge="Country Salary Calculator"
        subtitle={`Estimate your monthly take-home pay in ${country} after income tax and social contributions.`}
        title={`${country} Salary Calculator`}
      >
        <SalaryComparisonCalculator />
      </HeroSection>
      <section className="section pt-12">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <CalculatorResultCard title={`Estimate gross-to-net pay in ${country}.`} />
          <Card>
            <h2>Monthly take-home examples</h2>
            <p className="mt-4 text-text-muted">Compare monthly and annual pay after tax and social contributions.</p>
          </Card>
        </div>
      </section>
      <section className="section bg-desert-200/55">
        <div className="container">
          <h2 className="mb-8">Tax and contribution breakdown</h2>
          <BreakdownTable />
        </div>
      </section>
      <RelatedLinksSection links={[["Popular country comparisons", "/europe/compare"], ["Related salary guides", "/resources"]]} />
      <MethodologySection />
      <FAQSection title={`Questions about salaries in ${country}`} />
      <Footer />
    </main>
  );
}
