import {
  CircleArrowRight,
  Truck,
  Users,
  CheckCircle,
  Search,
  DollarSign,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../../../common/assets/png/logo-let-scom.png";

function MobileMenu({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRoute = location.pathname;

  const menus = [
    { id: 1, title: "Pedidos", link: "/", icon: <CheckCircle /> },
    { id: 2, title: "Expedição", link: "/expedition", icon: <Truck /> },
    {
      id: 3,
      title: "Gerenciar clientes",
      link: "/manage-client",
      icon: <Users />,
    },
    {
      id: 4,
      title: "Pesquisar remessa",
      link: "/search-shipment",
      icon: <Search />,
    },
    {
      id: 5,
      title: "Gerenciar créditos",
      link: "/manage-credits",
      icon: <DollarSign />,
    },
  ];

  const handleNavigation = (route: string) => {
    navigate(route);
    closeMenu(); // Fecha o menu ao navegar
  };

  const handleLogout = () => {
    localStorage.removeItem("@token");
    navigate("/login");
    closeMenu();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-custom900 z-50 transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header do Menu */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <img src={Image} alt="Logo" className="w-16 h-16" />
        <CircleArrowRight
          className="text-white text-2xl cursor-pointer"
          onClick={closeMenu}
        />
      </div>

      {/* Lista de Menus */}
      <ul className="mt-4">
        {menus.map((menu) => (
          <li
            key={menu.id}
            onClick={() => handleNavigation(menu.link)}
            className={`flex items-center gap-x-4 p-3 text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer ${
              currentRoute === menu.link && "bg-gray-800"
            }`}
          >
            <span className="text-xl">{menu.icon}</span>
            <span className="text-base">{menu.title}</span>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="absolute bottom-4 w-full px-4">
        <li
          onClick={handleLogout}
          className="flex items-center gap-x-4 p-3 text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer"
        >
          <LogOut />
          <span className="text-base">Sair</span>
        </li>
      </div>
    </div>
  );
}

export default MobileMenu;
