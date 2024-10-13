/**
 * IMPORTS
 */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import { DowloadLoad } from "../pages/download-load";
import { Expedition } from "../pages/expedition";
import { ManageClient } from "../pages/manage-client";
import { ManageCredits } from "../pages/manage-credits";
import { OrdersCompleted } from "../pages/orders-completed";
import { SearchShipment } from "../pages/search-shipment";
import { SignIn } from "../pages/signin";
import { Sidbar } from "../../presentation/components/sidbar/sidbar";

import { useStoreZustandUserAuth } from "../../store-zustand/user-auth";

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

// Rotas autenticadas
const routerAuth = createBrowserRouter([
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
        path: "/orders-completed",
        element: <OrdersCompleted />,
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

// Rotas não autenticadas
const routerOpen = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

function AppRoutes() {
  const { isAuthenticated } = useStoreZustandUserAuth();

  return <RouterProvider router={isAuthenticated ? routerAuth : routerOpen} />;
}

/**
 * EXPORTS
 */
export { AppRoutes };
