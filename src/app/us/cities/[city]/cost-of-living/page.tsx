import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { titleFromSlug } from "@/lib/utils/titleFromSlug";

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;

  return <CityPageTemplate city={titleFromSlug(city)} />;
}
