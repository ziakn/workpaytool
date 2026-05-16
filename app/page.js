import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";
import ToolCard from "./components/ToolCard";
import { AdSlot } from "./components/ui";

export const metadata = {
  title: "Free Salary, Tax, Invoice & Business Calculators | WorkPayTools",
  description:
    "Use free salary, tax, invoice, VAT, profit margin, overtime, and business calculators. Simple tools for employees, freelancers, and small businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Salary, Tax, Invoice & Business Calculators | WorkPayTools",
    description:
      "Use free salary, tax, invoice, VAT, profit margin, overtime, and business calculators. Simple tools for employees, freelancers, and small businesses.",
    url: "/",
    type: "website",
  },
};

const popularTools = [
  [
    "Salary Calculator",
    "/salary-calculator",
    "Calculate yearly, monthly, weekly, daily, and hourly pay from one salary amount.",
  ],
  [
    "Hourly to Salary Calculator",
    "/hourly-to-salary-calculator",
    "Convert an hourly wage into weekly, monthly, and annual salary.",
  ],
  [
    "Invoice Generator",
    "/invoice-generator",
    "Create a simple invoice for freelance, business, or client work.",
  ],
  [
    "VAT Calculator",
    "/vat-calculator",
    "Add or remove VAT from a price using a selected VAT rate.",
  ],
  [
    "Profit Margin Calculator",
    "/profit-margin-calculator",
    "Calculate profit margin, cost, revenue, and profit percentage.",
  ],
  [
    "Overtime Calculator",
    "/overtime-calculator",
    "Estimate overtime pay based on hourly rate and extra working hours.",
  ],
];

const toolSections = [
  {
    title: "Salary and Pay Calculators",
    description:
      "Use these tools to understand your income, compare job offers, convert hourly rates, and estimate regular pay.",
    button: "View All Salary Tools",
    href: "/salary-tools",
    tools: [
      ["Salary Calculator", "/salary-calculator", "Calculate annual, monthly, weekly, daily, and hourly salary."],
      ["Hourly to Salary Calculator", "/hourly-to-salary-calculator", "Convert hourly pay into yearly, monthly, and weekly salary."],
      ["Salary to Hourly Calculator", "/salary-to-hourly-calculator", "Convert annual salary into an estimated hourly wage."],
      ["Monthly Salary Calculator", "/monthly-salary-calculator", "Estimate monthly income from annual or hourly pay."],
      ["Weekly Pay Calculator", "/weekly-pay-calculator", "Calculate weekly earnings from salary or hourly work."],
      ["Take Home Pay Calculator", "/take-home-pay-calculator", "Estimate net pay after basic deductions."],
    ],
  },
  {
    title: "Business Calculators",
    description:
      "Simple calculators for pricing, profit, margins, discounts, loans, and freelance rates.",
    button: "View All Business Tools",
    href: "/business-tools",
    tools: [
      ["Profit Margin Calculator", "/profit-margin-calculator", "Calculate profit margin from cost and selling price."],
      ["Markup Calculator", "/markup-calculator", "Find the markup percentage and selling price."],
      ["Discount Calculator", "/discount-calculator", "Calculate sale price after a discount."],
      ["Break Even Calculator", "/break-even-calculator", "Estimate how many sales are needed to cover costs."],
      ["Business Loan Calculator", "/business-loan-calculator", "Estimate loan payments and total repayment."],
      ["Freelance Hourly Rate Calculator", "/freelance-hourly-rate-calculator", "Calculate a practical freelance hourly rate."],
    ],
    adAfter: true,
  },
  {
    title: "Invoice and Document Tools",
    description:
      "Create basic business documents for clients, projects, payments, and purchases.",
    button: "View Invoice Tools",
    href: "/invoice-tools",
    tools: [
      ["Invoice Generator", "/invoice-generator", "Create and print a clean invoice."],
      ["Receipt Generator", "/receipt-generator", "Create a receipt for paid work or sales."],
      ["Estimate Generator", "/estimate-generator", "Prepare a project estimate or quotation."],
      ["Purchase Order Generator", "/purchase-order-generator", "Create a simple purchase order document."],
    ],
  },
  {
    title: "Tax and VAT Calculators",
    description:
      "Estimate VAT, GST, sales tax, and basic tax-related amounts for everyday business calculations.",
    button: "View Tax Tools",
    href: "/tax-tools",
    tools: [
      ["VAT Calculator", "/vat-calculator", "Add or remove VAT from a price."],
      ["Sales Tax Calculator", "/sales-tax-calculator", "Calculate sales tax and final price."],
      ["GST Calculator", "/gst-calculator", "Add or remove GST from an amount."],
      ["Income Tax Calculator", "/income-tax-calculator", "Estimate income tax from salary or taxable income."],
    ],
  },
  {
    title: "Time and Work Calculators",
    description:
      "Calculate business days, working hours, overtime, dates, and work schedules.",
    button: "View Time Tools",
    href: "/time-tools",
    tools: [
      ["Business Days Calculator", "/business-days-calculator", "Calculate business days between two dates."],
      ["Working Days Calculator", "/working-days-calculator", "Count working days excluding weekends."],
      ["Overtime Calculator", "/overtime-calculator", "Estimate overtime pay from extra work hours."],
      ["Time Card Calculator", "/time-card-calculator", "Calculate total work hours from clock-in and clock-out times."],
    ],
  },
];

