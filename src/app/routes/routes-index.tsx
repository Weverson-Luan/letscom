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

const router = createBrowserRouter([
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

function AppRoutes() {
  return <RouterProvider router={router} />;
}

/**
 * EXPORTS
 */
export { AppRoutes };
