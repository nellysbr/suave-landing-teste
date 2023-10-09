import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1120px]">
      <Hero />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-screen-xl mb-20">
          <Image
            src="/assets/inspirado.png"
            alt="car image"
            width={1120}
            height={1000}
            className="object-cover w-[1000px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap align-middle justify-center">
        <div className="grid grid-col-4 max-w-[900px]">
          <div className="col-4 flex align-middle bg-custom-container-01 h-[295px] mb-8 justify-center pb-2 max-w-[900px]">
            <Image
              src="/assets/fiat-car-01.png"
              width={900}
              height={295}
              alt="motor fiat"
              className="w-full object-cover object-fit"
            />
          </div>
          <div className="col-4 bg-custom-container-02 h-[295px] mb-8 flex align-middle justify-center pb-2 max-w-[900px]">
            <Image
              src="/assets/fiat-car-02.png"
              width={900}
              height={295}
              alt="motor fiat"
              className="w-full object-cover object-fit"
            />
          </div>
          <div className="col-4 bg-custom-container-03 h-[295px] mb-8 flex align-middle justify-center pb-2 max-w-[900px]">
            <Image
              src="/assets/fiat-car-03.png"
              width={900}
              height={295}
              alt="motor fiat"
              className="w-full object-cover object-fit"
            />
          </div>
          <div className="col-4 bg-custom-container-04 h-[295px] z-20 flex align-middle justify-center pb-2 w-[900px]">
            <Image
              src="/assets/fiat-car-04.png"
              width={900}
              height={295}
              alt="motor fiat"
              className="w-full object-cover object-fit"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
