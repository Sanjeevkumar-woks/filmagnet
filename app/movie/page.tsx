import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});
export default function Movie() {



    return (<>
        <QueryClientProvider client={queryClient}>

        </QueryClientProvider>

    </>)
}