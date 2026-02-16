import Aboutus from "@/components/about-us";

export const metadata = {
  title: "About",
  description:
    "Brixbiz is a Queens based studio building websites, media, and ongoing web care for small businesses across NYC.",
  alternates: { canonical: "https://www.brixbiz.com/about-us" },
  openGraph: {
    title: "About | Brixbiz",
    description:
      "A Queens based studio building websites, media, and ongoing web care for small businesses across NYC.",
    url: "https://www.brixbiz.com/about-us",
  },
};
export default function index() {
  return <Aboutus />;
}
