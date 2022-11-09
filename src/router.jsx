import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/Blog";

import ErrorPage from "./pages/errors/ErrorPage";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
