/**
 * IMPORTS
 */

type IUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  token: string;
  role: string;
};

type IUserAuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: IUser | null;

  // ações
  setIsLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: IUser | null) => void;
  getUserIsAuthenticated: () => boolean;
};

/**
 * EXPORTS
 */
export { IUserAuthState };
