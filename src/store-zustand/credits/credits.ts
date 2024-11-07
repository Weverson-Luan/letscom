import { create } from "zustand";

// typings
import { IManagerCreditstState } from "./index";
import { sleep } from "../../utils/sleep/sleep";
import { handleManagerCredits } from "../../domain/use-cases/credits";

// criação da store com Zustand (Gerenciamento de Créditos)
export const useStoreZustandManagerCredits = create<IManagerCreditstState>(
  (set) => ({
    // estados
    isLoading: false,
    isModal: false,
    isLoadingPage: false,
    credits: [],
    itemsPerPage: 5,
    currentPage: 1,
    totalItemsPage: 0,
    searchItem: null,

    // ações
    setIsLoading: (isLoading) => set({ isLoading }),
    setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
    setCurrentPage: (currentPage) => set({ currentPage }),
    setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
    setCredits: (credits) => set({ credits }),
    setSearchItem: (searchItem) => set({ searchItem }),
    setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
    setIsModal: (isModal) => set({ isModal }),

    handleGetAllManagerCredits: async ({ currentPage, itemsPerPage }) => {
      set({ isLoadingPage: true });

      await sleep(500);

      const data = (await handleManagerCredits(
        "Token",
        currentPage,
        itemsPerPage
      )) as any[];

      set({ credits: data! });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoadingPage: false });

      return data;
    },
  })
);
