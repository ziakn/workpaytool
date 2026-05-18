import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/page-sections/HeroSection";
import { DataSourcesSection } from "@/components/page-sections/DataSourcesSection";
import { MethodologySection } from "@/components/page-sections/MethodologySection";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { CTASection } from "@/components/page-sections/CTASection";
import { Card } from "@/components/ui/Card";

export function ContentPageTemplate({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection badge="RealSalary" subtitle={subtitle} title={title}>
        <Card>
          <p className="section-label">Trust page</p>
          <h2 className="mt-2 text-[30px]">Built for clarity.</h2>
          <p className="mt-4 text-text-muted">
            RealSalary provides estimates for educational purposes only and is not tax,
            legal, financial, or employment advice.
          </p>
        </Card>
      </HeroSection>
      <MethodologySection />
      <DataSourcesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
