import { z } from "zod";

export const SchemaManagerClient = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caractere!" })
    .max(50, { message: "Nome deve ter no máximo 50 caractere!" })
    .trim(),
  email: z.string().email({ message: "Endereço de e-mail inválido!" }).trim(),
  phone: z
    .string({ required_error: "Telefone obrigatório!" })
    .min(10, { message: "Telefone deve ter no mínimo 10 caractere!" })
    .max(15, { message: "Telefone deve ter no máximo 15 caractere!" })
    .regex(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    )
    .trim(),
});
