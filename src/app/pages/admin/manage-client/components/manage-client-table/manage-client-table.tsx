import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "../../../../../../presentation/components/table/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../presentation/components/card/card";

// import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../../../presentation/components/button/button";
import { ManegeClient } from "../manege-client";
import { SearchInput } from "../../../../../../presentation/components/search/search";
import { SpinnerTable } from "../../../../../../presentation/components/spinner-table/spinner-table";

export function ManageClientTable({
  clients,
  offset,
  totalClients,
  isLoadingPage,
  nextPaginate,
}: {
  isLoadingPage: boolean;
  clients: any[];
  offset: number;
  totalClients: number;
  nextPaginate(): void;
}) {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Gerenciar Clientes</CardTitle>
          <CardDescription>
            Gerencie seus clientes e visualize quando quiser.
          </CardDescription>
        </div>

        <div>
          <SearchInput />
        </div>
      </CardHeader>

      {isLoadingPage ? (
        <SpinnerTable />
      ) : (
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>

                <TableHead className="hidden md:table-cell">CPNJ</TableHead>

                <TableHead>Telefone</TableHead>

                <TableHead>Contato</TableHead>

                <TableHead>E-mail</TableHead>

                <TableHead>Créditos</TableHead>

                <TableHead className="hidden md:table-cell">Data</TableHead>
                <TableHead className="hidden md:table-cell">Ações</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <ManegeClient key={client.id} customers={client} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}

      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando{" "}
            <strong>
              {Math.min(offset - productsPerPage, totalClients) + 1}-{offset}
            </strong>{" "}
            total de <strong>{totalClients}</strong> clientes
          </div>
          <div className="flex">
            <Button
              // formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              // formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalClients}
            >
              Proxímo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
