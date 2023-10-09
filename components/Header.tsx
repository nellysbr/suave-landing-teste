import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="w-full bg-white border-bottom shadow-sm rounded h-24 flex items-center justify-center">
        <Image
          src="/assets/logo-atri.png"
          alt="Logo"
          width={150}
          height={150}
          id="teste"
        />
      </div>
    </header>
  );
};

export default Header;
