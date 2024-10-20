/**
 * IMPORTS
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./app/routes/routes-index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

/**
 * EXPORTS
 */
export default App;
