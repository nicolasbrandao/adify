"use client";

import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import ProductAccordion from "./ProductAccordion";
import { Service } from "@/types/types";
import { urlForImage } from "@/sanity/lib/image";
import makeServiceColor from "@/app/utils/makeServiceColor";

type PropsType = {
  service: Service;
  reverse?: boolean;
};

export default function ProductBlock({ service, reverse }: PropsType) {
  const mainContainer = classNames(
    "flex flex-col lg:items-center w-full",
    reverse ? "lg:flex-row-reverse" : "lg:flex-row",
  );

  const descriptionContainer = classNames(
    "rounded-2xl bg-gradient-to-r to-gray-200 p-2",
    makeServiceColor(service.color),
  );

  return (
    <div className={mainContainer}>
      <Image
        src={urlForImage(service.image)}
        width={700}
        height={384}
        alt={service.title}
        className="w-full lg:h-[384px] lg:object-cover"
      />
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-[2rem]">{service.title}</h2>
        <div className={descriptionContainer}>
          <p className="rounded-xl border-2 border-base-100 bg-base-content p-4 text-base-300">
            {service.description}
          </p>
        </div>
        <Link
          href={`/servicos/${service.slug.current}`}
          className="btn-primary btn lg:w-full"
        >
          Ver mais
        </Link>
      </div>
      <div className="flex w-full lg:hidden">
        <ProductAccordion service={service} />
      </div>
    </div>
  );
}
