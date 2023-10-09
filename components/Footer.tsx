"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer: React.FC = () => {
  const [addressSelect, setAddressSelect] = useState("default");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setAddressSelect(event.target.value);
  };

  const getAddressText = () => {
    switch (addressSelect) {
      case "default":
        return (
          <p className="mt-2 text-sm text-center w-full">
            Av. Dr. FRANCISCO JUNQUEIRA, 2873
            <br />
            RIBEIRÃO PRETO - SP
          </p>
        );
      case "araraquara":
        return (
          <p className="mt-2 text-sm text-center w-full">
            AV. ALBERTO BENASSI, 2350
            <br />
            ARARAQUARA - SP
          </p>
        );
      default:
        return (
          <p className="mt-2 text-sm text-center w-full">
            Av.Dr. FRANCISCO JUNQUEIRA, 2873
            <br />
            RIBEIRÃO PRETO - SP
          </p>
        );
    }
  };

  const columnContent = [
    <Image
      key={1}
      src="/assets/logo-dakota.png"
      alt="Logo"
      width={150}
      height={150}
    />,
    <div key={2} className="w-full">
      <select
        id="dynamicSelect"
        value={addressSelect}
        onChange={handleSelect}
        style={{
          transform: "skewX(-12deg)",
          backgroundImage: "url(/assets/seta-select)",
        }}
        className="bg-no-repeat w-full pl-3 text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:shadow-outline font-bold"
      >
        <option value="default" className="font-bold">
          ATRI - Ribeirão Preto
        </option>
        <option value="araraquara" className="font-bold">
          ATRI - Araraquara
        </option>
      </select>
      {getAddressText()}
    </div>,
    <div key={3} className="flex items-center justify-center text-custom-low">
      <a href="#">
        <AiOutlineFacebook size={23} />
      </a>
      <a className="ml-1" href="#">
        <BsInstagram size={19} />
      </a>
      <a className="ml-1" href="#">
        <BsYoutube size={24} />
      </a>
    </div>,
    <div key={4}>
      <Image src="/assets/logo-atri.png" width={100} height={100} alt="logo" />
    </div>,
  ];

  return (
    <>
      <section className="w-full md:flex z-0 bg-white h-80">
        <div className="w-full flex items-center justify-center">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
            {columnContent.map((content, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-center">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
