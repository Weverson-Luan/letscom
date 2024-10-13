/**
 * IMPORTS
 */

import { customersRepository } from "../../../repositories/custumers";

/**
 * Função que busca dados dos pedidos finalizados 🛠️.
 */
const handleGetCustomers = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const data = await customersRepository.getAllCustomers(
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
export { handleGetCustomers };
