import "../styles/globals.css";
import type { Metadata } from "next";

//fonts
import { Montserrat } from "next/font/google";

//components
import Header from "@/components/Header";
import LowFooter from "@/components/LowFooter";
import Footer from "@/components/Footer";

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiat - Landing suave",
  description: "Lading page teste técnico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={montSerrat.className}>
        <Header />
        {children}
        <Footer />
        <LowFooter />
      </body>
    </html>
  );
}
