"use client";

import { gymTrainers } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TrainersContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".trainer-img", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 "
    >
      {gymTrainers.map(({ image, name }) => (
        <div
          key={name}
          className="trainer-img relative h-94 w-full overflow-hidden rounded-2xl transition-shadow shadow-primary/40 duration-300 hover:shadow-2xl"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default TrainersContent;
