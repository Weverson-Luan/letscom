import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../presentation/components/dropdown-menu/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import {
  TableCell,
  TableRow,
} from "../../../../presentation/components/table/table";

import { Button } from "../../../../presentation/components/button/button";
import { Badge } from "../../../../presentation/components/badge/badge";

export function OrdersCompleted({ product }: { product: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">{product.remessa}</TableCell>

      <TableCell className="font-medium">{product.cliente}</TableCell>
      <TableCell>{product.modelo}</TableCell>

      <TableCell className="hidden md:table-cell">
        {product.solicitante}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {product.availableAt}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {product.availableAtEnd}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <Badge className="bg-blue-500">{product.responsavel}</Badge>
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
