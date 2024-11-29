import { create } from "zustand";

// typings
import { ISearchShipmentState } from "./index";
import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { handleGetSearchSpnment } from "../../domain/use-cases/search-spnment";

// criação da store com Zustand (Remessas)
export const useStoreZustandSearchShipment = create<ISearchShipmentState>(
  (set) => ({
    // estados
    isLoading: false,
    isModal: false,
    isLoadingPage: false,
    searchShipment: [],
    itemsPerPage: 5,
    currentPage: 1,
    totalItemsPage: 0,
    searchItem: "",

    // ações
    setIsLoading: (isLoading) => set({ isLoading }),
    setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
    setCurrentPage: (currentPage) => set({ currentPage }),
    setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
    setSearchShipment: (searchShipment) => set({ searchShipment }),
    setSearchItem: (searchItem) => set({ searchItem }),
    setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
    setIsModal: (isModal) => set({ isModal }),

    handleGetAllSearchShipments: async ({
      currentPage,
      itemsPerPage,
      searchItem,
    }) => {
      set({ isLoadingPage: true });

      const data = (await handleGetSearchSpnment(
        "Token",
        currentPage,
        itemsPerPage,
        searchItem
      )) as IDownloadLoadResponse[];

      set({ searchShipment: data! });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoadingPage: false });

      return data;
    },
  })
);
