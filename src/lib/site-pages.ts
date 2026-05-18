export type PageGroup =
  | "core"
  | "us"
  | "europe"
  | "jobs"
  | "compare"
  | "resources"
  | "trust"
  | "legal";

export type SitePage = {
  path: string;
  title: string;
  description: string;
  group: PageGroup;
  priority: number;
};

const calculatorPages: SitePage[] = [
  page("/calculators", "All Salary Calculators", "Browse RealSalary calculators for salary, tax, rent, cost of living, relocation, and job offer comparisons.", "core", 0.9),
  page("/compare", "Compare Salaries and Cost of Living", "Compare salaries, taxes, rent, and cost of living between cities and countries.", "compare", 0.9),
  page("/countries", "Supported Countries", "Browse supported RealSalary countries and salary calculator coverage.", "core", 0.8),
  page("/us", "United States Salary Tools", "Use US salary, paycheck, tax, rent, and cost-of-living tools by state and city.", "us", 0.95),
  page("/europe", "Europe Salary Tools", "Compare salaries, tax, rent, and cost of living across European countries.", "europe", 0.9),
  page("/resources", "Salary and Cost of Living Resources", "Guides for salary comparison, take-home pay, rent affordability, relocation, and job offers.", "resources", 0.8),
  page("/salary-calculator", "Salary Calculator", "Estimate salary, take-home pay, and real spending power with RealSalary.", "core", 0.95),
  page("/take-home-pay-calculator", "Take-Home Pay Calculator", "Estimate monthly take-home pay after taxes and deductions.", "core", 0.95),
  page("/cost-of-living-calculator", "Cost of Living Calculator", "Compare cost of living between cities and countries.", "core", 0.95),
  page("/salary-comparison-calculator", "Salary Comparison Calculator", "Compare salaries between cities, countries, and job offers.", "core", 0.95),
  page("/rent-affordability-calculator", "Rent Affordability Calculator", "Estimate how much rent you can afford based on salary and location.", "core", 0.9),
  page("/relocation-salary-calculator", "Relocation Salary Calculator", "Calculate the salary needed before accepting a move.", "core", 0.9),
  page("/hourly-to-annual-salary-calculator", "Hourly to Annual Salary Calculator", "Convert hourly pay into annual salary and monthly income.", "core", 0.85),
  page("/annual-to-monthly-salary-calculator", "Annual to Monthly Salary Calculator", "Convert annual salary into monthly gross and estimated take-home pay.", "core", 0.85),
  page("/monthly-to-annual-salary-calculator", "Monthly to Annual Salary Calculator", "Convert monthly pay into annual salary.", "core", 0.75),
  page("/net-to-gross-salary-calculator", "Net to Gross Salary Calculator", "Estimate the gross salary needed for a target net pay.", "core", 0.75),
  page("/gross-to-net-salary-calculator", "Gross to Net Salary Calculator", "Estimate net pay from gross salary.", "core", 0.75),
  page("/job-offer-comparison-calculator", "Job Offer Comparison Calculator", "Compare job offers by pay, location, rent, tax, and spending power.", "core", 0.85),
  page("/salary-raise-calculator", "Salary Raise Calculator", "Calculate raise amounts, percentages, and real income changes.", "core", 0.7),
  page("/disposable-income-calculator", "Disposable Income Calculator", "Estimate disposable income after taxes, rent, and major costs.", "core", 0.7),
  page("/living-wage-calculator", "Living Wage Calculator", "Estimate living wage needs by location and household type.", "core", 0.7),
];

