import CategoryPage from "../components/CategoryPage";
import { findCategory } from "../data/site";

export const metadata = {
  title: "Tax Tools | WorkPayTools",
};

export default function TaxToolsPage() {
  return <CategoryPage category={findCategory("/tax-tools")} />;
}
