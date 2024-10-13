/**
 * IMPORTS
 */
import { AxiosRequestConfig } from "axios";

const configAxios: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/", // URL base da API
  timeout: 10000, // Timeout de 10 segundos
};

/**
 * EXPORT
 */
export { configAxios };
