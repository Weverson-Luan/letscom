/**
 * IMPORTS
 */
import AxiosService from "../../infra/http/axios";

const authRepository: any = {
  /**
   * Função para logar usuário
   * @param email
   * @param password
   * @returns Promise<any | null>
   */
  async authUser<T>(email: string, password: string): Promise<T | null> {
    const Instance = await AxiosService.createAxiosInstance();

    const data = {
      email,
      password,
    };

    const userAuth = await Instance.post(`signin`, data, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        accept: "*/*",
      },
    });

    return userAuth?.data;
  },
};

/**
 * EXPORTS
 */
export { authRepository };
