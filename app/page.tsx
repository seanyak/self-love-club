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
import Head from 'next/head';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Self Love Club Bodyworks & Massage",
  "image": "https://www.selfloveclub-ilm.com/_next/image?url=%2Fassets%2Fslc_heroFeelBetter.png&w=3840&q=75", // replace with real image URL
  "url": "https://selfloveclub-ilm.com",
  "telephone": "+1-949-636-6227", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2121 Wrightsville Ave.", 
    "addressLocality": "Wilmington",
    "addressRegion": "NC",
    "postalCode": "28403",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.230681972103824",
    "longitude": "-77.92027732474044"
  },
  "description": "The best therapeutic massage in Wilmington, NC offering personalized treatments like deep tissue, myofascial release, cupping, prenatal massage, and more.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "40"
  },
  "sameAs": [
    "https://www.instagram.com/self.love.club.bodywork/",
    "https://www.yelp.com/biz/self-love-club-bodyworks-and-massage-therapy-wilmington",
    "https://self-love-club-bodyworks-and-massage.square.site/"
  ]
};


async function Home() {

  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
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
    </>
  );
}

export default Home;
