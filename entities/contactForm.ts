import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Por favor, informe seu nome." }).max(255),
  email: z.string().email({ message: "Por favor, informe um e-mail válido." }),
  phone: z
    .string()
    .min(1, { message: "Por favor, informe seu telefone." })
    .max(12),
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
