/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandPickUpTasks } from "../../store-zustand/pick-up-tasks/pick-up-tasks";
import { handleGetPickUpTasks } from "../../domain/use-cases/pick-up-task";

export interface IDownloadLoadResponse {
  pickUpTask: {
    id: string;
    numero_remessa: string;
    name: string;
    situacao: string;
    solicitante: string;
    tecnologia: string;
    status: string;
    numberSolicitation: number;
    availableAt: Date;
  }[];
  meta: {};
}
function usePickUpTasks() {
  const { currentPage, itemsPerPage, searchItem } =
    useStoreZustandPickUpTasks();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["pick-up-tasks", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: establishmentResponse,
  } = useQuery<IDownloadLoadResponse>({
    queryKey,
    queryFn: async () => {
      const response = await handleGetPickUpTasks(
        "Token",
        currentPage,
        itemsPerPage,
        searchItem!
      );

      return response;
    },
  });

  const downloads =
    (establishmentResponse! as unknown as IDownloadLoadResponse) ?? [];

  return {
    downloads: downloads?.pickUpTask,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { usePickUpTasks };
