import React from "react";
import ProductBlock from "./ProductBlock";
import ProductsMenu from "./ProductsMenu";

export default function Products() {
  return (
    <section className="mt-8 flex w-full flex-col items-center gap-4 lg:gap-28">
      <ProductBlock />
      <ProductBlock reverse />
      <ProductBlock />
      <ProductBlock reverse />
      <ProductsMenu />
    </section>
  );
}
