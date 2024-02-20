import React from "react";
import Link from "next/link";
import { Service } from "@/types/types";

type Props = {
  service: Service;
  button?: boolean;
};

export default function ProductAccordion({ service, button = false }: Props) {
  return (
    <div className="mb-10 flex flex-1 flex-col lg:justify-between">
      <div className="mt-10 w-full">
        <h2 className="mx-4 my-1 text-xl text-accent">
          {service.title}
        </h2>
        <div className="border-b border-slate-500">
          {service.products.map((product, index) => (
            <div
              key={index}
              className="collapse-arrow collapse rounded-none border-t border-slate-500"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title">{product.title}</div>
              <div className="collapse-content">
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {button && (
        <Link
          href={`/servicos/${service.slug.current}`}
          className="btn-primary btn btn-xs m-2 w-fit"
        >
          Ver mais
        </Link>
      )}
    </div>
  );
}
