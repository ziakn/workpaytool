import type { Metadata } from "next";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { calculatorDescription, pageTitle } from "@/lib/data/seo";

export const metadata: Metadata = {
  title: pageTitle("Disposable Income Calculator"),
  description: calculatorDescription("disposable income calculator"),
};

export default function Page() {
  return (
    <CalculatorPageTemplate
      subtitle="Estimate disposable income after taxes, rent, and recurring costs."
      title="Disposable Income Calculator"
    />
  );
}
