/**
 * IMPORTS
 */

import { ChevronRight, ChevronUp, HardDriveDownload } from "lucide-react";

const Table = () => {
  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Baixar Cargas</h1>
        <a href="#" className="text-blue-500 ml-4">
          Faça sua busca
        </a>
        <div className="flex flex-1 ml-4">
          <input
            type="text"
            placeholder="Número de remessa, cliente ou tecnologia"
            className="border rounded-full pl-4 h-12 w-1/2"
          />
        </div>
      </div>
      <table className="min-w-full bg-white border rounded-lg border-gray-300">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="p-4 text-left">
              <input type="checkbox" />
            </th>
            <th className="p-4 text-left">Clientes</th>
            <th className="p-4 text-left">Remessa</th>
            <th className="p-4 text-left">Situação</th>
            <th className="p-4 text-left">Solicitante</th>
            <th className="p-4 text-left">Tecnologia</th>
            <th className="p-4 text-left">Baixar</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              cliente: "CONCERT TECHN...",
              remessa: "31549",
              situacao: "Pronto para imprimir",
              solicitante: "Gustavo Miranda",
              tecnologia: "400",
            },
            {
              cliente: "WLTECH",
              remessa: "31541",
              situacao: "Laminado",
              solicitante: "Lucas Silva",
              tecnologia: "100",
            },
            {
              cliente: "Refund",
              remessa: "31542",
              situacao: "Impresso",
              solicitante: "Marcelo Lopes",
              tecnologia: "55",
            },
            {
              cliente: "EXPRESSO AGA",
              remessa: "31544",
              situacao: "Salvo",
              solicitante: "Jessica Arantes",
              tecnologia: "33",
            },
            {
              cliente: "Terms reduction",
              remessa: "31545",
              situacao: "Pronto",
              solicitante: "Fabio Morais Sousa",
              tecnologia: "360",
            },
            {
              cliente: "INCORPE - MG",
              remessa: "31546",
              situacao: "Salvo",
              solicitante: "Jessica Arantes",
              tecnologia: "1520",
            },
            {
              cliente: "Invest reduction",
              remessa: "31547",
              situacao: "Pronto para imprimir",
              solicitante: "Jessica Arantes",
              tecnologia: "265",
            },
            {
              cliente: "TRANSPORTES URGENTES",
              remessa: "31548",
              situacao: "Laminado",
              solicitante: "Pedro José",
              tecnologia: "320",
            },
            {
              cliente: "Invest extension",
              remessa: "31549",
              situacao: "Impresso",
              solicitante: "Gustavo Miranda",
              tecnologia: "1241",
            },
            {
              cliente: "PROTECAO VEICULAR",
              remessa: "31543",
              situacao: "Impresso",
              solicitante: "Gustavo Miranda",
              tecnologia: "01",
            },
          ].map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <input type="checkbox" />
              </td>
              <td className="p-4">{item.cliente}</td>
              <td className="p-4">{item.remessa}</td>
              <td className="p-4">{item.situacao}</td>
              <td className="p-4">{item.solicitante}</td>
              <td className="p-4">{item.tecnologia}</td>
              <td className="p-4">
                <HardDriveDownload className="size-4 text-blue-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4 w-full ">
        <div className="text-gray-600 flex justify-between items-center w-56">
          <span>Resultados por página</span>

          <button
            onClick={() => alert("paginação")}
            className="flex items-center justify-between w-12 h-8 hover:text-blue-500 cursor-pointer"
          >
            <span>10</span>
            <ChevronUp className="size-4" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="px-2 py-1 border rounded-lg mx-1">1</button>
          <button className="px-2 py-1 border rounded-lg mx-1">2</button>
          <button className="px-2 py-1 border rounded-lg mx-1">3</button>
          <span className="px-2 py-1">...</span>
          <button className="px-2 py-1 border rounded-lg mx-1">10</button>
          <button className="px-2 py-1 border rounded-lg mx-1">11</button>
          <button className="px-2 py-1 border rounded-lg mx-1">12</button>
        </div>
        <div className="text-gray-600 flex items-center justify-between w-36 h-8 hover:text-blue-500 cursor-pointer">
          <span className="text-sm"> Próxima página</span>
          <ChevronRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

/**
 * EXPORTS
 */
export { Table };
