"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;

        return (
          <article className="faq-item" key={faq.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{faq.question}</span>
              <strong>{isOpen ? "-" : "+"}</strong>
            </button>
            {isOpen && <p>{faq.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
