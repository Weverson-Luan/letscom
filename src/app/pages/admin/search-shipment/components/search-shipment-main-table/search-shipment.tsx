import { MoreHorizontal } from "lucide-react";

import { Button } from "../../../../../../presentation/components/button/button";
import { Badge } from "../../../../../../presentation/components/badge/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../../../presentation/components/dropdown-menu/dropdown-menu";
import {
  TableCell,
  TableRow,
} from "../../../../../../presentation/components/table/table";

export function SearchShipment({ searchShipments }: { searchShipments: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">
        {searchShipments.remessa}
      </TableCell>

      <TableCell className="font-medium">{searchShipments.cliente}</TableCell>
      <TableCell>
        <Badge className="bg-green-500">{searchShipments.status}</Badge>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {searchShipments.solicitante}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {searchShipments.quantidade}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {searchShipments.modelo}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {searchShipments.dataSolicitacao}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {searchShipments.dataSolicitacao}
      </TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Edititar</DropdownMenuItem>
            <DropdownMenuItem>
              <form>
                <button type="submit">Excluir</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
