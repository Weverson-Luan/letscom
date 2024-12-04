import { useCallback, useState } from "react";
import { Search } from "lucide-react";
import debounce from "lodash.debounce";

import { sleep } from "../../../../../../utils/sleep/sleep";
import { Input } from "../../../../../../presentation/components/input/input";
import { SpinnerSimple } from "../../../../../../presentation/components/spinner-simple/spinner-simple";
import { useStoreZustandExpedition } from "../../../../../../store-zustand/expedition/expedition";

export function SearchInputExpedition() {
  const { setSearchItem } = useStoreZustandExpedition();
  const [loading, setLoading] = useState(false);

  // Função de busca com debounce
  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      setLoading(true);
      await sleep(3000);
      setSearchItem(searchTerm);
      setLoading(false);
    }, 300),
    [setSearchItem]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    if (searchTerm.length >= 3 || searchTerm.length === 0) {
      debouncedSearch(searchTerm);
    }
  };

  return (
    <form className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        id="search-input"
        aria-label="Pesquisar remessas"
        name="q"
        type="search"
        placeholder={loading ? "Pesquisando..." : "Pesquisar..."}
        className="w-full rounded-lg bg-background pl-8 pr-12 md:w-[200px] lg:w-[336px] focus:outline-none"
        onChange={handleSearchChange}
      />
      {loading && (
        <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
          <SpinnerSimple />
        </div>
      )}
    </form>
  );
}
