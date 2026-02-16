import GraphicDesignService from "@/components/services/graphic-design";

 export const metadata = {
  title: "Graphic Design",
  description:
    "Logos, marketing graphics, and web-ready visuals that keep your brand consistent across web and social.",
  alternates: { canonical: "https://www.brixbiz.com/graphics" },
  openGraph: {
    title: "Graphic Design | Brixbiz",
    description:
      "Logos, marketing graphics, and web-ready visuals for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/graphics",
  },
};

export default function index() {
  return (
    <GraphicDesignService />
  )
}
