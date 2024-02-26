import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sanity } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Reveal from "./animated/Reveal";

export default async function Hero() {
  const heroData = await sanity.fetchHero();
  const hero = heroData[0];

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center border pt-14 lg:mx-auto lg:max-w-[700px]">
      <div className=" flex w-full flex-col gap-8 p-4">
        <div>
          <Reveal>
            <h1 className="w-fit bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[5rem] font-bold text-transparent">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-balance text-pretty text-[24px]">
              {hero.subtitle}
            </p>
          </Reveal>
        </div>
        <Reveal width="full">
          <div className="flex justify-between gap-4">
            <Link
              href="/contato"
              className="btn btn-md w-full flex-1 border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300"
            >
              Contato
            </Link>
            <Link
              href="/blog"
              className="btn-accent btn-outline btn btn-md w-full flex-1"
            >
              Artigos
            </Link>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className="w-full px-4">
          <div className="mockup-window my-auto h-fit w-full bg-base-100">
            <Image
              src={urlForImage(hero.image)}
              width={700}
              height={384}
              alt="Shoes"
              className="h-fit w-full object-cover"
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
