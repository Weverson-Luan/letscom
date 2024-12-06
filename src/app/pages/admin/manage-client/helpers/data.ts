import { Trash } from "lucide-react";

export const dataTitleTableCustomers = [
  { label: "Cliente", accessor: "nome_identificacao" },
  {
    label: "Créditos",
    accessor: "creditos",
    isBadge: true,
    badgeClassName: "bg-green-500",
  },
  { label: "E-mail", accessor: "email" },
  { label: "CNPJ/CPF", accessor: "documento" },
  { label: "Telefone", accessor: "telefone_contato" },
  { label: "Contato", accessor: "contato" },
  { label: "Data", accessor: "data" },
];

export const dataActionsTableCustomers = [
  {
    icon: Trash,
    label: "Excluir",
    textColor: "text-red-600",
    onClick: (item: any) => console.log("Excluir", item),
  },
];
