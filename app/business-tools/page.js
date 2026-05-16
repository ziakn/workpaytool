import CategoryPage from "../components/CategoryPage";
import { findCategory } from "../data/site";

export const metadata = {
  title: "Business Tools | WorkPayTools",
};

export default function BusinessToolsPage() {
  return <CategoryPage category={findCategory("/business-tools")} />;
}
