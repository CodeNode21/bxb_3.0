import Blog from "@/components/blog";

 
export const metadata = {
  title: "Blog",
  description:
    "Straightforward guides on websites, SEO, web care, and content strategy for small businesses in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/blog" },
  openGraph: {
    title: "Blog | Brixbiz",
    description:
      "Guides on websites, SEO, web care, and content strategy for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/blog",
  },
};

export default function index() {
  return (
    <Blog />
  )
}
