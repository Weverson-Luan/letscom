/**
 * IMPORTS
 */
import { useQuery } from "@tanstack/react-query";
import { useStoreZustandDownloadLoad } from "../../store-zustand/download-load";
import { handleGetPickUpTasks } from "../../domain/use-cases/my-tasks";

export interface IMyTasksResponse {
  myTasks: {
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
function useMyTasks() {
  const { currentPage, itemsPerPage, searchItem, setIsLoadingPage } =
    useStoreZustandDownloadLoad();

  // Chave de cache única baseada na página atual e na quantidade de itens por página
  const queryKey = ["my-tasks", currentPage, itemsPerPage, searchItem];

  const {
    isLoading,
    error: isError,
    data: establishmentResponse,
  } = useQuery<IMyTasksResponse>({
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

  const taks = (establishmentResponse! as unknown as IMyTasksResponse) ?? [];
  return {
    myTasks: taks?.myTasks,
    isLoading,
    isError,
  };
}

/**
 * EXPORTS
 */
export { useMyTasks };
