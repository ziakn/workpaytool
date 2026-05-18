import { JobSalaryPageTemplate } from "@/components/templates/JobSalaryPageTemplate";
import { titleFromSlug } from "@/lib/utils/titleFromSlug";

export default async function Page({ params }: { params: Promise<{ job: string }> }) {
  const { job } = await params;

  return <JobSalaryPageTemplate job={titleFromSlug(job)} />;
}
