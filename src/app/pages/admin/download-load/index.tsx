/**
 * IMPORTS
 */

import { useCallback, useState } from "react";

import { File } from "lucide-react";

import { Button } from "../../../../presentation/components/button/button";
import { DowloadLoadTable } from "./components/download-table/download-table";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { CreateLoadModal } from "./components/create-load-modal/create-load-modal";

import { useDownloadLoad } from "../../../../hooks/download-load/use-download-load";
import { useStoreZustandDownloadLoad } from "../../../../store-zustand/download-load";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";

const DowloadLoad = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { downloads } = useDownloadLoad();

  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    isLoading,
    itemsPerPage,
    setItemsPerPage,
    isLoadingPage,
  } = useStoreZustandDownloadLoad();

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
        <>
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList className="">
                <TabsTrigger value="all" className="">
                  Remessas
                </TabsTrigger>
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
              <DowloadLoadTable
                nextPaginate={nextPaginate}
                downloadLoad={downloads}
                offset={itemsPerPage}
                totalProducts={totalItemsPage}
                isLoadingPage={isLoadingPage}
              />
            </TabsContent>
          </Tabs>

          {isModalOpen && (
            <CreateLoadModal
              handleToggleCreateActvityModal={() => {
                setIsModalOpen(!isModalOpen);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { DowloadLoad };
