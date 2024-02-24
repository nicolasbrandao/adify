import React from "react";
import Products from "../components/Products";

export default function ServicesPage() {
  return (
    <section className="mb-12 mt-20 flex w-full flex-wrap justify-center gap-12">
      {/* @ts-expect-error */}
      <Products />
    </section>
  );
}
