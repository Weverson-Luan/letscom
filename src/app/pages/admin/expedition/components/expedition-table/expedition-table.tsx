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
import { Expedition } from "../../expedition";
import { SearchInput } from "../../../../../../presentation/components/search/search";
import { IExpeditionResponse } from "../../../../../../hooks/expedition/use-expedition";
import { SpinnerTable } from "../../../../../../presentation/components/spinner-table/spinner-table";

export function ExpeditionTable({
  expedition,
  offset,
  totalProducts,
  isLoadingPage,
}: {
  expedition: IExpeditionResponse[];
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
          <CardTitle>Expedições</CardTitle>
          <CardDescription>
            Gerencie suas expedições e visualize quando quiser.
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

                <TableHead>Solicitante</TableHead>
                <TableHead className="hidden md:table-cell">
                  Data de criação
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Mais informações
                </TableHead>
                <TableHead>
                  <span className="sr-only">Mais informações </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expedition.map((expeditions) => (
                <Expedition key={expeditions.id} expeditions={expeditions} />
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
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{" "}
            de <strong>{totalProducts}</strong> expedições
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
              disabled={offset + productsPerPage > totalProducts}
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
