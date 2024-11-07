// import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IManagerCreditsPage = {
  search: string;
  currentPage: number;
  itemsPerPage: number;
};
type IManagerCreditstState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  credits: any[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;
  isModal: boolean;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsModal: (isModal: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setCredits: (credits: any[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;

  handleGetAllManagerCredits: ({
    currentPage: number,
    itemsPerPage: number,
  }) => Promise<any>;
};

/**
 * EXPORTS
 */
export { IManagerCreditstState };
