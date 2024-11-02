import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../../presentation/components/dropdown-menu/dropdown-menu";
import { SquarePen, Trash } from "lucide-react";
import {
  TableCell,
  TableRow,
} from "../../../../../presentation/components/table/table";

import { Button } from "../../../../../presentation/components/button/button";
import { handleLimitTextdisplayByAmount } from "../../../../../utils/text-limit";

export function ManegeClient({ customers }: { customers: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({ text: customers.name, limit: 12 })}
      </TableCell>

      <TableCell className="font-medium">{customers.cnpj}</TableCell>
      <TableCell>{customers.telefone}</TableCell>

      <TableCell className="hidden md:table-cell">
        {customers.contato}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {handleLimitTextdisplayByAmount({ text: customers.email, limit: 12 })}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {customers.creditos}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {customers.availableAt}
      </TableCell>

      <TableCell>
        <div className="w-full flex">
          {/* Botão de Editar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <SquarePen className="h-4 w-4 text-blue-600" />
                <span className="sr-only">Editar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem>Editar Tarefa</DropdownMenuItem>
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
