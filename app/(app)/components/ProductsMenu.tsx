import React from "react";
import ProductAccordion from "./ProductAccordion";
import { sanity } from "@/sanity/lib/client";

export default async function ProductsMenu() {
  const services = await sanity.fetchServices();

  return (
    <div className="hidden w-full flex-col gap-8 px-4 lg:flex lg:max-w-[1200px] lg:flex-row lg:justify-between lg:gap-8">
      {services.map((service) => (
        <ProductAccordion key={service._id} service={service} button />
      ))}
    </div>
  );
}
