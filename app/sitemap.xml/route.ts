import { getAllBlogSlugs } from "@/lib/getBlogSlugs";
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.selfloveclub-ilm.com";

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ];

  const blogSlugs = getAllBlogSlugs();

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(), // optionally use frontmatter date
  }));

  return [...staticRoutes, ...blogRoutes];
}
