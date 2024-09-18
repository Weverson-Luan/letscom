/**
 * IMPORTS
 */

import { Header } from "../../components/header/header";
import { Options } from "../../components/options/options";
import { Search } from "../../components/search/search";
import { SubNavs } from "../../components/sub-navs";
import { Table } from "../../components/table/table";

const DowloadLoad = () => {
  return (
    <div>
      {/**HEADER */}
      <div className="w-full mb-4">
        <Header />
      </div>

      {/**SEARCH */}
      <div className="w-full mb-4">
        <Search />
      </div>

      {/**OPTIONS */}
      <div className="w-full flex items-center justify-between mb-4 bg-gray-100">
        <Options title="Total Vendas" value="R$650,00" />
        <Options title="Pedidos" value="R$560,00" />
        <Options title="Clientes" value="50" />
        <Options title="Total Vendas" value="R$560,00" />
      </div>

      {/**SUB-NAVS */}
      <div className="w-full mb-4">
        <SubNavs />
      </div>

      {/**TABLE */}
      <div className="w-full">
        <Table />
      </div>
    </div>
  );
};

/**
 * EXPORTS
 */
export { DowloadLoad };
