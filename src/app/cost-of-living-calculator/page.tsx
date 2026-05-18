import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Cost of Living Calculator"),
  description: calculatorDescription("cost of living calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Compare local prices, rent, and spending power between locations."
      title="Cost of Living Calculator"
    />
  );
}
