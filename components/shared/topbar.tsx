'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from '../ui/button'

function Topbar() {
    const handleClick = () => {
        window.location.href = 'https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so'; 
      };
    return (
        <nav className="topbar flex flex-col sm:flex-row justify-between items-center px-2 py-1 bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
            <div className="home-icon flex items-center sm:w-1/3">
                <Link href="/" className="flex">
                    <Image src="/assets/slc_iconblu.png" alt="logo" width={47} height={47} className="hidden sm:block" />
                </Link>
            </div>
            <div className="bus-name flex items-center sm:w-1/3">
                <Link href="/" className="flex mx-auto pl-0 sm:pl-10 pt-2">
                    <Image src="/assets/slc_title.png" alt="title" width={283} height={47} />
                </Link>
            </div>
            <div className="book-btn flex items-center sm:w-1/3 sm:justify-end sm:order-last order-last mt-2 sm:mt-0">
                <Button onClick={handleClick} variant="default" size="xl">
                    Book Now
                </Button>
            </div>
        </nav>
    );
}

export default Topbar;
