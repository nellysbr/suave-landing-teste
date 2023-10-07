import localFont from "next/font/local";
import { BsWhatsapp, BsMessenger, BsTelephoneFill } from "react-icons/bs";

const FuturaLT = localFont({
  src: "../app/fonts/FuturaLT-BookOblique.ttf",
  variable: "--font-futura-book-oblique",
});

const FuturaLTBOLD = localFont({
  src: "../app/fonts/FuturaLT-BoldOblique.ttf",
  variable: "--font-futura-bold-oblique",
});

const LowFooter = () => {
  return (
    <footer className={FuturaLT.className}>
      <div className="w-full bg-custom-low border-top shadow-sm rounded flex items-center justify-center p-2 md:p-4">
        <div className="md:max-w-6xl grid grid-cols-2 gap-2 md:grid-cols-4">
          <div className="flex items-center justify-center md:border-r border-white border-solid p-2">
            <p className="text-white text-xs text-center md:text-left">
              FALE COM <br />
              <span className={FuturaLTBOLD.className}>VENDAS</span>
            </p>
          </div>
          <div className="flex items-center justify-center md:border-r border-white border-solid p-2">
            <BsTelephoneFill
              size={20}
              className="text-white mr-1 md:mr-2 sm:mr-1"
            />
            <p className="text-white ml-1 text-xs text-center md:text-left max-w-[70%] md:max-w-full">
              LIGUE:
              <br className="hidden md:inline" />{" "}
              {/* Quebra de linha apenas na versão web */}
              <span className={FuturaLTBOLD.className}>(16) 3211-6000</span>
            </p>
          </div>
          <div className="flex items-center justify-center md:border-r border-white border-solid p-2">
            <BsWhatsapp size={20} className="text-white mr-1" />
            <p className="text-white ml-1 text-xs text-center md:text-left max-w-[70%] md:max-w-full">
              whatsapp:
              <br className="hidden md:inline" />{" "}
              {/* Quebra de linha apenas na versão web */}
              <span className={FuturaLTBOLD.className}>(16) 98860-9905</span>
            </p>
          </div>

          <div className="flex items-center justify-center border-white border-solid p-2">
            <BsMessenger size={20} className="text-white mr-1" />
            <p className="text-white ml-1 text-xs text-center md:text-left max-w-[70%] md:max-w-full">
              ATENDIMENTO <br />
              <span className={FuturaLTBOLD.className}>MESSENGER</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LowFooter;
