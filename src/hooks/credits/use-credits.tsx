/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandManagerCredits } from "../../store-zustand/credits/credits";

export interface IManagerCreditsResponse {
  id: string;
  cliente: string;
  produto: string;
  saldo: number;
}
function useManagerCredits() {
  const { handleGetAllManagerCredits, currentPage, itemsPerPage, searchItem } =
    useStoreZustandManagerCredits();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["manager-credits", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: managerCredits,
  } = useQuery<IManagerCreditsResponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetAllManagerCredits({
        currentPage,
        itemsPerPage,
      });

      return response;
    },
  });

  const credits = (managerCredits! as unknown as any[]) ?? [];

  return {
    credits,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManagerCredits };
