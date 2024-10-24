import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";

/**
 * IMPORTS
 */

export type IDownloadLoadPage = {
  search: string;
  currentPage: number;
  itemsPerPage: number;
};
type IDownloadLoadState = {
  // estados
  isLoading: boolean;
  downloadLoad: IDownloadLoadResponse[];
  itemsPerPage: number;
  currentPage: number;
  totalItemsPage: number;
  searchItem: string | null;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setDownloadLoad: (downloadLoad: IDownloadLoadResponse[]) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalItemsPage: (totalItemsPage: number) => void;
  setSearchItem: (searchItem: string) => void;

  handleGetAllDowloadLoad: ({
    currentPage: number,
    itemsPerPage: number,
  }) => Promise<any>;
  handleGetAllDowloadLoadByPage: ({
    search,
    currentPage,
    itemsPerPage,
  }: IDownloadLoadPage) => Promise<any>;
};

/**
 * EXPORTS
 */
export { IDownloadLoadState };
