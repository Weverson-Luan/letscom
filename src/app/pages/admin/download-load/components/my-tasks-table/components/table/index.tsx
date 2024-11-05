import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../../../presentation/components/card/card";
import { SearchInput } from "../../../../../../../../presentation/components/search/search";
import { SpinnerTable } from "../../../../../../../../presentation/components/spinner-table/spinner-table";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../../../../presentation/components/table/table";
import { Button } from "../../../../../../../../presentation/components/button/button";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Renders the MyTasksTable component, which displays a paginated table of tasks
 * with options for searching, pagination, and loading state indication.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.downloadLoad - An array of task data to be displayed in the table.
 * @param {number} props.offset - The current offset for paginated data.
 * @param {number} props.totalProducts - The total number of tasks available.
 * @param {boolean} props.isLoadingPage - Indicates if the page is currently loading.
 * @param {Function} props.nextPaginate - Function to be called to load the next page of data.
 *
 * @returns {JSX.Element} The rendered MyTasksTable component.
 */
export function TasksTable({
  downloadLoad,
  offset,
  totalProducts,
  nextPaginate,
  isLoadingPage,
}: {
  downloadLoad: any[];
  offset: number;
  totalProducts: number;
  isLoadingPage: boolean;
  nextPaginate(): void;
}): JSX.Element {
  let productsPerPage = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Minhas Tarefas</CardTitle>
          <CardDescription>
            Gerencie suas tarefas e visualize quando quiser.
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
              {downloadLoad.map((_download) => (
                <p>ola mundo</p>
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
