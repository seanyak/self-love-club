import Image from "next/image";

const About = () => {
    return (
      <section className="founder-message w-[90vw] sm:w-[70vw] p-3 pt-18 scroll-mt-28 sm:mb-20">
        <p className="text-[22px] font-light italic font-inter text-justify drop-shadow-md">
          "My goal is to provide an exceptional massage experience tailored to your needs. I offer integrated modalities 
          and intuitive body work for a truly personalized treatment. As an experienced therapist, I believe in the 
          transformative power of massage therapy. Join the club and prioritize your self-care today!"
          <br /><br />
          <span className="not-italic font-bold pl-8">- Amanda / Owner</span>
        </p>
        <Image src="/assets/slc_hrt03.svg" width={129} height={129} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11"/>

      </section>
    );
  };
  
  export default About;
  