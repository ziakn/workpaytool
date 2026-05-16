import Link from "next/link";
import { navItems } from "../data/site";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        WorkPayTools
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/salary-tools">
        Start Calculating
      </Link>
    </header>
  );
}
