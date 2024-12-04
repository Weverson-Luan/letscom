/**
 * IMPORTS
 */

import { toast } from "react-toastify";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreZustandUserAuth } from "../../../store-zustand/user-auth";
import { handleAuthUser } from "../../../domain/use-cases/auth/auth";

import { SchemaSignInOfUser } from "./schema/signin";

import Logo from "../../../common/assets/png/logo-let-scom.png";

export type SchemaSigninType = z.infer<typeof SchemaSignInOfUser>;

const SignIn = () => {
  const notify = () => toast("E-mail ou senha inválidos!", { type: "info" });

  const { setIsAuthenticated, isLoading, setIsLoading, setUser } =
    useStoreZustandUserAuth();

  // Configuração do React Hook Form com Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaSigninType>({
    resolver: zodResolver(SchemaSignInOfUser),
  });

  const onSubmit = async (data: SchemaSigninType) => {
    const { email, password } = data;
    setIsLoading(true);

    try {
      const { token, user } = (await handleAuthUser(email, password)) as any;

      if (!!token) {
        localStorage.setItem("@token", token);

        if (!!token) {
          setUser(user);
          setIsAuthenticated(true);
          setIsLoading(false);
          return;
        }
      }
      return notify();
    } catch (error) {
      console.error("Erro ao fazer login", email, password, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Área de Login */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8 h-full">
        <img src={Logo} alt="logo" className="mb-8 w-[150px] h-[150px]" />
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2 text-neutral900">
            Seja bem vindo!
          </h1>
          <p className="text-neutral900 mb-6 font-sans">
            Faça o login para acessar sua conta.
          </p>
        </div>

        <form className="w-full lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-neutral900 text-lg font-normal mb-2">
              E-mail:
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Informe seu e-mail"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-neutral900 text-lg font-normal mb-2">
              Senha:
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Informe sua senha"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-4">
            <button
              className="w-full bg-neutral900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
              type="submit"
            >
              {isLoading ? "Carregando..." : "Login"}
            </button>

            <a
              className="inline-block align-baseline font-medium text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>

        <p className="text-gray-500 text-xs mt-8">
          Let´scom © 2024 - Todos os direitos reservados
        </p>
      </div>

      {/* Área de Imagem */}
      <div className="hidden lg:block lg:w-1/2 h-full">
        <img
          src="https://media.istockphoto.com/id/1496375910/pt/foto/check-in-using-smartphone-qr-code.jpg?s=2048x2048&w=is&k=20&c=PR20UxjxIamferUw1ZgGfw1hao1APP9WQNLPaOQfEC4="
          alt="Two people shaking hands in a professional setting"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

/**
 * EXPORTS
 */
export { SignIn };
