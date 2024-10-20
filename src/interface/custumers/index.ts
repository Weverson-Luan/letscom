/**
 * IMPORTS
 */

import { SchemaManagerClientType } from "../../app/pages/admin/manage-client";

type ICustumersRepository = {
  getAllCustomers<T>(
    accessToken: string,
    currentPage: number,
    itemsPerPage: number
  ): Promise<T | null>;
  createNewCustom: <T>(
    accessToken: string,
    data: SchemaManagerClientType
  ) => Promise<T>;
};

/**
 * EXPORTS
 */
export type { ICustumersRepository };
