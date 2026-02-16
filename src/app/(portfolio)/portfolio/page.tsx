import Portfolio from "@/components/portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Recent website builds, redesigns, and brand updates by Brixbiz for small businesses in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/portfolio" },
  openGraph: {
    title: "Portfolio | Brixbiz",
    description:
      "Recent website builds, redesigns, and brand updates for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/portfolio",
  },
};

export default function index() {
  return (
    <Portfolio />
  )
}
