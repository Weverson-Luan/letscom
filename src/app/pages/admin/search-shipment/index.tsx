import { useCallback, useState } from "react";
import { File, Trash, MessageCircle } from "lucide-react";

// components
import { Button } from "../../../../presentation/components/button/button";
import { DynamicTable } from "../../../../presentation/components/table-custom/table";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { Spinner } from "../../../../presentation/components/spinner/spinner";

// zustand
import { useStoreZustandSearchShipment } from "../../../../store-zustand/search-shipment/search-shipment";

// hooks
import { useManageSearchShipment } from "../../../../hooks/search-shipment/use-search-shipment";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

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

  const [selectedItems, setSelectedItems] = useState<string[]>([]); // IDs dos itens selecionados

  const nextPaginate = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  // função para lidar com a alteração do seletor de itens por página
  const handleItemsPerPageChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
    },
    [itemsPerPage]
  );

  // função para selecionar todos os itens
  const handleSelectAll = () => {
    if (selectedItems.length === searchShipments.length) {
      setSelectedItems([]); // Desmarca todos os itens
    } else {
      setSelectedItems(searchShipments.map((item: any) => item.id)); // Marca todos os itens
    }
  };

  // função para selecionar um único item
  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId)); // Desmarca o item
    } else {
      setSelectedItems([...selectedItems, itemId]); // Marca o item
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultValue="all">
          <div className="flex items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">Remessas</TabsTrigger>
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
          <DynamicTable
            title="Pesquisar remessas"
            description="Gerencie suas remessas e visualize quando quiser."
            isLoadingPage={isLoadingPage}
            data={searchShipments ?? []}
            offset={itemsPerPage}
            totalItems={totalItemsPage}
            checkBox
            itemsPerPage={5}
            nextPaginate={nextPaginate}
            selectedItems={selectedItems} // Passa os itens selecionados
            onSelectAll={handleSelectAll} // Passa a função de selecionar todos
            onSelectItem={handleSelectItem} // Passa a função de selecionar um item
            columns={[
              { label: "Remessa", accessor: "remessa" },
              { label: "Cliente", accessor: "cliente" },
              { label: "Criado por", accessor: "solicitante" },
              {
                label: "Situação",
                accessor: "status",
                isBadge: true,
                badgeClassName: "bg-green-500",
              },
              {
                label: "Qtd",
                accessor: "quantidade",
                className: "hidden md:table-cell",
              },
              { label: "Modelo", accessor: "modelo" },
              { label: "Consultor", accessor: "consultor" },
              { label: "Responsável", accessor: "responsavel" },
              { label: "Solicitado", accessor: "dataSolicitacao" },
              { label: "Finalizado", accessor: "dataFinalizacao" },
            ]}
            actions={[
              {
                icon: MessageCircle,
                label: "Excluir",
                textColor: "text-blue-600",
                onClick: (item: any) => console.log("Excluir", item),
              },
              {
                icon: Trash,
                label: "Excluir",
                textColor: "text-red-600",
                onClick: (item: any) => console.log("Excluir", item),
              },
            ]}
          />
        </Tabs>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { SearchShipment };
