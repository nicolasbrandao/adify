import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import ProductAccordion from "./ProductAccordion";

type PropsType = {
  reverse?: boolean;
};

export default function ProductBlock({ reverse }: PropsType) {
  const mainContainer = classNames(
    "flex flex-col lg:items-center",
    reverse ? "lg:flex-row-reverse" : "lg:flex-row",
  );

  return (
    <div className={mainContainer}>
      <Image
        src="https://picsum.photos/700/384"
        width={700}
        height={384}
        alt="Shoes"
        className="h-[384px] w-full object-cover"
      />
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-[2rem]">Este é um produto!</h2>
        <div className="rounded-2xl bg-gradient-to-r from-cyan-300 to-gray-200 p-2">
          <p className="rounded-xl border-2 border-base-100 bg-base-content p-4 text-base-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis
            provident pariatur voluptatum voluptate omnis deserunt rerum,
            mollitia vitae sapiente quasi fugiat suscipit debitis tempora enim
            voluptas distinctio nulla minima.
          </p>
        </div>
        <Link href={"/produtos/teste"} className="btn-primary btn lg:w-full">
          Ver mais
        </Link>
      </div>
      <div className="lg:hidden">
        <ProductAccordion />
      </div>
    </div>
  );
}
