import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";

export default function AllContextProvider({ children }) {
  return (
    <AuthProvider>
      <HeaderProvider>
        <ModalProvider>{children}</ModalProvider>
      </HeaderProvider>
    </AuthProvider>
  );
}
