import { create } from "zustand";

// typings
import { IPickUpTasksState } from "./index.d";

// criação da store com Zustand (pegar tarefas)
export const useStoreZustandPickUpTasks = create<IPickUpTasksState>((set) => ({
  // estados
  isLoading: false,
  isLoadingPage: false,
  pickUpTasks: [],
  itemsPerPage: 5,
  currentPage: 1,
  totalItemsPage: 0,
  searchItem: "",

  // ações
  setIsLoading: (isLoading) => set({ isLoading }),
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setTotalItemsPage: (totalItemsPage) => set({ totalItemsPage }),
  setSearchItem: (searchItem) => set({ searchItem }),
  setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
  setPickUpTasks(pickUpTasks) {
    set({ pickUpTasks });
  },
}));
