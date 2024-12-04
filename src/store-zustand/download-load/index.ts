import { create } from "zustand";

import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { handleGetPickUpTasks } from "../../domain/use-cases/pick-up-task";
import { sleep } from "../../utils/sleep/sleep";
// typings
import { IDownloadLoadState } from "./index.d";

// criação da store com Zustand (baixar cargas)
export const useStoreZustandDownloadLoad = create<IDownloadLoadState>(
  (set) => ({
    // estados
    isLoading: false,
    isLoadingPage: false,
    downloadLoad: [],
    myTasks: [],
    itemsPerPage: 5,
    currentPage: 1,
    totalItemsPage: 0,
    searchItem: "",

    // ações
    setIsLoading: (isLoading) => set({ isLoading }),
    setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
    setCurrentPage: (currentPage) => set({ currentPage }),
    setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
    setDownloadLoad: (downloadLoad) => set({ downloadLoad }),
    setSearchItem: (searchItem) => set({ searchItem }),
    setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
    setMyTasks: (myTasks) => set({ myTasks }),

    handleGetAllDowloadLoad: async ({
      currentPage,
      itemsPerPage,
      searchItem,
    }) => {
      set({ isLoadingPage: true });

      await sleep(500);

      const data = (await handleGetPickUpTasks(
        "Token",
        currentPage,
        itemsPerPage,
        searchItem
      )) as IDownloadLoadResponse[];

      set({ downloadLoad: data });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoadingPage: false });

      return data;
    },
  })
);
