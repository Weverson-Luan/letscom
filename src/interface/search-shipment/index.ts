/**
 * IMPORTS
 */

type ISearchShipmentRepository = {
  getAllSearchShipment<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { ISearchShipmentRepository };
