/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandSearchShipment } from "../../store-zustand/search-shipment/search-shipment";

export interface ISearchShipmentResponse {
  searchShipment: {
    id: string;
    remessa: string;
    cliente: string;
    quantidade: number;
    criador: string;
    status: string;
    solicitante: string;
    modelo: string;
    dataSolicitacao: string;
    dataFinalizacao: string;
  }[];

  meta: {};
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
        searchItem,
      });

      return response;
    },
  });

  const searchShipments =
    (searchShipmentsResponse! as unknown as ISearchShipmentResponse) ?? [];

  return {
    searchShipments: searchShipments.searchShipment,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useManageSearchShipment };
