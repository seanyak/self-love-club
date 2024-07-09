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
                <span className=" text-[47px] font-extralight tracking-widest">of Wilmington</span>
                <span className=" text-[29px] italic font-light tracking-widest"> located in The Cargo District</span>.</p>
                <Image src="/assets/slc_hrt01.svg" width={88} height={88} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto"/>
            </div>
        </motion.div>
      );
};

export default Title;