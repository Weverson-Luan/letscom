import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { SearchInput } from "../search/search";
import { SpinnerTable } from "../spinner-table/spinner-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table";
import { Badge } from "../badge/badge";
import { handleLimitTextdisplayByAmount } from "../../../utils/text-limit";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Button } from "../button/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../dropdown-menu/dropdown-menu";

export function DynamicTable({
  title,
  description,
  isLoadingPage,
  data,
  offset,
  totalItems,
  itemsPerPage,
  nextPaginate,
  columns,
  checkBox = false,
  actions = [],
  selectedItems = [], // Recebe os itens selecionados
  onSelectAll, // Função para selecionar todos
  onSelectItem, // Função para selecionar um item individual
}: any) {
  // Verifica se todos os itens estão selecionados
  const isAllSelected = selectedItems.length === data.length;

  return (
    <Card>
      <CardHeader className="items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
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
                {/* Checkbox de Seleção Todos */}
                {checkBox && (
                  <TableHead>
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={onSelectAll} // Usa a função passada via props
                      className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </TableHead>
                )}

                {/* Dynamic column headers */}
                {columns.map((column: any, index: number) => (
                  <TableHead key={index} className={column.className || ""}>
                    {column.label}
                  </TableHead>
                ))}

                {actions.length > 0 && (
                  <TableHead className="w-16 text-center text-zinc-600">
                    Ações
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item: any, index: number) => (
                <TableRow key={index} className="cursor-pointer">
                  {/* Checkbox de Seleção Individual */}
                  {checkBox && (
                    <TableCell className="md:table-cell">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => onSelectItem(item.id)} // Usa a função passada via props
                        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                    </TableCell>
                  )}

                  {/* Dynamic data cells */}
                  {columns.map((column: any, colIndex: number) => (
                    <TableCell
                      key={colIndex}
                      className={column.className || ""}
                    >
                      {column.isBadge ? (
                        <Badge
                          className={column.badgeClassName || "bg-green-500"}
                        >
                          {item[column.accessor]}
                        </Badge>
                      ) : (
                        handleLimitTextdisplayByAmount({
                          text: item[column.accessor],
                          limit: column.limit || 12,
                        })
                      )}
                    </TableCell>
                  ))}

                  {/* Actions */}
                  {actions.length > 0 && (
                    <TableCell>
                      <div className="w-full flex justify-center space-x-2">
                        {actions.map((action: any, actionIndex: number) => (
                          <DropdownMenu key={actionIndex}>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                                onClick={() => action.onClick(item)}
                              >
                                <action.icon
                                  className={`h-4 w-4 ${action.textColor}`}
                                />
                                <span className="sr-only">{action.label}</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>
                                {action.label}
                              </DropdownMenuLabel>
                              <DropdownMenuItem
                                onClick={() => action.onClick(item)}
                              >
                                <button type="button">{action.label}</button>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ))}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}

      <CardFooter>
        <div className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando{" "}
            <strong>
              {offset} - {Math.min(offset + itemsPerPage, totalItems)}
            </strong>{" "}
            de <strong>{totalItems}</strong> registros
          </div>
          <div className="flex">
            <Button
              variant="ghost"
              size="sm"
              type="button"
              disabled={offset === 0}
              onClick={() => nextPaginate(-1)}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              disabled={offset + itemsPerPage >= totalItems}
              onClick={() => nextPaginate(1)}
            >
              Próximo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
