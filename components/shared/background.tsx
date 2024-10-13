import Image from "next/image";

const Background = () => {

  return (
    <section className="background w-[100vw] h-[100vh] fixed top-0 left-0">
      <Image
        src="/assets/slc_bgDark.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-image  -z-50"
      />
      <Image
        src="/assets/slc_bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-image -z-10 dark:hidden"
      />
    </section>
  );
};

export default Background;
