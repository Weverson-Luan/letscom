/**
 * IMPORTS
 */

import { expeditionRepository } from "../../../repositories/expedition";

/**
 * Função que busca dados dos pedidos finalizados 🛠️.
 */
const handleGetExpedition = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number,
  searchItem: string
) => {
  try {
    const data = await expeditionRepository.getAllExpedition(
      accessToken,
      currentPage,
      itemsPerPage,
      searchItem
    );

    return data;
  } catch (error: any) {
    return error;
  }
};

/**
 * EXPORTS
 */
export { handleGetExpedition };
