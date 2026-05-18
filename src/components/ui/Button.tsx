import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  }[variant];

  if (href) {
    return (
      <Link className={`${variantClass} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
