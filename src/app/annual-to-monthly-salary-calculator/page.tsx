import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Annual to Monthly Salary Calculator"),
  description: calculatorDescription("annual to monthly salary calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Convert annual salary into monthly, weekly, daily, and hourly pay."
      title="Annual to Monthly Salary Calculator"
    />
  );
}
