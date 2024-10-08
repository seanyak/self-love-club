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
            <div className="title w-[90vw] sm:w-[70vw] p-3 pt-18 scroll-mt-28 sm:mb-7  text-center tracking-widest">
            <p className="mb-10 mt-4 px-4 !leading-[1.5] sm:text-4xl">
                <span className=" text-[90px] font-black tracking-widest">SELF LOVE CLUB</span><br />
                <span className=" text-[48px] font-semibold tracking-widest">Bodyworks & Massage Therapy</span><br />
                <span className=" text-[46px] font-extralight tracking-widest">of Wilmington</span>
                <span className=" text-[25px] italic font-light tracking-widest p-3"> located off 
                <span className=" text-[44px] font-bold tracking-widest"> Castle<span className="not-italic font-extralight tracking-widest p-2">X</span>9th</span>
                </span></p>
                <Image src="/assets/slc_hrt01.svg" width={88} height={88} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11 dark:filter dark:invert dark:brightness-[.7] dark:saturate-[1.48] dark:hue-rotate-[180deg]"/>
            </div>
        </motion.div>
      );
};

export default Title;