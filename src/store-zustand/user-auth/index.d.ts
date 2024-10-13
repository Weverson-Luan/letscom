/**
 * IMPORTS
 */

type IUserAuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;

  // metodos
  setIsLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

/**
 * EXPORTS
 */
export { IUserAuthState };
