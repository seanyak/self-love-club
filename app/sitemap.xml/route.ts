// app/sitemap.xml/route.ts

import fs from "fs";
import path from "path";

export async function GET(): Promise<Response> {
  const baseUrl = "https://www.selfloveclub-ilm.com";

  const blogDir = path.join(process.cwd(), "data/blog");
  const files = fs.readdirSync(blogDir);

  const blogSlugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  const urls = [
    `${baseUrl}/`,
    ...blogSlugs.map((slug) => `${baseUrl}/blog/${slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
      )
      .join("\n")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
