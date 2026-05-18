import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Gross to Net Salary Calculator"),
  description: calculatorDescription("gross to net salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate your take-home pay from your gross salary."
      title="Gross to Net Salary Calculator"
    />
  );
}
