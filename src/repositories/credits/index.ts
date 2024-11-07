/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { IManagerCreditsRepository } from "../../interface/credits";

const managerCreditsRepository: IManagerCreditsRepository = {
  /**
   * Função para buscar creditos
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getAllManagerCredits<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const credits = await Instance.get(
      `credits?_page=${currentPage}&_limit=${itemsPerPage}`,
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          accept: "*/*",
        },
      }
    );

    return credits?.data;
  },
};

/**
 * EXPORTS
 */
export { managerCreditsRepository };
