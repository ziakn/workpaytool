import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "About | WorkPayTools",
};

export default function AboutPage() {
  return (
    <StaticPage eyebrow="Company" title="About WorkPayTools">
      <p>
        WorkPayTools provides free salary, tax, invoice, VAT, and business
        calculators for employees, freelancers, and small businesses.
      </p>
      <p>
        The goal is to make common work and pay calculations easier to compare
        before making payroll, pricing, invoice, or budgeting decisions.
      </p>
    </StaticPage>
  );
}
