import React from "react";
import Image from "next/image";
import Formulario from "./FormNews";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Imagem ocupando 3 colunas em telas grandes */}
        <div className="col-span-1 md:col-span-3">
          <Image
            src="/assets/light-car.png"
            alt="car image"
            width={1120}
            height={1000}
          />
        </div>

        {/* Formulário ocupando 1 coluna em telas grandes */}
        <div className="col-span-1 md:col-span-1">
          <div className="p-4 shadow bg-custom-low rounded-bl-3xl h-full">
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
