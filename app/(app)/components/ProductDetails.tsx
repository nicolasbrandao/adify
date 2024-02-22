import React from "react";
import Image from "next/image";
import ProductAccordion from "./ProductAccordion";
import { Service } from "@/types/types";
import classNames from "classnames";
import { urlForImage } from "@/sanity/lib/image";
import makeServiceColor from "@/app/utils/makeServiceColor";
import SocialShare from "./SocialShare";

const url = process.env.APP_URL ?? "";

type Props = {
  service: Service;
};

export default function ProductDetails({ service }: Props) {
  const descriptionContainer = classNames(
    `rounded-2xl bg-gradient-to-r to-gray-200 p-2`,
    makeServiceColor(service.color),
  );
  return (
    <section className="my-auto mt-14 flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="mt-12 flex flex-col gap-4 lg:max-w-[380px]">
          <h1 className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
            {service.title}
          </h1>
          <p className="font-bold">{service.subtitle}</p>
          <div className={descriptionContainer}>
            <p className="rounded-xl border-2 border-base-100 bg-base-content p-4 text-base-300">
              {service.description}
            </p>
          </div>
          <p className="rounded-2xl bg-base-100 p-4">{service.detailsOne}</p>
          <p className="rounded-2xl bg-base-100 p-4">{service.detailsTwo}</p>
        </div>
        <div className="mockup-window my-auto h-fit bg-base-100 lg:w-fit">
          <Image
            src={urlForImage(service.image)}
            width={700}
            height={384}
            alt={service.title}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <ProductAccordion service={service} />
      </div>
      <SocialShare
        baseUrl={url}
        slug={service.slug.current}
        type="servico"
        message={service.title}
      />
    </section>
  );
}
