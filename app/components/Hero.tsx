import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo_svg.svg";

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center pt-14 lg:mx-auto lg:max-w-[700px]">
      <div className=" flex w-full flex-col gap-8 p-4">
        <div>
          <h1 className="w-fit bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[48px] font-bold text-transparent">
            Adify
          </h1>
          <p className="text-balance text-pretty text-[24px]">
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
              className="btn-accent btn-outline btn btn-md w-full flex-1"
            >
              Artigos
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="mockup-window my-auto h-fit w-full bg-base-100">
          <Image
            src="https://picsum.photos/700/384"
            width={700}
            height={384}
            alt="Shoes"
            className="h-fit w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
