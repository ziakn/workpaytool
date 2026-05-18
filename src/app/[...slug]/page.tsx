import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorPageTemplate } from "@/components/templates/CalculatorPageTemplate";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { ComparisonPageTemplate } from "@/components/templates/ComparisonPageTemplate";
import { ContentPageTemplate } from "@/components/templates/ContentPageTemplate";
import { CountryPageTemplate } from "@/components/templates/CountryPageTemplate";
import { JobSalaryPageTemplate } from "@/components/templates/JobSalaryPageTemplate";
import { absoluteUrl, getPageByPath, indexedPages } from "@/lib/site-pages";
import {
  cityComparisonTitleFromSlug,
  countryTitleFromSlug,
  titleFromSlug,
} from "@/lib/utils/titleFromSlug";

type RouteParams = {
  slug: string[];
};

export function generateStaticParams() {
  return indexedPages
    .filter((page) => !page.path.startsWith("/us/compare/") && !/^\/compare\/[^/]+$/.test(page.path))
    .map((page) => ({
      slug: page.path.slice(1).split("/"),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;

  if (path.startsWith("/us/compare/") || path.startsWith("/compare/")) {
    const comparisonTitle = cityComparisonTitleFromSlug(slug.at(-1) ?? "new-york-ny-vs-dallas-tx");
    const [cityA = "City A", cityB = "City B"] = comparisonTitle.split(" vs ");

    return {
      title: `${comparisonTitle} Salary Comparison | RealSalary`,
      description: `Compare salary, rent, taxes, cost of living, and disposable income between ${cityA} and ${cityB}.`,
      alternates: {
        canonical: absoluteUrl(path),
      },
    };
  }

  const page = getPageByPath(path);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | RealSalary`,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(page.path),
    },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;

  if (path.includes("/cities/") && path.endsWith("/cost-of-living")) {
    return <CityPageTemplate city={titleFromSlug(slug.at(-2) ?? "city")} />;
  }

  if (path.includes("/jobs/") && path.endsWith("/salary")) {
    return <JobSalaryPageTemplate job={titleFromSlug(slug.at(-2) ?? "job")} />;
  }

  if (path.startsWith("/us/compare/") || path.startsWith("/compare/")) {
    return (
      <ComparisonPageTemplate
        comparisonSlug={slug.at(-1) ?? "new-york-ny-vs-dallas-tx"}
        region={path.startsWith("/us/") ? "us" : "international"}
      />
    );
  }

  const page = getPageByPath(path);

  if (!page) {
    notFound();
  }

  if (path.endsWith("/salary-calculator") && slug.length === 2 && !path.startsWith("/us/")) {
    return <CountryPageTemplate country={countryTitleFromSlug(slug[0])} />;
  }

  if (page.group === "core" || page.path.includes("calculator")) {
    return <CalculatorPageTemplate subtitle={page.description} title={page.title} />;
  }

  return <ContentPageTemplate subtitle={page.description} title={page.title} />;
}
