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
import { SearchInput } from "../../../../../../presentation/components/search/search";
import { SpinnerTable } from "../../../../../../presentation/components/spinner-table/spinner-table";
import { ManagerCreditsMainTable } from "../manager-credits-main-table/manager-credits-main-table";

export function ManagerCreditsTable({
  isLoadingPage,
  credits,
  offset,
  totalCredits,
}: {
  isLoadingPage: boolean;
  credits: any[];
  offset: number;
  totalCredits: number;
  nextPaginate(): void;
}) {
  let creditsPerPageDefault = 5;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>Gerencie créditos</CardTitle>
          <CardDescription>
            Gerencie os crédito dos seus clientes e visualize quando quiser.
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

                <TableHead className="hidden md:table-cell">Produto</TableHead>

                <TableHead className="hidden md:table-cell">Saldo</TableHead>

                <TableHead className="hidden md:table-cell">Ações</TableHead>
                <TableHead>
                  <span className="sr-only">Ações </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credits.map((credit) => (
                <ManagerCreditsMainTable key={credit.id} credits={credit} />
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
              {Math.min(offset - creditsPerPageDefault, totalCredits) + 1}-
              {offset}
            </strong>{" "}
            de <strong>{totalCredits}</strong> expedições
          </div>
          <div className="flex">
            <Button
              // formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === creditsPerPageDefault}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              // formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + creditsPerPageDefault > totalCredits}
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
