import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://workpaytools.com"),
  title: "WorkPayTools",
  description:
    "Free salary, tax, invoice, VAT, and business calculators for employees, freelancers, and small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
