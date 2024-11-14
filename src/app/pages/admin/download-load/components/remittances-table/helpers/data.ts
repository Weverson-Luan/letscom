import { SquareCheck, Trash } from "lucide-react";

export const dataTitleTableRemittances = [
  { label: "Remessa", accessor: "remessa" },
  { label: "Cliente", accessor: "nome_identificacao" },
  { label: "Solicitante", accessor: "solicitante" },
  {
    label: "Status",
    accessor: "status",
    isBadge: true,
    badgeClassName: "bg-green-500",
  },
  { label: "Qtd", accessor: "quantidadeSolicitacao" },
  { label: "Tecnologia", accessor: "tecnologia" },
  {
    label: "Posição",
    accessor: "posicao",
  },
  { label: "Data", accessor: "data" },
];

export const dataActionsTableRemittances = [
  {
    icon: SquareCheck,
    label: "Pegar tarefa",
    textColor: "text-green-600",
    onClick: (item: any) => console.log("Pegar tarefa", item),
  },
  {
    icon: Trash,
    label: "Excluir",
    textColor: "text-red-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
];
