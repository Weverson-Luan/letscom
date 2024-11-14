import { Trash } from "lucide-react";

export const dataTitleExpedtition = [
  { label: "Remessa", accessor: "remessa" },
  { label: "Cliente", accessor: "cliente" },
  { label: "Solicitante", accessor: "solicitante" },
  {
    label: "Situação",
    accessor: "status",
    isBadge: true,
    badgeClassName: "bg-green-500",
  },
  { label: "Data", accessor: "dataFinalizacao" },
];

export const dataActionsExpedtition = [
  {
    icon: Trash,
    label: "Excluir",
    textColor: "text-red-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
];
