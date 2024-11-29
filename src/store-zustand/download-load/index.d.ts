import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IDownloadLoadPage = {
  searchItem: string;
  currentPage: number;
  itemsPerPage: number;
};
type IDownloadLoadState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  downloadLoad: IDownloadLoadResponse[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;
  myTasks: any[];

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setDownloadLoad: (downloadLoad: IDownloadLoadResponse[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;
  setMyTasks: (myTasks: any[]) => void;

  handleGetAllDowloadLoad: ({
    currentPage: number,
    itemsPerPage: number,
    searchItem: string,
  }) => Promise<any>;
};

/**
 * EXPORTS
 */
export { IDownloadLoadState };
