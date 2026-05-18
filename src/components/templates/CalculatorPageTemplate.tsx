import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { FAQSection } from "@/components/page-sections/FAQSection";

const relatedCalculators = [
  ["Take-Home Pay Calculator", "/take-home-pay-calculator"],
  ["Cost of Living Calculator", "/cost-of-living-calculator"],
  ["Rent Affordability Calculator", "/rent-affordability-calculator"],
  ["Relocation Salary Calculator", "/relocation-salary-calculator"],
  ["Job Offer Comparison Calculator", "/job-offer-comparison-calculator"],
];

const calculatorFaqs = [
  {
    question: "What is a salary comparison calculator?",
    answer:
      "It estimates how much salary you may need in another location after adjusting for taxes, rent, and local costs.",
  },
  {
    question: "Does this include taxes?",
    answer: "Yes. RealSalary includes estimated tax impact as part of the take-home pay calculation.",
  },
  {
    question: "Does this include rent?",
    answer: "Yes. Rent estimates are included because housing is usually the largest location-based cost.",
  },
  {
    question: "Can I compare two cities?",
    answer: "Yes. Choose a current city and a new city to estimate equivalent salary and spending power.",
  },
  {
    question: "Can I compare countries?",
    answer: "Country comparisons use the same structure and can be expanded as reliable data is added.",
  },
  {
    question: "Is this result exact?",
    answer: "No. Results are estimates for planning and should not be treated as tax, legal, financial, or employment advice.",
  },
];

export function CalculatorPageTemplate({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const buttonText = calculatorButtonText(title);
  const resultLabel = calculatorResultLabel(title);

  return (
    <main className="min-h-screen bg-background text-text-main">
      <Header />

      <section className="calculator-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ["Calculators", "/calculators"],
              [title, "#"],
            ]}
          />

          <div className="calculator-hero-grid">
            <div>
              <span className="page-badge">Salary Tool</span>
              <h1 className="calculator-page-title">{title}</h1>
              <p className="calculator-page-subtitle">{subtitle}</p>
            </div>

            <aside className="summary-card">
              <h3>Best for:</h3>
              <ul>
                {["Job offers", "Relocation", "Remote work salary comparison", "City-to-city salary checks"].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <CheckCircle2 className="text-success" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <SalaryComparisonCalculator
            buttonText={buttonText}
            cardTitle="Enter your details"
            emptyText="Your result will appear here."
            layout="panel"
            resultLabel={resultLabel}
          />
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2>How this calculator works</h2>
          <p>
            The calculator estimates how much salary you may need in another location by
            adjusting your current salary for taxes, rent, and local cost differences.
          </p>

          <div className="example-box">
            <h2>Example calculation</h2>
            <p>
              If you earn $80,000 in Dallas and move to New York, the calculator estimates
              the salary needed in New York to keep similar spending power after rent and
              local costs.
            </p>
          </div>

          <div className="methodology-box">
            <h3>Methodology</h3>
            <p>
              RealSalary uses salary, tax, rent, and cost-of-living datasets to estimate real
              spending power. Results are estimates and should not be treated as tax, legal,
              financial, or employment advice.
            </p>
            <Link className="methodology-link" href="/methodology">
              View full methodology
            </Link>
          </div>

          <div className="mt-10">
            <h2>Related calculators</h2>
            <div className="related-grid">
              {relatedCalculators.map(([label, href]) => (
                <Link className="related-card" href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={calculatorFaqs} title="FAQ" />
      <Footer />
    </main>
  );
}

function calculatorButtonText(title: string) {
  const labels: Record<string, string> = {
    "Salary Calculator": "Calculate Salary",
    "Take-Home Pay Calculator": "Calculate Take-Home Pay",
    "Cost of Living Calculator": "Compare Cost of Living",
    "Salary Comparison Calculator": "Compare Salary",
    "Rent Affordability Calculator": "Calculate Affordable Rent",
    "Relocation Salary Calculator": "Calculate Relocation Salary",
    "Hourly to Annual Salary Calculator": "Convert Hourly Pay",
    "Annual to Monthly Salary Calculator": "Convert Salary",
    "Monthly to Annual Salary Calculator": "Convert Salary",
    "Net to Gross Salary Calculator": "Calculate Gross Salary",
    "Gross to Net Salary Calculator": "Calculate Net Pay",
    "Job Offer Comparison Calculator": "Compare Job Offers",
  };

  return labels[title] ?? "Calculate Real Salary";
}

function calculatorResultLabel(title: string) {
  const labels: Record<string, string> = {
    "Salary Calculator": "Estimated Salary Breakdown",
    "Take-Home Pay Calculator": "Estimated Take-Home Pay",
    "Cost of Living Calculator": "Estimated Cost-of-Living Difference",
    "Salary Comparison Calculator": "Estimated Equivalent Salary",
    "Rent Affordability Calculator": "Estimated Affordable Rent",
    "Relocation Salary Calculator": "Estimated Relocation Salary",
    "Hourly to Annual Salary Calculator": "Estimated Annual Salary",
    "Annual to Monthly Salary Calculator": "Estimated Monthly Salary",
    "Monthly to Annual Salary Calculator": "Estimated Annual Salary",
    "Net to Gross Salary Calculator": "Estimated Gross Salary Needed",
    "Gross to Net Salary Calculator": "Estimated Net Salary",
    "Job Offer Comparison Calculator": "Estimated Better Job Offer",
  };

  return labels[title] ?? "Estimated Equivalent Salary";
}
