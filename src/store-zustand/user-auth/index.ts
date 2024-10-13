import { create } from "zustand";

// Tipos para a store de autenticação
interface IUserAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

// Criação da store com Zustand
export const useStoreZustandUserAuth = create<IUserAuthState>((set) => ({
  isAuthenticated: false,
  isLoading: false,

  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
