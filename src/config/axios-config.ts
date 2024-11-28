/**
 * IMPORTS
 */
import { AxiosRequestConfig } from "axios";

const configAxios: AxiosRequestConfig = {
  baseURL: "/api", // Ajuste para o namespace do MirageJS
  timeout: 10000, // Timeout de 10 segundos
};

/**
 * EXPORT
 */
export { configAxios };
