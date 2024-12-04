import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IDownloadLoadPage = {
  searchItem: string;
  currentPage: number;
  itemsPerPage: number;
};
type IPickUpTasksState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;
  pickUpTasks: any[];

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;
  setPickUpTasks: (pickUpTasks: any[]) => void;
};

/**
 * EXPORTS
 */
export { IPickUpTasksState };
