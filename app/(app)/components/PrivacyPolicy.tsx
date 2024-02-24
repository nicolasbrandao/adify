import React from "react";
import Image from "next/image";
import Logo from "@/public/logo_transparent.png";
import { sanity } from "@/sanity/lib/client";
import PortableComponents from "./PortableComponents";

export default async function PrivacyPolicy() {
  const privacyPolicyData = await sanity.fetchPrivacyPolicy();
  const privacyPolicy = privacyPolicyData[0];

  return (
    <section className="my-auto max-w-[700px] p-4 pt-14">
      <article className="flex flex-col gap-4">
        <header>
          <h1 className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
            Política de Privacidade
          </h1>
        </header>
        <PortableComponents value={privacyPolicy.text} />
        <footer>
          <p className="flex items-center gap-4 font-bold italic">
            Adify
            <Image src={Logo} height={32} width={32} alt="Logo Adify" />
          </p>
        </footer>
      </article>
    </section>
  );
}
