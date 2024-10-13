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
import { ExpeditionTable } from "./components/expedition-table/expedition-table";
import { useEffect, useState } from "react";
import { sleep } from "../../../utils/sleep/sleep";
import { handleGetExpedition } from "../../../domain/use-cases/expedition";
import { Spinner } from "../../../presentation/components/spinner/spinner";

type ITesteProps = {
  id: string;
  numero_remessa: string;
  name: string;
  situacao: string;
  solicitante: string;
  tecnologia: string;
  availableAt: Date;
};

const Expedition = () => {
  const [expedition, setExpedition] = useState<ITesteProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, _setCurrentPage] = useState(1); // Página atual
  const [itemsPerPage] = useState(5); // Itens por página
  const [_totalItems, setTotalItems] = useState(0); // Total de itens

  const handleGetAllOrdersCompleted = async () => {
    setIsLoading(true);
    console.log(currentPage);

    await sleep(500);
    const data = await handleGetExpedition("Token", currentPage, itemsPerPage);
    setExpedition(data);
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
            <TabsList>
              <TabsTrigger value="all">Remessas</TabsTrigger>
              <TabsTrigger value="active">Minhas Tarefas</TabsTrigger>
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
                  Adiconar expedição
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <ExpeditionTable
              products={expedition}
              offset={0}
              totalProducts={1}
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
