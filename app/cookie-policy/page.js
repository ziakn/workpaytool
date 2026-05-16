import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Cookie Policy | WorkPayTools",
};

export default function CookiePolicyPage() {
  return (
    <StaticPage eyebrow="Legal" title="Cookie Policy">
      <p>
        WorkPayTools may use cookies and similar technologies to remember
        preferences, measure traffic, improve content, and support advertising.
      </p>
      <p>
        You can manage or block cookies through your browser settings. Some
        features may work differently if cookies are disabled.
      </p>
    </StaticPage>
  );
}
