import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

const navLinks = [
  ["Salary Calculator", "/salary-calculator"],
  ["Cost of Living", "/cost-of-living-calculator"],
  ["Compare Cities", "/compare"],
  ["Countries", "/countries"],
  ["Resources", "/resources"],
];

export function Header() {
  return (
    <header className="header">
      <Container className="flex h-full items-center justify-between gap-5">
        <Link className="logo" href="/">
          RealSalary<span>.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex" href="/salary-comparison-calculator">
            Compare Salary
          </Button>
          <button className="icon-button lg:hidden" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </Container>
    </header>
  );
}
