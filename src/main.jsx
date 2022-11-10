import React from "react";
import ReactDOM from "react-dom/client";
import { TokenProvider } from "./context/tokenContext";
import "./index.css";
import Mantine from "./Mantine";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <Mantine />
  </TokenProvider>,
);
