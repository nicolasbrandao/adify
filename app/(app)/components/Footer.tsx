import React from "react";
import Logo from "@/public/logo_transparent.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer footer-center border-t border-accent bg-base-300 p-10">
      <aside>
        <Image src={Logo} height={60} width={60} alt="Logo Adify" />
        <p className="font-bold">
          Adify <br />
          Growth Marketing
        </p>
      </aside>
      <div className="flex flex-col gap-4 text-xs lg:flex-row">
        <Link
          href={"/politica-de-privacidade"}
          className="underline decoration-solid"
        >
          Política de privacidade
        </Link>
        <p>CNPJ 39.234.669/0001-83 Aráras - SP</p>
      </div>
    </footer>
  );
}

export default Footer;
