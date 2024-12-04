import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IExpeditionPage = {
  search: string;
  currentPage: number;
  itemsPerPage: number;
};
type IExpeditionState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  expedition: IDownloadLoadResponse[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setExpedition: (expedition: IDownloadLoadResponse[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;

  handleGetAllExpedition: ({
    currentPage: number,
    itemsPerPage: number,
    searchItem: string,
  }) => Promise<any>;
};

/**
 * EXPORTS
 */
export { IExpeditionState };
