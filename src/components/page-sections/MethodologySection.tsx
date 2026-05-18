import { FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function MethodologySection() {
  return (
    <section className="section">
      <div className="container">
        <Card>
          <div className="flex gap-4">
            <span className="icon-box shrink-0">
              <FileText size={22} />
            </span>
            <div>
              <p className="section-label">Methodology</p>
              <h2 className="mt-2">Transparent estimates, not hidden math.</h2>
              <p className="mt-4 text-text-muted">
                RealSalary templates are structured around gross salary, estimated taxes, rent,
                local cost differences, and disposable income. These pages should connect to
                public datasets as the data pipeline matures.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
