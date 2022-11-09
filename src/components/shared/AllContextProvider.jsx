import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";

export default function AllContextProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}
