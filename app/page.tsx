import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1120px]">
      <Hero />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-screen-xl md:mb-20 mt-10 mb-5">
          <Image
            src="/assets/inspirado.png"
            alt="car image"
            width={1120}
            height={1000}
            className="object-cover w-[1000px] rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-wrap align-middle justify-center">
        <div className="grid grid-col-4 md:max-w-[900px] w-full">
          <div
            className="col-4 flex bg-custom-container-01 h-[295px] mb-8 pb-2 max-w-[900px] w-full"
            style={{
              backgroundImage: "url('/assets/fiat-car-01.png')",
              backgroundSize: "cover", // Adjust to your needs
              backgroundPosition: "center left", // Adjust to your needs
              borderBottom: "8px solid #eeb92e",
            }}
          >
            <div className="flex flex-col justify-center justify-items-start place-content-start items-start relative ml-14">
              <div>
                <h1 className="uppercase font-bold text-center bg-custom-container-01 p-2 mb-4">
                  disign
                </h1>
                <p className="uppercase text-white font-bold md:text-xl">
                  autêntico
                  <br /> design
                  <br /> italiano
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-4 flex bg-custom-container-02 h-[295px] mb-8 pb-2 max-w-[900px] w-full"
            style={{
              backgroundImage: "url('/assets/fiat-car-02.png')",
              backgroundSize: "cover", // Adjust to your needs
              backgroundPosition: "center left", // Adjust to your needs
              borderBottom: "8px solid #b61e31",
            }}
          >
            <div className="flex flex-col justify-center justify-items-start place-content-start items-start relative ml-14">
              <div>
                <h1 className="uppercase font-bold text-center bg-custom-container-02 p-2 mb-4">
                  disign
                </h1>
                <p className="uppercase text-white font-bold md:text-xl">
                  interior
                  <br /> sofisticado
                  <br /> e apaixonante
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-4 flex bg-custom-container-03 h-[295px] mb-8 pb-2 max-w-[900px] w-full"
            style={{
              backgroundImage: "url('/assets/fiat-car-03.png')",
              backgroundSize: "cover", // Adjust to your needs
              backgroundPosition: "center left", // Adjust to your needs
              borderBottom: "8px solid #abd8e4",
            }}
          >
            <div className="flex flex-col justify-center justify-items-start place-content-start items-start relative ml-14">
              <div>
                <h1 className="uppercase font-bold text-center bg-custom-container-03 p-2 mb-4">
                  conectividade
                </h1>
                <p className="uppercase text-white font-bold md:text-xl">
                  CENTRAL
                  <br /> MULTIMÍDIA
                  <br /> DE 10,1”
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-4 flex bg-custom-container-04 h-[295px] mb-8 pb-2 max-w-[900px] w-full"
            style={{
              backgroundImage: "url('/assets/fiat-car-04.png')",
              backgroundSize: "cover", // Adjust to your needs
              backgroundPosition: "center left", // Adjust to your needs
              borderBottom: "8px solid #e48193",
            }}
          >
            <div className="flex flex-col justify-center justify-items-start place-content-start items-start relative ml-14">
              <div>
                <h1 className="uppercase font-bold text-center bg-custom-container-04 p-2 mb-4">
                  performance
                </h1>
                <p className="uppercase text-white font-bold md:text-xl">
                  NOVO
                  <br />
                  MOTOR TURBO
                  <br /> 200 FLEX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
