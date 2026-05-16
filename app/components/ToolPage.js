import Link from "next/link";
import CalculatorClient from "./CalculatorClient";
import FAQAccordion from "./FAQAccordion";
import { AdSlot } from "./ui";
import { toolPages } from "../data/mvpTools";

function Breadcrumb({ config }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={config.categoryPath}>{config.category}</Link>
      <span>/</span>
      <span>{config.title}</span>
    </nav>
  );
}

function SchemaMarkup({ config }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: config.title,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: `https://workpaytools.com${config.path}`,
    description: config.metaDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}

export default function ToolPage({ config }) {
  return (
    <main>
      <SchemaMarkup config={config} />
      <Breadcrumb config={config} />
      <section className="subpage-hero tool-hero">
        <p className="eyebrow">{config.category}</p>
        <h1>{config.h1}</h1>
        <p>{config.description}</p>
        <div className="hero-note-row">
          <a className="primary-button" href="#calculator">
            Calculate
          </a>
          <span>No signup required. Free to use.</span>
        </div>
      </section>
      <section className="section calculator-section" id="calculator">
        <div className="section-heading">
          <p className="eyebrow">Calculator tool</p>
          <h2>Enter your values</h2>
        </div>
        <CalculatorClient type={config.type} />
      </section>
      <AdSlot label="Ad placeholder after calculator results" />
      <section className="section content-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>{config.howItWorksTitle}</h2>
        </div>
        <p>{config.howItWorks}</p>
      </section>
      <section className="section content-section">
        <div className="section-heading">
          <p className="eyebrow">Formula</p>
          <h2>{config.formulaTitle}</h2>
        </div>
        <ul className="formula-list">
          {config.formula.map((formula) => (
            <li key={formula}>{formula}</li>
          ))}
        </ul>
      </section>
      <section className="section content-section">
        <div className="section-heading">
          <p className="eyebrow">Example</p>
          <h2>{config.exampleTitle}</h2>
        </div>
        <p>{config.example}</p>
      </section>
      <AdSlot label="Ad placeholder inside calculator guide" />
      <section className="section content-section">
        <div className="section-heading">
          <p className="eyebrow">Use cases</p>
          <h2>{config.useCasesTitle}</h2>
        </div>
        <ul className="use-case-list">
          {config.useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Related tools</p>
          <h2>More calculators you may need</h2>
        </div>
        <div className="related-grid">
          {config.relatedTools.map((slug) => {
            const related = toolPages[slug];
            return (
              <Link key={slug} href={related.path}>
                <span>{related.title}</span>
                <small>{related.metaDescription}</small>
                <strong>→</strong>
              </Link>
            );
          })}
        </div>
      </section>
      <AdSlot label="Ad placeholder before FAQ" />
      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>{config.title} FAQ</h2>
        </div>
        <FAQAccordion faqs={config.faqs} />
      </section>
      <section className="section content-section disclaimer-section">
        <div className="section-heading">
          <p className="eyebrow">Disclaimer</p>
          <h2>Important note</h2>
        </div>
        <p>{config.disclaimer}</p>
      </section>
    </main>
  );
}
