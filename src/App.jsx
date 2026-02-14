import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import AuthContaxtProvider from "./context/authContaxtProvider";
import UserContaxtProvider from "./context/userContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClientConfig = new QueryClient();

export default function App() {
  return (
    <>

      <QueryClientProvider client={queryClientConfig}>
        <AuthContaxtProvider>
          <UserContaxtProvider>
            <HeroUIProvider>
              <ToastProvider placement="top-center" />
              <RouterProvider router={browserRouter} />
            </HeroUIProvider>
          </UserContaxtProvider>
        </AuthContaxtProvider>
      </QueryClientProvider>
    </>
  )
}
