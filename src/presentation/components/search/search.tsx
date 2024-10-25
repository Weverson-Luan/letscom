/**
 * IMPORTS
 */

import { useCallback } from "react";
import { Search } from "lucide-react";

// components
import { Input } from "../input/input";

// store-zustand
import { useStoreZustandDownloadLoad } from "../../../store-zustand/download-load";

import { Spinner } from "../../../common/icons/spinner";
import { sleep } from "../../../utils/sleep/sleep";

export function SearchInput() {
  const { setSearchItem, searchItem } = useStoreZustandDownloadLoad();

  // Função para atualizar o estado local enquanto o usuário digita
  const handleSearchChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length >= 3 || event.target.value.length === 0) {
        await sleep(3000);
        setSearchItem(event.target.value);

        return;
      }
    },
    [searchItem]
  );

  return (
    <form className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground" />
      <Input
        name="q"
        type="search"
        placeholder="Pesquisar..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] focus:outline-none"
        onChange={handleSearchChange}
      />
      {false && <Spinner />}
    </form>
  );
}
