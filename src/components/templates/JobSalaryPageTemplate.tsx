import { BriefcaseBusiness, DollarSign, MapPin, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/page-sections/HeroSection";
import { RelatedLinksSection } from "@/components/page-sections/RelatedLinksSection";
import { FAQSection } from "@/components/page-sections/FAQSection";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { StatCard } from "@/components/cards/StatCard";
import { Card } from "@/components/ui/Card";

export function JobSalaryPageTemplate({ job }: { job: string }) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />
      <HeroSection
        badge="Job Salary"
        subtitle={`Compare national pay, take-home income, and cost-of-living adjusted salary for ${job} roles.`}
        title={`${job} Salary in the United States`}
      >
        <SalaryComparisonCalculator />
      </HeroSection>
      <section className="section pt-12">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <StatCard icon={DollarSign} label="Median salary" value="$124,800" />
          <StatCard icon={TrendingUp} label="Mean salary" value="$138,200" />
          <StatCard icon={BriefcaseBusiness} label="Hourly wage" value="$66/hr" />
          <StatCard icon={MapPin} label="Best state" value="CA" />
          <StatCard icon={MapPin} label="Best metro" value="SF Bay" />
        </div>
      </section>
      <section className="section bg-desert-200/55">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Best-paying states", "Best-paying cities", "Take-home pay example", "Cost-of-living adjusted salary"].map((item) => (
            <Card key={item}>
              <h3>{item}</h3>
              <p className="mt-3 text-sm text-text-muted">Use this section to compare pay quality, not just headline salary.</p>
            </Card>
          ))}
        </div>
      </section>
      <RelatedLinksSection links={[["Related jobs", "/us/jobs/data-analyst/salary"], ["Salary calculator", "/salary-calculator"]]} />
      <FAQSection title={`Questions about ${job} salaries`} />
      <Footer />
    </main>
  );
}
