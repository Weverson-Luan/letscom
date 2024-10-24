import { create } from "zustand";

// typings
import { IDownloadLoadState } from "./index.d";
import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { sleep } from "../../utils/sleep/sleep";
import { handleSigninWhithUserAndPassword } from "../../domain/use-cases/dowload-load";

// criação da store com Zustand (baixar cargas)
export const useStoreZustandDownloadLoad = create<IDownloadLoadState>(
  (set) => ({
    // estados
    isLoading: false,
    downloadLoad: [],
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

    handleGetAllDowloadLoad: async ({ currentPage, itemsPerPage }) => {
      set({ isLoading: true });

      await sleep(500);

      const data = (await handleSigninWhithUserAndPassword(
        "Token",
        currentPage,
        itemsPerPage
      )) as IDownloadLoadResponse[];

      set({ downloadLoad: data });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoading: false });

      return data;
    },

    handleGetAllDowloadLoadByPage: async ({
      search,
      currentPage,
      itemsPerPage,
    }) => {
      console.log(search, currentPage, itemsPerPage);
      return;
    },
  })
);
