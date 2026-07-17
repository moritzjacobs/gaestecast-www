import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte gebt euren Namen an."),
  email: z.string().trim().email("Das sieht nicht nach einer gültigen E-Mail-Adresse aus."),
  date: z.string().trim().optional(),
  message: z.string().trim().min(1, "Erzählt mir kurz von eurem Tag."),
});

export type ContactPayload = z.infer<typeof contactSchema>;
