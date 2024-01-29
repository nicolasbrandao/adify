import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  return (
    <section className="my-auto p-4 pt-12">
      <h1 className="w-[300px] bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
        Preencha o fomulário e entraremos em contato!
      </h1>
      <form className="flex flex-col gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
        </label>
        <button className="btn mt-4 w-full border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300">
          Enviar <PaperAirplaneIcon className="h-5" />
        </button>
      </form>
    </section>
  );
}
