import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Relocation Salary Calculator"),
  description: calculatorDescription("relocation salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate the salary you may need before moving to another city or country."
      title="Relocation Salary Calculator"
    />
  );
}
