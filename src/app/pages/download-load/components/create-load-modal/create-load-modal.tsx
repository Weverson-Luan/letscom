/**
 * IMPORTS
 */

import { IdCard, Plus, X } from "lucide-react";
import { Button } from "../../../../../presentation/components/button/button";

type ICreateActvityModalProps = {
  handleToggleCreateActvityModal: () => void;
};

const CreateLoadModal = ({
  handleToggleCreateActvityModal,
}: ICreateActvityModalProps) => {
  async function handleCreateActvity(event: React.FormEvent<HTMLFormElement>) {
    return "";
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">Cadastrar nova carga</h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={handleToggleCreateActvityModal}
              />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Preencha todo os dados para cadastrar uma nova carga.
          </p>
        </div>

        <form onSubmit={handleCreateActvity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <IdCard className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Descrição da carga?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <IdCard className="text-zinc-400 size-5" />
            <input
              name="value"
              placeholder="Valor da carga?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
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
export { CreateLoadModal };
