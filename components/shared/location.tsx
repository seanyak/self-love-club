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
    <section className="location-section text-center pb-14">
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
        <div className="contact-container lg:w-1/2 w-[420px] h-[420px] lg:max-w-none bg-slate-50 shadow-lg rounded-lg overflow-hidden p-6">
          <div className="address-container mb-6">
            <Link 
              href={location.gMap}
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
        <div className="map-container w-[420px] h-[420px] lg:max-w-none shadow-lg rounded-lg">
          <Link 
            href={location.gMap}
            target="_blank">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6597.424334867748!2d-77.9203256!3d34.230367099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f564cd7d33f3%3A0x50787e46b922b8e3!2s2121%20Wrightsville%20Ave%2C%20Wilmington%2C%20NC%2028403!5e0!3m2!1sen!2sus!4v1753198784535!5m2!1sen!2sus"
                width="420"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>            
            {/* 
            <Image
              src='/assets/self-love-club-2121-Wrightsville-Ave-Wilmington.png'
              alt='Self Love Club | 2121 Wrightsville Ave. Wilmington North Carolina 28403'
              width={400}
              height={400}
              className='object-cover w-full h-full rounded-lg shadow-lg'
            />
            */}
          </Link>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Location;
