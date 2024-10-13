import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const Footer = () => {
  return (
    <footer className="bg-[#2b281b] text-[#fdfae8] pt-4 w-[100vw] absolute inset-x-0 bottom-0 ">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-row items-center  justify-between px-24">
          <div>
            <Link href="https://book.squareup.com/appointments/ztx8b05cyeal1q/location/L74GM8H49A0WS/services?buttonTextColor=000000&color=a9fae0&locale=en&referrer=so">
              <h3 className="footer-title">BOOK</h3>
            </Link>
          </div>
          <div>
            <Link href="/">
              <h3 className="footer-title">ABOUT</h3>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <h3 className="footer-title">BLOG</h3>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p>Copyright © 2024 Self Love Club Bodyworks & Massage. Website created by <Link href="https://yaksean.com" className='hover:text-[#6eadb6]'>Yaksean</Link></p>
          
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
