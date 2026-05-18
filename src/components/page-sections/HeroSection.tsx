import type { ReactNode } from "react";
import { Compass } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";

export function HeroSection({
  badge = "RealSalary",
  title,
  subtitle,
  children,
}: {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero section">
      <Container className="relative z-10 grid gap-14 lg:grid-cols-[1fr_520px] lg:items-center">
        <div>
          <Badge>
            <Compass size={15} />
            {badge}
          </Badge>
          <h1 className="mt-6">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">{subtitle}</p>
        </div>
        {children}
      </Container>
    </section>
  );
}
