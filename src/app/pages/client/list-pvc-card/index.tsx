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

import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { useCallback, useEffect, useState } from "react";
import { handleSigninWhithUserAndPassword } from "../../../../domain/use-cases/dowload-load";
import { sleep } from "../../../../utils/sleep/sleep";
import { ListPvcCardTable } from "./components/list-pvc-card-table/list-pvc-card-table";

type ITesteProps = {
  id: string;
  numero_remessa: string;
  name: string;
  situacao: string;
  solicitante: string;
  tecnologia: string;
  status: string;
  numberSolicitation: number;
  availableAt: Date;
};

const ListPvcCardPage = () => {
  const [dowloadLoad, setDowloadLoad] = useState<ITesteProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [itemsPerPage] = useState(5); // Itens por página
  const [_totalItems, setTotalItems] = useState(0); // Total de itens

  const handleGetAllDowloadLoad = async () => {
    setIsLoading(true);
    console.log(currentPage);

    await sleep(500);
    const data = await handleSigninWhithUserAndPassword(
      "Token",
      currentPage,
      itemsPerPage
    );

    setDowloadLoad(data);
    setTotalItems(data?.length ?? 0);
    setIsLoading(false);
  };

  const nextPaginate = useCallback(
    () => setCurrentPage((old) => old + 1),
    [currentPage]
  );

  useEffect(() => {
    handleGetAllDowloadLoad();
  }, [currentPage]);

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
              <ListPvcCardTable
                nextPaginate={nextPaginate}
                products={dowloadLoad}
                offset={itemsPerPage}
                totalProducts={10}
              />
            </TabsContent>
          </Tabs>
        </>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { ListPvcCardPage };
