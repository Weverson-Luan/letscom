"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30, // 30s
    },
  },
});

type Providers = {
  children: React.ReactNode;
};
export function Providers({ children }: Providers) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
