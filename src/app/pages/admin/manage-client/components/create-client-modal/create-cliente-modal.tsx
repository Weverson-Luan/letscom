/**
 * IMPORTS
 */

import { House, IdCard, Plus, User, X } from "lucide-react";
import { Button } from "../../../../../../presentation/components/button/button";
import {
  clienteSchema,
  enderecoSchema,
  usuarioCliente,
} from "./schema/schema-custumers";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

type ICreateActvityModalProps = {
  handleToggleCreateActvityModal: () => void;
};

// Definindo o esquema completo de validação combinando cliente e endereço
const formSchema = z.object({
  cliente: clienteSchema,
  endereco: enderecoSchema,
  usuarioCliente: usuarioCliente,
});

type FormData = z.infer<typeof formSchema>;

const CreateClientModal = ({
  handleToggleCreateActvityModal,
}: ICreateActvityModalProps) => {
  // Configurando o useForm com a validação do Zod
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [cep, setCep] = useState("");

  function formatCep(cep: string) {
    // Remove todos os caracteres que não são números
    cep = cep.replace(/\D/g, "");

    // Aplica a máscara XXXXX-XXX
    return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }

  // Função de busca no ViaCEP com debounce para evitar requisições excessivas
  const fetchAddress = debounce(async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;

      if (logradouro) {
        setValue("endereco.cidade", localidade);
        setValue("endereco.estado", uf);
        setValue("endereco.bairro", bairro);
        setValue("endereco.cep", formatCep(cep));

        // Disparando a validação para os campos preenchidos automaticamente
        await trigger([
          "endereco.cidade",
          "endereco.estado",
          "endereco.bairro",
          "endereco.cep",
        ]);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  }, 500);

  // Atualiza o CEP e faz a busca quando o campo é preenchido
  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cepValue = event.target.value.replace(/\D/g, "");
    setCep(cepValue);

    if (cepValue.length === 8) {
      await fetchAddress(cepValue);
    }
  };

  // Função para lidar com o envio do formulário
  const onSubmit = (data: FormData) => {
    console.log("Dados do Cliente:", data.cliente);
    console.log("Dados do Endereço:", data.endereco);
    console.log("Dados do Usuário do Cliente:", data.usuarioCliente);
    handleToggleCreateActvityModal();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[840px] h-[600px] rounded-xl overflow-y-auto py-5 px-6 shadow-shape bg-neutral-50 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2 ">
              <User className="text-zinc-800" size={24} />
              <h2 className="text-xl font-semibold text-zinc-800">
                Cadastro de Cliente
              </h2>
            </div>
            <button onClick={handleToggleCreateActvityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Informações do Cliente */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* NOME DE IDENTIFICACAO */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">Nome de identificação</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  {...register("cliente.nome_identificacao")}
                  placeholder="Informe o nome do cliente"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.cliente?.nome_identificacao && (
                <span className="text-red-500 text-sm">
                  {errors.cliente.nome_identificacao.message}
                </span>
              )}
            </div>

            {/* NOME DA PESSOA PARA CONTATO */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">Nome pessoa para contato</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  {...register("cliente.nome_contato")}
                  placeholder="Informe nome para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.cliente?.nome_contato && (
                <span className="text-red-500 text-sm">
                  {errors.cliente.nome_contato.message}
                </span>
              )}
            </div>

            {/* CNPJ/CPF */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">CNPJ/CPF</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />

                <InputMask
                  mask="999.999.999-99"
                  maskChar={null}
                  placeholder="Informe CNPJ/CPF"
                  {...register("cliente.documento")}
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.cliente?.documento && (
                <span className="text-red-500 text-sm">
                  {errors.cliente.documento.message}
                </span>
              )}
            </div>

            {/* E-MAIL */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">E-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  {...register("cliente.email")}
                  placeholder="Informe seu e-mail"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.cliente?.email && (
                <span className="text-red-500 text-sm">
                  {errors.cliente.email.message}
                </span>
              )}
            </div>
          </div>

          {/* TELEFONE DE CONTATO */}
          <div className="w-ful">
            <p className="text-zinc-800 mb-2">Telefone pessoa do contato</p>
            <div className="w-full h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
              <IdCard className="text-zinc-400 size-5" />
              <InputMask
                mask="(99) 99999-9999"
                {...register("cliente.telefone_contato")}
                placeholder="Informe seu telefone"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
              />
            </div>
            {errors.cliente?.telefone_contato && (
              <span className="text-red-500 text-sm">
                {errors.cliente.telefone_contato.message}
              </span>
            )}
          </div>

          {/**SEPARADOR */}
          <div className="w-full h-4" />

          {/* Seção de Endereço */}
          <div className="w-ful">
            <div className="flex items-center justify-center gap-2 w-[120px] mt-4 mb-4">
              <House className="text-zinc-800" size={24} />
              <h2 className="text-xl font-semibold text-zinc-800">Endereço</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex-col">
                <p className="text-zinc-800 mb-2">CEP</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <InputMask
                    mask="99999-999"
                    maskChar={null}
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Informe o CEP"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.cep && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.cep.message}
                  </span>
                )}
              </div>

              <div className="flex-col">
                <p className="text-zinc-800 mb-2">Estado</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <input
                    {...register("endereco.estado")}
                    placeholder="Informe o estado"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.estado && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.estado.message}
                  </span>
                )}
              </div>

              <div className="flex-col">
                <p className="text-zinc-800 mb-2">Cidade</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <input
                    {...register("endereco.cidade")}
                    placeholder="Informe a cidade"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.cidade && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.cidade.message}
                  </span>
                )}
              </div>

              <div className="flex-col">
                <p className="text-zinc-800 mb-2">Bairro</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <input
                    {...register("endereco.bairro")}
                    placeholder="Informe o bairro"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.bairro && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.bairro.message}
                  </span>
                )}
              </div>

              <div className="flex-col">
                <p className="text-zinc-800 mb-2">Número</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <input
                    {...register("endereco.numero")}
                    placeholder="Informe o número"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.numero && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.numero.message}
                  </span>
                )}
              </div>

              <div className="flex-col">
                <p className="text-zinc-800 mb-2">Complemento</p>
                <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <IdCard className="text-zinc-400 size-5" />
                  <input
                    {...register("endereco.complemento")}
                    placeholder="Informe o complemento"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                  />
                </div>
                {errors.endereco?.complemento && (
                  <span className="text-red-500 text-sm">
                    {errors.endereco.complemento.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/**SEPARADOR */}
          <div className="w-full h-4" />

          {/* Seção de usuário para cliente */}
          <div className="flex items-center justify-center gap-2 w-[220px]">
            <User className="text-zinc-800" size={24} />
            <h2 className="text-xl font-semibold text-zinc-800">
              Usuário para cliente
            </h2>
          </div>

          {/* CONTATOS PARA CLIENTE */}
          {/* <div className="flex flex-wrap gap-2 mb-2">
            {[].map((email, _index) => (
              <div
                key={String(email)}
                className="py-1.5 px-2.5 bg-zinc-800 flex items-center rounded-md gap-2"
              >
                <span className="text-zinc-300">
                  {"weversonluan@gmail.com"}
                </span>

                <button
                  onClick={() => {
                    console.log(email);
                  }}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-2 gap-4 ">
            {/* NOME DE IDENTIFICACAO */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">Nome de identificação</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  {...register("usuarioCliente.nome_identificacao")}
                  placeholder="Informe o nome do usuário"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.usuarioCliente?.nome_identificacao && (
                <span className="text-red-500 text-sm">
                  {errors.usuarioCliente?.nome_identificacao.message}
                </span>
              )}
            </div>

            {/* E-MAIL */}
            <div className="flex-col">
              <p className="text-zinc-800 mb-2">E-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  {...register("usuarioCliente.email")}
                  placeholder="Informe seu e-mail"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
              {errors.usuarioCliente?.email && (
                <span className="text-red-500 text-sm">
                  {errors.usuarioCliente.email.message}
                </span>
              )}
            </div>
          </div>

          {/* TELEFONE DE CONTATO */}
          <div className="w-ful">
            <p className="text-zinc-800 mb-2">Telefone</p>
            <div className="w-full h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
              <IdCard className="text-zinc-400 size-5" />
              <InputMask
                mask="(99) 99999-9999"
                {...register("usuarioCliente.telefone")}
                placeholder="Informe seu telefone"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
              />
            </div>
            {errors.usuarioCliente?.telefone && (
              <span className="text-red-500 text-sm">
                {errors.usuarioCliente.telefone.message}
              </span>
            )}
          </div>

          <Button type="submit" className="w-full ring-offset-background mt-6">
            <Plus className="size-5" />
            Adicionar Cliente
          </Button>
        </form>
      </div>
    </div>
  );
};

/**
 * EXPORT
 */
export { CreateClientModal };
