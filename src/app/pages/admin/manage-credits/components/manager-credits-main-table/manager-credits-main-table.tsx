import { Eye } from "lucide-react";

import { Button } from "../../../../../../presentation/components/button/button";

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

export function ManagerCreditsMainTable({ credits }: { credits: any }) {
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="font-medium">
        {handleLimitTextdisplayByAmount({
          text: credits.cliente,
          limit: 24,
        })}
      </TableCell>

      {/* Ações */}
      <TableCell>
        <div className="w-full flex">
          {/* Botão de Excluir */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <Eye className="h-4 w-4 text-blue-600" />
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
