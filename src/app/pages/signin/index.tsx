/**
 * IMPORTS
 */

import axios from "axios";
import Logo from "../../../common/assets/png/logo-let-scom.png";
import { useStoreZustandUserAuth } from "../../../store-zustand/user-auth";

const SignIn = () => {
  const { setIsAuthenticated, isLoading, setIsLoading } =
    useStoreZustandUserAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    setIsLoading(true);

    const res = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83r5^_",
    });

    localStorage.setItem("@token", res.data.token);

    if (res.data?.token) {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    console.log({ email, password });
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
        <img src={Logo} alt="logo" className="mb-8 w-[200px] h-[200px]" />
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2  text-neutral900">
            Seja bem vindo!
          </h1>
          <p className="text-neutral900 mb-6 font-sans">
            Faça o login para acessar sua conta.
          </p>
        </div>

        <form className="w-1/2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-neutral900 text-lg font-normal mb-2">
              E-mail:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Informe seu e-mail"
            />
          </div>

          <div>
            <label className="block text-neutral900 text-lg font-normal mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Informe sua senha"
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <button
              className="w-full bg-neutral900  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
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
      <div className="w-1/2">
        <img
          src={
            "https://media.istockphoto.com/id/1496375910/pt/foto/check-in-using-smartphone-qr-code.jpg?s=2048x2048&w=is&k=20&c=PR20UxjxIamferUw1ZgGfw1hao1APP9WQNLPaOQfEC4="
          }
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
