import { useCallback, useState } from "react";

import { File } from "lucide-react";

import { Button } from "../../../../presentation/components/button/button";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { CreateLoadModal } from "./components/create-load-modal/create-load-modal";

import { useStoreZustandDownloadLoad } from "../../../../store-zustand/download-load";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { MyTasksTable } from "./components/my-tasks-table/my-tasks.table";
import { RemittancesTable } from "./components/remittances-table/remittances-table";

const DowloadLoad = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, itemsPerPage, setItemsPerPage } =
    useStoreZustandDownloadLoad();

  // Função para lidar com a alteração do seletor de itens por página
  const handleItemsPerPageChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
    },
    [itemsPerPage]
  );

  // const { downloads } = useDownloadLoad();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Remessas</TabsTrigger>
              <TabsTrigger value="my-tasks">Minhas Tarefas</TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-2">
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

          {/* Conteúdo da aba "Remessas" */}
          <TabsContent value="all">
            <RemittancesTable />
          </TabsContent>

          {/* Conteúdo da aba "Minhas Tarefas" */}
          <TabsContent value="my-tasks">
            <MyTasksTable />
          </TabsContent>

          {isModalOpen && (
            <CreateLoadModal
              handleToggleCreateActvityModal={() => {
                setIsModalOpen(!isModalOpen);
              }}
            />
          )}
        </Tabs>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { DowloadLoad };
