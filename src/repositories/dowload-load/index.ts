/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";

const dowloadLoadRepository: any = {
  /**
   * Função para buscar (baixar-cargas)
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getDowloadLoad<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const dowloadLoad = await Instance.get(
      `download-load?_page=${currentPage}&_limit=${itemsPerPage}`,
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          accept: "*/*",
        },
      }
    );

    return dowloadLoad?.data;
  },
};

/**
 * EXPORTS
 */
export { dowloadLoadRepository };
