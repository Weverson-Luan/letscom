/**
 * IMPORTS
 */

import { ordersCompletedRepository } from "../../../repositories/orders-completed";

/**
 * Função que busca dados dos pedidos finalizados 🛠️.
 */
const handleGetOrdersCompleted = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const data = await ordersCompletedRepository.getOrdersCompleted(
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
export { handleGetOrdersCompleted };
