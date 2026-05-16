import CategoryPage from "../components/CategoryPage";
import { findCategory } from "../data/site";

export const metadata = {
  title: "Salary Tools | WorkPayTools",
};

export default function SalaryToolsPage() {
  return <CategoryPage category={findCategory("/salary-tools")} />;
}
