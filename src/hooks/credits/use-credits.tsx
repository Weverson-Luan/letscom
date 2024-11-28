/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandManagerCredits } from "../../store-zustand/credits/credits";

export interface IManagerCreditsResponse {
  credits: {
    id: string;
    cliente: string;
    produto: string;
    saldo: number;
  }[];
  meta: {};
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

  const creditsResponse =
    (managerCredits! as unknown as IManagerCreditsResponse) ?? [];

  return {
    credits: creditsResponse.credits,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManagerCredits };
