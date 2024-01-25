import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen pt-14 lg:max-w-[700px] lg:mx-auto">
      <div className=" flex flex-col w-full gap-8 p-4">
        <div>
          <h1 className="font-bold text-[48px] bg-gradient-to-r from-cyan-300 to-gray-200 text-transparent bg-clip-text w-fit">
            Adify
          </h1>
          <p className="text-[24px] text-base-100">
            {
              "Ajudamos empresas que dependem da geração de leads a encontrarem seus indicadores, maturarem os resultados e escalarem no digital"
            }
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col justify-between gap-4">
            <Link
              href="/contato"
              className="btn btn-lg border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-primary-content"
            >
              Contato
            </Link>
            <Link href="/blog" className="btn btn-lg btn-accent btn-outline">
              Artigos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
