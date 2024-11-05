/**
 * IMPORTS
 */
import { z } from "zod";
import { File, PlusCircle } from "lucide-react";
import { Button } from "../../../../presentation/components/button/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../presentation/components/tabs";

import { ManageClientTable } from "./components/manage-client-table/manage-client-table";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../../../presentation/components/spinner/spinner";

import { SchemaManagerClient } from "./schema/manager-client-schema";
import { CreateClientModal } from "./components/create-client-modal/create-cliente-modal";
import { useStoreZustandManageClient } from "../../../../store-zustand/manage-client/manege-client";
// import { useManageClient } from "../../../../hooks/manage-client/use-manage-client";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { supabase } from "../../../../data/lib/supa-base";

export type SchemaManagerClientType = z.infer<typeof SchemaManagerClient>;

export type Status = "error" | "success";

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
  // const { clients } = useManageClient();

  const [teste, setTeste] = useState<any[]>([]);

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

  // async function getRemessasComUsuario(userId: number) {
  //   const { data: remessas, error } = await supabase
  //     .from("Remessas")
  //     .select(
  //       `
  //       *,
  //       Usuarios (
  //         id,
  //         nome_identificacao,
  //         email
  //       )
  //     `
  //     )
  //     .eq("user_id", userId)
  //     .order("id", { ascending: true });

  //   if (error) {
  //     console.error(
  //       "Erro ao buscar remessas com dados do usuário:",
  //       error.message
  //     );
  //   } else {
  //     setTeste(remessas);
  //   }
  // }

  async function getUsuarios() {
    const { data: remessas, error } = await supabase
      .from("Usuarios")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Erro ao buscar  dados do usuário:", error.message);
    } else {
      setTeste(remessas);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  console.log("*", teste);
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
            <TabsContent value="all">
              <ManageClientTable
                clients={teste}
                totalClients={totalItemsPage}
                offset={itemsPerPage}
                nextPaginate={nextPaginate}
                isLoadingPage={isLoadingPage}
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
