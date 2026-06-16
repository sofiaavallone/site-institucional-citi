export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface User {
  id: string;
  email: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
}

/** Dados enviados pelo formulário de contato/diagnóstico. */
export interface ContactInput {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  message?: string | null;
}

export type AppEnvironment = "development" | "production" | "test";
