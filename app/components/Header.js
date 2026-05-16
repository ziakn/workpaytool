"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" href="/" onClick={() => setIsOpen(false)}>
          <span>Work</span>
          <span>Pay</span>
          <span>Tools</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/salary-tools" onClick={() => setIsOpen(false)}>
          Start Calculating
        </Link>
      </div>
    </header>
  );
}
