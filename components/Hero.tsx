import React from "react";
import Image from "next/image";
import Formulario from "./FormNews";

const Hero = () => {
  return (
    <div className="grid grid-col-4">
      <div className="col-4 md:col-3 lg:col-3 flex align-middle justify-center w-full">
        <Image
          src="/assets/light-car.png"
          alt="car image"
          width={1120}
          height={1000}
          className="object-cover object-fit w-full h-full z-0 border-none rounded-md"
        />
        <div className="md:flex lg:flex md:col-span-1 lg:col-span-1 hidden p-4 shadow w-full bg-custom-low rounded-bl-3xl h-full md:-ml-44 z-20">
          <Formulario />
        </div>
      </div>
      <div className="lg:hidden sm:col-1 flex col-4 p-4 shadow w-full bg-custom-low md:rounded-bl-3xl rounded-xl h-full z-20">
        <Formulario />
      </div>
    </div>
  );
};

export default Hero;
