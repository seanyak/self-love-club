"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import Tooltip from "@/components/ui/tooltip";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Services() {
  return (
    <section
      id="Services"
      className="pt-18 max-w-[53rem] scroll-mt-28 text-center sm:mb-20"
    >
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
        <SectionHeading>Services</SectionHeading>
        <ul className="flex flex-wrap justify-center text-5xl gap-2 text-[#fbf6d1] dark:text-[#413f16]">
            {services.map((service, index) => (
            <motion.li
                className="bg-[#8ca436] hover:bg-[#2b281b] border-dark-1 rounded-xl px-2 py-2 shadow-sm dark:bg-[#dbe8da] dark:hover:bg-[#b3c058]"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
            >
                <Tooltip content={service.description} position="top">
                    <Link href="https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so">
                        <span className="text-xl font-semibold mb-2">{service.name}</span>
                    </Link>
                </Tooltip>
            </motion.li>
            ))}
        </ul>
        <Image src="/assets/slc_hrt02.svg" width={129} height={129} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11 dark:filter dark:invert dark:brightness-[.7] dark:saturate-[1.48] dark:hue-rotate-[180deg]"/>
      </motion.div>
    </section>
  );
}
