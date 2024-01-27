import ProductAccordion from "./ProductAccordion";

export default function ProductsMenu() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-1 w-full lg:max-w-[1000px]">
      <ProductAccordion button />
      <ProductAccordion button />
      <ProductAccordion button />
      <ProductAccordion button />
    </div>
  );
}
