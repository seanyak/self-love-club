'use client'

import Title from "@/components/shared/title";
import About from "@/components/shared/about";
import Location from "@/components/shared/location";
import Background from "@/components/shared/background";


async function AboutPage() {

  return (
    <section className='main-container'>
      <Background />
      <Title />
      <About />
      <Location />
    </section>
  );
}

export default AboutPage;
