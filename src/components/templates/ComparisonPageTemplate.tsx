import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SalaryComparisonCalculator } from "@/components/calculators/SalaryComparisonCalculator";
import { ComparisonTable } from "@/components/tables/ComparisonTable";
import { FAQSection } from "@/components/page-sections/FAQSection";

type ComparisonPageTemplateProps = {
  comparisonSlug: string;
  region?: "us" | "international";
};

const rentRows = [
  ["Studio", "$2,650", "$1,250", "+$1,400/mo"],
  ["1-bedroom", "$3,100", "$1,650", "+$1,450/mo"],
  ["2-bedroom", "$4,150", "$2,150", "+$2,000/mo"],
  ["3-bedroom", "$5,300", "$2,850", "+$2,450/mo"],
];

const tableRows = [
  ["Gross salary", "$118,400", "$80,000", "+48%"],
  ["Estimated annual tax", "$31,400", "$14,960", "+110%"],
  ["Monthly take-home pay", "$7,250", "$5,420", "+34%"],
  ["Average 1-bedroom rent", "$3,100", "$1,650", "+88%"],
  ["Cost-of-living index", "142", "98", "+45%"],
  ["Monthly expenses", "$4,850", "$3,200", "+52%"],
  ["Disposable income", "$2,400", "$2,220", "+8%"],
  ["Equivalent salary needed", "$118,400", "$80,000", "+48%"],
];

