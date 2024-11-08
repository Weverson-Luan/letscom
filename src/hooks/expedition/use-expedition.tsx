/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandExpedition } from "../../store-zustand/expedition/expedition";

export interface IExpeditionResponse {
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
function useExpedition() {
  const { handleGetAllExpedition, currentPage, itemsPerPage, searchItem } =
    useStoreZustandExpedition();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["expedtion", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: expeditionResponse,
  } = useQuery<IExpeditionResponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetAllExpedition({
        currentPage,
        itemsPerPage,
      });

      return response;
    },
  });

  const expeditions =
    (expeditionResponse! as unknown as IExpeditionResponse[]) ?? [];

  return {
    expeditions,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useExpedition };
