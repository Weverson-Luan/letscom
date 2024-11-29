/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";
import { IMyTaksRepository } from "../../interface/my-tasks";

const myTasksRepository: IMyTaksRepository = {
  /**
   * Função para buscar minhsas tarefas
   * @param accessToken
   * @returns Promise<any | null>
   */
  async getAllMyTasks<T>(
    accessToken: string,
    currentPage: number = 1,
    itemsPerPage: number = 5,
    searchItem = ""
  ): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance(accessToken);

    const customers = await Instance.get(
      `my-tasks?_page=${currentPage}&_limit=${itemsPerPage}&search=${searchItem}`,
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
export { myTasksRepository };
