import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Living Wage Calculator"),
  description: calculatorDescription("living wage calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate living wage needs by location and household type."
      title="Living Wage Calculator"
    />
  );
}
