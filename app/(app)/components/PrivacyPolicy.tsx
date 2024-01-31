import React from "react";
import Image from "next/image";
import Logo from "@/public/logo_transparent.png";
import { sanity } from "@/sanity/lib/client";
import PortableComponents from "./PortableComponents";

const aboutData = await sanity.fetchAbout();
const about = aboutData[0];

export default function PrivacyPolicy() {
  return (
    <section className="my-auto max-w-[700px] p-4 pt-14">
      <article className="flex flex-col gap-4">
        <header>
          <h1 className="text-[2rem] font-bold">Política de Privacidade</h1>
        </header>
        <PortableComponents value={about.text} />
        <footer>
          <p className="flex items-center gap-4 font-bold italic">
            {about.author}
            <Image src={Logo} height={32} width={32} alt="Logo Adify" />
          </p>
        </footer>
      </article>
    </section>
  );
}
