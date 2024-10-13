import axios from "axios";
import { configAxios } from "../../config/axios-config";

// função para criar instância do Axios
const createAxiosInstance = async (accessToken?: string) => {
  // criando a instância com configuração base
  const instance = axios.create(configAxios);

  // interceptor para incluir o token de acesso nas requisições
  instance.interceptors.request.use(
    (config: any) => {
      if (accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
          Accept: "*/*",
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptor para tratar respostas e erros
  instance.interceptors.response.use(
    (response) => {
      // Verifica se há erros no campo de erros da resposta
      if (response?.data?.errors?.length) {
        return Promise.reject(new Error(response.data.errors[0]));
      }
      return response;
    },
    (error) => {
      // Tratamento de erros comuns
      if (error.message === "Network Error") {
        return Promise.reject(
          new Error("Sem conexão com a internet, tente novamente mais tarde!")
        );
      }

      if (error.code === "ECONNABORTED") {
        return Promise.reject(
          new Error(
            "Servidor demorou muito para responder, tente novamente mais tarde!"
          )
        );
      }

      if (error.response?.status === 401) {
        // Token expirado ou não autorizado
        return Promise.reject(
          new Error("Token expirado, faça login novamente.")
        );
      }

      if (error.response?.status === 403) {
        return Promise.reject(
          new Error("Você não tem permissão para acessar este recurso.")
        );
      }

      if (error.response?.status === 400 || error.response?.status === 422) {
        return Promise.reject(
          new Error(
            error.response.data.message || "Erro ao processar a requisição."
          )
        );
      }

      if (error.response?.status === 500) {
        return Promise.reject(
          new Error("Erro interno no servidor, tente novamente mais tarde.")
        );
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default {
  createAxiosInstance,
};
