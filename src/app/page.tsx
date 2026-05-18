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
  Map,
  MapPin,
  Menu,
  TrendingUp,
} from "lucide-react";

const trustPoints = [
  "After-tax salary estimate",
  "Rent and cost-of-living comparison",
  "Built from public data sources",
];

const resultStats = [
  { label: "Monthly take-home", value: "$7,240" },
  { label: "Estimated rent", value: "$3,450" },
  { label: "Cost difference", value: "+31%" },
  { label: "Disposable income", value: "$2,870" },
];

const tools = [
  { title: "Salary Comparison Calculator", icon: Calculator },
  { title: "Take-Home Pay Calculator", icon: DollarSign },
  { title: "Cost of Living Calculator", icon: BarChart3 },
  { title: "Rent Affordability Calculator", icon: Home },
  { title: "Hourly to Annual Calculator", icon: TrendingUp },
  { title: "Relocation Salary Calculator", icon: BriefcaseBusiness },
];

const comparisons = [
  ["New York", "Dallas", "$1,840 higher rent", "+32% cost"],
  ["San Francisco", "Austin", "$2,120 higher rent", "+38% cost"],
  ["Los Angeles", "Houston", "$1,260 higher rent", "+24% cost"],
  ["Chicago", "Miami", "$420 lower rent", "-6% cost"],
  ["Seattle", "Denver", "$580 higher rent", "+11% cost"],
  ["Boston", "Atlanta", "$1,140 higher rent", "+21% cost"],
  ["London", "Berlin", "£620 higher rent", "+18% cost"],
  ["Paris", "Madrid", "€480 higher rent", "+13% cost"],
  ["Amsterdam", "Dublin", "€260 lower rent", "-5% cost"],
];

const steps = [
  {
    title: "Enter your salary and location",
    description: "Start with your current pay, city, filing status, and household setup.",
    icon: Calculator,
  },
  {
    title: "Adjust for taxes, rent, and local prices",
    description: "Estimate the major costs that actually change your spending power.",
    icon: Home,
  },
  {
    title: "Compare your real spending power",
    description: "See the equivalent salary and monthly disposable-income difference.",
    icon: Map,
  },
];

const usTools = [
  "US Salary Calculator",
  "Federal Tax Estimate",
  "State Take-Home Pay",
  "Rent Affordability",
];

const europeTools = [
  "Europe Salary Comparison",
  "UK Take-Home Pay",
  "Eurozone Cost of Living",
  "Cross-Border Move Planner",
];

const sources = ["BLS", "BEA", "HUD", "MIT Living Wage", "IRS", "Eurostat", "OECD"];

const faqs = [
  [
    "Is this salary calculator accurate?",
    "RealSalary is designed for practical estimates, not exact payroll calculations. It combines salary, tax, rent, and local-price signals to help you compare offers.",
  ],
  [
    "Does RealSalary include taxes?",
    "Yes. The calculator experience is built around after-tax salary estimates, with filing status included as a key input.",
  ],
  [
    "Where does cost-of-living data come from?",
    "The product direction uses public sources such as BLS, BEA, HUD, MIT Living Wage, IRS, Eurostat, and OECD data.",
  ],
  [
    "Can I compare cities in different countries?",
    "Yes. The interface is structured for US and European salary comparisons, including cross-country moves.",
  ],
  [
    "Is this tax advice?",
    "No. RealSalary is a planning tool and should not replace advice from a qualified tax professional.",
  ],
  [
    "How often is the data updated?",
    "The UI is ready for scheduled data refreshes as the data pipeline is added behind the calculator.",
  ],
];

