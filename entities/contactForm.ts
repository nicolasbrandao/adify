import { z } from "zod";

const parsePhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, "");
};

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Por favor, informe seu nome." }).max(255),
  email: z.string().email({ message: "Por favor, informe um e-mail válido." }),
  phone: z
    .string()
    .min(1, { message: "Por favor, informe seu telefone." })
    .transform(parsePhoneNumber)
    .refine((val) => val.length <= 12, {
      message: "Telefone não pode ter mais que 12 digitos",
    }),
  company: z
    .string()
    .min(1, { message: "Por favor, informe o nome da empresa." })
    .max(255),
  position: z
    .string()
    .min(1, { message: "Por favor, informe seu cargo." })
    .max(255),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
