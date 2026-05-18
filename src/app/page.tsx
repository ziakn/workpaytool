import {
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  Compass,
  DollarSign,
  Home,
  MapPin,
} from "lucide-react";

const metrics = [
  { label: "Take-home pay", value: "$6,240", icon: DollarSign },
  { label: "Monthly rent", value: "$2,150", icon: Home },
  { label: "City index", value: "118", icon: BarChart3 },
];

const features = [
  {
    title: "City-to-city clarity",
    description: "Compare salary power across major US and European markets.",
    icon: MapPin,
  },
  {
    title: "Offer confidence",
    description: "See whether a raise, relocation package, or new role holds up.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Clean finance math",
    description: "Focus on salary, rent, tax, and cost of living without noise.",
    icon: Calculator,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="brand flex items-center gap-3 text-2xl font-extrabold text-primary" href="#">
            <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-accent shadow-soft">
              <Compass size={19} strokeWidth={2.2} />
            </span>
            RealSalary
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 md:flex">
            <a className="transition hover:text-secondary" href="#calculator">
              Calculator
            </a>
            <a className="transition hover:text-secondary" href="#markets">
              Markets
            </a>
            <a className="transition hover:text-secondary" href="#insights">
              Insights
            </a>
          </nav>

          <a
            className="rounded-input bg-primary px-4 py-2.5 text-sm font-semibold text-surface transition hover:bg-primary-dark"
            href="#calculator"
          >
            Compare Salary
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_480px] lg:items-center lg:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
              <Compass size={16} />
              US & Europe Salary Calculator
            </div>

            <p className="section-label mb-4">Western Finance</p>
            <h1>Know What Your Salary Is Really Worth</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              Compare take-home pay, rent, and cost of living across cities and
              countries before you accept a job or move.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-input bg-primary px-5 py-3 text-center font-semibold text-surface transition hover:bg-primary-dark"
                href="#calculator"
              >
                Compare Salary
              </a>
              <a
                className="rounded-input bg-secondary px-5 py-3 text-center font-semibold text-surface transition hover:bg-saddle-800"
                href="#insights"
              >
                View Benchmarks
              </a>
            </div>

            <div className="western-divider mt-10 max-w-xl" />
          </div>

          <section id="calculator" className="calculator-card">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="section-label">Premium Calculator</p>
                <h2 className="mt-2 text-2xl">Salary Match</h2>
              </div>
              <span className="flex size-12 items-center justify-center rounded-full bg-desert-200 text-secondary">
                <Calculator size={23} />
              </span>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="label">Current salary</span>
                <input className="input" defaultValue="$80,000" />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="label">From</span>
                  <input className="input" defaultValue="Dallas, TX" />
                </label>
                <label className="grid gap-2">
                  <span className="label">To</span>
                  <input className="input" defaultValue="New York, NY" />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="label">Monthly rent target</span>
                <input className="input" defaultValue="$2,150" />
              </label>
            </div>

            <div className="result-card mt-6">
              <p className="text-sm font-semibold text-desert-200">Equivalent salary</p>
              <p className="result-number mt-2">$118,400</p>
              <p className="mt-3 text-sm leading-6 text-desert-200">
                You need $118,400 in New York to match $80,000 in Dallas.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section id="markets" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article className="card rounded-[18px] p-5" key={metric.label}>
                <Icon className="text-secondary" size={22} />
                <p className="mt-5 text-sm font-semibold text-text-muted">{metric.label}</p>
                <p className="font-heading mt-1 text-3xl font-extrabold text-primary">
                  {metric.value}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <div>
            <p className="section-label">Built For Decisions</p>
            <h2 className="mt-3">Premium salary tools with a steady hand.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="card rounded-[18px] p-6" key={feature.title}>
                  <span className="flex size-11 items-center justify-center rounded-input bg-desert-200 text-secondary">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
