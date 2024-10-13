/**
 * IMPORTS
 */

type ICustumersRepository = {
  getAllCustomers<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { ICustumersRepository };
