import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppHeader from "./components/header/Header";
import AllContextProvider from "./components/shared/AllContextProvider";
import AllModal from "./components/shared/AllModal";

export default function App() {
  return (
    <AllContextProvider>
      <div className="min-h-screen flex justify-between flex-col">
        <div className="container mx-auto px-4 flex flex-col ">
          <AppHeader />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
        <AllModal />
      </div>
    </AllContextProvider>
  );
}
