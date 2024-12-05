/**
 * IMPORTS
 */
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import { SignIn } from "../pages/signin";

import { DowloadLoad } from "../pages/admin/download-load";
import { Expedition } from "../pages/admin/expedition";
import { ManageClient } from "../pages/admin/manage-client";
import { ManageCredits } from "../pages/admin/manage-credits";
import { SearchShipment } from "../pages/admin/search-shipment";

// components-main
import { Sidebar } from "../../presentation/components/sidbar/sidbar";

// clients
import { ListPvcCardPage } from "../pages/client/list-pvc-card";
import { ShippingHistoryPages } from "../pages/client/shipping-history";

import { useStoreZustandUserAuth } from "../../store-zustand/user-auth";
import { ShippingInProgressPages } from "../pages/client/shipment-in-progress";
import { ShippingSearchRequestPages } from "../pages/client/search-requests";
import { Menu } from "lucide-react";
import MobileMenu from "../../presentation/components/sidebar-mobile/sidebar-mobile";

// Layout para as rotas autenticadas
function AuthenticatedLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-custom900">
      {/* Sidebar para telas maiores */}
      <div className="hidden md:block min-h-screen">
        <Sidebar />
      </div>

      {/* Menu Mobile */}
      <div className=" block md:hidden fixed top-0 left-0 w-full bg-gray-custom900 p-4 flex items-center justify-between">
        {/* Botão de abrir o menu */}
        <Menu
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Drawer do menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full z-50">
          <MobileMenu
            closeMenu={() => setIsMobileMenuOpen(false)}
            isOpen={isMobileMenuOpen}
          />
        </div>
      )}

      <div className="flex-1 bg-background p-4 mt-12 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}

// Rotas autenticadas (Admin)
const adminRouterAuth = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      {
        path: "/",
        element: <DowloadLoad />,
      },
      {
        path: "/expedition",
        element: <Expedition />,
      },
      {
        path: "/manage-client",
        element: <ManageClient />,
      },

      {
        path: "/search-shipment",
        element: <SearchShipment />,
      },
      {
        path: "/manage-credits",
        element: <ManageCredits />,
      },
    ],
  },
]);

// Rotas autenticadas (Clientes)
const clientRouterAuth = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      {
        path: "/",
        element: <ListPvcCardPage />,
      },
      {
        path: "/shipments-history",
        element: <ShippingHistoryPages />,
      },
      {
        path: "/shipments-in-progress",
        element: <ShippingInProgressPages />,
      },
      {
        path: "/search-requests",
        element: <ShippingSearchRequestPages />,
      },
    ],
  },
]);

// Rotas não autenticadas
const routerOpen = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

function AppRoutes() {
  const { isAuthenticated, getUserIsAuthenticated, user } =
    useStoreZustandUserAuth();

  const role = user?.role as string;

  const appRoutes = role === "admin" ? adminRouterAuth : clientRouterAuth;

  useEffect(() => {
    getUserIsAuthenticated();
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <RouterProvider router={isAuthenticated ? appRoutes : routerOpen} />
      ) : (
        <SignIn />
      )}
    </div>
  );
}

/**
 * EXPORTS
 */
export { AppRoutes };
