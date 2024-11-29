import { create } from "zustand";

// typings
import { IManageClientState } from "./index";
import { IDownloadLoadResponse } from "../../hooks/download-load/use-download-load";
import { sleep } from "../../utils/sleep/sleep";
import { handleGetCustomers } from "../../domain/use-cases/cutomers";

// criação da store com Zustand (Clientes)
export const useStoreZustandManageClient = create<IManageClientState>(
  (set) => ({
    // estados
    isLoading: false,
    isModalCreateClient: false,
    isLoadingPage: false,
    clients: [],
    contatos: [],
    itemsPerPage: 5,
    currentPage: 1,
    totalItemsPage: 0,
    searchItem: "",

    // ações
    setIsLoading: (isLoading) => set({ isLoading }),
    setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
    setCurrentPage: (currentPage) => set({ currentPage }),
    setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
    setClients: (clients) => set({ clients }),
    setSearchItem: (searchItem) => set({ searchItem }),
    setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
    setContatos(contatos) {
      set({ contatos });
    },
    setIsModalCreateClient: (isModalCreateClient) =>
      set({ isModalCreateClient }),

    handleGetAllClients: async ({ currentPage, itemsPerPage, searchItem }) => {
      set({ isLoadingPage: true });

      await sleep(500);

      const data = (await handleGetCustomers(
        "Token",
        currentPage,
        itemsPerPage,
        searchItem
      )) as IDownloadLoadResponse[];

      set({ clients: data! });

      set({ totalItemsPage: data?.length ?? 0 });
      set({ isLoadingPage: false });

      return data;
    },
  })
);
