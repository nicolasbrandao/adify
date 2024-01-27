import ProductBlock from "./ProductBlock";

export default function Products() {
  return (
    <section className="flex flex-col mt-8 gap-4 lg:gap-28 items-center bg-base-content w-full">
      <ProductBlock />
      <ProductBlock reverse/>
      <ProductBlock />
      <ProductBlock reverse/>
    </section>
  );
}
