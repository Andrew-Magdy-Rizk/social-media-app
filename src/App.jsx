import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import AuthContaxtProvider from "./context/AuthContaxtProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClientConfig = new QueryClient();

export default function App() {
  return (
    <>

      <QueryClientProvider client={queryClientConfig}>
        <AuthContaxtProvider>
            <HeroUIProvider>
              <ToastProvider placement="top-center" />
              <RouterProvider router={browserRouter} />
            </HeroUIProvider>
        </AuthContaxtProvider>
      </QueryClientProvider>
    </>
  )
}
