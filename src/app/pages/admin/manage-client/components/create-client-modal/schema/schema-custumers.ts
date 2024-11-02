import { z } from "zod";

// Esquema para Dados do Cliente
const clienteSchema = z.object({
  nome_identificacao: z
    .string()
    .min(1, { message: "O nome de identificação é obrigatório" })
    .min(3, {
      message: "O nome de identificação deve ter pelo menos 3 caracteres",
    }),
  nome_contato: z
    .string()
    .min(1, { message: "O nome da pessoa para contato é obrigatório" })
    .min(3, { message: "O nome de contato deve ter pelo menos 3 caracteres" }),
  documento: z
    .string()
    .min(1, { message: "O CNPJ/CPF é obrigatório" })
    .regex(/^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/, {
      message:
        "CNPJ/CPF inválido, formato esperado: 000.000.000-00 ou 00.000.000/0000-00",
    }),
  email: z
    .string()
    .min(1, { message: "O e-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  telefone_contato: z
    .string()
    .min(1, { message: "O telefone da pessoa para contato é obrigatório" })
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
      message: "Telefone inválido, formato esperado: (XX) XXXXX-XXXX",
    }),
});

// Esquema para Endereço
const enderecoSchema = z.object({
  cep: z
    .string()
    .min(1, { message: "O CEP é obrigatório" })
    .regex(/^\d{5}-\d{3}$/, {
      message: "CEP inválido, formato esperado: XXXXX-XXX",
    }),
  estado: z
    .string()
    .min(1, { message: "O estado é obrigatório" })
    .max(2, { message: "Informe a sigla do estado, por exemplo, SP" }),
  cidade: z.string().min(1, { message: "A cidade é obrigatória" }),
  bairro: z.string().min(1, { message: "O bairro é obrigatório" }),
  numero: z
    .string()
    .min(1, { message: "O número é obrigatório" })
    .regex(/^\d+$/, { message: "O número deve ser um valor numérico" }),
  complemento: z.string().optional(),
});

// Esquema para Usuario do Cliente
const usuarioCliente = z.object({
  nome_identificacao: z
    .string()
    .min(1, { message: "O nome de identificação do usuário é obrigatório" })
    .min(3, {
      message: "O nome de identificação deve ter pelo menos 3 caracteres",
    }),
  email: z
    .string()
    .min(1, { message: "O e-mail do usuário é obrigatório" })
    .email({ message: "E-mail inválido" }),
  telefone: z
    .string()
    .min(1, { message: "O telefone do usuário para contato é obrigatório" })
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
      message: "Telefone inválido, formato esperado: (XX) XXXXX-XXXX",
    }),
});

// Exportando os esquemas para validação
export { clienteSchema, enderecoSchema, usuarioCliente };
