import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Disclaimer | WorkPayTools",
};

export default function DisclaimerPage() {
  return (
    <StaticPage eyebrow="Legal" title="Disclaimer">
      <p>
        WorkPayTools calculators provide estimates only. Results may vary based
        on local laws, tax rates, deductions, employment terms, business rules,
        and user inputs.
      </p>
      <p>
        The site does not provide legal, tax, accounting, payroll, or financial
        advice. Consult a qualified professional for decisions that affect your
        business, income, or tax obligations.
      </p>
    </StaticPage>
  );
}
