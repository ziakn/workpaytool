import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/page-sections/HeroSection";
import { RelatedLinksSection } from "@/components/page-sections/RelatedLinksSection";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { CalculatorResultCard } from "@/components/calculators/CalculatorResultCard";
import { ComparisonTable } from "@/components/tables/ComparisonTable";
import { Card } from "@/components/ui/Card";

export function ComparisonPageTemplate({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection
        badge="Comparison"
        subtitle="Compare salary, rent, taxes, and disposable income side by side."
        title={title}
      >
        <SalaryComparisonCalculator />
      </HeroSection>
      <section className="section pt-12">
        <div className="container">
          <CalculatorResultCard />
        </div>
      </section>
      <section className="section bg-desert-200/55">
        <div className="container">
          <h2 className="mb-8">Side-by-side comparison table</h2>
          <ComparisonTable />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Rent comparison", "Tax comparison", "Disposable income comparison", "Who is better for whom"].map((item) => (
            <Card key={item}>
              <h3>{item}</h3>
              <p className="mt-3 text-sm text-text-muted">Compare this factor before accepting an offer or relocation package.</p>
            </Card>
          ))}
        </div>
      </section>
      <RelatedLinksSection links={[["Related comparisons", "/compare"], ["Methodology", "/methodology"]]} />
      <FAQSection title="Questions about this comparison" />
      <Footer />
    </main>
  );
}
