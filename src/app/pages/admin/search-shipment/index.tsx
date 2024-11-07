/**
 * IMPORTS SearchShipment
 */

import { useCallback } from "react";
import { File } from "lucide-react";

import { Button } from "../../../../presentation/components/button/button";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { SearchShipmentTable } from "./components/search-shipment-table/search-shipment-table";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { useStoreZustandSearchShipment } from "../../../../store-zustand/search-shipment/search-shipment";
import { useManageSearchShipment } from "../../../../hooks/search-shipment/use-search-shipment";

const SearchShipment = () => {
  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    isLoading,
    itemsPerPage,
    isLoadingPage,
    setItemsPerPage,
  } = useStoreZustandSearchShipment();
  const { searchShipments } = useManageSearchShipment();

  const nextPaginate = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  // Função para lidar com a alteração do seletor de itens por página
  const handleItemsPerPageChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
    },
    [itemsPerPage]
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Remessas</TabsTrigger>
              <TabsTrigger value="active">Minhas Tarefas</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              {/* Adicionando o seletor de itens por página */}
              <SelectPagination
                itemsPerPage={itemsPerPage}
                handleItemsPerPageChange={handleItemsPerPageChange}
              />
              {/* Adicionando o botão de exportar */}
              <Button
                size="sm"
                variant="default"
                className="h-8 gap-1 text-neutral-50"
              >
                <File className="h-3.5 w-3.5 " />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowra text-neutral-50">
                  Exportar
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <SearchShipmentTable
              searchShipments={searchShipments}
              offset={itemsPerPage}
              totalsearchShipments={totalItemsPage}
              isLoadingPage={isLoadingPage}
              nextPaginate={nextPaginate}
            />
          </TabsContent>
        </Tabs>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { SearchShipment };
