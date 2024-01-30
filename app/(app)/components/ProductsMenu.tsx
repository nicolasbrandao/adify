import React from "react";
import ProductAccordion from "./ProductAccordion";

export default function ProductsMenu() {
  return (
    <div className="hidden w-full flex-col gap-4 lg:flex lg:max-w-[1000px] lg:flex-row lg:justify-between lg:gap-1">
      <ProductAccordion button />
      <ProductAccordion button />
      <ProductAccordion button />
      <ProductAccordion button />
    </div>
  );
}
