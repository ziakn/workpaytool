import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="result-card">
          <h2 className="text-surface">Ready to compare your real salary?</h2>
          <p className="mt-3 text-desert-200">No login, no forced email, no payment popup.</p>
          <Button className="mt-6" href="/salary-comparison-calculator">
            Calculate Real Salary
          </Button>
        </div>
      </div>
    </section>
  );
}
