import {
  CircleArrowRight,
  ChevronDown,
  Download,
  Truck,
  Users,
  CheckCircle,
  Search,
  DollarSign,
  CreditCard,
  Clock1,
  ChartColumn,
  LogOut,
} from "lucide-react";
import { useState } from "react";

import Image from "../../../common/assets/png/logo-let-scom.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useStoreZustandUserAuth } from "../../../store-zustand/user-auth";

function Sidbar() {
  const { user, setUser } = useStoreZustandUserAuth();
  const router = useNavigate();
  const location = useLocation();

  // Pega o nome da rota atual (pathname)
  const currentRoute = location.pathname;

  const [openSidbar, setOpenSidbar] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const menus = [
    {
      id: 1,
      title: "Baixar Carga",
      activity: true,
      link: "/",
      icon: <Download className="size-4 text-white duration-500" />,
    },
    {
      id: 2,
      title: "Expedição",
      activity: false,
      link: "/expedition",
      icon: <Truck className="size-4 text-white duration-500" />,
    },
    {
      id: 3,
      title: "Gerenciar clientes",
      spacing: false,
      link: "/manage-client",
      icon: <Users className="size-4 text-white duration-500" />,
    },
    {
      id: 4,
      title: "Pedido finalizados",
      subMenu: false,
      link: "/orders-completed",
      icon: <CheckCircle className="size-4 text-white duration-500" />,
      subMenuItems: [
        { id: 1, title: "Projeto 1", link: "test" },
        { id: 2, title: "Projeto 2", link: "test" },
        { id: 3, title: "Projeto 3", link: "test" },
      ],
    },
    {
      id: 5,
      title: "Pesquisar remessa",
      link: "/search-shipment",
      icon: <Search className="size-4 text-white duration-500" />,
    },
    {
      id: 6,
      title: "Gerenciar créditos",
      link: "/manage-credits",
      icon: <DollarSign className="size-4 text-white duration-500" />,
    },
    // { id: 9, title: "Sair app", spacing: false, icon: <LogOut className="size-4 text-white duration-500" /> },
  ];

  const menusClient = [
    {
      id: 1,
      title: "Cartões PVC",
      activity: true,
      spacing: false,
      link: "/",
      icon: <CreditCard className="size-4 text-white duration-500" />,
    },
    {
      id: 2,
      title: "Remessas em andamento",
      activity: false,
      subMenu: false,
      subMenuItems: [
        { id: 1, title: "Projeto 1", link: "test" },
        { id: 2, title: "Projeto 2", link: "test" },
        { id: 3, title: "Projeto 3", link: "test" },
      ],
      link: "/shipments-in-progress",
      icon: <Clock1 className="size-4 text-white duration-500" />,
    },
    {
      id: 3,
      title: "Histróricos de remessas",
      activity: false,
      spacing: false,
      link: "/shipments-history",
      icon: <ChartColumn className="size-4 text-white duration-500" />,
    },
    {
      id: 4,
      title: "Pesquisar solicitações",
      activity: false,
      spacing: false,
      link: "/search-requests",
      icon: <Search className="size-4 text-white duration-500" />,
    },
  ];

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu((prev) => (prev === id ? null : id));
  };

  const handleNavigation = (route: string) => {
    router(`${route}`);
  };

  const handleLogout = (route: string) => {
    localStorage.removeItem("@token");
    setUser(null);
    window.location.reload();
  };

  return (
    <div
      className={`bg-gray-custom900 p-5 pt-8 ${
        openSidbar ? "w-72" : "w-20"
      } duration-500 relative`}
    >
      <CircleArrowRight
        className={`size-6 bg-white text-blue-900 absolute -right-2 top-9 rounded-full border border-dark-purple cursor-pointer ${
          openSidbar ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setOpenSidbar(!openSidbar)}
      />

      {/* HEADER */}
      <div className="w-full flex items-center justify-center h-10 mb-8 mt-8">
        <img
          src={Image}
          className={`${!openSidbar && "w-10 h-10 duration-700"} `}
          alt="logo"
        />
      </div>

      {/* MENU */}
      <ul className="pt-2">
        {user?.role === "cliente" ? (
          <>
            {menusClient.map((menu) => (
              <div key={menu.id}>
                <li
                  onClick={() => handleNavigation(menu.link)}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                    openSidbar ? "w-full" : "w-8"
                  } ${
                    menu.link === currentRoute && "bg-[#363740]"
                  } hover:bg-light-white rounded-md  ${
                    menu.spacing ? "absolute" : "mt-2"
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
                        onClick={() => console.log(subMenuItem.link)}
                      >
                        {subMenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            {menus.map((menu) => (
              <div key={menu.id}>
                <li
                  onClick={() => handleNavigation(menu.link)}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                    openSidbar ? "w-full" : "w-8"
                  } ${
                    menu.link === currentRoute && "bg-[#363740]"
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
                        onClick={() => console.log(subMenuItem.link)}
                      >
                        {subMenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </>
        )}
      </ul>

      <div className="absolute bottom-10 cursor-pointer">
        <li
          onClick={() => handleLogout("/signin")}
          className={`text-gray-300 text-sm flex items-centcursor-pointer p-2 hover:bg-light-white rounded-md ${
            openSidbar ? "w-full" : "w-8"
          }`}
        >
          <span className="text-2xl block float-left">
            <LogOut className="size-4 text-white duration-500" />
          </span>
          <span
            className={`text-base font-semibold flex-1 ${
              !openSidbar && "hidden"
            }`}
          >
            Sair
          </span>
        </li>
      </div>
    </div>
  );
}

export { Sidbar };
