"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Footer: React.FC = () => {
  const [addressSelect, setAddressSelect] = useState("default");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setAddressSelect(event.target.value);
  };

  const getAddressText = () => {
    switch (addressSelect) {
      case "default":
        return (
          <span className="mt-2 text-sm text-center">
            Av. Dr. FRANCISCO JUNQUEIRA, 2873 RIBEIRÃO PRETO - SP
          </span>
        );
      case "araraquara":
        return (
          <span className="mt-2 text-sm text-center">
            AV. ALBERTO BENASSI, 2350 ARARAQUARA - SP
          </span>
        );
      default:
        return (
          <span className="mt-2 text-sm text-center">
            Av.Dr. FRANCISCO JUNQUEIRA, 2873 RIBEIRÃO PRETO - SP
          </span>
        );
    }
  };

  return (
    <>
      <section className="w-full h-full bg-white md:h-80 md:-mt-24 z-0 flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-screen-xl mx-auto place-content-center items-center place-items-center md:max-w-[1120px]">
          {/* Column 1 */}
          <div className="col-span-1 md:col-span-1 mx-auto md:mb-0 mb-8 mt-10 flex items-center justify-center w-full">
            <Image
              src="/assets/logo-dakota.png"
              alt="Logo"
              width={135}
              height={50}
            />
          </div>

          {/* Column 2 */}
          <div className="relative col-span-1 md:col-span-1 flex flex-col items-center mx-auto mb-4 md:mb-0 w-full">
            <div className="custom-select-container relative">
              <select
                id="dynamicSelect"
                value={addressSelect}
                onChange={handleSelect}
                style={{
                  transform: "skewX(-12deg)",
                  backgroundImage: "none",
                  backgroundPosition: "right",
                  backgroundSize: "contain",
                  appearance: "none",
                  paddingLeft: "1rem", // Adicionado padding para dar espaço ao ícone
                }}
                className="custom-select bg-no-repeat pl-1 pr-6 text-gray-700 border w-full h-6 border-gray-300 rounded leading-tight focus:outline-none focus:shadow-outline font-bold relative"
              >
                <option value="default" className="font-bold">
                  ATRI - Ribeirão Preto
                </option>
                <option value="araraquara" className="font-bold">
                  ATRI - Araraquara
                </option>
              </select>
              <HiOutlineChevronDoubleDown
                size={15}
                className="absolute right-1 top-1 text-gray-500 pointer-events-none text-custom-low"
              />
            </div>
            <div className="mt-5 text-sm text-center flex items-center">
              <div className="text-custom-low">
                <GiPositionMarker size={40} />
              </div>
              <div>{getAddressText()}</div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 md:col-span-1 flex items-center justify-center text-custom-low mx-auto mb-4 md:mb-0 w-full">
            <a href="#">
              <AiOutlineFacebook size={35} />
            </a>
            <a className="ml-1" href="#">
              <BsInstagram size={29} />
            </a>
            <a className="ml-1" href="#">
              <BsYoutube size={40} />
            </a>
          </div>

          {/* Column 4 */}
          <div className="col-span-1 md:col-span-1 mx-auto mb-4 md:mb-0 flex items-center justify-center w-full">
            <Image
              src="/assets/logo-atri.png"
              width={217}
              height={52}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
