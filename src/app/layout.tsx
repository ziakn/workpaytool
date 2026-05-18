import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealSalary | Western Finance Salary Calculator",
  description:
    "Compare take-home pay, rent, and cost of living across cities with a clean Western Finance salary calculator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
