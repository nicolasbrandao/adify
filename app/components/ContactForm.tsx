"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  ContactForm as ContactFormType,
  contactFormSchema,
} from "@/entities/contactForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { useState } from "react";

export default function ContactForm() {
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema.strict()),
  });
  const registerWithMask = useHookFormMask(register);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await fetch("/api/sheets", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setSubmitError(false);
      reset();
    } else {
      setSubmitError(true);
    }
  };

  return (
    <section className="my-auto p-4 pt-12">
      <h1 className="w-[300px] bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-[2rem] font-bold text-transparent">
        Preencha o fomulário e entraremos em contato!
      </h1>
      {submitError ? (
        <p className="text-sm text-red-500">Erro ao enviar formulário.</p>
      ) : (
        isSubmitSuccessful && (
          <div className="badge badge-success gap-2 text-base-300">
            <CheckCircleIcon className="h-[15px] text-base-300" />
            Enviado com sucesso!
          </div>
        )
      )}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs" htmlFor="name">
          <div className="label">
            <span className="label-text">Nome</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Informe seu nome"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="email">
          <div className="label">
            <span className="label-text">E-mail</span>
          </div>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="phone">
          <div className="label">
            <span className="label-text">Telefone</span>
          </div>
          <input
            type="tel"
            {...registerWithMask("phone", ["(99) 9 9999 9999"])}
            placeholder="(99) 9 9999 9999"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="company">
          <div className="label">
            <span className="label-text">Empresa</span>
          </div>
          <input
            type="text"
            id="company"
            placeholder="Nome da empresa"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-sm text-red-500">{errors.company.message}</p>
          )}
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="position">
          <div className="label">
            <span className="label-text">Cargo</span>
          </div>
          <input
            type="text"
            id="position"
            placeholder="Seu cargo na empresa"
            className="input-bordered input w-full max-w-xs border-primary bg-base-100 focus:border-primary"
            {...register("position")}
          />
          {errors.position && (
            <p className="text-sm text-red-500">{errors.position.message}</p>
          )}
        </label>
        <button
          className="btn mt-4 w-full border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300"
          type="submit"
        >
          Enviar{" "}
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <PaperAirplaneIcon className="h-5" />
          )}
        </button>
      </form>
    </section>
  );
}
