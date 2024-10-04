'use client'

import Image from "next/image";
import { motion } from "framer-motion";



const About = () => {
    return (
      <section className="founder-message w-[90vw] sm:w-[70vw] p-3 pt-18 scroll-mt-28 sm:mb-20">
        <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              >
        <p className="text-[22px] font-light italic font-inter text-justify drop-shadow-md">
          "My goal is to provide an exceptional massage experience tailored to your needs. I offer integrated modalities 
          and intuitive body work for a truly personalized treatment. As an experienced therapist, I believe in the 
          transformative power of massage therapy. Join the club and prioritize your self-care today!"
          <br /><br />
          <span className="not-italic font-bold pl-8">- Amanda / Owner</span>
        </p>
        </motion.div>
        <Image src="/assets/slc_hrt03.svg" width={129} height={129} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11 dark:filter dark:invert dark:brightness-[.7] dark:saturate-[1.48] dark:hue-rotate-[180deg]"/>

      </section>
    );
  };
  
  export default About;
  