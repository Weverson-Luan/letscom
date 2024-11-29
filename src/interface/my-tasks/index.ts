/**
 * IMPORTS
 */

type IMyTaksRepository = {
  getAllMyTasks<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number,
    searchItem: string
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { IMyTaksRepository };
