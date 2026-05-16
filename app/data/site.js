export const navItems = [
  { label: "Salary Tools", href: "/salary-tools" },
  { label: "Tax Tools", href: "/tax-tools" },
  { label: "Business Tools", href: "/business-tools" },
  { label: "Invoice Tools", href: "/invoice-tools" },
  { label: "Time Tools", href: "/time-tools" },
  { label: "Resources", href: "/resources" },
];

export const categories = [
  {
    title: "Salary Tools",
    href: "/salary-tools",
    intro: "Calculate salaries, pay periods, take-home pay, and gross-to-net earnings.",
    tools: [
      ["Salary Calculator", "/salary-calculator"],
      ["Hourly to Salary Calculator", "/hourly-to-salary-calculator"],
      ["Salary to Hourly Calculator", "/salary-to-hourly-calculator"],
      ["Monthly Salary Calculator", "/monthly-salary-calculator"],
      ["Weekly Pay Calculator", "/weekly-pay-calculator"],
      ["Biweekly Pay Calculator", "/biweekly-pay-calculator"],
      ["Annual Income Calculator", "/annual-income-calculator"],
      ["Take Home Pay Calculator", "/take-home-pay-calculator"],
      ["Gross Pay Calculator", "/gross-pay-calculator"],
      ["Net Pay Calculator", "/net-pay-calculator"],
      ["Gross to Net Calculator", "/gross-to-net-calculator"],
      ["Net to Gross Calculator", "/net-to-gross-calculator"],
    ],
  },
  {
    title: "Tax Tools",
    href: "/tax-tools",
    intro: "Estimate income tax, payroll tax, VAT, GST, sales tax, and freelance tax.",
    tools: [
      ["US Tax Calculator", "/us-tax-calculator"],
      ["UK Tax Calculator", "/uk-tax-calculator"],
      ["Canada Tax Calculator", "/canada-tax-calculator"],
      ["Income Tax Calculator", "/income-tax-calculator"],
      ["Payroll Tax Calculator", "/payroll-tax-calculator"],
      ["VAT Calculator", "/vat-calculator"],
      ["GST Calculator", "/gst-calculator"],
      ["Sales Tax Calculator", "/sales-tax-calculator"],
      ["Self Employment Tax Calculator", "/self-employment-tax-calculator"],
      ["Freelance Tax Calculator", "/freelance-tax-calculator"],
    ],
  },
  {
    title: "Business Tools",
    href: "/business-tools",
    intro: "Run quick checks for pricing, margins, discounts, loans, and project costs.",
    tools: [
      ["Profit Margin Calculator", "/profit-margin-calculator"],
      ["Markup Calculator", "/markup-calculator"],
      ["Discount Calculator", "/discount-calculator"],
      ["Break Even Calculator", "/break-even-calculator"],
      ["Business Loan Calculator", "/business-loan-calculator"],
      ["Simple Interest Calculator", "/simple-interest-calculator"],
      ["Compound Interest Calculator", "/compound-interest-calculator"],
      ["Freelance Hourly Rate Calculator", "/freelance-hourly-rate-calculator"],
      ["Freelance Day Rate Calculator", "/freelance-day-rate-calculator"],
      ["Project Cost Calculator", "/project-cost-calculator"],
    ],
  },
  {
    title: "Invoice Tools",
    href: "/invoice-tools",
    intro: "Create invoices, receipts, estimates, purchase orders, and proforma invoices.",
    tools: [
      ["Invoice Generator", "/invoice-generator"],
      ["Receipt Generator", "/receipt-generator"],
      ["Estimate Generator", "/estimate-generator"],
      ["Purchase Order Generator", "/purchase-order-generator"],
      ["Proforma Invoice Generator", "/proforma-invoice-generator"],
      ["Freelance Invoice Generator", "/freelance-invoice-generator"],
      ["Consultant Invoice Generator", "/consultant-invoice-generator"],
      ["Contractor Invoice Generator", "/contractor-invoice-generator"],
    ],
  },
  {
    title: "Time Tools",
    href: "/time-tools",
    intro: "Calculate work hours, overtime, business days, vacation days, and date spans.",
    tools: [
      ["Age Calculator", "/age-calculator"],
      ["Date Calculator", "/date-calculator"],
      ["Days Between Dates", "/days-between-dates"],
      ["Business Days Calculator", "/business-days-calculator"],
      ["Working Days Calculator", "/working-days-calculator"],
      ["Time Card Calculator", "/time-card-calculator"],
      ["Overtime Calculator", "/overtime-calculator"],
      ["Work Hours Calculator", "/work-hours-calculator"],
      ["PTO Calculator", "/pto-calculator"],
      ["Vacation Days Calculator", "/vacation-days-calculator"],
      ["Notice Period Calculator", "/notice-period-calculator"],
    ],
  },
];

