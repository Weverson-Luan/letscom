import { create } from "zustand";

import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { handleSigninWhithUserAndPassword } from "../../domain/use-cases/dowload-load";
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
    searchItem: null,

    // ações
    setIsLoading: (isLoading) => set({ isLoading }),
    setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
    setCurrentPage: (currentPage) => set({ currentPage }),
    setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
    setDownloadLoad: (downloadLoad) => set({ downloadLoad }),
    setSearchItem: (searchItem) => set({ searchItem }),
    setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
    setMyTasks: (myTasks) => set({ myTasks }),

    handleGetAllDowloadLoad: async ({ currentPage, itemsPerPage }) => {
      set({ isLoadingPage: true });

      await sleep(500);

      const data = (await handleSigninWhithUserAndPassword(
        "Token",
        currentPage,
        itemsPerPage
      )) as IDownloadLoadResponse[];

      set({ downloadLoad: data });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoadingPage: false });

      return data;
    },
  })
);
