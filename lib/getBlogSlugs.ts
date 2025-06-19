import fs from "fs";
import path from "path";

export function getAllBlogSlugs() {
  const blogDir = path.join(process.cwd(), "data/blog");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
