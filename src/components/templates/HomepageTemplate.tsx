import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Compass,
  DollarSign,
  FileText,
  Globe2,
  Home,
  Landmark,
  MapPin,
  Menu,
  TrendingUp,
} from "lucide-react";

const trustPoints = [
  "After-tax salary estimate",
  "Rent and cost-of-living comparison",
  "Built from public data sources",
];

const locations = [
  "Dallas, TX",
  "New York, NY",
  "Austin, TX",
  "Chicago, IL",
  "Los Angeles, CA",
  "San Francisco, CA",
  "Seattle, WA",
  "Miami, FL",
  "Boston, MA",
  "Denver, CO",
];

const resultStats = [
  { label: "Monthly take-home", value: "$6,420" },
  { label: "Estimated rent", value: "$3,100" },
  { label: "Cost difference", value: "+42%" },
  { label: "Disposable income", value: "$2,250" },
];

const calculators = [
  {
    title: "Salary Comparison Calculator",
    description: "Compare your current salary with a new city or job offer.",
    icon: Calculator,
  },
  {
    title: "Take-Home Pay Calculator",
    description: "Estimate monthly pay after taxes and payroll deductions.",
    icon: DollarSign,
  },
  {
    title: "Cost of Living Calculator",
    description: "Compare local prices, rent, and everyday expenses.",
    icon: BarChart3,
  },
  {
    title: "Rent Affordability Calculator",
    description: "Check what rent fits your income and household needs.",
    icon: Home,
  },
  {
    title: "Hourly to Annual Calculator",
    description: "Convert hourly pay into monthly and yearly salary.",
    icon: TrendingUp,
  },
  {
    title: "Relocation Salary Calculator",
    description: "Estimate the salary needed before accepting a move.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Net to Gross Salary Calculator",
    description: "Work backward from take-home pay to required gross salary.",
    icon: DollarSign,
  },
  {
    title: "Job Offer Comparison Calculator",
    description: "Compare competing offers by location, rent, tax, and pay.",
    icon: BriefcaseBusiness,
  },
];

const comparisons = [
  ["New York", "Dallas"],
  ["San Francisco", "Austin"],
  ["Los Angeles", "Houston"],
  ["Chicago", "Miami"],
  ["Seattle", "Denver"],
  ["Boston", "Atlanta"],
  ["London", "Berlin"],
  ["Paris", "Madrid"],
  ["Amsterdam", "Dublin"],
];

const steps = [
  {
    title: "Enter salary and location",
    description: "Add your current city, target city, salary, and household setup.",
    icon: Calculator,
  },
  {
    title: "Adjust for tax, rent, and cost",
    description: "RealSalary estimates the local costs that affect your monthly budget.",
    icon: Home,
  },
  {
    title: "See your real spending power",
    description: "Compare the equivalent salary and disposable income between cities.",
    icon: Compass,
  },
];

const usTools = [
  "USA Salary Calculator",
  "USA Take-Home Pay Calculator",
  "California Salary Calculator",
  "Texas Salary Calculator",
  "New York Salary Calculator",
  "Florida Salary Calculator",
  "New York City Cost of Living",
  "Dallas Cost of Living",
  "Austin Cost of Living",
  "Los Angeles Cost of Living",
  "San Francisco Cost of Living",
  "Chicago Cost of Living",
];

const europeTools = [
  "UK Salary Calculator",
  "Germany Salary Calculator",
  "France Salary Calculator",
  "Netherlands Salary Calculator",
  "Ireland Salary Calculator",
  "Spain Salary Calculator",
  "Italy Salary Calculator",
  "Portugal Salary Calculator",
  "Poland Salary Calculator",
  "Sweden Salary Calculator",
];

const sources = [
  ["BLS", "Used for occupation and wage estimates in the United States."],
  ["BEA", "Used for regional income and economic comparison data."],
  ["HUD", "Used for rent and housing affordability benchmarks."],
  ["MIT Living Wage", "Used for household spending and living wage context."],
  ["IRS", "Used for federal tax structure and filing-status assumptions."],
  ["Eurostat", "Used for European income and cost-of-living indicators."],
  ["OECD", "Used for international wage and purchasing-power context."],
];

