/**
 * IMPORTS
 */

import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Faça busca geral pelo sistema"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <SearchIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * EXPORTS
 */
export { Search };
