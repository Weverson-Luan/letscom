/**
 * IMPORTS
 */

import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-neutral-custom500">
      <div className="flex items-center">
        <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQE184H4QaViEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645108328897?e=1732147200&v=beta&t=VMambAOI5INs_ALjlUP-Oa8vq0StUQxeH0plcFfdwkg"
          alt="Profile picture of Luan Sousa"
          className="w-14 h-14 rounded-full"
        />
        <span className="ml-4 text-lg text-zinc-700">
          Olá, <strong>Luan Sousa</strong> bem vindo de volta!
        </span>
      </div>

      <button className="flex items-center" onClick={() => alert("sair?")}>
        <span className="mr-2 text-lg">Sair</span>
        <LogOut className="size-4" />
      </button>
    </div>
  );
};

/**
 * EXPORTS
 */
export { Header };