const faqs = [
  [
    "Is RealSalary accurate?",
    "RealSalary is built for practical planning estimates. It helps compare salary, taxes, rent, and spending power, but exact payroll outcomes can vary.",
  ],
  [
    "Does RealSalary include taxes?",
    "Yes. The calculator is structured around after-tax salary estimates, including filing status as a core input.",
  ],
  [
    "Where does the cost-of-living data come from?",
    "RealSalary is designed around public datasets and transparent methodology rather than hidden estimates.",
  ],
  [
    "Can I compare cities in different countries?",
    "Yes. The homepage supports US and Europe comparisons, including city pairs like London vs Berlin and Paris vs Madrid.",
  ],
  [
    "Is this tax advice?",
    "No. RealSalary provides planning estimates only and is not a substitute for advice from a qualified tax professional.",
  ],
  [
    "How often is the data updated?",
    "The interface is prepared for recurring data updates as the salary and cost datasets are connected.",
  ],
];

const footerColumns = [
  [
    "Calculators",
    "Salary Calculator",
    "Cost of Living Calculator",
    "Take-Home Pay Calculator",
    "Rent Affordability Calculator",
    "Relocation Calculator",
  ],
  [
    "Locations",
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Spain",
    "Italy",
    "Portugal",
  ],
  ["Resources", "Data Sources", "Methodology", "Salary Guides", "Cost of Living Guides", "FAQ"],
  ["Company", "About", "Contact", "Editorial Policy"],
  ["Legal", "Privacy Policy", "Terms", "Disclaimer", "Cookie Policy"],
];

