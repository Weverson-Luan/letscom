import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "../../../../../presentation/components/table/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../presentation/components/card/card";

import { Button } from "../../../../../presentation/components/button/button";
import { SearchShipment } from "../../search-shipment";

export function SearchShipmentTable({
  products,
  offset,
  totalProducts,
}: {
  products: any[];
  offset: number;
  totalProducts: number;
}) {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pesquisar remessas</CardTitle>
        <CardDescription>
          Gerencie suas remessas e visualize quando quiser.
        </CardDescription>
      </CardHeader>
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
            {products.map((product) => (
              <SearchShipment key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
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
