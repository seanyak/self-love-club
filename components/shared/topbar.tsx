'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import ThemeToggle from './theme-toggle';

function Topbar() {
  const handleClick = () => {
    window.location.href =
      'https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so';
  };

  return (
    <nav className="topbar dark:bg-[#dbe8da] flex flex-col sm:flex-row justify-between items-center px-3 py-1 bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
      {/* Bus name and logo */}
      <div className="flex items-center w-full sm:w-auto justify-between">
        <div className="bus-name flex items-center">
          <Link href="/" className="flex">
            <Image src="/assets/slc_blocktitle.png" alt="logo" width={120} height={63} />
          </Link>
          <div className="hidden sm:block ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Button for small screens (visible only on small screens) */}
        <div className="sm:hidden ml-4">
          <Button onClick={handleClick} variant="default" size="xl">
            Book Now
          </Button>
        </div>
      </div>

      {/* Bus title for medium screens and larger */}
      <div className="bus-name hidden sm:flex items-center justify-center sm:w-1/3">
        <Link href="/blog" className="flex mx-auto pl-0 sm:pl-10 pt-2">
          <Image src="/assets/slc_bwamt.png" alt="title" width={600} height={72} className="hidden sm:block" />
        </Link>
      </div>

      {/* Book button for larger screens (hidden on small screens) */}
      <div className="book-btn hidden sm:flex items-center sm:w-auto sm:justify-end sm:order-last order-last">
        <Button onClick={handleClick} variant="default" size="xl">
          Book Now
        </Button>
      </div>
    </nav>
  );
}

export default Topbar;