const whyCards = [
  ["Free Tools", "All calculators are free to use without signup."],
  ["Simple Inputs", "Enter a few values and get clear results instantly."],
  [
    "Built for Work and Business",
    "Tools are focused on salary, tax, invoices, business, and work calculations.",
  ],
  ["Mobile Friendly", "Use every calculator easily on desktop, tablet, or mobile."],
];

const countryCards = [
  ["United States", "US salary, paycheck, sales tax, and overtime tools."],
  ["United Kingdom", "UK salary, take-home pay, income tax, and VAT tools."],
  ["Canada", "Canada salary, payroll, GST, and provincial tools."],
  ["Australia", "Australia salary, tax, GST, and work pay tools."],
  ["Germany", "Germany salary and income estimate tools."],
  ["Qatar", "Qatar salary and work pay calculators."],
];

const resourceCards = [
  ["Gross vs Net Salary", "/resources/gross-vs-net-salary", "Understand the difference between gross salary and take-home pay."],
  ["Hourly vs Salary Pay", "/resources/hourly-vs-salary", "Compare hourly wages and fixed salary income."],
  ["How to Calculate Take-Home Pay", "/resources/how-to-calculate-take-home-pay", "Learn what affects your final pay after deductions."],
  ["How to Calculate Profit Margin", "/resources/how-to-calculate-profit-margin", "Understand revenue, cost, profit, and margin percentage."],
  ["How to Create an Invoice", "/resources/how-to-create-an-invoice", "Learn what a basic invoice should include."],
  ["What Is VAT?", "/resources/what-is-vat", "Understand how value-added tax works in pricing."],
];

