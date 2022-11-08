import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ErrorPage from "./pages/errors/ErrorPage";
import Home from "./pages/home/Home";

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
    ],
  },
]);
export default router;
