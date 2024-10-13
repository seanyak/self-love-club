import Image from "next/image";

const Background = () => {
  return (
    <section className="background w-[100vw] h-[100vh] fixed top-0 left-0 -z-50">
      <Image 
        src="/assets/slc_bg.png" 
        alt="Background Image"
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className="bg-image  dark:filter dark:invert dark:brightness-[.7] dark:saturate-[1.48] dark:hue-rotate-[180deg]"
      />
    </section>
  );
};

export default Background;
