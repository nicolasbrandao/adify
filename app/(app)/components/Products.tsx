import React from "react";
import ProductBlock from "./ProductBlock";
import ProductsMenu from "./ProductsMenu";
import { sanity } from "@/sanity/lib/client";

const services = await sanity.fetchServices();

export default function Products() {
  return (
    <section className="mt-8 flex w-full flex-col items-center">
      <div className="mb-8 flex w-full max-w-[1200px] flex-col items-center gap-10">
        {services.map((service, index) => (
          <ProductBlock
            key={service._id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <ProductsMenu />
    </section>
  );
}
