import { ChevronLeft, ChevronRight } from "lucide-react";

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

import { Button } from "../../../../../../presentation/components/button/button";
import { SearchShipment } from "../search-shipment-main-table/search-shipment";
import { SearchInput } from "../../../../../../presentation/components/search/search";
import { SpinnerTable } from "../../../../../../presentation/components/spinner-table/spinner-table";

export function SearchShipmentTable({
  isLoadingPage,
  searchShipments,
  offset,
  totalsearchShipments,
}: {
  isLoadingPage: boolean;
  searchShipments: any[];
  offset: number;
  totalsearchShipments: number;
  nextPaginate(): void;
}) {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Pesquisar remessas</CardTitle>
          <CardDescription>
            Gerencie suas remessas e visualize quando quiser.
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
                <TableHead>Remessa</TableHead>

                <TableHead>Cliente</TableHead>

                <TableHead className="hidden md:table-cell">Situação</TableHead>

                <TableHead>Criado por</TableHead>
                <TableHead className="hidden md:table-cell">Qtd</TableHead>

                <TableHead>Modelo</TableHead>

                <TableHead>Solicitado</TableHead>
                <TableHead>Finalizado</TableHead>

                <TableHead className="hidden md:table-cell">Ações</TableHead>
                <TableHead>
                  <span className="sr-only">Ações </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchShipments.map((searchShipment) => (
                <SearchShipment
                  key={searchShipment.id}
                  searchShipments={searchShipment}
                />
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
              {Math.min(offset - productsPerPage, totalsearchShipments) + 1}-
              {offset}
            </strong>{" "}
            de <strong>{totalsearchShipments}</strong> expedições
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
              disabled={offset + productsPerPage > totalsearchShipments}
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
