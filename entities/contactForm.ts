import { z } from "zod";

const parsePhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, "");
};

const containsSpecialCharacters = (value: string) => {
  const allowedPattern = /^[a-zA-Z0-9\s]*$/;
  return !allowedPattern.test(value);
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Por favor, informe seu nome." })
    .max(255)
    .refine((val) => !containsSpecialCharacters(val), {
      message: "O nome não pode conter caracteres especiais.",
    }),
  email: z.string().email({ message: "Por favor, informe um e-mail válido." }),
  phone: z
    .string()
    .min(1, { message: "Por favor, informe seu telefone." })
    .max(16)
    .refine((val) => parsePhoneNumber(val).length === 11, {
      message: "Telefone deve ter 11 dígitos",
    })
    .transform(parsePhoneNumber),
  company: z
    .string()
    .min(1, { message: "Por favor, informe o nome da empresa." })
    .max(255)
    .refine((val) => !containsSpecialCharacters(val), {
      message: "O nome da empresa não pode conter caracteres especiais.",
    }),
  position: z
    .string()
    .min(1, { message: "Por favor, informe seu cargo." })
    .max(255)
    .refine((val) => !containsSpecialCharacters(val), {
      message: "O cargo não pode conter caracteres especiais.",
    }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