const footerColumns = [
  ["Calculators", "Salary Calculator", "Cost of Living Calculator", "Take-Home Pay Calculator"],
  ["Countries", "United States", "United Kingdom", "Germany", "France"],
  ["Resources", "Compare Cities", "Data Sources", "Methodology"],
  ["Company", "About", "Contact"],
  ["Legal", "Privacy Policy", "Terms", "Disclaimer"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <header className="header">
        <div className="container flex h-full items-center justify-between gap-5">
          <a className="logo" href="#">
            RealSalary<span>.</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 lg:flex">
            <a href="#calculator">Salary Calculator</a>
            <a href="#tools">Cost of Living</a>
            <a href="#comparisons">Compare Cities</a>
            <a href="#countries">Countries</a>
            <a href="#resources">Resources</a>
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
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[1fr_520px] lg:items-center">
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
              <a className="btn-outline" href="#comparisons">
                View Popular Comparisons
              </a>
            </div>
          </div>

          <section id="calculator" className="calculator-card">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="section-label">Premium Calculator</p>
                <h2 className="mt-2 text-[30px]">Compare Your Salary</h2>
              </div>
              <span className="icon-box">
                <Calculator size={22} />
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="label">Current location</span>
                <input className="input" defaultValue="Dallas, TX" />
              </label>
              <label>
                <span className="label">New location</span>
                <input className="input" defaultValue="New York, NY" />
              </label>
              <label>
                <span className="label">Current salary</span>
                <input className="input" defaultValue="$80,000" />
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
                <select className="input" defaultValue="one-bed">
                  <option value="studio">Studio</option>
                  <option value="one-bed">1 bedroom</option>
                  <option value="two-bed">2 bedrooms</option>
                </select>
              </label>
              <label>
                <span className="label">Household type</span>
                <select className="input" defaultValue="solo">
                  <option value="solo">Solo</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                </select>
              </label>
            </div>

            <button className="btn-primary mt-5 w-full justify-center">
              Calculate Real Salary
            </button>

            <div className="result-card mt-6">
              <p className="small font-bold text-desert-200">Equivalent salary</p>
              <p className="result-number mt-2">$118,400</p>
              <p className="mt-3 text-sm leading-6 text-desert-200">
                You need $118,400 in New York to match $80,000 in Dallas.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
          </section>
        </div>
      </section>

      <section id="tools" className="section">
        <div className="container">
          <SectionHeading eyebrow="Popular Calculators" title="Salary tools for the decisions that matter." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <article className="tool-card" key={tool.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5">{tool.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">
                    Compare pay, costs, and real spending power with a clear finance-first view.
                  </p>
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
            {comparisons.map(([cityA, cityB, rent, cost]) => (
              <article className="comparison-card" key={`${cityA}-${cityB}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-xl font-extrabold text-primary">{cityA}</p>
                    <p className="text-sm font-semibold text-text-muted">vs {cityB}</p>
                  </div>
                  <MapPin className="text-secondary" size={22} />
                </div>
                <div className="mt-5 grid gap-2 text-sm text-ink-700">
                  <p>{rent}</p>
                  <p>{cost}</p>
                </div>
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
          <SectionHeading
            eyebrow="How It Works"
            title="How RealSalary Calculates Your Real Pay"
          />
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
        <div className="container grid gap-6 lg:grid-cols-2">
          <ToolList title="US salary tools" tools={usTools} icon={Landmark} />
          <ToolList title="Europe salary tools" tools={europeTools} icon={Globe2} />
        </div>
      </section>

      <section id="resources" className="section">
        <div className="container">
          <SectionHeading eyebrow="Data Sources" title="Built on Public Salary and Cost Data" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {sources.map((source) => (
              <article className="source-card" key={source}>
                <FileText className="text-secondary" size={20} />
                <p className="mt-3 font-extrabold text-primary">{source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container max-w-[820px]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
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
              <a className="logo text-surface" href="#">
                RealSalary<span>.</span>
              </a>
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
}: Readonly<{
  eyebrow: string;
  title: string;
}>) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3">{title}</h2>
    </div>
  );
}

function ToolList({
  title,
  tools,
  icon: Icon,
}: Readonly<{
  title: string;
  tools: string[];
  icon: typeof Landmark;
}>) {
  return (
    <article className="card rounded-card p-6">
      <span className="icon-box">
        <Icon size={22} />
      </span>
      <h2 className="mt-5 text-[30px]">{title}</h2>
      <div className="mt-6 grid gap-3">
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
