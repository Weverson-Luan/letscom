/**
 * IMPORTS
 */

import { IdCard, Plus, X } from "lucide-react";
import { Button } from "../../../../../../presentation/components/button/button";

type ICreateActvityModalProps = {
  handleToggleCreateActvityModal: () => void;
};

const CreateClientModal = ({
  handleToggleCreateActvityModal,
}: ICreateActvityModalProps) => {
  async function handleCreateActvity(event: React.FormEvent<HTMLFormElement>) {
    return event;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[840px] rounded-xl py-5 px-6 shadow-shape bg-neutral-50 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-zinc-800">
              Cadastro de Cliente
            </h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={handleToggleCreateActvityModal}
              />
            </button>
          </div>
        </div>

        <form onSubmit={handleCreateActvity} className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="felx-col">
              <p className="text-zinc-800 mb-2">CNPJ/CPF</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="document"
                  placeholder="Informe seu CPF/CNPJ"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Nome de identificação </p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name"
                  placeholder="Informe seu nome"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Nome pessoa para contato</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Endereco e-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Endereco e-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Endereco e-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Endereco e-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>

            <div className="felx-col">
              <p className="text-zinc-800 mb-2">Endereco e-mail</p>
              <div className="h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <IdCard className="text-zinc-400 size-5" />
                <input
                  name="name-contact"
                  placeholder="Informe pessoa para contato"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-600"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full bg-blue-600">
            <Plus className="size-5" />
            Salvar carga
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
