import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "../../../../../../../../../presentation/components/table/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../../../../presentation/components/card/card";

import { Button } from "../../../../../../../../../presentation/components/button/button";
import { DowloadLoad } from "../../../../../download";
import { SearchInput } from "../../../../../../../../../presentation/components/search/search";
import { IDownloadLoadResponse } from "../../../../../../../../../hooks/download-load/use-download-load";
import { SpinnerTable } from "../../../../../../../../../presentation/components/spinner-table/spinner-table";

export function DowloadLoadTable({
  downloadLoad,
  offset,
  totalProducts,
  nextPaginate,
  isLoadingPage,
}: {
  downloadLoad: IDownloadLoadResponse[];
  offset: number;
  totalProducts: number;
  isLoadingPage: boolean;
  nextPaginate(): void;
}) {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Pegar Tarefas</CardTitle>
          <CardDescription>
            Gerencie suas cargas e visualize quando quiser.
          </CardDescription>
        </div>

        <div>
          <SearchInput />
        </div>
      </CardHeader>
      <CardContent>
        {isLoadingPage ? (
          <SpinnerTable />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Remessa</TableHead>

                <TableHead>Cliente</TableHead>

                <TableHead>Solicitante</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Qtd</TableHead>

                <TableHead>Tecnologia</TableHead>

                <TableHead>Posição</TableHead>

                <TableHead className="hidden md:table-cell">Data</TableHead>
                <TableHead className="hidden md:table-cell">Ações</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {downloadLoad.map((download) => (
                <DowloadLoad key={download.id} downloadLoad={download} />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando{" "}
            <strong>
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{" "}
            de <strong>{totalProducts}</strong> baixa de cargas
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
              onClick={nextPaginate}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalProducts}
            >
              Proxímo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
