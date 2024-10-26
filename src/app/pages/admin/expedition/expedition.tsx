import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../presentation/components/dropdown-menu/dropdown-menu";
import { Eye, SquarePen, Trash } from "lucide-react";
import {
  TableCell,
  TableRow,
} from "../../../../presentation/components/table/table";
import { Button } from "../../../../presentation/components/button/button";

export function Expedition({ expeditions }: { expeditions: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">
        {expeditions.remessa}
      </TableCell>

      <TableCell className="font-medium">{expeditions.name}</TableCell>
      <TableCell>{expeditions.situacao}</TableCell>

      <TableCell className="hidden md:table-cell">
        {expeditions.solicitante}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {expeditions.availableAt}
      </TableCell>

      <TableCell>
        <div className="w-full flex">
          {/* Botão de Visualizar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <Eye className="h-4 w-4 text-blue-600" />
                <span className="sr-only">Visualizar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