export const resources = [
  ["Gross vs Net Salary", "/resources/gross-vs-net-salary"],
  ["Hourly vs Salary", "/resources/hourly-vs-salary"],
  ["How to Calculate Take Home Pay", "/resources/how-to-calculate-take-home-pay"],
  ["How to Calculate Profit Margin", "/resources/how-to-calculate-profit-margin"],
  ["How to Create an Invoice", "/resources/how-to-create-an-invoice"],
  ["What Is VAT?", "/resources/what-is-vat"],
  ["What Is Sales Tax?", "/resources/what-is-sales-tax"],
  ["What Is GST?", "/resources/what-is-gst"],
  ["Freelancer Pricing Guide", "/resources/freelancer-pricing-guide"],
  ["Small Business Calculator Guide", "/resources/small-business-calculator-guide"],
];

export const countries = [
  {
    name: "United States",
    slug: "us",
    tools: [
      "US Salary Calculator",
      "US Paycheck Calculator",
      "US Income Tax Calculator",
      "US Sales Tax Calculator",
      "US Hourly to Salary Calculator",
      "US Overtime Calculator",
    ],
  },
  { name: "United Kingdom", slug: "uk" },
  { name: "Canada", slug: "canada" },
  { name: "Australia", slug: "australia" },
  { name: "Germany", slug: "germany" },
  { name: "France", slug: "france" },
  { name: "Italy", slug: "italy" },
  { name: "Spain", slug: "spain" },
  { name: "Netherlands", slug: "netherlands" },
  { name: "Ireland", slug: "ireland" },
  { name: "Qatar", slug: "qatar" },
  { name: "UAE", slug: "uae" },
].map((country) => ({
  tools: [
    `${country.name} Salary Calculator`,
    `${country.name} Income Tax Calculator`,
    `${country.name} VAT Calculator`,
    `${country.name} Hourly to Salary Calculator`,
    `${country.name} Overtime Calculator`,
  ],
  ...country,
}));

export const footerColumns = [
  {
    title: "Salary Tools",
    links: [
      ["Salary Calculator", "/salary-calculator"],
      ["Hourly to Salary Calculator", "/hourly-to-salary-calculator"],
      ["Take Home Pay Calculator", "/take-home-pay-calculator"],
      ["Gross to Net Calculator", "/gross-to-net-calculator"],
      ["Monthly Salary Calculator", "/monthly-salary-calculator"],
    ],
  },
  {
    title: "Tax Tools",
    links: [
      ["Income Tax Calculator", "/income-tax-calculator"],
      ["VAT Calculator", "/vat-calculator"],
      ["GST Calculator", "/gst-calculator"],
      ["Sales Tax Calculator", "/sales-tax-calculator"],
      ["Self Employment Tax Calculator", "/self-employment-tax-calculator"],
    ],
  },
  {
    title: "Business Tools",
    links: [
      ["Profit Margin Calculator", "/profit-margin-calculator"],
      ["Markup Calculator", "/markup-calculator"],
      ["Discount Calculator", "/discount-calculator"],
      ["Break Even Calculator", "/break-even-calculator"],
      ["Business Loan Calculator", "/business-loan-calculator"],
    ],
  },
  {
    title: "Invoice Tools",
    links: [
      ["Invoice Generator", "/invoice-generator"],
      ["Receipt Generator", "/receipt-generator"],
      ["Estimate Generator", "/estimate-generator"],
      ["Purchase Order Generator", "/purchase-order-generator"],
    ],
  },
  {
    title: "Time Tools",
    links: [
      ["Age Calculator", "/age-calculator"],
      ["Business Days Calculator", "/business-days-calculator"],
      ["Working Days Calculator", "/working-days-calculator"],
      ["Overtime Calculator", "/overtime-calculator"],
      ["Time Card Calculator", "/time-card-calculator"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Resources", "/resources"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Use", "/terms-of-use"],
      ["Disclaimer", "/disclaimer"],
      ["Cookie Policy", "/cookie-policy"],
    ],
  },
];

export function findCategory(href) {
  return categories.find((category) => category.href === href);
}
