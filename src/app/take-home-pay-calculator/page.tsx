import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Take-Home Pay Calculator"),
  description: calculatorDescription("take-home pay calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate your monthly pay after taxes and deductions."
      title="Take-Home Pay Calculator"
    />
  );
}
