/**
 * IMPORTS
 */

import { authRepository } from "../../../repositories/auth";

/**
 * Função que autentica usuário 🛠️.
 */
const handleAuthUser = async (email: string, password: string) => {
  try {
    const data = await authRepository.authUser(email, password);

    return data;
  } catch (error: any) {
    return error;
  }
};

/**
 * EXPORTS
 */
export { handleAuthUser };
