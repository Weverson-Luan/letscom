/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { IExpeditionRepository } from "../../interface/expedition";

const expeditionRepository: IExpeditionRepository = {
  /**
   * Função para buscar expedições
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getAllExpedition<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const orders = await Instance.get(
      `expedition?_page=${currentPage}&_limit=${itemsPerPage}`,
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
export { expeditionRepository };
