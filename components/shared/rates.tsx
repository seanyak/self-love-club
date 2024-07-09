'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RateCards, rates } from '@/lib/data';
import {motion} from 'framer-motion';

const Rates = () => {
  return (
    <section className='Rates-section'>
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
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-9'>
        {RateCards.map((path, index) => (
          <div key={index} className='p-5 rounded-lg shadow-md bg-[#f8fafc] hover:bg-green-100'>
            <Link href="https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so">
            <Image
              src={path}
              alt={`Rates ${index + 1}`}
              width={250}
              height={296}
              className='object-cover w-full h-full rounded-lg'
            />
            </Link>
          </div>
        ))}
        
      </div>
      <Image src="/assets/slc_hrt05.svg" width={129} height={129} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11"/>
      </motion.div>
    </section>
  );
};

export default Rates;
