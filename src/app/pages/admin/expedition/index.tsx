/**
 * IMPORTS
 */

import { File } from "lucide-react";
import { Button } from "../../../../presentation/components/button/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";
import { ExpeditionTable } from "./components/expedition-table/expedition-table";
import { useCallback } from "react";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { useStoreZustandExpedition } from "../../../../store-zustand/expedition/expedition";
import { useExpedition } from "../../../../hooks/expedition/use-expedition";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";

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
            <ExpeditionTable
              nextPaginate={nextPaginate}
              expedition={expeditions}
              offset={itemsPerPage}
              totalProducts={totalItemsPage}
              isLoadingPage={isLoadingPage}
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
export { Expedition };
