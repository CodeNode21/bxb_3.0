import { MetadataRoute } from "next";

const BASE_URL = "https://www.brixbiz.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/draft/",
          "/private/",
          "/portfolio/",
          "/faq/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}