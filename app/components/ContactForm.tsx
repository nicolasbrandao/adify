import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  return (
    <section className="p-4 my-auto pt-12">
      <h1 className="text-[2rem] font-bold w-[300px] bg-gradient-to-r from-cyan-300 to-gray-200 text-transparent bg-clip-text">
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
            className="input input-bordered w-full max-w-xs bg-base-100 border-primary focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input input-bordered w-full max-w-xs bg-base-100 border-primary focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input input-bordered w-full max-w-xs bg-base-100 border-primary focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input input-bordered w-full max-w-xs bg-base-100 border-primary focus:border-primary"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Seu nome"
            className="input input-bordered w-full max-w-xs bg-base-100 border-primary focus:border-primary"
          />
        </label>
        <button className="btn w-full bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300 mt-4 border-none">
          Enviar <PaperAirplaneIcon className="h-5" />
        </button>
      </form>
    </section>
  );
}
