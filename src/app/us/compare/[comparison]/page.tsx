import { ComparisonPageTemplate } from "@/components/templates/ComparisonPageTemplate";
import { comparisonTitleFromSlug } from "@/lib/utils/titleFromSlug";

export default async function Page({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;

  return <ComparisonPageTemplate title={`${comparisonTitleFromSlug(comparison)} Salary Comparison`} />;
}
