import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Monthly to Annual Salary Calculator"),
  description: calculatorDescription("monthly to annual salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Convert monthly salary into annual, weekly, daily, and hourly pay."
      title="Monthly to Annual Salary Calculator"
    />
  );
}
