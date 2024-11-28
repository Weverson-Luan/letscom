/**
 * IMPORTS
 */

import { File, PlusCircle } from "lucide-react";
import { Button } from "../../../../presentation/components/button/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { useCallback } from "react";
import { Spinner } from "../../../../presentation/components/spinner/spinner";

import { CreateClientModal } from "./components/create-client-modal/create-cliente-modal";
import { useStoreZustandManageClient } from "../../../../store-zustand/manage-client/manege-client";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { useManageClient } from "../../../../hooks/manage-client/use-manage-client";
import { DynamicTable } from "../../../../presentation/components/table-custom/table";
import {
  dataActionsTableCustomers,
  dataTitleTableCustomers,
} from "./helpers/data";

const ManageClient = () => {
  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    isLoading,
    itemsPerPage,
    isLoadingPage,
    setItemsPerPage,
    setIsModalCreateClient,
    isModalCreateClient,
  } = useStoreZustandManageClient();
  const { clients } = useManageClient();

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
            <div className="flex items-center mb-4">
              <TabsList className="">
                <TabsTrigger value="all" className="">
                  Ativos
                </TabsTrigger>

                <TabsTrigger value="false-1">Inativos</TabsTrigger>
                <TabsTrigger value="false-2">Inadimplentes</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                {/* Adicionando o seletor de itens por página */}
                <SelectPagination
                  itemsPerPage={itemsPerPage}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                />

                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5 text-zinc-800" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowra text-zinc-800">
                    Exportar
                  </span>
                </Button>

                <Button
                  size="sm"
                  className="h-8 gap-1"
                  onClick={() => setIsModalCreateClient(true)}
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Adiconar cliente
                  </span>
                </Button>
              </div>
            </div>

            <DynamicTable
              title="Clientes"
              description="Gerencie seus clientes e visualize quando quiser."
              isLoadingPage={isLoadingPage}
              data={clients ?? []}
              offset={1}
              totalItems={totalItemsPage}
              itemsPerPage={itemsPerPage}
              nextPaginate={nextPaginate}
              columns={dataTitleTableCustomers}
              actions={dataActionsTableCustomers}
            />
          </Tabs>

          {isModalCreateClient && (
            <CreateClientModal
              handleToggleCreateActvityModal={() => {
                setIsModalCreateClient(false);
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
export { ManageClient };
