/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandDownloadLoad } from "../../store-zustand/download-load";

export interface IDownloadLoadResponse {
  id: string;
  numero_remessa: string;
  name: string;
  situacao: string;
  solicitante: string;
  tecnologia: string;
  status: string;
  numberSolicitation: number;
  availableAt: Date;
}
function useDownloadLoad() {
  const { handleGetAllDowloadLoad, currentPage, itemsPerPage, searchItem } =
    useStoreZustandDownloadLoad();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["download-load", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: establishmentResponse,
  } = useQuery<IDownloadLoadResponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetAllDowloadLoad({
        currentPage,
        itemsPerPage,
      });

      return response;
    },
  });

  const downloads =
    (establishmentResponse! as unknown as IDownloadLoadResponse[]) ?? [];

  return {
    downloads,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useDownloadLoad };