const faqs = [
  {
    question: "What is WorkPayTools?",
    answer:
      "WorkPayTools is a free utility website with calculators for salary, tax, invoices, business pricing, VAT, overtime, and work-related calculations.",
  },
  {
    question: "Are the calculators free?",
    answer: "Yes. The calculators are free to use and do not require signup.",
  },
  {
    question: "Do the calculators include taxes?",
    answer:
      "Some calculators include tax-related estimates, while basic salary calculators may show results before taxes and deductions. Each page explains what is included.",
  },
  {
    question: "Can I use these tools for business?",
    answer:
      "Yes. The invoice, receipt, estimate, profit margin, markup, VAT, GST, and sales tax tools are designed for freelancers and small businesses.",
  },
  {
    question: "Are the results exact?",
    answer:
      "No. Results are estimates for general information. Actual salary, tax, payroll, or business amounts may vary depending on location, rules, deductions, and other details.",
  },
  {
    question: "Do I need an account?",
    answer: "No. The tools should work without login or account creation.",
  },
];

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WorkPayTools</p>
          <h1>Free Salary, Tax, Invoice, and Business Calculators</h1>
          <p>
            Calculate take-home pay, hourly rates, invoices, VAT, profit
            margins, overtime, business days, and more with simple free tools.
          </p>
          <div className="button-row">
            <Link className="primary-button" href="/salary-tools">
              Explore Calculators
            </Link>
            <Link className="secondary-button" href="/invoice-generator">
              Create Free Invoice
            </Link>
          </div>
          <p className="trust-text">
            Free to use. No signup required. Fast and simple calculations.
          </p>
        </div>
        <div className="hero-panel calculator-preview" aria-label="Quick salary estimate">
          <h2>Quick Salary Estimate</h2>
          <label>
            <span>Annual Salary</span>
            <input readOnly value="$60,000" />
          </label>
          <label>
            <span>Currency</span>
            <select defaultValue="USD" aria-label="Currency">
              <option value="USD">USD</option>
            </select>
          </label>
          <label>
            <span>Hours Per Week</span>
            <input readOnly value="40" />
          </label>
          <Link className="primary-button" href="/salary-calculator">
            Calculate
          </Link>
          <div className="preview-results">
            <div>
              <span>Monthly Pay</span>
              <strong>$5,000</strong>
            </div>
            <div>
              <span>Weekly Pay</span>
              <strong>$1,153.85</strong>
            </div>
            <div>
              <span>Hourly Pay</span>
              <strong>$28.85</strong>
            </div>
          </div>
          <p className="preview-note">Estimate before taxes and deductions.</p>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Popular tools"
          title="Popular Free Calculators"
          description="Start with the most commonly used salary, invoice, tax, and business calculators."
        />
        <div className="tool-grid">
          {popularTools.map(([label, href, description]) => (
            <ToolCard key={href} title={label} href={href} description={description} />
          ))}
        </div>
      </section>

      <AdSlot label="Ad placeholder after popular free calculators" />

      {toolSections.map((section) => (
        <div key={section.title}>
          <section className="section compact-section">
            <div className="section-heading split-heading">
              <div>
                <h2>{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
              <Link href={section.href}>{section.button}</Link>
            </div>
            <div className="tool-grid">
              {section.tools.map(([label, href, description]) => (
                <ToolCard key={href} title={label} href={href} description={description} />
              ))}
            </div>
          </section>
          {section.adAfter && (
            <AdSlot label="Ad placeholder after business calculators" />
          )}
        </div>
      ))}

      <section className="section why-section">
        <SectionIntro title="Why Use WorkPayTools?" />
        <div className="feature-grid four-grid">
          {whyCards.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading split-heading">
          <div>
            <h2>Country-Based Salary and Tax Tools</h2>
            <p className="section-description">
              Start with general calculators, then use country-specific tools
              for salary, tax, and payroll estimates.
            </p>
          </div>
          <Link href="/resources">View Country Tools</Link>
        </div>
        <div className="country-grid country-card-grid">
          {countryCards.map(([country, description]) => (
            <article className="country-card" key={country}>
              <h3>{country}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading split-heading">
          <div>
            <h2>Helpful Salary and Business Guides</h2>
            <p className="section-description">
              Learn how salary, tax, invoices, profit margins, and business
              pricing calculations work.
            </p>
          </div>
          <Link href="/resources">Read Guides</Link>
        </div>
        <div className="tool-grid">
          {resourceCards.map(([label, href, description]) => (
            <ToolCard key={href} title={label} href={href} description={description} />
          ))}
        </div>
      </section>

      <AdSlot label="Ad placeholder before FAQ" />

      <section className="section faq-section">
        <SectionIntro title="Frequently Asked Questions" />
        <FAQAccordion faqs={faqs} />
      </section>

      <section className="section bottom-cta">
        <div>
          <h2>Start With a Free Calculator</h2>
          <p>
            Choose a salary, tax, invoice, business, or time calculator and get
            a quick estimate in seconds.
          </p>
          <Link className="primary-button" href="/salary-tools">
            Explore All Tools
          </Link>
        </div>
      </section>
    </main>
  );
}
