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
  itemsPerPage: number
) => {
  try {
    const data = await expeditionRepository.getExpedition(
      accessToken,
      currentPage,
      itemsPerPage
    );

    return data;
  } catch (error: any) {
    console.log("ERROR: ", error);

    return error;
  }
};

/**
 * EXPORTS
 */
export { handleGetExpedition };
