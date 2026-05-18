import { CountryPageTemplate } from "@/components/templates/CountryPageTemplate";
import { countryTitleFromSlug } from "@/lib/utils/titleFromSlug";

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;

  return <CountryPageTemplate country={countryTitleFromSlug(country)} />;
}
