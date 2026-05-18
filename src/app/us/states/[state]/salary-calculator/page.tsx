import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { titleFromSlug } from "@/lib/utils/titleFromSlug";

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = titleFromSlug(state);

  return (
    <CalculatorPageTemplate
      subtitle={`Estimate salary, state tax, average rent, and cost-of-living impact in ${stateName}.`}
      title={`${stateName} Salary Calculator`}
    />
  );
}
