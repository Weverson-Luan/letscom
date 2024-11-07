/**
 * IMPORTS
 */

import { managerCreditsRepository } from "../../../repositories/credits";

/**
 * Função que busca créditos 🛠️.
 */
const handleManagerCredits = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const data = await managerCreditsRepository.getAllManagerCredits(
      accessToken,
      currentPage,
      itemsPerPage
    );

    return data;
  } catch (error: any) {
    console.log("ERROR EM CRÉDITOS: ", error);

    return error;
  }
};

/**
 * EXPORTS
 */
export { handleManagerCredits };
