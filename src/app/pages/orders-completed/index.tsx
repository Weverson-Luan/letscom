/**
 * IMPORTS
 */

import { File, PlusCircle } from "lucide-react";
import { Button } from "../../../presentation/components/button/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../presentation/components/tabs";

import { OrdersCompletedTable } from "./components/orders-completed-table/orders-completed-table";
import { useEffect, useState } from "react";
import { handleGetOrdersCompleted } from "../../../domain/use-cases/orders-completed";
import { Spinner } from "../../../presentation/components/spinner/spinner";
import { sleep } from "../../../utils/sleep/sleep";

type ITesteProps = {
  id: string;
  name: string;
  cnpj: string;
  telefone: string;
  contato: string;
  email: string;
  creditos: number;
  availableAt: Date;
};

const OrdersCompleted = () => {
  const [ordersCompleted, setOrdersCompleted] = useState<ITesteProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, _setCurrentPage] = useState(1); // Página atual
  const [itemsPerPage] = useState(5); // Itens por página
  const [_totalItems, setTotalItems] = useState(0); // Total de itens

  const handleGetAllOrdersCompleted = async () => {
    setIsLoading(true);
    console.log(currentPage);

    await sleep(500);
    const data = await handleGetOrdersCompleted(
      "Token",
      currentPage,
      itemsPerPage
    );
    setOrdersCompleted(data);
    setTotalItems(data?.length ?? 0);
    setIsLoading(false);
  };

  // const nextPaginate = useCallback(
  //   () => setCurrentPage((old) => old + 1),
  //   [currentPage]
  // );

  useEffect(() => {
    handleGetAllOrdersCompleted();
  }, [currentPage]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="">
              <TabsTrigger value="all" className="">
                Ativos
              </TabsTrigger>
              <TabsTrigger value="active">Inativos</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5 text-zinc-800" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowra text-zinc-800">
                  Exportar
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Adicionar produto
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <OrdersCompletedTable
              products={ordersCompleted}
              offset={5}
              totalProducts={5}
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
export { OrdersCompleted };
