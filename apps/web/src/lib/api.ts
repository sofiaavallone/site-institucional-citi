import axios, { AxiosError } from "axios";
import type { ApiResponse } from "@repo/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export type ApiResult<T> = { data: T; isMocked: boolean };

export async function apiGet<T>(path: string, fallback: T): Promise<ApiResult<T>> {
  try {
    const { data } = await api.get<ApiResponse<T>>(path, {
      headers: { "Cache-Control": "no-store" },
    });
    return { data: data.data, isMocked: false };
  } catch {
    return { data: fallback, isMocked: true };
  }
}

/**
 * Envia um POST e devolve a resposta da API. Em caso de erro, lança uma
 * mensagem amigável (vinda do backend, quando disponível).
 */
export async function apiPost<T, B = unknown>(path: string, body: B): Promise<T> {
  try {
    const { data } = await api.post<ApiResponse<T>>(path, body);
    return data.data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data?.error
        : undefined;
    throw new Error(message ?? "Não foi possível enviar agora. Tente novamente.");
  }
}
