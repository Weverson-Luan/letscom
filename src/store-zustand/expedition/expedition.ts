import { create } from "zustand";

// typings
import { IExpeditionState } from "./index";
import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { sleep } from "../../utils/sleep/sleep";
import { handleGetExpedition } from "../../domain/use-cases/expedition";

// criação da store com Zustand (Expedições)
export const useStoreZustandExpedition = create<IExpeditionState>((set) => ({
  // estados
  isLoading: false,
  isLoadingPage: false,
  expedition: [],
  itemsPerPage: 5,
  currentPage: 1,
  totalItemsPage: 0,
  searchItem: "",

  // ações
  setIsLoading: (isLoading) => set({ isLoading }),
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
  setExpedition: (expedition) => set({ expedition }),
  setSearchItem: (searchItem) => set({ searchItem }),
  setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),

  handleGetAllExpedition: async ({ currentPage, itemsPerPage, searchItem }) => {
    set({ isLoadingPage: true });

    await sleep(500);

    const data = (await handleGetExpedition(
      "Token",
      currentPage,
      itemsPerPage,
      searchItem
    )) as IDownloadLoadResponse[];

    set({ expedition: data! });

    set({ totalItemsPage: data?.length ?? 0 });
    set({ isLoadingPage: false });

    return data;
  },
}));
