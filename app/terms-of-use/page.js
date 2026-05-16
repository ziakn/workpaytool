import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Terms of Use | WorkPayTools",
};

export default function TermsOfUsePage() {
  return (
    <StaticPage eyebrow="Legal" title="Terms of Use">
      <p>
        By using WorkPayTools, you agree to use the calculators and resources
        for general informational and planning purposes.
      </p>
      <p>
        You are responsible for verifying results before relying on them for
        payroll, tax filings, invoices, contracts, or financial decisions.
      </p>
    </StaticPage>
  );
}
