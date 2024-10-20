import { Badge, MoreHorizontal } from "lucide-react";
import {
  TableCell,
  TableRow,
} from "../../../../../presentation/components/table/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../../presentation/components/dropdown-menu/dropdown-menu";
import { Button } from "../../../../../presentation/components/button/button";

export function ListPvcCard({ product }: { product: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">{product.remessa}</TableCell>

      <TableCell className="font-medium">{product.cliente}</TableCell>
      <TableCell>{product.situacao}</TableCell>

      <TableCell className="hidden md:table-cell">
        {product.solicitante}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <Badge className="bg-green-500 text-center">{product.status}</Badge>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {product.quantidadeSolicitacao}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {product.tecnologia}
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.posicao}</TableCell>

      <TableCell className="hidden md:table-cell">
        {product.dataSolicitacao}
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
            <DropdownMenuItem>Pegar tarefa</DropdownMenuItem>
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
