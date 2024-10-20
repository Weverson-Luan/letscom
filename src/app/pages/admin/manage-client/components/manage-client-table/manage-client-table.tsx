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

export function ManageClientTable({
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

              <TableHead className="hidden md:table-cell">
                Data de criação
              </TableHead>
              <TableHead className="hidden md:table-cell">Ações</TableHead>
              <TableHead>
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <ManegeClient key={product.id} product={product} />
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
