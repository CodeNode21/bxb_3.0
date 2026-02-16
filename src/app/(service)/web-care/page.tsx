import WebCareService from "@/components/services/web-care";

export const metadata = {
  title: "Web Care",
  description:
    "Ongoing website maintenance, monitoring, updates, and monthly performance reporting for small businesses in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/web-care" },
  openGraph: {
    title: "Web Care | Brixbiz",
    description:
      "Website maintenance, monitoring, updates, and monthly reporting for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/web-care",
  },
};
export default function index() {
  return <WebCareService />;
}
