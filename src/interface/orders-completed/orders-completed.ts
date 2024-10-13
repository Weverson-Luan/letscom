/**
 * IMPORTS
 */

type OrdersCompletedRepository = {
  getOrdersCompleted<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { OrdersCompletedRepository };
