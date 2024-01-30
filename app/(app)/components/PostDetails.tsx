import React from "react";

import Image from "next/image";

export default function PostDetails() {
  return (
    <section className="mb-8 mt-16 flex flex-col lg:max-w-[700px]">
      <header>
        <Image
          className="w-full lg:rounded-b-xl"
          src="https://picsum.photos/700/384"
          width={700}
          height={384}
          alt="Shoes"
        />
        <div className="p-4">
          <h1 className="bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
            Título do Post
          </h1>
          <h2 className="my-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quos inventore.
          </h2>
          <p className="text-sm italic">Nome do Autor do Post</p>
          <p className="text-xs italic">1 de janeiro de 2024</p>
        </div>
      </header>
      <article>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          placeat in iste ad repellat dolores at consectetur expedita molestias
          accusantium officiis nihil, eveniet facilis ab architecto quis
          incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          placeat in iste ad repellat dolores at consectetur expedita molestias
          accusantium officiis nihil, eveniet facilis ab architecto quis
          incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          placeat in iste ad repellat dolores at consectetur expedita molestias
          accusantium officiis nihil, eveniet facilis ab architecto quis
          incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          placeat in iste ad repellat dolores at consectetur expedita molestias
          accusantium officiis nihil, eveniet facilis ab architecto quis
          incidunt dolore. Est?
        </p>
        <div className="flex gap-1 p-4">
          <div className="badge badge-accent badge-outline">#Marketing</div>
          <div className="badge badge-accent badge-outline">#SEO</div>
          <div className="badge badge-accent badge-outline">#Growth</div>
        </div>
      </article>
      <footer></footer>
    </section>
  );
}
