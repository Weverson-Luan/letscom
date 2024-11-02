// import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IManageClientPage = {
  search: string;
  currentPage: number;
  itemsPerPage: number;
};
type IManageClientState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  clients: any[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;
  isModalCreateClient: boolean;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsModalCreateClient: (isModalCreateClient: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setClients: (clients: any[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;

  handleGetAllClients: ({
    currentPage: number,
    itemsPerPage: number,
  }) => Promise<any>;
};

/**
 * EXPORTS
 */
export { IManageClientState };
