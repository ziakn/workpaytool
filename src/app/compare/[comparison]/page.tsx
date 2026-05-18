import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/templates/ComparisonPageTemplate";
import { cityComparisonTitleFromSlug } from "@/lib/utils/titleFromSlug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison } = await params;
  const comparisonTitle = cityComparisonTitleFromSlug(comparison);
  const title = `${comparisonTitle} Salary Comparison`;
  const [cityA = "City A", cityB = "City B"] = comparisonTitle.split(" vs ");

  return {
    title: `${title} | RealSalary`,
    description: `Compare salary, rent, taxes, cost of living, and disposable income between ${cityA} and ${cityB}.`,
  };
}

export default async function Page({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;

  return <ComparisonPageTemplate comparisonSlug={comparison} region="international" />;
}
