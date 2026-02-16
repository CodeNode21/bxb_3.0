import { MetadataRoute } from "next";

const BASE_URL = "https://www.brixbiz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/web-development",
    "/web-care",
    "/media",
    "/graphics",
    "/industry-packs",
    "/portfolio",
    "/blog",
    "/contact-us",
    "/about-us",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return [
    ...staticUrls,

    // Future: Dynamic blog posts example
    // Uncomment when you connect to real data
    /*
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    */

    // Future: Industry pages example
    /*
    ...industryPages.map((page) => ({
      url: `${BASE_URL}/industries/${page.slug}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    */
  ];
}