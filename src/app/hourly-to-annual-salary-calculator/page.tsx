import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Hourly to Annual Salary Calculator"),
  description: calculatorDescription("hourly to annual salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Convert hourly wage into weekly, monthly, and yearly pay."
      title="Hourly to Annual Salary Calculator"
    />
  );
}
