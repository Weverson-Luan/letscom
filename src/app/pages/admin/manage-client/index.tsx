/**
 * IMPORTS
 */
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { File, PlusCircle } from "lucide-react";
import { Button } from "../../../../presentation/components/button/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { ManageClientTable } from "./components/manage-client-table/manage-client-table";
import { useEffect, useState } from "react";
import { sleep } from "../../../../utils/sleep/sleep";
import { handleGetCustomers } from "../../../../domain/use-cases/cutomers";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SchemaManagerClient } from "./schema/manager-client-schema";
import { CreateClientModal } from "./components/create-client-modal/create-cliente-modal";

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

export type SchemaManagerClientType = z.infer<typeof SchemaManagerClient>;

export type Status = "error" | "success";

const ManageClient = () => {
  const [customers, setCustromers] = useState<ITesteProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, _setCurrentPage] = useState(1); // Página atual
  const [itemsPerPage] = useState(5); // Itens por página
  const [_totalItems, setTotalItems] = useState(0); // Total de itens

  const [isModalCreateClient, setIsModalCreateClient] = useState(false);

  const {} = useForm<SchemaManagerClientType>({
    resolver: zodResolver(SchemaManagerClient),
  });

  const { mutate } = useMutation<string, AxiosError, SchemaManagerClientType>({
    mutationFn: async () => {
      const { data } = await axios.post("/event");
      return data;
    },

    onError(error, variables, context) {
      console.log(error, variables, context);
    },
    onSuccess(data, variables, context) {
      console.log(data, variables, context);
    },
  });

  const onSubmit = (data: SchemaManagerClientType) => {
    mutate(data);
  };

  const handleGetAllOrdersCompleted = async () => {
    setIsLoading(true);
    console.log(currentPage);

    await sleep(500);
    const data = await handleGetCustomers("Token", currentPage, itemsPerPage);
    setCustromers(data);
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
        <>
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList className="">
                <TabsTrigger value="all" className="">
                  Ativos
                </TabsTrigger>

                <TabsTrigger value="false-1">Inativos</TabsTrigger>
                <TabsTrigger value="false-2">Inadimplentes</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 gap-1"
                  onClick={() => {
                    onSubmit([] as any);
                  }}
                >
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
            <TabsContent value="all">
              <ManageClientTable
                products={customers}
                offset={currentPage}
                totalProducts={5}
              />
            </TabsContent>
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
