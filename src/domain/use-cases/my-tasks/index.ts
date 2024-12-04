/**
 * IMPORTS
 */

import { myTasksRepository } from "../../../repositories/my-tasks";

/**
 * Função que busca dados minhas tarefas 🛠️.
 */
const handleGetPickUpTasks = async (
  accessToken: string,
  currentPage: number,
  itemsPerPage: number,
  searchItem: string
) => {
  try {
    const data = await myTasksRepository.getAllMyTasks(
      accessToken,
      currentPage,
      itemsPerPage,
      searchItem
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
export { handleGetPickUpTasks };
