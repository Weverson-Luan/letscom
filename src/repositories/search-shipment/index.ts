/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { ISearchShipmentRepository } from "../../interface/search-shipment";

const searchSpnmentRepository: ISearchShipmentRepository = {
  /**
   * Função para buscar clientes
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getAllSearchShipment<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const customers = await Instance.get(
      `serach-spnment?_page=${currentPage}&_limit=${itemsPerPage}`,
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
export { searchSpnmentRepository };
