import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-center mt-8 gap-4 items-center bg-base-100 w-full p-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
