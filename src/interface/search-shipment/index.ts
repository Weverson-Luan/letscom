/**
 * IMPORTS
 */

type ISearchShipmentRepository = {
  getAllSearchShipment<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number,
    searchItem: string
  ): Promise<T | null>;
};

/**
 * EXPORTS
 */
export type { ISearchShipmentRepository };
