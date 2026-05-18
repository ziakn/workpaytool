export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p className="mt-3 text-sm text-text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
