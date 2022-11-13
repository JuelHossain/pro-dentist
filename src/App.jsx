import "react-photo-view/dist/react-photo-view.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppHeader from "./components/header/Header";
import AllContextProvider from "./components/shared/AllContextProvider";
import AllModal from "./components/shared/AllModal";

export default function App() {
  return (
    <AllContextProvider>
      <div className="min-h-screen flex justify-between flex-col">
        <AppHeader />
        <div className=" flex flex-col mt-[8vh]">
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
