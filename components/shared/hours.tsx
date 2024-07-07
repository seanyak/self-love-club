"use client";

import React from "react";
import { hours } from "@/lib/data";
import SectionHeading from "./section-heading";
import Link from "next/link";
import Image from "next/image";


const Hours = () => {
  return (
    <section className="hours-section pt-12 scroll-mt-28 text-center">
      <SectionHeading>Hours</SectionHeading>
      <p className="font-thin">BY APPOINTMENT ONLY</p>
      <Link href="https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so">
      <div className="hours-container bg-slate-50 mx-auto x`xrounded-lg overflow-hidden">
        <ul className="divide-y divide-light-4">
          {hours.map((hour, index) => (
            <li key={index} className="hour-item px-6 py-4">
              <div className="flex justify-between items-center">
                <span className="day-name text-lg p-4 font-medium text-dark-2">{hour.day}</span>
                <span className="time-range text-lg p-4 mt-2 text-dark-3">
                  {hour.start} - {hour.end}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </Link>
      <Image src="/assets/slc_hrt04.svg" width={129} height={129} alt="Self Love Club massage and bodyworks | Wilmington, NC" className="mx-auto pt-11"/>

    </section>
  );
};

export default Hours;
