import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`card rounded-card p-6 ${className}`}>{children}</article>;
}
