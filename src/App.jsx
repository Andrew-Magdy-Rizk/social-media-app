import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContaxtProvider from "./context/AuthContaxtProvider";
import UserInfoContaxtProvider from "./context/UserInfoContaxtProvider";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "./components/offline/OfflinePage";


const queryClientConfig = new QueryClient();

export default function App() {
  return (
    <>
      <Online>
        <QueryClientProvider client={queryClientConfig}>
          <AuthContaxtProvider>
            <UserInfoContaxtProvider>
              <HeroUIProvider>
                <ToastProvider placement="top-center" />
                <RouterProvider router={browserRouter} />
              </HeroUIProvider>
            </UserInfoContaxtProvider>
          </AuthContaxtProvider>
        </QueryClientProvider>
      </Online>
      
      <Offline>
        < OfflinePage />
      </Offline>
    </>
  )
}
