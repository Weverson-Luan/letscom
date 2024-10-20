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

import { SearchInput } from "../../../../../../presentation/components/search/search";
import { ShipmentInProgress } from "../shipment-in-progress";

export function ShipmentInProgressTable({
  products,
  offset,
  totalProducts,
  nextPaginate,
}: {
  products: any[];
  offset: number;
  totalProducts: number;
  nextPaginate(): void;
}) {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Remessas em andamento</CardTitle>
          <CardDescription>
            Gerencie suas remessas e visualize quando quiser.
          </CardDescription>
        </div>

        <div>
          <SearchInput />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Remessa</TableHead>

              <TableHead>Cliente</TableHead>

              <TableHead className="hidden md:table-cell">Situação</TableHead>

              <TableHead>Solicitante</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Nº Solicitações</TableHead>

              <TableHead>Tecnologia</TableHead>

              <TableHead>Posição</TableHead>

              <TableHead className="hidden md:table-cell">
                Data solicitação
              </TableHead>
              <TableHead className="hidden md:table-cell">Ações</TableHead>
              <TableHead>
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <ShipmentInProgress key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
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
