import { z } from "zod";

export const SchemaSignInOfUser = z.object({
  email: z.string().email({ message: "Endereço de e-mail inválido!" }).trim(),
  password: z
    .string()
    .min(3, { message: "Senha deve ter no mínimo 3 caractere!" })
    .max(50, { message: "Senha deve ter no máximo 50 caractere!" })
    .trim(),
});
