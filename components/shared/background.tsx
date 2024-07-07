import Image from "next/image";

const Background = () => {
  return (
    <section className="background w-[100vw] h-[100vh] fixed top-0 left-0 -z-50">
      <Image 
        src="/assets/slc_bgtrans.png" 
        alt="Background Image"
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className="bg-image"
      />
    </section>
  );
};

export default Background;
