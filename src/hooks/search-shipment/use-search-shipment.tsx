/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandSearchShipment } from "../../store-zustand/search-shipment/search-shipment";

export interface ISearchShipmentResponse {
  id: string;
  name: string;
  cnpj: string;
  telefone: string;
  contato: string;
  email: string;
  creditos: number;
  availableAt: Date;
}
function useManageSearchShipment() {
  const { handleGetAllSearchShipments, currentPage, itemsPerPage, searchItem } =
    useStoreZustandSearchShipment();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["search-shipment", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: searchShipmentsResponse,
  } = useQuery<ISearchShipmentResponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetAllSearchShipments({
        currentPage,
        itemsPerPage,
      });

      return response;
    },
  });

  const searchShipments = (searchShipmentsResponse! as unknown as any[]) ?? [];

  return {
    searchShipments,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManageSearchShipment };
