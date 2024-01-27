import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo_svg.svg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen pt-14 lg:max-w-[700px] lg:mx-auto">
      <div className=" flex flex-col w-full gap-8 p-4">
        <div>
          <h1 className="font-bold text-[48px] bg-gradient-to-r from-cyan-300 to-gray-200 text-transparent bg-clip-text w-fit">
            Adify
          </h1>
          <p className="text-[24px]">
            {
              "Ajudamos empresas que dependem da geração de leads a encontrarem seus indicadores, maturarem os resultados e escalarem no digital"
            }
          </p>
        </div>
        <div>
          <div className="flex justify-between gap-4">
            <Link
              href="/contato"
              className="btn btn-md w-full flex-1 border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300"
            >
              Contato
            </Link>
            <Link
              href="/blog"
              className="btn btn-md w-full flex-1 btn-accent btn-outline"
            >
              Artigos
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 w-full">
        <div className="mockup-window bg-base-100 w-full h-fit my-auto">
          <Image
            src="https://picsum.photos/700/384"
            width={700}
            height={384}
            alt="Shoes"
            className="object-cover w-full h-fit"
          />
        </div>
      </div>
    </section>
  );
}
