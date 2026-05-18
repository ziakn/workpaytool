import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Job Offer Comparison Calculator"),
  description: calculatorDescription("job offer comparison calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Compare two job offers after salary, taxes, rent, and location costs."
      title="Job Offer Comparison Calculator"
    />
  );
}
