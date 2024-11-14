/**
 * IMPORTS
 */
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import { SignIn } from "../pages/signin";

import { DowloadLoad } from "../pages/admin/download-load";
import { Expedition } from "../pages/admin/expedition";
import { ManageClient } from "../pages/admin/manage-client";
import { ManageCredits } from "../pages/admin/manage-credits";
import { SearchShipment } from "../pages/admin/search-shipment";

// components-main
import { Sidbar } from "../../presentation/components/sidbar/sidbar";

// clients
import { ListPvcCardPage } from "../pages/client/list-pvc-card";
import { ShippingHistoryPages } from "../pages/client/shipping-history";

import { useStoreZustandUserAuth } from "../../store-zustand/user-auth";
import { ShippingInProgressPages } from "../pages/client/shipment-in-progress";
import { ShippingSearchRequestPages } from "../pages/client/search-requests";

// Layout para as rotas autenticadas
function AuthenticatedLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidbar />
      <div className="flex-1 bg-background p-10">
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
    <>
      {isAuthenticated ? (
        <RouterProvider router={isAuthenticated ? appRoutes : routerOpen} />
      ) : (
        <SignIn />
      )}
    </>
  );
}

/**
 * EXPORTS
 */
export { AppRoutes };
