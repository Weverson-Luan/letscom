/**
 * IMPORTS
 */

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

import App from "./app.tsx";

import { makeServer } from "./data/lib/miraje-js/server.ts";

if (import.meta.env.VITE_ENV === "homologacao") {
  makeServer();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer autoClose={4000} position="top-right" />
  </StrictMode>
);