export function HomepageTemplate() {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <header className="header">
        <div className="container flex h-full items-center justify-between gap-5">
          <Link className="logo" href="/">
            RealSalary<span>.</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 lg:flex">
            <Link href="/salary-calculator">Salary Calculator</Link>
            <Link href="/cost-of-living-calculator">Cost of Living</Link>
            <Link href="/compare">Compare Cities</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/resources">Resources</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a className="btn-primary hidden sm:inline-flex" href="#calculator">
              Compare Salary
            </a>
            <button className="icon-button lg:hidden" aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <section className="hero section pt-12 sm:pt-16">
        <div className="container relative z-10 grid gap-14 lg:grid-cols-[1fr_520px] lg:items-center">
          <div>
            <div className="badge">
              <Compass size={15} />
              US & Europe Salary Calculator
            </div>

            <h1 className="mt-6">Know What Your Salary Is Really Worth</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              Compare take-home pay, rent, and cost of living across cities and
              countries before you accept a job or move.
            </p>

            <div className="mt-7 grid gap-3">
              {trustPoints.map((point) => (
                <div className="flex items-center gap-3 text-sm font-semibold text-ink-700" key={point}>
                  <CheckCircle2 className="text-success" size={19} />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#calculator">
                Calculate Real Salary
              </a>
              <Link className="btn-outline" href="/compare">
                View Popular Comparisons
              </Link>
            </div>
          </div>

          <section id="calculator" className="calculator-card">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="section-label">Main Calculator</p>
                <h2 className="mt-2 text-[30px]">Compare Your Real Salary</h2>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  See how far your salary goes after taxes, rent, and local prices.
                </p>
              </div>
              <span className="icon-box">
                <Calculator size={22} />
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="label">Current location</span>
                <select className="input" defaultValue="Dallas, TX">
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="label">New location</span>
                <select className="input" defaultValue="New York, NY">
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="label">Current salary</span>
                <input className="input" defaultValue="$80,000" />
              </label>
              <label>
                <span className="label">Pay frequency</span>
                <select className="input" defaultValue="yearly">
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="hourly">Hourly</option>
                </select>
              </label>
              <label>
                <span className="label">Filing status</span>
                <select className="input" defaultValue="single">
                  <option value="single">Single</option>
                  <option value="married">Married filing jointly</option>
                  <option value="head">Head of household</option>
                </select>
              </label>
              <label>
                <span className="label">Rent type</span>
                <select className="input" defaultValue="1-bedroom">
                  <option value="studio">Studio</option>
                  <option value="1-bedroom">1-bedroom</option>
                  <option value="2-bedroom">2-bedroom</option>
                  <option value="3-bedroom">3-bedroom</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="label">Household type</span>
                <select className="input" defaultValue="single-adult">
                  <option value="single-adult">Single adult</option>
                  <option value="couple">Couple</option>
                  <option value="family-1">Family with 1 child</option>
                  <option value="family-2">Family with 2 children</option>
                </select>
              </label>
            </div>

            <button className="btn-primary mt-5 w-full justify-center">
              Calculate Real Salary
            </button>
          </section>
        </div>
      </section>

      <section className="section py-12">
        <div className="container">
          <div className="result-card">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="small font-bold text-desert-200">Quick result preview</p>
                <p className="result-number mt-2">$118,400</p>
                <h2 className="mt-3 text-[30px] text-surface">
                  You need $118,400 in New York to match $80,000 in Dallas.
                </h2>
                <p className="mt-3 text-sm leading-6 text-desert-200">
                  Based on estimated taxes, rent, and local cost differences.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {resultStats.map((stat) => (
                  <div className="result-stat" key={stat.label}>
                    <p className="text-xs font-semibold text-desert-200">{stat.label}</p>
                    <p className="font-heading mt-1 text-xl font-extrabold text-gold-500">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-calculators" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Popular Calculators"
            title="Salary Tools for Smarter Decisions"
            subtitle="Use simple calculators to compare salary, taxes, rent, and real spending power."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {calculators.map((tool) => {
              const Icon = tool.icon;

              return (
                <article className="tool-card" key={tool.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5">{tool.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{tool.description}</p>
                  <a className="mt-5 inline-flex text-sm font-extrabold text-primary" href="#calculator">
                    Open Calculator
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="comparisons" className="section bg-desert-200/55">
        <div className="container">
          <SectionHeading eyebrow="Compare Cities" title="Popular Salary Comparisons" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {comparisons.map(([cityA, cityB]) => (
              <article className="comparison-card" key={`${cityA}-${cityB}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-xl font-extrabold text-primary">{cityA}</p>
                    <p className="text-sm font-semibold text-text-muted">vs</p>
                    <p className="font-heading text-xl font-extrabold text-primary">{cityB}</p>
                  </div>
                  <MapPin className="text-secondary" size={22} />
                </div>
                <p className="mt-5 text-sm text-ink-700">
                  Compare salary, rent, and cost of living.
                </p>
                <a className="mt-5 inline-flex text-sm font-extrabold text-primary" href="#calculator">
                  Compare
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How It Works" title="How RealSalary Works" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="card rounded-card p-6" key={step.title}>
                  <div className="flex items-center justify-between">
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <span className="font-heading text-3xl font-extrabold text-gold-500">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6">{step.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="countries" className="section bg-desert-200/55">
        <div className="container">
          <ToolLinkSection title="US Salary and Cost-of-Living Tools" tools={usTools} icon={Landmark} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ToolLinkSection title="Europe Salary Calculators" tools={europeTools} icon={Globe2} />
        </div>
      </section>

      <section id="resources" className="section bg-desert-200/55">
        <div className="container">
          <SectionHeading
            eyebrow="Data Sources"
            title="Built on Public Salary and Cost Data"
            subtitle="RealSalary uses public datasets and transparent methodology instead of hidden estimates."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sources.map(([source, description]) => (
              <article className="source-card" key={source}>
                <FileText className="text-secondary" size={20} />
                <p className="mt-3 font-extrabold text-primary">{source}</p>
                <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-[820px]">
          <SectionHeading eyebrow="FAQ" title="Questions About RealSalary" />
          <div className="mt-8 grid gap-4">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <p className="mt-3 text-sm text-text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_3fr]">
            <div>
              <Link className="logo text-surface" href="/">
                RealSalary<span>.</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-desert-200">
                Know what your salary is really worth before you move or accept a job.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {footerColumns.map(([heading, ...links]) => (
                <div key={heading}>
                  <p className="font-bold text-gold-500">{heading}</p>
                  <div className="mt-3 grid gap-2">
                    {links.map((link) => (
                      <a className="text-sm text-desert-200 hover:text-surface" href="#" key={link}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-divider mt-10 pt-6 text-sm text-desert-200">
            © 2026 RealSalary. Planning estimates only, not tax advice.
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: Readonly<{
  eyebrow: string;
  title: string;
  subtitle?: string;
}>) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3">{title}</h2>
      {subtitle ? <p className="mt-4 text-text-muted">{subtitle}</p> : null}
    </div>
  );
}

function ToolLinkSection({
  title,
  tools,
  icon: Icon,
}: Readonly<{
  title: string;
  tools: string[];
  icon: LucideIcon;
}>) {
  return (
    <article className="card rounded-card p-6">
      <div className="flex items-center gap-4">
        <span className="icon-box">
          <Icon size={22} />
        </span>
        <h2 className="text-[30px]">{title}</h2>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <a
            className="rounded-input border border-border bg-desert-50 px-4 py-3 text-sm font-bold text-ink-700 transition hover:bg-desert-200 hover:text-secondary"
            href="#calculator"
            key={tool}
          >
            {tool}
          </a>
        ))}
      </div>
    </article>
  );
}
