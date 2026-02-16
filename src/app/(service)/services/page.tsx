import ServicesPage from "@/components/services";

export const metadata = {
  title: "Services",
  description:
    "Web development, web care, media, and design services built for small businesses in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/services" },
  openGraph: {
    title: "Services | Brixbiz",
    description:
      "Web development, web care, media, and design services for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/services",
  },
};
export default function index() {
  return <ServicesPage />;
}
