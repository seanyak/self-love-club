import HeroSection from "@/components/shared/hero-section"
import Title from "@/components/shared/title";
import About from "@/components/shared/about";
import Services from "@/components/shared/services";
import Rates from "@/components/shared/rates";
import Hours from "@/components/shared/hours";
import Location from "@/components/shared/location";
import Background from "@/components/shared/background";
import BlogFeed from "@/components/blog/blog-feed";
import ThemeToggle from "@/components/shared/theme-toggle";


async function Home() {

  return (
    <section className='main-container'>
      <Background />
      <HeroSection />
      <Title />
      <About />
      <Services />
      <Rates />
      <Hours />
      <Location />
      <h1 className="pageTitle text-4.4rem sm:text-2.2rem font-black pt-29 pb-12">SELF LOVE BLOG</h1>
      <BlogFeed />
    </section>
  );
}

export default Home;
