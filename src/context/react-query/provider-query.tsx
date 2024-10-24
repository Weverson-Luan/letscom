"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Providers = {
  children: React.ReactNode;
};
export function Providers({ children }: Providers) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
