import Link from "next/link";
import ToolCard from "./components/ToolCard";
import { categories, countries } from "./data/site";

const popularTools = [
  ["Salary Calculator", "/salary-calculator", "Estimate salary by year, month, week, or hour."],
  ["Take Home Pay Calculator", "/take-home-pay-calculator", "Compare gross pay and estimated net pay."],
  ["VAT Calculator", "/vat-calculator", "Add or remove VAT from a price."],
  ["Invoice Generator", "/invoice-generator", "Create a simple invoice for client work."],
  ["Profit Margin Calculator", "/profit-margin-calculator", "Check margin, markup, cost, and revenue."],
  ["Overtime Calculator", "/overtime-calculator", "Estimate extra pay from overtime hours."],
];

const faqs = [
  [
    "Are WorkPayTools calculators free?",
    "Yes. The first version focuses on free calculators and guides for employees, freelancers, and small businesses.",
  ],
  [
    "Do the calculators replace professional advice?",
    "No. They are planning tools. Tax, payroll, and legal rules can change, so confirm important decisions with a qualified professional.",
  ],
  [
    "Which countries are supported first?",
    "The starting country pages cover the US, UK, Canada, Australia, Germany, France, Italy, Spain, Netherlands, Ireland, Qatar, and UAE.",
  ],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WorkPayTools</p>
          <h1>Free Salary, Tax, Invoice, and Business Calculators</h1>
          <p>
            Calculate take-home pay, hourly rates, invoices, VAT, profit
            margins, overtime, and business costs with simple free tools.
          </p>
          <div className="button-row">
            <Link className="primary-button" href="/salary-tools">
              Explore Calculators
            </Link>
            <Link className="secondary-button" href="/invoice-generator">
              Create Free Invoice
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Popular calculator examples">
          {popularTools.slice(0, 4).map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Popular tools</p>
          <h2>Start with the calculators people use most</h2>
        </div>
        <div className="tool-grid">
          {popularTools.map(([label, href, description]) => (
            <ToolCard
              key={href}
              title={label}
              href={href}
              description={description}
            />
          ))}
        </div>
      </section>

      {categories.map((category) => (
        <section className="section compact-section" key={category.href}>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{category.title}</p>
              <h2>{category.title.replace("Tools", "Calculators")}</h2>
            </div>
            <Link href={category.href}>View all</Link>
          </div>
          <div className="tool-grid">
            {category.tools.slice(0, 4).map(([label, href]) => (
              <ToolCard key={href} title={label} href={href} />
            ))}
          </div>
        </section>
      ))}

      <section className="section why-section">
        <div className="section-heading">
          <p className="eyebrow">Why use WorkPayTools</p>
          <h2>Simple calculators for everyday work and pay decisions</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>Built for real work</h3>
            <p>
              Tools are organized around common employee, freelancer, and small
              business questions.
            </p>
          </article>
          <article>
            <h3>Fast to compare</h3>
            <p>
              Move from salary to tax, invoice, margin, and time tools without
              digging through clutter.
            </p>
          </article>
          <article>
            <h3>Country aware</h3>
            <p>
              Country pages group relevant salary, tax, VAT, GST, and sales tax
              tools where they matter.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Country tools</p>
          <h2>Find calculators by country</h2>
        </div>
        <div className="country-grid">
          {countries.map((country) => (
            <Link key={country.slug} href={`/${country.slug}`}>
              {country.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
