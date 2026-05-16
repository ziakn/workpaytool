import Link from "next/link";
import { footerColumns } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="logo" href="/">
          <span>Work</span>
          <span>Pay</span>
          <span>Tools</span>
        </Link>
        <p>
          Free salary, tax, invoice, VAT, and business calculators for
          employees, freelancers, and small businesses.
        </p>
      </div>
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <section key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 WorkPayTools. All rights reserved.</p>
        <p>
          Disclaimer: Tools provide estimates for informational purposes only.
        </p>
      </div>
    </footer>
  );
}
