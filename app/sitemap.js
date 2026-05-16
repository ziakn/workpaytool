import { countries } from "./data/site";
import { mvpPages } from "./data/mvpTools";

const baseUrl = "https://workpaytools.com";

export default function sitemap() {
  const categoryPages = [
    "/salary-tools",
    "/tax-tools",
    "/business-tools",
    "/invoice-tools",
    "/time-tools",
    "/resources",
  ];
  const countryPages = countries.map((country) => `/${country.slug}`);

  return [...mvpPages, ...categoryPages, ...countryPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : mvpPages.includes(path) ? 0.8 : 0.6,
  }));
}
