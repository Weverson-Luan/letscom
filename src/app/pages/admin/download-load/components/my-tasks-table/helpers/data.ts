import { CircleAlert, Download, ImageDown, SquareCheck } from "lucide-react";

export const dataTitleTableMayTasks = [
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

export const dataActionsTableMayTasks = [
  {
    icon: Download,
    label: "Baixar dados",
    textColor: "text-blue-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
  {
    icon: ImageDown,
    label: "Baixar fotos",
    textColor: "text-blue-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
  {
    icon: CircleAlert,
    label: "Observação",
    textColor: "text-blue-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
  {
    icon: SquareCheck,
    label: "Finalizar tarefa",
    textColor: "text-green-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
];
