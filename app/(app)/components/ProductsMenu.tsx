import React from "react";
import ProductAccordion from "./ProductAccordion";
import { sanity } from "@/sanity/lib/client";

const services = await sanity.fetchServices();

export default function ProductsMenu() {
  return (
    <div className="hidden w-full flex-col gap-8 lg:flex lg:max-w-[1200px] lg:flex-row lg:justify-between lg:gap-1">
      {services.map((service) => (
        <ProductAccordion key={service._id} service={service} button />
      ))}
    </div>
  );
}
