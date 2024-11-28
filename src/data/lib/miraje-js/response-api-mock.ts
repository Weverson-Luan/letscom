export interface Customer {
  nome_identificacao: string;
  documento: string;
  telefone_contato: string;
  contato: string;
  email: string;
  creditos: number;
  data: string;
}

export interface PaginatedResponse<T> {
  customers: T[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
}
