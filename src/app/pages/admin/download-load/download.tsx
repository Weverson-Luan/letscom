import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../presentation/components/dropdown-menu/dropdown-menu";
import { SquareCheck, Trash } from "lucide-react";
import {
  TableCell,
  TableRow,
} from "../../../../presentation/components/table/table";

import { Button } from "../../../../presentation/components/button/button";
import { Badge } from "../../../../presentation/components/badge/badge";
import { handleLimitTextdisplayByAmount } from "../../../../utils/text-limit";

export function DowloadLoad({ downloadLoad }: { downloadLoad: any }) {
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="hidden md:table-cell">
        {downloadLoad.remessa}
      </TableCell>

      <TableCell className="font-medium">
        {handleLimitTextdisplayByAmount({
          text: downloadLoad.cliente,
          limit: 12,
        })}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({
          text: downloadLoad.solicitante,
          limit: 12,
        })}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <Badge className="bg-green-500 text-center">
          {downloadLoad.status}
        </Badge>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {downloadLoad.quantidadeSolicitacao}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({
          text: downloadLoad.tecnologia,
          limit: 12,
        })}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {downloadLoad.posicao}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {downloadLoad.dataSolicitacao}
      </TableCell>

      <TableCell>
        <div className="w-full flex">
          {/* Botão de Visualizar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <SquareCheck className="h-4 w-4 text-green-600" />
                <span className="sr-only">Visualizar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => console.log("pegar tarefa")}>
                Pegar Tarefa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
