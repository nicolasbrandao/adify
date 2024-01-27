import ProductBlock from "./ProductBlock";
import ProductsMenu from "./ProductsMenu";

export default function Products() {
  return (
    <section className="flex flex-col mt-8 gap-4 lg:gap-28 items-center w-full">
      <ProductBlock />
      <ProductBlock reverse />
      <ProductBlock />
      <ProductBlock reverse />
      <ProductsMenu />
    </section>
  );
}
