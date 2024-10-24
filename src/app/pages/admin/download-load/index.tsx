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
                <div className="mr-4">
                  <label htmlFor="itemsPerPage" className="mr-2 text-gray-700">
                    Itens por página:
                  </label>
                  <select
                    id="itemsPerPage"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-sm text-gray-700 bg-white"
                  >
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                  </select>
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
            <TabsContent value="all">
              <DowloadLoadTable
                nextPaginate={nextPaginate}
                downloadLoad={downloads}
                offset={itemsPerPage}
                totalProducts={totalItemsPage}
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
