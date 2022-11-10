import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { ServiceProvider } from "../../context/serviceContext";

export default function AllContextProvider({ children }) {
  return (
    <ModalProvider>
      <PhotoProvider>
        <AuthProvider>
          <HeaderProvider>
            <ServiceProvider>{children}</ServiceProvider>
          </HeaderProvider>
        </AuthProvider>
      </PhotoProvider>
    </ModalProvider>
  );
}
