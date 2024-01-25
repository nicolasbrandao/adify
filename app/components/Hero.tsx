export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen pt-14 lg:max-w-[700px] lg:mx-auto">
      <div className=" flex flex-col w-full gap-8 p-4">
        <div>
          <h1 className="font-bold text-[48px]">Adify</h1>
          <p className="text-[24px]">
            {
              "Ajudamos empresas que dependem da geração de leads a encontrarem seus indicadores, maturarem os resultados e escalarem no digital"
            }
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col justify-between gap-4">
            <a
              href="#"
              className="btn btn-lg border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base-300"
            >
              Contato
            </a>
            <a href="#" className="btn btn-lg btn-primary btn-outline">
              Artigos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}