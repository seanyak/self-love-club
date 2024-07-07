import HeroSection from "@/components/shared/hero-section"
import Title from "@/components/shared/title";
import About from "@/components/shared/about";
import Services from "@/components/shared/services";
import Rates from "@/components/shared/rates";
import Hours from "@/components/shared/hours";
import Location from "@/components/shared/location";
import Background from "@/components/shared/background";


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
    </section>
  );
}

export default Home;
