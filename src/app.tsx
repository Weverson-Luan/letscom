/**
 * IMPORTS
 */

import { Sidbar } from "./core/components/sidbar/sidbar";
import { AppRoutes } from "./core/routes/routes-index";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidbar />

      {/* Conteúdo à direita */}
      <div className="flex-1 bg-neutral-custom500 p-10">
        <AppRoutes />
      </div>
    </div>
  );
}

/**
 * EXPORTS
 */
export default App;
