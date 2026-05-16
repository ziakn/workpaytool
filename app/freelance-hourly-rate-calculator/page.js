import ToolPage from "../components/ToolPage";
import { toolPages } from "../data/mvpTools";

const config = toolPages["freelance-hourly-rate-calculator"];

export const metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: {
    canonical: config.canonical,
  },
  openGraph: {
    title: config.ogTitle,
    description: config.ogDescription,
    url: config.canonical,
    type: "website",
  },
};

export default function Page() {
  return <ToolPage config={config} />;
}
