// page.tsx
import Background from "@/components/shared/background";
import Services from "@/components/shared/services";
import Hours from "@/components/shared/hours";
import Location from "@/components/shared/location";
import ThemeToggle from "@/components/shared/theme-toggle";
import Link from "next/link";
import BlogFeed from "@/components/blog/blog-feed";

async function Blog() {
  return (
    <section className="main-container">
      <Background />
      <h1 className="pageTitle text-4.4rem sm:text-2.2rem font-black pt-29 pb-12">SELF LOVE BLOG</h1>
      <BlogFeed />
    </section>
  );
}

export default Blog;
