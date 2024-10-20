import { create } from "zustand";
import { IUserAuthState } from "./index.d";
// Tipos para a store de autenticação

// Criação da store com Zustand
export const useStoreZustandUserAuth = create<IUserAuthState>((set) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsLoading: (isLoading) => set({ isLoading }),

  /**
   * Função que verifica se o usuário está autenticado
   */
  getUserIsAuthenticated() {
    const isAuthenticated = localStorage.getItem("@token");

    if (isAuthenticated !== null) {
      set({ isAuthenticated: true });
      set({
        user: {
          id: "1",
          token: JSON.stringify(isAuthenticated),
          avatar: "https://i.pravatar.cc/300",
          name: "Nome do usuário",
          email: "Email do usuário",
          role: "cliente",
        },
      });
      return true;
    }
    set({ isAuthenticated: false });
    return false;
  },

  setUser(user) {
    set({ user });
  },
}));
