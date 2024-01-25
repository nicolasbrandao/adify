import ProductCard from "../components/ProductBlock";

export default function ProductsPage() {
  return (
    <section className="flex gap-12 mt-20 flex-wrap justify-center p-4 w-full max-w-[700px]">
      <ProductBlock />
      <div className="divider-horizontal" />
      <ProductBlock />
      <div className="divider-horizontal" />
      <ProductBlock />
      <div className="divider-horizontal" />
      <ProductBlock />
    </section>
  );
}

function ProductBlock() {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-4">
      <ProductCard />
      <div className="flex flex-col gap-4 flex-1">
        <div className="rounded-2xl p-2 bg-gradient-to-r from-cyan-300 to-gray-200">
          <p className="rounded-xl border-2 border-base-100 bg-base-content text-base-300 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis
            provident pariatur voluptatum voluptate omnis deserunt rerum,
            mollitia vitae sapiente quasi fugiat suscipit debitis tempora.
          </p>
        </div>
        <p className="rounded-2xl bg-base-300 p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