const usPages: SitePage[] = [
  page("/us/salary-calculator", "US Salary Calculator", "Estimate salary, taxes, rent, and spending power in the United States.", "us", 0.9),
  page("/us/take-home-pay-calculator", "US Take-Home Pay Calculator", "Estimate US take-home pay by salary, filing status, and location.", "us", 0.9),
  page("/us/cost-of-living-calculator", "US Cost of Living Calculator", "Compare cost of living between US cities and states.", "us", 0.9),
  page("/us/salary-comparison-calculator", "US Salary Comparison Calculator", "Compare US salaries between cities, states, and job offers.", "us", 0.85),
  page("/us/rent-affordability-calculator", "US Rent Affordability Calculator", "Estimate affordable rent based on US salary and location.", "us", 0.8),
  page("/us/living-wage-calculator", "US Living Wage Calculator", "Estimate living wage needs in US states and cities.", "us", 0.8),
  page("/us/state-income-tax-calculator", "US State Income Tax Calculator", "Estimate state income tax impact on your salary.", "us", 0.75),
  page("/us/paycheck-calculator", "US Paycheck Calculator", "Estimate paycheck and take-home pay in the United States.", "us", 0.75),
  page("/us/hourly-paycheck-calculator", "US Hourly Paycheck Calculator", "Estimate hourly paycheck and take-home pay.", "us", 0.7),
  ...["california", "texas", "new-york", "florida", "washington", "illinois"].map((state) =>
    page(`/us/states/${state}/salary-calculator`, `${titleize(state)} Salary Calculator`, `Estimate salary, state tax, rent, and cost-of-living impact in ${titleize(state)}.`, "us", 0.82),
  ),
  ...[
    "new-york-ny",
    "dallas-tx",
    "austin-tx",
    "los-angeles-ca",
    "san-francisco-ca",
    "chicago-il",
    "seattle-wa",
    "miami-fl",
    "boston-ma",
    "denver-co",
  ].map((city) =>
    page(`/us/cities/${city}/cost-of-living`, `${titleizeCity(city)} Cost of Living`, `Compare salary, rent, living wage, and disposable income in ${titleizeCity(city)}.`, "us", 0.82),
  ),
  ...[
    "new-york-ny-vs-dallas-tx",
    "san-francisco-ca-vs-austin-tx",
    "los-angeles-ca-vs-houston-tx",
    "chicago-il-vs-miami-fl",
    "seattle-wa-vs-denver-co",
    "boston-ma-vs-atlanta-ga",
    "washington-dc-vs-phoenix-az",
  ].map((comparison) =>
    page(`/us/compare/${comparison}`, `${comparisonTitle(comparison)} Salary Comparison`, `Compare salary, rent, taxes, cost of living, and disposable income for ${comparisonTitle(comparison)}.`, "compare", 0.82),
  ),
];

const jobPages: SitePage[] = [
  "software-engineer",
  "data-analyst",
  "nurse",
  "teacher",
  "accountant",
  "project-manager",
  "electrician",
  "truck-driver",
  "marketing-manager",
  "sales-manager",
  "web-developer",
  "cybersecurity-analyst",
  "medical-assistant",
  "dental-hygienist",
  "financial-analyst",
].map((job) =>
  page(`/us/jobs/${job}/salary`, `${titleize(job)} Salary`, `Compare average salary, take-home pay, best-paying locations, and cost-of-living adjusted pay for ${titleize(job)} roles.`, "jobs", 0.7),
);

const europePages: SitePage[] = [
  page("/europe/salary-calculator", "Europe Salary Calculator", "Compare gross salary, net salary, tax, rent, and cost of living across Europe.", "europe", 0.85),
  page("/europe/take-home-pay-calculator", "Europe Take-Home Pay Calculator", "Estimate European take-home pay by country.", "europe", 0.8),
  page("/europe/cost-of-living-calculator", "Europe Cost of Living Calculator", "Compare cost of living between European countries and cities.", "europe", 0.8),
  page("/europe/salary-comparison-calculator", "Europe Salary Comparison Calculator", "Compare salaries across European countries.", "europe", 0.8),
  page("/europe/countries", "Europe Countries", "Browse European salary calculator country pages.", "europe", 0.75),
  page("/europe/compare", "Europe Salary Comparisons", "Compare salaries, taxes, rent, and cost of living between European countries.", "compare", 0.75),
  ...[
    "uk",
    "germany",
    "france",
    "netherlands",
    "ireland",
    "spain",
    "italy",
    "portugal",
    "poland",
    "sweden",
    "norway",
    "denmark",
    "switzerland",
    "austria",
    "belgium",
  ].map((country) =>
    page(`/${country}/salary-calculator`, `${countryName(country)} Salary Calculator`, `Estimate gross salary, net pay, income tax, rent, and cost of living in ${countryName(country)}.`, "europe", 0.82),
  ),
  ...[
    "uk-vs-germany-salary",
    "germany-vs-netherlands-salary",
    "france-vs-spain-salary",
    "spain-vs-portugal-cost-of-living",
    "ireland-vs-uk-salary",
    "netherlands-vs-belgium-salary",
    "sweden-vs-denmark-salary",
    "italy-vs-germany-cost-of-living",
    "london-vs-berlin",
    "london-vs-amsterdam",
    "paris-vs-madrid",
    "berlin-vs-amsterdam",
    "dublin-vs-london",
    "lisbon-vs-madrid",
    "new-york-vs-london",
    "san-francisco-vs-berlin",
    "austin-vs-amsterdam",
  ].map((comparison) =>
    page(`/compare/${comparison}`, `${comparisonTitle(comparison)} Comparison`, `Compare salary, taxes, rent, and cost of living for ${comparisonTitle(comparison)}.`, "compare", 0.68),
  ),
];

