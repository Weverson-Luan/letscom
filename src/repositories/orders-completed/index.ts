/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { OrdersCompletedRepository } from "../../interface/orders-completed/orders-completed";

const ordersCompletedRepository: OrdersCompletedRepository = {
  /**
   * Função para buscar pedidos finalizados
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getOrdersCompleted<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const orders = await Instance.get(
      `orders-completed?_page=${currentPage}&_limit=${itemsPerPage}`,
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          accept: "*/*",
        },
      }
    );

    return orders?.data;
  },
};

/**
 * EXPORTS
 */
export { ordersCompletedRepository };
