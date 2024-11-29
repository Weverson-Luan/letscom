// import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IManageClientPage = {
  search: string;
  currentPage: number;
  itemsPerPage: number;
};
type ISearchShipmentState = {
  // estados
  isLoading: boolean;
  isLoadingPage: boolean;
  searchShipment: any[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;
  isModal: boolean;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsModal: (isModal: boolean) => void;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
  setSearchShipment: (searchShipment: any[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;

  handleGetAllSearchShipments: ({
    currentPage: number,
    itemsPerPage: number,
    searchItem: string,
  }) => Promise<any>;
};

/**
 * EXPORTS
 */
export { ISearchShipmentState };
