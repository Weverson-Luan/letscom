/**
 * IMPORTS
 */

type IExpeditionRepository = {
  getAllExpedition<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number,
    searchItem: string
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { IExpeditionRepository };
