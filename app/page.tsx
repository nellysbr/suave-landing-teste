import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto h-full">
      <Hero />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-screen-xl mb-20">
          <Image
            src="/assets/inspirado.png"
            alt="car image"
            width={1120}
            height={1000}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-col-4 z-20 mt-20">
        <div className="col-4 flex align-middle justify-center bg-custom-low h-[295px] mb-8">
          <Image
            src="/assets/fiat-car-01.png"
            width={875}
            height={295}
            alt="car01"
            className="object-cover"
          />
        </div>
        <div className="col-4 bg-custom-low h-[295px] mb-8"></div>
        <div className="col-4 bg-custom-low h-[295px] mb-8"></div>
        <div className="col-4 bg-custom-low h-[295px] mb--10"></div>
      </div>
      <Footer />
    </main>
  );
}
