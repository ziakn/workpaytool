import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BarChart3, Calculator, FileText, MapPin } from "lucide-react";
import { absoluteUrl, getPageByPath, indexedPages } from "@/lib/site-pages";

type RouteParams = {
  slug: string[];
};

export function generateStaticParams() {
  return indexedPages.map((page) => ({
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
  const page = getPageByPath(path);

  if (!page) {
    notFound();
  }

  const isLegal = page.group === "legal";

  return (
    <main className="min-h-screen bg-background text-text-main">
      <header className="header">
        <div className="container flex h-full items-center justify-between gap-5">
          <Link className="logo" href="/">
            RealSalary<span>.</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 lg:flex">
            <Link href="/salary-calculator">Salary Calculator</Link>
            <Link href="/cost-of-living-calculator">Cost of Living</Link>
            <Link href="/compare">Compare Cities</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/resources">Resources</Link>
          </nav>
          <Link className="btn-primary hidden sm:inline-flex" href="/salary-comparison-calculator">
            Compare Salary
          </Link>
        </div>
      </header>

      <section className="hero section">
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="badge">
              <MapPin size={15} />
              Clean URL
            </p>
            <h1 className="mt-6">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/salary-comparison-calculator">
                Open Calculator
              </Link>
              <Link className="btn-outline" href="/methodology">
                View Methodology
              </Link>
            </div>
          </div>

          <aside className="calculator-card">
            <p className="section-label">RealSalary Page</p>
            <h2 className="mt-2 text-[30px]">What this page covers</h2>
            <div className="mt-6 grid gap-4">
              {pageHighlights(page.group, isLegal).map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div className="flex gap-3" key={highlight.title}>
                    <span className="icon-box shrink-0">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-xl">{highlight.title}</h3>
                      <p className="mt-1 text-sm text-text-muted">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">URL Structure</p>
            <h2 className="mt-3">Built for calculators, locations, and trust.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contentBlocks(page.group).map((block) => (
              <article className="card rounded-card p-6" key={block.title}>
                <h3>{block.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{block.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function pageHighlights(group: string, isLegal: boolean) {
  if (isLegal) {
    return [
      {
        title: "Educational estimates",
        description:
          "RealSalary provides estimates for educational purposes only and is not tax, legal, financial, or employment advice.",
        icon: FileText,
      },
      {
        title: "Clear disclosure",
        description: "Legal and policy pages explain how the product should be used.",
        icon: BarChart3,
      },
    ];
  }

  if (group === "compare") {
    return [
      {
        title: "Equivalent salary",
        description: "Compare the salary needed to preserve spending power.",
        icon: Calculator,
      },
      {
        title: "Rent and cost differences",
        description: "Show taxes, housing, and local cost changes side by side.",
        icon: BarChart3,
      },
    ];
  }

  return [
    {
      title: "Calculator-first layout",
      description: "The page is structured around salary, tax, rent, and cost inputs.",
      icon: Calculator,
    },
    {
      title: "Methodology support",
      description: "Trust pages and source pages support the calculator experience.",
      icon: FileText,
    },
  ];
}

function contentBlocks(group: string) {
  if (group === "us") {
    return [
      {
        title: "US salary context",
        description: "State, city, tax, rent, living wage, and paycheck estimates.",
      },
      {
        title: "Location paths",
        description: "Clean state, city, comparison, and job salary URL structures.",
      },
    ];
  }

  if (group === "europe") {
    return [
      {
        title: "Country salary context",
        description: "Gross-to-net pay, social contributions, rent, and local costs.",
      },
      {
        title: "Careful city expansion",
        description: "European city pages are limited to places with reliable data.",
      },
    ];
  }

  if (group === "resources") {
    return [
      {
        title: "Educational guide",
        description: "Plain-language content for salary, rent, relocation, and job offer decisions.",
      },
      {
        title: "AdSense trust",
        description: "Resource pages support approval with useful, non-thin content.",
      },
    ];
  }

  return [
    {
      title: "Clean SEO URL",
      description: "Lowercase, hyphenated URLs without query-based public pages.",
    },
    {
      title: "Conversion path",
      description: "Each page points users back to the main salary comparison calculator.",
    },
  ];
}
