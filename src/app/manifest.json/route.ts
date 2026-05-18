import { absoluteUrl } from "@/lib/site-pages";

export function GET() {
  return Response.json({
    name: "RealSalary",
    short_name: "RealSalary",
    description: "Compare salary, tax, rent, and cost of living before you move or accept a job.",
    start_url: absoluteUrl("/"),
    display: "standalone",
    background_color: "#F7F1E3",
    theme_color: "#132238",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
    ],
  });
}
