/**
 * IMPORTS
 */

import { AppRoutes } from "./app/routes/routes-index";
import { Providers } from "./context/react-query/provider-query";

function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

/**
 * EXPORTS
 */
export default App;
