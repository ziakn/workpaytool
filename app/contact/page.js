import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Contact | WorkPayTools",
};

export default function ContactPage() {
  return (
    <StaticPage eyebrow="Company" title="Contact WorkPayTools">
      <p>
        For questions, corrections, or business inquiries, contact the
        WorkPayTools team at contact@workpaytools.com.
      </p>
      <p>
        Include the calculator or page URL in your message so the team can
        review your request quickly.
      </p>
    </StaticPage>
  );
}
