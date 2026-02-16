import WebDevelopmentService from "@/components/services/web-development";

export const metadata = {
  title: "Web Development",
  description:
    "Custom websites built for speed, clarity, and conversions, designed for small businesses in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/web-development" },
  openGraph: {
    title: "Web Development | Brixbiz",
    description:
      "Custom websites built for speed, clarity, and conversions for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/web-development",
  },
};
export default function index() {
  return (
    <>
      <WebDevelopmentService />
    </>
  );
}
