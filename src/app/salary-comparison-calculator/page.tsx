import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Salary Comparison Calculator"),
  description:
    "Use RealSalary's salary comparison calculator to compare take-home pay, rent, cost of living, and real spending power between cities.",
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Compare your salary after taxes, rent, and cost of living between two locations."
      title="Salary Comparison Calculator"
    />
  );
}
