import Image from "next/image";
import ProductAccordion from "./ProductAccordion";

export default function ProductDetails() {
  return (
    <section className="my-auto flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="mt-12 flex flex-col gap-4 lg:max-w-[380px]">
          <h1 className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
            Título do Produto
          </h1>
          <p className="font-bold">Lorem ipsum dolor sit amet consectetur!</p>
          <div className="rounded-2xl bg-gradient-to-r from-cyan-300 to-gray-200 p-2">
            <p className="rounded-xl border-2 border-base-100 bg-base-content p-4 text-base-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis
              provident pariatur voluptatum voluptate omnis deserunt rerum,
              mollitia vitae sapiente quasi fugiat suscipit debitis tempora enim
              voluptas distinctio nulla minima.
            </p>
          </div>
          <p className="rounded-2xl bg-base-100 p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="rounded-2xl bg-base-100 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eaque atque mollitia eos quod quae, numquam, ullam optio labore
            beatae esse, voluptas sint possimus corrupti.
          </p>
        </div>
        <div className="mockup-window my-auto h-fit bg-base-100 lg:w-fit">
          <Image
            src="https://picsum.photos/700/384"
            width={700}
            height={384}
            alt="Shoes"
            className="w-full object-cover"
          />
        </div>
      </div>
      <ProductAccordion />
    </section>
  );
}
