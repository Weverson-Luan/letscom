import {
  CircleArrowRight,
  ChevronDown,
  Download,
  Truck,
  Users,
  CheckCircle,
  Search,
  DollarSign,
  LogOut,
} from "lucide-react";
import { useState } from "react";

import Image from "../../common/assets/png/logo-let-scom.png";

function Sidbar() {
  const [openSidbar, setOpenSidbar] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const menus = [
    {
      id: 1,
      title: "Baixar Carga",
      activity: true,
      icon: <Download className="size-4 text-white duration-500" />,
    },
    {
      id: 2,
      title: "Expedição",
      icon: <Truck className="size-4 text-white duration-500" />,
    },
    {
      id: 3,
      title: "Gerenciar clientes",
      spacing: false,
      icon: <Users className="size-4 text-white duration-500" />,
    },
    {
      id: 4,
      title: "Pedido finalizados",
      subMenu: false,
      icon: <CheckCircle className="size-4 text-white duration-500" />,
      subMenuItems: [
        { id: 1, title: "Projeto 1" },
        { id: 2, title: "Projeto 2" },
        { id: 3, title: "Projeto 3" },
      ],
    },
    {
      id: 5,
      title: "Pesquisar remessa",
      icon: <Search className="size-4 text-white duration-500" />,
    },
    {
      id: 6,
      title: "Gerenciar créditos",
      icon: <DollarSign className="size-4 text-white duration-500" />,
    },
    // { id: 9, title: "Sair app", spacing: false, icon: <LogOut className="size-4 text-white duration-500" /> },
  ];

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`bg-gray-custom900 p-5 pt-8 ${
        openSidbar ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <CircleArrowRight
        className={`size-6 bg-white text-blue-900 absolute -right-2 top-9 rounded-full border border-dark-purple cursor-pointer ${
          openSidbar ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setOpenSidbar(!openSidbar)}
      />

      {/* HEADER */}
      <div className="w-full flex items-center justify-center h-10 mb-8 mt-8">
        <img src={Image} className="w-40 h-28" alt="logo" />
      </div>

      {/* MENU */}
      <ul className="pt-2">
        {menus.map((menu) => (
          <div key={menu.id}>
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                menu.activity && "bg-[#363740]"
              } hover:bg-light-white rounded-md ${
                menu.spacing ? "mt-9" : "mt-2"
              }`}
            >
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span
                className={`text-base font-semibold flex-1 ${
                  !openSidbar && "hidden"
                }`}
              >
                {menu.title}
              </span>

              {menu.subMenu && openSidbar && (
                <ChevronDown
                  className={`size-6 text-white duration-500 ${
                    openSubMenu === menu.id && "rotate-180"
                  }`}
                  onClick={() => toggleSubMenu(menu.id)}
                />
              )}
            </li>

            {menu.subMenu && openSubMenu === menu.id && openSidbar && (
              <ul className="ml-4">
                {menu.subMenuItems?.map((subMenuItem) => (
                  <li
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ml-4"
                    key={`${menu.id}-${subMenuItem.id}`}
                  >
                    {subMenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export { Sidbar };
