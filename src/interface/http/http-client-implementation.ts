import axios, { AxiosError, AxiosInstance } from "axios";
import { HttpRequest, IHttpClient } from "./http-client-contract";

export class HttpClient implements IHttpClient {
  constructor(
    private httpClientApi: AxiosInstance = axios,
    private baseUrl: string = "http://localhost:5000/api"
  ) {}
  async sendRequest<TResponse, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<TResponse> {
    const { endpoint, method, body, headers } = request;
    try {
      const { data } = await this.httpClientApi.request({
        url: `${this.baseUrl}/${endpoint}`,
        method,
        data: body,
        headers,
      });

      return data;
    } catch (err) {
      const error = err as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.response;

      throw new Error(`Request falied with status ${status}: ${message}`);
    }
  }
}
