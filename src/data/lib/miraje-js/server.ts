import { createServer } from "miragejs";
import { customers } from "../mock-api/customers";
import { expedition } from "../mock-api/expedition";
import { searchRequests } from "../mock-api/serach-spnment";
import { credits } from "../mock-api/credits";
import { pickUpTask } from "../mock-api/pick-up-task";
import { myTasks } from "../mock-api/my-tasks";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "/api";

      /**
       * Signin (Login)
       */
      this.post("/signin", (_schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        // Dados simulados de usuários
        const users = [
          {
            id: 1,
            email: "luan.sousa@grupofigueiredo.com",
            password: "123456789",
            name: "Luan Sousa",
            avatar:
              "https://img.freepik.com/fotos-premium/ilustracao-3d-do-utilizador_541443-3647.jpg?w=740",
            role: "admin",
          },
          {
            id: 2,
            email: "tiago@letscom.com",
            password: "123456789",
            name: "Tiago Gugel",
            avatar:
              "https://img.freepik.com/fotos-premium/ilustracao-3d-do-utilizador_541443-3647.jpg?w=740",
            role: "admin",
          },
        ];

        // Validação do usuário
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) {
          //@ts-ignore
          return new Response(401, {}, { error: "Credenciais inválidas" });
        }

        // Simulação de um token JWT
        const token = btoa(`${user.email}:${new Date().getTime()}`);

        return {
          token,
          user,
        };
      });

      /**
       * Pedidos (Remessas)
       */

      this.get("/pick-up-tasks", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const perPage = parseInt(request.queryParams._limit, 10) || 5; // Itens por página

        const total = pickUpTask.length; // Total de itens
        const start = (page - 1) * perPage; // Índice inicial
        const end = start + perPage; // Índice final

        const paginatedPickUpTask = pickUpTask.slice(start, end);

        return {
          pickUpTask: paginatedPickUpTask,
          meta: {
            total, // Total de itens
            page, // Página atual
            perPage, // Itens por página
            totalPages: Math.ceil(total / perPage), // Total de páginas
          },
        };
      });

      /**
       * Minhas Tarefas
       */
      this.get("/my-tasks", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const perPage = parseInt(request.queryParams._limit, 10) || 5; // Itens por página
        const search = request.queryParams.search?.toLowerCase() || ""; // Parâmetro de busca

        // Filtrar clientes pelo nome (se `search` estiver presente)
        const filteredSearchMyTasks = myTasks.filter(
          (searchShipment) =>
            searchShipment.nome_identificacao.toLowerCase().includes(search) ||
            searchShipment.remessa.toLowerCase().includes(search) ||
            searchShipment.solicitante.toLowerCase().includes(search)
        );

        const total = filteredSearchMyTasks.length; // Total de itens
        const start = (page - 1) * perPage; // Índice inicial
        const end = start + perPage; // Índice final

        const paginateMyTask = filteredSearchMyTasks.slice(start, end);

        return {
          myTasks: paginateMyTask,
          meta: {
            total, // Total de itens
            page, // Página atual
            perPage, // Itens por página
            totalPages: Math.ceil(total / perPage), // Total de páginas
          },
        };
      });

      /**
       * Expedições
       */
      this.get("/expedition", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const limit = parseInt(request.queryParams._limit, 10) || 5; // Itens por página
        const search = request.queryParams.search?.toLowerCase() || ""; // Parâmetro de busca

        // Filtrar clientes pelo nome (se `search` estiver presente)
        const filteredSearchExpedition = expedition.filter(
          (searchShipment) =>
            searchShipment.cliente.toLowerCase().includes(search) ||
            searchShipment.remessa.toLowerCase().includes(search) ||
            searchShipment.solicitante.toLowerCase().includes(search)
        );

        const total = filteredSearchExpedition.length;
        const start = (page - 1) * limit;
        const end = start + limit;

        const paginatedExpeditions = filteredSearchExpedition.slice(start, end);

        return {
          expedition: paginatedExpeditions,
          meta: {
            total,
            page,
            perPage: limit,
            totalPages: Math.ceil(total / limit),
          },
        };
      });

      /**
       * Remessas
       */
      this.get("/serach-spnment", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const limit = parseInt(request.queryParams._limit, 10) || 5; // Itens por página
        const search = request.queryParams.search?.toLowerCase() || ""; // Parâmetro de busca

        // Filtrar clientes pelo nome (se `search` estiver presente)
        const filteredSearchShipments = searchRequests.filter(
          (searchShipment) =>
            searchShipment.cliente.toLowerCase().includes(search) ||
            searchShipment.remessa.toLowerCase().includes(search)
        );

        const total = searchRequests.length; // Total de itens
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginateSearchShipment = filteredSearchShipments.slice(
          start,
          end
        );

        return {
          searchShipment: paginateSearchShipment,
          meta: {
            total, // Total de itens
            page,
            perPage: limit,
            totalPages: Math.ceil(total / limit),
          },
        };
      });

      /**
       * Clientes
       */
      this.get("/customers", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const limit = parseInt(request.queryParams._limit, 10) || 5; // Itens por página
        const search = request.queryParams.search?.toLowerCase() || ""; // Parâmetro de busca

        // Filtrar clientes pelo nome (se `search` estiver presente)
        const filteredCustomers = customers.filter((customer) =>
          customer.nome_identificacao.toLowerCase().includes(search)
        );

        const total = filteredCustomers.length; // Total de itens
        const start = (page - 1) * limit;
        const end = start + limit;

        const paginatedCustomers = filteredCustomers.slice(start, end);

        return {
          customers: paginatedCustomers,
          meta: {
            total, // Total de itens
            page,
            perPage: limit,
            totalPages: Math.ceil(total / limit),
          },
        };
      });

      this.post("/new-customers", (_schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { id: Math.random(), ...attrs };
      });

      /**
       * Créditos
       */
      this.get("/credits", (_schema, request: any) => {
        const page = parseInt(request.queryParams._page, 10) || 1; // Página atual
        const limit = parseInt(request.queryParams._limit, 10) || 5; // Itens por página

        const total = credits.length; // Total de itens
        const start = (page - 1) * limit;
        const end = start + limit;

        const paginatedCredits = credits.slice(start, end);

        return {
          credits: paginatedCredits,
          meta: {
            total, // Total de itens
            page,
            perPage: limit,
            totalPages: Math.ceil(total / limit),
          },
        };
      });
    },
  });
}
