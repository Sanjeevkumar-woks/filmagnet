"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./Header";
import Hero from "./Hero";
import Movies from "./Movies";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Hero />
        <Movies />
      </QueryClientProvider>
    </>
  );
}
