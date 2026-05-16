import CategoryPage from "../components/CategoryPage";
import { findCategory } from "../data/site";

export const metadata = {
  title: "Time Tools | WorkPayTools",
};

export default function TimeToolsPage() {
  return <CategoryPage category={findCategory("/time-tools")} />;
}
