import Link from "next/link";
import { Container } from "@/components/layout/Container";

const footerColumns = [
  [
    "Calculators",
    ["Salary Calculator", "/salary-calculator"],
    ["Cost of Living Calculator", "/cost-of-living-calculator"],
    ["Take-Home Pay Calculator", "/take-home-pay-calculator"],
    ["Rent Affordability Calculator", "/rent-affordability-calculator"],
    ["Relocation Calculator", "/relocation-salary-calculator"],
  ],
  [
    "Locations",
    ["United States", "/us"],
    ["United Kingdom", "/uk/salary-calculator"],
    ["Germany", "/germany/salary-calculator"],
    ["France", "/france/salary-calculator"],
    ["Netherlands", "/netherlands/salary-calculator"],
    ["Spain", "/spain/salary-calculator"],
  ],
  [
    "Resources",
    ["Data Sources", "/data-sources"],
    ["Methodology", "/methodology"],
    ["Salary Guides", "/resources"],
    ["FAQ", "/resources"],
  ],
  [
    "Company",
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Editorial Policy", "/editorial-policy"],
  ],
  [
    "Legal",
    ["Privacy Policy", "/privacy-policy"],
    ["Terms", "/terms"],
    ["Disclaimer", "/disclaimer"],
    ["Cookie Policy", "/cookie-policy"],
  ],
];

export function Footer() {
  return (
    <footer className="footer">
      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link className="logo text-surface" href="/">
              RealSalary<span>.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-desert-200">
              Know what your salary is really worth before you move or accept a job.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {footerColumns.map(([heading, ...links]) => (
              <div key={heading as string}>
                <p className="font-bold text-gold-500">{heading}</p>
                <div className="mt-3 grid gap-2">
                  {(links as string[][]).map(([label, href]) => (
                    <Link className="text-sm text-desert-200 hover:text-surface" href={href} key={href}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-divider mt-10 pt-6 text-sm text-desert-200">
          © 2026 RealSalary. Planning estimates only, not tax advice.
        </div>
      </Container>
    </footer>
  );
}