export function ComparisonPageTemplate({
  comparisonSlug,
  region = "us",
}: ComparisonPageTemplateProps) {
  const { cityA, cityB, cityALabel, cityBLabel } = parseComparison(comparisonSlug);
  const title = `${cityA} vs ${cityB} Salary Comparison`;
  const description = `Compare salary, rent, taxes, and cost of living between ${cityA} and ${cityB}.`;
  const schema = buildSchema({ title, description, cityA, cityB, region });

  return (
    <main className="min-h-screen bg-background text-text-main">
      <Script
        id="comparison-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <section className="comparison-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              [region === "us" ? "United States" : "Compare", region === "us" ? "/us" : "/compare"],
              ["Compare Cities", region === "us" ? "/us/compare/new-york-ny-vs-dallas-tx" : "/compare"],
              [`${cityA} vs ${cityB}`, "#"],
            ]}
          />

          <span className="page-badge">City Salary Comparison</span>
          <h1 className="comparison-title">{title}</h1>
          <p className="comparison-subtitle">{description}</p>

          <div className="city-pair-card">
            <span className="city-name">{cityALabel}</span>
            <span className="city-arrow">→</span>
            <span className="city-name">{cityBLabel}</span>
          </div>
        </div>
      </section>

      <section className="comparison-calculator-section">
        <div className="container">
          <div className="mb-8">
            <p className="section-label">Salary Comparison Calculator</p>
            <h2 className="mt-3">Compare Your Salary Between {cityA} and {cityB}</h2>
          </div>
          <SalaryComparisonCalculator
            buttonText="Compare Salary"
            cardTitle="Enter your comparison details"
            emptyText="Your comparison result will appear here."
            fixedComparison={{ cityA, cityB, cityALabel, cityBLabel }}
            layout="panel"
            resultLabel="Estimated equivalent salary"
          />
        </div>
      </section>

      <section className="section bg-desert-200/55">
        <div className="container">
          <div className="result-card">
            <p className="result-label">Estimated equivalent salary</p>
            <h2 className="result-title">
              You need <span className="result-highlight">$118,400</span> in {cityA} to match{" "}
              <span className="result-highlight">$80,000</span> in {cityB}.
            </h2>
            <div className="result-stat-grid">
              <ResultStat label="Equivalent salary" value="$118,400" />
              <ResultStat label="Rent difference" value="+$1,450/mo" />
              <ResultStat label="Cost difference" value="+42%" />
              <ResultStat label="Disposable income difference" value="-$920/mo" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-8">{cityA} vs {cityB} Cost Breakdown</h2>
          <ComparisonTable currentLabel={cityA} newLabel={cityB} rows={tableRows} />
        </div>
      </section>

      <section className="section bg-desert-200/55">
        <div className="container">
          <h2 className="mb-8">Rent Comparison: {cityA} vs {cityB}</h2>
          <div className="rent-compare-grid">
            {rentRows.map(([type, first, second, difference]) => (
              <article className="rent-compare-card" key={type}>
                <h3>{type}</h3>
                <p className="mt-4 text-sm text-text-muted">{cityA}: <strong>{first}</strong></p>
                <p className="mt-2 text-sm text-text-muted">{cityB}: <strong>{second}</strong></p>
                <p className="mt-4 font-heading text-xl font-extrabold text-gold-500">{difference}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-8">Tax and Take-Home Pay Comparison</h2>
          <div className="comparison-metric-grid">
            <MetricCard label={`${cityA} estimated take-home`} value="$7,250/mo" />
            <MetricCard label={`${cityB} estimated take-home`} value="$5,420/mo" />
            <MetricCard label="Tax difference" value="+$16,440/year" />
            <MetricCard label="Monthly net pay difference" value="+$1,830/mo" />
          </div>
        </div>
      </section>

      <section className="section bg-desert-200/55">
        <div className="container">
          <h2 className="mb-8">Disposable Income After Rent</h2>
          <div className="disposable-card">
            <p className="text-sm font-bold text-text-muted">
              Monthly take-home pay - estimated rent = disposable income after rent
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3>{cityA}</h3>
                <p className="mt-3">$7,250 - $3,100 =</p>
                <p className="disposable-number">$4,150</p>
              </div>
              <div>
                <h3>{cityB}</h3>
                <p className="mt-3">$5,420 - $1,650 =</p>
                <p className="disposable-number">$3,770</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-8">Which City Is Better for Your Salary?</h2>
          <div className="decision-grid">
            <DecisionCard
              title={`Choose ${cityA} if:`}
              points={[
                "Higher salary offer offsets rent and taxes",
                "Career growth matters more than monthly savings",
                "You can keep rent controlled",
              ]}
            />
            <DecisionCard
              title={`Choose ${cityB} if:`}
              points={[
                "You want lower rent",
                "You want more disposable income",
                "Your salary is similar in both cities",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-desert-200/55">
        <div className="container">
          <h2 className="mb-8">Related Salary Comparisons</h2>
          <div className="related-grid comparison-related-grid">
            {relatedComparisons(cityA, cityB).map(([label, href]) => (
              <Link className="related-comparison-card" href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="methodology-box">
            <h3>How We Compare {cityA} and {cityB}</h3>
            <p>
              RealSalary compares cities using estimated taxes, rent, public salary data, and
              regional cost-of-living indexes. Results are estimates for planning and comparison,
              not tax or financial advice.
            </p>
            <Link className="methodology-link" href="/methodology">
              View full methodology
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        items={[
          {
            question: `How much salary do I need in ${cityA} to match ${cityB}?`,
            answer: `The estimate shown here uses salary, taxes, rent, and cost-of-living differences between ${cityA} and ${cityB}.`,
          },
          { question: `Is ${cityA} more expensive than ${cityB}?`, answer: "Use the cost index, rent, and disposable-income sections to compare the practical difference." },
          { question: "Does this comparison include taxes?", answer: "Yes. It includes estimated tax and take-home pay differences." },
          { question: "Does this comparison include rent?", answer: "Yes. Rent is included because it is often the largest location-based cost." },
          { question: "Which city gives more disposable income?", answer: "The disposable income section compares estimated take-home pay after rent." },
          { question: "Where does the data come from?", answer: "RealSalary is designed around public salary, tax, rent, and cost-of-living datasets." },
          { question: "Is this result exact?", answer: "No. Results are planning estimates and not tax, financial, legal, or employment advice." },
        ]}
        title="FAQ"
      />
      <Footer />
    </main>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="result-stat">
      <p className="result-stat-label">{label}</p>
      <p className="result-stat-value">{value}</p>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="decision-card">
      <p className="text-sm font-bold text-text-muted">{label}</p>
      <p className="font-heading mt-2 text-2xl font-extrabold text-primary">{value}</p>
    </article>
  );
}

function DecisionCard({ title, points }: { title: string; points: string[] }) {
  return (
    <article className="decision-card">
      <h3>{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm font-semibold text-text-muted">
        {points.map((point) => (
          <li className="flex gap-2" key={point}>
            <span className="text-gold-500">•</span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function parseComparison(slug: string) {
  const cleanSlug = slug.replace("-salary", "").replace("-cost-of-living", "");
  const [first = "new-york-ny", second = "dallas-tx"] = cleanSlug.split("-vs-");

  return {
    cityA: cityName(first),
    cityB: cityName(second),
    cityALabel: cityLabel(first),
    cityBLabel: cityLabel(second),
  };
}

function cityName(slug: string) {
  return slug
    .split("-")
    .filter((part) => !["ny", "tx", "ca", "il", "wa", "fl", "ma", "co", "ga", "az"].includes(part))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cityLabel(slug: string) {
  const parts = slug.split("-");
  const suffix = parts.at(-1)?.toUpperCase();
  const name = cityName(slug);

  if (suffix && suffix.length === 2) {
    return `${name}, ${suffix}`;
  }

  return name;
}

function relatedComparisons(cityA: string, cityB: string) {
  return [
    [`${cityA} vs Austin`, "/compare/new-york-vs-austin"],
    [`${cityA} vs Miami`, "/compare/new-york-vs-miami"],
    [`${cityA} vs Chicago`, "/compare/new-york-vs-chicago"],
    [`${cityA} vs Los Angeles`, "/compare/new-york-vs-los-angeles"],
    [`${cityB} vs Austin`, "/compare/dallas-vs-austin"],
    [`${cityB} vs Houston`, "/compare/dallas-vs-houston"],
    [`${cityB} vs Denver`, "/compare/dallas-vs-denver"],
    [`${cityB} vs Phoenix`, "/compare/dallas-vs-phoenix"],
  ];
}

function buildSchema({
  title,
  description,
  cityA,
  cityB,
  region,
}: {
  title: string;
  description: string;
  cityA: string;
  cityB: string;
  region: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://realsalary.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: region === "us" ? "United States" : "Compare",
            item: `https://realsalary.com/${region === "us" ? "us" : "compare"}`,
          },
          { "@type": "ListItem", position: 3, name: title },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          `How much salary do I need in ${cityA} to match ${cityB}?`,
          `Is ${cityA} more expensive than ${cityB}?`,
          "Does this comparison include taxes?",
          "Does this comparison include rent?",
          "Which city gives more disposable income?",
          "Where does the data come from?",
          "Is this result exact?",
        ].map((question) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: "RealSalary provides planning estimates using salary, rent, tax, and cost-of-living data.",
          },
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: `${cityA} vs ${cityB} Salary Comparison Calculator`,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };
}
