import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className="flex flex-col lg:flex-row gap-4 my-auto p-4">
      <div className="flex flex-col gap-4 lg:max-w-[380px] mt-12">
        <h1 className="font-bold text-[2rem]">Título do Produto</h1>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur!</p>
        <div className="rounded-2xl p-2 bg-gradient-to-r from-cyan-300 to-gray-200">
          <p className="rounded-xl border-2 border-base-100 bg-base-content text-base-300 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis
            provident pariatur voluptatum voluptate omnis deserunt rerum,
            mollitia vitae sapiente quasi fugiat suscipit debitis tempora enim
            voluptas distinctio nulla minima.
          </p>
        </div>
        <p className="rounded-2xl bg-base-300 p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="rounded-2xl bg-base-300 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eaque atque mollitia eos quod quae, numquam, ullam optio labore beatae
          esse, voluptas sint possimus corrupti.
        </p>
      </div>
      <div className="mockup-window bg-base-300 lg:w-fit h-fit my-auto">
        <Image
          src="https://picsum.photos/700/384"
          width={700}
          height={384}
          alt="Shoes"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
}
