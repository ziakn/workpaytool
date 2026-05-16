import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Privacy Policy | WorkPayTools",
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage eyebrow="Legal" title="Privacy Policy">
      <p>
        WorkPayTools is designed to provide calculator results without asking
        for sensitive personal information unless a specific feature clearly
        requests it.
      </p>
      <p>
        Basic analytics, cookies, and advertising technologies may be used to
        understand site performance, improve pages, and support free access to
        the tools.
      </p>
    </StaticPage>
  );
}
