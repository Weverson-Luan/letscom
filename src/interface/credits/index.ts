/**
 * IMPORTS
 */

type IManagerCreditsRepository = {
  getAllManagerCredits<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { IManagerCreditsRepository };
