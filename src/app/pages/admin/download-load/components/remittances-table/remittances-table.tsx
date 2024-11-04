import { useCallback } from "react";
import { DowloadLoadTable } from "./components/table/download-table/download-table";
import { useStoreZustandDownloadLoad } from "../../../../../../store-zustand/download-load";
import { useDownloadLoad } from "../../../../../../hooks/download-load/use-download-load";

export function RemittancesTable() {
  const { downloads } = useDownloadLoad();

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
    <DowloadLoadTable
      nextPaginate={nextPaginate}
      downloadLoad={downloads}
      offset={itemsPerPage}
      totalProducts={totalItemsPage}
      isLoadingPage={isLoadingPage}
    />
  );
}
