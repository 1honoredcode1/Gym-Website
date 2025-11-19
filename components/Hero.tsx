import Image from "next/image";
import HeroContent from "./HeroContent";
const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src="/fitness-hero.jpg"
          alt="hero"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <HeroContent />
    </section>
  );
};

export default Hero;
