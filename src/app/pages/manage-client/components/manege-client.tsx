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

export function ManegeClient({ product }: { product: any }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">{product.name}</TableCell>

      <TableCell className="font-medium">{product.cnpj}</TableCell>
      <TableCell>{product.telefone}</TableCell>

      <TableCell className="hidden md:table-cell">{product.contato}</TableCell>

      <TableCell className="hidden md:table-cell">{product.email}</TableCell>

      <TableCell className="hidden md:table-cell">{product.creditos}</TableCell>

      <TableCell className="hidden md:table-cell">
        {product.availableAt}
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
