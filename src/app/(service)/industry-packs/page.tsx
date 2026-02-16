import IndustryPacksService from "@/components/services/industry-packs";

 export const metadata = {
  title: "Industry Packs",
  description:
    "Ready-to-deploy website and content packages tailored to your industry, built to launch fast and convert.",
  alternates: { canonical: "https://www.brixbiz.com/industry-packs" },
  openGraph: {
    title: "Industry Packs | Brixbiz",
    description:
      "Website and content packages tailored to your industry, built to launch fast and convert.",
    url: "https://www.brixbiz.com/industry-packs",
  },
};

export default function index() {
  return (
    <IndustryPacksService />
  )
}
