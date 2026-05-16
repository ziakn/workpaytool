import CategoryPage from "../components/CategoryPage";
import { findCategory } from "../data/site";

export const metadata = {
  title: "Invoice Tools | WorkPayTools",
};

export default function InvoiceToolsPage() {
  return <CategoryPage category={findCategory("/invoice-tools")} />;
}
