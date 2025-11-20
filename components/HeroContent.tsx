"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroContent = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative z-10 text-white text-center px-4 max-w-3xl md:max-w-4xl space-y-6"
    >
      <h1 className="hero-item text-3xl sm:text-4xl lg:text-6xl font-black font-heading leading-tight">
        Manifest your true self,{" "}
        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Become Your Best Version
        </span>
      </h1>

      <p className="hero-item text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        Join our community today. Build strength, confidence, and healthier
        habits with expert coaching and a supportive atmosphere.{" "}
        <a
          href="#about"
          className="
            relative
            inline-block
            text-white
            font-medium
            hover:text-primary
            px-1
            transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-full after:bg-primary
            after:origin-left after:scale-x-0
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
        >
          Start your transformation now.
        </a>
      </p>

      <div className="hero-item flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button size="lg" variant="primary" className="w-full sm:w-auto">
          Start Now
        </Button>

        {/* shadcn style: asChild so Link is the actual element */}
        <Button
          size="lg"
          variant="secondary"
          className="w-full sm:w-auto"
          asChild
        >
          <Link href="#about">View Plans</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
