import { Trash } from "lucide-react";

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

import { handleLimitTextdisplayByAmount } from "../../../../../../utils/text-limit";

export function SearchShipment({ searchShipments }: { searchShipments: any }) {
  return (
    <TableRow className="cursor-pointer">
      {/* Checkbox */}
      <TableCell className="md:table-cell">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {searchShipments.remessa}
      </TableCell>

      <TableCell className="font-medium">
        {handleLimitTextdisplayByAmount({
          text: searchShipments.cliente,
          limit: 12,
        })}
      </TableCell>
      <TableCell>
        <Badge className="bg-green-500">{searchShipments.status}</Badge>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({
          text: searchShipments.solicitante,
          limit: 12,
        })}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {searchShipments.quantidade}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({
          text: searchShipments.modelo,
          limit: 12,
        })}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {searchShipments.dataSolicitacao}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {searchShipments.dataSolicitacao}
      </TableCell>

      {/* Ações */}
      <TableCell>
        <div className="w-full flex">
          {/* Botão de Excluir */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <Trash className="h-4 w-4 text-red-600" />
                <span className="sr-only">Excluir</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem>
                <form>
                  <button type="submit">Excluir</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
}
