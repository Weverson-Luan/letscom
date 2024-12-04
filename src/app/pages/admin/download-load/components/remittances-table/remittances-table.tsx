import { useCallback } from "react";
import { useStoreZustandDownloadLoad } from "../../../../../../store-zustand/download-load";
import { usePickUpTasks } from "../../../../../../hooks/download-load/use-download-load";
import { DynamicTable } from "../../../../../../presentation/components/table-custom/table";
import {
  dataActionsTableRemittances,
  dataTitleTableRemittances,
} from "./helpers/data";
import { SearchInputPickUpTasks } from "../pick-up-tasks";

export function RemittancesTable() {
  const { downloads } = usePickUpTasks();

  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    itemsPerPage,
    isLoadingPage,
  } = useStoreZustandDownloadLoad();

  const nextPaginate = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);
  return (
    <>
      <DynamicTable
        title="Pegar Tarefas"
        description="Gerencie suas remessas e visualize quando quiser."
        isLoadingPage={isLoadingPage}
        data={downloads ?? []}
        offset={1}
        totalItems={totalItemsPage}
        itemsPerPage={itemsPerPage}
        nextPaginate={nextPaginate}
        columns={dataTitleTableRemittances}
        actions={dataActionsTableRemittances}
        childerSearch={<SearchInputPickUpTasks />}
      />
    </>
  );
}
