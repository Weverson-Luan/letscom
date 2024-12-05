/**
 * IMPORTS
 */
import { useCallback } from "react";

import { File } from "lucide-react";

// components
import { Button } from "../../../../presentation/components/button/button";
import { DynamicTable } from "../../../../presentation/components/table-custom/table";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

// hooks
import { useExpedition } from "../../../../hooks/expedition/use-expedition";

// zustand
import { useStoreZustandExpedition } from "../../../../store-zustand/expedition/expedition";
import { dataActionsExpedtition, dataTitleExpedtition } from "./helpers/data";
import { SearchInputExpedition } from "./components/search-expedition";

const Expedition = () => {
  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    isLoading,
    itemsPerPage,
    isLoadingPage,
    setItemsPerPage,
  } = useStoreZustandExpedition();

  const { expeditions } = useExpedition();

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
          <div className="flex items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">Expedições</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:block">
                {/* Adicionando o seletor de itens por página */}
                <SelectPagination
                  itemsPerPage={itemsPerPage}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                />
              </div>

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

          <DynamicTable
            title="Expedições"
            description="Gerencie suas expedições e visualize quando quiser."
            isLoadingPage={isLoadingPage}
            data={expeditions ?? []}
            offset={1}
            totalItems={totalItemsPage}
            itemsPerPage={itemsPerPage}
            nextPaginate={nextPaginate}
            columns={dataTitleExpedtition}
            actions={dataActionsExpedtition}
            childerSearch={<SearchInputExpedition />}
          />
        </Tabs>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { Expedition };
