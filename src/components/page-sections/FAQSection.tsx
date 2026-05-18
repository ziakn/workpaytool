import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { SectionHeading } from "./SectionHeading";

const defaultFaqs: AccordionItem[] = [
  {
    question: "Is RealSalary accurate?",
    answer: "RealSalary is built for practical planning estimates. Exact payroll outcomes can vary.",
  },
  {
    question: "Does RealSalary include taxes?",
    answer: "Yes. Calculator templates include tax-aware inputs and take-home pay estimates.",
  },
  {
    question: "Is this tax advice?",
    answer: "No. RealSalary provides educational estimates only.",
  },
];

export function FAQSection({ items = defaultFaqs, title = "Questions About RealSalary" }: { items?: AccordionItem[]; title?: string }) {
  return (
    <section className="section">
      <div className="container max-w-[820px]">
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="mt-8">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
