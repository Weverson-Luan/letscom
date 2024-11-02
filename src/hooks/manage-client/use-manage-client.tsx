/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandManageClient } from "../../store-zustand/manage-client/manege-client";

export interface IManageClientesponse {
  id: string;
  name: string;
  cnpj: string;
  telefone: string;
  contato: string;
  email: string;
  creditos: number;
  availableAt: Date;
}
function useManageClient() {
  const { handleGetAllClients, currentPage, itemsPerPage, searchItem } =
    useStoreZustandManageClient();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["manage-client", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: customersResponse,
  } = useQuery<IManageClientesponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetAllClients({
        currentPage,
        itemsPerPage,
      });

      return response;
    },
  });

  const clients = (customersResponse! as unknown as any[]) ?? [];

  return {
    clients,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManageClient };
