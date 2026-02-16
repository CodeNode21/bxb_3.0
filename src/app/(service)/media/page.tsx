import MediaService from "@/components/services/media";

export const metadata = {
  title: "Media Production",
  description:
    "Photo and video content for websites and social, built for local businesses that need better visuals to sell.",
  alternates: { canonical: "https://www.brixbiz.com/media" },
  openGraph: {
    title: "Media Production | Brixbiz",
    description:
      "Photo and video content for websites and social for small businesses in Queens and NYC.",
    url: "https://www.brixbiz.com/media",
  },
};

export default function index() {
  return <MediaService />;
}
