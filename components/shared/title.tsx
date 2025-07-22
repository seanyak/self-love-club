'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

const Title = () => {
    return (
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
            <div className="title w-[90vw] sm:w-[70vw] p-3 pt-18 scroll-mt-28 sm:mb-7">
            <p className="text-center ">
                <span className=" text-[90px] font-black tracking-widest">SELF LOVE CLUB</span><br />
                <span className=" text-[48px] font-black  md:font-semibold tracking-widest">Bodyworks & Massage Therapy</span><br />
                <span className="text-[64px] font-bold tracking-wide md:tracking-widest">2121 Wrightsville Ave.</span><br />
                <span className="titleLoc font-black tracking-[.5rem] md:tracking-[2.2rem]">Wilmington</span>

              </p>
                <Image src="/assets/slc_hrt01.svg" width={88} height={88} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11 dark:filter dark:invert dark:brightness-[.7] dark:saturate-[1.48] dark:hue-rotate-[180deg]"/>
            </div>
        </motion.div>
      );
};

export default Title;