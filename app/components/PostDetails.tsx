import Image from "next/image"

export default function PostDetails() {
  return (
    <section className="flex flex-col mt-16 mb-8 lg:max-w-[700px]">
      <header>
        <Image className="lg:rounded-b-xl w-full" src="https://picsum.photos/700/384" width={700} height={384} alt="Shoes" />
        <div className="p-4">
          <h1 className="text-[2rem] font-bold">Título do Post</h1>
          <h2 className="my-2 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos inventore.</h2>
          <p className="italic text-sm">Nome do Autor do Post</p>
          <p className="italic text-xs">1 de janeiro de 2024</p>
        </div>
      </header>
      <article>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat in iste ad repellat dolores at consectetur expedita molestias accusantium officiis nihil, eveniet facilis ab architecto quis incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat in iste ad repellat dolores at consectetur expedita molestias accusantium officiis nihil, eveniet facilis ab architecto quis incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat in iste ad repellat dolores at consectetur expedita molestias accusantium officiis nihil, eveniet facilis ab architecto quis incidunt dolore. Est?
        </p>
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat in iste ad repellat dolores at consectetur expedita molestias accusantium officiis nihil, eveniet facilis ab architecto quis incidunt dolore. Est?
        </p>
        <div className="flex gap-1 p-4">
          <div className="badge badge-accent badge-outline">#accent</div>
          <div className="badge badge-accent badge-outline">#accent</div>
          <div className="badge badge-accent badge-outline">#accent</div>
        </div>
      </article>
      <footer>

      </footer>
    </section>
  )
}