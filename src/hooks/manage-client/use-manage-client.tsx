/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandManageClient } from "../../store-zustand/manage-client/manege-client";

export interface IManageClientesponse {
  customers: {
    id: string;
    name: string;
    cnpj: string;
    telefone: string;
    contato: string;
    email: string;
    creditos: number;
    data: any;
  };
  meta: {};
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
        searchItem,
      });

      return response;
    },
  });

  const clients = (customersResponse! as unknown as IManageClientesponse) ?? [];

  return {
    clients: clients?.customers,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManageClient };
