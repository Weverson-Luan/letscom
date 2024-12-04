import { useCallback } from "react";
import { useMyTasks } from "../../../../../../hooks/download-load/use-my-tasks";
import { DynamicTable } from "../../../../../../presentation/components/table-custom/table";
import { useStoreZustandDownloadLoad } from "../../../../../../store-zustand/download-load";

import {
  dataActionsTableMayTasks,
  dataTitleTableMayTasks,
} from "./helpers/data";
import { SearchInputMyTasks } from "../search-my-task";

export function MyTasksTable() {
  const { myTasks, isLoading } = useMyTasks();
  const { currentPage, setCurrentPage, totalItemsPage, itemsPerPage } =
    useStoreZustandDownloadLoad();

  const nextPaginate = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  return (
    <DynamicTable
      title="Minhas Tarefas"
      description="Gerencie suas tarefas e visualize quando quiser."
      isLoadingPage={isLoading}
      data={myTasks ?? []}
      offset={1}
      totalItems={totalItemsPage}
      itemsPerPage={itemsPerPage}
      nextPaginate={nextPaginate}
      columns={dataTitleTableMayTasks}
      actions={dataActionsTableMayTasks}
      childerSearch={<SearchInputMyTasks />}
    />
  );
}
