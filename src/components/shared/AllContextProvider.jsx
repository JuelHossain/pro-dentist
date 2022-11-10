import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { ServiceProvider } from "../../context/serviceContext";
import useAxiosSetup from "../../hooks/auth/useAxiosSetup";

export default function AllContextProvider({ children }) {
  const queryClient = new QueryClient();
  useAxiosSetup();
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>
          <HeaderProvider>
            <ServiceProvider>
            {children}
            </ServiceProvider>
          </HeaderProvider>
        </AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}