const resourcePages: SitePage[] = [
  "how-to-compare-salary-between-cities",
  "how-cost-of-living-is-calculated",
  "gross-salary-vs-net-salary",
  "what-is-take-home-pay",
  "how-much-rent-can-i-afford",
  "how-to-evaluate-a-job-offer",
  "relocation-salary-guide",
  "remote-work-salary-guide",
  "after-tax-salary-guide",
  "living-wage-explained",
].map((slug) =>
  page(`/resources/${slug}`, titleize(slug), `RealSalary guide: ${titleize(slug).toLowerCase()}.`, "resources", 0.65),
);

const trustPages: SitePage[] = [
  page("/data-sources", "Data Sources", "Learn which public salary, tax, rent, and cost-of-living datasets RealSalary uses.", "trust", 0.75),
  page("/methodology", "Methodology", "Review the RealSalary methodology for salary, tax, rent, and cost-of-living estimates.", "trust", 0.75),
  page("/methodology/salary-data", "Salary Data Methodology", "How RealSalary organizes salary and wage data.", "trust", 0.65),
  page("/methodology/tax-calculation", "Tax Calculation Methodology", "How RealSalary estimates taxes and take-home pay.", "trust", 0.7),
  page("/methodology/cost-of-living", "Cost of Living Methodology", "How RealSalary compares local prices and cost-of-living differences.", "trust", 0.7),
  page("/methodology/rent-estimates", "Rent Estimates Methodology", "How RealSalary approaches rent and housing affordability estimates.", "trust", 0.65),
  page("/methodology/currency-conversion", "Currency Conversion Methodology", "How RealSalary handles international salary and currency comparisons.", "trust", 0.6),
  page("/editorial-policy", "Editorial Policy", "RealSalary editorial standards for guides, calculator pages, and methodology content.", "trust", 0.6),
  page("/about", "About RealSalary", "Learn about RealSalary and the mission to make salary comparisons clearer.", "trust", 0.65),
  page("/contact", "Contact RealSalary", "Contact the RealSalary team.", "trust", 0.6),
];

const legalPages: SitePage[] = [
  page("/privacy-policy", "Privacy Policy", "Read the RealSalary privacy policy.", "legal", 0.45),
  page("/terms", "Terms", "Read the RealSalary terms of use.", "legal", 0.45),
  page("/disclaimer", "Disclaimer", "RealSalary provides estimates for educational purposes only and is not tax, legal, financial, or employment advice.", "legal", 0.5),
  page("/cookie-policy", "Cookie Policy", "Read the RealSalary cookie policy.", "legal", 0.4),
];

export const sitePages = [
  page("/", "RealSalary", "Compare salary, tax, rent, and cost of living before you move or accept a job.", "core", 1),
  ...calculatorPages,
  ...usPages,
  ...jobPages,
  ...europePages,
  ...resourcePages,
  ...trustPages,
  ...legalPages,
];

export const indexedPages = sitePages.filter((entry) => entry.path !== "/");

export function getPageByPath(path: string) {
  return sitePages.find((entry) => entry.path === normalizePath(path));
}

export function pagesByGroup(group: PageGroup) {
  return sitePages.filter((entry) => entry.group === group);
}

export function absoluteUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://realsalary.com";
  return new URL(path, baseUrl).toString();
}

function page(path: string, title: string, description: string, group: PageGroup, priority: number): SitePage {
  return { path, title, description, group, priority };
}

function normalizePath(path: string) {
  if (path === "") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function titleize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function titleizeCity(value: string) {
  return titleize(value).replace(/\bNy\b/g, "NY").replace(/\bTx\b/g, "TX").replace(/\bCa\b/g, "CA").replace(/\bIl\b/g, "IL").replace(/\bWa\b/g, "WA").replace(/\bFl\b/g, "FL").replace(/\bMa\b/g, "MA").replace(/\bCo\b/g, "CO").replace(/\bDc\b/g, "DC").replace(/\bAz\b/g, "AZ").replace(/\bGa\b/g, "GA");
}

function comparisonTitle(value: string) {
  return value
    .replace("-salary", "")
    .replace("-cost-of-living", "")
    .split("-vs-")
    .map((part) => titleizeCity(part))
    .join(" vs ");
}

function countryName(country: string) {
  if (country === "uk") {
    return "UK";
  }

  return titleize(country);
}
