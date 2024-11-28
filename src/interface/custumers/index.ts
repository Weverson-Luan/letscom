/**
 * IMPORTS
 */

type ICustumersRepository = {
  getAllCustomers<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number,
    searchItem: string
  ): Promise<T | null>;
  createNewCustom: <T>(accessToken: string, data: any) => Promise<T>;
};

/**
 * EXPORTS
 */
export type { ICustumersRepository };
