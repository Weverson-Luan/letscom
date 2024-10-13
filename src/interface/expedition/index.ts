/**
 * IMPORTS
 */

type IExpeditionRepository = {
  getAllExpedition<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { IExpeditionRepository };
