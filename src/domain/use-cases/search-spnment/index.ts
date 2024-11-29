/**
 * IMPORTS
 */

import { searchSpnmentRepository } from "../../../repositories/search-shipment";

/**
 * Função que busca remessas 🛠️.
 */
const handleGetSearchSpnment = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number,
  searchItem: string
) => {
  try {
    const data = await searchSpnmentRepository.getAllSearchShipment(
      accessToken,
      currentPage,
      itemsPerPage,
      searchItem
    );

    return data;
  } catch (error: any) {
    console.log("ERROR EM REMESSAS: ", error);

    return error;
  }
};

/**
 * EXPORTS
 */
export { handleGetSearchSpnment };
