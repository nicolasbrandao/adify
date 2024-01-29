import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().min(1).max(12),
  company: z.string().min(1).max(255),
  position: z.string().min(1).max(255),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
