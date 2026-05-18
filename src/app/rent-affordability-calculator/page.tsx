import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Rent Affordability Calculator"),
  description: calculatorDescription("rent affordability calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate how much rent you can afford based on your income."
      title="Rent Affordability Calculator"
    />
  );
}
