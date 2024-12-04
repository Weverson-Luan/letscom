/**
 * IMPORTS
 */

import { dowloadLoadRepository } from "../../../repositories/dowload-load";

/**
 * Função que realizará a bsuca de baixar cargas 🛠️.
 */
const handleGetPickUpTasks = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number,
  searchItem: string
) => {
  try {
    const data = await dowloadLoadRepository.getDowloadLoad(
      accessToken,
      currentPage,
      itemsPerPage,
      searchItem
    );

    return data;
  } catch (error: any) {
    console.log("ERROR: ", error);

    return error;
  }
};

/**
 *  Function that logout of use 🛠️.
 */

/**
 * EXPORTS
 */
export { handleGetPickUpTasks };
