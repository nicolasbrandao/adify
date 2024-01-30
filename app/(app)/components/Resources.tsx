import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Resources() {
  return (
    <section className="flex max-w-[1024px] flex-col">
      <ResourceBlock />
      <ResourceBlock reverse />
      <ResourceBlock />
      <ResourceBlock reverse />
    </section>
  );
}

type ResourceBlockProps = {
  reverse?: boolean;
};

function ResourceBlock({ reverse }: ResourceBlockProps) {
  const mainContainer = classNames(
    "flex flex-col lg:items-center relative",
    reverse ? "lg:flex-row-reverse" : "lg:flex-row",
  );

  const imageContainer = classNames("w-full h-[700px] object-cover");

  const textContainer = classNames(
    "flex flex-col gap-4 p-4 absolute top-0 left-0 lg:static backdrop-blur h-full bg-base-100/40 lg:bg-base-300 place-content-center",
  );

  return (
    <div className={mainContainer}>
      <Image
        src="https://picsum.photos/700/700"
        width={700}
        height={700}
        alt="Shoes"
        className={imageContainer}
      />
      <div className={textContainer}>
        <h2 className="text-[2rem]">Este é um material!</h2>
        <p className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2.5rem] text-transparent">
          ACESSO GRATUITO
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          voluptatem eveniet quasi, tempore adipisci distinctio fugiat accusamus
          porro provident rerum corrupti quas repellendus vero, eligendi
          voluptatum. Expedita nesciunt ratione ad?
        </p>
        <Link href={"#"} className="btn-primary btn flex max-w-[250px]">
          Download
          <ArrowDownTrayIcon className="h-6" />
        </Link>
      </div>
    </div>
  );
}