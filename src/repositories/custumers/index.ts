/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { ICustumersRepository } from "../../interface/custumers";

const customersRepository: ICustumersRepository = {
  /**
   * Função para buscar clientes
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getAllCustomers<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const customers = await Instance.get(
      `customers?_page=${currentPage}&_limit=${itemsPerPage}`,
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          accept: "*/*",
        },
      }
    );

    return customers?.data;
  },
};

/**
 * EXPORTS
 */
export { customersRepository };
