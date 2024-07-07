import Image from "next/image";

const Hero = () => {
    return (
        <div className="sm:mt-0 mt-24 sm:mb-20 "> 
            <Image src="/assets/slc_hero.png" alt="title" width={1440} height={800} className="hero-image" />
        </div>
    );
};

export default Hero;
