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

import { DowloadLoadTable } from "./components/download-table/download-table";
import { Spinner } from "../../../presentation/components/spinner/spinner";
import { useCallback, useEffect, useState } from "react";
import { handleSigninWhithUserAndPassword } from "../../../domain/use-cases/dowload-load";
import { sleep } from "../../../utils/sleep/sleep";

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

export const dataMokcDownLoad = [
  {
    id: "1",
    name: "OASIS CLUBE",
    numero_remessa: "31542",
    situacao: "Laminado",
    solicitante: "Jessica Arantes",
    status: "Em andamento",
    tecnologia: "STYW",
    numberSolicitation: 10,
    availableAt: new Date(),
  },
  ,
  {
    id: "2",
    name: "REFUD",
    numero_remessa: "31543",
    situacao: "Salvo",
    solicitante: "Gustavo Miranda",
    tecnologia: "STYW",
    status: "Imprimir",
    numberSolicitation: 6,
    availableAt: new Date(),
  },
  {
    id: "3",
    name: "TRANSPORTES URGENTES",
    numero_remessa: "31544",
    situacao: "Impresso",
    solicitante: "Pedro José",
    tecnologia: "STYW",
    status: "Processando",
    numberSolicitation: 2,
    availableAt: new Date(),
  },
  {
    id: "4",
    name: "INCOPRE - MG",
    numero_remessa: "31545",
    situacao: "Pronto",
    solicitante: "Fabio Morais Sousa",
    tecnologia: "STYW",
    status: "Concluido",
    numberSolicitation: 22,
    availableAt: new Date(),
  },
  {
    id: "5",
    name: "PROTECAO VEICULAR",
    numero_remessa: "31545",
    situacao: "Laminado",
    solicitante: "Luan Sousa",
    tecnologia: "STYW",
    status: "Imprimir",
    numberSolicitation: 15,
    availableAt: new Date(),
  },
] as ITesteProps[];

const DowloadLoad = () => {
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
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="">
              <TabsTrigger value="all" className="">
                Remessas
              </TabsTrigger>
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
                  Adiconar Carga
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <DowloadLoadTable
              nextPaginate={nextPaginate}
              products={dowloadLoad}
              offset={itemsPerPage}
              totalProducts={10}
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
export { DowloadLoad };
