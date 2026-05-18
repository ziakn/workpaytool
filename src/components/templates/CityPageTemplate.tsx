import { BarChart3, DollarSign, Home, Landmark, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/page-sections/HeroSection";
import { MethodologySection } from "@/components/page-sections/MethodologySection";
import { RelatedLinksSection } from "@/components/page-sections/RelatedLinksSection";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { StatCard } from "@/components/cards/StatCard";
import { BreakdownTable } from "@/components/tables/BreakdownTable";
import { Card } from "@/components/ui/Card";

export function CityPageTemplate({ city }: { city: string }) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection
        badge="City Cost of Living"
        subtitle={`Estimate salary, rent, and monthly living costs in ${city} before you move or accept a job.`}
        title={`Cost of Living in ${city}`}
      >
        <SalaryComparisonCalculator />
      </HeroSection>
      <section className="section pt-12">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <StatCard icon={BarChart3} label="Cost index" value="142" />
          <StatCard icon={Home} label="Average rent" value="$3,100" />
          <StatCard icon={DollarSign} label="Monthly expenses" value="$5,870" />
          <StatCard icon={TrendingUp} label="Salary needed" value="$118,400" />
          <StatCard icon={Landmark} label="Living wage" value="$32/hr" />
        </div>
      </section>
      <section className="section bg-desert-200/55">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Card>
            <h2>Salary calculator for this city</h2>
            <p className="mt-4 text-text-muted">Use the calculator above to compare your current city against {city}.</p>
          </Card>
          <Card>
            <h2>Rent estimates and living wage</h2>
            <p className="mt-4 text-text-muted">Compare rent, monthly costs, and income needed for a practical move.</p>
          </Card>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="mb-8">Cost-of-living breakdown</h2>
          <BreakdownTable />
        </div>
      </section>
      <RelatedLinksSection
        links={[
          ["Compare this city", "/compare"],
          ["Popular job salaries", "/us/jobs/software-engineer/salary"],
          ["Nearby city comparisons", "/us/compare/new-york-ny-vs-dallas-tx"],
        ]}
      />
      <MethodologySection />
      <FAQSection title={`Questions about living in ${city}`} />
      <Footer />
    </main>
  );
}
