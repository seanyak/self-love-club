"use client";

import React from "react";
import { location, tel, email } from "@/lib/data";
import SectionHeading from "./section-heading";
import { MapPin, Phone, Mail } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';

const Location = () => {
  return (
    <section className="location-section text-center pb-11">
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
      <SectionHeading>Location</SectionHeading>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:w-[60vw] mx-auto">
        <div className="map-container w-full lg:w-1/2 max-w-[80vw] lg:max-w-none">
          <Link 
            href="https://www.google.com/maps/dir/?api=1&destination=1608+Queen+St+Wilmington+NC+28401"
            target="_blank">
            <Image
              src='/assets/slc_map.png'
              alt='Self Love Club | location map'
              width={400}
              height={400}
              className='object-cover w-full h-full rounded-lg shadow-lg'
            />
          </Link>
        </div>
        <div className="contact-container w-full lg:w-1/2 max-w-[80vw] lg:max-w-none bg-slate-50 shadow-lg rounded-lg overflow-hidden p-6">
          <div className="address-container mb-6">
            <Link 
              href="https://www.google.com/maps/dir/?api=1&destination=1608+Queen+St+Wilmington+NC+28401"
              target="_blank">
              <MapPin className="icon inline-block text-primary-500" size={24} />
              <h3 className="text-xl font-semibold text-dark-2 mt-4">Visit Us</h3>
              <p className="text-lg text-dark-3 mt-2">
                {location.street},<br />
                {location.city}, {location.state} {location.zip}
              </p>
            </Link>
          </div>
          <div className="phone-container mb-6">
            <Phone className="icon inline-block text-primary-500" size={24} />
            <h3 className="text-xl font-semibold text-dark-2 mt-4">Call Us</h3>
            <p className="text-lg text-dark-3 mt-2">
              <a href={`tel:${tel.tel}`} className="hover:text-primary-500">
                {tel.tel}
              </a>
            </p>
          </div>
          <div className="email-container">
            <Mail className="icon inline-block text-primary-500" size={24} />
            <h3 className="text-xl font-semibold text-dark-2 mt-4">Email Us</h3>
            <p className="text-lg text-dark-3 mt-2">
              <a href={`mailto:${email.email}`} className="hover:text-primary-500">
                {email.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Location;
