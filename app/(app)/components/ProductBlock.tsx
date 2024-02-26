"use client";

import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import ProductAccordion from "./ProductAccordion";
import { Service } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";
import makeServiceColor from "@/app/utils/makeServiceColor";
import Reveal from "./animated/Reveal";
import SlideIn from "./animated/SlideIn";

type PropsType = {
  service: Service;
  reverse?: boolean;
};

export default function ProductBlock({ service, reverse }: PropsType) {
  const mainContainer = classNames(
    "flex flex-col lg:items-center justify-center items-center w-full",
    reverse
      ? "lg:flex-row-reverse lg:justify-between"
      : "lg:flex-row lg:justify-between",
  );

  const descriptionContainer = classNames(
    "rounded-2xl bg-gradient-to-r to-gray-200 p-2",
    makeServiceColor(service.color),
  );

  return (
    <div className={mainContainer}>
      <Reveal width="fit">
        <Image
          src={urlForImage(service.image)}
          width={700}
          height={384}
          alt={service.title}
          className="mx-auto w-fit p-4 lg:h-[384px] lg:object-cover lg:p-0"
        />
      </Reveal>

      <div className="flex w-full flex-col gap-4 p-4 lg:max-w-[500px]">
        <Reveal width="fit">
          <h2 className="text-[2rem]">{service.title}</h2>
        </Reveal>
        <Reveal width="full">
          <div className={descriptionContainer}>
            <p className="rounded-xl border-2 border-base-100 bg-base-content p-4 text-base-300">
              {service.description}
            </p>
          </div>
        </Reveal>
        <Reveal width="full">
          <Link
            href={`/servicos/${service.slug.current}`}
            className="btn-primary btn w-full"
          >
            Ver mais
          </Link>
        </Reveal>
      </div>
      <div className="flex w-full lg:hidden">
        <SlideIn width="full">
          <ProductAccordion service={service} />
        </SlideIn>
      </div>
    </div>
  );
}
