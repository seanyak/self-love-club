import Image from "next/image";

const Hero = () => {
    return (
        <div className="pt-[4rem] sm:mb-20 "> 
            <Image src="/assets/slc_heroFeelBetter.png" alt="title" width={1440} height={720} className="hero-image" />
        </div>
    );
};

export default Hero;
