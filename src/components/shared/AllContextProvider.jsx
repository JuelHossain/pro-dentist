import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
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
      <PhotoProvider>
        <ModalProvider>
          <AuthProvider>
            <HeaderProvider>
              <ServiceProvider>{children}</ServiceProvider>
            </HeaderProvider>
          </AuthProvider>
        </ModalProvider>
      </PhotoProvider>
    </QueryClientProvider>
  );
}
