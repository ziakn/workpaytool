import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Net to Gross Salary Calculator"),
  description: calculatorDescription("net to gross salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate the gross salary needed to reach your target take-home pay."
      title="Net to Gross Salary Calculator"
    />
  );
}
