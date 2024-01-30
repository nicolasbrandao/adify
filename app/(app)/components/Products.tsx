import React from "react";
import ProductBlock from "./ProductBlock";
import ProductsMenu from "./ProductsMenu";

export default function Products() {
  return (
    <section className="mt-8 flex w-full flex-col items-center">
      <div className="mb-8 flex w-full max-w-[1024px] flex-col items-center lg:gap-28">
        <ProductBlock />
        <ProductBlock reverse />
        <ProductBlock />
        <ProductBlock reverse />
      </div>
      <ProductsMenu />
    </section>
  );
}
