/**
 * IMPORTS
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { DowloadLoad } from "../pages/download-load";
import { Expedition } from "../pages/expedition";

import { ManageClient } from "../pages/manage-client";
import { ManageCredits } from "../pages/manage-credits";

import { OrdersCompleted } from "../pages/orders-completed";
import { SearchShipment } from "../pages/search-shipment";
import { SignIn } from "../pages/signin";
import { Sidbar } from "../components/sidbar/sidbar";

const routerAuth = createBrowserRouter([
  {
    path: "/",
    element: <DowloadLoad />,
  },
  {
    path: "/expedition/:id",
    element: <Expedition />,
  },
  {
    path: "/manage-credits",
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
]);

const routerOpen = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

function AppRoutes() {
  const token = false;
  return (
    <>
      {token ? (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidbar />

          {/* Conteúdo à direita */}
          <div className="flex-1 bg-neutral-custom500 p-10">
            <RouterProvider router={routerAuth} />
          </div>
        </div>
      ) : (
        <RouterProvider router={routerOpen} />
      )}
    </>
  );
}

/**
 * EXPORTS
 */
export { AppRoutes };
